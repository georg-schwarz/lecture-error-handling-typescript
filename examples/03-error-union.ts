import { parseFile } from "./03-parse";

function run(filePath: string) {
  const result = parseFile(filePath);

  if (result instanceof Error) {
    console.error(result.message);
    return;
  }

  console.log("Success");
  // Clients now can distinguish between different errors via the signature (as it is in the return type).
}

run("my-file.txt");
