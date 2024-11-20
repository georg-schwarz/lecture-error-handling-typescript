import { parseFile } from "./01-parse.js";
import { waitForInput } from "./shared.js";

function run(filePath: string) {
  const fileContent = parseFile(filePath);
  console.log(`Read file: ${fileContent.length}`);
  // Problem: Didn't know I have to handle errors
}

await waitForInput();
run("./file.txt");
await waitForInput();
run("./no-file.txt");
