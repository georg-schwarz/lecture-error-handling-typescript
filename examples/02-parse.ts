import fs from "node:fs"

/**
 * Parses a file and returns its content as a string.
 * @param filePath The file path to parse.
 * @returns The file content
 * @throws If the file does not exist, is empty, or cannot be read due to a lack of privileges.
 */
export function parseFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    // Clients can recover from this error by providing a valid file path
    throw new Error(`The file at ${filePath} does not exist.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  if (content.trim() === "") {
    // Clients can recover from this error by providing a path to an non-empty file
    throw new Error(`The file at ${filePath} is empty.`);
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    // Clients cannot recover from this error: server implementation has a bug
    throw new Error(`The file at ${filePath} cannot be read. Contact support.`);
  }

  return content;
}
