import fs from "node:fs"

// interface Result<T> {
//   data: T | null;
//   error: Error | null;
// }
// Problem: You always have to check if data or error is null

interface Success<D> {
  isSuccess: true;
  data: D;
}
const success = <D>(data: D): Success<D> => ({ isSuccess: true, data });

interface Failure<E> {
  isSuccess: false;
  error: E;
}
const failure = <E>(error: E): Failure<E> => ({ isSuccess: false, error });

type Result<D, E> = Success<D> | Failure<E>;


export function parseFile(filePath: string): Result<string, string> {
  if (!fs.existsSync(filePath)) {
    // Clients can recover from this error by providing a valid file path
    return failure(`The file at ${filePath} does not exist.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  if (content.trim() === "") {
    // Clients can recover from this error by providing a path to an non-empty file
    return failure(`The file at ${filePath} is empty.`);
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    // Clients cannot recover from this error: server implementation has a bug
    return failure(`The file at ${filePath} cannot be read. Contact support.`);
  }

  return success(content);
}
