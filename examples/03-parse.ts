import fs from "node:fs"

export function parseFile(filePath: string): string | Error {
  if (!fs.existsSync(filePath)) {
    // Clients can recover from this error by providing a valid file path
    return new Error(`The file at ${filePath} does not exist.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  if (content.trim() === "") {
    // Clients can recover from this error by providing a path to an non-empty file
    return new Error(`The file at ${filePath} is empty.`);
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    // Clients cannot recover from this error: server implementation has a bug
    return new Error(`The file at ${filePath} cannot be read. Contact support.`);
  }

  return content;
}
