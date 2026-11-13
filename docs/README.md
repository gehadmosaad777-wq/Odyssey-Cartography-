# Documentation Index

Last updated: 2026-11-13

This directory is the research and evidence source of truth for Odyssey. It records what was verified, what is assumed, and what must not be claimed.

## Documents

| Document | Purpose | Status |
| --- | --- | --- |
| [challenge.md](challenge.md) | Challenge interpretation and requirement mapping | Drafted |
| [research.md](research.md) | Research findings, verified endpoints, corrections, and open questions | Drafted |
| [data-sources.md](data-sources.md) | Source table, attribution, preprocessing, and fallback policy | Drafted |
| [safety-model.md](safety-model.md) | Radiation, suit, terrain, and warning assumptions | Drafted |
| [demo-and-submission.md](demo-and-submission.md) | Demo script, deck outline, and submission checklist | Drafted |

## Evidence Rules

- `verified` means the endpoint or fact was checked during research.
- `needs verification` means the item is plausible but not confirmed for the final build.
- `unverified` means it must not appear as a factual claim in the UI or submission.
- Every displayed number needs a source and an assumption note.
- If a value is illustrative, say so in the UI and in this directory.

## Source Hierarchy

1. Official NASA, USGS, NOAA, and event documentation.
2. Mission project pages and PDS archives.
3. Peer-reviewed or official explanatory material.
4. Team assumptions, clearly labeled as assumptions.

Do not use a secondary blog as the only source for a scientific claim.

## Public Repository Note

This repository is public. Do not add secrets, private credentials, personal data, or names/images/voices of minors. Check attribution and usage terms for every external asset.
