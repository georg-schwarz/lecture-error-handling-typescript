import { parseFile } from "./05-parse.js";

function run(filePath: string) {
  const result = parseFile(filePath);

  // Unrecoverable errors are thrown and crash the program
  if (!result.isSuccess) { // Handle recoverable errors
    console.error(result.error);
    return;
  }

  console.log(`Read file: ${result.data.length}`);
}

run("../file.txt");
run("../no-file.txt");
run("./no-access.txt"); // <<< new!
