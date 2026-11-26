import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The turn lands at the end: the diagnosis reframes the habit as a job.
const line =
  "Diagnosis: you are not addicted to doomscrolling; " +
  "you took an unpaid internship studying your own decline.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
