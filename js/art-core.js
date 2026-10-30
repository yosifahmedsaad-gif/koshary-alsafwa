/* Koshary Alsafwa - procedural SVG artwork engine (core helpers) */
(function (g) {
  'use strict';
  var KS = (g.KS = g.KS || {});
  var A = (KS.Art = { builders: {}, cache: {} });

  // Deterministic PRNG so every dish always renders identically
  A.rng = function (seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  A.f = function (n) { return Math.round(n * 10) / 10; };
  A.pick = function (r, arr) { return arr[Math.floor(r() * arr.length)]; };
  // uniform random point inside a circle of radius R
  A.pt = function (r, R) {
    var a = r() * Math.PI * 2, d = Math.sqrt(r()) * R;
    return [A.f(Math.cos(a) * d), A.f(Math.sin(a) * d)];
  };

  // soft wisps of steam rising from a dish
  A.steam = function (id, R, live) {
    var s = '<defs><filter id="' + id + 'sf" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5"/></filter></defs>' +
      '<g filter="url(#' + id + 'sf)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="9" opacity=".3">';
    [-0.45, -0.08, 0.32].forEach(function (k, i) {
      var x = A.f(k * R);
      s += '<path class="' + (live ? 'steam-w' : '') + '" style="animation-delay:' + (i * 0.9) + 's" d="M' + x + ' ' + A.f(-R * 0.1) +
        ' c ' + A.f(R * 0.2) + ' ' + A.f(-R * 0.25) + ' ' + A.f(-R * 0.2) + ' ' + A.f(-R * 0.45) + ' 0 ' + A.f(-R * 0.75) + '"/>';
    });
    return s + '</g>';
  };

  // wrap builder output in a themed 600x450 scene
  A.wrap = function (inner, o) {
    o = o || {};
    var w = o.w || 600, h = o.h || 450, cx = w / 2, cy = o.cy || h / 2 + 10;
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '">' +
      '<defs><radialGradient id="bgG" cx=".5" cy=".5" r=".78"><stop offset="0" stop-color="' + (o.c0 || '#6a1c10') + '"/>' +
      '<stop offset=".65" stop-color="#2a0709"/><stop offset="1" stop-color="#120304"/></radialGradient>' +
      '<radialGradient id="emG"><stop offset="0" stop-color="#ff7a1a" stop-opacity=".45"/><stop offset="1" stop-color="#ff7a1a" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="' + w + '" height="' + h + '" fill="url(#bgG)"/>' +
      '<circle cx="' + cx + '" cy="' + (h * 0.62) + '" r="' + (h * 0.55) + '" fill="url(#emG)"/>' +
      '<g transform="translate(' + cx + ' ' + cy + ')">' + inner + '</g></svg>';
  };

  A.svg = function (spec, wrapOpts) {
    var b = A.builders[spec.t];
    if (!b) throw new Error('Unknown art type: ' + spec.t);
    var o = Object.assign({}, wrapOpts || {}, spec.wrap || {});
    return A.wrap(b(spec.seed || 1, spec.o || {}, 'a'), o);
  };

  A.uri = function (spec) {
    var key = JSON.stringify(spec);
    if (!A.cache[key]) A.cache[key] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(A.svg(spec));
    return A.cache[key];
  };
})(typeof window !== 'undefined' ? window : globalThis);
