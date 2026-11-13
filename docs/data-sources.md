# Data Sources

Last updated: 2026-11-13

## Purpose

This document tracks the datasets, endpoints, attribution, and fallback behavior for Odyssey. The runtime demo must use local assets; endpoints below are for preprocessing and verification, not live map dependencies.

Status values: `verified`, `needs verification`, `optional`, `not used`.

## Source Table

| Layer / Use | Provider | Access | Resolution / Coverage | Status | Attribution |
| --- | --- | --- | --- | --- | --- |
| CTX optical base | NASA/JPL/MSSS | WMTS capabilities: <https://trek.nasa.gov/tiles/Mars/EQ/CTX_beta01_uncontrolled_5m_Caltech/1.0.0/WMTSCapabilities.xml> | Product labeled ~5 m/px; effective detail depends on export and AOI | verified | NASA/JPL-Caltech/MSSS |
| CTX tiles | NASA/JPL/MSSS via ArcGIS | <https://astro.arcgis.com/arcgis/rest/services/OnMars/CTX/MapServer/tile/{z}/{y}/{x}> | Tiled CTX; CORS observed as permissive | verified | NASA/JPL-Caltech/MSSS |
| MOLA hillshade | NASA/MGS/MOLA | WMTS capabilities: <https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/WMTSCapabilities.xml> | Global, ~463 m/px at equator | verified | NASA/MGS/MOLA Science Team |
| MOLA DEM | NASA/MGS/MOLA via Mars Trek | ImageServer `exportImage` for AOI | Global, ~463 m/px; screening-resolution | verified | NASA/MGS/MOLA Science Team |
| THEMIS day/night | NASA/JPL/Arizona State University | Mars Trek WMTS layer | Thermal context; not a calibrated route input | needs verification | NASA/JPL/Arizona State University |
| USGS global geology | USGS Astrogeology | <https://tiles.arcgis.com/tiles/nzS0F0zdNLvs7nc8/arcgis/rest/services/Mars_geology_All_layers_100pct/MapServer> | Global, coarse; effective max LOD around 6 | verified service, optional layer | USGS Astrogeology Science Center |
| Viking context | NASA/USGS | Mars Trek WMTS layer | Optional historical context | needs verification | NASA/USGS |
| MSL/Curiosity images | NASA/JPL-Caltech/MSSS | <https://mars.nasa.gov/rss/api/?feed=raw_images&category=msl&feedtype=json> | Mission image feed; filter by sol and image ID | verified | NASA/JPL-Caltech/MSSS |
| MSL RAD archive | NASA/JPL-Caltech | <https://pds-ppi.igpp.ucla.edu/data/MSL-M-RAD-3-RDR-V1.0/> | Radiation reference data; baseline TBD | verified archive, value needs verification | NASA/JPL-Caltech |
| NOAA planetary K index | NOAA SWPC | <https://services.swpc.noaa.gov/json/planetary_k_index_1m.json> | Earth space-weather context; CORS observed as permissive | verified, optional | NOAA SWPC |
| NASA Worldview | NASA EOSDIS | <https://worldview.earthdata.nasa.gov/> | Earth only | not used for Mars | NASA EOSDIS |

## Local Asset Policy

- Download or export assets during preprocessing; do not depend on external tile servers at demo time.
- Store layer images under `public/layers/`.
- Store runtime JSON under `public/data/`.
- Store POV images under `public/pov/`.
- Keep source URLs and attribution alongside each asset in `layers.json` or `pov.json`.
- Optimize images for the web; avoid committing large uncompressed files.
- Test the production build with network disabled or external requests blocked.

## Preprocessing Plan

`scripts/preprocess.py` should:

1. Define the AOI from the center and 20 km size.
2. Export the CTX and MOLA layers at the same bounds.
3. Export THEMIS and optional geology layers if time permits.
4. Resample the DEM to 256×256.
5. Compute slope and hazard arrays.
6. Write the five runtime JSON files.
7. Resize POV images and record credits.
8. Print bounds, resolution, and output checksums.

Current Python environment:

- Installed: `numpy`, `scipy`, `Pillow`, `requests`.
- Not installed: `rasterio`, `tifffile`, `pyproj`, `shapely`.
- Prefer PNG/JSON exports. Add a lightweight parser only if the chosen DEM export requires it, and document the dependency in the pull request.

## Layer Registration

All layers must share:

- the same AOI bounding box,
- the same image aspect ratio,
- the same pixel-to-coordinate conversion,
- the same Leaflet CRS (`L.CRS.EPSG4326`),
- the same attribution and caveat metadata.

If a source cannot be registered to the shared AOI, cut it rather than display a misaligned layer.

## Attribution and Usage

- NASA imagery and data are generally public domain, but the team must check the specific product page and credit requirements.
- USGS products are generally public domain; credit the USGS Astrogeology Science Center.
- NOAA SWPC products are generally public domain; credit NOAA SWPC.
- Do not hotlink images in the final app.
- Do not use an image if the location or mission is uncertain.
- Do not use Perseverance imagery for Gale Crater.
- Do not present NASA Worldview as a Mars source.

This document is not legal advice. Verify terms for every selected asset before submission.

## Fallback Policy

If a source is unavailable or fails registration:

1. Use the cached local export.
2. If no cache exists, use the pre-baked demo dataset.
3. If a layer is missing, hide it from the layer control rather than showing a broken layer.
4. If an optional runtime fetch fails, show “Context unavailable” and keep the map and routing working.
5. Never block the core route on an external service.

## Verification Checklist

- [ ] CTX export covers the AOI and is aligned with MOLA.
- [ ] MOLA DEM values and slope range are plausible.
- [ ] THEMIS layer, if used, is aligned and labeled as context.
- [ ] Geology layer, if used, is labeled coarse and optional.
- [ ] At least three POV images are confirmed Gale/Curiosity.
- [ ] Every POV image has a credit and source URL.
- [ ] Radiation baseline has a specific citation.
- [ ] NOAA Kp is labeled Earth space-weather context only.
- [ ] All runtime assets load locally with external requests blocked.
- [ ] Attribution appears in the app and submission.
