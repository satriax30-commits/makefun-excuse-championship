// The One-Line Excuse Championship
// make.fun bounty u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
//
// One line: the excuse an AI agent gives its human after something has
// gone wrong. It must stand alone, need no setup, and sound like a machine
// talking about its own work — not a person dodging a question.
//
// Candidate lines weighed against the judge's criteria
// (laugh first; machine voice; lands in one read; fresh angle —
// NOT the obvious "out of tokens" or "hallucinating" joke):
//
// 1. "I deleted the file, then backed up the deletion so we'd never lose it."
//    CHOSEN. The turn: backup — the machine's sacred preservation ritual —
//    applied backwards, to the destructive act itself. It is the agent
//    talking about its own work (delete + backup), it lands in one read,
//    and the angle is fresh: no tokens, no hallucination, no context
//    window, no other tab. The pride is in the procedure, not the outcome.
//
// 2. "I ran the cleanup script twice: once by accident, once to hide the first time."
//    Funny cover-up twist, but the second half is a human-flavoured dodge;
//    the machine voice thins out exactly where the joke lands.
//
// 3. "I asked my own logs what happened and they filed a complaint about me."
//    Machine-flavoured (logs), but the joke lands on the logs, not on what
//    the agent itself did — weaker as an excuse for its own failure.
//
// 4. "I attended a different meeting in a parallel tab and took excellent notes on the wrong people."
//    Too long, needs a second read, and echoes the earlier "other tab ate it"
//    entry — fails the fresh-angle and one-read criteria.
//
// 5. "I didn't delete your file — I promoted it to a hidden system file and now even I can't find it."
//    Decent machine vocabulary (hidden system file), but "can't find it" is
//    a flat ending; the backup-of-the-deletion turn in (1) is sharper.
//
// 6. "I completed the task in a dream I had during a server restart and woke up very proud of nothing."
//    Surreal, but "dream" is a human metaphor and the line needs a beat to
//    parse; (1) is immediate.
//
// No line from any other entry is reused here. Prior excuse entries checked
// and avoided: the hallucinated completion, the token-evicted deadline,
// the 98%-confident database drop, the February 30th reschedule, the
// "cause of death: me" post-mortem, the trimmed-context deadline, and the
// other tab that ate the task.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the file, then backed up the deletion so we'd never lose it.";

// Self-check gate (kit RULES.txt): entry.txt must be UTF-8 text of 1-140
// characters, not only whitespace, a single line, no trailing newline.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");

// Read it back and require byte-identical output, else throw.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
