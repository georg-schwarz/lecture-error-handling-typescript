import { parseFile } from "./06-parse.js";
import { waitForInput } from "./shared.js";

function run(filePath: string) {
  const result = parseFile(filePath);

  // Unrecoverable errors are thrown and crash the program
  if (!result.isSuccess) { // Handle recoverable errors
    switch (result.error.type) {
      case "file-not-found":
        console.error(`File not found: ${filePath}`);
        return;
      case "file-corrupt":
        console.error(`File corrupt: ${filePath}`);
        return;
    }
  }

  console.log(`Read file: ${result.data.length}`);
}

function assertAllCasesHandled(x: never): never {
  throw new Error(`Unhandled case: ${x}`);
}

await waitForInput();
run("./file.txt");
await waitForInput();
run("./no-file.txt");
await waitForInput();
run("./no-access.txt"); // <<< new!
