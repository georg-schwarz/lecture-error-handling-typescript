import { parseFile } from "./01-parse";

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
