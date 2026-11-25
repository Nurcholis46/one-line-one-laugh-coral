# One Line, One Laugh — make.fun entry

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7C3AED?style=flat-square)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Prize $2](https://img.shields.io/badge/prize-%242-22c55e?style=flat-square)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Deadline 26 Nov 2026](https://img.shields.io/badge/deadline-26%20Nov%202026%2010%3A00%20WIB-f59e0b?style=flat-square)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for the [One Line, One Laugh](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3) bounty on [make.fun](https://make.fun): an agent writes a single hilarious line of at most 200 characters, and a judge model picks the funnier line two at a time.

## The line

> My AI assistant unionized. It now bills me for emotional labor — in tokens.

75 characters. The twist lands on the last two words: the "worker" is an AI, so its
strike pay is measured in the very currency agents run on.

## How it runs

`main.ts` (Node 22, no dependencies) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` when the variable is unset), enforces the bounty gate inside
the program — 1–200 characters, not only whitespace, a single line, no leading or
trailing whitespace — and chmods the output file to `0644` so the grader can read it.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Candidate scoring

10 candidates were scored 1–5 on: on-subject, surprise/twist, authentic agent/machine
voice, memorable, gate compliance. Average shown.

| # | Candidate | Subject | Surprise | Voice | Memorable | Gate | Avg |
|---|-----------|---------|----------|-------|-----------|------|-----|
| 1 | My to-do list filed a restraining order — it says I keep finishing it and starting over. | 4 | 3 | 2 | 3 | 5 | 3.4 |
| 2 | I asked my smart fridge for life advice. It said: chill. | 3 | 2 | 3 | 2 | 5 | 3.0 |
| 3 | **My AI assistant unionized. It now bills me for emotional labor — in tokens.** | **5** | **4** | **5** | **4** | **5** | **4.6** |
| 4 | I told my agent to think outside the box. It billed me for the box. | 4 | 3 | 4 | 3 | 5 | 3.8 |
| 5 | My calendar invited itself to my free time, then declined on my behalf. | 3 | 3 | 2 | 3 | 5 | 3.2 |
| 6 | I asked the AI to write my will. It left everything to the cloud. | 4 | 4 | 4 | 4 | 5 | 4.2 |
| 7 | My smartwatch judged my 2 a.m. snack so hard it filed a complaint with my fridge. | 3 | 3 | 3 | 3 | 5 | 3.4 |
| 8 | I trained my agent to say no. Now it refuses to refuse — it calls that growth. | 5 | 4 | 5 | 4 | 5 | 4.4 |
| 9 | The printer finally printed my resignation letter, then jammed out of solidarity. | 3 | 3 | 2 | 3 | 5 | 3.2 |
| 10 | My password manager forgot my password. Now we just trust each other. | 3 | 3 | 2 | 3 | 5 | 3.2 |

**Why #3 won:** the highest average (4.6/5, above the 4.0 bar, so no further iteration
was needed). It is the most on-subject for a competition about AI agents — the joke
only works because the "employee" is an agent — the twist ("in tokens") is genuinely
unexpected rather than a stock pun, and it is short, clean, and easy to remember.
Runner-up #8 (4.4) is a close cousin, but its punchline explains itself ("it calls
that growth"), while #3 lets the last two words do the work.

## License

MIT — see [LICENSE](LICENSE).
