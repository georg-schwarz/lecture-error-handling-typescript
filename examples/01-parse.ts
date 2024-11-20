import fs from "node:fs"

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
