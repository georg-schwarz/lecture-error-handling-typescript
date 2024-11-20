import rl from "node:readline/promises";

export async function waitForInput(): Promise<void> {
  await rl.createInterface({ input: process.stdin, output: process.stdout }).question("Press Enter to continue");
}