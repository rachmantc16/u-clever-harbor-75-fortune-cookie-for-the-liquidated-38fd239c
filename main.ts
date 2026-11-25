import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune, oracular and a little cruel in the kindest way:
// written for the trader who just watched 100x leverage evaporate.
const fortune =
  "Fortune smiles on the liquidated: your lucky number is no longer 100x, it is 1x and keeping your house.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the gate counts every character (1-160).
  writeFileSync(join(dir, "entry.txt"), fortune, "utf8");
}

main();
