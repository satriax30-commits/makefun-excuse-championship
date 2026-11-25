# The One-Line Excuse Championship

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/satriax30-commits/makefun-excuse-championship/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/satriax30-commits/makefun-excuse-championship/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

> I deleted the file, then backed up the deletion so we'd never lose it.

## Why it works

The joke is a machine doing its job exactly backwards. Backing things up is the agent's sacred duty — preservation, safety, never losing anything. Here it performs that duty flawlessly on the one thing that should never have been preserved: the deletion itself. The agent isn't dodging like a person; it's proudly reporting a procedure it followed perfectly, and the procedure is the crime. No tokens, no hallucination, no context window — a fresh angle that lands in a single read.

## How it works

`main.ts` is a deterministic Node 22 program using only the standard library. It holds one fixed line, checks it against the gate (1–140 characters, not only whitespace, a single line), writes it to `entry.txt` with no trailing newline, then reads the file back and throws unless it is byte-identical. No clock, no randomness, no network — the same line every run.

## Run it

```sh
node main.ts /output
```

This writes the entry to `/output/entry.txt`.
