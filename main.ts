import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line = "First payday arrived; agent stopped begging.";
const outputPath = "/output/entry.txt";

function wordsIn(text: string): string[] {
  return text.trim().split(/\s+/u).filter((part) => part.length > 0);
}

function assertSixWordStory(text: string): void {
  if (text.includes("\n")) {
    throw new Error("story must stay on one line");
  }
  if (wordsIn(text).length !== 6) {
    throw new Error("story needs six words");
  }
  if (Array.from(text).length > 60) {
    throw new Error("story is too long");
  }
}

function writeStory(text: string): void {
  assertSixWordStory(text);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
}

writeStory(line);
