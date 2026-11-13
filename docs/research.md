# Research Notes

Last updated: 2026-11-13

## Purpose

This document records the research that shaped the Odyssey build: what was checked, what was rejected, and what remains uncertain. It is not a data catalog; exact endpoints and attribution live in [data-sources.md](data-sources.md).

## Research Questions

1. Which open Mars datasets can provide optical, terrain, thermal, and geologic context for Gale Crater?
2. Which sources can be cached locally for an offline-safe demo?
3. Which MSL/Curiosity images can provide credible Gale POV context?
4. What radiation, suit, and terrain assumptions are defensible for a hackathon prototype?
5. Which common Mars data mistakes must be avoided?

## Key Findings

### Verified

- **CTX imagery is available through NASA Mars Trek and an ArcGIS tile service.** The CTX WMTS capabilities endpoint responds, and the ArcGIS CTX tile service allows cross-origin requests.
- **MOLA hillshade and DEM products are available through Mars Trek.** The global MOLA product is about 463 m per pixel at the equator; it is regional screening data, not rover-scale terrain.
- **THEMIS day and night infrared products are available as Mars Trek layers.** They are useful thermal context but are not a calibrated traverse-cost input without additional work.
- **USGS publishes a global Mars geology map service.** It is coarse and global; it is optional context, not a Gale-specific engineering map.
- **MSL raw images are available through NASA's Mars API.** A query for MSL images returns data that can be filtered by sol and image ID. MSL is the correct mission for Gale Crater.
- **MSL RAD data are archived in the Planetary Data System.** RAD is the right reference family for radiation context, but the team still needs to select and cite a specific baseline value.
- **NOAA SWPC provides a planetary K-index JSON feed with permissive cross-origin access.** Kp is Earth space-weather context; it is not a direct Mars surface dose predictor.
- **NASA Worldview is an Earth-observation tool.** It is not a Mars data source and must not appear in the Mars layer list.

### Needs Verification

- The exact best boxwork AOI inside Gale Crater.
- The exact Curiosity sol and location for candidate POV images.
- The DEM export format and whether a lightweight parser is needed.
- The final radiation baseline value and its precise citation.
- The runtime terms and attribution requirements for each selected asset.
- Whether the chosen CTX export preserves enough detail at the 20 km AOI scale.

### Rejected or Deprioritized

- **Perseverance imagery for Gale Crater.** Perseverance is in Jezero Crater; using its images for Gale would be a factual error.
- **NASA Worldview as a Mars layer.** It is Earth-only.
- **Live Mars weather API as a core dependency.** No verified, no-login, demo-safe service was confirmed. The demo must not depend on one.
- **MOLA as obstacle detection.** The resolution is too coarse for meter-scale claims.
- **USGS global geology as a primary layer.** It is coarse and optional; cut it before cutting a core layer.

## Data Decisions

| Decision | Reason |
| --- | --- |
| Use local image overlays | Avoids runtime tile-server dependency and CRS ambiguity |
| Use `L.CRS.EPSG4326` | Suitable for a small local equirectangular AOI; avoids Web Mercator distortion |
| Use a 256×256 grid | Fast A*, small JSON, sufficient for a 20 km screening scenario |
| Use MOLA for slope | Only verified global terrain source in the current stack |
| Label terrain as screening-resolution | Prevents false precision and obstacle-detection claims |
| Use MSL/Curiosity for POV | Correct mission for Gale Crater |
| Treat Kp as context only | Avoids implying a direct Mars radiation model |
| Keep optional layers optional | Protects the deadline and the core demo |

## Scientific Cautions

- A 20 km AOI at 256×256 gives cells of roughly 78 m. That is a planning grid, not a rover navigation map.
- Slope derived from a 463 m DEM is a regional screening product. Local rocks, sand, cliffs, and small craters may be invisible.
- Thermal data can show context but does not automatically translate into trafficability or suit risk.
- Radiation estimates based on a daily baseline do not model solar particle events, shielding, or terrain shadowing.
- A route that is “safe” in this prototype is not operationally safe.

## Open Questions

| Question | Why it matters | Owner |
| --- | --- | --- |
| What is the exact AOI center and bounds? | Layer registration and route meaning | D |
| Which POV images are confirmed Gale and have clear credits? | Scientific credibility | D/E |
| Which DEM export format will the pipeline use? | Preprocessing dependency and schedule | D |
| What radiation baseline and source will be displayed? | Safety credibility | E |
| What is the official submission wording and rubric? | Final submission quality | Lead |

## Decision Log

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-11-13 | Use Gale Crater and MSL imagery | Correct mission/location pairing |
| 2026-11-13 | Use local image overlays | Offline-safe demo and stable CRS |
| 2026-11-13 | Use A* on a 256×256 grid | Fast, testable, sufficient for the scenario |
| 2026-11-13 | Keep geology, Viking, and Kp optional | Protect the critical path |
| 2026-11-13 | Treat all safety output as illustrative | Avoid operational overclaim |
