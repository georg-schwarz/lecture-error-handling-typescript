import fs from "node:fs"

function parseFile(filePath: string): string {
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

function run(filePath: string) {
  try {
    const fileContent = parseFile(filePath);
    console.log("Success");
  } catch (err) {
    // Problem: err could be anything (also a string)
    console.error(err instanceof Error ? err.message : 'Unknown error');
  }
  // Problem: clients cannot distinguish between different errors from the signature (as there is none).
  // So error handling requires looking into the code.
}

run("my-file.txt");