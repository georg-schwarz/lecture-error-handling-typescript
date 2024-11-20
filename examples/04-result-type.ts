import { parseFile } from "./04-parse.js";

function run(filePath: string) {
  const result = parseFile(filePath);

  if (!result.isSuccess) { // works for any result type now!
    console.error(result.error);
    return;
  }

  console.log(`Read file: ${result.data.length}`);
  // Problem: No differentiation between recoverable and unrecoverable errors
}

run("./file.txt");
run("./no-file.txt");
run("./no-access.txt"); // <<< new!

console.log("Other stuff happening that might make things worse after unrecoverable error");
