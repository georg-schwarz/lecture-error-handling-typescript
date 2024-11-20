import fs from "node:fs"

/**
 * Parses a file and returns its content as a string.
 * @param filePath The file path to parse.
 * @returns The file content
 * @throws {Error} If the file does not exist, is empty, or cannot be read due to a lack of privileges.
 */
export function parseFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new Error(`The file at ${filePath} does not exist.`);
  }

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    throw new Error(`The file at ${filePath} cannot be read. Contact support.`);
  }
  
  const content = fs.readFileSync(filePath, "utf-8");
  return content;
}
