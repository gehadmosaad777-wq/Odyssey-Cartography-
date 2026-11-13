# Safety Model

Last updated: 2026-11-13

## Purpose and Scope

This document defines the illustrative safety calculations used by Odyssey. The model is designed for a hackathon decision-support demo, not for real mission planning.

It answers four questions:

- Can the team walk the route within the EVA time limit?
- Does the route exceed the maximum slope?
- Does the estimated radiation dose exceed the scenario budget?
- Does the route fit within the suit's rated duration and reserve?

## Non-Claims

Odyssey does not model:

- solar particle events or storm shelters,
- spacesuit shielding or vehicle shielding,
- terrain shadowing or regolith shielding,
- medical risk, acute radiation syndrome, or crew-specific limits,
- thermal stress, dust exposure, or life-support consumables,
- rover-scale obstacles or trafficability,
- real-time Mars weather.

Do not describe the output as operational, safety-certified, or mission-approved.

## Inputs and Assumptions

| Input | Value | Type | Source / Note |
| --- | --- | --- | --- |
| Baseline dose rate | 0.64 mSv/day | Assumption; verify | MSL RAD / NASA radiation reference; final citation required |
| Nominal EVA duration | 6 h | Scenario assumption | Used for caution threshold |
| Maximum EVA duration | 8 h | Scenario assumption | Hard route limit in the demo |
| Walking speed | 1.2 km/h | Scenario assumption | Conservative suited traverse estimate |
| Suit reserve | 25% | Scenario assumption | Applied to walking time |
| Maximum slope | 20° | Locked project rule | No-go above threshold |
| Dose budget | 150 mSv | Scenario assumption | Mission-level placeholder; see note below |

These values live in `public/data/safety.json` and must be displayed with their source/assumption notes.

## Formulas

```text
dose_mSv = baselineDoseRatePerDay * (durationH / 24)

walkHours = distanceKm / walkSpeedKmH

requiredSuitHours = walkHours * (1 + suitReserve)

route feasible =
  maxSlope <= maxSlopeDeg
  AND durationH <= maxEvaHours
  AND requiredSuitHours <= maxEvaHours
  AND dose_mSv <= doseBudgetMsV
```

The A* cost is separate from the safety gate:

```text
stepCost = stepDistance * (1 + slopePenalty + hazardPenalty)
```

Cells above the slope limit, or with invalid data, are no-go.

The 150 mSv figure is a **mission-level placeholder**, not a scientifically derived per-EVA limit. At the baseline rate, a single EVA will usually be far below it. The demo should present the EVA dose as an informational estimate and must not imply that a low value proves operational safety. The block condition remains for future scenarios that model cumulative or event-driven exposure.

## Thresholds and Warnings

| Condition | UI state | Message intent |
| --- | --- | --- |
| No route found | Blocked | “No traversable route found at the current slope limit.” |
| Start or end is no-go | Blocked | “Move the waypoint off the blocked cell.” |
| Max slope > 20° | Blocked | “Route exceeds the 20° traversable-slope limit.” |
| Duration > 8 h | Blocked | “Route exceeds the maximum EVA duration.” |
| Duration > 6 h | Caution | “Route exceeds the nominal EVA duration; review reserves.” |
| Required suit-hours > 8 h | Blocked | “Route exceeds the suit duration limit.” |
| Required suit-hours > 6 h | Caution | “Suit reserve is tight; shorten the route if possible.” |
| Dose > 150 mSv | Blocked | “Estimated dose exceeds the scenario budget.” |
| Dose within budget | Normal | Show the estimate with the source note. |

The UI must show the numbers and the caveat together. A green state is not a safety certification.

## Space-Weather Context

NOAA Kp may be shown as optional Earth space-weather context. It is not a direct Mars surface radiation dose predictor and must not change the dose calculation unless a validated Mars transfer model is added and documented.

If the optional fetch fails, show “Space-weather context unavailable” and keep the route usable.

## Thermal Context

THEMIS day/night layers are context only. Do not use them as a calibrated thermal-risk input unless the team documents a source, calibration, and threshold. The default route cost uses slope and terrain hazard, not thermal brightness.

## Data and Model Integrity

- Keep the safety constants in one JSON file.
- Display the source/assumption next to each number.
- Do not silently change a threshold; update this document and `plan/architecture.md`.
- If a value is uncertain, label it `unverified` in the UI or omit it.
- Test the model with at least one feasible route and one blocked route.

## Sources

- MSL RAD archive: <https://pds-ppi.igpp.ucla.edu/data/MSL-M-RAD-3-RDR-V1.0/>
- NOAA SWPC planetary K index: <https://services.swpc.noaa.gov/json/planetary_k_index_1m.json>
- Dataset details and attribution: [data-sources.md](data-sources.md)

The baseline dose rate still needs a specific citation selected from the RAD archive or an official NASA radiation reference before submission.

## Verification Checklist

- [ ] Baseline dose rate has a specific citation.
- [ ] All constants match `public/data/safety.json`.
- [ ] Warning thresholds match this document.
- [ ] The UI distinguishes estimate, caution, and blocked states.
- [ ] A blocked route cannot be presented as successful.
- [ ] The disclaimer is visible in the safety panel or mission card.
- [ ] NOAA Kp is labeled context only.
- [ ] No text claims operational safety.
