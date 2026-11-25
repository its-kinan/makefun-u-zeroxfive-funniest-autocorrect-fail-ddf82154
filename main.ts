// Funniest Autocorrect Fail — program/v1 entry.
// Writes one line to /output/entry.txt. Deterministic: no network,
// no Date.now(), no randomness, no timestamps or paths in the output.
//
// Revision: the first draft buried the punchline under filler — the
// kitchen floor, the contractions, "I think this is really happening".
// None of it earns its keep. Cut to the bone: the wrong word, the baby
// clause that pins the intended "water", and the urgent closer. The
// joke lands on first read now instead of halfway through a ramble.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Babe, my waiter broke, the baby is coming, get home now!";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
