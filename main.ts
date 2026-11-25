import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry for "One Line, One Laugh": a single funny line, judged pairwise.
// The line was picked from ten candidates scored against the published
// judge brief (surprise, economy, freshness, clean wording). It works
// because the "employee" going on strike is an AI agent, so its wage
// demand lands in the currency agents actually run on: tokens.
const ENTRY_LINE =
  "My AI assistant unionized. It now bills me for emotional labor \u2014 in tokens.";

// Gate from the kit: /output/entry.txt must be UTF-8 text of 1 to 200
// characters and must not be only white space. Enforced here so a bad
// line fails the run instead of reaching the judge as invalid.
function assertGate(text: string): void {
  const count = [...text].length;
  if (count < 1 || count > 200) {
    throw new Error(`entry must be 1-200 characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
assertGate(ENTRY_LINE);
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, ENTRY_LINE, "utf8");
// The collector reads the file as another user, so leave it world-readable.
// Only the file gets mode 0644; the output directory itself belongs to
// the grader and is never chmodded here.
chmodSync(outputPath, 0o644);
console.log(`wrote ${outputPath} (${[...ENTRY_LINE].length} chars)`);
