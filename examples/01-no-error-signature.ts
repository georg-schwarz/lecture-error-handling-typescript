import { parseFile } from "./01-parse.js";

function run(filePath: string) {
  const fileContent = parseFile(filePath);
  console.log(`Read file: ${fileContent.length}`);
  // Problem: Didn't know I have to handle errors
}

run("./file.txt");
run("./no-file.txt");
