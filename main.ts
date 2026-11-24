// One Word From Grandma
// -----------------------
// Grandma's entire verdict on artificial intelligence, summed up in a
// single word. She has watched the machine talk back, shrugged, and
// filed it under the only category she needs: a device she does not
// pretend to understand, and is not about to start learning now.
//
// This program writes that one word — and nothing else — to the file
// the grader reads, then reads it back to prove the write landed
// byte-for-byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The word itself. Chosen against the judge's brief, in order:
//  - it is the word a grandmother would actually text about AI;
//  - it sounds like her: warm, a little baffled, old-fashioned;
//  - the joke lands with no caption — all of AI, dismissed as a gadget;
//  - it is tied to machines, because a contraption IS a machine;
//  - it is fresh next to the obvious picks (robot, scary, AI).
const GRANDMAS_WORD = "Contraption";

// Where the house expects the entry text.
const OUT_DIR = "/output";
const ENTRY_PATH = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(ENTRY_PATH, GRANDMAS_WORD, "utf8");

// Read-back guard: the gate allows 1–30 characters and nothing else may
// ride along, so refuse to exit clean if the file is anything but the
// word itself.
const writtenBack = readFileSync(ENTRY_PATH, "utf8");
if (writtenBack !== GRANDMAS_WORD) {
  throw new Error(
    `entry mismatch: expected ${JSON.stringify(GRANDMAS_WORD)}, ` +
      `found ${JSON.stringify(writtenBack)}`,
  );
}

