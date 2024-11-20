import { parseFile } from "./03-parse.js";

function run(filePath: string) {
  const result = parseFile(filePath); // We now return errors instead of throwing them

  if (result instanceof Error) { // Problem: instanceof is whacky, only works for classes
    console.error(result.message);
    return;
  }

  console.log(`Read file: ${result.length}`);
}

run("./file.txt");
run("./no-file.txt");
