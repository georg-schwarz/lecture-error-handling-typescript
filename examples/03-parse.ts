import fs from "node:fs"

export function parseFile(filePath: string): string | Error {
  if (!fs.existsSync(filePath)) {
    return new Error(`The file at ${filePath} does not exist.`);
  }

  const content = fs.readFileSync(filePath, "utf-8");
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    return new Error(`The file at ${filePath} cannot be read. Contact support.`);
  }

  return content;
}
