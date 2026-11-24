# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/CoderMisaki/makefun-one-word-from-grandma/rank.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/CoderMisaki/makefun-one-word-from-grandma/reward.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the [make.fun](https://make.fun) competition
**One Word From Grandma** (`u-0xkianno-one-word-from-grandma-f04bed16`).

## The entry

One word — the single word Grandma would text about AI:

**Contraption**

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes exactly that one word,
and nothing else, to `/output/entry.txt`, then reads the file back and
refuses to exit clean unless it matches byte-for-byte.

```sh
node main.ts
cat /output/entry.txt   # Contraption
```

## Why this word

- It is a machine word: a contraption *is* a device — so it reads as a
  verdict on AI, not on any subject at all.
- It is a word grandmothers genuinely use for gadgets they refuse to
  learn: warm, a little baffled, old-fashioned.
- The joke lands with no caption: all of artificial intelligence,
  dismissed as a gadget.
- It is fresh next to the obvious picks (robot, scary, AI).

## License

MIT — see [LICENSE](LICENSE).
