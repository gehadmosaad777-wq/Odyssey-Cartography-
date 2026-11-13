export interface GridMeta {
  width: number;
  height: number;
  bbox: [west: number, south: number, east: number, north: number];
  center: [lat: number, lon: number];
  metersPerCell: number;
  source: string;
}

export interface GaleGrid {
  meta: GridMeta;
  elevation: number[];
  slope: number[];
  hazard: number[];
  noGo: boolean[];
}

export interface Waypoint {
  id: string;
  label: string;
  lat: number;
  lon: number;
  povId?: string;
}

export interface Pov {
  id: string;
  waypointId: string;
  image: string;
  caption: string;
  credit: string;
  sourceUrl: string;
  sol?: number;
}

export interface RoutePoint {
  x: number;
  y: number;
}

export interface RouteResult {
  ok: boolean;
  path: RoutePoint[];
  distanceKm: number;
  durationH: number;
  maxSlope: number;
  avgSlope: number;
  hazard: number;
  warnings: string[];
}

export interface LayerConfig {
  id: string;
  label: string;
  image: string;
  bounds: [west: number, south: number, east: number, north: number];
  attribution: string;
  opacity: number;
  description: string;
  available: boolean;
}

export interface SafetyConfig {
  baselineDoseRatePerDay: number;
  nominalEvaHours: number;
  maxEvaHours: number;
  walkSpeedKmH: number;
  suitReserve: number;
  maxSlopeDeg: number;
  doseBudgetMsV: number;
  sources: string[];
  notes: string[];
}
