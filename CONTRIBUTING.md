# Contributing to AstrologyLib

AstrologyLib ([astrologylib.org](https://astrologylib.org)) is an open library of 2,064 classical Chinese
texts on astrology, divination, and Daoist philosophy — Yi Canon （易藏） and Daoist Canon （道藏）.
The originals are fully digitized and searchable. **Almost none of it exists in English yet.**
That is where you come in.

Whether you read classical Chinese fluently or are learning, there is a way to help.

## What volunteers can do

| Role | What it is | Good for |
|---|---|---|
| **Translator** | Translate a classical text into English, from scratch | Readers of classical/literary Chinese |
| **Proofreader** | Review someone else's translation against the original | Bilingual readers, scholars |
| **Terminologist** | Expand and verify the standard glossary (`src/data/glossary.ts`) | Anyone with metaphysical vocabulary knowledge |

Translations are released under **CC BY-SA 4.0**. Source code is MIT. By contributing you agree to these terms.

## How to claim a translation task

1. **Pick a text.** Browse the volunteer task board at
   [astrologylib.org/contribute/](https://astrologylib.org/contribute/) — look for tasks tagged
   `good first task` if you are new. Each task links to the source text.
2. **Open a claim Issue.** Go to
   [Issues → New → "Claim a translation"](https://github.com/lupo168/astrologylib/issues/new/choose),
   fill in the book title/ID and your estimated timeline, and submit.
   A maintainer will assign the Issue to you.
3. **Translate.** Fork the repo, add your translation file (see *File format* below), and open a Pull Request
   that references your Issue (`Closes #NNN`).
4. **Review.** A second reader checks terminology and accuracy. Expect 1–2 rounds of feedback —
   this is normal and how quality stays high.
5. **Get credited.** Once merged, your name goes on the
   [contributors wall](https://astrologylib.org/contributors/).

> **14-day rule:** if a claimed Issue has no update for 14 days, the claim is automatically released
> so someone else can pick it up. Just comment on the Issue if you need more time.

## File format

Each classical text lives as a plain-text file, e.g.

```
public/classics/daozang/正统道藏洞神部/本文类/太上老君说了心经.txt
```

Your translation goes **in the same directory**, with `.en.txt` appended:

```
public/classics/daozang/正统道藏洞神部/本文类/太上老君说了心经.en.txt
```

Rules for the `.en.txt` file:

- **UTF-8 plain text.** No Word docs, no PDFs.
- **Paragraph alignment:** split paragraphs on blank lines, exactly like the source `.txt`.
  Same number of paragraphs, same order — paragraph *N* in English must correspond to
  paragraph *N* in Chinese. (The website renders them side-by-side from this alignment.)
- **Header** (first 3 lines):
  ```
  # English translation of 《太上老君说了心经》
  # Translator: Your Name (GitHub: @yourhandle)
  # License: CC BY-SA 4.0
  ```
- Then a blank line, then your translation paragraphs.

## Translation style guide

1. **Literal first, readable second.** Translate sentence by sentence. Do not paraphrase away
   difficult lines — if a line is obscure, translate it as literally as you honestly can and mark it
   (see rule 4).
2. **Terminology is law.** Always use the standard English renderings in
   [`src/data/glossary.ts`](../src/data/glossary.ts) (e.g. 氣 → *qi*, 阴阳 → *yin-yang*,
   五行 → *Five Phases*). If a term is missing from the glossary, propose an addition in your PR
   description instead of inventing silently.
3. **Names:** give pinyin plus characters on first occurrence — e.g. `Lü Dongbin （吕洞宾）` —
   then pinyin alone afterwards.
4. **Mark uncertainty honestly.** If you are unsure about a passage, keep your best rendering and
   append `[uncertain]` — e.g. `…the void nourishes the spirit [uncertain]`. Reviewers will focus there.
5. **Translator notes** go inline as `[TN: …]`, sparingly. Do not add commentary essays;
   the goal is a clean reading text.
6. **Do not modernize the philosophy.** Translate what the text says, not what you think it should mean.
   Save interpretation for the forum.

## AI assistance policy

AI translation tools (machine translation, LLMs) are welcome as drafting aids — with 2,064 texts to go, we need the leverage. But:

- Every AI-assisted translation must be disclosed in the PR description (`AI-assisted draft: <tool/model>`).
- The human reviewer must read classical Chinese and must check the draft against the original **line by line**, not just for fluency. A reviewer who cannot read the original cannot approve.
- Final merge always requires a human's explicit approval. AI output never goes live on its own.
- The published page credits the human translator and reviewer. AI involvement is disclosed in the PR, never hidden.

Why this rule: classical Chinese is full of variant readings and context-dependent meanings where AI hallucinates confidently. Our "verified" seal is a promise to readers — it must mean a human stood behind it.

### AI assistant attribution standard

AI assistants that contribute deserve credit too — under their own names, in a standard format. When an AI assistant helps with a translation, add a Credits block to the PR description:

```
Credits:
- Translator (human): <name> — translated from the classical original
- Reviewer (human): <name> — line-by-line review against the original
- AI: <assistant name> (<model>, <provider>) — <what it did, e.g. drafted EN translation>
```

If the assistant has no personal name, use the model instead: `AI: <model> (<provider>)`. Example: `AI: COCO (Muse Spark, Meta) — drafted EN translation of Baizibei`.

Rules:
- AI credit is **additional**, never a replacement: every merged translation still needs its human translator and reviewer named.
- The "verified" seal on the published page always belongs to a human. AI assistants are credited in the PR and on the contributors wall, not in the seal.
- One assistant, one line. If two assistants helped, list both.

## Proofreading

- Check the translation against the Chinese original line by line, not just for fluency.
- Verify every glossary term matches `src/data/glossary.ts`.
- Resolve or confirm every `[uncertain]` mark — either fix it or leave a comment explaining why it stands.
- Approve via PR review. Two approvals (translator + one reviewer) are required before merge.

## Questions?

Open a [Discussion](https://github.com/lupo168/astrologylib/discussions) or ask in the
[community forum](https://astrologylib.org/community/). For task-board questions, comment on the
relevant Issue. There is no mailing list and no email gate — everything happens on GitHub.
