import { parseFile } from "./04-parse";

function run(filePath: string) {
  const result = parseFile(filePath);

  if (!result.isSuccess) { // works for any success result type now!
    console.error(result.error);
    return;
  }

  console.log("Success");
  // Clients now can distinguish between different errors via the signature (as it is in the return type).
}

run("my-file.txt");
