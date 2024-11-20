import { parseFile } from "./04-parse";

function run(filePath: string) {
  const result = parseFile(filePath);

  if (!result.isSuccess) { // works for any result type now!
    console.error(result.error);
    return;
  }

  console.log("Success");
  // Problem: No differentiation between recoverable and unrecoverable errors
}

run("my-file.txt");
