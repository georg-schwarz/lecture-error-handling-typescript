import fs from "node:fs"

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

type ParseError = {
  type: "file-not-found" | "file-corrupt";
  message: string;
}

export function parseFile(filePath: string): Result<string, ParseError> {
  if (!fs.existsSync(filePath)) {
    return failure({
      type: "file-not-found",
      message: `The file at ${filePath} does not exist.`
    });
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    throw Error(`The file at ${filePath} cannot be read. Contact support.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  if (content.startsWith("CORRUPT")) {
    return failure({
      type: "file-corrupt",
      message: `The file at ${filePath} is corrupt.`
    })
  }

  return success(content);
}
