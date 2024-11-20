import { parseFile } from "./02-parse";

function run(filePath: string) {
  try {
    const fileContent = parseFile(filePath); // See documentation by hovering over parseFile
    console.log("Success");
  } catch (err) {
    // Problem: type unsafe: err could be anything (also a string)
    console.error(err instanceof Error ? err.message : 'Unknown error');
  }
}

run("my-file.txt");
