import { parseFile } from "./05-parse.js";
import { waitForInput } from "./shared.js";

function run(filePath: string) {
  const result = parseFile(filePath);

  // Unrecoverable errors are thrown and crash the program
  if (!result.isSuccess) { // Handle recoverable errors
    console.error(result.error);
    return;
  }

  console.log(`Read file: ${result.data.length}`);
}

await waitForInput();
run("./file.txt");
await waitForInput();
run("./no-file.txt");
await waitForInput();
run("./no-access.txt"); // <<< new!
