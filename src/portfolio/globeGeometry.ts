/**
 * Geographic data: Natural Earth 1:110m, public domain, redistributed by
 * world-atlas 2.0.2 (ISC). https://github.com/topojson/world-atlas
 * Local source: public/data/world-countries-110m.json
 * No reference-site artwork or code is used by this renderer.
 */
export type Vec3 = [number, number, number];
type Topology = {
  transform: { scale: [number, number]; translate: [number, number] };
  arcs: number[][][];
  objects: { countries: { geometries: Array<{ type: string; arcs: number[][] | number[][][] }> } };
};
export type GlobeGeometry = { countries: Vec3[][][]; graticules: Vec3[][] };
const RAD = Math.PI / 180;

export function spherePoint(lon: number, lat: number): Vec3 {
  const p = lat * RAD, l = lon * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
}

export function decodeGlobeGeometry(topology: Topology): GlobeGeometry {
  const { scale, translate } = topology.transform;
  const arcs = topology.arcs.map((arc) => {
    let x = 0, y = 0;
    return arc.map(([dx, dy]) => {
      x += dx; y += dy;
      return spherePoint(x * scale[0] + translate[0], y * scale[1] + translate[1]);
    });
  });
  const ring = (ids: number[]) => {
    const points: Vec3[] = [];
    for (const id of ids) {
      const arc = id < 0 ? [...arcs[~id]].reverse() : arcs[id];
      points.push(...(points.length ? arc.slice(1) : arc));
    }
    // Densify long segments so silhouette intersections follow great circles.
    const dense: Vec3[] = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length];
      const angle = Math.acos(Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
      const steps = Math.max(1, Math.ceil(angle / (3 * RAD)));
      for (let j = 0; j < steps; j++) {
        const t = j / steps;
        const q: Vec3 = [a[0] * (1 - t) + b[0] * t, a[1] * (1 - t) + b[1] * t, a[2] * (1 - t) + b[2] * t];
        const length = Math.hypot(...q);
        dense.push([q[0] / length, q[1] / length, q[2] / length]);
      }
    }
    return dense;
  };
  const countries: Vec3[][][] = [];
  for (const geometry of topology.objects.countries.geometries) {
    const polygons = geometry.type === "Polygon" ? [geometry.arcs as number[][]] : geometry.arcs as number[][][];
    for (const polygon of polygons) countries.push(polygon.map(ring));
  }
  const graticules: Vec3[][] = [];
  for (let lat = -75; lat <= 75; lat += 15) {
    const line: Vec3[] = [];
    for (let lon = -180; lon <= 180; lon += 2) line.push(spherePoint(lon, lat));
    graticules.push(line);
  }
  for (let lon = -180; lon < 180; lon += 15) {
    const line: Vec3[] = [];
    for (let lat = -90; lat <= 90; lat += 2) line.push(spherePoint(lon, lat));
    graticules.push(line);
  }
  return { countries, graticules };
}

export function makeProjection(lon: number, lat: number) {
  const l = lon * RAD, p = lat * RAD;
  const cl = Math.cos(l), sl = Math.sin(l), cp = Math.cos(p), sp = Math.sin(p);
  return (v: Vec3): Vec3 => {
    const front = v[0] * sl + v[2] * cl;
    return [v[0] * cl - v[2] * sl, -(v[1] * cp - front * sp), v[1] * sp + front * cp];
  };
}

function horizon(a: Vec3, b: Vec3): Vec3 {
  const t = a[2] / (a[2] - b[2]);
  const x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
  const length = Math.hypot(x, y);
  return [x / length, y / length, 0];
}

function boundaryArc(ctx: CanvasRenderingContext2D, from: Vec3, to: Vec3, cx: number, cy: number, r: number) {
  const a = Math.atan2(from[1], from[0]), b = Math.atan2(to[1], to[0]);
  let delta = b - a;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  ctx.arc(cx, cy, r, a, a + delta, delta < 0);
}

function traceLand(ctx: CanvasRenderingContext2D, points: Vec3[], project: (v: Vec3) => Vec3, cx: number, cy: number, r: number) {
  const vertices = points.map(project);
  const start = vertices.findIndex((v) => v[2] >= 0);
  if (start < 0) return;
  const first = vertices[start];
  ctx.moveTo(cx + first[0] * r, cy + first[1] * r);
  let exit: Vec3 | null = null;
  for (let n = 1; n <= vertices.length; n++) {
    const a = vertices[(start + n - 1) % vertices.length], b = vertices[(start + n) % vertices.length];
    if (a[2] >= 0 && b[2] >= 0) ctx.lineTo(cx + b[0] * r, cy + b[1] * r);
    else if (a[2] >= 0) {
      exit = horizon(a, b);
      ctx.lineTo(cx + exit[0] * r, cy + exit[1] * r);
    } else if (b[2] >= 0) {
      const entry = horizon(a, b);
      if (exit) boundaryArc(ctx, exit, entry, cx, cy, r);
      ctx.lineTo(cx + entry[0] * r, cy + entry[1] * r);
      ctx.lineTo(cx + b[0] * r, cy + b[1] * r);
      exit = null;
    }
  }
  ctx.closePath();
}

function traceLine(ctx: CanvasRenderingContext2D, points: Vec3[], project: (v: Vec3) => Vec3, cx: number, cy: number, r: number, close = false) {
  let previous: Vec3 | null = null;
  const count = points.length + (close ? 1 : 0);
  for (let i = 0; i < count; i++) {
    const v = project(points[i % points.length]);
    if (v[2] >= 0) {
      if (!previous || previous[2] < 0) {
        const p = previous ? horizon(previous, v) : v;
        ctx.moveTo(cx + p[0] * r, cy + p[1] * r);
      }
      ctx.lineTo(cx + v[0] * r, cy + v[1] * r);
    } else if (previous && previous[2] >= 0) {
      const p = horizon(previous, v);
      ctx.lineTo(cx + p[0] * r, cy + p[1] * r);
    }
    previous = v;
  }
}

export function renderGlobe(ctx: CanvasRenderingContext2D, geometry: GlobeGeometry | null, size: number, lon: number, lat: number) {
  const center = size / 2, radius = size * .462;
  const project = makeProjection(lon, lat);
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.beginPath(); ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fafafa"; ctx.fill();
  ctx.clip();
  if (geometry) {
    ctx.fillStyle = "#dedfdf";
    for (const country of geometry.countries) {
      ctx.beginPath();
      for (const ring of country) traceLand(ctx, ring, project, center, center, radius);
      ctx.fill("evenodd");
    }
    ctx.beginPath();
    for (const line of geometry.graticules) traceLine(ctx, line, project, center, center, radius);
    ctx.strokeStyle = "rgba(127,131,135,.2)"; ctx.lineWidth = .55; ctx.stroke();
    ctx.beginPath();
    for (const country of geometry.countries) for (const ring of country) traceLine(ctx, ring, project, center, center, radius, true);
    ctx.strokeStyle = "rgba(125,130,136,.4)"; ctx.lineWidth = .55; ctx.stroke();
  }
  const shade = ctx.createRadialGradient(center - radius * .24, center - radius * .3, radius * .3, center, center, radius);
  shade.addColorStop(0, "rgba(255,255,255,0)");
  shade.addColorStop(.78, "rgba(255,255,255,0)");
  shade.addColorStop(1, "rgba(137,145,153,.11)");
  ctx.fillStyle = shade; ctx.fillRect(0, 0, size, size);
  const ningbo = project(spherePoint(121.544, 29.8683));
  if (ningbo[2] > .07) {
    const x = center + ningbo[0] * radius, y = center + ningbo[1] * radius;
    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(42,74,239,.09)"; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = "#3450eb"; ctx.fill();
    ctx.font = "500 9px ui-monospace, SFMono-Regular, monospace";
    ctx.letterSpacing = "1px";
    ctx.fillStyle = "#54565b"; ctx.fillText("NINGBO", x + 12, y + 3);
    ctx.letterSpacing = "0px";
  }
  ctx.restore();
  ctx.beginPath(); ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(144,150,156,.22)"; ctx.lineWidth = .7; ctx.stroke();
}

export function inverseGlobe(x: number, y: number, lon: number, lat: number): { lat: number; lon: number } | null {
  const rho = Math.hypot(x, y);
  if (rho > 1) return null;
  const p = lat * RAD, c = Math.asin(rho), sc = Math.sin(c), cc = Math.cos(c);
  const phi = rho < 1e-6 ? p : Math.asin(cc * Math.sin(p) - y * sc * Math.cos(p) / rho);
  const lambda = lon * RAD + Math.atan2(x * sc, rho * Math.cos(p) * cc + y * Math.sin(p) * sc);
  return { lat: phi / RAD, lon: ((lambda / RAD + 540) % 360) - 180 };
}
