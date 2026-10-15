/* esm.sh - adhan@4.4.4 */
var V = { Shafi: "shafi", Hanafi: "hanafi" };
function st(t) {
  switch (t) {
    case V.Shafi:
      return 1;
    case V.Hanafi:
      return 2;
    default:
      throw "Invalid Madhab";
  }
}
var Z = {
    MiddleOfTheNight: "middleofthenight",
    SeventhOfTheNight: "seventhofthenight",
    TwilightAngle: "twilightangle",
    recommended(t) {
      return t.latitude > 48 ? Z.SeventhOfTheNight : Z.MiddleOfTheNight;
    },
  },
  I = Z;
var N = class {
  constructor(e, n) {
    ((this.latitude = e), (this.longitude = n));
  }
};
var D = { Nearest: "nearest", Up: "up", None: "none" };
function x(t, e) {
  let n = t.getFullYear(),
    s = t.getMonth(),
    r = t.getDate() + e,
    o = t.getHours(),
    i = t.getMinutes(),
    a = t.getSeconds();
  return new Date(n, s, r, o, i, a);
}
function v(t, e) {
  return T(t, e * 60);
}
function T(t, e) {
  return new Date(t.getTime() + e * 1e3);
}
function S(t, e = D.Nearest) {
  let n = t.getUTCSeconds(),
    s = n >= 30 ? 60 - n : -1 * n;
  return (e === D.Up ? (s = 60 - n) : e === D.None && (s = 0), T(t, s));
}
function K(t) {
  return !(t % 4 !== 0 || (t % 100 === 0 && t % 400 !== 0));
}
function P(t) {
  let e = 0,
    s = [
      31,
      K(t.getFullYear()) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
  for (let r = 0; r < t.getMonth(); r++) e += s[r];
  return ((e += t.getDate()), e);
}
function tt(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}
function h(t) {
  return (t * Math.PI) / 180;
}
function j(t) {
  return (t * 180) / Math.PI;
}
function _(t, e) {
  return t - e * Math.floor(t / e);
}
function p(t) {
  return _(t, 360);
}
function rt(t) {
  return t >= -180 && t <= 180 ? t : t - 360 * Math.round(t / 360);
}
var B = { General: "general", Ahmer: "ahmer", Abyad: "abyad" };
var L = {
    meanSolarLongitude(t) {
      let e = t,
        n = 280.4664567,
        s = 36000.76983 * e,
        r = 3032e-7 * Math.pow(e, 2),
        o = n + s + r;
      return p(o);
    },
    meanLunarLongitude(t) {
      let e = t,
        n = 218.3165,
        s = 481267.8813 * e,
        r = n + s;
      return p(r);
    },
    ascendingLunarNodeLongitude(t) {
      let e = t,
        n = 125.04452,
        s = 1934.136261 * e,
        r = 0.0020708 * Math.pow(e, 2),
        o = Math.pow(e, 3) / 45e4,
        i = n - s + r + o;
      return p(i);
    },
    meanSolarAnomaly(t) {
      let e = t,
        n = 357.52911,
        s = 35999.05029 * e,
        r = 1537e-7 * Math.pow(e, 2),
        o = n + s - r;
      return p(o);
    },
    solarEquationOfTheCenter(t, e) {
      let n = t,
        s = h(e),
        r = (1.914602 - 0.004817 * n - 14e-6 * Math.pow(n, 2)) * Math.sin(s),
        o = (0.019993 - 101e-6 * n) * Math.sin(2 * s),
        i = 289e-6 * Math.sin(3 * s);
      return r + o + i;
    },
    apparentSolarLongitude(t, e) {
      let n = t,
        r = e + L.solarEquationOfTheCenter(n, L.meanSolarAnomaly(n)),
        o = 125.04 - 1934.136 * n,
        i = r - 0.00569 - 0.00478 * Math.sin(h(o));
      return p(i);
    },
    meanObliquityOfTheEcliptic(t) {
      let e = t,
        n = 23.439291,
        s = 0.013004167 * e,
        r = 1639e-10 * Math.pow(e, 2),
        o = 5036e-10 * Math.pow(e, 3);
      return n - s - r + o;
    },
    apparentObliquityOfTheEcliptic(t, e) {
      let n = t,
        s = e,
        r = 125.04 - 1934.136 * n;
      return s + 0.00256 * Math.cos(h(r));
    },
    meanSiderealTime(t) {
      let e = t,
        n = e * 36525 + 2451545,
        s = 280.46061837,
        r = 360.98564736629 * (n - 2451545),
        o = 387933e-9 * Math.pow(e, 2),
        i = Math.pow(e, 3) / 3871e4,
        a = s + r + o - i;
      return p(a);
    },
    nutationInLongitude(t, e, n, s) {
      let r = e,
        o = n,
        i = s,
        a = (-17.2 / 3600) * Math.sin(h(i)),
        l = (1.32 / 3600) * Math.sin(2 * h(r)),
        u = (0.23 / 3600) * Math.sin(2 * h(o)),
        c = (0.21 / 3600) * Math.sin(2 * h(i));
      return a - l - u + c;
    },
    nutationInObliquity(t, e, n, s) {
      let r = e,
        o = n,
        i = s,
        a = (9.2 / 3600) * Math.cos(h(i)),
        l = (0.57 / 3600) * Math.cos(2 * h(r)),
        u = (0.1 / 3600) * Math.cos(2 * h(o)),
        c = (0.09 / 3600) * Math.cos(2 * h(i));
      return a + l + u - c;
    },
    altitudeOfCelestialBody(t, e, n) {
      let s = t,
        r = e,
        o = n,
        i = Math.sin(h(s)) * Math.sin(h(r)),
        a = Math.cos(h(s)) * Math.cos(h(r)) * Math.cos(h(o));
      return j(Math.asin(i + a));
    },
    approximateTransit(t, e, n) {
      let s = t,
        r = e,
        o = n,
        i = s * -1,
        a = _((o + i - r) / 360, 1),
        l = _((12 - s / 15) / 24, 1);
      return a - l > 0.5 ? a - 1 : l - a > 0.5 ? a + 1 : a;
    },
    correctedTransit(t, e, n, s, r, o) {
      let i = t,
        a = e,
        l = n,
        u = s,
        c = r,
        d = o,
        A = a * -1,
        y = p(l + 360.985647 * i),
        C = p(L.interpolateAngles(u, c, d, i)),
        U = rt(y - A - C) / -360;
      return (i + U) * 24;
    },
    correctedHourAngle(t, e, n, s, r, o, i, a, l, u, c) {
      let d = t,
        A = e,
        y = r,
        C = o,
        H = i,
        U = a,
        O = l,
        Q = u,
        W = c,
        J = n.longitude * -1,
        $ = Math.sin(h(A)) - Math.sin(h(n.latitude)) * Math.sin(h(O)),
        X = Math.cos(h(n.latitude)) * Math.cos(h(O)),
        k = j(Math.acos($ / X)),
        Y = s ? d + k / 360 : d - k / 360,
        b = p(y + 360.985647 * Y),
        F = p(L.interpolateAngles(C, H, U, Y)),
        et = L.interpolate(O, Q, W, Y),
        nt = b - J - F,
        ct = L.altitudeOfCelestialBody(n.latitude, et, nt) - A,
        lt = 360 * Math.cos(h(et)) * Math.cos(h(n.latitude)) * Math.sin(h(nt)),
        mt = ct / lt;
      return (Y + mt) * 24;
    },
    interpolate(t, e, n, s) {
      let r = t - e,
        o = n - t,
        i = o - r;
      return t + (s / 2) * (r + o + s * i);
    },
    interpolateAngles(t, e, n, s) {
      let r = p(t - e),
        o = p(n - t),
        i = o - r;
      return t + (s / 2) * (r + o + s * i);
    },
    julianDay(t, e, n, s = 0) {
      let r = Math.trunc,
        o = r(e > 2 ? t : t - 1),
        i = r(e > 2 ? e : e + 12),
        a = n + s / 24,
        l = r(o / 100),
        u = r(2 - l + r(l / 4)),
        c = r(365.25 * (o + 4716)),
        d = r(30.6001 * (i + 1));
      return c + d + a + u - 1524.5;
    },
    julianCentury(t) {
      return (t - 2451545) / 36525;
    },
    seasonAdjustedMorningTwilight(t, e, n, s) {
      let r = 75 + 0.5209090909090909 * Math.abs(t),
        o = 75 + (19.44 / 55) * Math.abs(t),
        i = 75 + (32.74 / 55) * Math.abs(t),
        a = 75 + (48.1 / 55) * Math.abs(t),
        l = (function () {
          let u = L.daysSinceSolstice(e, n, t);
          return u < 91
            ? r + ((o - r) / 91) * u
            : u < 137
              ? o + ((i - o) / 46) * (u - 91)
              : u < 183
                ? i + ((a - i) / 46) * (u - 137)
                : u < 229
                  ? a + ((i - a) / 46) * (u - 183)
                  : u < 275
                    ? i + ((o - i) / 46) * (u - 229)
                    : o + ((r - o) / 91) * (u - 275);
        })();
      return T(s, Math.round(l * -60));
    },
    seasonAdjustedEveningTwilight(t, e, n, s, r) {
      let o, i, a, l;
      r === B.Ahmer
        ? ((o = 62 + (17.4 / 55) * Math.abs(t)),
          (i = 62 - (7.16 / 55) * Math.abs(t)),
          (a = 62 + (5.12 / 55) * Math.abs(t)),
          (l = 62 + (19.44 / 55) * Math.abs(t)))
        : r === B.Abyad
          ? ((o = 75 + (25.6 / 55) * Math.abs(t)),
            (i = 75 + (7.16 / 55) * Math.abs(t)),
            (a = 75 + (36.84 / 55) * Math.abs(t)),
            (l = 75 + (81.84 / 55) * Math.abs(t)))
          : ((o = 75 + (25.6 / 55) * Math.abs(t)),
            (i = 75 + (2.05 / 55) * Math.abs(t)),
            (a = 75 - (9.21 / 55) * Math.abs(t)),
            (l = 75 + (6.14 / 55) * Math.abs(t)));
      let u = (function () {
        let c = L.daysSinceSolstice(e, n, t);
        return c < 91
          ? o + ((i - o) / 91) * c
          : c < 137
            ? i + ((a - i) / 46) * (c - 91)
            : c < 183
              ? a + ((l - a) / 46) * (c - 137)
              : c < 229
                ? l + ((a - l) / 46) * (c - 183)
                : c < 275
                  ? a + ((i - a) / 46) * (c - 229)
                  : i + ((o - i) / 91) * (c - 275);
      })();
      return T(s, Math.round(u * 60));
    },
    daysSinceSolstice(t, e, n) {
      let s,
        o = K(e) ? 173 : 172,
        i = K(e) ? 366 : 365;
      return (
        n >= 0
          ? ((s = t + 10), s >= i && (s = s - i))
          : ((s = t - o), s < 0 && (s = s + i)),
        s
      );
    },
  },
  g = L;
var R = class {
  constructor(e) {
    let n = g.julianCentury(e),
      s = g.meanSolarLongitude(n),
      r = g.meanLunarLongitude(n),
      o = g.ascendingLunarNodeLongitude(n),
      i = h(g.apparentSolarLongitude(n, s)),
      a = g.meanSiderealTime(n),
      l = g.nutationInLongitude(n, s, r, o),
      u = g.nutationInObliquity(n, s, r, o),
      c = g.meanObliquityOfTheEcliptic(n),
      d = h(g.apparentObliquityOfTheEcliptic(n, c));
    ((this.declination = j(Math.asin(Math.sin(d) * Math.sin(i)))),
      (this.rightAscension = p(
        j(Math.atan2(Math.cos(d) * Math.sin(i), Math.cos(i))),
      )),
      (this.apparentSiderealTime = a + (l * 3600 * Math.cos(h(c + u))) / 3600));
  }
};
var w = class {
  constructor(e, n) {
    let s = g.julianDay(e.getFullYear(), e.getMonth() + 1, e.getDate(), 0);
    ((this.observer = n),
      (this.solar = new R(s)),
      (this.prevSolar = new R(s - 1)),
      (this.nextSolar = new R(s + 1)));
    let r = g.approximateTransit(
        n.longitude,
        this.solar.apparentSiderealTime,
        this.solar.rightAscension,
      ),
      o = -50 / 60;
    ((this.approxTransit = r),
      (this.transit = g.correctedTransit(
        r,
        n.longitude,
        this.solar.apparentSiderealTime,
        this.solar.rightAscension,
        this.prevSolar.rightAscension,
        this.nextSolar.rightAscension,
      )),
      (this.sunrise = g.correctedHourAngle(
        r,
        o,
        n,
        !1,
        this.solar.apparentSiderealTime,
        this.solar.rightAscension,
        this.prevSolar.rightAscension,
        this.nextSolar.rightAscension,
        this.solar.declination,
        this.prevSolar.declination,
        this.nextSolar.declination,
      )),
      (this.sunset = g.correctedHourAngle(
        r,
        o,
        n,
        !0,
        this.solar.apparentSiderealTime,
        this.solar.rightAscension,
        this.prevSolar.rightAscension,
        this.nextSolar.rightAscension,
        this.solar.declination,
        this.prevSolar.declination,
        this.nextSolar.declination,
      )));
  }
  hourAngle(e, n) {
    return g.correctedHourAngle(
      this.approxTransit,
      e,
      this.observer,
      n,
      this.solar.apparentSiderealTime,
      this.solar.rightAscension,
      this.prevSolar.rightAscension,
      this.nextSolar.rightAscension,
      this.solar.declination,
      this.prevSolar.declination,
      this.nextSolar.declination,
    );
  }
  afternoon(e) {
    let n = Math.abs(this.observer.latitude - this.solar.declination),
      s = e + Math.tan(h(n)),
      r = j(Math.atan(1 / s));
    return this.hourAngle(r, !0);
  }
};
var q = {
    AqrabBalad: "AqrabBalad",
    AqrabYaum: "AqrabYaum",
    Unresolved: "Unresolved",
  },
  ot = 0.5,
  gt = 65,
  z = (t) => !isNaN(t.sunrise) && !isNaN(t.sunset),
  it = (t, e, n = 1, s = 1) => {
    if (n > Math.ceil(365 / 2)) return null;
    let r = new Date(e.getTime());
    r.setDate(r.getDate() + s * n);
    let o = x(r, 1),
      i = new w(r, t),
      a = new w(o, t);
    return !z(i) || !z(a)
      ? it(t, e, n + (s > 0 ? 0 : 1), -s)
      : {
          date: e,
          tomorrow: o,
          coordinates: t,
          solarTime: i,
          tomorrowSolarTime: a,
        };
  },
  at = (t, e, n) => {
    let s = new w(e, { ...t, latitude: n }),
      r = x(e, 1),
      o = new w(r, { ...t, latitude: n });
    return !z(s) || !z(o)
      ? Math.abs(n) >= gt
        ? at(t, e, n - Math.sign(n) * ot)
        : null
      : {
          date: e,
          tomorrow: r,
          coordinates: new N(n, t.longitude),
          solarTime: s,
          tomorrowSolarTime: o,
        };
  },
  ht = (t, e, n) => {
    let s = {
      date: e,
      tomorrow: x(e, 1),
      coordinates: n,
      solarTime: new w(e, n),
      tomorrowSolarTime: new w(x(e, 1), n),
    };
    switch (t) {
      case q.AqrabYaum:
        return it(n, e) || s;
      case q.AqrabBalad: {
        let { latitude: r } = n;
        return at(n, e, r - Math.sign(r) * ot) || s;
      }
      default:
        return s;
    }
  };
var f = class {
  madhab = V.Shafi;
  highLatitudeRule = I.MiddleOfTheNight;
  adjustments = { fajr: 0, sunrise: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 };
  methodAdjustments = {
    fajr: 0,
    sunrise: 0,
    dhuhr: 0,
    asr: 0,
    maghrib: 0,
    isha: 0,
  };
  polarCircleResolution = q.Unresolved;
  rounding = D.Nearest;
  shafaq = B.General;
  constructor(e, n = 0, s = 0, r = 0, o = 0) {
    ((this.method = e),
      (this.fajrAngle = n),
      (this.ishaAngle = s),
      (this.ishaInterval = r),
      (this.maghribAngle = o),
      this.method === null && (this.method = "Other"));
  }
  nightPortions() {
    switch (this.highLatitudeRule) {
      case I.MiddleOfTheNight:
        return { fajr: 1 / 2, isha: 1 / 2 };
      case I.SeventhOfTheNight:
        return { fajr: 1 / 7, isha: 1 / 7 };
      case I.TwilightAngle:
        return { fajr: this.fajrAngle / 60, isha: this.ishaAngle / 60 };
      default:
        throw `Invalid high latitude rule found when attempting to compute night portions: ${this.highLatitudeRule}`;
    }
  }
};
var dt = {
    MuslimWorldLeague() {
      let t = new f("MuslimWorldLeague", 18, 17);
      return ((t.methodAdjustments.dhuhr = 1), t);
    },
    Egyptian() {
      let t = new f("Egyptian", 19.5, 17.5);
      return ((t.methodAdjustments.dhuhr = 1), t);
    },
    Karachi() {
      let t = new f("Karachi", 18, 18);
      return ((t.methodAdjustments.dhuhr = 1), t);
    },
    UmmAlQura() {
      return new f("UmmAlQura", 18.5, 0, 90);
    },
    Dubai() {
      let t = new f("Dubai", 18.2, 18.2);
      return (
        (t.methodAdjustments = {
          ...t.methodAdjustments,
          sunrise: -3,
          dhuhr: 3,
          asr: 3,
          maghrib: 3,
        }),
        t
      );
    },
    MoonsightingCommittee() {
      let t = new f("MoonsightingCommittee", 18, 18);
      return (
        (t.methodAdjustments = {
          ...t.methodAdjustments,
          dhuhr: 5,
          maghrib: 3,
        }),
        t
      );
    },
    NorthAmerica() {
      let t = new f("NorthAmerica", 15, 15);
      return ((t.methodAdjustments.dhuhr = 1), t);
    },
    Kuwait() {
      return new f("Kuwait", 18, 17.5);
    },
    Qatar() {
      return new f("Qatar", 18, 0, 90);
    },
    Singapore() {
      let t = new f("Singapore", 20, 18);
      return ((t.methodAdjustments.dhuhr = 1), (t.rounding = D.Up), t);
    },
    Tehran() {
      return new f("Tehran", 17.7, 14, 0, 4.5);
    },
    Turkey() {
      let t = new f("Turkey", 18, 17);
      return (
        (t.methodAdjustments = {
          ...t.methodAdjustments,
          sunrise: -7,
          dhuhr: 5,
          asr: 4,
          maghrib: 7,
        }),
        t
      );
    },
    Other() {
      return new f("Other", 0, 0);
    },
  },
  ft = dt;
var pt = {
    Fajr: "fajr",
    Sunrise: "sunrise",
    Dhuhr: "dhuhr",
    Asr: "asr",
    Maghrib: "maghrib",
    Isha: "isha",
    None: "none",
  },
  m = pt;
var M = class {
  constructor(e) {
    return (
      (this.hours = Math.floor(e)),
      (this.minutes = Math.floor((e - this.hours) * 60)),
      (this.seconds = Math.floor(
        (e - (this.hours + this.minutes / 60)) * 60 * 60,
      )),
      this
    );
  }
  utcDate(e, n, s) {
    return new Date(Date.UTC(e, n, s, this.hours, this.minutes, this.seconds));
  }
};
var E = class {
  constructor(e, n, s) {
    ((this.coordinates = e), (this.date = n), (this.calculationParameters = s));
    let r = new w(n, e),
      o,
      i,
      a,
      l,
      u,
      c,
      d,
      A;
    ((a = new M(r.transit).utcDate(n.getFullYear(), n.getMonth(), n.getDate())),
      (i = new M(r.sunrise).utcDate(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
      )),
      (u = new M(r.sunset).utcDate(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
      )));
    let y = x(n, 1),
      C = new w(y, e),
      H = s.polarCircleResolution;
    if ((!tt(i) || !tt(u) || isNaN(C.sunrise)) && H !== q.Unresolved) {
      let b = ht(H, n, e);
      ((r = b.solarTime), (C = b.tomorrowSolarTime));
      let F = [n.getFullYear(), n.getMonth(), n.getDate()];
      ((a = new M(r.transit).utcDate(...F)),
        (i = new M(r.sunrise).utcDate(...F)),
        (u = new M(r.sunset).utcDate(...F)));
    }
    l = new M(r.afternoon(st(s.madhab))).utcDate(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
    );
    let U = new M(C.sunrise).utcDate(
        y.getFullYear(),
        y.getMonth(),
        y.getDate(),
      ),
      O = (Number(U) - Number(u)) / 1e3;
    ((o = new M(r.hourAngle(-1 * s.fajrAngle, !1)).utcDate(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
    )),
      s.method === "MoonsightingCommittee" &&
        e.latitude >= 55 &&
        ((A = O / 7), (o = T(i, -A))));
    let Q = (function () {
      return s.method === "MoonsightingCommittee"
        ? g.seasonAdjustedMorningTwilight(e.latitude, P(n), n.getFullYear(), i)
        : ((A = s.nightPortions().fajr * O), T(i, -A));
    })();
    if (((isNaN(o.getTime()) || Q > o) && (o = Q), s.ishaInterval > 0))
      d = v(u, s.ishaInterval);
    else {
      ((d = new M(r.hourAngle(-1 * s.ishaAngle, !0)).utcDate(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
      )),
        s.method === "MoonsightingCommittee" &&
          e.latitude >= 55 &&
          ((A = O / 7), (d = T(u, A))));
      let b = (function () {
        return s.method === "MoonsightingCommittee"
          ? g.seasonAdjustedEveningTwilight(
              e.latitude,
              P(n),
              n.getFullYear(),
              u,
              s.shafaq,
            )
          : ((A = s.nightPortions().isha * O), T(u, A));
      })();
      (isNaN(d.getTime()) || b < d) && (d = b);
    }
    if (((c = u), s.maghribAngle)) {
      let b = new M(r.hourAngle(-1 * s.maghribAngle, !0)).utcDate(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
      );
      u < b && d > b && (c = b);
    }
    let W = (s.adjustments.fajr || 0) + (s.methodAdjustments.fajr || 0),
      J = (s.adjustments.sunrise || 0) + (s.methodAdjustments.sunrise || 0),
      $ = (s.adjustments.dhuhr || 0) + (s.methodAdjustments.dhuhr || 0),
      X = (s.adjustments.asr || 0) + (s.methodAdjustments.asr || 0),
      k = (s.adjustments.maghrib || 0) + (s.methodAdjustments.maghrib || 0),
      Y = (s.adjustments.isha || 0) + (s.methodAdjustments.isha || 0);
    ((this.fajr = S(v(o, W), s.rounding)),
      (this.sunrise = S(v(i, J), s.rounding)),
      (this.dhuhr = S(v(a, $), s.rounding)),
      (this.asr = S(v(l, X), s.rounding)),
      (this.sunset = S(u, s.rounding)),
      (this.maghrib = S(v(c, k), s.rounding)),
      (this.isha = S(v(d, Y), s.rounding)));
  }
  timeForPrayer(e) {
    return e === m.Fajr
      ? this.fajr
      : e === m.Sunrise
        ? this.sunrise
        : e === m.Dhuhr
          ? this.dhuhr
          : e === m.Asr
            ? this.asr
            : e === m.Maghrib
              ? this.maghrib
              : e === m.Isha
                ? this.isha
                : null;
  }
  currentPrayer(e = new Date()) {
    return e >= this.isha
      ? m.Isha
      : e >= this.maghrib
        ? m.Maghrib
        : e >= this.asr
          ? m.Asr
          : e >= this.dhuhr
            ? m.Dhuhr
            : e >= this.sunrise
              ? m.Sunrise
              : e >= this.fajr
                ? m.Fajr
                : m.None;
  }
  nextPrayer(e = new Date()) {
    return e >= this.isha
      ? m.None
      : e >= this.maghrib
        ? m.Isha
        : e >= this.asr
          ? m.Maghrib
          : e >= this.dhuhr
            ? m.Asr
            : e >= this.sunrise
              ? m.Dhuhr
              : e >= this.fajr
                ? m.Sunrise
                : m.Fajr;
  }
};
function ut(t) {
  let e = new N(21.4225241, 39.8261818),
    n = Math.sin(h(e.longitude) - h(t.longitude)),
    s = Math.cos(h(t.latitude)) * Math.tan(h(e.latitude)),
    r = Math.sin(h(t.latitude)) * Math.cos(h(e.longitude) - h(t.longitude)),
    o = Math.atan2(n, s - r);
  return p(j(o));
}
var G = class {
  constructor(e) {
    let n = e.date,
      s = x(n, 1),
      o =
        (new E(e.coordinates, s, e.calculationParameters).fajr.getTime() -
          e.maghrib.getTime()) /
        1e3;
    ((this.middleOfTheNight = S(T(e.maghrib, o / 2))),
      (this.lastThirdOfTheNight = S(T(e.maghrib, o * (2 / 3)))));
  }
};
export {
  ft as CalculationMethod,
  f as CalculationParameters,
  N as Coordinates,
  I as HighLatitudeRule,
  V as Madhab,
  q as PolarCircleResolution,
  m as Prayer,
  E as PrayerTimes,
  ut as Qibla,
  D as Rounding,
  B as Shafaq,
  G as SunnahTimes,
};
//# sourceMappingURL=adhan.bundle.mjs.map
