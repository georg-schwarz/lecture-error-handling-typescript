import { parseFile } from "./02-parse";

function run(filePath: string) {
  try {
    const fileContent = parseFile(filePath);
    console.log("Success");
  } catch (err) {
    // Problem: err could be anything (also a string)
    console.error(err instanceof Error ? err.message : 'Unknown error');
  }
  // Problem: clients cannot distinguish between different errors from the signature (as there is none).
}

run("my-file.txt");
