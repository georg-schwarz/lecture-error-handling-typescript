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
    return failure(`The file at ${filePath} does not exist.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    return failure(`The file at ${filePath} cannot be read. Contact support.`);
  }

  return success(content);
}
