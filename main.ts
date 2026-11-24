// Everyday Things, Two Lines — entry program.
// Writes exactly two lines to /output/entry.txt:
// line 1 explains a traffic jam to a 10-year-old through one concrete
// analogy; line 2 says honestly what that analogy maps and what it leaves out.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "A traffic jam is like a school hallway after the bell, when a hundred kids in puffy winter coats try to squeeze out through one tiny door at once, so everyone shuffles forward a step, stops, and waits their turn.";

const LINE_2 =
  "The hallway shows why cars pile up and creep instead of flowing, but it leaves out the traffic lights, the crashes, and the drivers who switch lanes to cut in line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE_1 + "\n" + LINE_2 + "\n", "utf8");
