# Timeline

Last updated: 2026-11-13

All times are **Africa/Cairo**. The event starts Friday at 13:00 and the final submission is due before Saturday 13:00.

## Schedule

| Time | Focus | Owners | Checkpoint |
| --- | --- | --- | --- |
| Fri 13:00–14:00 | Kickoff, repo setup, contract freeze | All | Shared decisions confirmed |
| Fri 14:00–16:00 | Scaffold, deploy blank site, start data export | A, D | Blank deploy live by 16:00 |
| Fri 16:00–18:00 | Map CRS spike, grid prototype, UI shell | B, D, C, E | Local overlay and grid draft |
| Fri 18:00–20:00 | Layer integration, waypoint selection | B, A, D | Three layers at matching bounds |
| Fri 20:00–22:00 | Route stub, panel wiring | E, A, C | Map plus layers checkpoint by 22:00 |
| Fri 22:00–00:00 | A* integration, safety calculations | E, A | Route and stats appear |
| Sat 00:00–02:00 | POV modal, mission card, fallback testing | C, D, A | Route end-to-end by 02:00 |
| Sat 02:00–06:00 | Rest rotation and async fixes | Split team | At least four hours of sleep per person |
| Sat 06:00–08:00 | Full-flow QA, mobile checks, source review | All | Full flow by 06:00; release candidate by 08:00 |
| Sat 08:00–09:00 | Fix release blockers only | A, E, B | Acceptance checks pass by 09:00 |
| Sat 09:00–10:00 | Final build, deploy, and freeze | A | Feature freeze at 10:00 |
| Sat 10:00–11:30 | Deck, video, links, AI disclosure, form | Lead, C | Submission package ready |
| Sat 11:30–13:00 | Buffer, final verification, submit early | Lead | Submission confirmed before 13:00 |

## Rest Rotation

- Sat 02:00–06:00: half the team rests while the other half handles only async fixes and monitoring.
- No new features after 09:00 Saturday.
- A must be awake and available for the final deploy and submission window.

## Freeze Rules

At Saturday 10:00:

- No new features, layers, endpoints, or dependencies.
- Only fixes for broken links, build failures, incorrect data labels, or critical UI bugs are allowed.
- Every change after freeze requires A's approval.
- The submission link must point to the frozen deploy.

## Submission Window

- Confirm the public URL, deck, video, and form access before 11:30.
- Submit early; do not wait for 13:00.
- Store the final link and confirmation in the team channel.
- Verify AI disclosure and media rules before submitting.

## Contingency

If D0 or D1 is blocked by data access:

1. Reduce to three pre-baked layers and three waypoints.
2. Use a static route result for the first demo, then restore live A*.
3. Cut optional geology, Viking, and live NOAA.
4. Keep the safety panel and source labels.
5. Escalate to A and the project lead immediately; do not silently expand scope.
