# Demo and Submission

Last updated: 2026-11-13

## Demo Goal

Show, in under three minutes, that Odyssey turns layered Mars data into a route and safety decision for a Gale Crater EVA.

The demo must use the public, no-login build and local assets. Do not rely on a live external service.

## Pre-Demo Checklist

- [ ] Public Pages URL loads in a fresh browser session.
- [ ] Three layers toggle at the same bounds.
- [ ] Start/end selection produces a route.
- [ ] Safety panel shows dose, suit-hours, slope, and duration.
- [ ] At least one blocked route can be demonstrated or described.
- [ ] Three POV images open.
- [ ] Mission card prints or previews.
- [ ] Mobile 390 px layout has no blocking overflow.
- [ ] Browser console has no critical errors.
- [ ] External requests can fail without breaking the core flow.
- [ ] Sources and caveats are visible.
- [ ] Backup local build and screenshots are ready.

## 3-Minute Demo Script

| Time | Action | Narration intent |
| --- | --- | --- |
| 0:00–0:20 | Open Odyssey | “A Mars map is not enough; the crew needs a decision.” |
| 0:20–0:40 | State the challenge and Gale scenario | “We built a traverse planner for a boxwork field in Gale Crater.” |
| 0:40–1:10 | Toggle CTX, MOLA, THEMIS | “Three datasets, one registered map, with limits visible.” |
| 1:10–1:35 | Select start, end, and waypoint | “The user chooses the mission geometry.” |
| 1:35–2:00 | Show route and stats | “A* balances distance, slope, and hazard.” |
| 2:00–2:25 | Show safety panel and warnings | “Time, dose, suit-hours, and slope are evaluated together.” |
| 2:25–2:45 | Open POV and mission card | “The plan connects to what the crew would actually see.” |
| 2:45–3:00 | Close with limits and impact | “Screening-resolution, illustrative safety, built to extend.” |

## Deck Outline

1. **Title:** Odyssey — Gale Crater Marswalk Planner.
2. **Problem:** A map without survival constraints does not support a traverse decision.
3. **Challenge fit:** Layered Mars data, route planning, safety, POV.
4. **Solution:** Map + A* + safety panel + mission card.
5. **Data:** CTX, MOLA, THEMIS, MSL; local, attributed, offline-safe.
6. **Demo evidence:** Route screenshot, warnings, POV, mobile view.
7. **Limits and next steps:** Screening-resolution terrain, illustrative safety model, future calibration.

## 30-Second Video Option

If a video is required or useful:

1. Open the public app.
2. Toggle two layers.
3. Select a route.
4. Show one safety warning.
5. Open one POV.
6. End on the mission card and the public URL.

Keep the video free of music or media the team does not have rights to use.

## Submission Checklist

- [ ] Public app URL opens without login.
- [ ] Deck file is exported and accessible.
- [ ] Video file or link is accessible, if required.
- [ ] Repo is public and contains the final source.
- [ ] README quickstart matches the final scaffold.
- [ ] Data sources and attribution are visible.
- [ ] AI-use disclosure is included where required.
- [ ] No under-18 names, images, or voices.
- [ ] No secrets, private links, or personal data.
- [ ] Challenge wording and deadline are verified.
- [ ] Submission is confirmed before Saturday 13:00 Africa/Cairo.

## AI Disclosure

Use the event's required wording if provided. Otherwise, a clear statement is:

> AI tools were used for research, planning, documentation, and code assistance. The team verified the data sources, calculations, and final claims, and remains responsible for the submission.

Do not claim that AI generated verified scientific results.

## Final Verification

- Open the public URL on a phone-sized viewport and a desktop viewport.
- Disable network access after the page loads and confirm the core map still works from cache.
- Re-read the safety panel for operational overclaims.
- Re-check the mission card for the correct AOI, numbers, and credits.
- Confirm the submission link is the frozen deploy, not a local preview.
