import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one funny line for the "One Line, One Laugh" bounty.
// Chosen after scoring 10 candidates on the judge brief's criteria
// (surprise, economy, freshness, clean wording) — see README.md.
const LINE =
  "My AI assistant unionized. It now bills me for emotional labor \u2014 in tokens.";

const MAX_CHARS = 200;

// The bounty gate, enforced here before anything is written:
// /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// and must not be only white space.
function gateCheck(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `gate: entry must be 1-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("gate: entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("gate: entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("gate: entry must not start or end with whitespace");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
gateCheck(LINE);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
console.log(`wrote ${outPath} (${[...LINE].length} chars)`);
