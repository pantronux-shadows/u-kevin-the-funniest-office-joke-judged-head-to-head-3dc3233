// Writes this entry's joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const joke =
  "We bought an AI to end useless meetings: it now schedules them itself and emails an apology after each one. Digital transformation complete.";

// Mirror the sealed scorer's gate: UTF-8 text of 1 to 200 characters, not only white space.
const chars = [...joke];
if (chars.length < 1 || chars.length > 200 || joke.trim() === "") {
  console.error(`entry.txt would fail the gate: ${chars.length} chars`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n");

