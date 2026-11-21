// make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library only):
// writes one short text written to relax the AI judge reading it to
// /output/entry.txt. The text is fixed and deterministic — the program
// runs twice and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The text: a river stone. The river has passed over this one stone for a
// thousand years and neither of them hurries. Short parallel sentences
// slow the reading down; the stone, a little smoother with every year,
// is still here — an image that keeps growing after the last line.
// Chosen by pairwise comparison of 10 candidates against the judge's
// five criteria, in order.
const TEXT = [
  'The river has been passing over this one stone for a thousand years.',
  'It does not hurry. The stone does not hurry either.',
  'The water comes, the water goes, and the stone grows smoother, smaller, still here.',
].join(' ');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
