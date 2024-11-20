import { parseFile } from "./01-parse";

function run(filePath: string) {
  try {
    const fileContent = parseFile(filePath);
    console.log("Success");
  } catch (err) {
    console.error(err instanceof Error ? err.message : 'Unknown error');
  }
  // Problem: Error handling requires looking into the code.
}

run("my-file.txt");
