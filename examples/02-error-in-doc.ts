import { parseFile } from "./02-parse.js";
import { waitForInput } from "./shared.js";

function run(filePath: string) {
  try {
    const fileContent = parseFile(filePath); // See documentation by hovering over parseFile: I need to handle errors
    console.log(`Read file: ${fileContent.length}`);
  } catch (err) {
    // Problem: I might forget reading the documentation
    // Problem: type unsafe, err could be anything (also a string)
    console.error(err instanceof Error ? err.message : 'Unknown error');
  }
}

await waitForInput();
run("./file.txt");
await waitForInput();
run("./no-file.txt");
