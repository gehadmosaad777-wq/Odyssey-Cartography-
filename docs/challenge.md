# Challenge Interpretation

Last updated: 2026-11-13

## At a Glance

| Item | Value |
| --- | --- |
| Event | NASA Space Apps Cairo 2026 |
| Challenge | "Interplanetary Survival Guide: Martian Map" |
| Product | Odyssey — Gale Crater Marswalk Planner |
| Team | 5 workstreams: A–E |
| Build window | Friday 13:00 to Saturday 13:00 Africa/Cairo |
| Feature freeze | Saturday 10:00 Africa/Cairo |
| Submission | Before Saturday 13:00 Africa/Cairo |
| Public link | Required; no login |

Official event site: <https://www.spaceappschallenge.org/>

The official challenge text and submission instructions must be checked before the final submission. This document records the team's working interpretation, not a replacement for the official wording.

## Working Interpretation

The challenge asks for a Mars survival-planning experience built around a map. A strong response should:

- put multiple Mars datasets on one map,
- connect the map to a specific exploration scenario,
- help the user make a route or safety decision,
- explain the data and its limits clearly.

Odyssey answers with a layered Gale Crater map, a terrain-aware traverse planner, a survival/safety panel, and MSL/Curiosity POV imagery. The user selects a start, end, and optional waypoint; the app returns a route, time estimate, slope/hazard exposure, and warnings.

## Requirement Mapping

| Challenge need | Odyssey response | Evidence |
| --- | --- | --- |
| Layered Mars map | CTX optical, MOLA terrain/hillshade, THEMIS thermal, optional USGS geology | [data-sources.md](data-sources.md) |
| Specific Mars location | Illustrative Gale boxwork AOI near 4.95°S, 137.45°E | [research.md](research.md) |
| Route planning | A* over a 256×256 slope/hazard grid | [../plan/architecture.md](../plan/architecture.md) |
| Survival constraints | Radiation, suit-hours, slope, duration, reserve, dose budget | [safety-model.md](safety-model.md) |
| Obstacle awareness | Slope no-go threshold and hazard cost; screening-resolution disclaimer | [safety-model.md](safety-model.md) |
| Visual context | MSL/Curiosity POV images at selected waypoints | [data-sources.md](data-sources.md) |
| Clear decision support | Route panel, warnings, printable mission card | [demo-and-submission.md](demo-and-submission.md) |
| Public demo | Static GitHub Pages, local assets, no login | [../plan/architecture.md](../plan/architecture.md) |

## Why Gale Crater

Gale Crater is the MSL/Curiosity landing site, which gives the project a credible source of surface imagery and a well-known exploration context. The challenge's boxwork-style terrain is used as the scenario for route planning.

The AOI is **illustrative** and approximately 20 km square. It is not a verified landing site or an approved traverse. If the data lead identifies a better boxwork field, update the AOI in one place and regenerate the grid and layers.

## Scope

In scope:

- One local AOI in Gale Crater.
- One two-person EVA scenario.
- Three required layers plus optional context layers.
- One route at a time, with an optional intermediate waypoint.
- Safety estimates and warnings.
- Local POV imagery.
- A printable mission card.

Out of scope:

- Global Mars routing.
- Real-time mission operations.
- Meter-scale obstacle detection.
- Solar-particle-event forecasting.
- User accounts, persistence, or collaboration.
- Claims of safety certification.

## Submission Constraints

- The public link must open without a login.
- Critical assets must work from the static deploy.
- Do not use names, images, or voices of minors.
- Disclose AI assistance as required by the event.
- Check attribution and usage terms for every image and dataset.
- Do not present the product as operational or mission-approved.

## Open Questions

- Confirm the exact official challenge wording and judging rubric.
- Confirm the final submission form fields and deadline.
- Verify the best illustrative boxwork AOI.
- Confirm which POV images are unambiguously from Gale Crater.
- Verify the radiation baseline with a citable source.
