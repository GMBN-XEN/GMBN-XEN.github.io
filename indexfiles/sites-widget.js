var fw = Object.create, qg = Object.defineProperty, dw = Object.getOwnPropertyDescriptor, hw = Object.getOwnPropertyNames, mw = Object.getPrototypeOf, vw = Object.prototype.hasOwnProperty, fn = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports), pw = (e, a, r, l) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (var u = hw(a), c = 0, d = u.length, h; c < d; c++)
      h = u[c], !vw.call(e, h) && h !== r && qg(e, h, {
        get: ((m) => a[m]).bind(null, h),
        enumerable: !(l = dw(a, h)) || l.enumerable
      });
  return e;
}, Hd = (e, a, r) => (r = e != null ? fw(mw(e)) : {}, pw(a || !e || !e.__esModule ? qg(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));
function gw(e) {
  return /(?:^|\s)CodexBrowser(?:\/|\s|$)/i.test(e ?? "");
}
function Yg(e) {
  return /iPad|iPhone|iPod/.test(e);
}
function yw(e) {
  return /Android/.test(e);
}
function bw(e) {
  return Yg(e) && e.includes("CriOS");
}
function _w(e) {
  return Yg(e) || yw(e) || bw(e);
}
var ww = [
  "; wv",
  "webview",
  "fbav",
  "fb_iab",
  "fban",
  "instagram",
  "line/",
  "kakaotalk",
  "snapchat",
  "tiktok"
];
function Sw(e) {
  const a = e.trim();
  if (!a) return !1;
  const r = /iPhone|iPad|iPod/.test(a), l = /Android/.test(a), u = r && !/Safari/.test(a), c = l && /Version\/\d+\.\d+/.test(a), d = ww.some((h) => a.toLowerCase().includes(h));
  return u || c || d;
}
function Ew(e) {
  return gw(e) || Sw(e ?? "");
}
function Wg(e) {
  var a, r, l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var u = e.length;
    for (a = 0; a < u; a++) e[a] && (r = Wg(e[a])) && (l && (l += " "), l += r);
  } else for (r in e) e[r] && (l && (l += " "), l += r);
  return l;
}
function ze() {
  for (var e, a, r = 0, l = "", u = arguments.length; r < u; r++) (e = arguments[r]) && (a = Wg(e)) && (l && (l += " "), l += a);
  return l;
}
var Tw = /* @__PURE__ */ fn(((e) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), T = Symbol.iterator;
  function x(z) {
    return z === null || typeof z != "object" ? null : (z = T && z[T] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var C = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, A = Object.assign, M = {};
  function N(z, W, ne) {
    this.props = z, this.context = W, this.refs = M, this.updater = ne || C;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(z, W) {
    if (typeof z != "object" && typeof z != "function" && z != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, W, "setState");
  }, N.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function D() {
  }
  D.prototype = N.prototype;
  function R(z, W, ne) {
    this.props = z, this.context = W, this.refs = M, this.updater = ne || C;
  }
  var B = R.prototype = new D();
  B.constructor = R, A(B, N.prototype), B.isPureReactComponent = !0;
  var H = Array.isArray;
  function q() {
  }
  var ee = {
    H: null,
    A: null,
    T: null,
    S: null
  }, F = Object.prototype.hasOwnProperty;
  function U(z, W, ne) {
    var ce = ne.ref;
    return {
      $$typeof: a,
      type: z,
      key: W,
      ref: ce !== void 0 ? ce : null,
      props: ne
    };
  }
  function Y(z, W) {
    return U(z.type, W, z.props);
  }
  function oe(z) {
    return typeof z == "object" && z !== null && z.$$typeof === a;
  }
  function ue(z) {
    var W = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + z.replace(/[=:]/g, function(ne) {
      return W[ne];
    });
  }
  var re = /\/+/g;
  function V(z, W) {
    return typeof z == "object" && z !== null && z.key != null ? ue("" + z.key) : W.toString(36);
  }
  function P(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(q, q) : (z.status = "pending", z.then(function(W) {
          z.status === "pending" && (z.status = "fulfilled", z.value = W);
        }, function(W) {
          z.status === "pending" && (z.status = "rejected", z.reason = W);
        })), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function E(z, W, ne, ce, _e) {
    var be = typeof z;
    (be === "undefined" || be === "boolean") && (z = null);
    var Ae = !1;
    if (z === null) Ae = !0;
    else switch (be) {
      case "bigint":
      case "string":
      case "number":
        Ae = !0;
        break;
      case "object":
        switch (z.$$typeof) {
          case a:
          case r:
            Ae = !0;
            break;
          case _:
            return Ae = z._init, E(Ae(z._payload), W, ne, ce, _e);
        }
    }
    if (Ae) return _e = _e(z), Ae = ce === "" ? "." + V(z, 0) : ce, H(_e) ? (ne = "", Ae != null && (ne = Ae.replace(re, "$&/") + "/"), E(_e, W, ne, "", function(Ke) {
      return Ke;
    })) : _e != null && (oe(_e) && (_e = Y(_e, ne + (_e.key == null || z && z.key === _e.key ? "" : ("" + _e.key).replace(re, "$&/") + "/") + Ae)), W.push(_e)), 1;
    Ae = 0;
    var Ve = ce === "" ? "." : ce + ":";
    if (H(z)) for (var ke = 0; ke < z.length; ke++) ce = z[ke], be = Ve + V(ce, ke), Ae += E(ce, W, ne, be, _e);
    else if (ke = x(z), typeof ke == "function") for (z = ke.call(z), ke = 0; !(ce = z.next()).done; ) ce = ce.value, be = Ve + V(ce, ke++), Ae += E(ce, W, ne, be, _e);
    else if (be === "object") {
      if (typeof z.then == "function") return E(P(z), W, ne, ce, _e);
      throw W = String(z), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Ae;
  }
  function I(z, W, ne) {
    if (z == null) return z;
    var ce = [], _e = 0;
    return E(z, ce, "", "", function(be) {
      return W.call(ne, be, _e++);
    }), ce;
  }
  function ae(z) {
    if (z._status === -1) {
      var W = z._result;
      W = W(), W.then(function(ne) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = ne);
      }, function(ne) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = ne);
      }), z._status === -1 && (z._status = 0, z._result = W);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var le = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, Ee = {
    map: I,
    forEach: function(z, W, ne) {
      I(z, function() {
        W.apply(this, arguments);
      }, ne);
    },
    count: function(z) {
      var W = 0;
      return I(z, function() {
        W++;
      }), W;
    },
    toArray: function(z) {
      return I(z, function(W) {
        return W;
      }) || [];
    },
    only: function(z) {
      if (!oe(z)) throw Error("React.Children.only expected to receive a single React element child.");
      return z;
    }
  };
  e.Activity = S, e.Children = Ee, e.Component = N, e.Fragment = l, e.Profiler = c, e.PureComponent = R, e.StrictMode = u, e.Suspense = g, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return ee.H.useMemoCache(z);
    }
  }, e.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, e.cacheSignal = function() {
    return null;
  }, e.cloneElement = function(z, W, ne) {
    if (z == null) throw Error("The argument must be a React element, but you passed " + z + ".");
    var ce = A({}, z.props), _e = z.key;
    if (W != null) for (be in W.key !== void 0 && (_e = "" + W.key), W) !F.call(W, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && W.ref === void 0 || (ce[be] = W[be]);
    var be = arguments.length - 2;
    if (be === 1) ce.children = ne;
    else if (1 < be) {
      for (var Ae = Array(be), Ve = 0; Ve < be; Ve++) Ae[Ve] = arguments[Ve + 2];
      ce.children = Ae;
    }
    return U(z.type, _e, ce);
  }, e.createContext = function(z) {
    return z = {
      $$typeof: h,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: d,
      _context: z
    }, z;
  }, e.createElement = function(z, W, ne) {
    var ce, _e = {}, be = null;
    if (W != null) for (ce in W.key !== void 0 && (be = "" + W.key), W) F.call(W, ce) && ce !== "key" && ce !== "__self" && ce !== "__source" && (_e[ce] = W[ce]);
    var Ae = arguments.length - 2;
    if (Ae === 1) _e.children = ne;
    else if (1 < Ae) {
      for (var Ve = Array(Ae), ke = 0; ke < Ae; ke++) Ve[ke] = arguments[ke + 2];
      _e.children = Ve;
    }
    if (z && z.defaultProps) for (ce in Ae = z.defaultProps, Ae) _e[ce] === void 0 && (_e[ce] = Ae[ce]);
    return U(z, be, _e);
  }, e.createRef = function() {
    return { current: null };
  }, e.forwardRef = function(z) {
    return {
      $$typeof: m,
      render: z
    };
  }, e.isValidElement = oe, e.lazy = function(z) {
    return {
      $$typeof: _,
      _payload: {
        _status: -1,
        _result: z
      },
      _init: ae
    };
  }, e.memo = function(z, W) {
    return {
      $$typeof: p,
      type: z,
      compare: W === void 0 ? null : W
    };
  }, e.startTransition = function(z) {
    var W = ee.T, ne = {};
    ee.T = ne;
    try {
      var ce = z(), _e = ee.S;
      _e !== null && _e(ne, ce), typeof ce == "object" && ce !== null && typeof ce.then == "function" && ce.then(q, le);
    } catch (be) {
      le(be);
    } finally {
      W !== null && ne.types !== null && (W.types = ne.types), ee.T = W;
    }
  }, e.unstable_useCacheRefresh = function() {
    return ee.H.useCacheRefresh();
  }, e.use = function(z) {
    return ee.H.use(z);
  }, e.useActionState = function(z, W, ne) {
    return ee.H.useActionState(z, W, ne);
  }, e.useCallback = function(z, W) {
    return ee.H.useCallback(z, W);
  }, e.useContext = function(z) {
    return ee.H.useContext(z);
  }, e.useDebugValue = function() {
  }, e.useDeferredValue = function(z, W) {
    return ee.H.useDeferredValue(z, W);
  }, e.useEffect = function(z, W) {
    return ee.H.useEffect(z, W);
  }, e.useEffectEvent = function(z) {
    return ee.H.useEffectEvent(z);
  }, e.useId = function() {
    return ee.H.useId();
  }, e.useImperativeHandle = function(z, W, ne) {
    return ee.H.useImperativeHandle(z, W, ne);
  }, e.useInsertionEffect = function(z, W) {
    return ee.H.useInsertionEffect(z, W);
  }, e.useLayoutEffect = function(z, W) {
    return ee.H.useLayoutEffect(z, W);
  }, e.useMemo = function(z, W) {
    return ee.H.useMemo(z, W);
  }, e.useOptimistic = function(z, W) {
    return ee.H.useOptimistic(z, W);
  }, e.useReducer = function(z, W, ne) {
    return ee.H.useReducer(z, W, ne);
  }, e.useRef = function(z) {
    return ee.H.useRef(z);
  }, e.useState = function(z) {
    return ee.H.useState(z);
  }, e.useSyncExternalStore = function(z, W, ne) {
    return ee.H.useSyncExternalStore(z, W, ne);
  }, e.useTransition = function() {
    return ee.H.useTransition();
  }, e.version = "19.2.8";
})), jd = /* @__PURE__ */ fn(((e, a) => {
  a.exports = Tw();
})), b = /* @__PURE__ */ Hd(jd()), rd = function(e, a) {
  return rd = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, l) {
    r.__proto__ = l;
  } || function(r, l) {
    for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (r[u] = l[u]);
  }, rd(e, a);
};
function An(e, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  rd(e, a);
  function r() {
    this.constructor = e;
  }
  e.prototype = a === null ? Object.create(a) : (r.prototype = a.prototype, new r());
}
var se = function() {
  return se = Object.assign || function(a) {
    for (var r, l = 1, u = arguments.length; l < u; l++) {
      r = arguments[l];
      for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (a[c] = r[c]);
    }
    return a;
  }, se.apply(this, arguments);
};
function Sa(e, a) {
  var r = {};
  for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && a.indexOf(l) < 0 && (r[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, l = Object.getOwnPropertySymbols(e); u < l.length; u++) a.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[u]) && (r[l[u]] = e[l[u]]);
  return r;
}
function zn(e, a, r) {
  if (r || arguments.length === 2)
    for (var l = 0, u = a.length, c; l < u; l++) (c || !(l in a)) && (c || (c = Array.prototype.slice.call(a, 0, l)), c[l] = a[l]);
  return e.concat(c || Array.prototype.slice.call(a));
}
function Xn(e, a) {
  var r = a && a.cache ? a.cache : Nw, l = a && a.serializer ? a.serializer : Mw;
  return (a && a.strategy ? a.strategy : Aw)(e, {
    cache: r,
    serializer: l
  });
}
function Cw(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Qg(e, a, r, l) {
  var u = Cw(l) ? l : r(l), c = a.get(u);
  return typeof c > "u" && (c = e.call(this, l), a.set(u, c)), c;
}
function Kg(e, a, r) {
  var l = Array.prototype.slice.call(arguments, 3), u = r(l), c = a.get(u);
  return typeof c > "u" && (c = e.apply(this, l), a.set(u, c)), c;
}
function Bd(e, a, r, l, u) {
  return r.bind(a, e, l, u);
}
function Aw(e, a) {
  var r = e.length === 1 ? Qg : Kg;
  return Bd(e, this, r, a.cache.create(), a.serializer);
}
function xw(e, a) {
  return Bd(e, this, Kg, a.cache.create(), a.serializer);
}
function Ow(e, a) {
  return Bd(e, this, Qg, a.cache.create(), a.serializer);
}
var Mw = function() {
  return JSON.stringify(arguments);
}, Rw = (function() {
  function e() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  return e.prototype.get = function(a) {
    return this.cache[a];
  }, e.prototype.set = function(a, r) {
    this.cache[a] = r;
  }, e;
})(), Nw = { create: function() {
  return new Rw();
} }, qn = {
  variadic: xw,
  monadic: Ow
}, Re;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Re || (Re = {}));
var Qe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Qe || (Qe = {}));
var Dr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Dr || (Dr = {}));
function h0(e) {
  return e.type === Qe.literal;
}
function Dw(e) {
  return e.type === Qe.argument;
}
function Jg(e) {
  return e.type === Qe.number;
}
function e1(e) {
  return e.type === Qe.date;
}
function t1(e) {
  return e.type === Qe.time;
}
function n1(e) {
  return e.type === Qe.select;
}
function a1(e) {
  return e.type === Qe.plural;
}
function zw(e) {
  return e.type === Qe.pound;
}
function i1(e) {
  return e.type === Qe.tag;
}
function r1(e) {
  return !!(e && typeof e == "object" && e.type === Dr.number);
}
function od(e) {
  return !!(e && typeof e == "object" && e.type === Dr.dateTime);
}
var o1 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Lw = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Hw(e) {
  var a = {};
  return e.replace(Lw, function(r) {
    var l = r.length;
    switch (r[0]) {
      case "G":
        a.era = l === 4 ? "long" : l === 5 ? "narrow" : "short";
        break;
      case "y":
        a.year = l === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        a.month = [
          "numeric",
          "2-digit",
          "short",
          "long",
          "narrow"
        ][l - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        a.day = ["numeric", "2-digit"][l - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        a.weekday = l === 4 ? "long" : l === 5 ? "narrow" : "short";
        break;
      case "e":
        if (l < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
        a.weekday = [
          "short",
          "long",
          "narrow",
          "short"
        ][l - 4];
        break;
      case "c":
        if (l < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        a.weekday = [
          "short",
          "long",
          "narrow",
          "short"
        ][l - 4];
        break;
      case "a":
        a.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        a.hourCycle = "h12", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "H":
        a.hourCycle = "h23", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "K":
        a.hourCycle = "h11", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "k":
        a.hourCycle = "h24", a.hour = ["numeric", "2-digit"][l - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        a.minute = ["numeric", "2-digit"][l - 1];
        break;
      case "s":
        a.second = ["numeric", "2-digit"][l - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        a.timeZoneName = l < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), a;
}
var jw = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Bw(e) {
  if (e.length === 0) throw new Error("Number skeleton cannot be empty");
  for (var a = e.split(jw).filter(function(p) {
    return p.length > 0;
  }), r = [], l = 0, u = a; l < u.length; l++) {
    var c = u[l].split("/");
    if (c.length === 0) throw new Error("Invalid number skeleton");
    for (var d = c[0], h = c.slice(1), m = 0, g = h; m < g.length; m++) if (g[m].length === 0) throw new Error("Invalid number skeleton");
    r.push({
      stem: d,
      options: h
    });
  }
  return r;
}
function Uw(e) {
  return e.replace(/^(.*?)-/, "");
}
var m0 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, l1 = /^(@+)?(\+|#+)?[rs]?$/g, kw = /(\*)(0+)|(#+)(0+)|(0+)/g, u1 = /^(0+)$/;
function v0(e) {
  var a = {};
  return e[e.length - 1] === "r" ? a.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (a.roundingPriority = "lessPrecision"), e.replace(l1, function(r, l, u) {
    return typeof u != "string" ? (a.minimumSignificantDigits = l.length, a.maximumSignificantDigits = l.length) : u === "+" ? a.minimumSignificantDigits = l.length : l[0] === "#" ? a.maximumSignificantDigits = l.length : (a.minimumSignificantDigits = l.length, a.maximumSignificantDigits = l.length + (typeof u == "string" ? u.length : 0)), "";
  }), a;
}
function s1(e) {
  switch (e) {
    case "sign-auto":
      return { signDisplay: "auto" };
    case "sign-accounting":
    case "()":
      return { currencySign: "accounting" };
    case "sign-always":
    case "+!":
      return { signDisplay: "always" };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return { signDisplay: "exceptZero" };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return { signDisplay: "never" };
  }
}
function Pw(e) {
  var a;
  if (e[0] === "E" && e[1] === "E" ? (a = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (a = { notation: "scientific" }, e = e.slice(1)), a) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (a.signDisplay = "always", e = e.slice(2)) : r === "+?" && (a.signDisplay = "exceptZero", e = e.slice(2)), !u1.test(e)) throw new Error("Malformed concise eng/scientific notation");
    a.minimumIntegerDigits = e.length;
  }
  return a;
}
function p0(e) {
  var a = {}, r = s1(e);
  return r || a;
}
function Zw(e) {
  for (var a = {}, r = 0, l = e; r < l.length; r++) {
    var u = l[r];
    switch (u.stem) {
      case "percent":
      case "%":
        a.style = "percent";
        continue;
      case "%x100":
        a.style = "percent", a.scale = 100;
        continue;
      case "currency":
        a.style = "currency", a.currency = u.options[0];
        continue;
      case "group-off":
      case ",_":
        a.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        a.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        a.style = "unit", a.unit = Uw(u.options[0]);
        continue;
      case "compact-short":
      case "K":
        a.notation = "compact", a.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        a.notation = "compact", a.compactDisplay = "long";
        continue;
      case "scientific":
        a = se(se(se({}, a), { notation: "scientific" }), u.options.reduce(function(m, g) {
          return se(se({}, m), p0(g));
        }, {}));
        continue;
      case "engineering":
        a = se(se(se({}, a), { notation: "engineering" }), u.options.reduce(function(m, g) {
          return se(se({}, m), p0(g));
        }, {}));
        continue;
      case "notation-simple":
        a.notation = "standard";
        continue;
      case "unit-width-narrow":
        a.currencyDisplay = "narrowSymbol", a.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        a.currencyDisplay = "code", a.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        a.currencyDisplay = "name", a.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        a.currencyDisplay = "symbol";
        continue;
      case "scale":
        a.scale = parseFloat(u.options[0]);
        continue;
      case "rounding-mode-floor":
        a.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        a.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        a.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        a.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        a.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        a.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        a.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (u.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
        u.options[0].replace(kw, function(m, g, p, _, S, T) {
          if (g) a.minimumIntegerDigits = p.length;
          else {
            if (_ && S) throw new Error("We currently do not support maximum integer digits");
            if (T) throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (u1.test(u.stem)) {
      a.minimumIntegerDigits = u.stem.length;
      continue;
    }
    if (m0.test(u.stem)) {
      if (u.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
      u.stem.replace(m0, function(m, g, p, _, S, T) {
        return p === "*" ? a.minimumFractionDigits = g.length : _ && _[0] === "#" ? a.maximumFractionDigits = _.length : S && T ? (a.minimumFractionDigits = S.length, a.maximumFractionDigits = S.length + T.length) : (a.minimumFractionDigits = g.length, a.maximumFractionDigits = g.length), "";
      });
      var c = u.options[0];
      c === "w" ? a = se(se({}, a), { trailingZeroDisplay: "stripIfInteger" }) : c && (a = se(se({}, a), v0(c)));
      continue;
    }
    if (l1.test(u.stem)) {
      a = se(se({}, a), v0(u.stem));
      continue;
    }
    var d = s1(u.stem);
    d && (a = se(se({}, a), d));
    var h = Pw(u.stem);
    h && (a = se(se({}, a), h));
  }
  return a;
}
var wu = {
  "001": ["H", "h"],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: ["H", "hB"],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: ["h", "H"],
  AT: ["H", "hB"],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: ["H", "hB"],
  AX: ["H"],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: ["H", "h"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: ["H"],
  BR: ["H", "hB"],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: ["h", "H"],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: ["H", "h"],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: ["hB", "H"],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: ["H", "hB"],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: ["H", "hB"],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: ["H"],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: ["H", "hB"],
  CW: ["H", "hB"],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: ["H"],
  DE: ["H", "hB"],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: ["h", "H"],
  DK: ["H"],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: ["H", "hB"],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: ["h", "H"],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: ["H"],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: ["H", "h"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: ["H", "hB"],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: ["h", "H"],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: ["H", "h"],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: ["H", "hB"],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: ["H", "hB"],
  HU: ["H", "h"],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: ["H"],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: ["H", "hB"],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: ["h", "H"],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: ["hB", "H"],
  IS: ["H"],
  IT: ["H", "hB"],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: ["H", "hB"],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: ["h", "H"],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: ["H", "hB"],
  MG: ["H", "h"],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: ["H"],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: ["H", "hB"],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: ["H", "h"],
  MU: ["H", "h"],
  MV: ["H", "h"],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: ["H", "hB"],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: ["H", "hB"],
  NE: ["H"],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: ["H", "hB"],
  NO: ["H", "h"],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: ["h", "H"],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: ["H", "h"],
  PM: ["H", "hB"],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: ["H", "hB"],
  PW: ["h", "H"],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: ["H"],
  RW: ["H", "h"],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: ["H"],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: ["H", "hB"],
  SJ: ["H"],
  SK: ["H"],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: ["h", "H"],
  SR: ["H", "hB"],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: ["H", "hB"],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: ["H", "hB"],
  TH: ["H", "h"],
  TJ: ["H", "h"],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: ["H", "h"],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: ["h", "H"],
  TR: ["H", "hB"],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: ["H", "h"],
  VU: ["h", "H"],
  WF: ["H", "hB"],
  WS: ["h", "H"],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: ["H", "hB"],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: ["H", "h"],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Iw(e, a) {
  for (var r = "", l = 0; l < e.length; l++) {
    var u = e.charAt(l);
    if (u === "j") {
      for (var c = 0; l + 1 < e.length && e.charAt(l + 1) === u; )
        c++, l++;
      var d = 1 + (c & 1), h = c < 2 ? 1 : 3 + (c >> 1), m = "a", g = Gw(a);
      for ((g == "H" || g == "k") && (h = 0); h-- > 0; ) r += m;
      for (; d-- > 0; ) r = g + r;
    } else u === "J" ? r += "H" : r += u;
  }
  return r;
}
function Gw(e) {
  var a = e.hourCycle;
  if (a === void 0 && e.hourCycles && e.hourCycles.length && (a = e.hourCycles[0]), a) switch (a) {
    case "h24":
      return "k";
    case "h23":
      return "H";
    case "h12":
      return "h";
    case "h11":
      return "K";
    default:
      throw new Error("Invalid hourCycle");
  }
  var r = e.language, l;
  return r !== "root" && (l = e.maximize().region), (wu[l || ""] || wu[r || ""] || wu["".concat(r, "-001")] || wu["001"])[0];
}
var Hf, $w = new RegExp("^".concat(o1.source, "*")), Vw = new RegExp("".concat(o1.source, "*$"));
function Ne(e, a) {
  return {
    start: e,
    end: a
  };
}
var Fw = !!String.prototype.startsWith && "_a".startsWith("a", 1), Xw = !!String.fromCodePoint, qw = !!Object.fromEntries, Yw = !!String.prototype.codePointAt, Ww = !!String.prototype.trimStart, Qw = !!String.prototype.trimEnd, Kw = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ld = !0;
try {
  ld = ((Hf = f1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) === null || Hf === void 0 ? void 0 : Hf[0]) === "a";
} catch {
  ld = !1;
}
var g0 = Fw ? function(a, r, l) {
  return a.startsWith(r, l);
} : function(a, r, l) {
  return a.slice(l, l + r.length) === r;
}, ud = Xw ? String.fromCodePoint : function() {
  for (var a = [], r = 0; r < arguments.length; r++) a[r] = arguments[r];
  for (var l = "", u = a.length, c = 0, d; u > c; ) {
    if (d = a[c++], d > 1114111) throw RangeError(d + " is not a valid code point");
    l += d < 65536 ? String.fromCharCode(d) : String.fromCharCode(((d -= 65536) >> 10) + 55296, d % 1024 + 56320);
  }
  return l;
}, y0 = qw ? Object.fromEntries : function(a) {
  for (var r = {}, l = 0, u = a; l < u.length; l++) {
    var c = u[l], d = c[0];
    r[d] = c[1];
  }
  return r;
}, c1 = Yw ? function(a, r) {
  return a.codePointAt(r);
} : function(a, r) {
  var l = a.length;
  if (!(r < 0 || r >= l)) {
    var u = a.charCodeAt(r), c;
    return u < 55296 || u > 56319 || r + 1 === l || (c = a.charCodeAt(r + 1)) < 56320 || c > 57343 ? u : (u - 55296 << 10) + (c - 56320) + 65536;
  }
}, Jw = Ww ? function(a) {
  return a.trimStart();
} : function(a) {
  return a.replace($w, "");
}, eS = Qw ? function(a) {
  return a.trimEnd();
} : function(a) {
  return a.replace(Vw, "");
};
function f1(e, a) {
  return new RegExp(e, a);
}
var sd;
if (ld) {
  var b0 = f1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  sd = function(a, r) {
    var l;
    return b0.lastIndex = r, (l = b0.exec(a)[1]) !== null && l !== void 0 ? l : "";
  };
} else sd = function(a, r) {
  for (var l = []; ; ) {
    var u = c1(a, r);
    if (u === void 0 || d1(u) || iS(u)) break;
    l.push(u), r += u >= 65536 ? 2 : 1;
  }
  return ud.apply(void 0, l);
};
var tS = (function() {
  function e(a, r) {
    r === void 0 && (r = {}), this.message = a, this.position = {
      offset: 0,
      line: 1,
      column: 1
    }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
  }
  return e.prototype.parse = function() {
    if (this.offset() !== 0) throw Error("parser can only be used once");
    return this.parseMessage(0, "", !1);
  }, e.prototype.parseMessage = function(a, r, l) {
    for (var u = []; !this.isEOF(); ) {
      var c = this.char();
      if (c === 123) {
        var d = this.parseArgument(a, l);
        if (d.err) return d;
        u.push(d.val);
      } else {
        if (c === 125 && a > 0) break;
        if (c === 35 && (r === "plural" || r === "selectordinal")) {
          var h = this.clonePosition();
          this.bump(), u.push({
            type: Qe.pound,
            location: Ne(h, this.clonePosition())
          });
        } else if (c === 60 && !this.ignoreTag && this.peek() === 47) {
          if (l) break;
          return this.error(Re.UNMATCHED_CLOSING_TAG, Ne(this.clonePosition(), this.clonePosition()));
        } else if (c === 60 && !this.ignoreTag && cd(this.peek() || 0)) {
          var d = this.parseTag(a, r);
          if (d.err) return d;
          u.push(d.val);
        } else {
          var d = this.parseLiteral(a, r);
          if (d.err) return d;
          u.push(d.val);
        }
      }
    }
    return {
      val: u,
      err: null
    };
  }, e.prototype.parseTag = function(a, r) {
    var l = this.clonePosition();
    this.bump();
    var u = this.parseTagName();
    if (this.bumpSpace(), this.bumpIf("/>")) return {
      val: {
        type: Qe.literal,
        value: "<".concat(u, "/>"),
        location: Ne(l, this.clonePosition())
      },
      err: null
    };
    if (this.bumpIf(">")) {
      var c = this.parseMessage(a + 1, r, !0);
      if (c.err) return c;
      var d = c.val, h = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !cd(this.char())) return this.error(Re.INVALID_TAG, Ne(h, this.clonePosition()));
        var m = this.clonePosition();
        return u !== this.parseTagName() ? this.error(Re.UNMATCHED_CLOSING_TAG, Ne(m, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
          val: {
            type: Qe.tag,
            value: u,
            children: d,
            location: Ne(l, this.clonePosition())
          },
          err: null
        } : this.error(Re.INVALID_TAG, Ne(h, this.clonePosition())));
      } else return this.error(Re.UNCLOSED_TAG, Ne(l, this.clonePosition()));
    } else return this.error(Re.INVALID_TAG, Ne(l, this.clonePosition()));
  }, e.prototype.parseTagName = function() {
    var a = this.offset();
    for (this.bump(); !this.isEOF() && aS(this.char()); ) this.bump();
    return this.message.slice(a, this.offset());
  }, e.prototype.parseLiteral = function(a, r) {
    for (var l = this.clonePosition(), u = ""; ; ) {
      var c = this.tryParseQuote(r);
      if (c) {
        u += c;
        continue;
      }
      var d = this.tryParseUnquoted(a, r);
      if (d) {
        u += d;
        continue;
      }
      var h = this.tryParseLeftAngleBracket();
      if (h) {
        u += h;
        continue;
      }
      break;
    }
    var m = Ne(l, this.clonePosition());
    return {
      val: {
        type: Qe.literal,
        value: u,
        location: m
      },
      err: null
    };
  }, e.prototype.tryParseLeftAngleBracket = function() {
    return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !nS(this.peek() || 0)) ? (this.bump(), "<") : null;
  }, e.prototype.tryParseQuote = function(a) {
    if (this.isEOF() || this.char() !== 39) return null;
    switch (this.peek()) {
      case 39:
        return this.bump(), this.bump(), "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (a === "plural" || a === "selectordinal") break;
        return null;
      default:
        return null;
    }
    this.bump();
    var r = [this.char()];
    for (this.bump(); !this.isEOF(); ) {
      var l = this.char();
      if (l === 39) if (this.peek() === 39)
        r.push(39), this.bump();
      else {
        this.bump();
        break;
      }
      else r.push(l);
      this.bump();
    }
    return ud.apply(void 0, r);
  }, e.prototype.tryParseUnquoted = function(a, r) {
    if (this.isEOF()) return null;
    var l = this.char();
    return l === 60 || l === 123 || l === 35 && (r === "plural" || r === "selectordinal") || l === 125 && a > 0 ? null : (this.bump(), ud(l));
  }, e.prototype.parseArgument = function(a, r) {
    var l = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Ne(l, this.clonePosition()));
    if (this.char() === 125)
      return this.bump(), this.error(Re.EMPTY_ARGUMENT, Ne(l, this.clonePosition()));
    var u = this.parseIdentifierIfPossible().value;
    if (!u) return this.error(Re.MALFORMED_ARGUMENT, Ne(l, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF()) return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Ne(l, this.clonePosition()));
    switch (this.char()) {
      case 125:
        return this.bump(), {
          val: {
            type: Qe.argument,
            value: u,
            location: Ne(l, this.clonePosition())
          },
          err: null
        };
      case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Ne(l, this.clonePosition())) : this.parseArgumentOptions(a, r, u, l);
      default:
        return this.error(Re.MALFORMED_ARGUMENT, Ne(l, this.clonePosition()));
    }
  }, e.prototype.parseIdentifierIfPossible = function() {
    var a = this.clonePosition(), r = this.offset(), l = sd(this.message, r), u = r + l.length;
    return this.bumpTo(u), {
      value: l,
      location: Ne(a, this.clonePosition())
    };
  }, e.prototype.parseArgumentOptions = function(a, r, l, u) {
    var c, d = this.clonePosition(), h = this.parseIdentifierIfPossible().value, m = this.clonePosition();
    switch (h) {
      case "":
        return this.error(Re.EXPECT_ARGUMENT_TYPE, Ne(d, m));
      case "number":
      case "date":
      case "time":
        this.bumpSpace();
        var g = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var p = this.clonePosition(), _ = this.parseSimpleArgStyleIfPossible();
          if (_.err) return _;
          var S = eS(_.val);
          if (S.length === 0) return this.error(Re.EXPECT_ARGUMENT_STYLE, Ne(this.clonePosition(), this.clonePosition()));
          g = {
            style: S,
            styleLocation: Ne(p, this.clonePosition())
          };
        }
        var R = this.tryParseArgumentClose(u);
        if (R.err) return R;
        var T = Ne(u, this.clonePosition());
        if (g && g0(g?.style, "::", 0)) {
          var x = Jw(g.style.slice(2));
          if (h === "number") {
            var _ = this.parseNumberSkeletonFromString(x, g.styleLocation);
            return _.err ? _ : {
              val: {
                type: Qe.number,
                value: l,
                location: T,
                style: _.val
              },
              err: null
            };
          } else {
            if (x.length === 0) return this.error(Re.EXPECT_DATE_TIME_SKELETON, T);
            var C = x;
            this.locale && (C = Iw(x, this.locale));
            var S = {
              type: Dr.dateTime,
              pattern: C,
              location: g.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? Hw(C) : {}
            };
            return {
              val: {
                type: h === "date" ? Qe.date : Qe.time,
                value: l,
                location: T,
                style: S
              },
              err: null
            };
          }
        }
        return {
          val: {
            type: h === "number" ? Qe.number : h === "date" ? Qe.date : Qe.time,
            value: l,
            location: T,
            style: (c = g?.style) !== null && c !== void 0 ? c : null
          },
          err: null
        };
      case "plural":
      case "selectordinal":
      case "select":
        var A = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Re.EXPECT_SELECT_ARGUMENT_OPTIONS, Ne(A, se({}, A)));
        this.bumpSpace();
        var M = this.parseIdentifierIfPossible(), N = 0;
        if (h !== "select" && M.value === "offset") {
          if (!this.bumpIf(":")) return this.error(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ne(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var _ = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (_.err) return _;
          this.bumpSpace(), M = this.parseIdentifierIfPossible(), N = _.val;
        }
        var D = this.tryParsePluralOrSelectOptions(a, h, r, M);
        if (D.err) return D;
        var R = this.tryParseArgumentClose(u);
        if (R.err) return R;
        var B = Ne(u, this.clonePosition());
        return h === "select" ? {
          val: {
            type: Qe.select,
            value: l,
            options: y0(D.val),
            location: B
          },
          err: null
        } : {
          val: {
            type: Qe.plural,
            value: l,
            options: y0(D.val),
            offset: N,
            pluralType: h === "plural" ? "cardinal" : "ordinal",
            location: B
          },
          err: null
        };
      default:
        return this.error(Re.INVALID_ARGUMENT_TYPE, Ne(d, m));
    }
  }, e.prototype.tryParseArgumentClose = function(a) {
    return this.isEOF() || this.char() !== 125 ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, Ne(a, this.clonePosition())) : (this.bump(), {
      val: !0,
      err: null
    });
  }, e.prototype.parseSimpleArgStyleIfPossible = function() {
    for (var a = 0, r = this.clonePosition(); !this.isEOF(); ) switch (this.char()) {
      case 39:
        this.bump();
        var l = this.clonePosition();
        if (!this.bumpUntil("'")) return this.error(Re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ne(l, this.clonePosition()));
        this.bump();
        break;
      case 123:
        a += 1, this.bump();
        break;
      case 125:
        if (a > 0) a -= 1;
        else return {
          val: this.message.slice(r.offset, this.offset()),
          err: null
        };
        break;
      default:
        this.bump();
        break;
    }
    return {
      val: this.message.slice(r.offset, this.offset()),
      err: null
    };
  }, e.prototype.parseNumberSkeletonFromString = function(a, r) {
    var l = [];
    try {
      l = Bw(a);
    } catch {
      return this.error(Re.INVALID_NUMBER_SKELETON, r);
    }
    return {
      val: {
        type: Dr.number,
        tokens: l,
        location: r,
        parsedOptions: this.shouldParseSkeletons ? Zw(l) : {}
      },
      err: null
    };
  }, e.prototype.tryParsePluralOrSelectOptions = function(a, r, l, u) {
    for (var c, d = !1, h = [], m = /* @__PURE__ */ new Set(), g = u.value, p = u.location; ; ) {
      if (g.length === 0) {
        var _ = this.clonePosition();
        if (r !== "select" && this.bumpIf("=")) {
          var S = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, Re.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (S.err) return S;
          p = Ne(_, this.clonePosition()), g = this.message.slice(_.offset, this.offset());
        } else break;
      }
      if (m.has(g)) return this.error(r === "select" ? Re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, p);
      g === "other" && (d = !0), this.bumpSpace();
      var T = this.clonePosition();
      if (!this.bumpIf("{")) return this.error(r === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ne(this.clonePosition(), this.clonePosition()));
      var x = this.parseMessage(a + 1, r, l);
      if (x.err) return x;
      var C = this.tryParseArgumentClose(T);
      if (C.err) return C;
      h.push([g, {
        value: x.val,
        location: Ne(T, this.clonePosition())
      }]), m.add(g), this.bumpSpace(), c = this.parseIdentifierIfPossible(), g = c.value, p = c.location;
    }
    return h.length === 0 ? this.error(r === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ne(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !d ? this.error(Re.MISSING_OTHER_CLAUSE, Ne(this.clonePosition(), this.clonePosition())) : {
      val: h,
      err: null
    };
  }, e.prototype.tryParseDecimalInteger = function(a, r) {
    var l = 1, u = this.clonePosition();
    this.bumpIf("+") || this.bumpIf("-") && (l = -1);
    for (var c = !1, d = 0; !this.isEOF(); ) {
      var h = this.char();
      if (h >= 48 && h <= 57)
        c = !0, d = d * 10 + (h - 48), this.bump();
      else break;
    }
    var m = Ne(u, this.clonePosition());
    return c ? (d *= l, Kw(d) ? {
      val: d,
      err: null
    } : this.error(r, m)) : this.error(a, m);
  }, e.prototype.offset = function() {
    return this.position.offset;
  }, e.prototype.isEOF = function() {
    return this.offset() === this.message.length;
  }, e.prototype.clonePosition = function() {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  }, e.prototype.char = function() {
    var a = this.position.offset;
    if (a >= this.message.length) throw Error("out of bound");
    var r = c1(this.message, a);
    if (r === void 0) throw Error("Offset ".concat(a, " is at invalid UTF-16 code unit boundary"));
    return r;
  }, e.prototype.error = function(a, r) {
    return {
      val: null,
      err: {
        kind: a,
        message: this.message,
        location: r
      }
    };
  }, e.prototype.bump = function() {
    if (!this.isEOF()) {
      var a = this.char();
      a === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += a < 65536 ? 1 : 2);
    }
  }, e.prototype.bumpIf = function(a) {
    if (g0(this.message, a, this.offset())) {
      for (var r = 0; r < a.length; r++) this.bump();
      return !0;
    }
    return !1;
  }, e.prototype.bumpUntil = function(a) {
    var r = this.offset(), l = this.message.indexOf(a, r);
    return l >= 0 ? (this.bumpTo(l), !0) : (this.bumpTo(this.message.length), !1);
  }, e.prototype.bumpTo = function(a) {
    if (this.offset() > a) throw Error("targetOffset ".concat(a, " must be greater than or equal to the current offset ").concat(this.offset()));
    for (a = Math.min(a, this.message.length); ; ) {
      var r = this.offset();
      if (r === a) break;
      if (r > a) throw Error("targetOffset ".concat(a, " is at invalid UTF-16 code unit boundary"));
      if (this.bump(), this.isEOF()) break;
    }
  }, e.prototype.bumpSpace = function() {
    for (; !this.isEOF() && d1(this.char()); ) this.bump();
  }, e.prototype.peek = function() {
    if (this.isEOF()) return null;
    var a = this.char(), r = this.offset(), l = this.message.charCodeAt(r + (a >= 65536 ? 2 : 1));
    return l ?? null;
  }, e;
})();
function cd(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function nS(e) {
  return cd(e) || e === 47;
}
function aS(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function d1(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function iS(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function fd(e) {
  e.forEach(function(a) {
    if (delete a.location, n1(a) || a1(a)) for (var r in a.options)
      delete a.options[r].location, fd(a.options[r].value);
    else Jg(a) && r1(a.style) || (e1(a) || t1(a)) && od(a.style) ? delete a.style.location : i1(a) && fd(a.children);
  });
}
function rS(e, a) {
  a === void 0 && (a = {}), a = se({
    shouldParseSkeletons: !0,
    requiresOtherClause: !0
  }, a);
  var r = new tS(e, a).parse();
  if (r.err) {
    var l = SyntaxError(Re[r.err.kind]);
    throw l.location = r.err.location, l.originalMessage = r.err.message, l;
  }
  return a?.captureLocation || fd(r.val), r.val;
}
var Kn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Kn || (Kn = {}));
var ni = (function(e) {
  An(a, e);
  function a(r, l, u) {
    var c = e.call(this, r) || this;
    return c.code = l, c.originalMessage = u, c;
  }
  return a.prototype.toString = function() {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  }, a;
})(Error), _0 = (function(e) {
  An(a, e);
  function a(r, l, u, c) {
    return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(l, '". Options are "').concat(Object.keys(u).join('", "'), '"'), Kn.INVALID_VALUE, c) || this;
  }
  return a;
})(ni), oS = (function(e) {
  An(a, e);
  function a(r, l, u) {
    return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(l), Kn.INVALID_VALUE, u) || this;
  }
  return a;
})(ni), lS = (function(e) {
  An(a, e);
  function a(r, l) {
    return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(l, '"'), Kn.MISSING_VALUE, l) || this;
  }
  return a;
})(ni), kt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(kt || (kt = {}));
function uS(e) {
  return e.length < 2 ? e : e.reduce(function(a, r) {
    var l = a[a.length - 1];
    return !l || l.type !== kt.literal || r.type !== kt.literal ? a.push(r) : l.value += r.value, a;
  }, []);
}
function h1(e) {
  return typeof e == "function";
}
function ju(e, a, r, l, u, c, d) {
  if (e.length === 1 && h0(e[0])) return [{
    type: kt.literal,
    value: e[0].value
  }];
  for (var h = [], m = 0, g = e; m < g.length; m++) {
    var p = g[m];
    if (h0(p)) {
      h.push({
        type: kt.literal,
        value: p.value
      });
      continue;
    }
    if (zw(p)) {
      typeof c == "number" && h.push({
        type: kt.literal,
        value: r.getNumberFormat(a).format(c)
      });
      continue;
    }
    var _ = p.value;
    if (!(u && _ in u)) throw new lS(_, d);
    var S = u[_];
    if (Dw(p)) {
      (!S || typeof S == "string" || typeof S == "number") && (S = typeof S == "string" || typeof S == "number" ? String(S) : ""), h.push({
        type: typeof S == "string" ? kt.literal : kt.object,
        value: S
      });
      continue;
    }
    if (e1(p)) {
      var T = typeof p.style == "string" ? l.date[p.style] : od(p.style) ? p.style.parsedOptions : void 0;
      h.push({
        type: kt.literal,
        value: r.getDateTimeFormat(a, T).format(S)
      });
      continue;
    }
    if (t1(p)) {
      var T = typeof p.style == "string" ? l.time[p.style] : od(p.style) ? p.style.parsedOptions : l.time.medium;
      h.push({
        type: kt.literal,
        value: r.getDateTimeFormat(a, T).format(S)
      });
      continue;
    }
    if (Jg(p)) {
      var T = typeof p.style == "string" ? l.number[p.style] : r1(p.style) ? p.style.parsedOptions : void 0;
      T && T.scale && (S = S * (T.scale || 1)), h.push({
        type: kt.literal,
        value: r.getNumberFormat(a, T).format(S)
      });
      continue;
    }
    if (i1(p)) {
      var x = p.children, C = p.value, A = u[C];
      if (!h1(A)) throw new oS(C, "function", d);
      var M = A(ju(x, a, r, l, u, c).map(function(R) {
        return R.value;
      }));
      Array.isArray(M) || (M = [M]), h.push.apply(h, M.map(function(R) {
        return {
          type: typeof R == "string" ? kt.literal : kt.object,
          value: R
        };
      }));
    }
    if (n1(p)) {
      var N = p.options[S] || p.options.other;
      if (!N) throw new _0(p.value, S, Object.keys(p.options), d);
      h.push.apply(h, ju(N.value, a, r, l, u));
      continue;
    }
    if (a1(p)) {
      var N = p.options["=".concat(S)];
      if (!N) {
        if (!Intl.PluralRules) throw new ni(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Kn.MISSING_INTL_API, d);
        var D = r.getPluralRules(a, { type: p.pluralType }).select(S - (p.offset || 0));
        N = p.options[D] || p.options.other;
      }
      if (!N) throw new _0(p.value, S, Object.keys(p.options), d);
      h.push.apply(h, ju(N.value, a, r, l, u, S - (p.offset || 0)));
      continue;
    }
  }
  return uS(h);
}
function sS(e, a) {
  return a ? se(se(se({}, e || {}), a || {}), Object.keys(e).reduce(function(r, l) {
    return r[l] = se(se({}, e[l]), a[l] || {}), r;
  }, {})) : e;
}
function cS(e, a) {
  return a ? Object.keys(e).reduce(function(r, l) {
    return r[l] = sS(e[l], a[l]), r;
  }, se({}, e)) : e;
}
function jf(e) {
  return { create: function() {
    return {
      get: function(a) {
        return e[a];
      },
      set: function(a, r) {
        e[a] = r;
      }
    };
  } };
}
function fS(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.NumberFormat).bind.apply(a, zn([void 0], r, !1)))();
    }, {
      cache: jf(e.number),
      strategy: qn.variadic
    }),
    getDateTimeFormat: Xn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.DateTimeFormat).bind.apply(a, zn([void 0], r, !1)))();
    }, {
      cache: jf(e.dateTime),
      strategy: qn.variadic
    }),
    getPluralRules: Xn(function() {
      for (var a, r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
      return new ((a = Intl.PluralRules).bind.apply(a, zn([void 0], r, !1)))();
    }, {
      cache: jf(e.pluralRules),
      strategy: qn.variadic
    })
  };
}
var m1 = (function() {
  function e(a, r, l, u) {
    r === void 0 && (r = e.defaultLocale);
    var c = this;
    if (this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }, this.format = function(m) {
      var g = c.formatToParts(m);
      if (g.length === 1) return g[0].value;
      var p = g.reduce(function(_, S) {
        return !_.length || S.type !== kt.literal || typeof _[_.length - 1] != "string" ? _.push(S.value) : _[_.length - 1] += S.value, _;
      }, []);
      return p.length <= 1 ? p[0] || "" : p;
    }, this.formatToParts = function(m) {
      return ju(c.ast, c.locales, c.formatters, c.formats, m, void 0, c.message);
    }, this.resolvedOptions = function() {
      var m;
      return { locale: ((m = c.resolvedLocale) === null || m === void 0 ? void 0 : m.toString()) || Intl.NumberFormat.supportedLocalesOf(c.locales)[0] };
    }, this.getAst = function() {
      return c.ast;
    }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof a == "string") {
      if (this.message = a, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      var d = u || {};
      d.formatters;
      var h = Sa(d, ["formatters"]);
      this.ast = e.__parse(a, se(se({}, h), { locale: this.resolvedLocale }));
    } else this.ast = a;
    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
    this.formats = cS(e.formats, l), this.formatters = u && u.formatters || fS(this.formatterCache);
  }
  return Object.defineProperty(e, "defaultLocale", {
    get: function() {
      return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
    },
    enumerable: !1,
    configurable: !0
  }), e.memoizedDefaultLocale = null, e.resolveLocale = function(a) {
    if (!(typeof Intl.Locale > "u")) {
      var r = Intl.NumberFormat.supportedLocalesOf(a);
      return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof a == "string" ? a : a[0]);
    }
  }, e.__parse = rS, e.formats = {
    number: {
      integer: { maximumFractionDigits: 0 },
      currency: { style: "currency" },
      percent: { style: "percent" }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  }, e;
})(), Mi;
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(Mi || (Mi = {}));
var Wo = (function(e) {
  An(a, e);
  function a(r, l, u) {
    var c = this, d = u ? u instanceof Error ? u : new Error(String(u)) : void 0;
    return c = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(l, `
`).concat(d ? `
`.concat(d.message, `
`).concat(d.stack) : "")) || this, c.code = r, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(c, a), c;
  }
  return a;
})(Error), dS = (function(e) {
  An(a, e);
  function a(r, l) {
    return e.call(this, Mi.UNSUPPORTED_FORMATTER, r, l) || this;
  }
  return a;
})(Wo), hS = (function(e) {
  An(a, e);
  function a(r, l) {
    return e.call(this, Mi.INVALID_CONFIG, r, l) || this;
  }
  return a;
})(Wo), w0 = (function(e) {
  An(a, e);
  function a(r, l) {
    return e.call(this, Mi.MISSING_DATA, r, l) || this;
  }
  return a;
})(Wo), xn = (function(e) {
  An(a, e);
  function a(r, l, u) {
    var c = e.call(this, Mi.FORMAT_ERROR, "".concat(r, `
Locale: `).concat(l, `
`), u) || this;
    return c.locale = l, c;
  }
  return a;
})(Wo), Bf = (function(e) {
  An(a, e);
  function a(r, l, u, c) {
    var d = e.call(this, "".concat(r, `
MessageID: `).concat(u?.id, `
Default Message: `).concat(u?.defaultMessage, `
Description: `).concat(u?.description, `
`), l, c) || this;
    return d.descriptor = u, d.locale = l, d;
  }
  return a;
})(xn), mS = (function(e) {
  An(a, e);
  function a(r, l) {
    var u = e.call(this, Mi.MISSING_TRANSLATION, 'Missing message: "'.concat(r.id, '" for locale "').concat(l, '", using ').concat(r.defaultMessage ? "default message (".concat(typeof r.defaultMessage == "string" ? r.defaultMessage : r.defaultMessage.map(function(c) {
      var d;
      return (d = c.value) !== null && d !== void 0 ? d : JSON.stringify(c);
    }).join(), ")") : "id", " as fallback.")) || this;
    return u.descriptor = r, u;
  }
  return a;
})(Wo);
function vS(e, a, r) {
  if (r === void 0 && (r = Error), !e) throw new r(a);
}
function kr(e, a, r) {
  return r === void 0 && (r = {}), a.reduce(function(l, u) {
    return u in e ? l[u] = e[u] : u in r && (l[u] = r[u]), l;
  }, {});
}
var pS = function(e) {
}, gS = function(e) {
}, v1 = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: pS,
  onWarn: gS
};
function p1() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function xi(e) {
  return { create: function() {
    return {
      get: function(a) {
        return e[a];
      },
      set: function(a, r) {
        e[a] = r;
      }
    };
  } };
}
function yS(e) {
  e === void 0 && (e = p1());
  var a = Intl.RelativeTimeFormat, r = Intl.ListFormat, l = Intl.DisplayNames, u = Xn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.DateTimeFormat).bind.apply(h, zn([void 0], m, !1)))();
  }, {
    cache: xi(e.dateTime),
    strategy: qn.variadic
  }), c = Xn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.NumberFormat).bind.apply(h, zn([void 0], m, !1)))();
  }, {
    cache: xi(e.number),
    strategy: qn.variadic
  }), d = Xn(function() {
    for (var h, m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
    return new ((h = Intl.PluralRules).bind.apply(h, zn([void 0], m, !1)))();
  }, {
    cache: xi(e.pluralRules),
    strategy: qn.variadic
  });
  return {
    getDateTimeFormat: u,
    getNumberFormat: c,
    getMessageFormat: Xn(function(h, m, g, p) {
      return new m1(h, m, g, se({ formatters: {
        getNumberFormat: c,
        getDateTimeFormat: u,
        getPluralRules: d
      } }, p || {}));
    }, {
      cache: xi(e.message),
      strategy: qn.variadic
    }),
    getRelativeTimeFormat: Xn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (a.bind.apply(a, zn([void 0], h, !1)))();
    }, {
      cache: xi(e.relativeTime),
      strategy: qn.variadic
    }),
    getPluralRules: d,
    getListFormat: Xn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (r.bind.apply(r, zn([void 0], h, !1)))();
    }, {
      cache: xi(e.list),
      strategy: qn.variadic
    }),
    getDisplayNames: Xn(function() {
      for (var h = [], m = 0; m < arguments.length; m++) h[m] = arguments[m];
      return new (l.bind.apply(l, zn([void 0], h, !1)))();
    }, {
      cache: xi(e.displayNames),
      strategy: qn.variadic
    })
  };
}
function Ud(e, a, r, l) {
  var u = e && e[a], c;
  if (u && (c = u[r]), c) return c;
  l(new dS("No ".concat(a, " format named: ").concat(r)));
}
function Su(e, a) {
  return Object.keys(e).reduce(function(r, l) {
    return r[l] = se({ timeZone: a }, e[l]), r;
  }, {});
}
function S0(e, a) {
  return Object.keys(se(se({}, e), a)).reduce(function(r, l) {
    return r[l] = se(se({}, e[l] || {}), a[l] || {}), r;
  }, {});
}
function E0(e, a) {
  if (!a) return e;
  var r = m1.formats;
  return se(se(se({}, r), e), {
    date: S0(Su(r.date, a), Su(e.date || {}, a)),
    time: S0(Su(r.time, a), Su(e.time || {}, a))
  });
}
var dd = function(e, a, r, l, u) {
  var c = e.locale, d = e.formats, h = e.messages, m = e.defaultLocale, g = e.defaultFormats, p = e.fallbackOnEmptyString, _ = e.onError, S = e.timeZone, T = e.defaultRichTextElements;
  r === void 0 && (r = { id: "" });
  var x = r.id, C = r.defaultMessage;
  vS(!!x, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var A = String(x), M = h && Object.prototype.hasOwnProperty.call(h, A) && h[A];
  if (Array.isArray(M) && M.length === 1 && M[0].type === Qe.literal) return M[0].value;
  if (!l && M && typeof M == "string" && !T) return M.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (l = se(se({}, T), l || {}), d = E0(d, S), g = E0(g, S), !M) {
    if (p === !1 && M === "") return M;
    if ((!C || c && c.toLowerCase() !== m.toLowerCase()) && _(new mS(r, c)), C) try {
      var N = a.getMessageFormat(C, m, g, u);
      return N.format(l);
    } catch (D) {
      return _(new Bf('Error formatting default message for: "'.concat(A, '", rendering default message verbatim'), c, r, D)), typeof C == "string" ? C : A;
    }
    return A;
  }
  try {
    var N = a.getMessageFormat(M, c, d, se({ formatters: a }, u || {}));
    return N.format(l);
  } catch (D) {
    _(new Bf('Error formatting message: "'.concat(A, '", using ').concat(C ? "default message" : "id", " as fallback."), c, r, D));
  }
  if (C) try {
    var N = a.getMessageFormat(C, m, g, u);
    return N.format(l);
  } catch (D) {
    _(new Bf('Error formatting the default message for: "'.concat(A, '", rendering message verbatim'), c, r, D));
  }
  return typeof M == "string" ? M : typeof C == "string" ? C : A;
}, bS = [
  "formatMatcher",
  "timeZone",
  "hour12",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "hourCycle",
  "dateStyle",
  "timeStyle",
  "calendar",
  "numberingSystem",
  "fractionalSecondDigits"
];
function Qo(e, a, r, l) {
  var u = e.locale, c = e.formats, d = e.onError, h = e.timeZone;
  l === void 0 && (l = {});
  var m = l.format, g = se(se({}, h && { timeZone: h }), m && Ud(c, a, m, d)), p = kr(l, bS, g);
  return a === "time" && !p.hour && !p.minute && !p.second && !p.timeStyle && !p.dateStyle && (p = se(se({}, p), {
    hour: "numeric",
    minute: "numeric"
  })), r(u, p);
}
function _S(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Qo(e, "date", a, d).format(h);
  } catch (m) {
    e.onError(new xn("Error formatting date.", e.locale, m));
  }
  return String(h);
}
function wS(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Qo(e, "time", a, d).format(h);
  } catch (m) {
    e.onError(new xn("Error formatting time.", e.locale, m));
  }
  return String(h);
}
function SS(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = r[2], h = d === void 0 ? {} : d, m = typeof u == "string" ? new Date(u || 0) : u, g = typeof c == "string" ? new Date(c || 0) : c;
  try {
    return Qo(e, "dateTimeRange", a, h).formatRange(m, g);
  } catch (p) {
    e.onError(new xn("Error formatting date time range.", e.locale, p));
  }
  return String(m);
}
function ES(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Qo(e, "date", a, d).formatToParts(h);
  } catch (m) {
    e.onError(new xn("Error formatting date.", e.locale, m));
  }
  return [];
}
function TS(e, a) {
  for (var r = [], l = 2; l < arguments.length; l++) r[l - 2] = arguments[l];
  var u = r[0], c = r[1], d = c === void 0 ? {} : c, h = typeof u == "string" ? new Date(u || 0) : u;
  try {
    return Qo(e, "time", a, d).formatToParts(h);
  } catch (m) {
    e.onError(new xn("Error formatting time.", e.locale, m));
  }
  return [];
}
var CS = [
  "style",
  "type",
  "fallback",
  "languageDisplay"
];
function AS(e, a, r, l) {
  var u = e.locale, c = e.onError;
  Intl.DisplayNames || c(new ni(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, Kn.MISSING_INTL_API));
  var d = kr(l, CS);
  try {
    return a(u, d).of(r);
  } catch (h) {
    c(new xn("Error formatting display name.", u, h));
  }
}
var xS = ["type", "style"], T0 = Date.now();
function OS(e) {
  return "".concat(T0, "_").concat(e, "_").concat(T0);
}
function MS(e, a, r, l) {
  l === void 0 && (l = {});
  var u = g1(e, a, r, l).reduce(function(c, d) {
    var h = d.value;
    return typeof h != "string" ? c.push(h) : typeof c[c.length - 1] == "string" ? c[c.length - 1] += h : c.push(h), c;
  }, []);
  return u.length === 1 ? u[0] : u.length === 0 ? "" : u;
}
function g1(e, a, r, l) {
  var u = e.locale, c = e.onError;
  l === void 0 && (l = {}), Intl.ListFormat || c(new ni(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, Kn.MISSING_INTL_API));
  var d = kr(l, xS);
  try {
    var h = {}, m = r.map(function(g, p) {
      if (typeof g == "object") {
        var _ = OS(p);
        return h[_] = g, _;
      }
      return String(g);
    });
    return a(u, d).formatToParts(m).map(function(g) {
      return g.type === "literal" ? g : se(se({}, g), { value: h[g.value] || g.value });
    });
  } catch (g) {
    c(new xn("Error formatting list.", u, g));
  }
  return r;
}
var RS = ["type"];
function NS(e, a, r, l) {
  var u = e.locale, c = e.onError;
  l === void 0 && (l = {}), Intl.PluralRules || c(new ni(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Kn.MISSING_INTL_API));
  var d = kr(l, RS);
  try {
    return a(u, d).select(r);
  } catch (h) {
    c(new xn("Error formatting plural.", u, h));
  }
  return "other";
}
var DS = ["numeric", "style"];
function zS(e, a, r) {
  var l = e.locale, u = e.formats, c = e.onError;
  r === void 0 && (r = {});
  var d = r.format, h = !!d && Ud(u, "relative", d, c) || {};
  return a(l, kr(r, DS, h));
}
function LS(e, a, r, l, u) {
  u === void 0 && (u = {}), l || (l = "second"), Intl.RelativeTimeFormat || e.onError(new ni(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, Kn.MISSING_INTL_API));
  try {
    return zS(e, a, u).format(r, l);
  } catch (c) {
    e.onError(new xn("Error formatting relative time.", e.locale, c));
  }
  return String(r);
}
var HS = [
  "style",
  "currency",
  "unit",
  "unitDisplay",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "currencyDisplay",
  "currencySign",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "numberingSystem",
  "trailingZeroDisplay",
  "roundingPriority",
  "roundingIncrement",
  "roundingMode"
];
function y1(e, a, r) {
  var l = e.locale, u = e.formats, c = e.onError;
  r === void 0 && (r = {});
  var d = r.format, h = d && Ud(u, "number", d, c) || {};
  return a(l, kr(r, HS, h));
}
function jS(e, a, r, l) {
  l === void 0 && (l = {});
  try {
    return y1(e, a, l).format(r);
  } catch (u) {
    e.onError(new xn("Error formatting number.", e.locale, u));
  }
  return String(r);
}
function BS(e, a, r, l) {
  l === void 0 && (l = {});
  try {
    return y1(e, a, l).formatToParts(r);
  } catch (u) {
    e.onError(new xn("Error formatting number.", e.locale, u));
  }
  return [];
}
function US(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == "string";
}
function kS(e) {
  e.onWarn && e.defaultRichTextElements && US(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function PS(e, a) {
  var r = yS(a), l = se(se({}, v1), e), u = l.locale, c = l.defaultLocale, d = l.onError;
  return u ? !Intl.NumberFormat.supportedLocalesOf(u).length && d ? d(new w0('Missing locale data for locale: "'.concat(u, '" in Intl.NumberFormat. Using default locale: "').concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(u).length && d && d(new w0('Missing locale data for locale: "'.concat(u, '" in Intl.DateTimeFormat. Using default locale: "').concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (d && d(new hS('"locale" was not configured, using "'.concat(c, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), l.locale = l.defaultLocale || "en"), kS(l), se(se({}, l), {
    formatters: r,
    formatNumber: jS.bind(null, l, r.getNumberFormat),
    formatNumberToParts: BS.bind(null, l, r.getNumberFormat),
    formatRelativeTime: LS.bind(null, l, r.getRelativeTimeFormat),
    formatDate: _S.bind(null, l, r.getDateTimeFormat),
    formatDateToParts: ES.bind(null, l, r.getDateTimeFormat),
    formatTime: wS.bind(null, l, r.getDateTimeFormat),
    formatDateTimeRange: SS.bind(null, l, r.getDateTimeFormat),
    formatTimeToParts: TS.bind(null, l, r.getDateTimeFormat),
    formatPlural: NS.bind(null, l, r.getPluralRules),
    formatMessage: dd.bind(null, l, r),
    $t: dd.bind(null, l, r),
    formatList: MS.bind(null, l, r.getListFormat),
    formatListToParts: g1.bind(null, l, r.getListFormat),
    formatDisplayName: AS.bind(null, l, r.getDisplayNames)
  });
}
function ZS(e, a, r) {
  if (r === void 0 && (r = Error), !e) throw new r(a);
}
function b1(e) {
  ZS(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var _1 = se(se({}, v1), { textComponent: b.Fragment }), IS = { key: 42 }, GS = function(e) {
  return b.isValidElement(e) ? b.createElement(b.Fragment, IS, e) : e;
}, $S = function(e) {
  var a;
  return (a = b.Children.map(e, GS)) !== null && a !== void 0 ? a : [];
};
function VS(e) {
  return function(a) {
    return e(b.Children.toArray(a));
  };
}
function hd(e, a) {
  if (e === a) return !0;
  if (!e || !a) return !1;
  var r = Object.keys(e), l = Object.keys(a), u = r.length;
  if (l.length !== u) return !1;
  for (var c = 0; c < u; c++) {
    var d = r[c];
    if (e[d] !== a[d] || !Object.prototype.hasOwnProperty.call(a, d)) return !1;
  }
  return !0;
}
var FS = /* @__PURE__ */ fn(((e) => {
  var a = typeof Symbol == "function" && Symbol.for, r = a ? /* @__PURE__ */ Symbol.for("react.element") : 60103, l = a ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, u = a ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, c = a ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, d = a ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, h = a ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, m = a ? /* @__PURE__ */ Symbol.for("react.context") : 60110, g = a ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, p = a ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, _ = a ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, S = a ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, T = a ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, x = a ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, C = a ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, A = a ? /* @__PURE__ */ Symbol.for("react.block") : 60121, M = a ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, N = a ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, D = a ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function R(H) {
    if (typeof H == "object" && H !== null) {
      var q = H.$$typeof;
      switch (q) {
        case r:
          switch (H = H.type, H) {
            case g:
            case p:
            case u:
            case d:
            case c:
            case S:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case m:
                case _:
                case C:
                case x:
                case h:
                  return H;
                default:
                  return q;
              }
          }
        case l:
          return q;
      }
    }
  }
  function B(H) {
    return R(H) === p;
  }
  e.AsyncMode = g, e.ConcurrentMode = p, e.ContextConsumer = m, e.ContextProvider = h, e.Element = r, e.ForwardRef = _, e.Fragment = u, e.Lazy = C, e.Memo = x, e.Portal = l, e.Profiler = d, e.StrictMode = c, e.Suspense = S, e.isAsyncMode = function(H) {
    return B(H) || R(H) === g;
  }, e.isConcurrentMode = B, e.isContextConsumer = function(H) {
    return R(H) === m;
  }, e.isContextProvider = function(H) {
    return R(H) === h;
  }, e.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === r;
  }, e.isForwardRef = function(H) {
    return R(H) === _;
  }, e.isFragment = function(H) {
    return R(H) === u;
  }, e.isLazy = function(H) {
    return R(H) === C;
  }, e.isMemo = function(H) {
    return R(H) === x;
  }, e.isPortal = function(H) {
    return R(H) === l;
  }, e.isProfiler = function(H) {
    return R(H) === d;
  }, e.isStrictMode = function(H) {
    return R(H) === c;
  }, e.isSuspense = function(H) {
    return R(H) === S;
  }, e.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === u || H === p || H === d || H === c || H === S || H === T || typeof H == "object" && H !== null && (H.$$typeof === C || H.$$typeof === x || H.$$typeof === h || H.$$typeof === m || H.$$typeof === _ || H.$$typeof === M || H.$$typeof === N || H.$$typeof === D || H.$$typeof === A);
  }, e.typeOf = R;
})), XS = /* @__PURE__ */ fn(((e, a) => {
  a.exports = FS();
})), qS = /* @__PURE__ */ fn(((e, a) => {
  var r = XS(), l = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, u = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, c = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, d = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, h = {};
  h[r.ForwardRef] = c, h[r.Memo] = d;
  function m(A) {
    return r.isMemo(A) ? d : h[A.$$typeof] || l;
  }
  var g = Object.defineProperty, p = Object.getOwnPropertyNames, _ = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, T = Object.getPrototypeOf, x = Object.prototype;
  function C(A, M, N) {
    if (typeof M != "string") {
      if (x) {
        var D = T(M);
        D && D !== x && C(A, D, N);
      }
      var R = p(M);
      _ && (R = R.concat(_(M)));
      for (var B = m(A), H = m(M), q = 0; q < R.length; ++q) {
        var ee = R[q];
        if (!u[ee] && !(N && N[ee]) && !(H && H[ee]) && !(B && B[ee])) {
          var F = S(M, ee);
          try {
            g(A, ee, F);
          } catch {
          }
        }
      }
    }
    return A;
  }
  a.exports = C;
})), QM = /* @__PURE__ */ Hd(qS()), kd = b.createContext(null), KM = kd.Consumer, YS = kd.Provider, WS = YS, QS = kd;
function Xe() {
  var e = b.useContext(QS);
  return b1(e), e;
}
var md;
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(md || (md = {}));
var vd;
(function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
})(vd || (vd = {}));
var w1 = function(e) {
  var a = Xe(), r = e.value, l = e.children, u = Sa(e, ["value", "children"]);
  return l(a.formatNumberToParts(r, u));
};
w1.displayName = "FormattedNumberParts";
w1.displayName = "FormattedNumberParts";
function S1(e) {
  var a = function(r) {
    var l = Xe(), u = r.value, c = r.children, d = Sa(r, ["value", "children"]), h = typeof u == "string" ? new Date(u || 0) : u;
    return c(e === "formatDate" ? l.formatDateToParts(h, d) : l.formatTimeToParts(h, d));
  };
  return a.displayName = vd[e], a;
}
function Ko(e) {
  var a = function(r) {
    var l = Xe(), u = r.value, c = r.children, d = Sa(r, ["value", "children"]), h = l[e](u, d);
    if (typeof c == "function") return c(h);
    var m = l.textComponent || b.Fragment;
    return b.createElement(m, null, h);
  };
  return a.displayName = md[e], a;
}
function E1(e) {
  return e && Object.keys(e).reduce(function(a, r) {
    var l = e[r];
    return a[r] = h1(l) ? VS(l) : l, a;
  }, {});
}
var C0 = function(e, a, r, l) {
  for (var u = [], c = 4; c < arguments.length; c++) u[c - 4] = arguments[c];
  var d = E1(l), h = dd.apply(void 0, zn([
    e,
    a,
    r,
    d
  ], u, !1));
  return Array.isArray(h) ? $S(h) : h;
}, A0 = function(e, a) {
  var r = e.defaultRichTextElements, l = Sa(e, ["defaultRichTextElements"]), u = E1(r), c = PS(se(se(se({}, _1), l), { defaultRichTextElements: u }), a), d = {
    locale: c.locale,
    timeZone: c.timeZone,
    fallbackOnEmptyString: c.fallbackOnEmptyString,
    formats: c.formats,
    defaultLocale: c.defaultLocale,
    defaultFormats: c.defaultFormats,
    messages: c.messages,
    onError: c.onError,
    defaultRichTextElements: u
  };
  return se(se({}, c), {
    formatMessage: C0.bind(null, d, c.formatters),
    $t: C0.bind(null, d, c.formatters)
  });
};
function KS(e, a) {
  var r = e.values, l = Sa(e, ["values"]), u = a.values, c = Sa(a, ["values"]);
  return hd(u, r) && hd(l, c);
}
function T1(e) {
  var a = Xe(), r = a.formatMessage, l = a.textComponent, u = l === void 0 ? b.Fragment : l, c = e.id, d = e.description, h = e.defaultMessage, m = e.values, g = e.children, p = e.tagName, _ = p === void 0 ? u : p, S = e.ignoreTag, T = r({
    id: c,
    description: d,
    defaultMessage: h
  }, m, { ignoreTag: S });
  return typeof g == "function" ? g(Array.isArray(T) ? T : [T]) : _ ? b.createElement(_, null, T) : b.createElement(b.Fragment, null, T);
}
T1.displayName = "FormattedMessage";
var Wa = b.memo(T1, KS);
Wa.displayName = "MemoizedFormattedMessage";
function Uf(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements
  };
}
var JS = (function(e) {
  An(a, e);
  function a() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.cache = p1(), r.state = {
      cache: r.cache,
      intl: A0(Uf(r.props), r.cache),
      prevConfig: Uf(r.props)
    }, r;
  }
  return a.getDerivedStateFromProps = function(r, l) {
    var u = l.prevConfig, c = l.cache, d = Uf(r);
    return hd(u, d) ? null : {
      intl: A0(d, c),
      prevConfig: d
    };
  }, a.prototype.render = function() {
    return b1(this.state.intl), b.createElement(WS, { value: this.state.intl }, this.props.children);
  }, a.displayName = "IntlProvider", a.defaultProps = _1, a;
})(b.PureComponent);
var JM = Ko("formatDate"), eR = Ko("formatTime"), tR = Ko("formatNumber"), nR = Ko("formatList"), aR = Ko("formatDisplayName"), iR = S1("formatDate"), rR = S1("formatTime"), x0 = (e) => {
  let a;
  const r = /* @__PURE__ */ new Set(), l = (g, p) => {
    const _ = typeof g == "function" ? g(a) : g;
    if (!Object.is(_, a)) {
      const S = a;
      a = p ?? (typeof _ != "object" || _ === null) ? _ : Object.assign({}, a, _), r.forEach((T) => T(a, S));
    }
  }, u = () => a, h = {
    setState: l,
    getState: u,
    getInitialState: () => m,
    subscribe: (g) => (r.add(g), () => r.delete(g))
  }, m = a = e(l, u, h);
  return h;
}, Pd = ((e) => e ? x0(e) : x0), eE = (e) => e;
function es(e, a = eE) {
  const r = b.useSyncExternalStore(e.subscribe, b.useCallback(() => a(e.getState()), [e, a]), b.useCallback(() => a(e.getInitialState()), [e, a]));
  return b.useDebugValue(r), r;
}
var Go = "en-US", C1 = [
  "am",
  "ar",
  "bg-BG",
  "bn-BD",
  "bs-BA",
  "ca-ES",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "es-419",
  "es-ES",
  "et-EE",
  "fa",
  "fi-FI",
  "fr-CA",
  "fr-FR",
  "gu-IN",
  "hi-IN",
  "hr-HR",
  "hu-HU",
  "hy-AM",
  "id-ID",
  "is-IS",
  "it-IT",
  "ja-JP",
  "ka-GE",
  "kk",
  "kn-IN",
  "ko-KR",
  "lt",
  "lv-LV",
  "mk-MK",
  "ml",
  "mn",
  "mr-IN",
  "ms-MY",
  "my-MM",
  "nb-NO",
  "nl-NL",
  "pa",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sl-SI",
  "so-SO",
  "sq-AL",
  "sr-RS",
  "sv-SE",
  "sw-TZ",
  "ta-IN",
  "te-IN",
  "th-TH",
  "tl",
  "tr-TR",
  "uk-UA",
  "ur",
  "vi-VN",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], tE = new Map(C1.map((e) => [e.toLowerCase(), e])), jt = new Map([[Go.toLowerCase(), Go], ...tE]);
for (const e of [Go, ...C1]) {
  const a = new Intl.Locale(e).language.toLowerCase();
  jt.set(a, jt.get(a) ?? e);
}
jt.set("es", "es-ES");
jt.set("fr", "fr-FR");
jt.set("bn-in", "bn-BD");
jt.set("en-in", Go);
jt.set("ml-in", "ml");
jt.set("pa-guru", "pa");
jt.set("pa-guru-in", "pa");
for (const e of [
  "pt-ao",
  "pt-ch",
  "pt-cv",
  "pt-fr",
  "pt-gq",
  "pt-gw",
  "pt-lu",
  "pt-mo",
  "pt-mz",
  "pt-st",
  "pt-tl"
]) jt.set(e, "pt-PT");
jt.set("ur-in", "ur");
jt.set("zh-hant", "zh-TW");
jt.set("zh-hant-tw", "zh-TW");
jt.set("zh-hant-hk", "zh-HK");
function nE(e) {
  const a = e.trim().replaceAll("_", "-").toLowerCase();
  if (!a || a === "pa-arab" || a.startsWith("pa-arab-")) return;
  if (a.startsWith("es-") && a !== "es-es" && a !== "es-419") return "es-419";
  const r = jt.get(a);
  if (r) return r;
  const l = a.split("-");
  for (let u = l.length - 1; u >= 1; u -= 1) {
    const c = jt.get(l.slice(0, u).join("-"));
    if (c) return c;
  }
}
function ai(e) {
  const a = e.split("-", 1)[0];
  return a && [
    "ar",
    "fa",
    "ur"
  ].includes(a) ? "rtl" : "ltr";
}
var $e = {
  editorWidgetMobileMenu: {
    id: "sites.dispatch.widget.editor.mobile_menu",
    defaultMessage: "Site toolbar",
    description: "Accessible label for the draggable mobile Site toolbar and its actions popup."
  },
  editorWidgetMobileClose: {
    id: "sites.dispatch.widget.editor.mobile_close",
    defaultMessage: "Close",
    description: "Mobile Site toolbar action that closes the menu without hiding the toolbar or changing its saved preference."
  },
  editorWidgetHideHint: {
    id: "sites.dispatch.widget.editor.hide_hint",
    defaultMessage: "Hover over this corner to bring back the toolbar.",
    description: "Tooltip at the corner after first hiding the Site editor widget, and on sustained hover over the hidden widget corner. A restore keyboard shortcut is shown beside this text."
  },
  editorWidgetRestoreAction: {
    id: "sites.dispatch.widget.editor.restore_action",
    defaultMessage: "Bring back toolbar",
    description: "Action beside the keyboard shortcut that restores the tucked Site editor widget."
  },
  editorWidgetHideHintBottomCenter: {
    id: "sites.dispatch.widget.editor.hide_hint.bottom_center",
    defaultMessage: "Hover here to bring back the toolbar.",
    description: "Tooltip above the restore target at the bottom center of a Site after the toolbar is hidden. Hovering over this target reveals the toolbar; a restore keyboard shortcut is shown beside this text."
  },
  invitationBannerLabel: {
    id: "sites.dispatch.widget.invitation_banner.label",
    defaultMessage: "Site editing controls",
    description: "Accessible label for the banner inviting someone to edit a ChatGPT Site."
  },
  invitationBannerMessage: {
    id: "sites.dispatch.widget.invitation_banner.message",
    defaultMessage: "You have been invited to edit this site.",
    description: "Message shown to someone who has been invited to edit a ChatGPT Site when the owner's name is unavailable."
  },
  invitationBannerMessageWithOwner: {
    id: "sites.dispatch.widget.invitation_banner.message_with_owner",
    defaultMessage: "<strong>{ownerName}</strong> has invited you to edit this site.",
    description: "Message shown to someone invited to edit a ChatGPT Site. ownerName is the site owner's display name."
  },
  invitationBannerEditAction: {
    id: "sites.dispatch.widget.invitation_banner.edit_action",
    defaultMessage: "Edit in ChatGPT",
    description: "Link that opens ChatGPT so an invited editor can edit a ChatGPT Site."
  },
  editorWidgetDefaultEditPrompt: {
    id: "sites.dispatch.widget.editor.default_edit_prompt",
    defaultMessage: "{site} make these changes…",
    description: "Default editable prompt when the Site widget logo opens ChatGPT. Matches the desktop Site edit prompt. site is the complete Site reference and must remain a placeholder."
  },
  invitationBannerEditPrompt: {
    id: "sites.dispatch.widget.invitation_banner.edit_prompt",
    defaultMessage: "Make the following changes to {site}:",
    description: "Prompt prefilled in ChatGPT when an invited editor opens a Site. site is the complete Site reference and must remain a placeholder."
  },
  invitationBannerDismissAction: {
    id: "sites.dispatch.widget.invitation_banner.dismiss_action",
    defaultMessage: "Dismiss",
    description: "Accessible label for the button that dismisses a ChatGPT Site editing invitation banner."
  },
  editorWidgetLaunchAction: {
    id: "sites.dispatch.widget.editor.launch_action",
    defaultMessage: "Edit site",
    description: "Short button label in the floating editor-only widget on a hosted website. Opens a text composer for describing changes to that website. Site means a hosted website, not a physical location. No placeholders."
  },
  editorWidgetOpenAction: {
    id: "sites.dispatch.widget.editor.open_action",
    defaultMessage: "Edit site in ChatGPT",
    description: "Accessible label and tooltip for the ChatGPT logo link in the floating editor-only Site widget. Opens this website's full-screen editor in ChatGPT in a new tab. Short action label; no placeholders."
  },
  editorWidgetLaunchTooltip: {
    id: "sites.dispatch.widget.editor.launch_tooltip",
    defaultMessage: "Describe your changes to ChatGPT",
    description: "Tooltip on the Edit site button in the floating editor-only Site widget. The button opens a text composer for describing desired changes to this website. Short action phrase; no placeholders."
  },
  editorWidgetComposerLabel: {
    id: "sites.dispatch.widget.editor.composer_label",
    defaultMessage: "Describe your edits",
    description: "Screen-reader label for the plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
  },
  editorWidgetComposerPlaceholder: {
    id: "sites.dispatch.widget.editor.composer_placeholder",
    defaultMessage: "Describe your edits",
    description: "Short placeholder in the empty plain-text composer in the floating editor-only widget on a hosted website. Asks the editor to describe changes they want ChatGPT to make to this website. No placeholders."
  },
  editorWidgetSendAction: {
    id: "sites.dispatch.widget.editor.send_action",
    defaultMessage: "Send edits",
    description: "Accessible label for the button that sends requested Site edits to ChatGPT."
  },
  editorWidgetHideAction: {
    id: "sites.dispatch.widget.editor.hide_action",
    defaultMessage: "Hide toolbar",
    description: "Accessible label and tooltip for the X button in the floating editor-only widget on a hosted website. Hides this editing widget from the current page without changing the website or its access permissions. Short action label; no placeholders."
  }
}, oR = Object.freeze({ status: "aborted" });
function K(e, a, r) {
  function l(h, m) {
    var g;
    Object.defineProperty(h, "_zod", {
      value: h._zod ?? {},
      enumerable: !1
    }), (g = h._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), h._zod.traits.add(e), a(h, m);
    for (const p in d.prototype) p in h || Object.defineProperty(h, p, { value: d.prototype[p].bind(h) });
    h._zod.constr = d, h._zod.def = m;
  }
  const u = r?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: e });
  function d(h) {
    var m;
    const g = r?.Parent ? new c() : this;
    l(g, h), (m = g._zod).deferred ?? (m.deferred = []);
    for (const p of g._zod.deferred) p();
    return g;
  }
  return Object.defineProperty(d, "init", { value: l }), Object.defineProperty(d, Symbol.hasInstance, { value: (h) => r?.Parent && h instanceof r.Parent ? !0 : h?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Rr = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, A1 = class extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}, pd = {};
function Ri(e) {
  return e && Object.assign(pd, e), pd;
}
function aE(e) {
  const a = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, l]) => a.indexOf(+r) === -1).map(([r, l]) => l);
}
function gd(e, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function Zd(e) {
  return { get value() {
    {
      const a = e();
      return Object.defineProperty(this, "value", { value: a }), a;
    }
    throw new Error("cached value already set");
  } };
}
function Id(e) {
  return e == null;
}
function Gd(e) {
  const a = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(a, r);
}
function iE(e, a) {
  const r = (e.toString().split(".")[1] || "").length, l = a.toString();
  let u = (l.split(".")[1] || "").length;
  if (u === 0 && /\d?e-\d?/.test(l)) {
    const d = l.match(/\d?e-(\d?)/);
    d?.[1] && (u = Number.parseInt(d[1]));
  }
  const c = r > u ? r : u;
  return Number.parseInt(e.toFixed(c).replace(".", "")) % Number.parseInt(a.toFixed(c).replace(".", "")) / 10 ** c;
}
var O0 = /* @__PURE__ */ Symbol("evaluating");
function Fe(e, a, r) {
  let l;
  Object.defineProperty(e, a, {
    get() {
      if (l !== O0)
        return l === void 0 && (l = O0, l = r()), l;
    },
    set(u) {
      Object.defineProperty(e, a, { value: u });
    },
    configurable: !0
  });
}
function ji(e, a, r) {
  Object.defineProperty(e, a, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Bi(...e) {
  const a = {};
  for (const r of e) Object.assign(a, Object.getOwnPropertyDescriptors(r));
  return Object.defineProperties({}, a);
}
function M0(e) {
  return JSON.stringify(e);
}
var x1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Gu(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var rE = Zd(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function $o(e) {
  if (Gu(e) === !1) return !1;
  const a = e.constructor;
  if (a === void 0) return !0;
  const r = a.prototype;
  return !(Gu(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function O1(e) {
  return $o(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
var oE = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]);
function zr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ii(e, a, r) {
  const l = new e._zod.constr(a ?? e._zod.def);
  return (!a || r?.parent) && (l._zod.parent = e), l;
}
function pe(e) {
  const a = e;
  if (!a) return {};
  if (typeof a == "string") return { error: () => a };
  if (a?.message !== void 0) {
    if (a?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  return delete a.message, typeof a.error == "string" ? {
    ...a,
    error: () => a.error
  } : a;
}
function lE(e) {
  return Object.keys(e).filter((a) => e[a]._zod.optin === "optional" && e[a]._zod.optout === "optional");
}
var uE = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function sE(e, a) {
  const r = e._zod.def;
  return ii(e, Bi(e._zod.def, {
    get shape() {
      const l = {};
      for (const u in a) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && (l[u] = r.shape[u]);
      }
      return ji(this, "shape", l), l;
    },
    checks: []
  }));
}
function cE(e, a) {
  const r = e._zod.def;
  return ii(e, Bi(e._zod.def, {
    get shape() {
      const l = { ...e._zod.def.shape };
      for (const u in a) {
        if (!(u in r.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && delete l[u];
      }
      return ji(this, "shape", l), l;
    },
    checks: []
  }));
}
function fE(e, a) {
  if (!$o(a)) throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  return ii(e, Bi(e._zod.def, {
    get shape() {
      const l = {
        ...e._zod.def.shape,
        ...a
      };
      return ji(this, "shape", l), l;
    },
    checks: []
  }));
}
function dE(e, a) {
  if (!$o(a)) throw new Error("Invalid input to safeExtend: expected a plain object");
  return ii(e, {
    ...e._zod.def,
    get shape() {
      const r = {
        ...e._zod.def.shape,
        ...a
      };
      return ji(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  });
}
function hE(e, a) {
  return ii(e, Bi(e._zod.def, {
    get shape() {
      const r = {
        ...e._zod.def.shape,
        ...a._zod.def.shape
      };
      return ji(this, "shape", r), r;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: []
  }));
}
function mE(e, a, r) {
  return ii(a, Bi(a._zod.def, {
    get shape() {
      const l = a._zod.def.shape, u = { ...l };
      if (r) for (const c in r) {
        if (!(c in l)) throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = e ? new e({
          type: "optional",
          innerType: l[c]
        }) : l[c]);
      }
      else for (const c in l) u[c] = e ? new e({
        type: "optional",
        innerType: l[c]
      }) : l[c];
      return ji(this, "shape", u), u;
    },
    checks: []
  }));
}
function vE(e, a, r) {
  return ii(a, Bi(a._zod.def, {
    get shape() {
      const l = a._zod.def.shape, u = { ...l };
      if (r) for (const c in r) {
        if (!(c in u)) throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = new e({
          type: "nonoptional",
          innerType: l[c]
        }));
      }
      else for (const c in l) u[c] = new e({
        type: "nonoptional",
        innerType: l[c]
      });
      return ji(this, "shape", u), u;
    },
    checks: []
  }));
}
function Or(e, a = 0) {
  if (e.aborted === !0) return !0;
  for (let r = a; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function M1(e, a) {
  return a.map((r) => {
    var l;
    return (l = r).path ?? (l.path = []), r.path.unshift(e), r;
  });
}
function Eu(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ni(e, a, r) {
  const l = {
    ...e,
    path: e.path ?? []
  };
  return e.message || (l.message = Eu(e.inst?._zod.def?.error?.(e)) ?? Eu(a?.error?.(e)) ?? Eu(r.customError?.(e)) ?? Eu(r.localeError?.(e)) ?? "Invalid input"), delete l.inst, delete l.continue, a?.reportInput || delete l.input, l;
}
function $d(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Vo(...e) {
  const [a, r, l] = e;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: r,
    inst: l
  } : { ...a };
}
var R1 = (e, a) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: a,
    enumerable: !1
  }), e.message = JSON.stringify(a, gd, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, N1 = K("$ZodError", R1), D1 = K("$ZodError", R1, { Parent: Error });
function pE(e, a = (r) => r.message) {
  const r = {}, l = [];
  for (const u of e.issues) u.path.length > 0 ? (r[u.path[0]] = r[u.path[0]] || [], r[u.path[0]].push(a(u))) : l.push(a(u));
  return {
    formErrors: l,
    fieldErrors: r
  };
}
function gE(e, a = (r) => r.message) {
  const r = { _errors: [] }, l = (u) => {
    for (const c of u.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map((d) => l({ issues: d }));
    else if (c.code === "invalid_key") l({ issues: c.issues });
    else if (c.code === "invalid_element") l({ issues: c.issues });
    else if (c.path.length === 0) r._errors.push(a(c));
    else {
      let d = r, h = 0;
      for (; h < c.path.length; ) {
        const m = c.path[h];
        h !== c.path.length - 1 ? d[m] = d[m] || { _errors: [] } : (d[m] = d[m] || { _errors: [] }, d[m]._errors.push(a(c))), d = d[m], h++;
      }
    }
  };
  return l(e), r;
}
var Vd = (e) => (a, r, l, u) => {
  const c = l ? Object.assign(l, { async: !1 }) : { async: !1 }, d = a._zod.run({
    value: r,
    issues: []
  }, c);
  if (d instanceof Promise) throw new Rr();
  if (d.issues.length) {
    const h = new (u?.Err ?? e)(d.issues.map((m) => Ni(m, c, Ri())));
    throw x1(h, u?.callee), h;
  }
  return d.value;
};
var Fd = (e) => async (a, r, l, u) => {
  const c = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let d = a._zod.run({
    value: r,
    issues: []
  }, c);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const h = new (u?.Err ?? e)(d.issues.map((m) => Ni(m, c, Ri())));
    throw x1(h, u?.callee), h;
  }
  return d.value;
};
var ts = (e) => (a, r, l) => {
  const u = l ? {
    ...l,
    async: !1
  } : { async: !1 }, c = a._zod.run({
    value: r,
    issues: []
  }, u);
  if (c instanceof Promise) throw new Rr();
  return c.issues.length ? {
    success: !1,
    error: new (e ?? N1)(c.issues.map((d) => Ni(d, u, Ri())))
  } : {
    success: !0,
    data: c.value
  };
}, yE = /* @__PURE__ */ ts(D1), ns = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { async: !0 }) : { async: !0 };
  let c = a._zod.run({
    value: r,
    issues: []
  }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new e(c.issues.map((d) => Ni(d, u, Ri())))
  } : {
    success: !0,
    data: c.value
  };
}, bE = /* @__PURE__ */ ns(D1), _E = (e) => (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Vd(e)(a, r, u);
};
var wE = (e) => (a, r, l) => Vd(e)(a, r, l);
var SE = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return Fd(e)(a, r, u);
};
var EE = (e) => async (a, r, l) => Fd(e)(a, r, l);
var TE = (e) => (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return ts(e)(a, r, u);
};
var CE = (e) => (a, r, l) => ts(e)(a, r, l);
var AE = (e) => async (a, r, l) => {
  const u = l ? Object.assign(l, { direction: "backward" }) : { direction: "backward" };
  return ns(e)(a, r, u);
};
var xE = (e) => async (a, r, l) => ns(e)(a, r, l);
var OE = /^[cC][^\s-]{8,}$/, ME = /^[0-9a-z]+$/, RE = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, NE = /^[0-9a-vA-V]{20}$/, DE = /^[A-Za-z0-9]{27}$/, zE = /^[a-zA-Z0-9_-]{21}$/, LE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, HE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, R0 = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, jE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, BE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function UE() {
  return new RegExp(BE, "u");
}
var kE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, PE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ZE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, IE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, GE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, z1 = /^[A-Za-z0-9_-]*$/, $E = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, VE = /^\+(?:[0-9]){6,14}[0-9]$/, L1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", FE = /* @__PURE__ */ new RegExp(`^${L1}$`);
function H1(e) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${a}` : e.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${e.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function XE(e) {
  return new RegExp(`^${H1(e)}$`);
}
function qE(e) {
  const a = H1({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const l = `${a}(?:${r.join("|")})`;
  return new RegExp(`^${L1}T(?:${l})$`);
}
var YE = (e) => {
  const a = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, WE = /^-?\d+$/, QE = /^-?\d+(?:\.\d+)?/, KE = /^(?:true|false)$/i, JE = /^[^A-Z]*$/, eT = /^[^a-z]*$/, Wt = /* @__PURE__ */ K("$ZodCheck", (e, a) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = a, (r = e._zod).onattach ?? (r.onattach = []);
}), j1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, B1 = /* @__PURE__ */ K("$ZodCheckLessThan", (e, a) => {
  Wt.init(e, a);
  const r = j1[typeof a.value];
  e._zod.onattach.push((l) => {
    const u = l._zod.bag, c = (a.inclusive ? u.maximum : u.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    a.value < c && (a.inclusive ? u.maximum = a.value : u.exclusiveMaximum = a.value);
  }), e._zod.check = (l) => {
    (a.inclusive ? l.value <= a.value : l.value < a.value) || l.issues.push({
      origin: r,
      code: "too_big",
      maximum: a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: e,
      continue: !a.abort
    });
  };
}), U1 = /* @__PURE__ */ K("$ZodCheckGreaterThan", (e, a) => {
  Wt.init(e, a);
  const r = j1[typeof a.value];
  e._zod.onattach.push((l) => {
    const u = l._zod.bag, c = (a.inclusive ? u.minimum : u.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    a.value > c && (a.inclusive ? u.minimum = a.value : u.exclusiveMinimum = a.value);
  }), e._zod.check = (l) => {
    (a.inclusive ? l.value >= a.value : l.value > a.value) || l.issues.push({
      origin: r,
      code: "too_small",
      minimum: a.value,
      input: l.value,
      inclusive: a.inclusive,
      inst: e,
      continue: !a.abort
    });
  };
}), tT = /* @__PURE__ */ K("$ZodCheckMultipleOf", (e, a) => {
  Wt.init(e, a), e._zod.onattach.push((r) => {
    var l;
    (l = r._zod.bag).multipleOf ?? (l.multipleOf = a.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof a.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % a.value === BigInt(0) : iE(r.value, a.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), nT = /* @__PURE__ */ K("$ZodCheckNumberFormat", (e, a) => {
  Wt.init(e, a), a.format = a.format || "float64";
  const r = a.format?.includes("int"), l = r ? "int" : "number", [u, c] = uE[a.format];
  e._zod.onattach.push((d) => {
    const h = d._zod.bag;
    h.format = a.format, h.minimum = u, h.maximum = c, r && (h.pattern = WE);
  }), e._zod.check = (d) => {
    const h = d.value;
    if (r) {
      if (!Number.isInteger(h)) {
        d.issues.push({
          expected: l,
          format: a.format,
          code: "invalid_type",
          continue: !1,
          input: h,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(h)) {
        h > 0 ? d.issues.push({
          input: h,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: l,
          continue: !a.abort
        }) : d.issues.push({
          input: h,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: l,
          continue: !a.abort
        });
        return;
      }
    }
    h < u && d.issues.push({
      origin: "number",
      input: h,
      code: "too_small",
      minimum: u,
      inclusive: !0,
      inst: e,
      continue: !a.abort
    }), h > c && d.issues.push({
      origin: "number",
      input: h,
      code: "too_big",
      maximum: c,
      inst: e
    });
  };
}), aT = /* @__PURE__ */ K("$ZodCheckMaxLength", (e, a) => {
  var r;
  Wt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !Id(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < u && (l._zod.bag.maximum = a.maximum);
  }), e._zod.check = (l) => {
    const u = l.value;
    if (u.length <= a.maximum) return;
    const c = $d(u);
    l.issues.push({
      origin: c,
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: u,
      inst: e,
      continue: !a.abort
    });
  };
}), iT = /* @__PURE__ */ K("$ZodCheckMinLength", (e, a) => {
  var r;
  Wt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !Id(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > u && (l._zod.bag.minimum = a.minimum);
  }), e._zod.check = (l) => {
    const u = l.value;
    if (u.length >= a.minimum) return;
    const c = $d(u);
    l.issues.push({
      origin: c,
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: u,
      inst: e,
      continue: !a.abort
    });
  };
}), rT = /* @__PURE__ */ K("$ZodCheckLengthEquals", (e, a) => {
  var r;
  Wt.init(e, a), (r = e._zod.def).when ?? (r.when = (l) => {
    const u = l.value;
    return !Id(u) && u.length !== void 0;
  }), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.minimum = a.length, u.maximum = a.length, u.length = a.length;
  }), e._zod.check = (l) => {
    const u = l.value, c = u.length;
    if (c === a.length) return;
    const d = $d(u), h = c > a.length;
    l.issues.push({
      origin: d,
      ...h ? {
        code: "too_big",
        maximum: a.length
      } : {
        code: "too_small",
        minimum: a.length
      },
      inclusive: !0,
      exact: !0,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), as = /* @__PURE__ */ K("$ZodCheckStringFormat", (e, a) => {
  var r, l;
  Wt.init(e, a), e._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = a.format, a.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a.pattern));
  }), a.pattern ? (r = e._zod).check ?? (r.check = (u) => {
    a.pattern.lastIndex = 0, !a.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: a.format,
      input: u.value,
      ...a.pattern ? { pattern: a.pattern.toString() } : {},
      inst: e,
      continue: !a.abort
    });
  }) : (l = e._zod).check ?? (l.check = () => {
  });
}), oT = /* @__PURE__ */ K("$ZodCheckRegex", (e, a) => {
  as.init(e, a), e._zod.check = (r) => {
    a.pattern.lastIndex = 0, !a.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: a.pattern.toString(),
      inst: e,
      continue: !a.abort
    });
  };
}), lT = /* @__PURE__ */ K("$ZodCheckLowerCase", (e, a) => {
  a.pattern ?? (a.pattern = JE), as.init(e, a);
}), uT = /* @__PURE__ */ K("$ZodCheckUpperCase", (e, a) => {
  a.pattern ?? (a.pattern = eT), as.init(e, a);
}), sT = /* @__PURE__ */ K("$ZodCheckIncludes", (e, a) => {
  Wt.init(e, a);
  const r = zr(a.includes), l = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${r}` : r);
  a.pattern = l, e._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(l);
  }), e._zod.check = (u) => {
    u.value.includes(a.includes, a.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: a.includes,
      input: u.value,
      inst: e,
      continue: !a.abort
    });
  };
}), cT = /* @__PURE__ */ K("$ZodCheckStartsWith", (e, a) => {
  Wt.init(e, a);
  const r = new RegExp(`^${zr(a.prefix)}.*`);
  a.pattern ?? (a.pattern = r), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (l) => {
    l.value.startsWith(a.prefix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: a.prefix,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), fT = /* @__PURE__ */ K("$ZodCheckEndsWith", (e, a) => {
  Wt.init(e, a);
  const r = new RegExp(`.*${zr(a.suffix)}$`);
  a.pattern ?? (a.pattern = r), e._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r);
  }), e._zod.check = (l) => {
    l.value.endsWith(a.suffix) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: a.suffix,
      input: l.value,
      inst: e,
      continue: !a.abort
    });
  };
}), dT = /* @__PURE__ */ K("$ZodCheckOverwrite", (e, a) => {
  Wt.init(e, a), e._zod.check = (r) => {
    r.value = a.tx(r.value);
  };
}), hT = class {
  constructor(e = []) {
    this.content = [], this.indent = 0, this && (this.args = e);
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
  }
  write(e) {
    if (typeof e == "function") {
      e(this, { execution: "sync" }), e(this, { execution: "async" });
      return;
    }
    const a = e.split(`
`).filter((u) => u), r = Math.min(...a.map((u) => u.length - u.trimStart().length)), l = a.map((u) => u.slice(r)).map((u) => " ".repeat(this.indent * 2) + u);
    for (const u of l) this.content.push(u);
  }
  compile() {
    const e = Function, a = this?.args, r = [...(this?.content ?? [""]).map((l) => `  ${l}`)];
    return new e(...a, r.join(`
`));
  }
}, mT = {
  major: 4,
  minor: 1,
  patch: 12
}, rt = /* @__PURE__ */ K("$ZodType", (e, a) => {
  var r;
  e ?? (e = {}), e._zod.def = a, e._zod.bag = e._zod.bag || {}, e._zod.version = mT;
  const l = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && l.unshift(e);
  for (const u of l) for (const c of u._zod.onattach) c(e);
  if (l.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const u = (d, h, m) => {
      let g = Or(d), p;
      for (const _ of h) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(d)) continue;
        } else if (g) continue;
        const S = d.issues.length, T = _._zod.check(d);
        if (T instanceof Promise && m?.async === !1) throw new Rr();
        if (p || T instanceof Promise) p = (p ?? Promise.resolve()).then(async () => {
          await T, d.issues.length !== S && (g || (g = Or(d, S)));
        });
        else {
          if (d.issues.length === S) continue;
          g || (g = Or(d, S));
        }
      }
      return p ? p.then(() => d) : d;
    }, c = (d, h, m) => {
      if (Or(d))
        return d.aborted = !0, d;
      const g = u(h, l, m);
      if (g instanceof Promise) {
        if (m.async === !1) throw new Rr();
        return g.then((p) => e._zod.parse(p, m));
      }
      return e._zod.parse(g, m);
    };
    e._zod.run = (d, h) => {
      if (h.skipChecks) return e._zod.parse(d, h);
      if (h.direction === "backward") {
        const g = e._zod.parse({
          value: d.value,
          issues: []
        }, {
          ...h,
          skipChecks: !0
        });
        return g instanceof Promise ? g.then((p) => c(p, d, h)) : c(g, d, h);
      }
      const m = e._zod.parse(d, h);
      if (m instanceof Promise) {
        if (h.async === !1) throw new Rr();
        return m.then((g) => u(g, l, h));
      }
      return u(m, l, h);
    };
  }
  e["~standard"] = {
    validate: (u) => {
      try {
        const c = yE(e, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return bE(e, u).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Xd = /* @__PURE__ */ K("$ZodString", (e, a) => {
  rt.init(e, a), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? YE(e._zod.bag), e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = String(r.value);
    } catch {
    }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), et = /* @__PURE__ */ K("$ZodStringFormat", (e, a) => {
  as.init(e, a), Xd.init(e, a);
}), vT = /* @__PURE__ */ K("$ZodGUID", (e, a) => {
  a.pattern ?? (a.pattern = HE), et.init(e, a);
}), pT = /* @__PURE__ */ K("$ZodUUID", (e, a) => {
  if (a.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[a.version];
    if (r === void 0) throw new Error(`Invalid UUID version: "${a.version}"`);
    a.pattern ?? (a.pattern = R0(r));
  } else a.pattern ?? (a.pattern = R0());
  et.init(e, a);
}), gT = /* @__PURE__ */ K("$ZodEmail", (e, a) => {
  a.pattern ?? (a.pattern = jE), et.init(e, a);
}), yT = /* @__PURE__ */ K("$ZodURL", (e, a) => {
  et.init(e, a), e._zod.check = (r) => {
    try {
      const l = r.value.trim(), u = new URL(l);
      a.hostname && (a.hostname.lastIndex = 0, a.hostname.test(u.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: $E.source,
        input: r.value,
        inst: e,
        continue: !a.abort
      })), a.protocol && (a.protocol.lastIndex = 0, a.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: a.protocol.source,
        input: r.value,
        inst: e,
        continue: !a.abort
      })), a.normalize ? r.value = u.href : r.value = l;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
}), bT = /* @__PURE__ */ K("$ZodEmoji", (e, a) => {
  a.pattern ?? (a.pattern = UE()), et.init(e, a);
}), _T = /* @__PURE__ */ K("$ZodNanoID", (e, a) => {
  a.pattern ?? (a.pattern = zE), et.init(e, a);
}), wT = /* @__PURE__ */ K("$ZodCUID", (e, a) => {
  a.pattern ?? (a.pattern = OE), et.init(e, a);
}), ST = /* @__PURE__ */ K("$ZodCUID2", (e, a) => {
  a.pattern ?? (a.pattern = ME), et.init(e, a);
}), ET = /* @__PURE__ */ K("$ZodULID", (e, a) => {
  a.pattern ?? (a.pattern = RE), et.init(e, a);
}), TT = /* @__PURE__ */ K("$ZodXID", (e, a) => {
  a.pattern ?? (a.pattern = NE), et.init(e, a);
}), CT = /* @__PURE__ */ K("$ZodKSUID", (e, a) => {
  a.pattern ?? (a.pattern = DE), et.init(e, a);
}), AT = /* @__PURE__ */ K("$ZodISODateTime", (e, a) => {
  a.pattern ?? (a.pattern = qE(a)), et.init(e, a);
}), xT = /* @__PURE__ */ K("$ZodISODate", (e, a) => {
  a.pattern ?? (a.pattern = FE), et.init(e, a);
}), OT = /* @__PURE__ */ K("$ZodISOTime", (e, a) => {
  a.pattern ?? (a.pattern = XE(a)), et.init(e, a);
}), MT = /* @__PURE__ */ K("$ZodISODuration", (e, a) => {
  a.pattern ?? (a.pattern = LE), et.init(e, a);
}), RT = /* @__PURE__ */ K("$ZodIPv4", (e, a) => {
  a.pattern ?? (a.pattern = kE), et.init(e, a), e._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.format = "ipv4";
  });
}), NT = /* @__PURE__ */ K("$ZodIPv6", (e, a) => {
  a.pattern ?? (a.pattern = PE), et.init(e, a), e._zod.onattach.push((r) => {
    const l = r._zod.bag;
    l.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
}), DT = /* @__PURE__ */ K("$ZodCIDRv4", (e, a) => {
  a.pattern ?? (a.pattern = ZE), et.init(e, a);
}), zT = /* @__PURE__ */ K("$ZodCIDRv6", (e, a) => {
  a.pattern ?? (a.pattern = IE), et.init(e, a), e._zod.check = (r) => {
    const l = r.value.split("/");
    try {
      if (l.length !== 2) throw new Error();
      const [u, c] = l;
      if (!c) throw new Error();
      const d = Number(c);
      if (`${d}` !== c) throw new Error();
      if (d < 0 || d > 128) throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !a.abort
      });
    }
  };
});
function k1(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
var LT = /* @__PURE__ */ K("$ZodBase64", (e, a) => {
  a.pattern ?? (a.pattern = GE), et.init(e, a), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    k1(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
});
function HT(e) {
  if (!z1.test(e)) return !1;
  const a = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/");
  return k1(a.padEnd(Math.ceil(a.length / 4) * 4, "="));
}
var jT = /* @__PURE__ */ K("$ZodBase64URL", (e, a) => {
  a.pattern ?? (a.pattern = z1), et.init(e, a), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    HT(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), BT = /* @__PURE__ */ K("$ZodE164", (e, a) => {
  a.pattern ?? (a.pattern = VE), et.init(e, a);
});
function UT(e, a = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3) return !1;
    const [l] = r;
    if (!l) return !1;
    const u = JSON.parse(atob(l));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || a && (!("alg" in u) || u.alg !== a));
  } catch {
    return !1;
  }
}
var kT = /* @__PURE__ */ K("$ZodJWT", (e, a) => {
  et.init(e, a), e._zod.check = (r) => {
    UT(r.value, a.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !a.abort
    });
  };
}), P1 = /* @__PURE__ */ K("$ZodNumber", (e, a) => {
  rt.init(e, a), e._zod.pattern = e._zod.bag.pattern ?? QE, e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = Number(r.value);
    } catch {
    }
    const u = r.value;
    if (typeof u == "number" && !Number.isNaN(u) && Number.isFinite(u)) return r;
    const c = typeof u == "number" ? Number.isNaN(u) ? "NaN" : Number.isFinite(u) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: u,
      inst: e,
      ...c ? { received: c } : {}
    }), r;
  };
}), PT = /* @__PURE__ */ K("$ZodNumber", (e, a) => {
  nT.init(e, a), P1.init(e, a);
}), ZT = /* @__PURE__ */ K("$ZodBoolean", (e, a) => {
  rt.init(e, a), e._zod.pattern = KE, e._zod.parse = (r, l) => {
    if (a.coerce) try {
      r.value = !!r.value;
    } catch {
    }
    const u = r.value;
    return typeof u == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: u,
      inst: e
    }), r;
  };
}), IT = /* @__PURE__ */ K("$ZodUnknown", (e, a) => {
  rt.init(e, a), e._zod.parse = (r) => r;
}), GT = /* @__PURE__ */ K("$ZodNever", (e, a) => {
  rt.init(e, a), e._zod.parse = (r, l) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function N0(e, a, r) {
  e.issues.length && a.issues.push(...M1(r, e.issues)), a.value[r] = e.value;
}
var $T = /* @__PURE__ */ K("$ZodArray", (e, a) => {
  rt.init(e, a), e._zod.parse = (r, l) => {
    const u = r.value;
    if (!Array.isArray(u))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: e
      }), r;
    r.value = Array(u.length);
    const c = [];
    for (let d = 0; d < u.length; d++) {
      const h = u[d], m = a.element._zod.run({
        value: h,
        issues: []
      }, l);
      m instanceof Promise ? c.push(m.then((g) => N0(g, r, d))) : N0(m, r, d);
    }
    return c.length ? Promise.all(c).then(() => r) : r;
  };
});
function $u(e, a, r, l) {
  e.issues.length && a.issues.push(...M1(r, e.issues)), e.value === void 0 ? r in l && (a.value[r] = void 0) : a.value[r] = e.value;
}
function Z1(e) {
  const a = Object.keys(e.shape);
  for (const l of a) if (!e.shape?.[l]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${l}": expected a Zod schema`);
  const r = lE(e.shape);
  return {
    ...e,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(r)
  };
}
function I1(e, a, r, l, u, c) {
  const d = [], h = u.keySet, m = u.catchall._zod, g = m.def.type;
  for (const p of Object.keys(a)) {
    if (h.has(p)) continue;
    if (g === "never") {
      d.push(p);
      continue;
    }
    const _ = m.run({
      value: a[p],
      issues: []
    }, l);
    _ instanceof Promise ? e.push(_.then((S) => $u(S, r, p, a))) : $u(_, r, p, a);
  }
  return d.length && r.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: a,
    inst: c
  }), e.length ? Promise.all(e).then(() => r) : r;
}
var VT = /* @__PURE__ */ K("$ZodObject", (e, a) => {
  if (rt.init(e, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const d = a.shape;
    Object.defineProperty(a, "shape", { get: () => {
      const h = { ...d };
      return Object.defineProperty(a, "shape", { value: h }), h;
    } });
  }
  const r = Zd(() => Z1(a));
  Fe(e._zod, "propValues", () => {
    const d = a.shape, h = {};
    for (const m in d) {
      const g = d[m]._zod;
      if (g.values) {
        h[m] ?? (h[m] = /* @__PURE__ */ new Set());
        for (const p of g.values) h[m].add(p);
      }
    }
    return h;
  });
  const l = Gu, u = a.catchall;
  let c;
  e._zod.parse = (d, h) => {
    c ?? (c = r.value);
    const m = d.value;
    if (!l(m))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: e
      }), d;
    d.value = {};
    const g = [], p = c.shape;
    for (const _ of c.keys) {
      const S = p[_]._zod.run({
        value: m[_],
        issues: []
      }, h);
      S instanceof Promise ? g.push(S.then((T) => $u(T, d, _, m))) : $u(S, d, _, m);
    }
    return u ? I1(g, m, d, h, r.value, e) : g.length ? Promise.all(g).then(() => d) : d;
  };
}), FT = /* @__PURE__ */ K("$ZodObjectJIT", (e, a) => {
  VT.init(e, a);
  const r = e._zod.parse, l = Zd(() => Z1(a)), u = (S) => {
    const T = new hT([
      "shape",
      "payload",
      "ctx"
    ]), x = l.value, C = (D) => {
      const R = M0(D);
      return `shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`;
    };
    T.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let M = 0;
    for (const D of x.keys) A[D] = `key_${M++}`;
    T.write("const newResult = {};");
    for (const D of x.keys) {
      const R = A[D], B = M0(D);
      T.write(`const ${R} = ${C(D)};`), T.write(`
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${B}, ...iss.path] : [${B}]
          })));
        }
        
        
        if (${R}.value === undefined) {
          if (${B} in input) {
            newResult[${B}] = undefined;
          }
        } else {
          newResult[${B}] = ${R}.value;
        }
        
      `);
    }
    T.write("payload.value = newResult;"), T.write("return payload;");
    const N = T.compile();
    return (D, R) => N(S, D, R);
  };
  let c;
  const d = Gu, h = !pd.jitless, g = h && rE.value, p = a.catchall;
  let _;
  e._zod.parse = (S, T) => {
    _ ?? (_ = l.value);
    const x = S.value;
    return d(x) ? h && g && T?.async === !1 && T.jitless !== !0 ? (c || (c = u(a.shape)), S = c(S, T), p ? I1([], x, S, T, _, e) : S) : r(S, T) : (S.issues.push({
      expected: "object",
      code: "invalid_type",
      input: x,
      inst: e
    }), S);
  };
});
function D0(e, a, r, l) {
  for (const c of e) if (c.issues.length === 0)
    return a.value = c.value, a;
  const u = e.filter((c) => !Or(c));
  return u.length === 1 ? (a.value = u[0].value, u[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: r,
    errors: e.map((c) => c.issues.map((d) => Ni(d, l, Ri())))
  }), a);
}
var XT = /* @__PURE__ */ K("$ZodUnion", (e, a) => {
  rt.init(e, a), Fe(e._zod, "optin", () => a.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), Fe(e._zod, "optout", () => a.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), Fe(e._zod, "values", () => {
    if (a.options.every((u) => u._zod.values)) return new Set(a.options.flatMap((u) => Array.from(u._zod.values)));
  }), Fe(e._zod, "pattern", () => {
    if (a.options.every((u) => u._zod.pattern)) {
      const u = a.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => Gd(c.source)).join("|")})$`);
    }
  });
  const r = a.options.length === 1, l = a.options[0]._zod.run;
  e._zod.parse = (u, c) => {
    if (r) return l(u, c);
    let d = !1;
    const h = [];
    for (const m of a.options) {
      const g = m._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (g instanceof Promise)
        h.push(g), d = !0;
      else {
        if (g.issues.length === 0) return g;
        h.push(g);
      }
    }
    return d ? Promise.all(h).then((m) => D0(m, u, e, c)) : D0(h, u, e, c);
  };
}), qT = /* @__PURE__ */ K("$ZodIntersection", (e, a) => {
  rt.init(e, a), e._zod.parse = (r, l) => {
    const u = r.value, c = a.left._zod.run({
      value: u,
      issues: []
    }, l), d = a.right._zod.run({
      value: u,
      issues: []
    }, l);
    return c instanceof Promise || d instanceof Promise ? Promise.all([c, d]).then(([h, m]) => z0(r, h, m)) : z0(r, c, d);
  };
});
function yd(e, a) {
  if (e === a) return {
    valid: !0,
    data: e
  };
  if (e instanceof Date && a instanceof Date && +e == +a) return {
    valid: !0,
    data: e
  };
  if ($o(e) && $o(a)) {
    const r = Object.keys(a), l = Object.keys(e).filter((c) => r.indexOf(c) !== -1), u = {
      ...e,
      ...a
    };
    for (const c of l) {
      const d = yd(e[c], a[c]);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [c, ...d.mergeErrorPath]
      };
      u[c] = d.data;
    }
    return {
      valid: !0,
      data: u
    };
  }
  if (Array.isArray(e) && Array.isArray(a)) {
    if (e.length !== a.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    const r = [];
    for (let l = 0; l < e.length; l++) {
      const u = e[l], c = a[l], d = yd(u, c);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [l, ...d.mergeErrorPath]
      };
      r.push(d.data);
    }
    return {
      valid: !0,
      data: r
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function z0(e, a, r) {
  if (a.issues.length && e.issues.push(...a.issues), r.issues.length && e.issues.push(...r.issues), Or(e)) return e;
  const l = yd(a.value, r.value);
  if (!l.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  return e.value = l.data, e;
}
var YT = /* @__PURE__ */ K("$ZodEnum", (e, a) => {
  rt.init(e, a);
  const r = aE(a.entries), l = new Set(r);
  e._zod.values = l, e._zod.pattern = new RegExp(`^(${r.filter((u) => oE.has(typeof u)).map((u) => typeof u == "string" ? zr(u) : u.toString()).join("|")})$`), e._zod.parse = (u, c) => {
    const d = u.value;
    return l.has(d) || u.issues.push({
      code: "invalid_value",
      values: r,
      input: d,
      inst: e
    }), u;
  };
}), WT = /* @__PURE__ */ K("$ZodLiteral", (e, a) => {
  if (rt.init(e, a), a.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(a.values), e._zod.pattern = new RegExp(`^(${a.values.map((r) => typeof r == "string" ? zr(r) : r ? zr(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, l) => {
    const u = r.value;
    return e._zod.values.has(u) || r.issues.push({
      code: "invalid_value",
      values: a.values,
      input: u,
      inst: e
    }), r;
  };
}), QT = /* @__PURE__ */ K("$ZodTransform", (e, a) => {
  rt.init(e, a), e._zod.parse = (r, l) => {
    if (l.direction === "backward") throw new A1(e.constructor.name);
    const u = a.transform(r.value, r);
    if (l.async) return (u instanceof Promise ? u : Promise.resolve(u)).then((c) => (r.value = c, r));
    if (u instanceof Promise) throw new Rr();
    return r.value = u, r;
  };
});
function L0(e, a) {
  return e.issues.length && a === void 0 ? {
    issues: [],
    value: void 0
  } : e;
}
var KT = /* @__PURE__ */ K("$ZodOptional", (e, a) => {
  rt.init(e, a), e._zod.optin = "optional", e._zod.optout = "optional", Fe(e._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), Fe(e._zod, "pattern", () => {
    const r = a.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gd(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, l) => {
    if (a.innerType._zod.optin === "optional") {
      const u = a.innerType._zod.run(r, l);
      return u instanceof Promise ? u.then((c) => L0(c, r.value)) : L0(u, r.value);
    }
    return r.value === void 0 ? r : a.innerType._zod.run(r, l);
  };
}), JT = /* @__PURE__ */ K("$ZodNullable", (e, a) => {
  rt.init(e, a), Fe(e._zod, "optin", () => a.innerType._zod.optin), Fe(e._zod, "optout", () => a.innerType._zod.optout), Fe(e._zod, "pattern", () => {
    const r = a.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gd(r.source)}|null)$`) : void 0;
  }), Fe(e._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), e._zod.parse = (r, l) => r.value === null ? r : a.innerType._zod.run(r, l);
}), eC = /* @__PURE__ */ K("$ZodDefault", (e, a) => {
  rt.init(e, a), e._zod.optin = "optional", Fe(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    if (r.value === void 0)
      return r.value = a.defaultValue, r;
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => H0(c, a)) : H0(u, a);
  };
});
function H0(e, a) {
  return e.value === void 0 && (e.value = a.defaultValue), e;
}
var tC = /* @__PURE__ */ K("$ZodPrefault", (e, a) => {
  rt.init(e, a), e._zod.optin = "optional", Fe(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => (l.direction === "backward" || r.value === void 0 && (r.value = a.defaultValue), a.innerType._zod.run(r, l));
}), nC = /* @__PURE__ */ K("$ZodNonOptional", (e, a) => {
  rt.init(e, a), Fe(e._zod, "values", () => {
    const r = a.innerType._zod.values;
    return r ? new Set([...r].filter((l) => l !== void 0)) : void 0;
  }), e._zod.parse = (r, l) => {
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => j0(c, e)) : j0(u, e);
  };
});
function j0(e, a) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: a
  }), e;
}
var aC = /* @__PURE__ */ K("$ZodCatch", (e, a) => {
  rt.init(e, a), Fe(e._zod, "optin", () => a.innerType._zod.optin), Fe(e._zod, "optout", () => a.innerType._zod.optout), Fe(e._zod, "values", () => a.innerType._zod.values), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => (r.value = c.value, c.issues.length && (r.value = a.catchValue({
      ...r,
      error: { issues: c.issues.map((d) => Ni(d, l, Ri())) },
      input: r.value
    }), r.issues = []), r)) : (r.value = u.value, u.issues.length && (r.value = a.catchValue({
      ...r,
      error: { issues: u.issues.map((c) => Ni(c, l, Ri())) },
      input: r.value
    }), r.issues = []), r);
  };
}), iC = /* @__PURE__ */ K("$ZodPipe", (e, a) => {
  rt.init(e, a), Fe(e._zod, "values", () => a.in._zod.values), Fe(e._zod, "optin", () => a.in._zod.optin), Fe(e._zod, "optout", () => a.out._zod.optout), Fe(e._zod, "propValues", () => a.in._zod.propValues), e._zod.parse = (r, l) => {
    if (l.direction === "backward") {
      const c = a.out._zod.run(r, l);
      return c instanceof Promise ? c.then((d) => Tu(d, a.in, l)) : Tu(c, a.in, l);
    }
    const u = a.in._zod.run(r, l);
    return u instanceof Promise ? u.then((c) => Tu(c, a.out, l)) : Tu(u, a.out, l);
  };
});
function Tu(e, a, r) {
  return e.issues.length ? (e.aborted = !0, e) : a._zod.run({
    value: e.value,
    issues: e.issues
  }, r);
}
var rC = /* @__PURE__ */ K("$ZodReadonly", (e, a) => {
  rt.init(e, a), Fe(e._zod, "propValues", () => a.innerType._zod.propValues), Fe(e._zod, "values", () => a.innerType._zod.values), Fe(e._zod, "optin", () => a.innerType._zod.optin), Fe(e._zod, "optout", () => a.innerType._zod.optout), e._zod.parse = (r, l) => {
    if (l.direction === "backward") return a.innerType._zod.run(r, l);
    const u = a.innerType._zod.run(r, l);
    return u instanceof Promise ? u.then(B0) : B0(u);
  };
});
function B0(e) {
  return e.value = Object.freeze(e.value), e;
}
var oC = /* @__PURE__ */ K("$ZodCustom", (e, a) => {
  Wt.init(e, a), rt.init(e, a), e._zod.parse = (r, l) => r, e._zod.check = (r) => {
    const l = r.value, u = a.fn(l);
    if (u instanceof Promise) return u.then((c) => U0(c, r, l, e));
    U0(u, r, l, e);
  };
});
function U0(e, a, r, l) {
  if (!e) {
    const u = {
      code: "custom",
      input: r,
      inst: l,
      path: [...l._zod.def.path ?? []],
      continue: !l._zod.def.abort
    };
    l._zod.def.params && (u.params = l._zod.def.params), a.issues.push(Vo(u));
  }
}
var lC = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e, ...a) {
    const r = a[0];
    if (this._map.set(e, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id)) throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, e);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e) {
    const a = this._map.get(e);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(e), this;
  }
  get(e) {
    const a = e._zod.parent;
    if (a) {
      const r = { ...this.get(a) ?? {} };
      delete r.id;
      const l = {
        ...r,
        ...this._map.get(e)
      };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
};
function uC() {
  return new lC();
}
var Cu = /* @__PURE__ */ uC();
function sC(e, a) {
  return new e({
    type: "string",
    ...pe(a)
  });
}
function G1(e, a) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function k0(e, a) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function cC(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function fC(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...pe(a)
  });
}
function dC(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...pe(a)
  });
}
function hC(e, a) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...pe(a)
  });
}
function mC(e, a) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function vC(e, a) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function pC(e, a) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function gC(e, a) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function yC(e, a) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function bC(e, a) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function _C(e, a) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function wC(e, a) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function SC(e, a) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function EC(e, a) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function TC(e, a) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function CC(e, a) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function AC(e, a) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function xC(e, a) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function OC(e, a) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function MC(e, a) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...pe(a)
  });
}
function RC(e, a) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...pe(a)
  });
}
function NC(e, a) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...pe(a)
  });
}
function DC(e, a) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...pe(a)
  });
}
function zC(e, a) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...pe(a)
  });
}
function LC(e, a) {
  return new e({
    type: "number",
    checks: [],
    ...pe(a)
  });
}
function HC(e, a) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...pe(a)
  });
}
function jC(e, a) {
  return new e({
    type: "boolean",
    ...pe(a)
  });
}
function BC(e) {
  return new e({ type: "unknown" });
}
function UC(e, a) {
  return new e({
    type: "never",
    ...pe(a)
  });
}
function P0(e, a) {
  return new B1({
    check: "less_than",
    ...pe(a),
    value: e,
    inclusive: !1
  });
}
function kf(e, a) {
  return new B1({
    check: "less_than",
    ...pe(a),
    value: e,
    inclusive: !0
  });
}
function Z0(e, a) {
  return new U1({
    check: "greater_than",
    ...pe(a),
    value: e,
    inclusive: !1
  });
}
function Pf(e, a) {
  return new U1({
    check: "greater_than",
    ...pe(a),
    value: e,
    inclusive: !0
  });
}
function I0(e, a) {
  return new tT({
    check: "multiple_of",
    ...pe(a),
    value: e
  });
}
function $1(e, a) {
  return new aT({
    check: "max_length",
    ...pe(a),
    maximum: e
  });
}
function Vu(e, a) {
  return new iT({
    check: "min_length",
    ...pe(a),
    minimum: e
  });
}
function V1(e, a) {
  return new rT({
    check: "length_equals",
    ...pe(a),
    length: e
  });
}
function kC(e, a) {
  return new oT({
    check: "string_format",
    format: "regex",
    ...pe(a),
    pattern: e
  });
}
function PC(e) {
  return new lT({
    check: "string_format",
    format: "lowercase",
    ...pe(e)
  });
}
function ZC(e) {
  return new uT({
    check: "string_format",
    format: "uppercase",
    ...pe(e)
  });
}
function IC(e, a) {
  return new sT({
    check: "string_format",
    format: "includes",
    ...pe(a),
    includes: e
  });
}
function GC(e, a) {
  return new cT({
    check: "string_format",
    format: "starts_with",
    ...pe(a),
    prefix: e
  });
}
function $C(e, a) {
  return new fT({
    check: "string_format",
    format: "ends_with",
    ...pe(a),
    suffix: e
  });
}
function Jo(e) {
  return new dT({
    check: "overwrite",
    tx: e
  });
}
function VC(e) {
  return Jo((a) => a.normalize(e));
}
function FC() {
  return Jo((e) => e.trim());
}
function XC() {
  return Jo((e) => e.toLowerCase());
}
function qC() {
  return Jo((e) => e.toUpperCase());
}
function YC(e, a, r) {
  return new e({
    type: "array",
    element: a,
    ...pe(r)
  });
}
function WC(e, a, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: a,
    ...pe(r)
  });
}
function QC(e) {
  const a = KC((r) => (r.addIssue = (l) => {
    if (typeof l == "string") r.issues.push(Vo(l, r.value, a._zod.def));
    else {
      const u = l;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = r.value), u.inst ?? (u.inst = a), u.continue ?? (u.continue = !a._zod.def.abort), r.issues.push(Vo(u));
    }
  }, e(r.value, r)));
  return a;
}
function KC(e, a) {
  const r = new Wt({
    check: "custom",
    ...pe(a)
  });
  return r._zod.check = e, r;
}
var JC = /* @__PURE__ */ K("ZodISODateTime", (e, a) => {
  AT.init(e, a), tt.init(e, a);
});
function e4(e) {
  return RC(JC, e);
}
var t4 = /* @__PURE__ */ K("ZodISODate", (e, a) => {
  xT.init(e, a), tt.init(e, a);
});
function n4(e) {
  return NC(t4, e);
}
var a4 = /* @__PURE__ */ K("ZodISOTime", (e, a) => {
  OT.init(e, a), tt.init(e, a);
});
function i4(e) {
  return DC(a4, e);
}
var r4 = /* @__PURE__ */ K("ZodISODuration", (e, a) => {
  MT.init(e, a), tt.init(e, a);
});
function o4(e) {
  return zC(r4, e);
}
var F1 = (e, a) => {
  N1.init(e, a), e.name = "ZodError", Object.defineProperties(e, {
    format: { value: (r) => gE(e, r) },
    flatten: { value: (r) => pE(e, r) },
    addIssue: { value: (r) => {
      e.issues.push(r), e.message = JSON.stringify(e.issues, gd, 2);
    } },
    addIssues: { value: (r) => {
      e.issues.push(...r), e.message = JSON.stringify(e.issues, gd, 2);
    } },
    isEmpty: { get() {
      return e.issues.length === 0;
    } }
  });
}, lR = K("ZodError", F1), On = K("ZodError", F1, { Parent: Error }), l4 = /* @__PURE__ */ Vd(On), u4 = /* @__PURE__ */ Fd(On), s4 = /* @__PURE__ */ ts(On), c4 = /* @__PURE__ */ ns(On), f4 = /* @__PURE__ */ _E(On), d4 = /* @__PURE__ */ wE(On), h4 = /* @__PURE__ */ SE(On), m4 = /* @__PURE__ */ EE(On), v4 = /* @__PURE__ */ TE(On), p4 = /* @__PURE__ */ CE(On), g4 = /* @__PURE__ */ AE(On), y4 = /* @__PURE__ */ xE(On), ut = /* @__PURE__ */ K("ZodType", (e, a) => (rt.init(e, a), e.def = a, e.type = a.type, Object.defineProperty(e, "_def", { value: a }), e.check = (...r) => e.clone(Bi(a, { checks: [...a.checks ?? [], ...r.map((l) => typeof l == "function" ? { _zod: {
  check: l,
  def: { check: "custom" },
  onattach: []
} } : l)] })), e.clone = (r, l) => ii(e, r, l), e.brand = () => e, e.register = ((r, l) => (r.add(e, l), e)), e.parse = (r, l) => l4(e, r, l, { callee: e.parse }), e.safeParse = (r, l) => s4(e, r, l), e.parseAsync = async (r, l) => u4(e, r, l, { callee: e.parseAsync }), e.safeParseAsync = async (r, l) => c4(e, r, l), e.spa = e.safeParseAsync, e.encode = (r, l) => f4(e, r, l), e.decode = (r, l) => d4(e, r, l), e.encodeAsync = async (r, l) => h4(e, r, l), e.decodeAsync = async (r, l) => m4(e, r, l), e.safeEncode = (r, l) => v4(e, r, l), e.safeDecode = (r, l) => p4(e, r, l), e.safeEncodeAsync = async (r, l) => g4(e, r, l), e.safeDecodeAsync = async (r, l) => y4(e, r, l), e.refine = (r, l) => e.check(s3(r, l)), e.superRefine = (r) => e.check(c3(r)), e.overwrite = (r) => e.check(Jo(r)), e.optional = () => F0(e), e.nullable = () => X0(e), e.nullish = () => F0(X0(e)), e.nonoptional = (r) => n3(e, r), e.array = () => Yn(e), e.or = (r) => V4([e, r]), e.and = (r) => X4(e, r), e.transform = (r) => q0(e, W4(r)), e.default = (r) => J4(e, r), e.prefault = (r) => t3(e, r), e.catch = (r) => i3(e, r), e.pipe = (r) => q0(e, r), e.readonly = () => l3(e), e.describe = (r) => {
  const l = e.clone();
  return Cu.add(l, { description: r }), l;
}, Object.defineProperty(e, "description", {
  get() {
    return Cu.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0) return Cu.get(e);
  const l = e.clone();
  return Cu.add(l, r[0]), l;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), X1 = /* @__PURE__ */ K("_ZodString", (e, a) => {
  Xd.init(e, a), ut.init(e, a);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...l) => e.check(kC(...l)), e.includes = (...l) => e.check(IC(...l)), e.startsWith = (...l) => e.check(GC(...l)), e.endsWith = (...l) => e.check($C(...l)), e.min = (...l) => e.check(Vu(...l)), e.max = (...l) => e.check($1(...l)), e.length = (...l) => e.check(V1(...l)), e.nonempty = (...l) => e.check(Vu(1, ...l)), e.lowercase = (l) => e.check(PC(l)), e.uppercase = (l) => e.check(ZC(l)), e.trim = () => e.check(FC()), e.normalize = (...l) => e.check(VC(...l)), e.toLowerCase = () => e.check(XC()), e.toUpperCase = () => e.check(qC());
}), b4 = /* @__PURE__ */ K("ZodString", (e, a) => {
  Xd.init(e, a), X1.init(e, a), e.email = (r) => e.check(G1(q1, r)), e.url = (r) => e.check(mC(w4, r)), e.jwt = (r) => e.check(MC(j4, r)), e.emoji = (r) => e.check(vC(S4, r)), e.guid = (r) => e.check(k0(G0, r)), e.uuid = (r) => e.check(cC(Au, r)), e.uuidv4 = (r) => e.check(fC(Au, r)), e.uuidv6 = (r) => e.check(dC(Au, r)), e.uuidv7 = (r) => e.check(hC(Au, r)), e.nanoid = (r) => e.check(pC(E4, r)), e.guid = (r) => e.check(k0(G0, r)), e.cuid = (r) => e.check(gC(T4, r)), e.cuid2 = (r) => e.check(yC(C4, r)), e.ulid = (r) => e.check(bC(A4, r)), e.base64 = (r) => e.check(AC(z4, r)), e.base64url = (r) => e.check(xC(L4, r)), e.xid = (r) => e.check(_C(x4, r)), e.ksuid = (r) => e.check(wC(O4, r)), e.ipv4 = (r) => e.check(SC(M4, r)), e.ipv6 = (r) => e.check(EC(R4, r)), e.cidrv4 = (r) => e.check(TC(N4, r)), e.cidrv6 = (r) => e.check(CC(D4, r)), e.e164 = (r) => e.check(OC(H4, r)), e.datetime = (r) => e.check(e4(r)), e.date = (r) => e.check(n4(r)), e.time = (r) => e.check(i4(r)), e.duration = (r) => e.check(o4(r));
});
function Zt(e) {
  return sC(b4, e);
}
var tt = /* @__PURE__ */ K("ZodStringFormat", (e, a) => {
  et.init(e, a), X1.init(e, a);
}), q1 = /* @__PURE__ */ K("ZodEmail", (e, a) => {
  gT.init(e, a), tt.init(e, a);
});
function _4(e) {
  return G1(q1, e);
}
var G0 = /* @__PURE__ */ K("ZodGUID", (e, a) => {
  vT.init(e, a), tt.init(e, a);
}), Au = /* @__PURE__ */ K("ZodUUID", (e, a) => {
  pT.init(e, a), tt.init(e, a);
}), w4 = /* @__PURE__ */ K("ZodURL", (e, a) => {
  yT.init(e, a), tt.init(e, a);
}), S4 = /* @__PURE__ */ K("ZodEmoji", (e, a) => {
  bT.init(e, a), tt.init(e, a);
}), E4 = /* @__PURE__ */ K("ZodNanoID", (e, a) => {
  _T.init(e, a), tt.init(e, a);
}), T4 = /* @__PURE__ */ K("ZodCUID", (e, a) => {
  wT.init(e, a), tt.init(e, a);
}), C4 = /* @__PURE__ */ K("ZodCUID2", (e, a) => {
  ST.init(e, a), tt.init(e, a);
}), A4 = /* @__PURE__ */ K("ZodULID", (e, a) => {
  ET.init(e, a), tt.init(e, a);
}), x4 = /* @__PURE__ */ K("ZodXID", (e, a) => {
  TT.init(e, a), tt.init(e, a);
}), O4 = /* @__PURE__ */ K("ZodKSUID", (e, a) => {
  CT.init(e, a), tt.init(e, a);
}), M4 = /* @__PURE__ */ K("ZodIPv4", (e, a) => {
  RT.init(e, a), tt.init(e, a);
}), R4 = /* @__PURE__ */ K("ZodIPv6", (e, a) => {
  NT.init(e, a), tt.init(e, a);
}), N4 = /* @__PURE__ */ K("ZodCIDRv4", (e, a) => {
  DT.init(e, a), tt.init(e, a);
}), D4 = /* @__PURE__ */ K("ZodCIDRv6", (e, a) => {
  zT.init(e, a), tt.init(e, a);
}), z4 = /* @__PURE__ */ K("ZodBase64", (e, a) => {
  LT.init(e, a), tt.init(e, a);
}), L4 = /* @__PURE__ */ K("ZodBase64URL", (e, a) => {
  jT.init(e, a), tt.init(e, a);
}), H4 = /* @__PURE__ */ K("ZodE164", (e, a) => {
  BT.init(e, a), tt.init(e, a);
}), j4 = /* @__PURE__ */ K("ZodJWT", (e, a) => {
  kT.init(e, a), tt.init(e, a);
}), Y1 = /* @__PURE__ */ K("ZodNumber", (e, a) => {
  P1.init(e, a), ut.init(e, a), e.gt = (l, u) => e.check(Z0(l, u)), e.gte = (l, u) => e.check(Pf(l, u)), e.min = (l, u) => e.check(Pf(l, u)), e.lt = (l, u) => e.check(P0(l, u)), e.lte = (l, u) => e.check(kf(l, u)), e.max = (l, u) => e.check(kf(l, u)), e.int = (l) => e.check($0(l)), e.safe = (l) => e.check($0(l)), e.positive = (l) => e.check(Z0(0, l)), e.nonnegative = (l) => e.check(Pf(0, l)), e.negative = (l) => e.check(P0(0, l)), e.nonpositive = (l) => e.check(kf(0, l)), e.multipleOf = (l, u) => e.check(I0(l, u)), e.step = (l, u) => e.check(I0(l, u)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function W1(e) {
  return LC(Y1, e);
}
var B4 = /* @__PURE__ */ K("ZodNumberFormat", (e, a) => {
  PT.init(e, a), Y1.init(e, a);
});
function $0(e) {
  return HC(B4, e);
}
var U4 = /* @__PURE__ */ K("ZodBoolean", (e, a) => {
  ZT.init(e, a), ut.init(e, a);
});
function Ln(e) {
  return jC(U4, e);
}
var k4 = /* @__PURE__ */ K("ZodUnknown", (e, a) => {
  IT.init(e, a), ut.init(e, a);
});
function V0() {
  return BC(k4);
}
var P4 = /* @__PURE__ */ K("ZodNever", (e, a) => {
  GT.init(e, a), ut.init(e, a);
});
function Z4(e) {
  return UC(P4, e);
}
var I4 = /* @__PURE__ */ K("ZodArray", (e, a) => {
  $T.init(e, a), ut.init(e, a), e.element = a.element, e.min = (r, l) => e.check(Vu(r, l)), e.nonempty = (r) => e.check(Vu(1, r)), e.max = (r, l) => e.check($1(r, l)), e.length = (r, l) => e.check(V1(r, l)), e.unwrap = () => e.element;
});
function Yn(e, a) {
  return YC(I4, e, a);
}
var G4 = /* @__PURE__ */ K("ZodObject", (e, a) => {
  FT.init(e, a), ut.init(e, a), Fe(e, "shape", () => a.shape), e.keyof = () => Qa(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({
    ...e._zod.def,
    catchall: r
  }), e.passthrough = () => e.clone({
    ...e._zod.def,
    catchall: V0()
  }), e.loose = () => e.clone({
    ...e._zod.def,
    catchall: V0()
  }), e.strict = () => e.clone({
    ...e._zod.def,
    catchall: Z4()
  }), e.strip = () => e.clone({
    ...e._zod.def,
    catchall: void 0
  }), e.extend = (r) => fE(e, r), e.safeExtend = (r) => dE(e, r), e.merge = (r) => hE(e, r), e.pick = (r) => sE(e, r), e.omit = (r) => cE(e, r), e.partial = (...r) => mE(Q1, e, r[0]), e.required = (...r) => vE(K1, e, r[0]);
});
function jn(e, a) {
  return new G4({
    type: "object",
    shape: e ?? {},
    ...pe(a)
  });
}
var $4 = /* @__PURE__ */ K("ZodUnion", (e, a) => {
  XT.init(e, a), ut.init(e, a), e.options = a.options;
});
function V4(e, a) {
  return new $4({
    type: "union",
    options: e,
    ...pe(a)
  });
}
var F4 = /* @__PURE__ */ K("ZodIntersection", (e, a) => {
  qT.init(e, a), ut.init(e, a);
});
function X4(e, a) {
  return new F4({
    type: "intersection",
    left: e,
    right: a
  });
}
var bd = /* @__PURE__ */ K("ZodEnum", (e, a) => {
  YT.init(e, a), ut.init(e, a), e.enum = a.entries, e.options = Object.values(a.entries);
  const r = new Set(Object.keys(a.entries));
  e.extract = (l, u) => {
    const c = {};
    for (const d of l) if (r.has(d)) c[d] = a.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new bd({
      ...a,
      checks: [],
      ...pe(u),
      entries: c
    });
  }, e.exclude = (l, u) => {
    const c = { ...a.entries };
    for (const d of l) if (r.has(d)) delete c[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new bd({
      ...a,
      checks: [],
      ...pe(u),
      entries: c
    });
  };
});
function Qa(e, a) {
  return new bd({
    type: "enum",
    entries: Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e,
    ...pe(a)
  });
}
var q4 = /* @__PURE__ */ K("ZodLiteral", (e, a) => {
  WT.init(e, a), ut.init(e, a), e.values = new Set(a.values), Object.defineProperty(e, "value", { get() {
    if (a.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return a.values[0];
  } });
});
function qd(e, a) {
  return new q4({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...pe(a)
  });
}
var Y4 = /* @__PURE__ */ K("ZodTransform", (e, a) => {
  QT.init(e, a), ut.init(e, a), e._zod.parse = (r, l) => {
    if (l.direction === "backward") throw new A1(e.constructor.name);
    r.addIssue = (c) => {
      if (typeof c == "string") r.issues.push(Vo(c, r.value, a));
      else {
        const d = c;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = r.value), d.inst ?? (d.inst = e), r.issues.push(Vo(d));
      }
    };
    const u = a.transform(r.value, r);
    return u instanceof Promise ? u.then((c) => (r.value = c, r)) : (r.value = u, r);
  };
});
function W4(e) {
  return new Y4({
    type: "transform",
    transform: e
  });
}
var Q1 = /* @__PURE__ */ K("ZodOptional", (e, a) => {
  KT.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function F0(e) {
  return new Q1({
    type: "optional",
    innerType: e
  });
}
var Q4 = /* @__PURE__ */ K("ZodNullable", (e, a) => {
  JT.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function X0(e) {
  return new Q4({
    type: "nullable",
    innerType: e
  });
}
var K4 = /* @__PURE__ */ K("ZodDefault", (e, a) => {
  eC.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function J4(e, a) {
  return new K4({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof a == "function" ? a() : O1(a);
    }
  });
}
var e3 = /* @__PURE__ */ K("ZodPrefault", (e, a) => {
  tC.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function t3(e, a) {
  return new e3({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof a == "function" ? a() : O1(a);
    }
  });
}
var K1 = /* @__PURE__ */ K("ZodNonOptional", (e, a) => {
  nC.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function n3(e, a) {
  return new K1({
    type: "nonoptional",
    innerType: e,
    ...pe(a)
  });
}
var a3 = /* @__PURE__ */ K("ZodCatch", (e, a) => {
  aC.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function i3(e, a) {
  return new a3({
    type: "catch",
    innerType: e,
    catchValue: typeof a == "function" ? a : () => a
  });
}
var r3 = /* @__PURE__ */ K("ZodPipe", (e, a) => {
  iC.init(e, a), ut.init(e, a), e.in = a.in, e.out = a.out;
});
function q0(e, a) {
  return new r3({
    type: "pipe",
    in: e,
    out: a
  });
}
var o3 = /* @__PURE__ */ K("ZodReadonly", (e, a) => {
  rC.init(e, a), ut.init(e, a), e.unwrap = () => e._zod.def.innerType;
});
function l3(e) {
  return new o3({
    type: "readonly",
    innerType: e
  });
}
var u3 = /* @__PURE__ */ K("ZodCustom", (e, a) => {
  oC.init(e, a), ut.init(e, a);
});
function s3(e, a = {}) {
  return WC(u3, e, a);
}
function c3(e) {
  return QC(e);
}
var f3 = jn({
  hidden: Ln(),
  remix_tooltip_hidden: Ln().optional(),
  remix_enabled: Ln().optional(),
  edit_context: jn({
    codex_thread_id: Zt().nullable(),
    chatgpt_conversation_id: Zt().nullable()
  })
}), Yd = "/_sites/dispatch-assets/app-openai.svg", d3 = "/_internal/sites_widget/log_event", h3 = "/indexfiles/config";
async function m3() {
  const e = await fetch(h3, {
    credentials: "same-origin",
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(1e4)
  });
  if (!e.ok) throw new Error("Unable to load editor widget configuration");
  return f3.parse(await e.json());
}
async function J1(e) {
  try {
    if (!(await fetch("/indexfiles/config", {
      method: "POST",
      credentials: "same-origin",
      redirect: "error",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
      keepalive: !0,
      signal: AbortSignal.timeout(1e4)
    })).ok) throw new Error("Unable to save editor widget preference");
  } catch {
    console.warn("Unable to save editor widget preference");
  }
}
function v3() {
  return J1({ remix_tooltip_hidden: !0 });
}
function Wd() {
  let e = Promise.resolve();
  return (a) => (e = e.then(() => J1({ hidden: a })), e);
}
function _t(e, a) {
  const r = d3;
  fetch(a ? new URL(r, a) : r, {
    method: "POST",
    credentials: a ? "include" : "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ interaction_type: e }),
    keepalive: !0
  }).catch(() => {
  });
}
var p3 = "_Button_milvu_1", g3 = "_ButtonInner_milvu_128", y3 = "_ButtonLoader_milvu_145", Po = {
  Button: p3,
  ButtonInner: g3,
  ButtonLoader: y3
};
function ey(e) {
  const a = e.currentTarget.offsetWidth;
  let r = 0.985;
  a <= 80 ? r = 0.96 : a <= 150 ? r = 0.97 : a <= 220 ? r = 0.98 : a > 600 && (r = 0.995), e.currentTarget.style.setProperty("--button-press-scale", String(r));
}
var b3 = "_LoadingIndicator_1mmfp_1", _3 = "_rotate_1mmfp_1", w3 = {
  LoadingIndicator: b3,
  rotate: _3
}, S3 = /* @__PURE__ */ fn(((e) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(u, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: u,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  e.Fragment = r, e.jsx = l, e.jsxs = l;
})), E3 = /* @__PURE__ */ fn(((e, a) => {
  a.exports = S3();
})), y = E3();
function Fu({ className: e, size: a }) {
  return /* @__PURE__ */ (0, y.jsx)("span", {
    "aria-hidden": "true",
    className: ze(w3.LoadingIndicator, e),
    style: a === void 0 ? void 0 : { "--indicator-size": `${a}px` }
  });
}
function Xu(e) {
  if (typeof window.requestAnimationFrame != "function" || document.visibilityState === "hidden") {
    const l = window.setTimeout(e);
    return () => window.clearTimeout(l);
  }
  let a = 2, r = window.requestAnimationFrame(function l() {
    a -= 1, a === 0 ? e() : r = window.requestAnimationFrame(l);
  });
  return () => window.cancelAnimationFrame(r);
}
function T3(e) {
  const a = {};
  for (const [r, l] of Object.entries(e))
    l !== void 0 && (a[r.startsWith("--") ? r : `--${r}`] = typeof l == "number" ? `${l}px` : l);
  return a;
}
var Zf = (e) => String(e), Fn = (e) => `${e}ms`;
function If(e) {
  return typeof e == "number" ? `${e}deg` : e;
}
function Gf({ x: e, y: a, scale: r, rotate: l, skewX: u, skewY: c } = {}) {
  const d = [
    e == null ? null : `translateX(${e}px)`,
    a == null ? null : `translateY(${a}px)`,
    r == null ? null : `scale(${r})`,
    l == null ? null : `rotate(${If(l)})`,
    u == null ? null : `skewX(${If(u)})`,
    c == null ? null : `skewY(${If(c)})`
  ].filter(Boolean);
  return d.length ? d.join(" ") : "none";
}
function $f({ blur: e } = {}) {
  return e == null ? "none" : `blur(${e}px)`;
}
function xu(e) {
  const a = [];
  return b.Children.forEach(e, (r) => {
    r && typeof r == "object" && "key" in r && r.key && a.push(r);
  }), a;
}
var Er = () => {
};
function Tr(e) {
  const a = (0, b.useRef)(e);
  return a.current = e, (0, b.useCallback)((r) => a.current(r), []);
}
function C3(e, a, r, l) {
  const u = new Set(e.map((m) => m.key)), c = new Set(a.map((m) => m.component.key)), d = e.filter((m) => !c.has(m.key)).map(r), h = a.map((m) => ({
    ...m,
    component: e.find(({ key: g }) => g === m.component.key) ?? m.component,
    shouldRender: u.has(m.component.key)
  }));
  return l === "append" ? h.concat(d) : d.concat(h);
}
var A3 = "_TransitionGroupChild_1d6a5_1", x3 = { TransitionGroupChild: A3 }, ty = {
  enter: !1,
  enterActive: !1,
  exit: !1,
  exitActive: !1,
  interrupted: !1
}, O3 = (e) => ({
  ...ty,
  enter: !e
});
function M3(e, a) {
  switch (a.type) {
    case "enter-before":
      return {
        enter: !0,
        enterActive: !1,
        exit: !1,
        exitActive: !1,
        interrupted: e.interrupted || e.exit
      };
    case "enter-active":
      return {
        enter: !0,
        enterActive: !0,
        exit: !1,
        exitActive: !1,
        interrupted: !1
      };
    case "exit-before":
      return {
        enter: !1,
        enterActive: !1,
        exit: !0,
        exitActive: !1,
        interrupted: e.interrupted || e.enter
      };
    case "exit-active":
      return {
        enter: !1,
        enterActive: !1,
        exit: !0,
        exitActive: !0,
        interrupted: !1
      };
    case "done":
      return ty;
  }
}
function R3({ as: e, children: a, className: r, style: l, preventMountTransition: u, shouldRender: c, enterDuration: d, exitDuration: h, removeChild: m, onEnter: g, onEnterActive: p, onEnterComplete: _, onExit: S, onExitActive: T, onExitComplete: x }) {
  const [C, A] = (0, b.useReducer)(M3, O3(u)), M = (0, b.useRef)(!1), N = (0, b.useRef)(null), D = (0, b.useRef)(d), R = (0, b.useRef)(h), B = (0, b.useRef)(null);
  D.current = d, R.current = h;
  const H = (0, b.useCallback)((q) => {
    const ee = N.current;
    !ee || q === B.current || (B.current = q, {
      enter: g,
      "enter-active": p,
      "enter-complete": _,
      exit: S,
      "exit-active": T,
      "exit-complete": x
    }[q](ee));
  }, [
    g,
    p,
    _,
    S,
    T,
    x
  ]);
  return (0, b.useLayoutEffect)(() => {
    if (!c) {
      let F;
      A({ type: "exit-before" }), H("exit");
      const U = Xu(() => {
        A({ type: "exit-active" }), H("exit-active"), F = window.setTimeout(() => {
          H("exit-complete"), m();
        }, R.current);
      });
      return () => {
        U(), F !== void 0 && window.clearTimeout(F);
      };
    }
    if (u && !M.current) {
      M.current = !0;
      return;
    }
    let q;
    A({ type: "enter-before" }), H("enter");
    const ee = Xu(() => {
      A({ type: "enter-active" }), H("enter-active"), q = window.setTimeout(() => {
        A({ type: "done" }), H("enter-complete");
      }, D.current);
    });
    return () => {
      ee(), q !== void 0 && window.clearTimeout(q);
    };
  }, [
    u,
    m,
    c,
    H
  ]), (0, b.useEffect)(() => () => {
    M.current = !1;
  }, []), /* @__PURE__ */ (0, y.jsx)(e, {
    ref: N,
    className: ze(r, x3.TransitionGroupChild),
    style: l,
    "data-entering": C.enter ? "" : void 0,
    "data-entering-active": C.enterActive ? "" : void 0,
    "data-exiting": C.exit ? "" : void 0,
    "data-exiting-active": C.exitActive ? "" : void 0,
    "data-interrupted": C.interrupted ? "" : void 0,
    children: a
  });
}
function N3(e) {
  const a = e.preventMountTransition ? void 0 : e.enterMountDelay, [r, l] = (0, b.useState)(a === void 0);
  return (0, b.useEffect)(() => {
    if (r) return;
    const u = window.setTimeout(() => l(!0), a);
    return () => window.clearTimeout(u);
  }, [a, r]), r ? /* @__PURE__ */ (0, y.jsx)(R3, { ...e }) : null;
}
function Fo(e) {
  const { as: a = "span", children: r, className: l, style: u, enterDuration: c = 0, exitDuration: d = 0, enterMountDelay: h, preventInitialTransition: m = !0, insertMethod: g = "append", disableAnimations: p } = e, _ = Tr(e.onEnter ?? Er), S = Tr(e.onEnterActive ?? Er), T = Tr(e.onEnterComplete ?? Er), x = Tr(e.onExit ?? Er), C = Tr(e.onExitActive ?? Er), A = Tr(e.onExitComplete ?? Er);
  b.Children.forEach(r, (B) => {
    if (B && typeof B == "object" && !("key" in B && B.key)) throw new Error("Child elements of <TransitionGroup /> must include a key");
  });
  const M = (0, b.useCallback)((B) => ({
    component: B,
    shouldRender: !0,
    preventMountTransition: !1,
    removeChild: () => {
      D((H) => H.filter(({ component: q }) => q.key !== B.key));
    },
    onEnter: _,
    onEnterActive: S,
    onEnterComplete: T,
    onExit: x,
    onExitActive: C,
    onExitComplete: A
  }), [
    _,
    S,
    T,
    x,
    C,
    A
  ]), [N, D] = (0, b.useState)(() => xu(r).map((B) => ({
    ...M(B),
    preventMountTransition: m
  })));
  if ((0, b.useLayoutEffect)(() => {
    D((B) => C3(xu(r), B, M, g));
  }, [
    r,
    M,
    g
  ]), p) return xu(r).map((B) => /* @__PURE__ */ (0, y.jsx)(a, {
    className: l,
    style: u,
    children: B
  }, B.key));
  const R = new Map(xu(r).map((B) => [B.key, B]));
  return N.map(({ component: B, ...H }) => {
    const q = R.get(B.key) ?? B;
    return /* @__PURE__ */ (0, y.jsx)(N3, {
      ...H,
      as: a,
      className: l,
      enterDuration: c,
      exitDuration: d,
      enterMountDelay: h,
      style: u,
      children: q
    }, q.key);
  });
}
function wt({ type: e = "button", color: a = "primary", variant: r = "solid", pill: l = !1, uniform: u = !1, size: c = "md", iconSize: d, children: h, className: m, disabled: g, loading: p = !1, onClick: _, onPointerEnter: S, ...T }) {
  const x = g || p, C = (0, b.useCallback)((M) => {
    x || _?.(M);
  }, [x, _]), A = (0, b.useCallback)((M) => {
    ey(M), S?.(M);
  }, [S]);
  return /* @__PURE__ */ (0, y.jsxs)("button", {
    ...T,
    type: e,
    className: ze(Po.Button, m),
    "data-color": a,
    "data-variant": r,
    "data-pill": l ? "" : void 0,
    "data-uniform": u ? "" : void 0,
    "data-size": c,
    "data-icon-size": d,
    "data-disabled": g ? "" : void 0,
    "data-loading": p ? "" : void 0,
    disabled: x,
    "aria-disabled": x || void 0,
    "aria-busy": p || T["aria-busy"],
    onClick: C,
    onPointerEnter: A,
    children: [/* @__PURE__ */ (0, y.jsx)(Fo, {
      as: "span",
      className: Po.ButtonLoader,
      enterDuration: 150,
      exitDuration: 150,
      disableAnimations: !1,
      children: p && /* @__PURE__ */ (0, y.jsx)(Fu, {}, "loader")
    }), /* @__PURE__ */ (0, y.jsx)("span", {
      className: Po.ButtonInner,
      children: h
    })]
  });
}
function ny({ color: e = "primary", variant: a = "solid", pill: r = !1, uniform: l = !1, size: u = "md", iconSize: c, children: d, className: h, onPointerEnter: m, ...g }) {
  return /* @__PURE__ */ (0, y.jsx)("a", {
    ...g,
    className: ze(Po.Button, h),
    "data-color": e,
    "data-variant": a,
    "data-pill": r ? "" : void 0,
    "data-uniform": l ? "" : void 0,
    "data-size": u,
    "data-icon-size": c,
    onPointerEnter: (p) => {
      ey(p), m?.(p);
    },
    children: /* @__PURE__ */ (0, y.jsx)("span", {
      className: Po.ButtonInner,
      children: d
    })
  });
}
function D3(e, a) {
  const r = (0, b.useRef)(0), l = (0, b.useRef)(null), u = (0, b.useCallback)((c, d = "") => {
    c.style.height = "0px";
    const { scrollHeight: h, offsetHeight: m, offsetWidth: g, clientHeight: p } = c, _ = h + (m - p);
    c.style.height = `${_}px`, r.current < h && c.selectionEnd === d.length && (c.scrollTop = h), r.current = c.scrollHeight, l.current = g;
  }, []);
  (0, b.useLayoutEffect)(() => {
    const c = e.current;
    c !== null && u(c, a);
  }, [
    u,
    e,
    a
  ]), (0, b.useEffect)(() => {
    const c = e.current;
    if (c === null) return;
    const d = new ResizeObserver(() => {
      const h = c.offsetWidth;
      (l.current === null || h !== l.current) && u(c, c.value);
    });
    return d.observe(c), () => d.disconnect();
  }, [u, e]);
}
var z3 = typeof navigator < "u", L3 = z3 ? navigator.userAgent ?? "" : "";
function Qd() {
  return _w(L3) || H3();
}
function H3() {
  return typeof navigator < "u" && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function j3() {
  return typeof navigator < "u" && /Mac|iPhone|iPad/.test(navigator.platform);
}
var B3 = () => {
  const e = (0, b.useRef)(!1), a = (0, b.useRef)(null);
  (0, b.useEffect)(() => () => {
    a.current !== null && clearTimeout(a.current);
  }, []);
  const r = () => {
    a.current !== null && (clearTimeout(a.current), a.current = null);
  }, l = () => {
    r(), a.current = setTimeout(() => {
      e.current = !1, a.current = null;
    }, 0);
  };
  return {
    handleCompositionStart: () => {
      r(), e.current = !0;
    },
    handleCompositionEnd: () => {
      e.current = !0, l();
    },
    isComposing: (h) => {
      const m = "nativeEvent" in h ? h.nativeEvent : h;
      return m.isComposing || e.current || m.keyCode === 229;
    }
  };
};
function U3({ textareaRef: e, value: a, onChange: r, onKeyDown: l, onCompositionStart: u, onCompositionEnd: c, ...d }) {
  D3(e, a);
  const { handleCompositionStart: h, handleCompositionEnd: m, isComposing: g } = B3();
  return /* @__PURE__ */ (0, y.jsx)("textarea", {
    ...d,
    ref: e,
    rows: 1,
    value: a,
    onChange: r,
    onCompositionStart: (p) => {
      h(), u?.(p);
    },
    onCompositionEnd: (p) => {
      m(), c?.(p);
    },
    onKeyDown: (p) => {
      l?.(p), !(p.defaultPrevented || p.key !== "Enter" || p.shiftKey || g(p) || Qd()) && (p.preventDefault(), p.repeat || p.currentTarget.form?.requestSubmit());
    }
  });
}
var k3 = "_Image_1l1xj_1", P3 = { Image: k3 }, Y0 = /* @__PURE__ */ new Set();
function Kd({ src: e, className: a, draggable: r = !1, onLoad: l, onError: u, forceRenderAfterLoadFail: c = !1, ...d }) {
  const [h, m] = (0, b.useState)(() => e && Y0.has(e)), [g, p] = (0, b.useState)(!1), _ = h || g && c;
  return !e || !c && g ? null : /* @__PURE__ */ (0, y.jsx)("img", {
    ...d,
    src: e,
    className: ze(P3.Image, a),
    onLoad: (S) => {
      m(!0), Y0.add(e), l?.(S);
    },
    onError: (S) => {
      p(!0), u?.(S);
    },
    "data-loaded": _ ? "" : void 0,
    draggable: r
  });
}
var Z3 = /* @__PURE__ */ fn(((e) => {
  var a = jd();
  function r(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++) p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var u = {
    d: {
      f: l,
      r: function() {
        throw Error(r(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, p, _) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: p,
      implementation: _
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, e.createPortal = function(g, p) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
    return d(g, p, null, _);
  }, e.flushSync = function(g) {
    var p = h.T, _ = u.p;
    try {
      if (h.T = null, u.p = 2, g) return g();
    } finally {
      h.T = p, u.p = _, u.d.f();
    }
  }, e.preconnect = function(g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, u.d.C(g, p));
  }, e.prefetchDNS = function(g) {
    typeof g == "string" && u.d.D(g);
  }, e.preinit = function(g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var _ = p.as, S = m(_, p.crossOrigin), T = typeof p.integrity == "string" ? p.integrity : void 0, x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      _ === "style" ? u.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
        crossOrigin: S,
        integrity: T,
        fetchPriority: x
      }) : _ === "script" && u.d.X(g, {
        crossOrigin: S,
        integrity: T,
        fetchPriority: x,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, e.preinitModule = function(g, p) {
    if (typeof g == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var _ = m(p.as, p.crossOrigin);
        u.d.M(g, {
          crossOrigin: _,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    } else p ?? u.d.M(g);
  }, e.preload = function(g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var _ = p.as, S = m(_, p.crossOrigin);
      u.d.L(g, _, {
        crossOrigin: S,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, e.preloadModule = function(g, p) {
    if (typeof g == "string") if (p) {
      var _ = m(p.as, p.crossOrigin);
      u.d.m(g, {
        as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
        crossOrigin: _,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0
      });
    } else u.d.m(g);
  }, e.requestFormReset = function(g) {
    u.d.r(g);
  }, e.unstable_batchedUpdates = function(g, p) {
    return g(p);
  }, e.useFormState = function(g, p, _) {
    return h.H.useFormState(g, p, _);
  }, e.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, e.version = "19.2.8";
})), ay = /* @__PURE__ */ fn(((e, a) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  r(), a.exports = Z3();
}));
function W0(e, a) {
  if (typeof e == "function") return e(a);
  e != null && (e.current = a);
}
function iy(...e) {
  return (a) => {
    let r = !1;
    const l = e.map((u) => {
      const c = W0(u, a);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r) return () => {
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        typeof c == "function" ? c() : W0(e[u], null);
      }
    };
  };
}
function Qt(...e) {
  return b.useCallback(iy(...e), e);
}
var el = b.forwardRef((e, a) => {
  const { children: r, ...l } = e, u = b.Children.toArray(r), c = u.find(I3);
  if (c) {
    const d = c.props.children, h = u.map((m) => m === c ? b.Children.count(d) > 1 ? b.Children.only(null) : b.isValidElement(d) ? d.props.children : null : m);
    return /* @__PURE__ */ (0, y.jsx)(_d, {
      ...l,
      ref: a,
      children: b.isValidElement(d) ? b.cloneElement(d, void 0, h) : null
    });
  }
  return /* @__PURE__ */ (0, y.jsx)(_d, {
    ...l,
    ref: a,
    children: r
  });
});
el.displayName = "Slot";
var _d = b.forwardRef((e, a) => {
  const { children: r, ...l } = e;
  if (b.isValidElement(r)) {
    const u = $3(r), c = G3(l, r.props);
    return r.type !== b.Fragment && (c.ref = a ? iy(a, u) : u), b.cloneElement(r, c);
  }
  return b.Children.count(r) > 1 ? b.Children.only(null) : null;
});
_d.displayName = "SlotClone";
var ry = ({ children: e }) => /* @__PURE__ */ (0, y.jsx)(y.Fragment, { children: e });
function I3(e) {
  return b.isValidElement(e) && e.type === ry;
}
function G3(e, a) {
  const r = { ...a };
  for (const l in a) {
    const u = e[l], c = a[l];
    /^on[A-Z]/.test(l) ? u && c ? r[l] = (...d) => {
      c(...d), u(...d);
    } : u && (r[l] = u) : l === "style" ? r[l] = {
      ...u,
      ...c
    } : l === "className" && (r[l] = [u, c].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function $3(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning;
  return r ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var oy = el, Pr = /* @__PURE__ */ Hd(ay(), 1), xt = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
].reduce((e, a) => {
  const r = b.forwardRef((l, u) => {
    const { asChild: c, ...d } = l, h = c ? el : a;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, y.jsx)(h, {
      ...d,
      ref: u
    });
  });
  return r.displayName = `Primitive.${a}`, {
    ...e,
    [a]: r
  };
}, {});
function V3(e, a) {
  e && Pr.flushSync(() => e.dispatchEvent(a));
}
var F3 = "VisuallyHidden", ly = b.forwardRef((e, a) => /* @__PURE__ */ (0, y.jsx)(xt.span, {
  ...e,
  ref: a,
  style: {
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}));
ly.displayName = F3;
var X3 = ly;
function q3(e, a) {
  const r = b.createContext(a), l = (c) => {
    const { children: d, ...h } = c, m = b.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ (0, y.jsx)(r.Provider, {
      value: m,
      children: d
    });
  };
  l.displayName = e + "Provider";
  function u(c) {
    const d = b.useContext(r);
    if (d) return d;
    if (a !== void 0) return a;
    throw new Error(`\`${c}\` must be used within \`${e}\``);
  }
  return [l, u];
}
function tl(e, a = []) {
  let r = [];
  function l(c, d) {
    const h = b.createContext(d), m = r.length;
    r = [...r, d];
    const g = (_) => {
      const { scope: S, children: T, ...x } = _, C = S?.[e]?.[m] || h, A = b.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ (0, y.jsx)(C.Provider, {
        value: A,
        children: T
      });
    };
    g.displayName = c + "Provider";
    function p(_, S) {
      const T = S?.[e]?.[m] || h, x = b.useContext(T);
      if (x) return x;
      if (d !== void 0) return d;
      throw new Error(`\`${_}\` must be used within \`${c}\``);
    }
    return [g, p];
  }
  const u = () => {
    const c = r.map((d) => b.createContext(d));
    return function(h) {
      const m = h?.[e] || c;
      return b.useMemo(() => ({ [`__scope${e}`]: {
        ...h,
        [e]: m
      } }), [h, m]);
    };
  };
  return u.scopeName = e, [l, Y3(u, ...a)];
}
function Y3(...e) {
  const a = e[0];
  if (e.length === 1) return a;
  const r = () => {
    const l = e.map((u) => ({
      useScope: u(),
      scopeName: u.scopeName
    }));
    return function(c) {
      const d = l.reduce((h, { useScope: m, scopeName: g }) => {
        const p = m(c)[`__scope${g}`];
        return {
          ...h,
          ...p
        };
      }, {});
      return b.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return r.scopeName = a.scopeName, r;
}
function pt(e, a, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(u) {
    if (e?.(u), r === !1 || !u.defaultPrevented) return a?.(u);
  };
}
function Ka(e) {
  const a = b.useRef(e);
  return b.useEffect(() => {
    a.current = e;
  }), b.useMemo(() => (...r) => a.current?.(...r), []);
}
function is({ prop: e, defaultProp: a, onChange: r = () => {
} }) {
  const [l, u] = W3({
    defaultProp: a,
    onChange: r
  }), c = e !== void 0, d = c ? e : l, h = Ka(r);
  return [d, b.useCallback((m) => {
    if (c) {
      const g = typeof m == "function" ? m(e) : m;
      g !== e && h(g);
    } else u(m);
  }, [
    c,
    e,
    u,
    h
  ])];
}
function W3({ defaultProp: e, onChange: a }) {
  const r = b.useState(e), [l] = r, u = b.useRef(l), c = Ka(a);
  return b.useEffect(() => {
    u.current !== l && (c(l), u.current = l);
  }, [
    l,
    u,
    c
  ]), r;
}
var Di = globalThis?.document ? b.useLayoutEffect : () => {
};
function Q3(e, a) {
  return b.useReducer((r, l) => a[r][l] ?? r, e);
}
var ri = (e) => {
  const { present: a, children: r } = e, l = K3(a), u = typeof r == "function" ? r({ present: l.isPresent }) : b.Children.only(r), c = Qt(l.ref, J3(u));
  return typeof r == "function" || l.isPresent ? b.cloneElement(u, { ref: c }) : null;
};
ri.displayName = "Presence";
function K3(e) {
  const [a, r] = b.useState(), l = b.useRef({}), u = b.useRef(e), c = b.useRef("none"), [d, h] = Q3(e ? "mounted" : "unmounted", {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  return b.useEffect(() => {
    const m = Ou(l.current);
    c.current = d === "mounted" ? m : "none";
  }, [d]), Di(() => {
    const m = l.current, g = u.current;
    if (g !== e) {
      const p = c.current, _ = Ou(m);
      e ? h("MOUNT") : _ === "none" || m?.display === "none" ? h("UNMOUNT") : h(g && p !== _ ? "ANIMATION_OUT" : "UNMOUNT"), u.current = e;
    }
  }, [e, h]), Di(() => {
    if (a) {
      let m;
      const g = a.ownerDocument.defaultView ?? window, p = (S) => {
        const T = Ou(l.current).includes(S.animationName);
        if (S.target === a && T && (h("ANIMATION_END"), !u.current)) {
          const x = a.style.animationFillMode;
          a.style.animationFillMode = "forwards", m = g.setTimeout(() => {
            a.style.animationFillMode === "forwards" && (a.style.animationFillMode = x);
          });
        }
      }, _ = (S) => {
        S.target === a && (c.current = Ou(l.current));
      };
      return a.addEventListener("animationstart", _), a.addEventListener("animationcancel", p), a.addEventListener("animationend", p), () => {
        g.clearTimeout(m), a.removeEventListener("animationstart", _), a.removeEventListener("animationcancel", p), a.removeEventListener("animationend", p);
      };
    } else h("ANIMATION_END");
  }, [a, h]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: b.useCallback((m) => {
      m && (l.current = getComputedStyle(m)), r(m);
    }, [])
  };
}
function Ou(e) {
  return e?.animationName || "none";
}
function J3(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning;
  return r ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = a && "isReactWarning" in a && a.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var eA = b.useId || (() => {
}), tA = 0;
function Zo(e) {
  const [a, r] = b.useState(eA());
  return Di(() => {
    e || r((l) => l ?? String(tA++));
  }, [e]), e || (a ? `radix-${a}` : "");
}
function nA(e, a = globalThis?.document) {
  const r = Ka(e);
  b.useEffect(() => {
    const l = (u) => {
      u.key === "Escape" && r(u);
    };
    return a.addEventListener("keydown", l, { capture: !0 }), () => a.removeEventListener("keydown", l, { capture: !0 });
  }, [r, a]);
}
var aA = "DismissableLayer", wd = "dismissableLayer.update", iA = "dismissableLayer.pointerDownOutside", rA = "dismissableLayer.focusOutside", Q0, uy = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rs = b.forwardRef((e, a) => {
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: c, onInteractOutside: d, onDismiss: h, ...m } = e, g = b.useContext(uy), [p, _] = b.useState(null), S = p?.ownerDocument ?? globalThis?.document, [, T] = b.useState({}), x = Qt(a, (q) => _(q)), C = Array.from(g.layers), [A] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), M = C.indexOf(A), N = p ? C.indexOf(p) : -1, D = g.layersWithOutsidePointerEventsDisabled.size > 0, R = N >= M, B = uA((q) => {
    const ee = q.target, F = [...g.branches].some((U) => U.contains(ee));
    !R || F || (u?.(q), d?.(q), q.defaultPrevented || h?.());
  }, S), H = sA((q) => {
    const ee = q.target;
    [...g.branches].some((F) => F.contains(ee)) || (c?.(q), d?.(q), q.defaultPrevented || h?.());
  }, S);
  return nA((q) => {
    N === g.layers.size - 1 && (l?.(q), !q.defaultPrevented && h && (q.preventDefault(), h()));
  }, S), b.useEffect(() => {
    if (p)
      return r && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (Q0 = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(p)), g.layers.add(p), K0(), () => {
        r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Q0);
      };
  }, [
    p,
    S,
    r,
    g
  ]), b.useEffect(() => () => {
    p && (g.layers.delete(p), g.layersWithOutsidePointerEventsDisabled.delete(p), K0());
  }, [p, g]), b.useEffect(() => {
    const q = () => T({});
    return document.addEventListener(wd, q), () => document.removeEventListener(wd, q);
  }, []), /* @__PURE__ */ (0, y.jsx)(xt.div, {
    ...m,
    ref: x,
    style: {
      pointerEvents: D ? R ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: pt(e.onFocusCapture, H.onFocusCapture),
    onBlurCapture: pt(e.onBlurCapture, H.onBlurCapture),
    onPointerDownCapture: pt(e.onPointerDownCapture, B.onPointerDownCapture)
  });
});
rs.displayName = aA;
var oA = "DismissableLayerBranch", lA = b.forwardRef((e, a) => {
  const r = b.useContext(uy), l = b.useRef(null), u = Qt(a, l);
  return b.useEffect(() => {
    const c = l.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ (0, y.jsx)(xt.div, {
    ...e,
    ref: u
  });
});
lA.displayName = oA;
function uA(e, a = globalThis?.document) {
  const r = Ka(e), l = b.useRef(!1), u = b.useRef(() => {
  });
  return b.useEffect(() => {
    const c = (h) => {
      if (h.target && !l.current) {
        let m = function() {
          sy(iA, r, g, { discrete: !0 });
        };
        const g = { originalEvent: h };
        h.pointerType === "touch" ? (a.removeEventListener("click", u.current), u.current = m, a.addEventListener("click", u.current, { once: !0 })) : m();
      } else a.removeEventListener("click", u.current);
      l.current = !1;
    }, d = window.setTimeout(() => {
      a.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(d), a.removeEventListener("pointerdown", c), a.removeEventListener("click", u.current);
    };
  }, [a, r]), { onPointerDownCapture: () => l.current = !0 };
}
function sA(e, a = globalThis?.document) {
  const r = Ka(e), l = b.useRef(!1);
  return b.useEffect(() => {
    const u = (c) => {
      c.target && !l.current && sy(rA, r, { originalEvent: c }, { discrete: !1 });
    };
    return a.addEventListener("focusin", u), () => a.removeEventListener("focusin", u);
  }, [a, r]), {
    onFocusCapture: () => l.current = !0,
    onBlurCapture: () => l.current = !1
  };
}
function K0() {
  const e = new CustomEvent(wd);
  document.dispatchEvent(e);
}
function sy(e, a, r, { discrete: l }) {
  const u = r.originalEvent.target, c = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  a && u.addEventListener(e, a, { once: !0 }), l ? V3(u, c) : u.dispatchEvent(c);
}
var Vf = "focusScope.autoFocusOnMount", Ff = "focusScope.autoFocusOnUnmount", J0 = {
  bubbles: !1,
  cancelable: !0
}, cA = "FocusScope", Jd = b.forwardRef((e, a) => {
  const { loop: r = !1, trapped: l = !1, onMountAutoFocus: u, onUnmountAutoFocus: c, ...d } = e, [h, m] = b.useState(null), g = Ka(u), p = Ka(c), _ = b.useRef(null), S = Qt(a, (C) => m(C)), T = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (l) {
      let C = function(D) {
        if (T.paused || !h) return;
        const R = D.target;
        h.contains(R) ? _.current = R : Ya(_.current, { select: !0 });
      }, A = function(D) {
        if (T.paused || !h) return;
        const R = D.relatedTarget;
        R !== null && (h.contains(R) || Ya(_.current, { select: !0 }));
      }, M = function(D) {
        if (document.activeElement === document.body)
          for (const R of D) R.removedNodes.length > 0 && Ya(h);
      };
      document.addEventListener("focusin", C), document.addEventListener("focusout", A);
      const N = new MutationObserver(M);
      return h && N.observe(h, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", C), document.removeEventListener("focusout", A), N.disconnect();
      };
    }
  }, [
    l,
    h,
    T.paused
  ]), b.useEffect(() => {
    if (h) {
      tg.add(T);
      const C = document.activeElement;
      if (!h.contains(C)) {
        const A = new CustomEvent(Vf, J0);
        h.addEventListener(Vf, g), h.dispatchEvent(A), A.defaultPrevented || (fA(pA(cy(h)), { select: !0 }), document.activeElement === C && Ya(h));
      }
      return () => {
        h.removeEventListener(Vf, g), setTimeout(() => {
          const A = new CustomEvent(Ff, J0);
          h.addEventListener(Ff, p), h.dispatchEvent(A), A.defaultPrevented || Ya(C ?? document.body, { select: !0 }), h.removeEventListener(Ff, p), tg.remove(T);
        }, 0);
      };
    }
  }, [
    h,
    g,
    p,
    T
  ]);
  const x = b.useCallback((C) => {
    if (!r && !l || T.paused) return;
    const A = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, M = document.activeElement;
    if (A && M) {
      const N = C.currentTarget, [D, R] = dA(N);
      D && R ? !C.shiftKey && M === R ? (C.preventDefault(), r && Ya(D, { select: !0 })) : C.shiftKey && M === D && (C.preventDefault(), r && Ya(R, { select: !0 })) : M === N && C.preventDefault();
    }
  }, [
    r,
    l,
    T.paused
  ]);
  return /* @__PURE__ */ (0, y.jsx)(xt.div, {
    tabIndex: -1,
    ...d,
    ref: S,
    onKeyDown: x
  });
});
Jd.displayName = cA;
function fA(e, { select: a = !1 } = {}) {
  const r = document.activeElement;
  for (const l of e)
    if (Ya(l, { select: a }), document.activeElement !== r) return;
}
function dA(e) {
  const a = cy(e);
  return [eg(a, e), eg(a.reverse(), e)];
}
function cy(e) {
  const a = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (l) => {
    const u = l.tagName === "INPUT" && l.type === "hidden";
    return l.disabled || l.hidden || u ? NodeFilter.FILTER_SKIP : l.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) a.push(r.currentNode);
  return a;
}
function eg(e, a) {
  for (const r of e) if (!hA(r, { upTo: a })) return r;
}
function hA(e, { upTo: a }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (a !== void 0 && e === a) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function mA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ya(e, { select: a = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && mA(e) && a && e.select();
  }
}
var tg = vA();
function vA() {
  let e = [];
  return {
    add(a) {
      const r = e[0];
      a !== r && r?.pause(), e = ng(e, a), e.unshift(a);
    },
    remove(a) {
      e = ng(e, a), e[0]?.resume();
    }
  };
}
function ng(e, a) {
  const r = [...e], l = r.indexOf(a);
  return l !== -1 && r.splice(l, 1), r;
}
function pA(e) {
  return e.filter((a) => a.tagName !== "A");
}
var gA = "Portal", os = b.forwardRef((e, a) => {
  const { container: r, ...l } = e, [u, c] = b.useState(!1);
  Di(() => c(!0), []);
  const d = r || u && globalThis?.document?.body;
  return d ? Pr.createPortal(/* @__PURE__ */ (0, y.jsx)(xt.div, {
    ...l,
    ref: a
  }), d) : null;
});
os.displayName = gA;
var Xf = 0;
function fy() {
  b.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ag()), document.body.insertAdjacentElement("beforeend", e[1] ?? ag()), Xf++, () => {
      Xf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((a) => a.remove()), Xf--;
    };
  }, []);
}
function ag() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Bu = "right-scroll-bar-position", Uu = "width-before-scroll-bar", yA = "with-scroll-bars-hidden", bA = "--removed-body-scroll-bar-size";
function qf(e, a) {
  return typeof e == "function" ? e(a) : e && (e.current = a), e;
}
function _A(e, a) {
  var r = (0, b.useState)(function() {
    return {
      value: e,
      callback: a,
      facade: {
        get current() {
          return r.value;
        },
        set current(l) {
          var u = r.value;
          u !== l && (r.value = l, r.callback(l, u));
        }
      }
    };
  })[0];
  return r.callback = a, r.facade;
}
var wA = typeof window < "u" ? b.useLayoutEffect : b.useEffect, ig = /* @__PURE__ */ new WeakMap();
function SA(e, a) {
  var r = _A(a || null, function(l) {
    return e.forEach(function(u) {
      return qf(u, l);
    });
  });
  return wA(function() {
    var l = ig.get(r);
    if (l) {
      var u = new Set(l), c = new Set(e), d = r.current;
      u.forEach(function(h) {
        c.has(h) || qf(h, null);
      }), c.forEach(function(h) {
        u.has(h) || qf(h, d);
      });
    }
    ig.set(r, e);
  }, [e]), r;
}
function EA(e) {
  return e;
}
function TA(e, a) {
  a === void 0 && (a = EA);
  var r = [], l = !1;
  return {
    read: function() {
      if (l) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(u) {
      var c = a(u, l);
      return r.push(c), function() {
        r = r.filter(function(d) {
          return d !== c;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (l = !0; r.length; ) {
        var c = r;
        r = [], c.forEach(u);
      }
      r = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(u) {
      l = !0;
      var c = [];
      if (r.length) {
        var d = r;
        r = [], d.forEach(u), c = r;
      }
      var h = function() {
        var g = c;
        c = [], g.forEach(u);
      }, m = function() {
        return Promise.resolve().then(h);
      };
      m(), r = {
        push: function(g) {
          c.push(g), m();
        },
        filter: function(g) {
          return c = c.filter(g), r;
        }
      };
    }
  };
}
function CA(e) {
  e === void 0 && (e = {});
  var a = TA(null);
  return a.options = se({
    async: !0,
    ssr: !1
  }, e), a;
}
var dy = function(e) {
  var a = e.sideCar, r = Sa(e, ["sideCar"]);
  if (!a) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var l = a.read();
  if (!l) throw new Error("Sidecar medium not found");
  return b.createElement(l, se({}, r));
};
dy.isSideCarExport = !0;
function AA(e, a) {
  return e.useMedium(a), dy;
}
var hy = CA(), Yf = function() {
}, ls = b.forwardRef(function(e, a) {
  var r = b.useRef(null), l = b.useState({
    onScrollCapture: Yf,
    onWheelCapture: Yf,
    onTouchMoveCapture: Yf
  }), u = l[0], c = l[1], d = e.forwardProps, h = e.children, m = e.className, g = e.removeScrollBar, p = e.enabled, _ = e.shards, S = e.sideCar, T = e.noIsolation, x = e.inert, C = e.allowPinchZoom, A = e.as, M = A === void 0 ? "div" : A, N = e.gapMode, D = Sa(e, [
    "forwardProps",
    "children",
    "className",
    "removeScrollBar",
    "enabled",
    "shards",
    "sideCar",
    "noIsolation",
    "inert",
    "allowPinchZoom",
    "as",
    "gapMode"
  ]), R = S, B = SA([r, a]), H = se(se({}, D), u);
  return b.createElement(b.Fragment, null, p && b.createElement(R, {
    sideCar: hy,
    removeScrollBar: g,
    shards: _,
    noIsolation: T,
    inert: x,
    setCallbacks: c,
    allowPinchZoom: !!C,
    lockRef: r,
    gapMode: N
  }), d ? b.cloneElement(b.Children.only(h), se(se({}, H), { ref: B })) : b.createElement(M, se({}, H, {
    className: m,
    ref: B
  }), h));
});
ls.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ls.classNames = {
  fullWidth: Uu,
  zeroRight: Bu
};
var rg, xA = function() {
  if (rg) return rg;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function OA() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var a = xA();
  return a && e.setAttribute("nonce", a), e;
}
function MA(e, a) {
  e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a));
}
function RA(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var NA = function() {
  var e = 0, a = null;
  return {
    add: function(r) {
      e == 0 && (a = OA()) && (MA(a, r), RA(a)), e++;
    },
    remove: function() {
      e--, !e && a && (a.parentNode && a.parentNode.removeChild(a), a = null);
    }
  };
}, DA = function() {
  var e = NA();
  return function(a, r) {
    b.useEffect(function() {
      return e.add(a), function() {
        e.remove();
      };
    }, [a && r]);
  };
}, my = function() {
  var e = DA(), a = function(r) {
    var l = r.styles, u = r.dynamic;
    return e(l, u), null;
  };
  return a;
}, zA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Wf = function(e) {
  return parseInt(e || "", 10) || 0;
}, LA = function(e) {
  var a = window.getComputedStyle(document.body), r = a[e === "padding" ? "paddingLeft" : "marginLeft"], l = a[e === "padding" ? "paddingTop" : "marginTop"], u = a[e === "padding" ? "paddingRight" : "marginRight"];
  return [
    Wf(r),
    Wf(l),
    Wf(u)
  ];
}, HA = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u") return zA;
  var a = LA(e), r = document.documentElement.clientWidth, l = window.innerWidth;
  return {
    left: a[0],
    top: a[1],
    right: a[2],
    gap: Math.max(0, l - r + a[2] - a[0])
  };
}, jA = my(), Io = "data-scroll-locked", BA = function(e, a, r, l) {
  var u = e.left, c = e.top, d = e.right, h = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(yA, ` {
   overflow: hidden `).concat(l, `;
   padding-right: `).concat(h, "px ").concat(l, `;
  }
  body[`).concat(Io, `] {
    overflow: hidden `).concat(l, `;
    overscroll-behavior: contain;
    `).concat([
    a && "position: relative ".concat(l, ";"),
    r === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(c, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(l, `;
    `),
    r === "padding" && "padding-right: ".concat(h, "px ").concat(l, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Bu, ` {
    right: `).concat(h, "px ").concat(l, `;
  }
  
  .`).concat(Uu, ` {
    margin-right: `).concat(h, "px ").concat(l, `;
  }
  
  .`).concat(Bu, " .").concat(Bu, ` {
    right: 0 `).concat(l, `;
  }
  
  .`).concat(Uu, " .").concat(Uu, ` {
    margin-right: 0 `).concat(l, `;
  }
  
  body[`).concat(Io, `] {
    `).concat(bA, ": ").concat(h, `px;
  }
`);
}, og = function() {
  var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
  return isFinite(e) ? e : 0;
}, UA = function() {
  b.useEffect(function() {
    return document.body.setAttribute(Io, (og() + 1).toString()), function() {
      var e = og() - 1;
      e <= 0 ? document.body.removeAttribute(Io) : document.body.setAttribute(Io, e.toString());
    };
  }, []);
}, kA = function(e) {
  var a = e.noRelative, r = e.noImportant, l = e.gapMode, u = l === void 0 ? "margin" : l;
  UA();
  var c = b.useMemo(function() {
    return HA(u);
  }, [u]);
  return b.createElement(jA, { styles: BA(c, !a, u, r ? "" : "!important") });
}, Sd = !1;
if (typeof window < "u") try {
  var Mu = Object.defineProperty({}, "passive", { get: function() {
    return Sd = !0, !0;
  } });
  window.addEventListener("test", Mu, Mu), window.removeEventListener("test", Mu, Mu);
} catch {
  Sd = !1;
}
var Cr = Sd ? { passive: !1 } : !1, PA = function(e) {
  return e.tagName === "TEXTAREA";
}, vy = function(e, a) {
  if (!(e instanceof Element)) return !1;
  var r = window.getComputedStyle(e);
  return r[a] !== "hidden" && !(r.overflowY === r.overflowX && !PA(e) && r[a] === "visible");
}, ZA = function(e) {
  return vy(e, "overflowY");
}, IA = function(e) {
  return vy(e, "overflowX");
}, lg = function(e, a) {
  var r = a.ownerDocument, l = a;
  do {
    if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host), py(e, l)) {
      var u = gy(e, l);
      if (u[1] > u[2]) return !0;
    }
    l = l.parentNode;
  } while (l && l !== r.body);
  return !1;
}, GA = function(e) {
  return [
    e.scrollTop,
    e.scrollHeight,
    e.clientHeight
  ];
}, $A = function(e) {
  return [
    e.scrollLeft,
    e.scrollWidth,
    e.clientWidth
  ];
}, py = function(e, a) {
  return e === "v" ? ZA(a) : IA(a);
}, gy = function(e, a) {
  return e === "v" ? GA(a) : $A(a);
}, VA = function(e, a) {
  return e === "h" && a === "rtl" ? -1 : 1;
}, FA = function(e, a, r, l, u) {
  var c = VA(e, window.getComputedStyle(a).direction), d = c * l, h = r.target, m = a.contains(h), g = !1, p = d > 0, _ = 0, S = 0;
  do {
    var T = gy(e, h), x = T[0], C = T[1] - T[2] - c * x;
    (x || C) && py(e, h) && (_ += C, S += x), h instanceof ShadowRoot ? h = h.host : h = h.parentNode;
  } while (!m && h !== document.body || m && (a.contains(h) || a === h));
  return (p && (u && Math.abs(_) < 1 || !u && d > _) || !p && (u && Math.abs(S) < 1 || !u && -d > S)) && (g = !0), g;
}, Ru = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ug = function(e) {
  return [e.deltaX, e.deltaY];
}, sg = function(e) {
  return e && "current" in e ? e.current : e;
}, XA = function(e, a) {
  return e[0] === a[0] && e[1] === a[1];
}, qA = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, YA = 0, Ar = [];
function WA(e) {
  var a = b.useRef([]), r = b.useRef([0, 0]), l = b.useRef(), u = b.useState(YA++)[0], c = b.useState(my)[0], d = b.useRef(e);
  b.useEffect(function() {
    d.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(u));
      var C = zn([e.lockRef.current], (e.shards || []).map(sg), !0).filter(Boolean);
      return C.forEach(function(A) {
        return A.classList.add("allow-interactivity-".concat(u));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(u)), C.forEach(function(A) {
          return A.classList.remove("allow-interactivity-".concat(u));
        });
      };
    }
  }, [
    e.inert,
    e.lockRef.current,
    e.shards
  ]);
  var h = b.useCallback(function(C, A) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey) return !d.current.allowPinchZoom;
    var M = Ru(C), N = r.current, D = "deltaX" in C ? C.deltaX : N[0] - M[0], R = "deltaY" in C ? C.deltaY : N[1] - M[1], B, H = C.target, q = Math.abs(D) > Math.abs(R) ? "h" : "v";
    if ("touches" in C && q === "h" && H.type === "range") return !1;
    var ee = lg(q, H);
    if (!ee) return !0;
    if (ee ? B = q : (B = q === "v" ? "h" : "v", ee = lg(q, H)), !ee) return !1;
    if (!l.current && "changedTouches" in C && (D || R) && (l.current = B), !B) return !0;
    var F = l.current || B;
    return FA(F, A, C, F === "h" ? D : R, !0);
  }, []), m = b.useCallback(function(C) {
    var A = C;
    if (!(!Ar.length || Ar[Ar.length - 1] !== c)) {
      var M = "deltaY" in A ? ug(A) : Ru(A), N = a.current.filter(function(R) {
        return R.name === A.type && (R.target === A.target || A.target === R.shadowParent) && XA(R.delta, M);
      })[0];
      if (N && N.should) {
        A.cancelable && A.preventDefault();
        return;
      }
      if (!N) {
        var D = (d.current.shards || []).map(sg).filter(Boolean).filter(function(R) {
          return R.contains(A.target);
        });
        (D.length > 0 ? h(A, D[0]) : !d.current.noIsolation) && A.cancelable && A.preventDefault();
      }
    }
  }, []), g = b.useCallback(function(C, A, M, N) {
    var D = {
      name: C,
      delta: A,
      target: M,
      should: N,
      shadowParent: QA(M)
    };
    a.current.push(D), setTimeout(function() {
      a.current = a.current.filter(function(R) {
        return R !== D;
      });
    }, 1);
  }, []), p = b.useCallback(function(C) {
    r.current = Ru(C), l.current = void 0;
  }, []), _ = b.useCallback(function(C) {
    g(C.type, ug(C), C.target, h(C, e.lockRef.current));
  }, []), S = b.useCallback(function(C) {
    g(C.type, Ru(C), C.target, h(C, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Ar.push(c), e.setCallbacks({
      onScrollCapture: _,
      onWheelCapture: _,
      onTouchMoveCapture: S
    }), document.addEventListener("wheel", m, Cr), document.addEventListener("touchmove", m, Cr), document.addEventListener("touchstart", p, Cr), function() {
      Ar = Ar.filter(function(C) {
        return C !== c;
      }), document.removeEventListener("wheel", m, Cr), document.removeEventListener("touchmove", m, Cr), document.removeEventListener("touchstart", p, Cr);
    };
  }, []);
  var T = e.removeScrollBar, x = e.inert;
  return b.createElement(b.Fragment, null, x ? b.createElement(c, { styles: qA(u) }) : null, T ? b.createElement(kA, { gapMode: e.gapMode }) : null);
}
function QA(e) {
  for (var a = null; e !== null; )
    e instanceof ShadowRoot && (a = e.host, e = e.host), e = e.parentNode;
  return a;
}
var KA = AA(hy, WA), eh = b.forwardRef(function(e, a) {
  return b.createElement(ls, se({}, e, {
    ref: a,
    sideCar: KA
  }));
});
eh.classNames = ls.classNames;
var JA = function(e) {
  return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, xr = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), Du = {}, Qf = 0, yy = function(e) {
  return e && (e.host || yy(e.parentNode));
}, e6 = function(e, a) {
  return a.map(function(r) {
    if (e.contains(r)) return r;
    var l = yy(r);
    return l && e.contains(l) ? l : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, t6 = function(e, a, r, l) {
  var u = e6(a, Array.isArray(e) ? e : [e]);
  Du[r] || (Du[r] = /* @__PURE__ */ new WeakMap());
  var c = Du[r], d = [], h = /* @__PURE__ */ new Set(), m = new Set(u), g = function(_) {
    !_ || h.has(_) || (h.add(_), g(_.parentNode));
  };
  u.forEach(g);
  var p = function(_) {
    !_ || m.has(_) || Array.prototype.forEach.call(_.children, function(S) {
      if (h.has(S)) p(S);
      else try {
        var T = S.getAttribute(l), x = T !== null && T !== "false", C = (xr.get(S) || 0) + 1, A = (c.get(S) || 0) + 1;
        xr.set(S, C), c.set(S, A), d.push(S), C === 1 && x && Nu.set(S, !0), A === 1 && S.setAttribute(r, "true"), x || S.setAttribute(l, "true");
      } catch (M) {
        console.error("aria-hidden: cannot operate on ", S, M);
      }
    });
  };
  return p(a), h.clear(), Qf++, function() {
    d.forEach(function(_) {
      var S = xr.get(_) - 1, T = c.get(_) - 1;
      xr.set(_, S), c.set(_, T), S || (Nu.has(_) || _.removeAttribute(l), Nu.delete(_)), T || _.removeAttribute(r);
    }), Qf--, Qf || (xr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), Du = {});
  };
}, by = function(e, a, r) {
  r === void 0 && (r = "data-aria-hidden");
  var l = Array.from(Array.isArray(e) ? e : [e]), u = a || JA(e);
  return u ? (l.push.apply(l, Array.from(u.querySelectorAll("[aria-live]"))), t6(l, u, r, "aria-hidden")) : function() {
    return null;
  };
}, th = "Dialog", [_y, uR] = tl(th), [n6, kn] = _y(th), wy = (e) => {
  const { __scopeDialog: a, children: r, open: l, defaultOpen: u, onOpenChange: c, modal: d = !0 } = e, h = b.useRef(null), m = b.useRef(null), [g = !1, p] = is({
    prop: l,
    defaultProp: u,
    onChange: c
  });
  return /* @__PURE__ */ (0, y.jsx)(n6, {
    scope: a,
    triggerRef: h,
    contentRef: m,
    contentId: Zo(),
    titleId: Zo(),
    descriptionId: Zo(),
    open: g,
    onOpenChange: p,
    onOpenToggle: b.useCallback(() => p((_) => !_), [p]),
    modal: d,
    children: r
  });
};
wy.displayName = th;
var Sy = "DialogTrigger", a6 = b.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = kn(Sy, r), c = Qt(a, u.triggerRef);
  return /* @__PURE__ */ (0, y.jsx)(xt.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": u.open,
    "aria-controls": u.contentId,
    "data-state": ih(u.open),
    ...l,
    ref: c,
    onClick: pt(e.onClick, u.onOpenToggle)
  });
});
a6.displayName = Sy;
var nh = "DialogPortal", [i6, Ey] = _y(nh, { forceMount: void 0 }), r6 = (e) => {
  const { __scopeDialog: a, forceMount: r, children: l, container: u } = e, c = kn(nh, a);
  return /* @__PURE__ */ (0, y.jsx)(i6, {
    scope: a,
    forceMount: r,
    children: b.Children.map(l, (d) => /* @__PURE__ */ (0, y.jsx)(ri, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, y.jsx)(os, {
        asChild: !0,
        container: u,
        children: d
      })
    }))
  });
};
r6.displayName = nh;
var qu = "DialogOverlay", o6 = b.forwardRef((e, a) => {
  const r = Ey(qu, e.__scopeDialog), { forceMount: l = r.forceMount, ...u } = e, c = kn(qu, e.__scopeDialog);
  return c.modal ? /* @__PURE__ */ (0, y.jsx)(ri, {
    present: l || c.open,
    children: /* @__PURE__ */ (0, y.jsx)(l6, {
      ...u,
      ref: a
    })
  }) : null;
});
o6.displayName = qu;
var l6 = b.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = kn(qu, r);
  return /* @__PURE__ */ (0, y.jsx)(eh, {
    as: el,
    allowPinchZoom: !0,
    shards: [u.contentRef],
    children: /* @__PURE__ */ (0, y.jsx)(xt.div, {
      "data-state": ih(u.open),
      ...l,
      ref: a,
      style: {
        pointerEvents: "auto",
        ...l.style
      }
    })
  });
}), zi = "DialogContent", Ty = b.forwardRef((e, a) => {
  const r = Ey(zi, e.__scopeDialog), { forceMount: l = r.forceMount, ...u } = e, c = kn(zi, e.__scopeDialog);
  return /* @__PURE__ */ (0, y.jsx)(ri, {
    present: l || c.open,
    children: c.modal ? /* @__PURE__ */ (0, y.jsx)(u6, {
      ...u,
      ref: a
    }) : /* @__PURE__ */ (0, y.jsx)(s6, {
      ...u,
      ref: a
    })
  });
});
Ty.displayName = zi;
var u6 = b.forwardRef((e, a) => {
  const r = kn(zi, e.__scopeDialog), l = b.useRef(null), u = Qt(a, r.contentRef, l);
  return b.useEffect(() => {
    const c = l.current;
    if (c) return by(c);
  }, []), /* @__PURE__ */ (0, y.jsx)(Cy, {
    ...e,
    ref: u,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: pt(e.onCloseAutoFocus, (c) => {
      c.preventDefault(), r.triggerRef.current?.focus();
    }),
    onPointerDownOutside: pt(e.onPointerDownOutside, (c) => {
      const d = c.detail.originalEvent, h = d.button === 0 && d.ctrlKey === !0;
      (d.button === 2 || h) && c.preventDefault();
    }),
    onFocusOutside: pt(e.onFocusOutside, (c) => c.preventDefault())
  });
}), s6 = b.forwardRef((e, a) => {
  const r = kn(zi, e.__scopeDialog), l = b.useRef(!1), u = b.useRef(!1);
  return /* @__PURE__ */ (0, y.jsx)(Cy, {
    ...e,
    ref: a,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      e.onCloseAutoFocus?.(c), c.defaultPrevented || (l.current || r.triggerRef.current?.focus(), c.preventDefault()), l.current = !1, u.current = !1;
    },
    onInteractOutside: (c) => {
      e.onInteractOutside?.(c), c.defaultPrevented || (l.current = !0, c.detail.originalEvent.type === "pointerdown" && (u.current = !0));
      const d = c.target;
      r.triggerRef.current?.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && u.current && c.preventDefault();
    }
  });
}), Cy = b.forwardRef((e, a) => {
  const { __scopeDialog: r, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: c, ...d } = e, h = kn(zi, r), m = b.useRef(null), g = Qt(a, m);
  return fy(), /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(Jd, {
    asChild: !0,
    loop: !0,
    trapped: l,
    onMountAutoFocus: u,
    onUnmountAutoFocus: c,
    children: /* @__PURE__ */ (0, y.jsx)(rs, {
      role: "dialog",
      id: h.contentId,
      "aria-describedby": h.descriptionId,
      "aria-labelledby": h.titleId,
      "data-state": ih(h.open),
      ...d,
      ref: g,
      onDismiss: () => h.onOpenChange(!1)
    })
  }), /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(d6, { titleId: h.titleId }), /* @__PURE__ */ (0, y.jsx)(m6, {
    contentRef: m,
    descriptionId: h.descriptionId
  })] })] });
}), ah = "DialogTitle", Ay = b.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = kn(ah, r);
  return /* @__PURE__ */ (0, y.jsx)(xt.h2, {
    id: u.titleId,
    ...l,
    ref: a
  });
});
Ay.displayName = ah;
var xy = "DialogDescription", c6 = b.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = kn(xy, r);
  return /* @__PURE__ */ (0, y.jsx)(xt.p, {
    id: u.descriptionId,
    ...l,
    ref: a
  });
});
c6.displayName = xy;
var Oy = "DialogClose", f6 = b.forwardRef((e, a) => {
  const { __scopeDialog: r, ...l } = e, u = kn(Oy, r);
  return /* @__PURE__ */ (0, y.jsx)(xt.button, {
    type: "button",
    ...l,
    ref: a,
    onClick: pt(e.onClick, () => u.onOpenChange(!1))
  });
});
f6.displayName = Oy;
function ih(e) {
  return e ? "open" : "closed";
}
var My = "DialogTitleWarning", [sR, Ry] = q3(My, {
  contentName: zi,
  titleName: ah,
  docsSlug: "dialog"
}), d6 = ({ titleId: e }) => {
  const a = Ry(My), r = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
  return b.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, h6 = "DialogDescriptionWarning", m6 = ({ contentRef: e, descriptionId: a }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ry(h6).contentName}}.`;
  return b.useEffect(() => {
    const l = e.current?.getAttribute("aria-describedby");
    a && l && (document.getElementById(a) || console.warn(r));
  }, [
    r,
    e,
    a
  ]), null;
}, v6 = wy, p6 = Ty, Ny = Ay;
function g6(e) {
  const a = b.useRef({
    value: e,
    previous: e
  });
  return b.useMemo(() => (a.current.value !== e && (a.current.previous = a.current.value, a.current.value = e), a.current.previous), [e]);
}
function Dy(e) {
  const [a, r] = b.useState(void 0);
  return Di(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const l = new ResizeObserver((u) => {
        if (!Array.isArray(u) || !u.length) return;
        const c = u[0];
        let d, h;
        if ("borderBoxSize" in c) {
          const m = c.borderBoxSize, g = Array.isArray(m) ? m[0] : m;
          d = g.inlineSize, h = g.blockSize;
        } else
          d = e.offsetWidth, h = e.offsetHeight;
        r({
          width: d,
          height: h
        });
      });
      return l.observe(e, { box: "border-box" }), () => l.unobserve(e);
    } else r(void 0);
  }, [e]), a;
}
var y6 = [
  "top",
  "right",
  "bottom",
  "left"
], Ja = Math.min, un = Math.max, Yu = Math.round, zu = Math.floor, Qn = (e) => ({
  x: e,
  y: e
}), b6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, _6 = {
  start: "end",
  end: "start"
};
function Ed(e, a, r) {
  return un(e, Ja(a, r));
}
function Ea(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function Ta(e) {
  return e.split("-")[0];
}
function Zr(e) {
  return e.split("-")[1];
}
function rh(e) {
  return e === "x" ? "y" : "x";
}
function oh(e) {
  return e === "y" ? "height" : "width";
}
var w6 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Wn(e) {
  return w6.has(Ta(e)) ? "y" : "x";
}
function lh(e) {
  return rh(Wn(e));
}
function S6(e, a, r) {
  r === void 0 && (r = !1);
  const l = Zr(e), u = lh(e), c = oh(u);
  let d = u === "x" ? l === (r ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return a.reference[c] > a.floating[c] && (d = Wu(d)), [d, Wu(d)];
}
function E6(e) {
  const a = Wu(e);
  return [
    Td(e),
    a,
    Td(a)
  ];
}
function Td(e) {
  return e.replace(/start|end/g, (a) => _6[a]);
}
var cg = ["left", "right"], fg = ["right", "left"], T6 = ["top", "bottom"], C6 = ["bottom", "top"];
function A6(e, a, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? a ? fg : cg : a ? cg : fg;
    case "left":
    case "right":
      return a ? T6 : C6;
    default:
      return [];
  }
}
function x6(e, a, r, l) {
  const u = Zr(e);
  let c = A6(Ta(e), r === "start", l);
  return u && (c = c.map((d) => d + "-" + u), a && (c = c.concat(c.map(Td)))), c;
}
function Wu(e) {
  return e.replace(/left|right|bottom|top/g, (a) => b6[a]);
}
function O6(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zy(e) {
  return typeof e != "number" ? O6(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qu(e) {
  const { x: a, y: r, width: l, height: u } = e;
  return {
    width: l,
    height: u,
    top: r,
    left: a,
    right: a + l,
    bottom: r + u,
    x: a,
    y: r
  };
}
function dg(e, a, r) {
  let { reference: l, floating: u } = e;
  const c = Wn(a), d = lh(a), h = oh(d), m = Ta(a), g = c === "y", p = l.x + l.width / 2 - u.width / 2, _ = l.y + l.height / 2 - u.height / 2, S = l[h] / 2 - u[h] / 2;
  let T;
  switch (m) {
    case "top":
      T = {
        x: p,
        y: l.y - u.height
      };
      break;
    case "bottom":
      T = {
        x: p,
        y: l.y + l.height
      };
      break;
    case "right":
      T = {
        x: l.x + l.width,
        y: _
      };
      break;
    case "left":
      T = {
        x: l.x - u.width,
        y: _
      };
      break;
    default:
      T = {
        x: l.x,
        y: l.y
      };
  }
  switch (Zr(a)) {
    case "start":
      T[d] -= S * (r && g ? -1 : 1);
      break;
    case "end":
      T[d] += S * (r && g ? -1 : 1);
      break;
  }
  return T;
}
var M6 = async (e, a, r) => {
  const { placement: l = "bottom", strategy: u = "absolute", middleware: c = [], platform: d } = r, h = c.filter(Boolean), m = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let g = await d.getElementRects({
    reference: e,
    floating: a,
    strategy: u
  }), { x: p, y: _ } = dg(g, l, m), S = l, T = {}, x = 0;
  for (let C = 0; C < h.length; C++) {
    const { name: A, fn: M } = h[C], { x: N, y: D, data: R, reset: B } = await M({
      x: p,
      y: _,
      initialPlacement: l,
      placement: S,
      strategy: u,
      middlewareData: T,
      rects: g,
      platform: d,
      elements: {
        reference: e,
        floating: a
      }
    });
    p = N ?? p, _ = D ?? _, T = {
      ...T,
      [A]: {
        ...T[A],
        ...R
      }
    }, B && x <= 50 && (x++, typeof B == "object" && (B.placement && (S = B.placement), B.rects && (g = B.rects === !0 ? await d.getElementRects({
      reference: e,
      floating: a,
      strategy: u
    }) : B.rects), { x: p, y: _ } = dg(g, S, m)), C = -1);
  }
  return {
    x: p,
    y: _,
    placement: S,
    strategy: u,
    middlewareData: T
  };
};
async function Xo(e, a) {
  var r;
  a === void 0 && (a = {});
  const { x: l, y: u, platform: c, rects: d, elements: h, strategy: m } = e, { boundary: g = "clippingAncestors", rootBoundary: p = "viewport", elementContext: _ = "floating", altBoundary: S = !1, padding: T = 0 } = Ea(a, e), x = zy(T), C = h[S ? _ === "floating" ? "reference" : "floating" : _], A = Qu(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(C))) == null || r ? C : C.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(h.floating)),
    boundary: g,
    rootBoundary: p,
    strategy: m
  })), M = _ === "floating" ? {
    x: l,
    y: u,
    width: d.floating.width,
    height: d.floating.height
  } : d.reference, N = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h.floating)), D = await (c.isElement == null ? void 0 : c.isElement(N)) ? await (c.getScale == null ? void 0 : c.getScale(N)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Qu(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: h,
    rect: M,
    offsetParent: N,
    strategy: m
  }) : M);
  return {
    top: (A.top - R.top + x.top) / D.y,
    bottom: (R.bottom - A.bottom + x.bottom) / D.y,
    left: (A.left - R.left + x.left) / D.x,
    right: (R.right - A.right + x.right) / D.x
  };
}
var R6 = (e) => ({
  name: "arrow",
  options: e,
  async fn(a) {
    const { x: r, y: l, placement: u, rects: c, platform: d, elements: h, middlewareData: m } = a, { element: g, padding: p = 0 } = Ea(e, a) || {};
    if (g == null) return {};
    const _ = zy(p), S = {
      x: r,
      y: l
    }, T = lh(u), x = oh(T), C = await d.getDimensions(g), A = T === "y", M = A ? "top" : "left", N = A ? "bottom" : "right", D = A ? "clientHeight" : "clientWidth", R = c.reference[x] + c.reference[T] - S[T] - c.floating[x], B = S[T] - c.reference[T], H = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g));
    let q = H ? H[D] : 0;
    (!q || !await (d.isElement == null ? void 0 : d.isElement(H))) && (q = h.floating[D] || c.floating[x]);
    const ee = R / 2 - B / 2, F = q / 2 - C[x] / 2 - 1, U = Ja(_[M], F), Y = Ja(_[N], F), oe = U, ue = q - C[x] - Y, re = q / 2 - C[x] / 2 + ee, V = Ed(oe, re, ue), P = !m.arrow && Zr(u) != null && re !== V && c.reference[x] / 2 - (re < oe ? U : Y) - C[x] / 2 < 0, E = P ? re < oe ? re - oe : re - ue : 0;
    return {
      [T]: S[T] + E,
      data: {
        [T]: V,
        centerOffset: re - V - E,
        ...P && { alignmentOffset: E }
      },
      reset: P
    };
  }
}), N6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(a) {
      var r, l;
      const { placement: u, middlewareData: c, rects: d, initialPlacement: h, platform: m, elements: g } = a, { mainAxis: p = !0, crossAxis: _ = !0, fallbackPlacements: S, fallbackStrategy: T = "bestFit", fallbackAxisSideDirection: x = "none", flipAlignment: C = !0, ...A } = Ea(e, a);
      if ((r = c.arrow) != null && r.alignmentOffset) return {};
      const M = Ta(u), N = Wn(h), D = Ta(h) === h, R = await (m.isRTL == null ? void 0 : m.isRTL(g.floating)), B = S || (D || !C ? [Wu(h)] : E6(h)), H = x !== "none";
      !S && H && B.push(...x6(h, C, x, R));
      const q = [h, ...B], ee = await Xo(a, A), F = [];
      let U = ((l = c.flip) == null ? void 0 : l.overflows) || [];
      if (p && F.push(ee[M]), _) {
        const re = S6(u, d, R);
        F.push(ee[re[0]], ee[re[1]]);
      }
      if (U = [...U, {
        placement: u,
        overflows: F
      }], !F.every((re) => re <= 0)) {
        var Y, oe;
        const re = (((Y = c.flip) == null ? void 0 : Y.index) || 0) + 1, V = q[re];
        if (V && (!(_ === "alignment" && N !== Wn(V)) || U.every((E) => Wn(E.placement) === N ? E.overflows[0] > 0 : !0)))
          return {
            data: {
              index: re,
              overflows: U
            },
            reset: { placement: V }
          };
        let P = (oe = U.filter((E) => E.overflows[0] <= 0).sort((E, I) => E.overflows[1] - I.overflows[1])[0]) == null ? void 0 : oe.placement;
        if (!P) switch (T) {
          case "bestFit": {
            var ue;
            const E = (ue = U.filter((I) => {
              if (H) {
                const ae = Wn(I.placement);
                return ae === N || ae === "y";
              }
              return !0;
            }).map((I) => [I.placement, I.overflows.filter((ae) => ae > 0).reduce((ae, le) => ae + le, 0)]).sort((I, ae) => I[1] - ae[1])[0]) == null ? void 0 : ue[0];
            E && (P = E);
            break;
          }
          case "initialPlacement":
            P = h;
            break;
        }
        if (u !== P) return { reset: { placement: P } };
      }
      return {};
    }
  };
};
function hg(e, a) {
  return {
    top: e.top - a.height,
    right: e.right - a.width,
    bottom: e.bottom - a.height,
    left: e.left - a.width
  };
}
function mg(e) {
  return y6.some((a) => e[a] >= 0);
}
var D6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(a) {
      const { rects: r } = a, { strategy: l = "referenceHidden", ...u } = Ea(e, a);
      switch (l) {
        case "referenceHidden": {
          const c = hg(await Xo(a, {
            ...u,
            elementContext: "reference"
          }), r.reference);
          return { data: {
            referenceHiddenOffsets: c,
            referenceHidden: mg(c)
          } };
        }
        case "escaped": {
          const c = hg(await Xo(a, {
            ...u,
            altBoundary: !0
          }), r.floating);
          return { data: {
            escapedOffsets: c,
            escaped: mg(c)
          } };
        }
        default:
          return {};
      }
    }
  };
}, Ly = /* @__PURE__ */ new Set(["left", "top"]);
async function z6(e, a) {
  const { placement: r, platform: l, elements: u } = e, c = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), d = Ta(r), h = Zr(r), m = Wn(r) === "y", g = Ly.has(d) ? -1 : 1, p = c && m ? -1 : 1, _ = Ea(a, e);
  let { mainAxis: S, crossAxis: T, alignmentAxis: x } = typeof _ == "number" ? {
    mainAxis: _,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: _.mainAxis || 0,
    crossAxis: _.crossAxis || 0,
    alignmentAxis: _.alignmentAxis
  };
  return h && typeof x == "number" && (T = h === "end" ? x * -1 : x), m ? {
    x: T * p,
    y: S * g
  } : {
    x: S * g,
    y: T * p
  };
}
var L6 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(a) {
      var r, l;
      const { x: u, y: c, placement: d, middlewareData: h } = a, m = await z6(a, e);
      return d === ((r = h.offset) == null ? void 0 : r.placement) && (l = h.arrow) != null && l.alignmentOffset ? {} : {
        x: u + m.x,
        y: c + m.y,
        data: {
          ...m,
          placement: d
        }
      };
    }
  };
}, H6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(a) {
      const { x: r, y: l, placement: u } = a, { mainAxis: c = !0, crossAxis: d = !1, limiter: h = { fn: (A) => {
        let { x: M, y: N } = A;
        return {
          x: M,
          y: N
        };
      } }, ...m } = Ea(e, a), g = {
        x: r,
        y: l
      }, p = await Xo(a, m), _ = Wn(Ta(u)), S = rh(_);
      let T = g[S], x = g[_];
      if (c) {
        const A = S === "y" ? "top" : "left", M = S === "y" ? "bottom" : "right", N = T + p[A], D = T - p[M];
        T = Ed(N, T, D);
      }
      if (d) {
        const A = _ === "y" ? "top" : "left", M = _ === "y" ? "bottom" : "right", N = x + p[A], D = x - p[M];
        x = Ed(N, x, D);
      }
      const C = h.fn({
        ...a,
        [S]: T,
        [_]: x
      });
      return {
        ...C,
        data: {
          x: C.x - r,
          y: C.y - l,
          enabled: {
            [S]: c,
            [_]: d
          }
        }
      };
    }
  };
}, j6 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(a) {
      const { x: r, y: l, placement: u, rects: c, middlewareData: d } = a, { offset: h = 0, mainAxis: m = !0, crossAxis: g = !0 } = Ea(e, a), p = {
        x: r,
        y: l
      }, _ = Wn(u), S = rh(_);
      let T = p[S], x = p[_];
      const C = Ea(h, a), A = typeof C == "number" ? {
        mainAxis: C,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...C
      };
      if (m) {
        const D = S === "y" ? "height" : "width", R = c.reference[S] - c.floating[D] + A.mainAxis, B = c.reference[S] + c.reference[D] - A.mainAxis;
        T < R ? T = R : T > B && (T = B);
      }
      if (g) {
        var M, N;
        const D = S === "y" ? "width" : "height", R = Ly.has(Ta(u)), B = c.reference[_] - c.floating[D] + (R && ((M = d.offset) == null ? void 0 : M[_]) || 0) + (R ? 0 : A.crossAxis), H = c.reference[_] + c.reference[D] + (R ? 0 : ((N = d.offset) == null ? void 0 : N[_]) || 0) - (R ? A.crossAxis : 0);
        x < B ? x = B : x > H && (x = H);
      }
      return {
        [S]: T,
        [_]: x
      };
    }
  };
}, B6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(a) {
      var r, l;
      const { placement: u, rects: c, platform: d, elements: h } = a, { apply: m = () => {
      }, ...g } = Ea(e, a), p = await Xo(a, g), _ = Ta(u), S = Zr(u), T = Wn(u) === "y", { width: x, height: C } = c.floating;
      let A, M;
      _ === "top" || _ === "bottom" ? (A = _, M = S === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (M = _, A = S === "end" ? "top" : "bottom");
      const N = C - p.top - p.bottom, D = x - p.left - p.right, R = Ja(C - p[A], N), B = Ja(x - p[M], D), H = !a.middlewareData.shift;
      let q = R, ee = B;
      if ((r = a.middlewareData.shift) != null && r.enabled.x && (ee = D), (l = a.middlewareData.shift) != null && l.enabled.y && (q = N), H && !S) {
        const U = un(p.left, 0), Y = un(p.right, 0), oe = un(p.top, 0), ue = un(p.bottom, 0);
        T ? ee = x - 2 * (U !== 0 || Y !== 0 ? U + Y : un(p.left, p.right)) : q = C - 2 * (oe !== 0 || ue !== 0 ? oe + ue : un(p.top, p.bottom));
      }
      await m({
        ...a,
        availableWidth: ee,
        availableHeight: q
      });
      const F = await d.getDimensions(h.floating);
      return x !== F.width || C !== F.height ? { reset: { rects: !0 } } : {};
    }
  };
};
function us() {
  return typeof window < "u";
}
function Ir(e) {
  return Hy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function cn(e) {
  var a;
  return (e == null || (a = e.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function ea(e) {
  var a;
  return (a = (Hy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : a.documentElement;
}
function Hy(e) {
  return us() ? e instanceof Node || e instanceof cn(e).Node : !1;
}
function Bn(e) {
  return us() ? e instanceof Element || e instanceof cn(e).Element : !1;
}
function Jn(e) {
  return us() ? e instanceof HTMLElement || e instanceof cn(e).HTMLElement : !1;
}
function vg(e) {
  return !us() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof cn(e).ShadowRoot;
}
var U6 = /* @__PURE__ */ new Set(["inline", "contents"]);
function nl(e) {
  const { overflow: a, overflowX: r, overflowY: l, display: u } = Un(e);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + r) && !U6.has(u);
}
var k6 = /* @__PURE__ */ new Set([
  "table",
  "td",
  "th"
]);
function P6(e) {
  return k6.has(Ir(e));
}
var Z6 = [":popover-open", ":modal"];
function ss(e) {
  return Z6.some((a) => {
    try {
      return e.matches(a);
    } catch {
      return !1;
    }
  });
}
var I6 = [
  "transform",
  "translate",
  "scale",
  "rotate",
  "perspective"
], G6 = [
  "transform",
  "translate",
  "scale",
  "rotate",
  "perspective",
  "filter"
], $6 = [
  "paint",
  "layout",
  "strict",
  "content"
];
function uh(e) {
  const a = sh(), r = Bn(e) ? Un(e) : e;
  return I6.some((l) => r[l] ? r[l] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !a && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !a && (r.filter ? r.filter !== "none" : !1) || G6.some((l) => (r.willChange || "").includes(l)) || $6.some((l) => (r.contain || "").includes(l));
}
function V6(e) {
  let a = ei(e);
  for (; Jn(a) && !Lr(a); ) {
    if (uh(a)) return a;
    if (ss(a)) return null;
    a = ei(a);
  }
  return null;
}
function sh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var F6 = /* @__PURE__ */ new Set([
  "html",
  "body",
  "#document"
]);
function Lr(e) {
  return F6.has(Ir(e));
}
function Un(e) {
  return cn(e).getComputedStyle(e);
}
function cs(e) {
  return Bn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ei(e) {
  if (Ir(e) === "html") return e;
  const a = e.assignedSlot || e.parentNode || vg(e) && e.host || ea(e);
  return vg(a) ? a.host : a;
}
function jy(e) {
  const a = ei(e);
  return Lr(a) ? e.ownerDocument ? e.ownerDocument.body : e.body : Jn(a) && nl(a) ? a : jy(a);
}
function qo(e, a, r) {
  var l;
  a === void 0 && (a = []), r === void 0 && (r = !0);
  const u = jy(e), c = u === ((l = e.ownerDocument) == null ? void 0 : l.body), d = cn(u);
  if (c) {
    const h = Cd(d);
    return a.concat(d, d.visualViewport || [], nl(u) ? u : [], h && r ? qo(h) : []);
  }
  return a.concat(u, qo(u, [], r));
}
function Cd(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function By(e) {
  const a = Un(e);
  let r = parseFloat(a.width) || 0, l = parseFloat(a.height) || 0;
  const u = Jn(e), c = u ? e.offsetWidth : r, d = u ? e.offsetHeight : l, h = Yu(r) !== c || Yu(l) !== d;
  return h && (r = c, l = d), {
    width: r,
    height: l,
    $: h
  };
}
function ch(e) {
  return Bn(e) ? e : e.contextElement;
}
function Nr(e) {
  const a = ch(e);
  if (!Jn(a)) return Qn(1);
  const r = a.getBoundingClientRect(), { width: l, height: u, $: c } = By(a);
  let d = (c ? Yu(r.width) : r.width) / l, h = (c ? Yu(r.height) : r.height) / u;
  return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
    x: d,
    y: h
  };
}
var X6 = /* @__PURE__ */ Qn(0);
function Uy(e) {
  const a = cn(e);
  return !sh() || !a.visualViewport ? X6 : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function q6(e, a, r) {
  return a === void 0 && (a = !1), !r || a && r !== cn(e) ? !1 : a;
}
function Li(e, a, r, l) {
  a === void 0 && (a = !1), r === void 0 && (r = !1);
  const u = e.getBoundingClientRect(), c = ch(e);
  let d = Qn(1);
  a && (l ? Bn(l) && (d = Nr(l)) : d = Nr(e));
  const h = q6(c, r, l) ? Uy(c) : Qn(0);
  let m = (u.left + h.x) / d.x, g = (u.top + h.y) / d.y, p = u.width / d.x, _ = u.height / d.y;
  if (c) {
    const S = cn(c), T = l && Bn(l) ? cn(l) : l;
    let x = S, C = Cd(x);
    for (; C && l && T !== x; ) {
      const A = Nr(C), M = C.getBoundingClientRect(), N = Un(C), D = M.left + (C.clientLeft + parseFloat(N.paddingLeft)) * A.x, R = M.top + (C.clientTop + parseFloat(N.paddingTop)) * A.y;
      m *= A.x, g *= A.y, p *= A.x, _ *= A.y, m += D, g += R, x = cn(C), C = Cd(x);
    }
  }
  return Qu({
    width: p,
    height: _,
    x: m,
    y: g
  });
}
function fs(e, a) {
  const r = cs(e).scrollLeft;
  return a ? a.left + r : Li(ea(e)).left + r;
}
function ky(e, a) {
  const r = e.getBoundingClientRect();
  return {
    x: r.left + a.scrollLeft - fs(e, r),
    y: r.top + a.scrollTop
  };
}
function Y6(e) {
  let { elements: a, rect: r, offsetParent: l, strategy: u } = e;
  const c = u === "fixed", d = ea(l), h = a ? ss(a.floating) : !1;
  if (l === d || h && c) return r;
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  }, g = Qn(1);
  const p = Qn(0), _ = Jn(l);
  if ((_ || !_ && !c) && ((Ir(l) !== "body" || nl(d)) && (m = cs(l)), Jn(l))) {
    const T = Li(l);
    g = Nr(l), p.x = T.x + l.clientLeft, p.y = T.y + l.clientTop;
  }
  const S = d && !_ && !c ? ky(d, m) : Qn(0);
  return {
    width: r.width * g.x,
    height: r.height * g.y,
    x: r.x * g.x - m.scrollLeft * g.x + p.x + S.x,
    y: r.y * g.y - m.scrollTop * g.y + p.y + S.y
  };
}
function W6(e) {
  return Array.from(e.getClientRects());
}
function Q6(e) {
  const a = ea(e), r = cs(e), l = e.ownerDocument.body, u = un(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth), c = un(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let d = -r.scrollLeft + fs(e);
  const h = -r.scrollTop;
  return Un(l).direction === "rtl" && (d += un(a.clientWidth, l.clientWidth) - u), {
    width: u,
    height: c,
    x: d,
    y: h
  };
}
var pg = 25;
function K6(e, a) {
  const r = cn(e), l = ea(e), u = r.visualViewport;
  let c = l.clientWidth, d = l.clientHeight, h = 0, m = 0;
  if (u) {
    c = u.width, d = u.height;
    const p = sh();
    (!p || p && a === "fixed") && (h = u.offsetLeft, m = u.offsetTop);
  }
  const g = fs(l);
  if (g <= 0) {
    const p = l.ownerDocument, _ = p.body, S = getComputedStyle(_), T = p.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0, x = Math.abs(l.clientWidth - _.clientWidth - T);
    x <= pg && (c -= x);
  } else g <= pg && (c += g);
  return {
    width: c,
    height: d,
    x: h,
    y: m
  };
}
var J6 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function e9(e, a) {
  const r = Li(e, !0, a === "fixed"), l = r.top + e.clientTop, u = r.left + e.clientLeft, c = Jn(e) ? Nr(e) : Qn(1);
  return {
    width: e.clientWidth * c.x,
    height: e.clientHeight * c.y,
    x: u * c.x,
    y: l * c.y
  };
}
function gg(e, a, r) {
  let l;
  if (a === "viewport") l = K6(e, r);
  else if (a === "document") l = Q6(ea(e));
  else if (Bn(a)) l = e9(a, r);
  else {
    const u = Uy(e);
    l = {
      x: a.x - u.x,
      y: a.y - u.y,
      width: a.width,
      height: a.height
    };
  }
  return Qu(l);
}
function Py(e, a) {
  const r = ei(e);
  return r === a || !Bn(r) || Lr(r) ? !1 : Un(r).position === "fixed" || Py(r, a);
}
function t9(e, a) {
  const r = a.get(e);
  if (r) return r;
  let l = qo(e, [], !1).filter((h) => Bn(h) && Ir(h) !== "body"), u = null;
  const c = Un(e).position === "fixed";
  let d = c ? ei(e) : e;
  for (; Bn(d) && !Lr(d); ) {
    const h = Un(d), m = uh(d);
    !m && h.position === "fixed" && (u = null), (c ? !m && !u : !m && h.position === "static" && u && J6.has(u.position) || nl(d) && !m && Py(e, d)) ? l = l.filter((g) => g !== d) : u = h, d = ei(d);
  }
  return a.set(e, l), l;
}
function n9(e) {
  let { element: a, boundary: r, rootBoundary: l, strategy: u } = e;
  const c = [...r === "clippingAncestors" ? ss(a) ? [] : t9(a, this._c) : [].concat(r), l], d = c[0], h = c.reduce((m, g) => {
    const p = gg(a, g, u);
    return m.top = un(p.top, m.top), m.right = Ja(p.right, m.right), m.bottom = Ja(p.bottom, m.bottom), m.left = un(p.left, m.left), m;
  }, gg(a, d, u));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  };
}
function a9(e) {
  const { width: a, height: r } = By(e);
  return {
    width: a,
    height: r
  };
}
function i9(e, a, r) {
  const l = Jn(a), u = ea(a), c = r === "fixed", d = Li(e, !0, c, a);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const m = Qn(0);
  function g() {
    m.x = fs(u);
  }
  if (l || !l && !c)
    if ((Ir(a) !== "body" || nl(u)) && (h = cs(a)), l) {
      const _ = Li(a, !0, c, a);
      m.x = _.x + a.clientLeft, m.y = _.y + a.clientTop;
    } else u && g();
  c && !l && u && g();
  const p = u && !l && !c ? ky(u, h) : Qn(0);
  return {
    x: d.left + h.scrollLeft - m.x - p.x,
    y: d.top + h.scrollTop - m.y - p.y,
    width: d.width,
    height: d.height
  };
}
function Kf(e) {
  return Un(e).position === "static";
}
function yg(e, a) {
  if (!Jn(e) || Un(e).position === "fixed") return null;
  if (a) return a(e);
  let r = e.offsetParent;
  return ea(e) === r && (r = r.ownerDocument.body), r;
}
function Zy(e, a) {
  const r = cn(e);
  if (ss(e)) return r;
  if (!Jn(e)) {
    let u = ei(e);
    for (; u && !Lr(u); ) {
      if (Bn(u) && !Kf(u)) return u;
      u = ei(u);
    }
    return r;
  }
  let l = yg(e, a);
  for (; l && P6(l) && Kf(l); ) l = yg(l, a);
  return l && Lr(l) && Kf(l) && !uh(l) ? r : l || V6(e) || r;
}
var r9 = async function(e) {
  const a = this.getOffsetParent || Zy, r = this.getDimensions, l = await r(e.floating);
  return {
    reference: i9(e.reference, await a(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: l.width,
      height: l.height
    }
  };
};
function o9(e) {
  return Un(e).direction === "rtl";
}
var l9 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Y6,
  getDocumentElement: ea,
  getClippingRect: n9,
  getOffsetParent: Zy,
  getElementRects: r9,
  getClientRects: W6,
  getDimensions: a9,
  getScale: Nr,
  isElement: Bn,
  isRTL: o9
};
function Iy(e, a) {
  return e.x === a.x && e.y === a.y && e.width === a.width && e.height === a.height;
}
function u9(e, a) {
  let r = null, l;
  const u = ea(e);
  function c() {
    var h;
    clearTimeout(l), (h = r) == null || h.disconnect(), r = null;
  }
  function d(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), c();
    const g = e.getBoundingClientRect(), { left: p, top: _, width: S, height: T } = g;
    if (h || a(), !S || !T) return;
    const x = zu(_), C = zu(u.clientWidth - (p + S)), A = zu(u.clientHeight - (_ + T)), M = zu(p), N = {
      rootMargin: -x + "px " + -C + "px " + -A + "px " + -M + "px",
      threshold: un(0, Ja(1, m)) || 1
    };
    let D = !0;
    function R(B) {
      const H = B[0].intersectionRatio;
      if (H !== m) {
        if (!D) return d();
        H ? d(!1, H) : l = setTimeout(() => {
          d(!1, 1e-7);
        }, 1e3);
      }
      H === 1 && !Iy(g, e.getBoundingClientRect()) && d(), D = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ...N,
        root: u.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, N);
    }
    r.observe(e);
  }
  return d(!0), c;
}
function s9(e, a, r, l) {
  l === void 0 && (l = {});
  const { ancestorScroll: u = !0, ancestorResize: c = !0, elementResize: d = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: m = !1 } = l, g = ch(e), p = u || c ? [...g ? qo(g) : [], ...qo(a)] : [];
  p.forEach((M) => {
    u && M.addEventListener("scroll", r, { passive: !0 }), c && M.addEventListener("resize", r);
  });
  const _ = g && h ? u9(g, r) : null;
  let S = -1, T = null;
  d && (T = new ResizeObserver((M) => {
    let [N] = M;
    N && N.target === g && T && (T.unobserve(a), cancelAnimationFrame(S), S = requestAnimationFrame(() => {
      var D;
      (D = T) == null || D.observe(a);
    })), r();
  }), g && !m && T.observe(g), T.observe(a));
  let x, C = m ? Li(e) : null;
  m && A();
  function A() {
    const M = Li(e);
    C && !Iy(C, M) && r(), C = M, x = requestAnimationFrame(A);
  }
  return r(), () => {
    var M;
    p.forEach((N) => {
      u && N.removeEventListener("scroll", r), c && N.removeEventListener("resize", r);
    }), _?.(), (M = T) == null || M.disconnect(), T = null, m && cancelAnimationFrame(x);
  };
}
var c9 = L6, f9 = H6, d9 = N6, h9 = B6, m9 = D6, bg = R6, v9 = j6, p9 = (e, a, r) => {
  const l = /* @__PURE__ */ new Map(), u = {
    platform: l9,
    ...r
  }, c = {
    ...u.platform,
    _c: l
  };
  return M6(e, a, {
    ...u,
    platform: c
  });
}, ku = typeof document < "u" ? b.useLayoutEffect : function() {
};
function Ku(e, a) {
  if (e === a) return !0;
  if (typeof e != typeof a) return !1;
  if (typeof e == "function" && e.toString() === a.toString()) return !0;
  let r, l, u;
  if (e && a && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== a.length) return !1;
      for (l = r; l-- !== 0; ) if (!Ku(e[l], a[l])) return !1;
      return !0;
    }
    if (u = Object.keys(e), r = u.length, r !== Object.keys(a).length) return !1;
    for (l = r; l-- !== 0; ) if (!{}.hasOwnProperty.call(a, u[l])) return !1;
    for (l = r; l-- !== 0; ) {
      const c = u[l];
      if (!(c === "_owner" && e.$$typeof) && !Ku(e[c], a[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
}
function Gy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _g(e, a) {
  const r = Gy(e);
  return Math.round(a * r) / r;
}
function Jf(e) {
  const a = b.useRef(e);
  return ku(() => {
    a.current = e;
  }), a;
}
function g9(e) {
  e === void 0 && (e = {});
  const { placement: a = "bottom", strategy: r = "absolute", middleware: l = [], platform: u, elements: { reference: c, floating: d } = {}, transform: h = !0, whileElementsMounted: m, open: g } = e, [p, _] = b.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [S, T] = b.useState(l);
  Ku(S, l) || T(l);
  const [x, C] = b.useState(null), [A, M] = b.useState(null), N = b.useCallback((I) => {
    I !== H.current && (H.current = I, C(I));
  }, []), D = b.useCallback((I) => {
    I !== q.current && (q.current = I, M(I));
  }, []), R = c || x, B = d || A, H = b.useRef(null), q = b.useRef(null), ee = b.useRef(p), F = m != null, U = Jf(m), Y = Jf(u), oe = Jf(g), ue = b.useCallback(() => {
    if (!H.current || !q.current) return;
    const I = {
      placement: a,
      strategy: r,
      middleware: S
    };
    Y.current && (I.platform = Y.current), p9(H.current, q.current, I).then((ae) => {
      const le = {
        ...ae,
        isPositioned: oe.current !== !1
      };
      re.current && !Ku(ee.current, le) && (ee.current = le, Pr.flushSync(() => {
        _(le);
      }));
    });
  }, [
    S,
    a,
    r,
    Y,
    oe
  ]);
  ku(() => {
    g === !1 && ee.current.isPositioned && (ee.current.isPositioned = !1, _((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [g]);
  const re = b.useRef(!1);
  ku(() => (re.current = !0, () => {
    re.current = !1;
  }), []), ku(() => {
    if (R && (H.current = R), B && (q.current = B), R && B) {
      if (U.current) return U.current(R, B, ue);
      ue();
    }
  }, [
    R,
    B,
    ue,
    U,
    F
  ]);
  const V = b.useMemo(() => ({
    reference: H,
    floating: q,
    setReference: N,
    setFloating: D
  }), [N, D]), P = b.useMemo(() => ({
    reference: R,
    floating: B
  }), [R, B]), E = b.useMemo(() => {
    const I = {
      position: r,
      left: 0,
      top: 0
    };
    if (!P.floating) return I;
    const ae = _g(P.floating, p.x), le = _g(P.floating, p.y);
    return h ? {
      ...I,
      transform: "translate(" + ae + "px, " + le + "px)",
      ...Gy(P.floating) >= 1.5 && { willChange: "transform" }
    } : {
      position: r,
      left: ae,
      top: le
    };
  }, [
    r,
    h,
    P.floating,
    p.x,
    p.y
  ]);
  return b.useMemo(() => ({
    ...p,
    update: ue,
    refs: V,
    elements: P,
    floatingStyles: E
  }), [
    p,
    ue,
    V,
    P,
    E
  ]);
}
var y9 = (e) => {
  function a(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const { element: l, padding: u } = typeof e == "function" ? e(r) : e;
      return l && a(l) ? l.current != null ? bg({
        element: l.current,
        padding: u
      }).fn(r) : {} : l ? bg({
        element: l,
        padding: u
      }).fn(r) : {};
    }
  };
}, b9 = (e, a) => ({
  ...c9(e),
  options: [e, a]
}), _9 = (e, a) => ({
  ...f9(e),
  options: [e, a]
}), w9 = (e, a) => ({
  ...v9(e),
  options: [e, a]
}), S9 = (e, a) => ({
  ...d9(e),
  options: [e, a]
}), E9 = (e, a) => ({
  ...h9(e),
  options: [e, a]
}), T9 = (e, a) => ({
  ...m9(e),
  options: [e, a]
}), C9 = (e, a) => ({
  ...y9(e),
  options: [e, a]
}), A9 = "Arrow", $y = b.forwardRef((e, a) => {
  const { children: r, width: l = 10, height: u = 5, ...c } = e;
  return /* @__PURE__ */ (0, y.jsx)(xt.svg, {
    ...c,
    ref: a,
    width: l,
    height: u,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: e.asChild ? r : /* @__PURE__ */ (0, y.jsx)("polygon", { points: "0,0 30,0 15,10" })
  });
});
$y.displayName = A9;
var x9 = $y, fh = "Popper", [Vy, ds] = tl(fh), [O9, Fy] = Vy(fh), Xy = (e) => {
  const { __scopePopper: a, children: r } = e, [l, u] = b.useState(null);
  return /* @__PURE__ */ (0, y.jsx)(O9, {
    scope: a,
    anchor: l,
    onAnchorChange: u,
    children: r
  });
};
Xy.displayName = fh;
var qy = "PopperAnchor", Yy = b.forwardRef((e, a) => {
  const { __scopePopper: r, virtualRef: l, ...u } = e, c = Fy(qy, r), d = b.useRef(null), h = Qt(a, d);
  return b.useEffect(() => {
    c.onAnchorChange(l?.current || d.current);
  }), l ? null : /* @__PURE__ */ (0, y.jsx)(xt.div, {
    ...u,
    ref: h
  });
});
Yy.displayName = qy;
var dh = "PopperContent", [M9, R9] = Vy(dh), Wy = b.forwardRef((e, a) => {
  const { __scopePopper: r, side: l = "bottom", sideOffset: u = 0, align: c = "center", alignOffset: d = 0, arrowPadding: h = 0, avoidCollisions: m = !0, collisionBoundary: g = [], collisionPadding: p = 0, sticky: _ = "partial", hideWhenDetached: S = !1, updatePositionStrategy: T = "optimized", onPlaced: x, ...C } = e, A = Fy(dh, r), [M, N] = b.useState(null), D = Qt(a, (be) => N(be)), [R, B] = b.useState(null), H = Dy(R), q = H?.width ?? 0, ee = H?.height ?? 0, F = l + (c !== "center" ? "-" + c : ""), U = typeof p == "number" ? p : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...p
  }, Y = Array.isArray(g) ? g : [g], oe = Y.length > 0, ue = {
    padding: U,
    boundary: Y.filter(D9),
    altBoundary: oe
  }, { refs: re, floatingStyles: V, placement: P, isPositioned: E, middlewareData: I } = g9({
    strategy: "fixed",
    placement: F,
    whileElementsMounted: (...be) => s9(...be, { animationFrame: T === "always" }),
    elements: { reference: A.anchor },
    middleware: [
      b9({
        mainAxis: u + ee,
        alignmentAxis: d
      }),
      m && _9({
        mainAxis: !0,
        crossAxis: !1,
        limiter: _ === "partial" ? w9() : void 0,
        ...ue
      }),
      m && S9({ ...ue }),
      E9({
        ...ue,
        apply: ({ elements: be, rects: Ae, availableWidth: Ve, availableHeight: ke }) => {
          const { width: Ke, height: nt } = Ae.reference, zt = be.floating.style;
          zt.setProperty("--radix-popper-available-width", `${Ve}px`), zt.setProperty("--radix-popper-available-height", `${ke}px`), zt.setProperty("--radix-popper-anchor-width", `${Ke}px`), zt.setProperty("--radix-popper-anchor-height", `${nt}px`);
        }
      }),
      R && C9({
        element: R,
        padding: h
      }),
      z9({
        arrowWidth: q,
        arrowHeight: ee
      }),
      S && T9({
        strategy: "referenceHidden",
        ...ue
      })
    ]
  }), [ae, le] = Jy(P), Ee = Ka(x);
  Di(() => {
    E && Ee?.();
  }, [E, Ee]);
  const z = I.arrow?.x, W = I.arrow?.y, ne = I.arrow?.centerOffset !== 0, [ce, _e] = b.useState();
  return Di(() => {
    M && _e(window.getComputedStyle(M).zIndex);
  }, [M]), /* @__PURE__ */ (0, y.jsx)("div", {
    ref: re.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...V,
      transform: E ? V.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: ce,
      "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
      ...I.hide?.referenceHidden && {
        visibility: "hidden",
        pointerEvents: "none"
      }
    },
    dir: e.dir,
    children: /* @__PURE__ */ (0, y.jsx)(M9, {
      scope: r,
      placedSide: ae,
      onArrowChange: B,
      arrowX: z,
      arrowY: W,
      shouldHideArrow: ne,
      children: /* @__PURE__ */ (0, y.jsx)(xt.div, {
        "data-side": ae,
        "data-align": le,
        ...C,
        ref: D,
        style: {
          ...C.style,
          animation: E ? void 0 : "none"
        }
      })
    })
  });
});
Wy.displayName = dh;
var Qy = "PopperArrow", N9 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ky = b.forwardRef(function(a, r) {
  const { __scopePopper: l, ...u } = a, c = R9(Qy, l), d = N9[c.placedSide];
  return /* @__PURE__ */ (0, y.jsx)("span", {
    ref: c.onArrowChange,
    style: {
      position: "absolute",
      left: c.arrowX,
      top: c.arrowY,
      [d]: 0,
      transformOrigin: {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[c.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[c.placedSide],
      visibility: c.shouldHideArrow ? "hidden" : void 0
    },
    children: /* @__PURE__ */ (0, y.jsx)(x9, {
      ...u,
      ref: r,
      style: {
        ...u.style,
        display: "block"
      }
    })
  });
});
Ky.displayName = Qy;
function D9(e) {
  return e !== null;
}
var z9 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(a) {
    const { placement: r, rects: l, middlewareData: u } = a, c = u.arrow?.centerOffset !== 0, d = c ? 0 : e.arrowWidth, h = c ? 0 : e.arrowHeight, [m, g] = Jy(r), p = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], _ = (u.arrow?.x ?? 0) + d / 2, S = (u.arrow?.y ?? 0) + h / 2;
    let T = "", x = "";
    return m === "bottom" ? (T = c ? p : `${_}px`, x = `${-h}px`) : m === "top" ? (T = c ? p : `${_}px`, x = `${l.floating.height + h}px`) : m === "right" ? (T = `${-h}px`, x = c ? p : `${S}px`) : m === "left" && (T = `${l.floating.width + h}px`, x = c ? p : `${S}px`), { data: {
      x: T,
      y: x
    } };
  }
});
function Jy(e) {
  const [a, r = "center"] = e.split("-");
  return [a, r];
}
var eb = Xy, hh = Yy, tb = Wy, nb = Ky, mh = "Popover", [ab, cR] = tl(mh, [ds]), al = ds(), [L9, oi] = ab(mh), ib = (e) => {
  const { __scopePopover: a, children: r, open: l, defaultOpen: u, onOpenChange: c, modal: d = !1 } = e, h = al(a), m = b.useRef(null), [g, p] = b.useState(!1), [_ = !1, S] = is({
    prop: l,
    defaultProp: u,
    onChange: c
  });
  return /* @__PURE__ */ (0, y.jsx)(eb, {
    ...h,
    children: /* @__PURE__ */ (0, y.jsx)(L9, {
      scope: a,
      contentId: Zo(),
      triggerRef: m,
      open: _,
      onOpenChange: S,
      onOpenToggle: b.useCallback(() => S((T) => !T), [S]),
      hasCustomAnchor: g,
      onCustomAnchorAdd: b.useCallback(() => p(!0), []),
      onCustomAnchorRemove: b.useCallback(() => p(!1), []),
      modal: d,
      children: r
    })
  });
};
ib.displayName = mh;
var rb = "PopoverAnchor", ob = b.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = oi(rb, r), c = al(r), { onCustomAnchorAdd: d, onCustomAnchorRemove: h } = u;
  return b.useEffect(() => (d(), () => h()), [d, h]), /* @__PURE__ */ (0, y.jsx)(hh, {
    ...c,
    ...l,
    ref: a
  });
});
ob.displayName = rb;
var lb = "PopoverTrigger", ub = b.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = oi(lb, r), c = al(r), d = Qt(a, u.triggerRef), h = /* @__PURE__ */ (0, y.jsx)(xt.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": u.open,
    "aria-controls": u.contentId,
    "data-state": mb(u.open),
    ...l,
    ref: d,
    onClick: pt(e.onClick, u.onOpenToggle)
  });
  return u.hasCustomAnchor ? h : /* @__PURE__ */ (0, y.jsx)(hh, {
    asChild: !0,
    ...c,
    children: h
  });
});
ub.displayName = lb;
var vh = "PopoverPortal", [H9, j9] = ab(vh, { forceMount: void 0 }), sb = (e) => {
  const { __scopePopover: a, forceMount: r, children: l, container: u } = e, c = oi(vh, a);
  return /* @__PURE__ */ (0, y.jsx)(H9, {
    scope: a,
    forceMount: r,
    children: /* @__PURE__ */ (0, y.jsx)(ri, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, y.jsx)(os, {
        asChild: !0,
        container: u,
        children: l
      })
    })
  });
};
sb.displayName = vh;
var Hr = "PopoverContent", cb = b.forwardRef((e, a) => {
  const r = j9(Hr, e.__scopePopover), { forceMount: l = r.forceMount, ...u } = e, c = oi(Hr, e.__scopePopover);
  return /* @__PURE__ */ (0, y.jsx)(ri, {
    present: l || c.open,
    children: c.modal ? /* @__PURE__ */ (0, y.jsx)(B9, {
      ...u,
      ref: a
    }) : /* @__PURE__ */ (0, y.jsx)(U9, {
      ...u,
      ref: a
    })
  });
});
cb.displayName = Hr;
var B9 = b.forwardRef((e, a) => {
  const r = oi(Hr, e.__scopePopover), l = b.useRef(null), u = Qt(a, l), c = b.useRef(!1);
  return b.useEffect(() => {
    const d = l.current;
    if (d) return by(d);
  }, []), /* @__PURE__ */ (0, y.jsx)(eh, {
    as: el,
    allowPinchZoom: !0,
    children: /* @__PURE__ */ (0, y.jsx)(fb, {
      ...e,
      ref: u,
      trapFocus: r.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: pt(e.onCloseAutoFocus, (d) => {
        d.preventDefault(), c.current || r.triggerRef.current?.focus();
      }),
      onPointerDownOutside: pt(e.onPointerDownOutside, (d) => {
        const h = d.detail.originalEvent, m = h.button === 0 && h.ctrlKey === !0;
        c.current = h.button === 2 || m;
      }, { checkForDefaultPrevented: !1 }),
      onFocusOutside: pt(e.onFocusOutside, (d) => d.preventDefault(), { checkForDefaultPrevented: !1 })
    })
  });
}), U9 = b.forwardRef((e, a) => {
  const r = oi(Hr, e.__scopePopover), l = b.useRef(!1), u = b.useRef(!1);
  return /* @__PURE__ */ (0, y.jsx)(fb, {
    ...e,
    ref: a,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (c) => {
      e.onCloseAutoFocus?.(c), c.defaultPrevented || (l.current || r.triggerRef.current?.focus(), c.preventDefault()), l.current = !1, u.current = !1;
    },
    onInteractOutside: (c) => {
      e.onInteractOutside?.(c), c.defaultPrevented || (l.current = !0, c.detail.originalEvent.type === "pointerdown" && (u.current = !0));
      const d = c.target;
      r.triggerRef.current?.contains(d) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && u.current && c.preventDefault();
    }
  });
}), fb = b.forwardRef((e, a) => {
  const { __scopePopover: r, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: c, disableOutsidePointerEvents: d, onEscapeKeyDown: h, onPointerDownOutside: m, onFocusOutside: g, onInteractOutside: p, ..._ } = e, S = oi(Hr, r), T = al(r);
  return fy(), /* @__PURE__ */ (0, y.jsx)(Jd, {
    asChild: !0,
    loop: !0,
    trapped: l,
    onMountAutoFocus: u,
    onUnmountAutoFocus: c,
    children: /* @__PURE__ */ (0, y.jsx)(rs, {
      asChild: !0,
      disableOutsidePointerEvents: d,
      onInteractOutside: p,
      onEscapeKeyDown: h,
      onPointerDownOutside: m,
      onFocusOutside: g,
      onDismiss: () => S.onOpenChange(!1),
      children: /* @__PURE__ */ (0, y.jsx)(tb, {
        "data-state": mb(S.open),
        role: "dialog",
        id: S.contentId,
        ...T,
        ..._,
        ref: a,
        style: {
          ..._.style,
          "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
          "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
          "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
        }
      })
    })
  });
}), db = "PopoverClose", hb = b.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = oi(db, r);
  return /* @__PURE__ */ (0, y.jsx)(xt.button, {
    type: "button",
    ...l,
    ref: a,
    onClick: pt(e.onClick, () => u.onOpenChange(!1))
  });
});
hb.displayName = db;
var k9 = "PopoverArrow", P9 = b.forwardRef((e, a) => {
  const { __scopePopover: r, ...l } = e, u = al(r);
  return /* @__PURE__ */ (0, y.jsx)(nb, {
    ...u,
    ...l,
    ref: a
  });
});
P9.displayName = k9;
function mb(e) {
  return e ? "open" : "closed";
}
var hs = ib, ph = ob, gh = ub, ms = sb, vs = cb, Ad = hb, yh = "Switch", [Z9, fR] = tl(yh), [I9, G9] = Z9(yh), vb = b.forwardRef((e, a) => {
  const { __scopeSwitch: r, name: l, checked: u, defaultChecked: c, required: d, disabled: h, value: m = "on", onCheckedChange: g, form: p, ..._ } = e, [S, T] = b.useState(null), x = Qt(a, (D) => T(D)), C = b.useRef(!1), A = S ? p || !!S.closest("form") : !0, [M = !1, N] = is({
    prop: u,
    defaultProp: c,
    onChange: g
  });
  return /* @__PURE__ */ (0, y.jsxs)(I9, {
    scope: r,
    checked: M,
    disabled: h,
    children: [/* @__PURE__ */ (0, y.jsx)(xt.button, {
      type: "button",
      role: "switch",
      "aria-checked": M,
      "aria-required": d,
      "data-state": yb(M),
      "data-disabled": h ? "" : void 0,
      disabled: h,
      value: m,
      ..._,
      ref: x,
      onClick: pt(e.onClick, (D) => {
        N((R) => !R), A && (C.current = D.isPropagationStopped(), C.current || D.stopPropagation());
      })
    }), A && /* @__PURE__ */ (0, y.jsx)($9, {
      control: S,
      bubbles: !C.current,
      name: l,
      value: m,
      checked: M,
      required: d,
      disabled: h,
      form: p,
      style: { transform: "translateX(-100%)" }
    })]
  });
});
vb.displayName = yh;
var pb = "SwitchThumb", gb = b.forwardRef((e, a) => {
  const { __scopeSwitch: r, ...l } = e, u = G9(pb, r);
  return /* @__PURE__ */ (0, y.jsx)(xt.span, {
    "data-state": yb(u.checked),
    "data-disabled": u.disabled ? "" : void 0,
    ...l,
    ref: a
  });
});
gb.displayName = pb;
var $9 = (e) => {
  const { control: a, checked: r, bubbles: l = !0, ...u } = e, c = b.useRef(null), d = g6(r), h = Dy(a);
  return b.useEffect(() => {
    const m = c.current, g = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(g, "checked").set;
    if (d !== r && p) {
      const _ = new Event("click", { bubbles: l });
      p.call(m, r), m.dispatchEvent(_);
    }
  }, [
    d,
    r,
    l
  ]), /* @__PURE__ */ (0, y.jsx)("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: r,
    ...u,
    tabIndex: -1,
    ref: c,
    style: {
      ...e.style,
      ...h,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  });
};
function yb(e) {
  return e ? "checked" : "unchecked";
}
var V9 = vb, F9 = gb, [ps, dR] = tl("Tooltip", [ds]), gs = ds(), bb = "TooltipProvider", X9 = 700, xd = "tooltip.open", [q9, bh] = ps(bb), _b = (e) => {
  const { __scopeTooltip: a, delayDuration: r = X9, skipDelayDuration: l = 300, disableHoverableContent: u = !1, children: c } = e, [d, h] = b.useState(!0), m = b.useRef(!1), g = b.useRef(0);
  return b.useEffect(() => {
    const p = g.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ (0, y.jsx)(q9, {
    scope: a,
    isOpenDelayed: d,
    delayDuration: r,
    onOpen: b.useCallback(() => {
      window.clearTimeout(g.current), h(!1);
    }, []),
    onClose: b.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => h(!0), l);
    }, [l]),
    isPointerInTransitRef: m,
    onPointerInTransitChange: b.useCallback((p) => {
      m.current = p;
    }, []),
    disableHoverableContent: u,
    children: c
  });
};
_b.displayName = bb;
var ys = "Tooltip", [Y9, il] = ps(ys), wb = (e) => {
  const { __scopeTooltip: a, children: r, open: l, defaultOpen: u = !1, onOpenChange: c, disableHoverableContent: d, delayDuration: h } = e, m = bh(ys, e.__scopeTooltip), g = gs(a), [p, _] = b.useState(null), S = Zo(), T = b.useRef(0), x = d ?? m.disableHoverableContent, C = h ?? m.delayDuration, A = b.useRef(!1), [M = !1, N] = is({
    prop: l,
    defaultProp: u,
    onChange: (q) => {
      q ? (m.onOpen(), document.dispatchEvent(new CustomEvent(xd))) : m.onClose(), c?.(q);
    }
  }), D = b.useMemo(() => M ? A.current ? "delayed-open" : "instant-open" : "closed", [M]), R = b.useCallback(() => {
    window.clearTimeout(T.current), T.current = 0, A.current = !1, N(!0);
  }, [N]), B = b.useCallback(() => {
    window.clearTimeout(T.current), T.current = 0, N(!1);
  }, [N]), H = b.useCallback(() => {
    window.clearTimeout(T.current), T.current = window.setTimeout(() => {
      A.current = !0, N(!0), T.current = 0;
    }, C);
  }, [C, N]);
  return b.useEffect(() => () => {
    T.current && (window.clearTimeout(T.current), T.current = 0);
  }, []), /* @__PURE__ */ (0, y.jsx)(eb, {
    ...g,
    children: /* @__PURE__ */ (0, y.jsx)(Y9, {
      scope: a,
      contentId: S,
      open: M,
      stateAttribute: D,
      trigger: p,
      onTriggerChange: _,
      onTriggerEnter: b.useCallback(() => {
        m.isOpenDelayed ? H() : R();
      }, [
        m.isOpenDelayed,
        H,
        R
      ]),
      onTriggerLeave: b.useCallback(() => {
        x ? B() : (window.clearTimeout(T.current), T.current = 0);
      }, [B, x]),
      onOpen: R,
      onClose: B,
      disableHoverableContent: x,
      children: r
    })
  });
};
wb.displayName = ys;
var Od = "TooltipTrigger", Sb = b.forwardRef((e, a) => {
  const { __scopeTooltip: r, ...l } = e, u = il(Od, r), c = bh(Od, r), d = gs(r), h = Qt(a, b.useRef(null), u.onTriggerChange), m = b.useRef(!1), g = b.useRef(!1), p = b.useCallback(() => m.current = !1, []);
  return b.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ (0, y.jsx)(hh, {
    asChild: !0,
    ...d,
    children: /* @__PURE__ */ (0, y.jsx)(xt.button, {
      "aria-describedby": u.open ? u.contentId : void 0,
      "data-state": u.stateAttribute,
      ...l,
      ref: h,
      onPointerMove: pt(e.onPointerMove, (_) => {
        _.pointerType !== "touch" && !g.current && !c.isPointerInTransitRef.current && (u.onTriggerEnter(), g.current = !0);
      }),
      onPointerLeave: pt(e.onPointerLeave, () => {
        u.onTriggerLeave(), g.current = !1;
      }),
      onPointerDown: pt(e.onPointerDown, () => {
        m.current = !0, document.addEventListener("pointerup", p, { once: !0 });
      }),
      onFocus: pt(e.onFocus, () => {
        m.current || u.onOpen();
      }),
      onBlur: pt(e.onBlur, u.onClose),
      onClick: pt(e.onClick, u.onClose)
    })
  });
});
Sb.displayName = Od;
var _h = "TooltipPortal", [W9, Q9] = ps(_h, { forceMount: void 0 }), Eb = (e) => {
  const { __scopeTooltip: a, forceMount: r, children: l, container: u } = e, c = il(_h, a);
  return /* @__PURE__ */ (0, y.jsx)(W9, {
    scope: a,
    forceMount: r,
    children: /* @__PURE__ */ (0, y.jsx)(ri, {
      present: r || c.open,
      children: /* @__PURE__ */ (0, y.jsx)(os, {
        asChild: !0,
        container: u,
        children: l
      })
    })
  });
};
Eb.displayName = _h;
var jr = "TooltipContent", Tb = b.forwardRef((e, a) => {
  const r = Q9(jr, e.__scopeTooltip), { forceMount: l = r.forceMount, side: u = "top", ...c } = e, d = il(jr, e.__scopeTooltip);
  return /* @__PURE__ */ (0, y.jsx)(ri, {
    present: l || d.open,
    children: d.disableHoverableContent ? /* @__PURE__ */ (0, y.jsx)(Cb, {
      side: u,
      ...c,
      ref: a
    }) : /* @__PURE__ */ (0, y.jsx)(K9, {
      side: u,
      ...c,
      ref: a
    })
  });
}), K9 = b.forwardRef((e, a) => {
  const r = il(jr, e.__scopeTooltip), l = bh(jr, e.__scopeTooltip), u = b.useRef(null), c = Qt(a, u), [d, h] = b.useState(null), { trigger: m, onClose: g } = r, p = u.current, { onPointerInTransitChange: _ } = l, S = b.useCallback(() => {
    h(null), _(!1);
  }, [_]), T = b.useCallback((x, C) => {
    const A = x.currentTarget, M = {
      x: x.clientX,
      y: x.clientY
    }, N = a5(M, n5(M, A.getBoundingClientRect())), D = i5(C.getBoundingClientRect());
    h(o5([...N, ...D])), _(!0);
  }, [_]);
  return b.useEffect(() => () => S(), [S]), b.useEffect(() => {
    if (m && p) {
      const x = (A) => T(A, p), C = (A) => T(A, m);
      return m.addEventListener("pointerleave", x), p.addEventListener("pointerleave", C), () => {
        m.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", C);
      };
    }
  }, [
    m,
    p,
    T,
    S
  ]), b.useEffect(() => {
    if (d) {
      const x = (C) => {
        const A = C.target, M = {
          x: C.clientX,
          y: C.clientY
        }, N = m?.contains(A) || p?.contains(A), D = !r5(M, d);
        N ? S() : D && (S(), g());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [
    m,
    p,
    d,
    g,
    S
  ]), /* @__PURE__ */ (0, y.jsx)(Cb, {
    ...e,
    ref: c
  });
}), [J9, e5] = ps(ys, { isInside: !1 }), Cb = b.forwardRef((e, a) => {
  const { __scopeTooltip: r, children: l, "aria-label": u, onEscapeKeyDown: c, onPointerDownOutside: d, ...h } = e, m = il(jr, r), g = gs(r), { onClose: p } = m;
  return b.useEffect(() => (document.addEventListener(xd, p), () => document.removeEventListener(xd, p)), [p]), b.useEffect(() => {
    if (m.trigger) {
      const _ = (S) => {
        S.target?.contains(m.trigger) && p();
      };
      return window.addEventListener("scroll", _, { capture: !0 }), () => window.removeEventListener("scroll", _, { capture: !0 });
    }
  }, [m.trigger, p]), /* @__PURE__ */ (0, y.jsx)(rs, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: c,
    onPointerDownOutside: d,
    onFocusOutside: (_) => _.preventDefault(),
    onDismiss: p,
    children: /* @__PURE__ */ (0, y.jsxs)(tb, {
      "data-state": m.stateAttribute,
      ...g,
      ...h,
      ref: a,
      style: {
        ...h.style,
        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
      },
      children: [/* @__PURE__ */ (0, y.jsx)(ry, { children: l }), /* @__PURE__ */ (0, y.jsx)(J9, {
        scope: r,
        isInside: !0,
        children: /* @__PURE__ */ (0, y.jsx)(X3, {
          id: m.contentId,
          role: "tooltip",
          children: u || l
        })
      })]
    })
  });
});
Tb.displayName = jr;
var Ab = "TooltipArrow", t5 = b.forwardRef((e, a) => {
  const { __scopeTooltip: r, ...l } = e, u = gs(r);
  return e5(Ab, r).isInside ? null : /* @__PURE__ */ (0, y.jsx)(nb, {
    ...u,
    ...l,
    ref: a
  });
});
t5.displayName = Ab;
function n5(e, a) {
  const r = Math.abs(a.top - e.y), l = Math.abs(a.bottom - e.y), u = Math.abs(a.right - e.x), c = Math.abs(a.left - e.x);
  switch (Math.min(r, l, u, c)) {
    case c:
      return "left";
    case u:
      return "right";
    case r:
      return "top";
    case l:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function a5(e, a, r = 5) {
  const l = [];
  switch (a) {
    case "top":
      l.push({
        x: e.x - r,
        y: e.y + r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "bottom":
      l.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y - r
      });
      break;
    case "left":
      l.push({
        x: e.x + r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "right":
      l.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x - r,
        y: e.y + r
      });
      break;
  }
  return l;
}
function i5(e) {
  const { top: a, right: r, bottom: l, left: u } = e;
  return [
    {
      x: u,
      y: a
    },
    {
      x: r,
      y: a
    },
    {
      x: r,
      y: l
    },
    {
      x: u,
      y: l
    }
  ];
}
function r5(e, a) {
  const { x: r, y: l } = e;
  let u = !1;
  for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
    const h = a[c].x, m = a[c].y, g = a[d].x, p = a[d].y;
    m > l != p > l && r < (g - h) * (l - m) / (p - m) + h && (u = !u);
  }
  return u;
}
function o5(e) {
  const a = e.slice();
  return a.sort((r, l) => r.x < l.x ? -1 : r.x > l.x ? 1 : r.y < l.y ? -1 : r.y > l.y ? 1 : 0), l5(a);
}
function l5(e) {
  if (e.length <= 1) return e.slice();
  const a = [];
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    for (; a.length >= 2; ) {
      const c = a[a.length - 1], d = a[a.length - 2];
      if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) a.pop();
      else break;
    }
    a.push(u);
  }
  a.pop();
  const r = [];
  for (let l = e.length - 1; l >= 0; l--) {
    const u = e[l];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1], d = r[r.length - 2];
      if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) r.pop();
      else break;
    }
    r.push(u);
  }
  return r.pop(), a.length === 1 && r.length === 1 && a[0].x === r[0].x && a[0].y === r[0].y ? a : a.concat(r);
}
var u5 = _b, s5 = wb, xb = Sb, c5 = Eb, f5 = Tb;
function Pu(e) {
  const a = (0, b.useRef)(e);
  return a.current = e, a;
}
var Br = [], Lu = !1, wg = (e) => {
  if (e.key === "Escape") {
    const [a] = Br;
    a && (e.preventDefault(), a.callback.current?.());
  }
}, Ob = () => {
  Br.length > 0 && !Lu ? (document.body.addEventListener("keydown", wg), Lu = !0) : Br.length === 0 && Lu && (document.body.removeEventListener("keydown", wg), Lu = !1);
}, d5 = (e) => {
  Br.unshift(e), Ob();
}, h5 = ({ id: e }) => {
  Br = Br.filter((a) => a.id !== e), Ob();
}, m5 = (e, a) => {
  const r = (0, b.useId)(), l = Pu(a);
  (0, b.useEffect)(() => {
    if (!e) return;
    const u = {
      id: r,
      callback: l
    };
    return d5(u), () => h5(u);
  }, [
    r,
    e,
    l
  ]);
}, v5 = (e) => {
  e.preventDefault();
}, Mb = (0, b.createContext)(void 0);
function Rb({ children: e, container: a }) {
  return /* @__PURE__ */ (0, y.jsx)(Mb.Provider, {
    value: a,
    children: e
  });
}
function rl() {
  return (0, b.useContext)(Mb);
}
var p5 = "_Tooltip_arpo7_1", g5 = "_TriggerDecorator_arpo7_86", Nb = {
  Tooltip: p5,
  "scale-in": "_scale-in_arpo7_1",
  "scale-out": "_scale-out_arpo7_1",
  TriggerDecorator: g5
}, Hn = (e) => {
  const { ref: a, portalContainer: r, onDismiss: l, onOpenChange: u, onContentPointerEnter: c, onContentPointerLeave: d, children: h, content: m, forceOpen: g = m === null ? !1 : void 0, maxWidth: p = 300, openDelay: _ = 150, interactive: S = !1, compact: T = !1, preventUnintentionalClickToClose: x, align: C, alignOffset: A = 0, side: M, sideOffset: N = 5, gutterSize: D = "md", contentClassName: R, onPointerDown: B, onClick: H, ...q } = e, [ee, F] = (0, b.useState)(!1), [U, Y] = (0, b.useState)(!1);
  (0, b.useEffect)(() => {
    if (!U) return;
    const V = window.setTimeout(() => Y(!1), 400);
    return () => window.clearTimeout(V);
  }, [U]);
  const oe = g ?? ee, ue = (V) => {
    u?.(V), typeof g != "boolean" && (F(V), x && Y(V));
  }, re = (V) => {
    x && U && (V.preventDefault(), V.stopPropagation());
  };
  return /* @__PURE__ */ (0, y.jsxs)(Db, {
    onDismiss: l,
    open: oe,
    delayDuration: _,
    onOpenChange: ue,
    disableHoverableContent: !S,
    children: [/* @__PURE__ */ (0, y.jsx)(xb, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsx)(oy, {
        ...q,
        ref: a,
        onPointerDown: (V) => {
          re(V), B?.(V);
        },
        onClick: (V) => {
          re(V), H?.(V);
        },
        children: h
      })
    }), /* @__PURE__ */ (0, y.jsx)(zb, {
      portalContainer: r,
      maxWidth: p,
      compact: T,
      align: C,
      alignOffset: A,
      side: M,
      sideOffset: N,
      gutterSize: D,
      className: R,
      onPointerEnter: c,
      onPointerLeave: d,
      children: m
    })]
  });
}, Db = ({ onDismiss: e, children: a, open: r, onOpenChange: l, ...u }) => (m5(r, () => {
  l(!1), e?.();
}), /* @__PURE__ */ (0, y.jsx)(u5, { children: /* @__PURE__ */ (0, y.jsx)(s5, {
  open: r,
  onOpenChange: l,
  ...u,
  children: a
}) })), zb = ({ children: e, portalContainer: a, maxWidth: r = 300, compact: l = !1, clickable: u = void 0, alignOffset: c = 0, sideOffset: d = 5, gutterSize: h = "md", className: m, style: g, ...p }) => {
  const _ = rl();
  return /* @__PURE__ */ (0, y.jsx)(c5, {
    container: a ?? _,
    children: /* @__PURE__ */ (0, y.jsx)(f5, {
      ...p,
      className: ze(Nb.Tooltip, m),
      "data-compact": l,
      "data-clickable": u,
      "data-gutter-size": h,
      alignOffset: c,
      sideOffset: d,
      collisionPadding: 15,
      hideWhenDetached: !0,
      style: {
        ...g,
        maxWidth: r
      },
      onEscapeKeyDown: v5,
      children: e
    })
  });
}, y5 = ({ children: e, asChild: a = !0, ...r }) => /* @__PURE__ */ (0, y.jsx)(xb, {
  asChild: a,
  ...r,
  children: e
}), b5 = (e) => {
  const { children: a, className: r, focusable: l = !0, ref: u, ...c } = e, d = typeof a == "string";
  return /* @__PURE__ */ (0, y.jsx)(oy, {
    ref: u,
    ...c,
    className: ze(Nb.TriggerDecorator, r),
    tabIndex: l ? 0 : void 0,
    children: d ? /* @__PURE__ */ (0, y.jsx)("span", { children: a }) : a
  });
};
Hn.Root = Db;
Hn.Content = zb;
Hn.Trigger = y5;
Hn.TriggerDecorator = b5;
var _5 = "_Layout_1a5g1_1", w5 = "_TransitionItem_1a5g1_34", Sg = {
  Layout: _5,
  TransitionItem: w5
};
function S5(e) {
  const { as: a = "span", children: r, transitionClassName: l, insertMethod: u, className: c, hideOverflow: d = !1, preventInitialTransition: h = !0, disableAnimations: m, itemAnchor: g = "start", dimension: p = "height", enterFromSize: _, resizeContents: S = !1 } = e, T = (0, b.useRef)(null), x = (0, b.useRef)(null), C = (0, b.useRef)(null), A = (0, b.useRef)(null), { enterTotalDuration: M, exitTotalDuration: N, variables: D } = A5(e), R = (U) => {
    const Y = T.current;
    if (!Y) return;
    S ? (delete Y.dataset.resizeContents, C.current = p === "width" ? U.clientWidth : U.clientHeight, Y.dataset.resizeContents = "") : C.current = null;
    const oe = A.current !== null && Date.now() - A.current < 50, ue = x.current !== null;
    if (x.current = U, Y.dataset.direction = oe || ue ? "move" : "in", oe || (Y.dataset.interrupted = String(!!Y.style[p])), _ !== void 0) {
      const re = Y.style.transition;
      Y.style.transition = "none", Y.style[p] = `${_}px`, Y.offsetWidth, Y.style.transition = re;
    } else Y.style[p] = `${Y.getBoundingClientRect()[p]}px`;
  }, B = (U) => {
    const Y = T.current;
    if (!Y || x.current !== U) return;
    const oe = C.current ?? (p === "width" ? U.clientWidth : U.clientHeight);
    Y.style[p] = `${oe}px`;
  }, H = (U) => {
    const Y = T.current;
    Xu(() => {
      Y && x.current === U && (delete Y.dataset.resizeContents, Y.style[p] = "");
    });
  }, q = (U) => {
    const Y = T.current, oe = !x.current || x.current === U;
    !Y || !oe || (delete Y.dataset.resizeContents, x.current = null, A.current = Date.now(), Y.dataset.direction = "out", Y.dataset.interrupted = String(!!Y.style[p]), Y.style[p] = `${Y.getBoundingClientRect()[p]}px`);
  }, ee = () => {
    const U = T.current;
    U && !x.current && (U.style[p] = "0");
  }, F = () => {
    Xu(() => {
      const U = T.current;
      U && !x.current && (U.style[p] = "");
    });
  };
  return /* @__PURE__ */ (0, y.jsx)(a, {
    ref: T,
    className: ze(Sg.Layout, c),
    style: D,
    "data-item-anchor": g,
    "data-clip": d,
    "data-dimension": p,
    children: /* @__PURE__ */ (0, y.jsx)(Fo, {
      as: a,
      className: ze(Sg.TransitionItem, l),
      insertMethod: u,
      enterDuration: M,
      exitDuration: N,
      preventInitialTransition: h,
      disableAnimations: m,
      onEnter: R,
      onEnterActive: B,
      onEnterComplete: H,
      onExit: q,
      onExitActive: ee,
      onExitComplete: F,
      children: r
    })
  });
}
var ed = 300, E5 = 300, T5 = 100, C5 = 200;
function A5({ initial: e, enter: a, exit: r, forceCompositeLayer: l, layoutEnter: u, layoutExit: c, layoutMove: d }) {
  const h = Gf(e), m = Gf(a), g = Gf(r), p = [
    h,
    m,
    g
  ].some((H) => H !== "none"), _ = a?.duration ?? E5, S = r?.duration ?? C5, T = a?.delay ?? T5, x = r?.delay ?? 0, C = u?.duration ?? ed, A = c?.duration ?? ed, M = d?.duration ?? ed, N = u?.delay ?? 0, D = c?.delay ?? 0, R = d?.delay ?? 0, B = T3({
    "tg-will-change": l ? "transform, opacity" : "auto",
    "tg-enter-opacity": Zf(a?.opacity ?? 1),
    "tg-enter-transform": m,
    "tg-enter-filter": $f(a),
    "tg-enter-duration": Fn(_),
    "tg-enter-delay": Fn(T),
    "tg-enter-timing-function": a?.timingFunction ?? (p ? "var(--cubic-enter)" : "ease"),
    "tg-exit-opacity": Zf(r?.opacity ?? 0),
    "tg-exit-transform": g,
    "tg-exit-filter": $f(r),
    "tg-exit-duration": Fn(S),
    "tg-exit-delay": Fn(x),
    "tg-exit-timing-function": r?.timingFunction ?? (p ? "var(--cubic-exit)" : "ease"),
    "tg-initial-opacity": Zf(e?.opacity ?? r?.opacity ?? 0),
    "tg-initial-transform": h === "none" ? g : h,
    "tg-initial-filter": $f(e ?? r),
    "tg-layout-enter-duration": Fn(C),
    "tg-layout-enter-delay": Fn(N),
    "tg-layout-enter-timing-function": u?.timingFunction ?? "var(--cubic-move)",
    "tg-layout-exit-duration": Fn(A),
    "tg-layout-exit-delay": Fn(D),
    "tg-layout-exit-timing-function": c?.timingFunction ?? "var(--cubic-move)",
    "tg-layout-move-duration": Fn(M),
    "tg-layout-move-delay": Fn(R),
    "tg-layout-move-timing-function": d?.timingFunction ?? "var(--cubic-move)"
  });
  return {
    enterTotalDuration: Math.max(T + _, N + C, R + M),
    exitTotalDuration: Math.max(x + S, D + A, R + M),
    variables: B
  };
}
var x5 = "_Theme_1ewnz_2", O5 = "_Portal_1ewnz_35", M5 = "_Tooltip_1ewnz_41", R5 = "_SharingTooltip_1ewnz_51", N5 = "_HideHint_1ewnz_58", D5 = "_SharingHint_1ewnz_68", z5 = "_HideHintContent_1ewnz_74", L5 = "_HideHintText_1ewnz_80", H5 = "_Shortcut_1ewnz_85", Pt = {
  Theme: x5,
  Portal: O5,
  Tooltip: M5,
  SharingTooltip: R5,
  HideHint: N5,
  SharingHint: D5,
  HideHintContent: z5,
  HideHintText: L5,
  Shortcut: H5
}, j5 = "_Widget_li154_1", B5 = "_LandingShadow_li154_46", U5 = "_WidgetEntrance_li154_56", k5 = "_WidgetExit_li154_69", P5 = "_Shell_li154_82", Z5 = "_ToolbarPanel_li154_115", I5 = "_ShellControls_li154_120", G5 = "_Launcher_li154_130", $5 = "_LauncherRow_li154_153", V5 = "_LauncherLabel_li154_157", F5 = "_CornerTarget_li154_167", X5 = "_Panel_li154_203", q5 = "_LogoButton_li154_203", Y5 = "_ShellContent_li154_248", W5 = "_ShellLayout_li154_252", Q5 = "_LauncherLogo_li154_325", K5 = "_blossomEntrance_li154_1", J5 = "_Composer_li154_357", ex = "_Textarea_li154_373", tx = "_ComposerFooter_li154_411", nx = "_ComposerTooltip_li154_416", ax = "_ComposerArrow_li154_422", ix = "_SendButton_li154_435", rx = "_LauncherDismissButton_li154_490", ox = "_SharingClose_li154_592", De = {
  Widget: j5,
  LandingShadow: B5,
  WidgetEntrance: U5,
  WidgetExit: k5,
  Shell: P5,
  ToolbarPanel: Z5,
  ShellControls: I5,
  Launcher: G5,
  LauncherRow: $5,
  LauncherLabel: V5,
  CornerTarget: F5,
  Panel: X5,
  LogoButton: q5,
  ShellContent: Y5,
  ShellLayout: W5,
  LauncherLogo: Q5,
  blossomEntrance: K5,
  Composer: J5,
  Textarea: ex,
  ComposerFooter: tx,
  ComposerTooltip: nx,
  ComposerArrow: ax,
  SendButton: ix,
  LauncherDismissButton: rx,
  SharingClose: ox
}, Cn = {
  editorWidgetCorner: "oai/sites-toolbar/corner",
  editorWidgetMobileAnchor: "oai/sites-toolbar/mobileAnchor",
  editorWidgetInteracted: "oai/sites-toolbar/interacted",
  editorWidgetHideHintSeen: "oai/sites-toolbar/hideHintSeen"
}, Eg = {
  parse: (e) => e === "true",
  serialize: (e) => String(e)
}, Tg = {
  [Cn.editorWidgetCorner]: {
    parse: (e) => e === "top-left" || e === "top-right" || e === "bottom-left" || e === "bottom-right" || e === "bottom-center" ? e : "bottom-right",
    serialize: (e) => e
  },
  [Cn.editorWidgetMobileAnchor]: {
    parse: (e) => e === "top-left" || e === "top-right" || e === "bottom-left" || e === "bottom-right" ? e : "bottom-center",
    serialize: (e) => e
  },
  [Cn.editorWidgetInteracted]: Eg,
  [Cn.editorWidgetHideHintSeen]: Eg
};
function lx() {
  try {
    return localStorage;
  } catch {
    return null;
  }
}
function Lb(e = lx()) {
  return {
    read: (a) => {
      let r = null;
      try {
        r = e?.getItem(a) ?? null;
      } catch {
      }
      return Tg[a].parse(r);
    },
    write: (a, r) => {
      try {
        e?.setItem(a, Tg[a].serialize(r));
      } catch {
      }
    }
  };
}
function Hb({ storage: e, reducedMotion: a = !1, initiallyHidden: r = !1 } = {}) {
  const l = Lb(e);
  return Pd()((u, c) => {
    const d = (h) => {
      u((m) => {
        const g = h(m.state);
        return g === m.state ? m : {
          state: g,
          showHideHint: (g.view === "hiding" || g.view === "hidden") && m.showHideHint,
          showLogoEntrance: g.view === "launcher" && m.showLogoEntrance
        };
      });
    };
    return {
      state: {
        view: r ? "hidden" : "launcher",
        draft: ""
      },
      composerMode: "edit",
      corner: l.read(Cn.editorWidgetCorner),
      hasInteracted: l.read(Cn.editorWidgetInteracted),
      hasSeenHideHint: l.read(Cn.editorWidgetHideHintSeen),
      showHideHint: !1,
      showLogoEntrance: !r && !a,
      actions: {
        setCorner: (h) => {
          c().corner !== h && u({ corner: h }), l.write(Cn.editorWidgetCorner, h);
        },
        markInteracted: () => {
          c().hasInteracted || (u({ hasInteracted: !0 }), l.write(Cn.editorWidgetInteracted, !0));
        },
        markHideHintSeen: () => {
          const h = c();
          h.hasSeenHideHint || !h.showHideHint || h.state.view !== "hidden" || (u({ hasSeenHideHint: !0 }), l.write(Cn.editorWidgetHideHintSeen, !0));
        },
        finishLogoEntrance: () => {
          c().showLogoEntrance && u({ showLogoEntrance: !1 });
        },
        open: (h = "edit") => u((m) => m.state.view === "launcher" ? {
          state: {
            ...m.state,
            view: "composer"
          },
          composerMode: h,
          showHideHint: !1,
          showLogoEntrance: !1
        } : m),
        collapse: () => d((h) => h.view === "composer" ? {
          ...h,
          view: "launcher"
        } : h),
        changeDraft: (h) => d((m) => m.view === "composer" ? {
          ...m,
          draft: h
        } : m),
        hide: () => u((h) => {
          const { state: m } = h;
          return m.view !== "launcher" && m.view !== "composer" ? h : {
            state: {
              ...m,
              view: "hiding"
            },
            showHideHint: !h.hasSeenHideHint,
            showLogoEntrance: !1
          };
        }),
        dismiss: () => d((h) => h.view === "launcher" || h.view === "composer" ? {
          ...h,
          view: "dismissed"
        } : h),
        finishHide: () => d((h) => h.view === "hiding" ? {
          ...h,
          view: "hidden"
        } : h),
        restoreHidden: () => d((h) => h.view === "hiding" || h.view === "hidden" ? {
          view: "launcher",
          draft: h.draft
        } : h),
        beginHandoff: ({ allowEmpty: h = !1 } = {}) => {
          const { state: m } = c();
          return m.view !== "composer" || !h && !m.draft.trim() ? null : (u({ state: {
            view: "handoff",
            request: m.draft
          } }), m.draft);
        },
        finishHandoff: () => d((h) => h.view === "handoff" ? {
          view: "launcher",
          draft: h.request
        } : h)
      }
    };
  });
}
var ux = 1e3, Cg = 3e3, sx = 480, cx = 1500, fx = 2e3, dx = 150;
function hx(e, a, r, l = !1) {
  const [u, c] = (0, b.useState)(e && a ? "away" : "tucked"), [d, h] = (0, b.useState)(!1), [m, g] = (0, b.useState)(!1), [p, _] = (0, b.useState)(!1), [S, T] = (0, b.useState)(e && a), [x, C] = (0, b.useState)(!1), [A, M] = (0, b.useState)(!1), N = (0, b.useRef)(!0), D = (0, b.useRef)(e && a), R = d || p;
  return (0, b.useEffect)(() => {
    if (!e) {
      C(!1), M(!1);
      return;
    }
    if (A) return;
    if (x) {
      if (d || m) return;
      const H = window.setTimeout(() => C(!1), dx);
      return () => window.clearTimeout(H);
    }
    if (!d) return;
    const B = window.setTimeout(() => C(!0), fx);
    return () => window.clearTimeout(B);
  }, [
    e,
    d,
    m,
    x,
    A
  ]), (0, b.useEffect)(() => {
    if (!e) {
      N.current = !0, D.current = !1, c("tucked"), h(!1), g(!1), _(!1), T(!1);
      return;
    }
    if (R) {
      D.current = !1, N.current = !1, T(!0), c("expanded");
      return;
    }
    if (m || D.current || (c("tucked"), !a)) return;
    if (r) {
      if (N.current = !1, l) {
        const H = window.setTimeout(() => c("away"), Cg);
        return () => window.clearTimeout(H);
      }
      c("away");
      return;
    }
    const B = [];
    return N.current ? B.push(window.setTimeout(() => {
      N.current = !1, c("expanded"), B.push(window.setTimeout(() => c("away"), sx));
    }, l ? Cg : ux)) : B.push(window.setTimeout(() => c("away"), cx)), () => B.forEach((H) => window.clearTimeout(H));
  }, [
    e,
    a,
    R,
    m,
    r,
    l
  ]), {
    phase: u,
    quiet: S,
    hoverHintVisible: x,
    hintDismissed: A,
    dismissHint: () => {
      M(!0), C(!1), g(!1);
    },
    hintHandlers: {
      onContentPointerEnter: (B) => {
        B.pointerType !== "touch" && g(!0);
      },
      onContentPointerLeave: () => g(!1)
    },
    targetHandlers: {
      onPointerEnter: (B) => {
        B.pointerType !== "touch" && (M(!1), h(!0));
      },
      onPointerLeave: () => h(!1),
      onFocus: () => _(!0),
      onBlur: () => _(!1)
    }
  };
}
var mx = [
  "bottom-center",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right"
], vx = 1.25;
function wh(e, a) {
  return {
    x: e === "bottom-center" ? (a.left + a.right) / 2 : e.endsWith("left") ? a.left : a.right,
    y: e.startsWith("top") ? a.top : a.bottom
  };
}
function jb(e, a) {
  let r = "bottom-center", l = 1 / 0;
  for (const u of mx) {
    const c = wh(u, a), d = u === "bottom-center" ? vx : 1, h = Math.hypot(e.x - c.x, e.y - c.y) / d;
    h < l && (r = u, l = h);
  }
  return r;
}
var px = 100, Ag = 200, gx = 0.6;
function xg(e, a, r, l, u = []) {
  const c = u.at(-1), d = c && u.find((h) => c.time - h.time <= px);
  if (d && c && c.time > d.time) {
    const h = c.time - d.time, m = (c.x - d.x) / h, g = (c.y - d.y) / h;
    Math.hypot(m, g) >= gx && (e = Math.max(0, Math.min(r, e + m * Ag)), a = Math.max(0, Math.min(l, a + g * Ag)));
  }
  return a < l / 2 ? e < r / 2 ? "top-left" : "top-right" : jb({
    x: e,
    y: a
  }, {
    left: 0,
    top: 0,
    right: r,
    bottom: l
  });
}
var yx = 5, bx = 520, _x = 12, wx = 20, Sx = 137, Ex = 36, Uo = 32, Og = 280, Tx = 20;
function Cx({ corner: e, onCornerChange: a, onInteract: r, preserveChildClickTargets: l = !1, enableMomentum: u = !1 }) {
  const [c, d] = (0, b.useState)(null), [h, m] = (0, b.useState)(null), [g, p] = (0, b.useState)(null), [_, S] = (0, b.useState)(!1), [T, x] = (0, b.useState)({
    width: Sx,
    height: Ex,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  }), C = (0, b.useRef)(null), A = (0, b.useRef)(null), M = (0, b.useRef)(!1), N = T.viewportWidth <= bx ? _x : wx;
  (0, b.useLayoutEffect)(() => {
    function V() {
      const E = h?.getBoundingClientRect();
      x((I) => {
        const ae = {
          width: E?.width ?? I.width,
          height: E?.height ?? I.height,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight
        };
        return ae.width === I.width && ae.height === I.height && ae.viewportWidth === I.viewportWidth && ae.viewportHeight === I.viewportHeight ? I : ae;
      });
    }
    V();
    const P = new ResizeObserver(() => (0, Pr.flushSync)(V));
    return h && P.observe(h), window.addEventListener("resize", V), () => {
      P.disconnect(), window.removeEventListener("resize", V);
    };
  }, [h]), (0, b.useLayoutEffect)(() => () => {
    A.current !== null && window.clearTimeout(A.current);
  }, []);
  function D() {
    A.current !== null && window.clearTimeout(A.current), S(!0), A.current = window.setTimeout(() => {
      A.current = null, S(!1);
    }, Og + Tx);
  }
  function R(V) {
    return wh(V, {
      left: N,
      top: N,
      right: Math.max(N, T.viewportWidth - T.width - N),
      bottom: Math.max(N, T.viewportHeight - T.height - N)
    });
  }
  function B(V) {
    if (V.pointerType === "touch" || V.button !== 0 || !V.isPrimary || C.current) return;
    const P = c?.getBoundingClientRect();
    P && (M.current = !1, A.current !== null && window.clearTimeout(A.current), A.current = null, S(!1), C.current = {
      pointerId: V.pointerId,
      x: V.clientX,
      y: V.clientY,
      start: {
        x: P.x,
        y: P.y
      },
      moved: !1,
      samples: [{
        x: V.clientX,
        y: V.clientY,
        time: V.timeStamp
      }]
    }, (l && V.target instanceof Element ? V.target : V.currentTarget).setPointerCapture(V.pointerId));
  }
  function H(V) {
    const P = C.current;
    if (!P || P.pointerId !== V.pointerId) return;
    P.samples.push({
      x: V.clientX,
      y: V.clientY,
      time: V.timeStamp
    }), P.samples.length > 12 && P.samples.shift();
    const E = V.clientX - P.x, I = V.clientY - P.y;
    !P.moved && Math.hypot(E, I) < yx || (P.moved || (l && V.currentTarget.setPointerCapture(V.pointerId), r()), P.moved = !0, p(q(P, V)));
  }
  function q(V, P) {
    return {
      x: Math.max(0, Math.min(V.start.x + P.clientX - V.x, T.viewportWidth - T.width)),
      y: Math.max(0, Math.min(V.start.y + P.clientY - V.y, T.viewportHeight - T.height))
    };
  }
  function ee(V) {
    const P = C.current;
    if (!(!P || P.pointerId !== V.pointerId)) {
      if (C.current = null, M.current = P.moved, P.moved) {
        const E = q(P, V);
        a(xg(E.x + T.width / 2, E.y + T.height / 2, T.viewportWidth, T.viewportHeight, u ? [...P.samples, {
          x: V.clientX,
          y: V.clientY,
          time: V.timeStamp
        }] : void 0)), D(), p(null);
      }
      V.currentTarget.hasPointerCapture(V.pointerId) && V.currentTarget.releasePointerCapture(V.pointerId);
    }
  }
  function F(V) {
    !C.current || C.current.pointerId !== V.pointerId || (M.current = C.current.moved, C.current = null, D(), p(null), V.currentTarget.hasPointerCapture(V.pointerId) && V.currentTarget.releasePointerCapture(V.pointerId));
  }
  function U(V) {
    M.current && V.detail !== 0 && (V.preventDefault(), V.stopPropagation()), M.current = !1;
  }
  function Y(V) {
    if (V.altKey || V.ctrlKey || V.metaKey || V.shiftKey || C.current) return;
    let P;
    switch (V.key) {
      case "ArrowLeft":
        P = e.startsWith("top") ? "top-left" : e === "bottom-right" ? "bottom-center" : "bottom-left";
        break;
      case "ArrowRight":
        P = e.startsWith("top") ? "top-right" : e === "bottom-left" ? "bottom-center" : "bottom-right";
        break;
      case "ArrowUp":
        P = e.endsWith("left") ? "top-left" : "top-right";
        break;
      case "ArrowDown":
        P = e === "bottom-center" ? e : e.endsWith("left") ? "bottom-left" : "bottom-right";
        break;
      default:
        return;
    }
    V.preventDefault(), r(), a(P), D();
  }
  const oe = g ?? R(e), ue = R(g ? xg(g.x + T.width / 2, g.y + T.height / 2, T.viewportWidth, T.viewportHeight) : e), re = e === "bottom-center" ? T.viewportWidth / 2 - Uo : e.endsWith("left") ? -Uo : T.viewportWidth - Uo;
  return {
    widgetRef: d,
    contentRef: m,
    snapping: _,
    dragging: g !== null,
    style: {
      left: oe.x,
      top: oe.y,
      "--widget-snap-duration": `${Og}ms`,
      "--widget-surface-width": `${T.width}px`,
      "--widget-surface-height": `${T.height}px`,
      "--corner-x-direction": e === "bottom-center" ? 0 : e.endsWith("left") ? -1 : 1,
      "--corner-y-direction": e.startsWith("top") ? -1 : 1,
      "--tuck-x": `${re - oe.x}px`,
      "--tuck-y": `${(e.startsWith("top") ? -Uo : T.viewportHeight - Uo) - oe.y}px`
    },
    shadowStyle: {
      left: ue.x,
      top: ue.y,
      width: T.width,
      height: T.height
    },
    dragHandlers: {
      onPointerDown: B,
      onPointerMove: H,
      onPointerUp: ee,
      onPointerCancel: F,
      onLostPointerCapture(V) {
        (!l || V.target === V.currentTarget) && F(V);
      },
      onClickCapture: U,
      onKeyDown: Y
    }
  };
}
var Bb = "(prefers-reduced-motion: reduce)";
function Ax(e) {
  const a = window.matchMedia(Bb);
  return a.addEventListener("change", e), () => a.removeEventListener("change", e);
}
function xx() {
  return window.matchMedia(Bb).matches;
}
function Ub() {
  return (0, b.useSyncExternalStore)(Ax, xx);
}
var kb = "(hover: hover) and (pointer: fine)";
function Ox(e) {
  const a = window.matchMedia(kb);
  return a.addEventListener("change", e), () => a.removeEventListener("change", e);
}
function Mx() {
  return window.matchMedia(kb).matches;
}
function Rx() {
  return (0, b.useSyncExternalStore)(Ox, Mx);
}
function Nx(e) {
  return /* @__PURE__ */ (0, y.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41422L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" })
  });
}
function ti(e) {
  return /* @__PURE__ */ (0, y.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      d: "M5.636 5.636a1 1 0 0 1 1.414 0l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 0-1.414Z",
      clipRule: "evenodd"
    })
  });
}
function Dx({ accountId: e, chatgptOrigin: a, projectId: r }) {
  const l = new URL(r ? `/sites/${encodeURIComponent(r)}/edit` : "/sites", a);
  return r && e && l.searchParams.set("account_id", e), l;
}
function zx({ accountId: e, chatgptOrigin: a, projectId: r }) {
  if (!r) return null;
  const l = new URL(`/sites/${encodeURIComponent(r)}/settings`, a);
  return e && l.searchParams.set("account_id", e), l;
}
function Ur(e, a) {
  return a === null ? e : `[${e.replaceAll(`\r
`, " ").replaceAll("\r", " ").replaceAll(`
`, " ").replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("](", "]\\(").replaceAll("]", "\\]")}](sites-project://${encodeURIComponent(a)})`;
}
function bs({ accountId: e, chatgptOrigin: a, query: r, editContext: l }) {
  const u = new URL("/", a);
  return e && u.searchParams.set("account_id", e), l?.chatgpt_conversation_id && u.searchParams.set("resume_conversation_id", l.chatgpt_conversation_id), u.searchParams.set("surface", "work"), u.searchParams.set("prompt", r), u.searchParams.set("promptSource", "codex-app"), u.searchParams.set("site_edit_source", "widget"), u;
}
function Md({ accountId: e, browserUrl: a, chatgptOrigin: r, query: l, isDefaultPrompt: u = !1, projectId: c, editContext: d }) {
  if (c) {
    const m = Dx({
      accountId: e,
      chatgptOrigin: r,
      projectId: c
    });
    return d?.chatgpt_conversation_id && m.searchParams.set("conversation_id", d.chatgpt_conversation_id), d?.codex_thread_id && m.searchParams.set("codex_thread_id", d.codex_thread_id), u || m.searchParams.set("prompt", l), m.searchParams.set("browser_url", a), m;
  }
  const h = new URL("/codex/open-app", r);
  return h.searchParams.set("app_brand", "chatgpt"), h.searchParams.set("fallback", "work"), e && h.searchParams.set("account_id", e), d?.codex_thread_id && h.searchParams.set("codex_thread_id", d.codex_thread_id), d?.chatgpt_conversation_id && h.searchParams.set("chatgpt_conversation_id", d.chatgpt_conversation_id), h.searchParams.set("q", l), h.searchParams.set("browserUrl", a), h;
}
function Pb(e) {
  const [a, r] = (0, b.useState)(null);
  return (0, b.useLayoutEffect)(() => {
    if (!a) return;
    let l = 0;
    const u = () => {
      cancelAnimationFrame(l), l = requestAnimationFrame(() => {
        const d = e.current?.getBoundingClientRect();
        if (!d) return;
        const h = a.getBoundingClientRect();
        a.style.setProperty("--closed-top", `${d.top - h.top}px`), a.style.setProperty("--closed-left", `${d.left - h.left}px`), a.style.setProperty("--closed-right", `${h.right - d.right}px`), a.style.setProperty("--closed-bottom", `${h.bottom - d.bottom}px`), a.hasAttribute("data-mobile-widget-positioned") || (getComputedStyle(a, "::before").inset, a.dataset.mobileWidgetPositioned = "");
      });
    }, c = new ResizeObserver(u);
    return c.observe(a), e.current && c.observe(e.current), u(), window.addEventListener("resize", u), window.visualViewport?.addEventListener("resize", u), window.visualViewport?.addEventListener("scroll", u), () => {
      cancelAnimationFrame(l), c.disconnect(), window.removeEventListener("resize", u), window.visualViewport?.removeEventListener("resize", u), window.visualViewport?.removeEventListener("scroll", u);
    };
  }, [a, e]), {
    menuRef: r,
    menuMounted: a !== null
  };
}
var Mg = 52, ko = 12, Lx = 5, Rg = 280;
function Zb(e, a) {
  const r = (0, b.useRef)(null), [l] = (0, b.useState)(Lb), [u, c] = (0, b.useState)(() => l.read(Cn.editorWidgetMobileAnchor)), [d, h] = (0, b.useState)(null), [m, g] = (0, b.useState)(!1), p = (0, b.useRef)(null), [_, S] = (0, b.useState)({
    left: ko,
    top: ko,
    right: window.innerWidth - ko,
    bottom: window.innerHeight - Mg - ko
  }), [T, x] = (0, b.useState)(!1), [C, A] = (0, b.useState)(!1), M = (0, b.useRef)(null), N = (0, b.useRef)(!1), D = (0, b.useRef)(!1);
  (0, b.useLayoutEffect)(() => () => {
    p.current !== null && window.clearTimeout(p.current);
  }, []);
  function R() {
    p.current !== null && window.clearTimeout(p.current), g(!0), p.current = window.setTimeout(() => {
      p.current = null, g(!1);
    }, Rg + 20);
  }
  const B = (0, b.useCallback)(() => {
    const F = window.visualViewport, U = r.current ? getComputedStyle(r.current) : null, Y = (E) => Math.max(ko, parseFloat(U?.getPropertyValue(`--safe-${E}`) ?? "0") || 0), oe = (F?.offsetLeft ?? 0) + Y("left"), ue = (F?.offsetTop ?? 0) + Y("top"), re = r.current?.offsetWidth ?? 0, V = r.current?.offsetHeight ?? Mg, P = {
      left: oe,
      top: ue,
      right: Math.max(oe, (F?.offsetLeft ?? 0) + (F?.width ?? window.innerWidth) - re - Y("right")),
      bottom: Math.max(ue, (F?.offsetTop ?? 0) + (F?.height ?? window.innerHeight) - V - Y("bottom"))
    };
    S((E) => E.left === P.left && E.top === P.top && E.right === P.right && E.bottom === P.bottom ? E : P);
  }, []);
  (0, b.useLayoutEffect)(B), (0, b.useLayoutEffect)(() => {
    const F = new ResizeObserver(B);
    return r.current && F.observe(r.current), window.addEventListener("resize", B), window.visualViewport?.addEventListener("resize", B), window.visualViewport?.addEventListener("scroll", B), () => {
      F.disconnect(), window.removeEventListener("resize", B), window.visualViewport?.removeEventListener("resize", B), window.visualViewport?.removeEventListener("scroll", B);
    };
  }, [B]);
  function H(F) {
    return {
      x: Math.max(_.left, Math.min(F.x, _.right)),
      y: Math.max(_.top, Math.min(F.y, _.bottom))
    };
  }
  const q = H(d ?? wh(u, _));
  function ee(F, U = !1) {
    const Y = M.current;
    if (!(!Y || Y.id !== F.pointerId)) {
      if (M.current = null, D.current = !U && !Y.moved && F.pointerType === "touch", N.current = U || Y.moved || D.current, !U && Y.moved) {
        const oe = jb(H({
          x: Y.start.x + F.clientX - Y.pointer.x,
          y: Y.start.y + F.clientY - Y.pointer.y
        }), _);
        c(oe), l.write(Cn.editorWidgetMobileAnchor, oe);
      }
      Y.moved && R(), h(null), x(!1), A(!1), F.currentTarget.hasPointerCapture(F.pointerId) && F.currentTarget.releasePointerCapture(F.pointerId);
    }
  }
  return {
    ref: r,
    anchor: u,
    style: {
      left: q.x,
      top: q.y,
      "--widget-snap-duration": `${Rg}ms`
    },
    dragging: T,
    pressed: C,
    snapping: m,
    dragHandlers: {
      onPointerDown(F) {
        if (!F.isPrimary || F.button !== 0 || M.current) return;
        const U = r.current?.getBoundingClientRect(), Y = U ? {
          x: U.x,
          y: U.y
        } : q;
        p.current !== null && window.clearTimeout(p.current), p.current = null, g(!1), A(!0), h(Y), N.current = !1, D.current = !1, M.current = {
          id: F.pointerId,
          pointer: {
            x: F.clientX,
            y: F.clientY
          },
          start: Y,
          moved: !1
        }, F.target instanceof Element && F.target.setPointerCapture(F.pointerId);
      },
      onPointerMove(F) {
        const U = M.current;
        if (!U || U.id !== F.pointerId) return;
        const Y = F.clientX - U.pointer.x, oe = F.clientY - U.pointer.y;
        !U.moved && Math.hypot(Y, oe) < Lx || (U.moved || (F.currentTarget.setPointerCapture(F.pointerId), e()), U.moved = !0, x(!0), h(H({
          x: U.start.x + Y,
          y: U.start.y + oe
        })));
      },
      onPointerUp: (F) => ee(F),
      onPointerCancel: (F) => ee(F, !0),
      onLostPointerCapture(F) {
        F.target === F.currentTarget && ee(F, !0);
      },
      onTouchEnd(F) {
        F.cancelable && F.preventDefault(), D.current && (D.current = !1, a(F));
      },
      onClickCapture(F) {
        N.current && F.detail !== 0 && (F.preventDefault(), F.stopPropagation()), N.current = !1;
      }
    }
  };
}
function Ib(e) {
  return /* @__PURE__ */ (0, y.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, y.jsx)("path", { d: "M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" })
  });
}
function Gb(e) {
  return /* @__PURE__ */ (0, y.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: [/* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.29285 2.29289C2.68337 1.90237 3.31654 1.90237 3.70706 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3165 22.0976 20.6834 22.0976 20.2928 21.7071L17.7784 19.1927C16.2039 20.2404 14.274 21 12 21C8.84578 21 6.36056 19.541 4.55854 17.8792C2.76156 16.222 1.58474 14.312 1.01229 13.2562C0.585014 12.4681 0.585717 11.5305 1.01263 10.7432C1.59034 9.67778 2.79199 7.72646 4.63582 6.05008L2.29285 3.70711C1.90232 3.31658 1.90232 2.68342 2.29285 2.29289ZM6.05186 7.46612C4.40718 8.93862 3.30712 10.7074 2.77079 11.6965C2.66592 11.8899 2.66602 12.1102 2.77049 12.3029C3.28862 13.2585 4.34187 14.9588 5.9144 16.4089C7.48191 17.8545 9.50568 19 12 19C13.6494 19 15.0899 18.5001 16.3303 17.7445L14.396 15.8102C12.6574 16.9057 10.3323 16.6963 8.81797 15.182C7.30363 13.6676 7.09422 11.3425 8.18971 9.60397L6.05186 7.46612ZM9.67217 11.0864L12.9135 14.3278C12.0164 14.6793 10.9571 14.4927 10.2322 13.7678C9.50728 13.0429 9.32061 11.9836 9.67217 11.0864Z"
    }), /* @__PURE__ */ (0, y.jsx)("path", { d: "M10.2233 5.19987C10.7835 5.07151 11.3752 5 12 5C14.4942 5 16.518 6.1455 18.0855 7.59105C19.6581 9.04124 20.7113 10.7415 21.2294 11.6971C21.3334 11.8889 21.3338 12.1105 21.2284 12.3047C20.9449 12.8276 20.496 13.5829 19.8836 14.4005C19.5525 14.8426 19.6425 15.4693 20.0845 15.8004C20.5265 16.1315 21.1533 16.0415 21.4844 15.5995C22.1677 14.6872 22.6678 13.8459 22.9865 13.2582C23.4131 12.4717 23.4154 11.5327 22.9876 10.7438C22.4152 9.68799 21.2384 7.77798 19.4414 6.1208C17.6394 4.45899 15.1541 3 12 3C11.221 3 10.4794 3.08934 9.77657 3.25041C9.23825 3.37379 8.90186 3.9102 9.02523 4.44853C9.1486 4.98686 9.68502 5.32325 10.2233 5.19987Z" })]
  });
}
function Sh(e) {
  return /* @__PURE__ */ (0, y.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...e,
    children: /* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
    })
  });
}
var Hx = "_Widget_1lfcb_1", jx = "_Launcher_1lfcb_27", Bx = "_Action_1lfcb_28", Ux = "_EditAction_1lfcb_29", kx = "_MoreAction_1lfcb_30", Px = "_Menu_1lfcb_39", Zx = "_Actions_1lfcb_204", sn = {
  Widget: Hx,
  Launcher: jx,
  Action: Bx,
  EditAction: Ux,
  MoreAction: kx,
  Menu: Px,
  "menu-exit": "_menu-exit_1lfcb_1",
  Actions: Zx
};
function Ix({ accountId: e, config: a, chatgptOrigin: r, projectId: l, siteTitle: u }) {
  const c = rl(), [d, h] = (0, b.useState)(!1), [m, g] = (0, b.useState)(a.hidden), [p] = (0, b.useState)(Wd), _ = (0, b.useRef)(!1), S = (0, b.useRef)(!1), T = Zb(() => h(!1), (M) => {
    M.target instanceof Element && M.target.closest("button, a")?.click();
  }), { menuRef: x, menuMounted: C } = Pb(T.ref);
  if ((0, b.useEffect)(() => {
    m || _.current || (_.current = !0, _t("editor_widget_shown"));
  }, [m]), m) return null;
  const A = bs({
    accountId: e,
    chatgptOrigin: r,
    editContext: a.edit_context,
    query: `${Ur(u, l)} `
  }).toString();
  return /* @__PURE__ */ (0, y.jsxs)(hs, {
    open: d,
    onOpenChange: h,
    children: [(0, Pr.createPortal)(/* @__PURE__ */ (0, y.jsx)(Gx, {
      position: T,
      open: d,
      menuMounted: C,
      openedByPointer: S,
      editUrl: A
    }), c ?? document.body), /* @__PURE__ */ (0, y.jsx)(ms, {
      container: c,
      children: /* @__PURE__ */ (0, y.jsx)($x, {
        ref: x,
        anchor: T.anchor,
        open: d,
        openedByPointer: S,
        editUrl: A,
        onEdit: () => h(!1),
        onHide: () => {
          h(!1), g(!0), p(!0), _t("editor_widget_hidden");
        }
      })
    })]
  });
}
function Gx({ position: e, open: a, menuMounted: r, openedByPointer: l, editUrl: u }) {
  const c = Xe(), d = c.formatMessage($e.editorWidgetMobileMenu);
  return /* @__PURE__ */ (0, y.jsx)(ph, {
    asChild: !0,
    children: /* @__PURE__ */ (0, y.jsx)("div", {
      ref: e.ref,
      className: ze(De.Widget, sn.Widget),
      style: e.style,
      "data-mobile-widget-dragging": e.dragging ? "" : void 0,
      "data-mobile-widget-pressed": e.pressed ? "" : void 0,
      "data-mobile-widget-snapping": e.snapping ? "" : void 0,
      "data-mobile-widget-menu-open": a ? "" : void 0,
      "data-mobile-widget-menu-mounted": r ? "" : void 0,
      dir: ai(c.locale),
      lang: c.locale,
      children: /* @__PURE__ */ (0, y.jsxs)("div", {
        className: sn.Launcher,
        role: "group",
        "aria-label": d,
        inert: a,
        onPointerDownCapture: () => {
          l.current = !0;
        },
        onKeyDown: () => {
          l.current = !1;
        },
        ...e.dragHandlers,
        children: [
          /* @__PURE__ */ (0, y.jsx)(Kd, {
            src: Yd,
            alt: "",
            width: 24,
            height: 24
          }),
          /* @__PURE__ */ (0, y.jsx)($b, {
            className: sn.EditAction,
            href: u
          }),
          /* @__PURE__ */ (0, y.jsx)(gh, {
            asChild: !0,
            children: /* @__PURE__ */ (0, y.jsx)("button", {
              type: "button",
              className: sn.MoreAction,
              "aria-label": d,
              title: d,
              children: /* @__PURE__ */ (0, y.jsx)(Ib, {
                "aria-hidden": "true",
                focusable: "false"
              })
            })
          })
        ]
      })
    })
  });
}
function $x({ ref: e, anchor: a, open: r, openedByPointer: l, editUrl: u, onEdit: c, onHide: d }) {
  const h = Xe(), m = ai(h.locale);
  return /* @__PURE__ */ (0, y.jsx)(vs, {
    ref: e,
    className: ze(De.Widget, sn.Menu),
    side: a.startsWith("top") ? "bottom" : "top",
    align: a === "bottom-center" ? "center" : a.endsWith("left") !== (m === "rtl") ? "start" : "end",
    sideOffset: -52,
    collisionPadding: 16,
    updatePositionStrategy: "always",
    inert: !r,
    onOpenAutoFocus: (g) => {
      g.preventDefault(), g.target instanceof HTMLElement && (l.current ? g.target : g.target.querySelector("a, button") ?? g.target).focus({ preventScroll: !0 }), l.current = !1;
    },
    "aria-label": h.formatMessage($e.editorWidgetMobileMenu),
    dir: m,
    lang: h.locale,
    children: /* @__PURE__ */ (0, y.jsxs)("div", {
      className: sn.Actions,
      children: [
        /* @__PURE__ */ (0, y.jsx)($b, {
          className: sn.Action,
          href: u,
          onClick: c,
          showIcon: !0
        }),
        /* @__PURE__ */ (0, y.jsxs)("button", {
          type: "button",
          className: sn.Action,
          onClick: d,
          children: [/* @__PURE__ */ (0, y.jsx)(Gb, {
            "aria-hidden": "true",
            focusable: "false"
          }), h.formatMessage($e.editorWidgetHideAction)]
        }),
        /* @__PURE__ */ (0, y.jsx)(Ad, {
          asChild: !0,
          children: /* @__PURE__ */ (0, y.jsxs)("button", {
            type: "button",
            className: sn.Action,
            children: [/* @__PURE__ */ (0, y.jsx)(ti, {
              "aria-hidden": "true",
              focusable: "false"
            }), h.formatMessage($e.editorWidgetMobileClose)]
          })
        })
      ]
    })
  });
}
function $b({ className: e, href: a, onClick: r, showIcon: l = !1 }) {
  const u = Xe();
  return /* @__PURE__ */ (0, y.jsxs)("a", {
    className: e,
    href: a,
    target: "_blank",
    rel: "noopener noreferrer",
    draggable: !1,
    onClick: () => {
      r?.(), _t("editor_widget_open_in_chatgpt_clicked");
    },
    children: [l && /* @__PURE__ */ (0, y.jsx)(Sh, {
      "aria-hidden": "true",
      focusable: "false"
    }), u.formatMessage($e.editorWidgetLaunchAction)]
  });
}
var ie = {
  removeRecipient: {
    id: "sites.dispatch.widget.toolbar.remove_recipient",
    defaultMessage: "Remove {name}",
    description: "Remove a selected recipient from an unsent Site invitation."
  },
  inviteRole: {
    id: "sites.dispatch.widget.toolbar.invite_role",
    defaultMessage: "Role for selected recipients",
    description: "Accessible label for the role selector inside the invitation input."
  },
  commitInvites: {
    id: "sites.dispatch.widget.toolbar.commit_invites",
    defaultMessage: "Invite",
    description: "Save pending sharing changes and invite all selected recipients."
  },
  save: {
    id: "sites.dispatch.widget.toolbar.save",
    defaultMessage: "Save",
    description: "Commit pending Site sharing and remix settings."
  },
  cancel: {
    id: "sites.dispatch.widget.toolbar.cancel",
    defaultMessage: "Cancel",
    description: "Close Site sharing and discard unsaved changes."
  },
  advanced: {
    id: "sites.dispatch.widget.toolbar.advanced",
    defaultMessage: "Advanced",
    description: "Open the Site owner's advanced sharing settings."
  },
  advancedSettings: {
    id: "sites.dispatch.widget.toolbar.advanced_settings",
    defaultMessage: "Advanced settings",
    description: "Title of the advanced Site sharing panel."
  },
  back: {
    id: "sites.dispatch.widget.toolbar.back",
    defaultMessage: "Back",
    description: "Return to the sharing panel, preserving unsaved changes."
  },
  remixWorkspace: {
    id: "sites.dispatch.widget.toolbar.remix_workspace",
    defaultMessage: "Let viewers in {workspace} remix",
    description: "Owner setting allowing workspace viewers to remix this Site."
  },
  remixViewers: {
    id: "sites.dispatch.widget.toolbar.remix_viewers",
    defaultMessage: "Let viewers remix",
    description: "Owner remix setting when no workspace name is available."
  },
  remixInfo: {
    id: "sites.dispatch.widget.toolbar.remix_info",
    defaultMessage: "About remixing",
    description: "Accessible label for the remix explanation tooltip."
  },
  remixExplanation: {
    id: "sites.dispatch.widget.toolbar.remix_explanation",
    defaultMessage: "Remixing lets viewers in your workspace make their own version of this site. Only the code is copied; your site’s data isn’t included.",
    description: "Explains what workspace viewers can copy when remixing a Site."
  },
  remixUnavailable: {
    id: "sites.dispatch.widget.toolbar.remix_unavailable",
    defaultMessage: "The remix setting is unavailable. You can still update sharing.",
    description: "Remix permission could not be read; its toggle is disabled without blocking sharing."
  },
  viewerRemixDescription: {
    id: "sites.dispatch.widget.toolbar.viewerRemixDescription",
    defaultMessage: "Use and remix",
    description: "Viewer role description for workspace members when site remixing is enabled."
  },
  viewerMixedRemixDescription: {
    id: "sites.dispatch.widget.toolbar.viewerMixedRemixDescription",
    defaultMessage: "Use this site. {workspace} members can also remix.",
    description: "Viewer role description for mixed workspace and external recipients when site remixing is enabled."
  },
  editorWorkspaceOnlyDescription: {
    id: "sites.dispatch.widget.toolbar.editorWorkspaceOnlyDescription",
    defaultMessage: "Only workspace members can be editors",
    description: "Reason Editor is disabled when recipients include external visitors or tenant groups."
  },
  viewerDescriptionShort: {
    id: "sites.dispatch.widget.toolbar.viewer_description_short",
    defaultMessage: "View and use the site",
    description: "Description for the viewerDescription sharing option."
  },
  editorDescriptionShort: {
    id: "sites.dispatch.widget.toolbar.editor_description_short",
    defaultMessage: "Edit and publish",
    description: "Description for the editorDescription sharing option."
  },
  openChatGPT: {
    id: "sites.dispatch.widget.toolbar.open_chatgpt",
    defaultMessage: "Open ChatGPT",
    description: "Tooltip and accessible label for opening an empty Edit or Remix composer in ChatGPT."
  },
  remixOpenPrompt: {
    id: "sites.dispatch.widget.toolbar.remix_open_prompt",
    defaultMessage: "Remix {site}",
    description: "Editable prefill when opening ChatGPT from an empty remix composer. site is the complete Site reference."
  },
  privateHint: {
    id: "sites.dispatch.widget.toolbar.private_hint_status",
    defaultMessage: "This site is private.",
    description: "Access statement in a first-use tooltip. A separate sharing action appears below it."
  },
  invitedHint: {
    id: "sites.dispatch.widget.toolbar.invited_hint_status",
    defaultMessage: "Only invited people can view.",
    description: "Access statement for a Site shared with invited people or groups. A separate manage-access action appears below it."
  },
  workspaceHint: {
    id: "sites.dispatch.widget.toolbar.workspace_hint_status",
    defaultMessage: "Everyone in {workspace} can view.",
    description: "Workspace-wide access statement in a tooltip. A separate manage-access action appears below it."
  },
  publicHint: {
    id: "sites.dispatch.widget.toolbar.public_hint_status",
    defaultMessage: "Anyone with the link can view.",
    description: "Public access statement in a tooltip. A separate manage-access action appears below it."
  },
  shareHintAction: {
    id: "sites.dispatch.widget.toolbar.share_hint_action",
    defaultMessage: "Click to share.",
    description: "Second line of a sharing tooltip, below a standalone private-access statement. Describes clicking the toolbar's sharing button."
  },
  manageHintAction: {
    id: "sites.dispatch.widget.toolbar.manage_hint_action",
    defaultMessage: "Click to manage.",
    description: "Second line of a sharing tooltip, below a standalone access statement. Describes clicking the toolbar button to manage Site access."
  },
  remixComposerPlaceholder: {
    id: "sites.dispatch.widget.toolbar.remix_composer_placeholder",
    defaultMessage: "Describe your remix",
    description: "Placeholder and accessible label for the Site remix composer."
  },
  publicDescription: {
    id: "sites.dispatch.widget.toolbar.publicDescription",
    defaultMessage: "Anyone on the internet with the link can view",
    description: "Description for the publicDescription sharing option."
  },
  workspaceDescription: {
    id: "sites.dispatch.widget.toolbar.workspaceDescription",
    defaultMessage: "Workspace members with the link can view",
    description: "Description for the workspaceDescription sharing option."
  },
  privateDescription: {
    id: "sites.dispatch.widget.toolbar.privateDescription",
    defaultMessage: "You and people you’ve added can view",
    description: "Description for the privateDescription sharing option."
  },
  viewerDescription: {
    id: "sites.dispatch.widget.toolbar.viewerDescription",
    defaultMessage: "View and use the site.",
    description: "Description for the viewerDescription sharing option."
  },
  editorDescription: {
    id: "sites.dispatch.widget.toolbar.editorDescription",
    defaultMessage: "Edit the site and publish updates. Access, download, change, or delete its data.",
    description: "Description for the editorDescription sharing option."
  },
  admins: {
    id: "sites.dispatch.widget.toolbar.admins",
    defaultMessage: "Admins only",
    description: "Legacy Site access limited to owners and workspace administrators."
  },
  menu: {
    id: "sites.dispatch.widget.toolbar.menu",
    defaultMessage: "Toolbar menu",
    description: "Open toolbar actions."
  },
  role: {
    id: "sites.dispatch.widget.toolbar.role",
    defaultMessage: "Access for {name}",
    description: "Accessible name for a sharing role selector."
  },
  privateTunnels: {
    id: "sites.dispatch.widget.toolbar.private_tunnels",
    defaultMessage: "This site connects to private resources. Check what it exposes before sharing publicly.",
    description: "Warning when a Site with private connectivity can be made public."
  },
  label: {
    id: "sites.dispatch.widget.toolbar.label",
    defaultMessage: "Site toolbar",
    description: "Accessible name of the Site sharing toolbar."
  },
  private: {
    id: "sites.dispatch.widget.toolbar.private",
    defaultMessage: "Private",
    description: "Toolbar label for a Site shared only with its owner."
  },
  public: {
    id: "sites.dispatch.widget.toolbar.public",
    defaultMessage: "Public",
    description: "Toolbar label for a publicly accessible Site."
  },
  workspace: {
    id: "sites.dispatch.widget.toolbar.workspace",
    defaultMessage: "Workspace",
    description: "Fallback label for workspace-wide Site access."
  },
  people: {
    id: "sites.dispatch.widget.toolbar.people",
    defaultMessage: "{count, plural, one {# person} other {# people}}",
    description: "Number of people explicitly allowed to access a Site, including its owner."
  },
  inviteOnly: {
    id: "sites.dispatch.widget.toolbar.invite_only",
    defaultMessage: "Invite only",
    description: "Site shared with access groups, whose membership can overlap."
  },
  share: {
    id: "sites.dispatch.widget.toolbar.share",
    defaultMessage: "Share",
    description: "Open the Site sharing dialog."
  },
  title: {
    id: "sites.dispatch.widget.toolbar.title",
    defaultMessage: "Share ‘{title}’",
    description: "Site sharing dialog heading."
  },
  edit: {
    id: "sites.dispatch.widget.toolbar.edit",
    defaultMessage: "Edit this site",
    description: "Open this Site in ChatGPT for editing."
  },
  remix: {
    id: "sites.dispatch.widget.toolbar.remix",
    defaultMessage: "Remix",
    description: "Start a new ChatGPT conversation to remix the Site."
  },
  settings: {
    id: "sites.dispatch.widget.toolbar.settings",
    defaultMessage: "Settings",
    description: "Owner-only Site toolbar menu item. Opens this Site's settings page on ChatGPT web in a new tab. Short label beside a gear icon."
  },
  hide: {
    id: "sites.dispatch.widget.toolbar.hide",
    defaultMessage: "Hide toolbar",
    description: "Hide the Site toolbar."
  },
  close: {
    id: "sites.dispatch.widget.toolbar.close",
    defaultMessage: "Close",
    description: "Close the current toolbar menu or sharing dialog."
  },
  search: {
    id: "sites.dispatch.widget.toolbar.search",
    defaultMessage: "Email or name",
    description: "Search for people or groups to share a Site with."
  },
  linkAccess: {
    id: "sites.dispatch.widget.toolbar.link_access",
    defaultMessage: "Link access",
    description: "Heading for who can open the Site link."
  },
  invited: {
    id: "sites.dispatch.widget.toolbar.invited",
    defaultMessage: "Only invited people",
    description: "Restricted Site link access option."
  },
  anyone: {
    id: "sites.dispatch.widget.toolbar.anyone",
    defaultMessage: "Anyone with the link",
    description: "Public Site link access option."
  },
  everyone: {
    id: "sites.dispatch.widget.toolbar.everyone",
    defaultMessage: "Everyone in {workspace}",
    description: "Workspace-wide Site link access option."
  },
  who: {
    id: "sites.dispatch.widget.toolbar.who",
    defaultMessage: "Who has access",
    description: "Heading for people and groups with Site access."
  },
  owner: {
    id: "sites.dispatch.widget.toolbar.owner",
    defaultMessage: "Owner",
    description: "Non-editable Site owner role."
  },
  viewer: {
    id: "sites.dispatch.widget.toolbar.viewer",
    defaultMessage: "Viewer",
    description: "Role that can view a Site."
  },
  editor: {
    id: "sites.dispatch.widget.toolbar.editor",
    defaultMessage: "Editor",
    description: "Role that can edit a Site."
  },
  remove: {
    id: "sites.dispatch.widget.toolbar.remove",
    defaultMessage: "Remove access",
    description: "Remove a person or group from Site sharing."
  },
  copy: {
    id: "sites.dispatch.widget.toolbar.copy",
    defaultMessage: "Copy link",
    description: "Copy the canonical Site URL."
  },
  copied: {
    id: "sites.dispatch.widget.toolbar.copied",
    defaultMessage: "Copied",
    description: "Confirmation that the Site URL was copied."
  },
  error: {
    id: "sites.dispatch.widget.toolbar.error",
    defaultMessage: "Couldn’t update sharing. Please try again.",
    description: "A Site sharing save failed."
  },
  interactionRequired: {
    id: "sites.dispatch.widget.toolbar.interaction_required",
    defaultMessage: "Keep the sharing dialog fully visible, then try again.",
    description: "A sharing change was blocked because the dialog was not visibly receiving a user action."
  },
  searchError: {
    id: "sites.dispatch.widget.toolbar.search_error",
    defaultMessage: "Couldn’t search. Please try again.",
    description: "Site sharing directory search failed."
  },
  noResults: {
    id: "sites.dispatch.widget.toolbar.no_results",
    defaultMessage: "No matching people or groups",
    description: "Empty Site sharing search results."
  },
  invite: {
    id: "sites.dispatch.widget.toolbar.invite",
    defaultMessage: "Invite {email}",
    description: "Invite a new external visitor by email."
  },
  searching: {
    id: "sites.dispatch.widget.toolbar.searching",
    defaultMessage: "Searching…",
    description: "Site sharing search is running."
  },
  saving: {
    id: "sites.dispatch.widget.toolbar.saving",
    defaultMessage: "Saving…",
    description: "Site sharing update is running."
  },
  more: {
    id: "sites.dispatch.widget.toolbar.more",
    defaultMessage: "Type more to narrow your search",
    description: "More sharing search results exist than fit in the list."
  },
  members: {
    id: "sites.dispatch.widget.toolbar.members",
    defaultMessage: "{count, plural, one {# member} other {# members}}",
    description: "Number of members of a Site access group."
  },
  copyError: {
    id: "sites.dispatch.widget.toolbar.copy_error",
    defaultMessage: "Couldn’t copy the link. Please try again.",
    description: "Clipboard copy failed."
  },
  remixPrompt: {
    id: "sites.dispatch.widget.toolbar.remix_prompt",
    defaultMessage: "Remix {site} into a new site.",
    description: "New ChatGPT conversation prompt for remixing an existing Site reference."
  }
};
function Vb(e, a) {
  switch (a) {
    case "owner":
      return e === "owner";
    case "editor":
      return e === "owner" || e === "editor";
    case "viewer":
      return e === "owner" || e === "editor" || e === "viewer";
    default:
      return !1;
  }
}
var Fb = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M12 4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Zm-6 6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H6Zm0-2a6 6 0 1 1 12 0 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm4 6a2 2 0 1 1 3 1.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 10 14Z",
    clipRule: "evenodd"
  })
}), Xb = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9744 4.00615 11.953 4.01416 11.921 4.03356C11.7908 4.11248 11.5742 4.32444 11.325 4.77696C11.0839 5.21453 10.8521 5.8046 10.6514 6.53263C10.3148 7.75315 10.0844 9.29169 10.019 11H13.981C13.9156 9.29169 13.6852 7.75315 13.3486 6.53263C13.1479 5.8046 12.9161 5.21453 12.675 4.77696C12.4258 4.32444 12.2092 4.11248 12.079 4.03356C12.047 4.01416 12.0256 4.00615 12.0149 4.00291C12.0067 4.00046 12.001 4.00006 11.9996 4C11.9982 4.00006 11.9933 4.00046 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13C10.0955 14.9972 10.3973 16.7574 10.8274 18.0477C11.0794 18.8038 11.3575 19.3436 11.6177 19.6737C11.7455 19.8359 11.8494 19.9225 11.9186 19.9649C11.9515 19.9852 11.9736 19.9935 11.9847 19.9969C11.9948 20 11.9999 20 11.9999 20C11.9999 20 12.0049 20.0001 12.0153 19.9969C12.0264 19.9935 12.0485 19.9852 12.0814 19.9649C12.1506 19.9225 12.2545 19.8359 12.3823 19.6737C12.6425 19.3436 12.9206 18.8038 13.1726 18.0477C13.6027 16.7574 13.9045 14.9972 13.981 13H10.019ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z"
  })
}), Vx = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM17 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-8.96 8.247C3.137 17.048 2.5 18.271 2.5 20a1 1 0 1 1-2 0c0-2.271.862-4.049 2.21-5.248C4.042 13.57 5.788 13 7.5 13s3.459.57 4.79 1.752c1.348 1.2 2.21 2.977 2.21 5.248a1 1 0 1 1-2 0c0-1.729-.638-2.952-1.54-3.753C10.042 15.43 8.788 15 7.5 15s-2.541.43-3.46 1.247Zm15.757-.607c-1.009-.638-2.338-.807-3.526-.472a1 1 0 0 1-.542-1.925c1.695-.478 3.616-.255 5.136.706 1.558.984 2.635 2.707 2.635 5.051a1 1 0 1 1-2 0c0-1.665-.732-2.746-1.703-3.36Z",
    clipRule: "evenodd"
  })
}), qb = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    d: "M3 6C3 4.34315 4.34315 3 6 3H12C13.6569 3 15 4.34315 15 6V7H18C19.6569 7 21 8.34315 21 10V19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20C1 19.4477 1.44772 19 2 19H3V6ZM5 19H8V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V19H13V6C13 5.44772 12.5523 5 12 5H6C5.44772 5 5 5.44772 5 6V19ZM15 19H19V10C19 9.44772 18.5523 9 18 9H15V19Z",
    fill: "currentColor"
  })
}), Fx = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0015 18.9289C14.8244 19.6101 13.4577 20 12 20C7.58172 20 4 16.4183 4 12C4 9.23858 6.23858 7 9 7C11.7614 7 14 9.23858 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 8.13401 12.866 5 9 5C8.65998 5 8.32561 5.02424 7.99855 5.0711C9.17557 4.3899 10.5423 4 12 4C16.4183 4 20 7.58172 20 12C20 14.7614 17.7614 17 15 17C12.2386 17 10 14.7614 10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12C8 15.866 11.134 19 15 19C15.34 19 15.6744 18.9758 16.0015 18.9289Z",
    fill: "currentColor"
  })
}), Yb = (e) => /* @__PURE__ */ (0, y.jsxs)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: [/* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3.001 3.001 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.439.761a1 1 0 0 0-.004.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3.001 3.001 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .86-.501l.438-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.954l.793-1.4a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.858-.502l-1.597-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494h-.87ZM8.98 2.981A3.001 3.001 0 0 1 11.568 1.5h.87c1.064 0 2.049.564 2.588 1.481l.811 1.382a1 1 0 0 0 .855.494l1.596.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3.001 3.001 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3.001 3.001 0 0 1-2.588 1.481h-.87a3.001 3.001 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3.001 3.001 0 0 1-2.576-1.503l-.438-.76a3 3 0 0 1-.013-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .013-2.975l.438-.761A3.001 3.001 0 0 1 5.718 4.87l1.596-.013a1 1 0 0 0 .855-.494l.81-1.382Z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001Z",
    clipRule: "evenodd"
  })]
}), Xx = "_Launcher_1f48j_1", qx = "_Logo_1f48j_32", Yx = "_Divider_1f48j_38", Wx = "_Shortcut_1f48j_45", Qx = "_More_1f48j_46", Kx = "_Ghost_1f48j_50", Jx = "_Label_1f48j_84", e8 = "_Menu_1f48j_91", t8 = "_MenuActions_1f48j_104", n8 = "_MenuDivider_1f48j_107", a8 = "_MenuAction_1f48j_104", vt = {
  Launcher: Xx,
  Logo: qx,
  Divider: Yx,
  Shortcut: Wx,
  More: Qx,
  Ghost: Kx,
  Label: Jx,
  Menu: e8,
  MenuActions: t8,
  MenuDivider: n8,
  MenuAction: a8
};
function i8({ children: e, summary: a, enabled: r, anchor: l, onDismiss: u }) {
  const { formatMessage: c } = Xe();
  function d() {
    switch (a.icon) {
      case "lock":
        return c(ie.privateHint);
      case "globe":
        return c(ie.publicHint);
      case "building":
        return c(ie.workspaceHint, { workspace: a.label });
      default:
        return c(ie.invitedHint);
    }
  }
  return /* @__PURE__ */ (0, y.jsx)(Hn, {
    content: /* @__PURE__ */ (0, y.jsxs)("span", {
      className: Pt.SharingHint,
      dir: "auto",
      children: [
        /* @__PURE__ */ (0, y.jsx)("span", { children: d() }),
        " ",
        /* @__PURE__ */ (0, y.jsx)("span", { children: c(a.icon === "lock" ? ie.shareHintAction : ie.manageHintAction) })
      ]
    }),
    contentClassName: ze(Pt.Tooltip, Pt.SharingTooltip),
    forceOpen: r ? void 0 : !1,
    interactive: !0,
    maxWidth: "min(300px, calc(100vw - 30px))",
    side: l.startsWith("top") ? "bottom" : "top",
    sideOffset: 12,
    onDismiss: u,
    children: e
  });
}
var r8 = {
  lock: Fb,
  globe: Xb,
  people: Vx,
  building: qb
};
function o8(e, a) {
  return e === "bottom-center" ? "center" : e.endsWith("left") !== (a === "rtl") ? "start" : "end";
}
function l8({ toolbar: e, onHide: a, onCompose: r }) {
  const { formatMessage: l } = Xe(), u = Vb(e.currentUserRole, "editor");
  return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
    ["edit", "remix"].map((c) => {
      if (c === "edit" && !u || c === "remix" && !u && e.remixEnabled === !1) return null;
      const d = /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [c === "edit" ? /* @__PURE__ */ (0, y.jsx)(Sh, {}) : /* @__PURE__ */ (0, y.jsx)(Fx, {
        "aria-hidden": "true",
        focusable: "false"
      }), l(ie[c])] });
      return /* @__PURE__ */ (0, y.jsx)(wt, {
        variant: "ghost",
        color: "secondary",
        className: ze(vt.Ghost, vt.MenuAction),
        onClick: () => r(c),
        children: d
      }, c);
    }),
    e.currentUserRole === "owner" && e.settingsUrl && /* @__PURE__ */ (0, y.jsx)(Ad, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsxs)(ny, {
        variant: "ghost",
        color: "secondary",
        className: ze(vt.Ghost, vt.MenuAction),
        href: e.settingsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/* @__PURE__ */ (0, y.jsx)(Yb, {
          "aria-hidden": "true",
          focusable: "false"
        }), l(ie.settings)]
      })
    }),
    /* @__PURE__ */ (0, y.jsx)("hr", { className: vt.MenuDivider }),
    /* @__PURE__ */ (0, y.jsxs)(wt, {
      variant: "ghost",
      color: "secondary",
      className: ze(vt.Ghost, vt.MenuAction),
      onClick: a,
      children: [/* @__PURE__ */ (0, y.jsx)(Gb, {}), l(ie.hide)]
    }),
    /* @__PURE__ */ (0, y.jsx)(Ad, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsxs)(wt, {
        variant: "ghost",
        color: "secondary",
        className: ze(vt.Ghost, vt.MenuAction),
        children: [/* @__PURE__ */ (0, y.jsx)(ti, {}), l(ie.close)]
      })
    })
  ] });
}
function Wb({ toolbar: e, mobileLayout: a = !1, launcherRef: r, corner: l, dragHandlers: u, onHide: c, onCompose: d, showLogoEntrance: h, finishLogoEntrance: m, showSharingHint: g, onDismissHint: p }) {
  const { formatMessage: _ } = Xe(), S = ai(Xe().locale), T = Vb(e.currentUserRole, "editor"), x = rl(), C = (0, b.useRef)(null), A = (0, b.useRef)(null), M = (0, b.useRef)(!1), N = (0, b.useRef)(!1), [D, R] = (0, b.useState)(!1), [B, H] = (0, b.useState)(!1), { menuRef: q, menuMounted: ee } = Pb(C);
  (0, b.useLayoutEffect)(() => {
    !ee && N.current && (N.current = !1, c());
  }, [ee, c]);
  const F = (0, b.useRef)(null), U = (0, b.useCallback)((re) => {
    F.current = re, q(re);
  }, [q]), Y = () => {
    _t("toolbar_share_clicked"), M.current = !0, R(B), H(!1), e.openSharing(A.current);
  };
  function oe(re, V) {
    re === "edit" && !T || (_t(re === "edit" ? "toolbar_edit_clicked" : "toolbar_remix_clicked"), M.current = !0, R(B && !a), H(!1), d(re, V));
  }
  const ue = /* @__PURE__ */ (0, y.jsx)("span", {
    className: ze(De.LauncherLogo, vt.Logo),
    "data-entering": h ? "" : void 0,
    children: /* @__PURE__ */ (0, y.jsx)(Kd, {
      src: Yd,
      alt: "OpenAI",
      width: 18,
      height: 18,
      onAnimationEnd: m
    })
  });
  return /* @__PURE__ */ (0, y.jsxs)(hs, {
    open: B,
    onOpenChange: (re) => {
      re && !B && (R(!1), M.current = !1, _t("toolbar_menu_opened")), H(re);
    },
    children: [/* @__PURE__ */ (0, y.jsx)(ph, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsxs)("div", {
        ref: C,
        className: ze(vt.Launcher, a && sn.Launcher),
        "data-mobile": a ? "" : void 0,
        "data-toolbar-menu-mounted": ee ? "" : void 0,
        "data-menu-open": B || D || N.current ? "" : void 0,
        inert: B,
        role: "toolbar",
        "aria-label": _(ie.label),
        ...u,
        onDragStart: (re) => re.preventDefault(),
        children: [
          ue,
          /* @__PURE__ */ (0, y.jsx)("span", {
            className: vt.Divider,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ (0, y.jsx)(u8, {
            toolbar: e,
            showSharingHint: g && !B && !D,
            corner: l,
            onDismissHint: p,
            buttonRef: (re) => {
              A.current = re, r(re);
            },
            ariaKeyshortcuts: u && !a ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
            onClick: Y
          }),
          /* @__PURE__ */ (0, y.jsx)("span", {
            className: vt.Divider,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ (0, y.jsx)(gh, {
            asChild: !0,
            children: /* @__PURE__ */ (0, y.jsx)(wt, {
              variant: "ghost",
              color: "secondary",
              pill: !0,
              uniform: !0,
              className: ze(vt.Ghost, vt.More),
              "aria-label": _(ie.menu),
              children: /* @__PURE__ */ (0, y.jsx)(Ib, {})
            })
          })
        ]
      })
    }), !D && !N.current && /* @__PURE__ */ (0, y.jsx)(ms, {
      container: x,
      children: /* @__PURE__ */ (0, y.jsx)(vs, {
        ref: U,
        className: ze(De.Widget, sn.Menu, vt.Menu),
        "data-mobile": a ? "" : void 0,
        side: l.startsWith("top") ? "bottom" : "top",
        align: o8(l, S),
        sideOffset: -36,
        collisionPadding: 16,
        updatePositionStrategy: "always",
        inert: !B,
        onOpenAutoFocus: (re) => {
          re.preventDefault(), re.target instanceof HTMLElement && (a ? re.target : re.target.querySelector("a, button"))?.focus({ preventScroll: !0 });
        },
        onCloseAutoFocus: (re) => {
          M.current && re.preventDefault(), M.current = !1;
        },
        "aria-label": _(ie.menu),
        children: /* @__PURE__ */ (0, y.jsx)("div", {
          className: ze(sn.Actions, vt.MenuActions),
          children: /* @__PURE__ */ (0, y.jsx)(l8, {
            toolbar: e,
            onHide: () => {
              M.current = !0, N.current = !0, H(!1);
            },
            onCompose: (re) => {
              const V = F.current?.getBoundingClientRect().width;
              V !== void 0 && oe(re, V);
            }
          })
        })
      })
    })]
  });
}
function u8({ toolbar: e, buttonRef: a, onClick: r, ariaKeyshortcuts: l, showSharingHint: u, corner: c, onDismissHint: d }) {
  const h = r8[e.summary.icon], m = /* @__PURE__ */ (0, y.jsxs)(wt, {
    variant: "ghost",
    color: "secondary",
    pill: !0,
    ref: a,
    className: ze(vt.Ghost, vt.Shortcut),
    type: "button",
    "data-toolbar-sharing-trigger": "",
    "aria-haspopup": "dialog",
    "aria-keyshortcuts": l,
    onClick: r,
    children: [/* @__PURE__ */ (0, y.jsx)(h, {
      "aria-hidden": "true",
      focusable: "false"
    }), /* @__PURE__ */ (0, y.jsx)("span", {
      className: vt.Label,
      children: e.summary.label
    })]
  });
  return e.currentUserRole === "viewer" ? m : /* @__PURE__ */ (0, y.jsx)(i8, {
    summary: e.summary,
    enabled: u,
    anchor: c,
    onDismiss: d,
    children: m
  });
}
var s8 = "_Widget_lanvw_1", c8 = "_CloseButton_lanvw_7", Ng = {
  Widget: s8,
  CloseButton: c8
};
function f8({ toolbar: e, config: a, accountId: r, chatgptOrigin: l, projectId: u, siteTitle: c }) {
  const d = Xe(), h = rl(), m = Ub(), [g] = (0, b.useState)(() => Hb({
    reducedMotion: m,
    initiallyHidden: a.hidden
  })), { state: p, showLogoEntrance: _, actions: S } = es(g), T = p.view === "hidden" || p.view === "dismissed";
  (0, b.useEffect)(() => {
    (m || e.sharingOpen) && S.finishLogoEntrance();
  }, [
    S,
    m,
    e.sharingOpen
  ]);
  const [x] = (0, b.useState)(Wd), C = (0, b.useRef)(!1), A = Zb(() => {
  }, (N) => {
    N.target instanceof Element && N.target.closest("button, a")?.click();
  });
  (0, b.useEffect)(() => {
    T || C.current || (C.current = !0, _t("toolbar_shown"));
  }, [T]);
  function M(N) {
    const D = bs({
      accountId: r,
      chatgptOrigin: l,
      query: d.formatMessage(N === "remix" ? ie.remixOpenPrompt : $e.invitationBannerEditPrompt, { site: Ur(c, u) }),
      editContext: N === "edit" ? a.edit_context : void 0
    });
    window.open(D.toString(), "_blank", "noopener,noreferrer"), _t(N === "edit" ? "toolbar_edit_submitted" : "toolbar_remix_submitted");
  }
  return T ? null : (0, Pr.createPortal)(/* @__PURE__ */ (0, y.jsx)("div", {
    ref: A.ref,
    className: ze(De.Widget, sn.Widget, Ng.Widget),
    style: A.style,
    "data-corner": A.anchor,
    "data-mobile-widget-dragging": A.dragging ? "" : void 0,
    "data-mobile-widget-snapping": A.snapping ? "" : void 0,
    dir: ai(d.locale),
    lang: d.locale,
    children: /* @__PURE__ */ (0, y.jsx)(Fo, {
      as: "div",
      className: De.WidgetEntrance,
      disableAnimations: m,
      enterDuration: 180,
      preventInitialTransition: !1,
      children: /* @__PURE__ */ (0, y.jsx)("div", { children: e.sharingOpen ? /* @__PURE__ */ (0, y.jsxs)(wt, {
        variant: "ghost",
        color: "secondary",
        pill: !0,
        className: Ng.CloseButton,
        "data-toolbar-sharing-close": !0,
        onClick: e.closeSharing,
        children: [/* @__PURE__ */ (0, y.jsx)(ti, { "aria-hidden": "true" }), d.formatMessage(ie.close)]
      }) : /* @__PURE__ */ (0, y.jsx)(Wb, {
        mobileLayout: !0,
        toolbar: e,
        launcherRef: () => {
        },
        corner: A.anchor,
        dragHandlers: A.dragHandlers,
        showLogoEntrance: _,
        finishLogoEntrance: S.finishLogoEntrance,
        showSharingHint: !1,
        onDismissHint: () => {
        },
        onCompose: M,
        onHide: () => {
          S.dismiss(), x(!0), _t("toolbar_hidden");
        }
      }) }, "mobile-toolbar")
    })
  }), h ?? document.body);
}
var d8 = "_RemixTooltip_6yzd8_1", h8 = "_remixTooltipFadeIn_6yzd8_1", m8 = "_CloseButton_6yzd8_68", Dg = {
  RemixTooltip: d8,
  remixTooltipFadeIn: h8,
  CloseButton: m8
}, td = {
  remixTooltipTitle: {
    id: "sites.dispatch.widget.toolbar.remix_tooltip.title",
    defaultMessage: "Remix this site",
    description: "Title of a one-time tooltip above the published Site's remix composer."
  },
  remixTooltipBody: {
    id: "sites.dispatch.widget.toolbar.remix_tooltip.body",
    defaultMessage: "Describe your changes, then continue in ChatGPT to create your own version.",
    description: "Instructions shown to someone opening the remix composer on a published Site for the first time. Remixing creates a personal version of the Site."
  },
  remixTooltipClose: {
    id: "sites.dispatch.widget.toolbar.remix_tooltip.close",
    defaultMessage: "Dismiss remix tooltip",
    description: "Accessible label for the close button on the one-time Site remix tooltip. The remix composer stays open."
  }
};
function v8({ onDismiss: e }) {
  const a = Xe();
  return /* @__PURE__ */ (0, y.jsxs)("aside", {
    className: Dg.RemixTooltip,
    children: [/* @__PURE__ */ (0, y.jsxs)("div", {
      role: "status",
      children: [/* @__PURE__ */ (0, y.jsx)("strong", { children: /* @__PURE__ */ (0, y.jsx)(Wa, { ...td.remixTooltipTitle }) }), /* @__PURE__ */ (0, y.jsx)("p", { children: /* @__PURE__ */ (0, y.jsx)(Wa, { ...td.remixTooltipBody }) })]
    }), /* @__PURE__ */ (0, y.jsx)(wt, {
      className: Dg.CloseButton,
      variant: "ghost",
      uniform: !0,
      "aria-label": a.formatMessage(td.remixTooltipClose),
      onClick: e,
      children: /* @__PURE__ */ (0, y.jsx)(ti, { "aria-hidden": "true" })
    })]
  });
}
var nd = "cubic-bezier(0.2, 1.25, 0.3, 1)", zg = 360, Lg = 280, p8 = 1e3, g8 = 180, y8 = 100, b8 = 200, _8 = 80, w8 = 140, S8 = 120, Hg = 0, jg = 160, ad = 290, Eh = 12, Bg = Eh + 4, Ug = 8, E8 = 280, T8 = 52, C8 = -8, A8 = -12;
function x8(e) {
  return e.key === "Escape" && !e.defaultPrevented && !e.repeat && !e.isComposing && e.keyCode !== 229;
}
function O8(e) {
  return !(e.defaultPrevented || e.repeat || e.isComposing || e.code !== "KeyM" || !e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.getModifierState("AltGraph") || document.designMode === "on" || e.composedPath().some((a) => a instanceof HTMLElement && (a.isContentEditable || a.matches('input, textarea, select, [role="textbox"], [role="searchbox"], [role="combobox"], [role="spinbutton"]'))));
}
function Qb(e) {
  return Qd() ? e.toolbar ? /* @__PURE__ */ (0, y.jsx)(f8, {
    ...e,
    toolbar: e.toolbar
  }) : /* @__PURE__ */ (0, y.jsx)(Ix, { ...e }) : /* @__PURE__ */ (0, y.jsx)(R8, { ...e });
}
function M8({ toolbar: e, opensChatGPT: a, suppressTooltip: r, disabled: l, tooltipSide: u }) {
  const c = Xe().formatMessage(a ? ie.openChatGPT : $e.editorWidgetSendAction), d = /* @__PURE__ */ (0, y.jsx)(wt, {
    className: De.SendButton,
    color: "primary",
    variant: "solid",
    size: "lg",
    iconSize: "lg",
    pill: !0,
    uniform: !0,
    type: "submit",
    onMouseDown: (h) => {
      h.button === 0 && h.preventDefault();
    },
    "aria-label": c,
    disabled: l,
    children: /* @__PURE__ */ (0, y.jsx)(Nx, {
      className: e ? De.ComposerArrow : void 0,
      "data-open": a ? "" : void 0,
      "aria-hidden": "true",
      focusable: "false"
    })
  });
  return e ? /* @__PURE__ */ (0, y.jsx)(Hn, {
    content: a && !r ? c : null,
    contentClassName: ze(Pt.Tooltip, De.ComposerTooltip),
    side: u,
    sideOffset: Eh + Ug,
    align: "end",
    alignOffset: -Ug,
    children: d
  }) : d;
}
function R8({ config: e, accountId: a, chatgptOrigin: r, projectId: l, siteTitle: u, toolbar: c }) {
  const d = Xe(), h = (0, b.useRef)(null), m = (0, b.useRef)(null), g = (0, b.useRef)(null), p = (0, b.useRef)(!1), _ = (0, b.useRef)(!1), S = Ub(), T = Rx(), [x] = (0, b.useState)(() => Hb({
    reducedMotion: S,
    initiallyHidden: e.hidden
  })), [C] = (0, b.useState)(Wd), { state: A, composerMode: M, actions: N, corner: D, hasInteracted: R, showHideHint: B, showLogoEntrance: H } = es(x), q = D === "bottom-center" ? "center" : D.endsWith("left") ? "start" : "end", [ee, F] = (0, b.useState)(), U = A.view === "composer", Y = !!c, oe = (0, b.useRef)(!1), [ue, re] = (0, b.useState)(!1), V = U && ue, P = (0, b.useCallback)(() => {
    re(!1), h.current?.focus({ preventScroll: !0 });
  }, []);
  (0, b.useLayoutEffect)(() => {
    if (!Y || U || S) return;
    const me = m.current?.querySelector(`.${De.ShellLayout}`), Et = me?.querySelector(`.${De.Composer}`);
    if (!me || !Et) return;
    const Lt = Et.getBoundingClientRect().height, Ht = getComputedStyle(me).minHeight;
    me.style.height = Ht;
    const $r = me.animate([{ height: `${Lt}px` }, { height: Ht }], {
      delay: Hg,
      duration: jg,
      easing: "ease-in-out",
      fill: "backwards"
    });
    return () => {
      $r.cancel(), me.style.height = "";
    };
  }, [
    U,
    Y,
    S
  ]);
  const E = U && !c ? y8 : 0, I = U ? zg : Lg, ae = A.view === "hiding", le = ae || A.view === "hidden", Ee = A.view !== "handoff" && A.view !== "dismissed" && (T || !le), z = T && le, W = !T || R, ne = hx(z, A.view === "hidden", S, B), ce = z && A.view === "hidden" && !ne.hintDismissed && (ne.hoverHintVisible || B && !ne.quiet && ne.phase !== "away"), { widgetRef: _e, contentRef: be, style: Ae, dragging: Ve, dragHandlers: ke, snapping: Ke, shadowStyle: nt } = Cx({
    corner: D,
    onCornerChange: N.setCorner,
    onInteract: N.markInteracted,
    preserveChildClickTargets: !!c,
    enableMomentum: !!c
  }), zt = A.view === "handoff" ? "" : A.draft, Pn = !!c && !zt.trim(), Kt = Md({
    accountId: a,
    projectId: l,
    browserUrl: window.location.href,
    chatgptOrigin: r,
    query: d.formatMessage($e.editorWidgetDefaultEditPrompt, { site: Ur(u, l) }),
    isDefaultPrompt: !0,
    editContext: e.edit_context
  });
  (0, b.useEffect)(() => {
    ce && N.markHideHintSeen();
  }, [ce, N]), (0, b.useEffect)(() => {
    !Ee || le || _.current || (_.current = !0, _t(c ? "toolbar_shown" : "editor_widget_shown"));
  }, [
    Ee,
    le,
    c
  ]), (0, b.useEffect)(() => {
    if (A.view !== "handoff") return;
    const me = window.setTimeout(N.finishHandoff, p8);
    return () => window.clearTimeout(me);
  }, [A.view, N]);
  const dn = (0, b.useCallback)(() => {
    const me = g.current;
    !p.current || !me || me.closest("[inert]") || (p.current = !1, me.focus({ preventScroll: !0 }));
  }, []), Zn = (0, b.useCallback)((me) => {
    g.current = me, dn();
  }, [dn]);
  (0, b.useLayoutEffect)(() => {
    S && (ae && N.finishHide(), N.finishLogoEntrance());
  }, [
    ae,
    S,
    N
  ]), (0, b.useEffect)(() => {
    A.view === "launcher" && dn();
  }, [A.view, dn]);
  const hn = (0, b.useCallback)(() => {
    p.current = !0, N.restoreHidden(), C(!1), _t(c ? "toolbar_restored" : "editor_widget_restored");
  }, [
    N,
    C,
    c
  ]);
  (0, b.useEffect)(() => {
    if (!z) return;
    function me(Et) {
      O8(Et) && (Et.preventDefault(), hn());
    }
    return window.addEventListener("keydown", me), () => window.removeEventListener("keydown", me);
  }, [z, hn]);
  function Ca(me) {
    V || me.relatedTarget instanceof Node && me.currentTarget.contains(me.relatedTarget) || N.collapse();
  }
  function ta(me) {
    if (!(!U || !x8(me.nativeEvent))) {
      if (me.preventDefault(), me.stopPropagation(), V) {
        P();
        return;
      }
      p.current = !0, N.collapse();
    }
  }
  function In() {
    C(!0), T ? N.hide() : N.dismiss(), _t(c ? "toolbar_hidden" : "editor_widget_hidden");
  }
  function na(me) {
    me.preventDefault();
    const Et = N.beginHandoff({ allowEmpty: !!c });
    if (Et === null) return;
    _t(c ? M === "remix" ? "toolbar_remix_submitted" : "toolbar_edit_submitted" : "editor_widget_edit_request_submitted");
    const Lt = Ui(Et.trim());
    Lt.searchParams.set("site_edit_source", "widget");
    try {
      window.open(Lt.toString(), "_blank", "noopener,noreferrer");
    } catch {
    }
  }
  function Ui(me) {
    const Et = Ur(u, l), Lt = d.formatMessage($e.invitationBannerEditPrompt, { site: Et });
    if (c && !me) {
      const Ht = M === "remix";
      return bs({
        accountId: a,
        chatgptOrigin: r,
        query: Ht ? d.formatMessage(ie.remixOpenPrompt, { site: Et }) : Lt,
        editContext: Ht ? void 0 : e.edit_context
      });
    }
    if (c && M === "remix") {
      const Ht = new URL(c.remixUrl);
      return Ht.searchParams.set("prompt", `${Ht.searchParams.get("prompt")}

${me}`), Ht;
    }
    return Md({
      accountId: a,
      projectId: l,
      browserUrl: window.location.href,
      chatgptOrigin: r,
      query: `${Lt}

${me}`,
      editContext: e.edit_context
    });
  }
  function Gr() {
    return !U && c ? Hg + jg : U ? c ? 0 : b8 : _8;
  }
  function St() {
    return U ? /* @__PURE__ */ (0, y.jsxs)("form", {
      className: De.Composer,
      onSubmit: na,
      children: [/* @__PURE__ */ (0, y.jsx)(U3, {
        textareaRef: h,
        className: De.Textarea,
        autoFocus: !0,
        "aria-label": d.formatMessage(c && M === "remix" ? ie.remixComposerPlaceholder : $e.editorWidgetComposerLabel),
        placeholder: d.formatMessage(c && M === "remix" ? ie.remixComposerPlaceholder : $e.editorWidgetComposerPlaceholder),
        value: zt,
        onKeyDown: (me) => {
          me.stopPropagation(), ta(me);
        },
        onKeyUp: (me) => me.stopPropagation(),
        onKeyPress: (me) => me.stopPropagation(),
        onChange: (me) => N.changeDraft(me.target.value)
      }), /* @__PURE__ */ (0, y.jsx)("div", {
        className: De.ComposerFooter,
        children: /* @__PURE__ */ (0, y.jsx)(M8, {
          toolbar: Y,
          opensChatGPT: Pn,
          suppressTooltip: V,
          disabled: !c && !zt.trim(),
          tooltipSide: D.startsWith("top") ? "bottom" : "top"
        })
      })]
    }, "composer") : c?.sharingOpen ? /* @__PURE__ */ (0, y.jsxs)("button", {
      "data-toolbar-sharing-close": !0,
      ref: Zn,
      className: ze(De.Launcher, De.SharingClose),
      onClick: c.closeSharing,
      children: [/* @__PURE__ */ (0, y.jsx)(ti, { "aria-hidden": "true" }), d.formatMessage(ie.close)]
    }, "sharing-close") : c ? /* @__PURE__ */ (0, y.jsx)(Wb, {
      toolbar: c,
      launcherRef: Zn,
      corner: D,
      showSharingHint: !R && !le && !Ve,
      onDismissHint: N.markInteracted,
      dragHandlers: T ? ke : void 0,
      onHide: In,
      onCompose: (me, Et) => {
        F(Math.max(Et, 200));
        const Lt = me === "remix" && e.remix_tooltip_hidden === !1 && !oe.current;
        re(Lt), N.open(me), Lt && (oe.current = !0, v3());
      },
      showLogoEntrance: H,
      finishLogoEntrance: N.finishLogoEntrance
    }, "launcher") : /* @__PURE__ */ (0, y.jsxs)("div", {
      className: De.LauncherRow,
      children: [/* @__PURE__ */ (0, y.jsx)(Hn, {
        contentClassName: Pt.Tooltip,
        maxWidth: ad,
        content: W ? null : d.formatMessage($e.editorWidgetOpenAction),
        sideOffset: Bg,
        children: /* @__PURE__ */ (0, y.jsx)(ny, {
          className: De.LogoButton,
          href: Kt.toString(),
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => _t("editor_widget_open_in_chatgpt_clicked"),
          variant: "ghost",
          size: "lg",
          pill: !0,
          uniform: !0,
          "aria-label": d.formatMessage($e.editorWidgetOpenAction),
          children: /* @__PURE__ */ (0, y.jsx)("span", {
            className: De.LauncherLogo,
            "data-entering": H ? "" : void 0,
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, y.jsx)(Kd, {
              src: Yd,
              alt: "",
              width: 18,
              height: 18,
              onAnimationEnd: N.finishLogoEntrance
            })
          })
        })
      }), /* @__PURE__ */ (0, y.jsx)(Hn, {
        contentClassName: Pt.Tooltip,
        maxWidth: ad,
        content: W || Ve ? null : d.formatMessage($e.editorWidgetLaunchTooltip),
        sideOffset: Eh,
        children: /* @__PURE__ */ (0, y.jsx)("button", {
          ref: Zn,
          className: De.Launcher,
          type: "button",
          "aria-expanded": "false",
          "aria-keyshortcuts": T ? "ArrowUp ArrowDown ArrowLeft ArrowRight" : void 0,
          ...T ? ke : {},
          "aria-label": d.formatMessage($e.editorWidgetLaunchAction),
          onClick: () => {
            N.open(), _t("editor_widget_composer_opened");
          },
          children: /* @__PURE__ */ (0, y.jsx)("span", {
            className: De.LauncherLabel,
            children: /* @__PURE__ */ (0, y.jsx)(Wa, { ...$e.editorWidgetLaunchAction })
          })
        })
      })]
    }, "launcher");
  }
  return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [Ve && !c && /* @__PURE__ */ (0, y.jsx)("div", {
    className: De.LandingShadow,
    style: nt,
    "aria-hidden": "true"
  }), /* @__PURE__ */ (0, y.jsx)(Fo, {
    as: "div",
    className: De.WidgetExit,
    disableAnimations: S,
    exitDuration: 0,
    onExit: (me) => {
      me.inert = !0;
    },
    onEnter: (me) => {
      me.inert = !1, dn();
    },
    children: Ee && /* @__PURE__ */ (0, y.jsxs)("div", {
      ref: _e,
      className: De.Widget,
      style: Ae,
      "data-dragging": Ve ? "" : void 0,
      "data-snapping": Ke ? "" : void 0,
      "data-corner": D,
      "data-tucked": le ? "" : void 0,
      "data-peek-phase": le ? ne.phase : void 0,
      "data-quiet-tuck": ne.quiet ? "" : void 0,
      dir: ai(d.locale),
      lang: d.locale,
      onBlur: Ca,
      onClickCapture: N.markInteracted,
      onPointerDownCapture: c ? N.markInteracted : void 0,
      onKeyDownCapture: c ? N.markInteracted : void 0,
      onKeyDown: ta,
      children: [/* @__PURE__ */ (0, y.jsx)(Fo, {
        as: "div",
        className: De.WidgetEntrance,
        disableAnimations: S,
        enterDuration: g8,
        preventInitialTransition: le,
        children: /* @__PURE__ */ (0, y.jsx)("div", {
          ref: m,
          className: ze(De.Panel, c && De.ToolbarPanel),
          "data-expanded": U ? "" : void 0,
          children: /* @__PURE__ */ (0, y.jsxs)("div", {
            className: De.Shell,
            onTransitionEnd: (me) => {
              me.target === me.currentTarget && me.propertyName === "transform" && !me.pseudoElement && N.finishHide();
            },
            children: [/* @__PURE__ */ (0, y.jsxs)("div", {
              ref: be,
              className: De.ShellControls,
              inert: le,
              children: [/* @__PURE__ */ (0, y.jsx)(S5, {
                as: "div",
                className: De.ShellLayout,
                disableAnimations: S,
                transitionClassName: De.ShellContent,
                dimension: "width",
                enterFromSize: U ? ee : void 0,
                resizeContents: !!(c && U),
                itemAnchor: q,
                hideOverflow: !0,
                initial: { opacity: 0 },
                enter: {
                  opacity: 1,
                  delay: Gr(),
                  duration: w8
                },
                exit: {
                  opacity: 0,
                  duration: S8
                },
                layoutEnter: {
                  delay: E,
                  duration: zg,
                  timingFunction: nd
                },
                layoutExit: {
                  duration: Lg,
                  timingFunction: nd
                },
                layoutMove: {
                  delay: E,
                  duration: I,
                  timingFunction: nd
                },
                children: St()
              }), !c && /* @__PURE__ */ (0, y.jsx)(Hn, {
                contentClassName: Pt.Tooltip,
                maxWidth: ad,
                content: U || W ? null : d.formatMessage($e.editorWidgetHideAction),
                sideOffset: Bg,
                children: /* @__PURE__ */ (0, y.jsx)(wt, {
                  className: De.LauncherDismissButton,
                  variant: "ghost",
                  size: "lg",
                  pill: !0,
                  uniform: !0,
                  "aria-hidden": U,
                  tabIndex: U ? -1 : 0,
                  "aria-label": d.formatMessage($e.editorWidgetHideAction),
                  onClick: In,
                  children: /* @__PURE__ */ (0, y.jsx)(ti, {
                    "aria-hidden": "true",
                    focusable: "false"
                  })
                })
              })]
            }), V && /* @__PURE__ */ (0, y.jsx)(v8, { onDismiss: P })]
          })
        }, "panel")
      }), z && /* @__PURE__ */ (0, y.jsx)(Hn, {
        contentClassName: ze(Pt.Tooltip, Pt.HideHint),
        forceOpen: ce,
        onDismiss: ne.dismissHint,
        interactive: !0,
        ...ne.hintHandlers,
        side: D.startsWith("top") ? "bottom" : "top",
        align: q,
        alignOffset: D === "bottom-center" ? 0 : T8,
        sideOffset: D.startsWith("top") ? C8 : A8,
        maxWidth: E8,
        content: /* @__PURE__ */ (0, y.jsxs)("span", {
          className: Pt.HideHintContent,
          children: [/* @__PURE__ */ (0, y.jsx)("span", {
            className: Pt.HideHintText,
            children: /* @__PURE__ */ (0, y.jsx)(Wa, { ...D === "bottom-center" ? $e.editorWidgetHideHintBottomCenter : $e.editorWidgetHideHint })
          }), /* @__PURE__ */ (0, y.jsxs)("span", {
            className: Pt.Shortcut,
            children: [/* @__PURE__ */ (0, y.jsx)("kbd", { children: j3() ? "⌥" : "Alt" }), /* @__PURE__ */ (0, y.jsx)("kbd", { children: "M" })]
          })]
        }),
        children: /* @__PURE__ */ (0, y.jsx)("button", {
          className: De.CornerTarget,
          type: "button",
          "aria-label": d.formatMessage($e.editorWidgetRestoreAction),
          "aria-keyshortcuts": "Alt+M",
          ...ne.targetHandlers,
          onClick: hn
        })
      })]
    }, "widget")
  })] });
}
var N8 = "_Banner_1iivt_1", D8 = "_Content_1iivt_34", z8 = "_Message_1iivt_42", L8 = "_OwnerName_1iivt_50", H8 = "_Actions_1iivt_54", j8 = "_EditLink_1iivt_62", B8 = "_DismissButton_1iivt_63", Oi = {
  Banner: N8,
  Content: D8,
  Message: z8,
  OwnerName: L8,
  Actions: H8,
  EditLink: j8,
  DismissButton: B8
}, U8 = "/_internal/sites_widget/invitation-banner/dismiss";
function kg(e) {
  const a = e.currentTarget, r = a.offsetWidth;
  let l = 0.985;
  r <= 80 ? l = 0.96 : r <= 150 ? l = 0.97 : r <= 220 ? l = 0.98 : r > 600 && (l = 0.995), a.style.setProperty("--scale", l.toString());
}
function k8({ editContext: e, accountId: a, chatgptOrigin: r, ownerName: l, projectId: u, siteTitle: c, onDismiss: d }) {
  const h = Xe();
  (0, b.useEffect)(() => {
    _t("editor_invite_banner_shown");
  }, []);
  const m = Md({
    editContext: e,
    accountId: a,
    projectId: u,
    browserUrl: window.location.href,
    chatgptOrigin: r,
    query: h.formatMessage($e.invitationBannerEditPrompt, { site: Ur(c, u) }),
    isDefaultPrompt: !0
  });
  function g() {
    _t("editor_invite_banner_dismissed"), d(), fetch(U8, {
      method: "POST",
      credentials: "same-origin"
    }).catch(() => {
    });
  }
  function p(_) {
    _t("editor_invite_banner_edit_with_chat_clicked");
    const S = new URL(_.currentTarget.href);
    S.searchParams.has("browser_url") && S.searchParams.set("browser_url", window.location.href), _.currentTarget.href = S.toString();
  }
  return /* @__PURE__ */ (0, y.jsx)("aside", {
    className: Oi.Banner,
    "aria-label": h.formatMessage($e.invitationBannerLabel),
    dir: ai(h.locale),
    lang: h.locale,
    children: /* @__PURE__ */ (0, y.jsxs)("div", {
      className: Oi.Content,
      children: [/* @__PURE__ */ (0, y.jsx)("div", {
        className: Oi.Message,
        children: l ? /* @__PURE__ */ (0, y.jsx)(Wa, {
          ...$e.invitationBannerMessageWithOwner,
          values: {
            ownerName: l,
            strong: (_) => /* @__PURE__ */ (0, y.jsx)("strong", {
              className: Oi.OwnerName,
              children: _
            })
          }
        }) : /* @__PURE__ */ (0, y.jsx)(Wa, { ...$e.invitationBannerMessage })
      }), /* @__PURE__ */ (0, y.jsxs)("div", {
        className: Oi.Actions,
        children: [/* @__PURE__ */ (0, y.jsxs)("a", {
          className: Oi.EditLink,
          href: m.toString(),
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: p,
          onPointerEnter: kg,
          children: [/* @__PURE__ */ (0, y.jsx)(Sh, {
            "aria-hidden": "true",
            focusable: "false"
          }), /* @__PURE__ */ (0, y.jsx)(Wa, { ...$e.invitationBannerEditAction })]
        }), /* @__PURE__ */ (0, y.jsx)("button", {
          className: Oi.DismissButton,
          type: "button",
          "aria-label": h.formatMessage($e.invitationBannerDismissAction),
          onPointerEnter: kg,
          onClick: g,
          children: /* @__PURE__ */ (0, y.jsx)(ti, {
            "aria-hidden": "true",
            focusable: "false"
          })
        })]
      })]
    })
  });
}
var P8 = "codex-browser-sidebar-comments-root";
function Rd() {
  return document.getElementById(P8) !== null;
}
var Z8 = /* @__PURE__ */ fn(((e) => {
  function a(P, E) {
    var I = P.length;
    P.push(E);
    e: for (; 0 < I; ) {
      var ae = I - 1 >>> 1, le = P[ae];
      if (0 < u(le, E)) P[ae] = E, P[I] = le, I = ae;
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function l(P) {
    if (P.length === 0) return null;
    var E = P[0], I = P.pop();
    if (I !== E) {
      P[0] = I;
      e: for (var ae = 0, le = P.length, Ee = le >>> 1; ae < Ee; ) {
        var z = 2 * (ae + 1) - 1, W = P[z], ne = z + 1, ce = P[ne];
        if (0 > u(W, I)) ne < le && 0 > u(ce, W) ? (P[ae] = ce, P[ne] = I, ae = ne) : (P[ae] = W, P[z] = I, ae = z);
        else if (ne < le && 0 > u(ce, I)) P[ae] = ce, P[ne] = I, ae = ne;
        else break e;
      }
    }
    return E;
  }
  function u(P, E) {
    var I = P.sortIndex - E.sortIndex;
    return I !== 0 ? I : P.id - E.id;
  }
  if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var c = performance;
    e.unstable_now = function() {
      return c.now();
    };
  } else {
    var d = Date, h = d.now();
    e.unstable_now = function() {
      return d.now() - h;
    };
  }
  var m = [], g = [], p = 1, _ = null, S = 3, T = !1, x = !1, C = !1, A = !1, M = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
  function R(P) {
    for (var E = r(g); E !== null; ) {
      if (E.callback === null) l(g);
      else if (E.startTime <= P) l(g), E.sortIndex = E.expirationTime, a(m, E);
      else break;
      E = r(g);
    }
  }
  function B(P) {
    if (C = !1, R(P), !x) if (r(m) !== null) x = !0, H || (H = !0, oe());
    else {
      var E = r(g);
      E !== null && V(B, E.startTime - P);
    }
  }
  var H = !1, q = -1, ee = 5, F = -1;
  function U() {
    return A ? !0 : !(e.unstable_now() - F < ee);
  }
  function Y() {
    if (A = !1, H) {
      var P = e.unstable_now();
      F = P;
      var E = !0;
      try {
        e: {
          x = !1, C && (C = !1, N(q), q = -1), T = !0;
          var I = S;
          try {
            t: {
              for (R(P), _ = r(m); _ !== null && !(_.expirationTime > P && U()); ) {
                var ae = _.callback;
                if (typeof ae == "function") {
                  _.callback = null, S = _.priorityLevel;
                  var le = ae(_.expirationTime <= P);
                  if (P = e.unstable_now(), typeof le == "function") {
                    _.callback = le, R(P), E = !0;
                    break t;
                  }
                  _ === r(m) && l(m), R(P);
                } else l(m);
                _ = r(m);
              }
              if (_ !== null) E = !0;
              else {
                var Ee = r(g);
                Ee !== null && V(B, Ee.startTime - P), E = !1;
              }
            }
            break e;
          } finally {
            _ = null, S = I, T = !1;
          }
          E = void 0;
        }
      } finally {
        E ? oe() : H = !1;
      }
    }
  }
  var oe;
  if (typeof D == "function") oe = function() {
    D(Y);
  };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(), re = ue.port2;
    ue.port1.onmessage = Y, oe = function() {
      re.postMessage(null);
    };
  } else oe = function() {
    M(Y, 0);
  };
  function V(P, E) {
    q = M(function() {
      P(e.unstable_now());
    }, E);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, e.unstable_next = function(P) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var E = 3;
        break;
      default:
        E = S;
    }
    var I = S;
    S = E;
    try {
      return P();
    } finally {
      S = I;
    }
  }, e.unstable_requestPaint = function() {
    A = !0;
  }, e.unstable_runWithPriority = function(P, E) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var I = S;
    S = P;
    try {
      return E();
    } finally {
      S = I;
    }
  }, e.unstable_scheduleCallback = function(P, E, I) {
    var ae = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ae + I : ae) : I = ae, P) {
      case 1:
        var le = -1;
        break;
      case 2:
        le = 250;
        break;
      case 5:
        le = 1073741823;
        break;
      case 4:
        le = 1e4;
        break;
      default:
        le = 5e3;
    }
    return le = I + le, P = {
      id: p++,
      callback: E,
      priorityLevel: P,
      startTime: I,
      expirationTime: le,
      sortIndex: -1
    }, I > ae ? (P.sortIndex = I, a(g, P), r(m) === null && P === r(g) && (C ? (N(q), q = -1) : C = !0, V(B, I - ae))) : (P.sortIndex = le, a(m, P), x || T || (x = !0, H || (H = !0, oe()))), P;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function(P) {
    var E = S;
    return function() {
      var I = S;
      S = E;
      try {
        return P.apply(this, arguments);
      } finally {
        S = I;
      }
    };
  };
})), I8 = /* @__PURE__ */ fn(((e, a) => {
  a.exports = Z8();
})), G8 = /* @__PURE__ */ fn(((e) => {
  var a = I8(), r = jd(), l = ay();
  function u(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    var n = t, i = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do
        n = t, (n.flags & 4098) !== 0 && (i = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? i : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t) throw Error(u(188));
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (n = d(t), n === null) throw Error(u(188));
      return n !== t ? null : t;
    }
    for (var i = t, o = n; ; ) {
      var s = i.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (o = s.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === i) return g(s), t;
          if (f === o) return g(s), n;
          f = f.sibling;
        }
        throw Error(u(188));
      }
      if (i.return !== o.return) i = s, o = f;
      else {
        for (var v = !1, w = s.child; w; ) {
          if (w === i) {
            v = !0, i = s, o = f;
            break;
          }
          if (w === o) {
            v = !0, o = s, i = f;
            break;
          }
          w = w.sibling;
        }
        if (!v) {
          for (w = f.child; w; ) {
            if (w === i) {
              v = !0, i = f, o = s;
              break;
            }
            if (w === o) {
              v = !0, o = f, i = s;
              break;
            }
            w = w.sibling;
          }
          if (!v) throw Error(u(189));
        }
      }
      if (i.alternate !== o) throw Error(u(190));
    }
    if (i.tag !== 3) throw Error(u(188));
    return i.stateNode.current === i ? t : n;
  }
  function _(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (n = _(t), n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, T = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), Y = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), oe = Symbol.iterator;
  function ue(t) {
    return t === null || typeof t != "object" ? null : (t = oe && t[oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function V(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === re ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case A:
        return "Fragment";
      case N:
        return "Profiler";
      case M:
        return "StrictMode";
      case H:
        return "Suspense";
      case q:
        return "SuspenseList";
      case U:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case C:
        return "Portal";
      case R:
        return t.displayName || "Context";
      case D:
        return (t._context.displayName || "Context") + ".Consumer";
      case B:
        var n = t.render;
        return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case ee:
        return n = t.displayName || null, n !== null ? n : V(t.type) || "Memo";
      case F:
        n = t._payload, t = t._init;
        try {
          return V(t(n));
        } catch {
        }
    }
    return null;
  }
  var P = Array.isArray, E = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, le = [], Ee = -1;
  function z(t) {
    return { current: t };
  }
  function W(t) {
    0 > Ee || (t.current = le[Ee], le[Ee] = null, Ee--);
  }
  function ne(t, n) {
    Ee++, le[Ee] = t.current, t.current = n;
  }
  var ce = z(null), _e = z(null), be = z(null), Ae = z(null);
  function Ve(t, n) {
    switch (ne(be, n), ne(_e, t), ne(ce, null), n.nodeType) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? kp(t) : 0;
        break;
      default:
        if (t = n.tagName, n = n.namespaceURI) n = kp(n), t = Pp(n, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    W(ce), ne(ce, t);
  }
  function ke() {
    W(ce), W(_e), W(be);
  }
  function Ke(t) {
    t.memoizedState !== null && ne(Ae, t);
    var n = ce.current, i = Pp(n, t.type);
    n !== i && (ne(_e, t), ne(ce, i));
  }
  function nt(t) {
    _e.current === t && (W(ce), W(_e)), Ae.current === t && (W(Ae), Lo._currentValue = ae);
  }
  var zt, Pn;
  function Kt(t) {
    if (zt === void 0) try {
      throw Error();
    } catch (i) {
      var n = i.stack.trim().match(/\n( *(at )?)/);
      zt = n && n[1] || "", Pn = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + zt + t + Pn;
  }
  var dn = !1;
  function Zn(t, n) {
    if (!t || dn) return "";
    dn = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var J = function() {
              throw Error();
            };
            if (Object.defineProperty(J.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(J, []);
              } catch ($) {
                var G = $;
              }
              Reflect.construct(t, [], J);
            } else {
              try {
                J.call();
              } catch ($) {
                G = $;
              }
              t.call(J.prototype);
            }
          } else {
            try {
              throw Error();
            } catch ($) {
              G = $;
            }
            (J = t()) && typeof J.catch == "function" && J.catch(function() {
            });
          }
        } catch ($) {
          if ($ && G && typeof $.stack == "string") return [$.stack, G.stack];
        }
        return [null, null];
      } };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = o.DetermineComponentFrameRoot(), v = f[0], w = f[1];
      if (v && w) {
        var O = v.split(`
`), Z = w.split(`
`);
        for (s = o = 0; o < O.length && !O[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; s < Z.length && !Z[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (o === O.length || s === Z.length) for (o = O.length - 1, s = Z.length - 1; 1 <= o && 0 <= s && O[o] !== Z[s]; ) s--;
        for (; 1 <= o && 0 <= s; o--, s--) if (O[o] !== Z[s]) {
          if (o !== 1 || s !== 1) do
            if (o--, s--, 0 > s || O[o] !== Z[s]) {
              var X = `
` + O[o].replace(" at new ", " at ");
              return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), X;
            }
          while (1 <= o && 0 <= s);
          break;
        }
      }
    } finally {
      dn = !1, Error.prepareStackTrace = i;
    }
    return (i = t ? t.displayName || t.name : "") ? Kt(i) : "";
  }
  function hn(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Kt(t.type);
      case 16:
        return Kt("Lazy");
      case 13:
        return t.child !== n && n !== null ? Kt("Suspense Fallback") : Kt("Suspense");
      case 19:
        return Kt("SuspenseList");
      case 0:
      case 15:
        return Zn(t.type, !1);
      case 11:
        return Zn(t.type.render, !1);
      case 1:
        return Zn(t.type, !0);
      case 31:
        return Kt("Activity");
      default:
        return "";
    }
  }
  function Ca(t) {
    try {
      var n = "", i = null;
      do
        n += hn(t, i), i = t, t = t.return;
      while (t);
      return n;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var ta = Object.prototype.hasOwnProperty, In = a.unstable_scheduleCallback, na = a.unstable_cancelCallback, Ui = a.unstable_shouldYield, Gr = a.unstable_requestPaint, St = a.unstable_now, me = a.unstable_getCurrentPriorityLevel, Et = a.unstable_ImmediatePriority, Lt = a.unstable_UserBlockingPriority, Ht = a.unstable_NormalPriority, $r = a.unstable_LowPriority, ol = a.unstable_IdlePriority, ll = a.log, ws = a.unstable_setDisableYieldValue, li = null, Bt = null;
  function Mn(t) {
    if (typeof ll == "function" && ws(t), Bt && typeof Bt.setStrictMode == "function") try {
      Bt.setStrictMode(li, t);
    } catch {
    }
  }
  var te = Math.clz32 ? Math.clz32 : Tt, ye = Math.log, qe = Math.LN2;
  function Tt(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ye(t) / qe | 0) | 0;
  }
  var st = 256, gt = 262144, ct = 4194304;
  function yt(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Jt(t, n, i) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var s = 0, f = t.suspendedLanes, v = t.pingedLanes;
    t = t.warmLanes;
    var w = o & 134217727;
    return w !== 0 ? (o = w & ~f, o !== 0 ? s = yt(o) : (v &= w, v !== 0 ? s = yt(v) : i || (i = w & ~t, i !== 0 && (s = yt(i))))) : (w = o & ~f, w !== 0 ? s = yt(w) : v !== 0 ? s = yt(v) : i || (i = o & ~t, i !== 0 && (s = yt(i)))), s === 0 ? 0 : n !== 0 && n !== s && (n & f) === 0 && (f = s & -s, i = n & -n, f >= i || f === 32 && (i & 4194048) !== 0) ? n : s;
  }
  function Aa(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Ss(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ul() {
    var t = ct;
    return ct <<= 1, (ct & 62914560) === 0 && (ct = 4194304), t;
  }
  function Vr(t) {
    for (var n = [], i = 0; 31 > i; i++) n.push(t);
    return n;
  }
  function ki(t, n) {
    t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Es(t, n, i, o, s, f) {
    var v = t.pendingLanes;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
    var w = t.entanglements, O = t.expirationTimes, Z = t.hiddenUpdates;
    for (i = v & ~i; 0 < i; ) {
      var X = 31 - te(i), J = 1 << X;
      w[X] = 0, O[X] = -1;
      var G = Z[X];
      if (G !== null) for (Z[X] = null, X = 0; X < G.length; X++) {
        var $ = G[X];
        $ !== null && ($.lane &= -536870913);
      }
      i &= ~J;
    }
    o !== 0 && Fr(t, o, 0), f !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(v & ~n));
  }
  function Fr(t, n, i) {
    t.pendingLanes |= n, t.suspendedLanes &= ~n;
    var o = 31 - te(n);
    t.entangledLanes |= n, t.entanglements[o] = t.entanglements[o] | 1073741824 | i & 261930;
  }
  function sl(t, n) {
    var i = t.entangledLanes |= n;
    for (t = t.entanglements; i; ) {
      var o = 31 - te(i), s = 1 << o;
      s & n | t[o] & n && (t[o] |= n), i &= ~s;
    }
  }
  function Th(t, n) {
    var i = n & -n;
    return i = (i & 42) !== 0 ? 1 : Ch(i), (i & (t.suspendedLanes | n)) !== 0 ? 0 : i;
  }
  function Ch(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ts(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ah() {
    var t = I.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : l0(t.type));
  }
  function xh(t, n) {
    var i = I.p;
    try {
      return I.p = t, n();
    } finally {
      I.p = i;
    }
  }
  var xa = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + xa, It = "__reactProps$" + xa, Xr = "__reactContainer$" + xa, Cs = "__reactEvents$" + xa, l_ = "__reactListeners$" + xa, u_ = "__reactHandles$" + xa, Oh = "__reactResources$" + xa, qr = "__reactMarker$" + xa;
  function As(t) {
    delete t[Ot], delete t[It], delete t[Cs], delete t[l_], delete t[u_];
  }
  function Pi(t) {
    var n = t[Ot];
    if (n) return n;
    for (var i = t.parentNode; i; ) {
      if (n = i[Xr] || i[Ot]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (t = Xp(t); t !== null; ) {
          if (i = t[Ot]) return i;
          t = Xp(t);
        }
        return n;
      }
      t = i, i = t.parentNode;
    }
    return null;
  }
  function Zi(t) {
    if (t = t[Ot] || t[Xr]) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t;
    }
    return null;
  }
  function Yr(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(u(33));
  }
  function Ii(t) {
    var n = t[Oh];
    return n || (n = t[Oh] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), n;
  }
  function Ct(t) {
    t[qr] = !0;
  }
  var Mh = /* @__PURE__ */ new Set(), Rh = {};
  function ui(t, n) {
    Gi(t, n), Gi(t + "Capture", n);
  }
  function Gi(t, n) {
    for (Rh[t] = n, t = 0; t < n.length; t++) Mh.add(n[t]);
  }
  var s_ = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Nh = {}, Dh = {};
  function c_(t) {
    return ta.call(Dh, t) ? !0 : ta.call(Nh, t) ? !1 : s_.test(t) ? Dh[t] = !0 : (Nh[t] = !0, !1);
  }
  function cl(t, n, i) {
    if (c_(n)) if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(n);
          return;
        case "boolean":
          var o = n.toLowerCase().slice(0, 5);
          if (o !== "data-" && o !== "aria-") {
            t.removeAttribute(n);
            return;
          }
      }
      t.setAttribute(n, "" + i);
    }
  }
  function fl(t, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + i);
    }
  }
  function aa(t, n, i, o) {
    if (o === null) t.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(n, i, "" + o);
    }
  }
  function mn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function zh(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function f_(t, n, i) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (!t.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var s = o.get, f = o.set;
      return Object.defineProperty(t, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(v) {
          i = "" + v, f.call(this, v);
        }
      }), Object.defineProperty(t, n, { enumerable: o.enumerable }), {
        getValue: function() {
          return i;
        },
        setValue: function(v) {
          i = "" + v;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[n];
        }
      };
    }
  }
  function xs(t) {
    if (!t._valueTracker) {
      var n = zh(t) ? "checked" : "value";
      t._valueTracker = f_(t, n, "" + t[n]);
    }
  }
  function Lh(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return t && (o = zh(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== i ? (n.setValue(t), !0) : !1;
  }
  function dl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var d_ = /[\n"\\]/g;
  function vn(t) {
    return t.replace(d_, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Os(t, n, i, o, s, f, v, w) {
    t.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.type = v : t.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + mn(n)) : t.value !== "" + mn(n) && (t.value = "" + mn(n)) : v !== "submit" && v !== "reset" || t.removeAttribute("value"), n != null ? Ms(t, v, mn(n)) : i != null ? Ms(t, v, mn(i)) : o != null && t.removeAttribute("value"), s == null && f != null && (t.defaultChecked = !!f), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? t.name = "" + mn(w) : t.removeAttribute("name");
  }
  function Hh(t, n, i, o, s, f, v, w) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f), n != null || i != null) {
      if (!(f !== "submit" && f !== "reset" || n != null)) {
        xs(t);
        return;
      }
      i = i != null ? "" + mn(i) : "", n = n != null ? "" + mn(n) : i, w || n === t.value || (t.value = n), t.defaultValue = n;
    }
    o = o ?? s, o = typeof o != "function" && typeof o != "symbol" && !!o, t.checked = w ? t.checked : !!o, t.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (t.name = v), xs(t);
  }
  function Ms(t, n, i) {
    n === "number" && dl(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function $i(t, n, i, o) {
    if (t = t.options, n) {
      n = {};
      for (var s = 0; s < i.length; s++) n["$" + i[s]] = !0;
      for (i = 0; i < t.length; i++) s = n.hasOwnProperty("$" + t[i].value), t[i].selected !== s && (t[i].selected = s), s && o && (t[i].defaultSelected = !0);
    } else {
      for (i = "" + mn(i), n = null, s = 0; s < t.length; s++) {
        if (t[s].value === i) {
          t[s].selected = !0, o && (t[s].defaultSelected = !0);
          return;
        }
        n !== null || t[s].disabled || (n = t[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jh(t, n, i) {
    if (n != null && (n = "" + mn(n), n !== t.value && (t.value = n), i == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = i != null ? "" + mn(i) : "";
  }
  function Bh(t, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(u(92));
        if (P(o)) {
          if (1 < o.length) throw Error(u(93));
          o = o[0];
        }
        i = o;
      }
      i ??= "", n = i;
    }
    i = mn(n), t.defaultValue = i, o = t.textContent, o === i && o !== "" && o !== null && (t.value = o), xs(t);
  }
  function Vi(t, n) {
    if (n) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var h_ = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Uh(t, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : o ? t.setProperty(n, i) : typeof i != "number" || i === 0 || h_.has(n) ? n === "float" ? t.cssFloat = i : t[n] = ("" + i).trim() : t[n] = i + "px";
  }
  function kh(t, n, i) {
    if (n != null && typeof n != "object") throw Error(u(62));
    if (t = t.style, i != null) {
      for (var o in i) !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
      for (var s in n) o = n[s], n.hasOwnProperty(s) && i[s] !== o && Uh(t, s, o);
    } else for (var f in n) n.hasOwnProperty(f) && Uh(t, f, n[f]);
  }
  function Rs(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var m_ = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), v_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hl(t) {
    return v_.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ia() {
  }
  var Ns = null;
  function Ds(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Fi = null, Xi = null;
  function Ph(t) {
    var n = Zi(t);
    if (n && (t = n.stateNode)) {
      var i = t[It] || null;
      e: switch (t = n.stateNode, n.type) {
        case "input":
          if (Os(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), n = i.name, i.type === "radio" && n != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + vn("" + n) + '"][type="radio"]'), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== t && o.form === t.form) {
                var s = o[It] || null;
                if (!s) throw Error(u(90));
                Os(o, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (n = 0; n < i.length; n++) o = i[n], o.form === t.form && Lh(o);
          }
          break e;
        case "textarea":
          jh(t, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && $i(t, !!i.multiple, n, !1);
      }
    }
  }
  var zs = !1;
  function Zh(t, n, i) {
    if (zs) return t(n, i);
    zs = !0;
    try {
      return t(n);
    } finally {
      if (zs = !1, (Fi !== null || Xi !== null) && (eu(), Fi && (n = Fi, t = Xi, Xi = Fi = null, Ph(n), t)))
        for (n = 0; n < t.length; n++) Ph(t[n]);
    }
  }
  function Wr(t, n) {
    var i = t.stateNode;
    if (i === null) return null;
    var o = i[It] || null;
    if (o === null) return null;
    i = o[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(u(231, n, typeof i));
    return i;
  }
  var ra = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ls = !1;
  if (ra) try {
    var Qr = {};
    Object.defineProperty(Qr, "passive", { get: function() {
      Ls = !0;
    } }), window.addEventListener("test", Qr, Qr), window.removeEventListener("test", Qr, Qr);
  } catch {
    Ls = !1;
  }
  var Oa = null, Hs = null, ml = null;
  function Ih() {
    if (ml) return ml;
    var t, n = Hs, i = n.length, o, s = "value" in Oa ? Oa.value : Oa.textContent, f = s.length;
    for (t = 0; t < i && n[t] === s[t]; t++) ;
    var v = i - t;
    for (o = 1; o <= v && n[i - o] === s[f - o]; o++) ;
    return ml = s.slice(t, 1 < o ? 1 - o : void 0);
  }
  function vl(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function pl() {
    return !0;
  }
  function Gh() {
    return !1;
  }
  function Gt(t) {
    function n(i, o, s, f, v) {
      this._reactName = i, this._targetInst = s, this.type = o, this.nativeEvent = f, this.target = v, this.currentTarget = null;
      for (var w in t) t.hasOwnProperty(w) && (i = t[w], this[w] = i ? i(f) : f[w]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? pl : Gh, this.isPropagationStopped = Gh, this;
    }
    return S(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = pl);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = pl);
      },
      persist: function() {
      },
      isPersistent: pl
    }), n;
  }
  var si = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, gl = Gt(si), Kr = S({}, si, {
    view: 0,
    detail: 0
  }), p_ = Gt(Kr), js, Bs, Jr, yl = S({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ks,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Jr && (Jr && t.type === "mousemove" ? (js = t.screenX - Jr.screenX, Bs = t.screenY - Jr.screenY) : Bs = js = 0, Jr = t), js);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Bs;
    }
  }), $h = Gt(yl), g_ = Gt(S({}, yl, { dataTransfer: 0 })), Us = Gt(S({}, Kr, { relatedTarget: 0 })), y_ = Gt(S({}, si, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), b_ = Gt(S({}, si, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } })), Vh = Gt(S({}, si, { data: 0 })), __ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, w_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, S_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function E_(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = S_[t]) ? !!n[t] : !1;
  }
  function ks() {
    return E_;
  }
  var T_ = Gt(S({}, Kr, {
    key: function(t) {
      if (t.key) {
        var n = __[t.key] || t.key;
        if (n !== "Unidentified") return n;
      }
      return t.type === "keypress" ? (t = vl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? w_[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ks,
    charCode: function(t) {
      return t.type === "keypress" ? vl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? vl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  })), Fh = Gt(S({}, yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), C_ = Gt(S({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ks
  })), A_ = Gt(S({}, si, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), x_ = Gt(S({}, yl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), O_ = Gt(S({}, si, {
    newState: 0,
    oldState: 0
  })), M_ = [
    9,
    13,
    27,
    32
  ], Ps = ra && "CompositionEvent" in window, eo = null;
  ra && "documentMode" in document && (eo = document.documentMode);
  var R_ = ra && "TextEvent" in window && !eo, Xh = ra && (!Ps || eo && 8 < eo && 11 >= eo), qh = " ", Yh = !1;
  function Wh(t, n) {
    switch (t) {
      case "keyup":
        return M_.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var qi = !1;
  function N_(t, n) {
    switch (t) {
      case "compositionend":
        return Qh(n);
      case "keypress":
        return n.which !== 32 ? null : (Yh = !0, qh);
      case "textInput":
        return t = n.data, t === qh && Yh ? null : t;
      default:
        return null;
    }
  }
  function D_(t, n) {
    if (qi) return t === "compositionend" || !Ps && Wh(t, n) ? (t = Ih(), ml = Hs = Oa = null, qi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Xh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var z_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Kh(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!z_[t.type] : n === "textarea";
  }
  function Jh(t, n, i, o) {
    Fi ? Xi ? Xi.push(o) : Xi = [o] : Fi = o, n = lu(n, "onChange"), 0 < n.length && (i = new gl("onChange", "change", null, i, o), t.push({
      event: i,
      listeners: n
    }));
  }
  var to = null, no = null;
  function L_(t) {
    Dp(t, 0);
  }
  function bl(t) {
    if (Lh(Yr(t))) return t;
  }
  function em(t, n) {
    if (t === "change") return n;
  }
  var tm = !1;
  if (ra) {
    var Zs;
    if (ra) {
      var Is = "oninput" in document;
      if (!Is) {
        var nm = document.createElement("div");
        nm.setAttribute("oninput", "return;"), Is = typeof nm.oninput == "function";
      }
      Zs = Is;
    } else Zs = !1;
    tm = Zs && (!document.documentMode || 9 < document.documentMode);
  }
  function am() {
    to && (to.detachEvent("onpropertychange", im), no = to = null);
  }
  function im(t) {
    if (t.propertyName === "value" && bl(no)) {
      var n = [];
      Jh(n, no, t, Ds(t)), Zh(L_, n);
    }
  }
  function H_(t, n, i) {
    t === "focusin" ? (am(), to = n, no = i, to.attachEvent("onpropertychange", im)) : t === "focusout" && am();
  }
  function j_(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return bl(no);
  }
  function B_(t, n) {
    if (t === "click") return bl(n);
  }
  function U_(t, n) {
    if (t === "input" || t === "change") return bl(n);
  }
  function k_(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var en = typeof Object.is == "function" ? Object.is : k_;
  function ao(t, n) {
    if (en(t, n)) return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
    var i = Object.keys(t), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var s = i[o];
      if (!ta.call(n, s) || !en(t[s], n[s])) return !1;
    }
    return !0;
  }
  function rm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function om(t, n) {
    var i = rm(t);
    t = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = t + i.textContent.length, t <= n && o >= n) return {
          node: i,
          offset: n - t
        };
        t = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = rm(i);
    }
  }
  function lm(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? lm(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function um(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = dl(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) t = n.contentWindow;
      else break;
      n = dl(t.document);
    }
    return n;
  }
  function Gs(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  var P_ = ra && "documentMode" in document && 11 >= document.documentMode, Yi = null, $s = null, io = null, Vs = !1;
  function sm(t, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Vs || Yi == null || Yi !== dl(o) || (o = Yi, "selectionStart" in o && Gs(o) ? o = {
      start: o.selectionStart,
      end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), io && ao(io, o) || (io = o, o = lu($s, "onSelect"), 0 < o.length && (n = new gl("onSelect", "select", null, n, i), t.push({
      event: n,
      listeners: o
    }), n.target = Yi)));
  }
  function ci(t, n) {
    var i = {};
    return i[t.toLowerCase()] = n.toLowerCase(), i["Webkit" + t] = "webkit" + n, i["Moz" + t] = "moz" + n, i;
  }
  var Wi = {
    animationend: ci("Animation", "AnimationEnd"),
    animationiteration: ci("Animation", "AnimationIteration"),
    animationstart: ci("Animation", "AnimationStart"),
    transitionrun: ci("Transition", "TransitionRun"),
    transitionstart: ci("Transition", "TransitionStart"),
    transitioncancel: ci("Transition", "TransitionCancel"),
    transitionend: ci("Transition", "TransitionEnd")
  }, Fs = {}, cm = {};
  ra && (cm = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);
  function fi(t) {
    if (Fs[t]) return Fs[t];
    if (!Wi[t]) return t;
    var n = Wi[t], i;
    for (i in n) if (n.hasOwnProperty(i) && i in cm) return Fs[t] = n[i];
    return t;
  }
  var fm = fi("animationend"), dm = fi("animationiteration"), hm = fi("animationstart"), Z_ = fi("transitionrun"), I_ = fi("transitionstart"), G_ = fi("transitioncancel"), mm = fi("transitionend"), vm = /* @__PURE__ */ new Map(), Xs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Xs.push("scrollEnd");
  function Rn(t, n) {
    vm.set(t, n), ui(n, [t]);
  }
  var _l = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, pn = [], Qi = 0, qs = 0;
  function wl() {
    for (var t = Qi, n = qs = Qi = 0; n < t; ) {
      var i = pn[n];
      pn[n++] = null;
      var o = pn[n];
      pn[n++] = null;
      var s = pn[n];
      pn[n++] = null;
      var f = pn[n];
      if (pn[n++] = null, o !== null && s !== null) {
        var v = o.pending;
        v === null ? s.next = s : (s.next = v.next, v.next = s), o.pending = s;
      }
      f !== 0 && pm(i, s, f);
    }
  }
  function Sl(t, n, i, o) {
    pn[Qi++] = t, pn[Qi++] = n, pn[Qi++] = i, pn[Qi++] = o, qs |= o, t.lanes |= o, t = t.alternate, t !== null && (t.lanes |= o);
  }
  function Ys(t, n, i, o) {
    return Sl(t, n, i, o), El(t);
  }
  function di(t, n) {
    return Sl(t, null, null, n), El(t);
  }
  function pm(t, n, i) {
    t.lanes |= i;
    var o = t.alternate;
    o !== null && (o.lanes |= i);
    for (var s = !1, f = t.return; f !== null; ) f.childLanes |= i, o = f.alternate, o !== null && (o.childLanes |= i), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & 1 || (s = !0)), t = f, f = f.return;
    return t.tag === 3 ? (f = t.stateNode, s && n !== null && (s = 31 - te(i), t = f.hiddenUpdates, o = t[s], o === null ? t[s] = [n] : o.push(n), n.lane = i | 536870912), f) : null;
  }
  function El(t) {
    if (50 < xo) throw xo = 0, rf = null, Error(u(185));
    for (var n = t.return; n !== null; ) t = n, n = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ki = {};
  function $_(t, n, i, o) {
    this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tn(t, n, i, o) {
    return new $_(t, n, i, o);
  }
  function Ws(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function oa(t, n) {
    var i = t.alternate;
    return i === null ? (i = tn(t.tag, n, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = n, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, n = t.dependencies, i.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i;
  }
  function gm(t, n) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, n = i.dependencies, t.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), t;
  }
  function Tl(t, n, i, o, s, f) {
    var v = 0;
    if (o = t, typeof t == "function") Ws(t) && (v = 1);
    else if (typeof t == "string") v = W2(t, i, ce.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else e: switch (t) {
      case U:
        return t = tn(31, i, n, s), t.elementType = U, t.lanes = f, t;
      case A:
        return hi(i.children, s, f, n);
      case M:
        v = 8, s |= 24;
        break;
      case N:
        return t = tn(12, i, n, s | 2), t.elementType = N, t.lanes = f, t;
      case H:
        return t = tn(13, i, n, s), t.elementType = H, t.lanes = f, t;
      case q:
        return t = tn(19, i, n, s), t.elementType = q, t.lanes = f, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case R:
            v = 10;
            break e;
          case D:
            v = 9;
            break e;
          case B:
            v = 11;
            break e;
          case ee:
            v = 14;
            break e;
          case F:
            v = 16, o = null;
            break e;
        }
        v = 29, i = Error(u(130, t === null ? "null" : typeof t, "")), o = null;
    }
    return n = tn(v, i, n, s), n.elementType = t, n.type = o, n.lanes = f, n;
  }
  function hi(t, n, i, o) {
    return t = tn(7, t, o, n), t.lanes = i, t;
  }
  function Qs(t, n, i) {
    return t = tn(6, t, null, n), t.lanes = i, t;
  }
  function ym(t) {
    var n = tn(18, null, null, 0);
    return n.stateNode = t, n;
  }
  function Ks(t, n, i) {
    return n = tn(4, t.children !== null ? t.children : [], t.key, n), n.lanes = i, n.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, n;
  }
  var bm = /* @__PURE__ */ new WeakMap();
  function gn(t, n) {
    if (typeof t == "object" && t !== null) {
      var i = bm.get(t);
      return i !== void 0 ? i : (n = {
        value: t,
        source: n,
        stack: Ca(n)
      }, bm.set(t, n), n);
    }
    return {
      value: t,
      source: n,
      stack: Ca(n)
    };
  }
  var Ji = [], er = 0, Cl = null, ro = 0, yn = [], bn = 0, Ma = null, Gn = 1, $n = "";
  function la(t, n) {
    Ji[er++] = ro, Ji[er++] = Cl, Cl = t, ro = n;
  }
  function _m(t, n, i) {
    yn[bn++] = Gn, yn[bn++] = $n, yn[bn++] = Ma, Ma = t;
    var o = Gn;
    t = $n;
    var s = 32 - te(o) - 1;
    o &= ~(1 << s), i += 1;
    var f = 32 - te(n) + s;
    if (30 < f) {
      var v = s - s % 5;
      f = (o & (1 << v) - 1).toString(32), o >>= v, s -= v, Gn = 1 << 32 - te(n) + s | i << s | o, $n = f + t;
    } else Gn = 1 << f | i << s | o, $n = t;
  }
  function Js(t) {
    t.return !== null && (la(t, 1), _m(t, 1, 0));
  }
  function ec(t) {
    for (; t === Cl; ) Cl = Ji[--er], Ji[er] = null, ro = Ji[--er], Ji[er] = null;
    for (; t === Ma; ) Ma = yn[--bn], yn[bn] = null, $n = yn[--bn], yn[bn] = null, Gn = yn[--bn], yn[bn] = null;
  }
  function wm(t, n) {
    yn[bn++] = Gn, yn[bn++] = $n, yn[bn++] = Ma, Gn = n.id, $n = n.overflow, Ma = t;
  }
  var Mt = null, Ye = null, Me = !1, Ra = null, _n = !1, tc = Error(u(519));
  function Na(t) {
    throw oo(gn(Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), tc;
  }
  function Sm(t) {
    var n = t.stateNode, i = t.type, o = t.memoizedProps;
    switch (n[Ot] = t, n[It] = o, i) {
      case "dialog":
        Ce("cancel", n), Ce("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Mo.length; i++) Ce(Mo[i], n);
        break;
      case "source":
        Ce("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", n), Ce("load", n);
        break;
      case "details":
        Ce("toggle", n);
        break;
      case "input":
        Ce("invalid", n), Hh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0);
        break;
      case "select":
        Ce("invalid", n);
        break;
      case "textarea":
        Ce("invalid", n), Bh(n, o.value, o.defaultValue, o.children);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Bp(n.textContent, i) ? (o.popover != null && (Ce("beforetoggle", n), Ce("toggle", n)), o.onScroll != null && Ce("scroll", n), o.onScrollEnd != null && Ce("scrollend", n), o.onClick != null && (n.onclick = ia), n = !0) : n = !1, n || Na(t, !0);
  }
  function Em(t) {
    for (Mt = t.return; Mt; ) switch (Mt.tag) {
      case 5:
      case 31:
      case 13:
        _n = !1;
        return;
      case 27:
      case 3:
        _n = !0;
        return;
      default:
        Mt = Mt.return;
    }
  }
  function tr(t) {
    if (t !== Mt) return !1;
    if (!Me) return Em(t), Me = !0, !1;
    var n = t.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || bf(t.type, t.memoizedProps)), i = !i), i && Ye && Na(t), Em(t), n === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ye = Fp(t);
    } else if (n === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ye = Fp(t);
    } else n === 27 ? (n = Ye, Ga(t.type) ? (t = Tf, Tf = null, Ye = t) : Ye = n) : Ye = Mt ? En(t.stateNode.nextSibling) : null;
    return !0;
  }
  function mi() {
    Ye = Mt = null, Me = !1;
  }
  function nc() {
    var t = Ra;
    return t !== null && (Xt === null ? Xt = t : Xt.push.apply(Xt, t), Ra = null), t;
  }
  function oo(t) {
    Ra === null ? Ra = [t] : Ra.push(t);
  }
  var ac = z(null), vi = null, ua = null;
  function Da(t, n, i) {
    ne(ac, n._currentValue), n._currentValue = i;
  }
  function sa(t) {
    t._currentValue = ac.current, W(ac);
  }
  function ic(t, n, i) {
    for (; t !== null; ) {
      var o = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), t === i) break;
      t = t.return;
    }
  }
  function rc(t, n, i, o) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var v = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var w = f;
          f = s;
          for (var O = 0; O < n.length; O++) if (w.context === n[O]) {
            f.lanes |= i, w = f.alternate, w !== null && (w.lanes |= i), ic(f.return, i, t), o || (v = null);
            break e;
          }
          f = w.next;
        }
      } else if (s.tag === 18) {
        if (v = s.return, v === null) throw Error(u(341));
        v.lanes |= i, f = v.alternate, f !== null && (f.lanes |= i), ic(v, i, t), v = null;
      } else v = s.child;
      if (v !== null) v.return = s;
      else for (v = s; v !== null; ) {
        if (v === t) {
          v = null;
          break;
        }
        if (s = v.sibling, s !== null) {
          s.return = v.return, v = s;
          break;
        }
        v = v.return;
      }
      s = v;
    }
  }
  function nr(t, n, i, o) {
    t = null;
    for (var s = n, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var v = s.alternate;
        if (v === null) throw Error(u(387));
        if (v = v.memoizedProps, v !== null) {
          var w = s.type;
          en(s.pendingProps.value, v.value) || (t !== null ? t.push(w) : t = [w]);
        }
      } else if (s === Ae.current) {
        if (v = s.alternate, v === null) throw Error(u(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Lo) : t = [Lo]);
      }
      s = s.return;
    }
    t !== null && rc(n, t, i, o), n.flags |= 262144;
  }
  function Al(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!en(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function pi(t) {
    vi = t, ua = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Rt(t) {
    return Tm(vi, t);
  }
  function xl(t, n) {
    return vi === null && pi(t), Tm(t, n);
  }
  function Tm(t, n) {
    var i = n._currentValue;
    if (n = {
      context: n,
      memoizedValue: i,
      next: null
    }, ua === null) {
      if (t === null) throw Error(u(308));
      ua = n, t.dependencies = {
        lanes: 0,
        firstContext: n
      }, t.flags |= 524288;
    } else ua = ua.next = n;
    return i;
  }
  var V_ = typeof AbortController < "u" ? AbortController : function() {
    var t = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        t.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, t.forEach(function(i) {
        return i();
      });
    };
  }, F_ = a.unstable_scheduleCallback, X_ = a.unstable_NormalPriority, ft = {
    $$typeof: R,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oc() {
    return {
      controller: new V_(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function lo(t) {
    t.refCount--, t.refCount === 0 && F_(X_, function() {
      t.controller.abort();
    });
  }
  var uo = null, lc = 0, ar = 0, ir = null;
  function q_(t, n) {
    if (uo === null) {
      var i = uo = [];
      lc = 0, ar = ff(), ir = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return lc++, n.then(Cm, Cm), n;
  }
  function Cm() {
    if (--lc === 0 && uo !== null) {
      ir !== null && (ir.status = "fulfilled");
      var t = uo;
      uo = null, ar = 0, ir = null;
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function Y_(t, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        i.push(s);
      }
    };
    return t.then(function() {
      o.status = "fulfilled", o.value = n;
      for (var s = 0; s < i.length; s++) (0, i[s])(n);
    }, function(s) {
      for (o.status = "rejected", o.reason = s, s = 0; s < i.length; s++) (0, i[s])(void 0);
    }), o;
  }
  var Am = E.S;
  E.S = function(t, n) {
    op = St(), typeof n == "object" && n !== null && typeof n.then == "function" && q_(t, n), Am !== null && Am(t, n);
  };
  var gi = z(null);
  function uc() {
    var t = gi.current;
    return t !== null ? t : Ge.pooledCache;
  }
  function Ol(t, n) {
    n === null ? ne(gi, gi.current) : ne(gi, n.pool);
  }
  function xm() {
    var t = uc();
    return t === null ? null : {
      parent: ft._currentValue,
      pool: t
    };
  }
  var rr = Error(u(460)), sc = Error(u(474)), Ml = Error(u(542)), Rl = { then: function() {
  } };
  function Om(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Mm(t, n, i) {
    switch (i = t[i], i === void 0 ? t.push(n) : i !== n && (n.then(ia, ia), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason, Nm(t), t;
      default:
        if (typeof n.status == "string") n.then(ia, ia);
        else {
          if (t = Ge, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
          t = n, t.status = "pending", t.then(function(o) {
            if (n.status === "pending") {
              var s = n;
              s.status = "fulfilled", s.value = o;
            }
          }, function(o) {
            if (n.status === "pending") {
              var s = n;
              s.status = "rejected", s.reason = o;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw t = n.reason, Nm(t), t;
        }
        throw bi = n, rr;
    }
  }
  function yi(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function" ? (bi = i, rr) : i;
    }
  }
  var bi = null;
  function Rm() {
    if (bi === null) throw Error(u(459));
    var t = bi;
    return bi = null, t;
  }
  function Nm(t) {
    if (t === rr || t === Ml) throw Error(u(483));
  }
  var or = null, so = 0;
  function Nl(t) {
    var n = so;
    return so += 1, or === null && (or = []), Mm(or, t, n);
  }
  function co(t, n) {
    n = n.props.ref, t.ref = n !== void 0 ? n : null;
  }
  function Dl(t, n) {
    throw n.$$typeof === T ? Error(u(525)) : (t = Object.prototype.toString.call(n), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)));
  }
  function Dm(t) {
    function n(j, L) {
      if (t) {
        var k = j.deletions;
        k === null ? (j.deletions = [L], j.flags |= 16) : k.push(L);
      }
    }
    function i(j, L) {
      if (!t) return null;
      for (; L !== null; ) n(j, L), L = L.sibling;
      return null;
    }
    function o(j) {
      for (var L = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? L.set(j.key, j) : L.set(j.index, j), j = j.sibling;
      return L;
    }
    function s(j, L) {
      return j = oa(j, L), j.index = 0, j.sibling = null, j;
    }
    function f(j, L, k) {
      return j.index = k, t ? (k = j.alternate, k !== null ? (k = k.index, k < L ? (j.flags |= 67108866, L) : k) : (j.flags |= 67108866, L)) : (j.flags |= 1048576, L);
    }
    function v(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j;
    }
    function w(j, L, k, Q) {
      return L === null || L.tag !== 6 ? (L = Qs(k, j.mode, Q), L.return = j, L) : (L = s(L, k), L.return = j, L);
    }
    function O(j, L, k, Q) {
      var ve = k.type;
      return ve === A ? X(j, L, k.props.children, Q, k.key) : L !== null && (L.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === F && yi(ve) === L.type) ? (L = s(L, k.props), co(L, k), L.return = j, L) : (L = Tl(k.type, k.key, k.props, null, j.mode, Q), co(L, k), L.return = j, L);
    }
    function Z(j, L, k, Q) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== k.containerInfo || L.stateNode.implementation !== k.implementation ? (L = Ks(k, j.mode, Q), L.return = j, L) : (L = s(L, k.children || []), L.return = j, L);
    }
    function X(j, L, k, Q, ve) {
      return L === null || L.tag !== 7 ? (L = hi(k, j.mode, Q, ve), L.return = j, L) : (L = s(L, k), L.return = j, L);
    }
    function J(j, L, k) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return L = Qs("" + L, j.mode, k), L.return = j, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case x:
            return k = Tl(L.type, L.key, L.props, null, j.mode, k), co(k, L), k.return = j, k;
          case C:
            return L = Ks(L, j.mode, k), L.return = j, L;
          case F:
            return L = yi(L), J(j, L, k);
        }
        if (P(L) || ue(L)) return L = hi(L, j.mode, k, null), L.return = j, L;
        if (typeof L.then == "function") return J(j, Nl(L), k);
        if (L.$$typeof === R) return J(j, xl(j, L), k);
        Dl(j, L);
      }
      return null;
    }
    function G(j, L, k, Q) {
      var ve = L !== null ? L.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return ve !== null ? null : w(j, L, "" + k, Q);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            return k.key === ve ? O(j, L, k, Q) : null;
          case C:
            return k.key === ve ? Z(j, L, k, Q) : null;
          case F:
            return k = yi(k), G(j, L, k, Q);
        }
        if (P(k) || ue(k)) return ve !== null ? null : X(j, L, k, Q, null);
        if (typeof k.then == "function") return G(j, L, Nl(k), Q);
        if (k.$$typeof === R) return G(j, L, xl(j, k), Q);
        Dl(j, k);
      }
      return null;
    }
    function $(j, L, k, Q, ve) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return j = j.get(k) || null, w(L, j, "" + Q, ve);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case x:
            return j = j.get(Q.key === null ? k : Q.key) || null, O(L, j, Q, ve);
          case C:
            return j = j.get(Q.key === null ? k : Q.key) || null, Z(L, j, Q, ve);
          case F:
            return Q = yi(Q), $(j, L, k, Q, ve);
        }
        if (P(Q) || ue(Q)) return j = j.get(k) || null, X(L, j, Q, ve, null);
        if (typeof Q.then == "function") return $(j, L, k, Nl(Q), ve);
        if (Q.$$typeof === R) return $(j, L, k, xl(L, Q), ve);
        Dl(L, Q);
      }
      return null;
    }
    function fe(j, L, k, Q) {
      for (var ve = null, Le = null, he = L, Se = L = 0, Oe = null; he !== null && Se < k.length; Se++) {
        he.index > Se ? (Oe = he, he = null) : Oe = he.sibling;
        var He = G(j, he, k[Se], Q);
        if (He === null) {
          he === null && (he = Oe);
          break;
        }
        t && he && He.alternate === null && n(j, he), L = f(He, L, Se), Le === null ? ve = He : Le.sibling = He, Le = He, he = Oe;
      }
      if (Se === k.length) return i(j, he), Me && la(j, Se), ve;
      if (he === null) {
        for (; Se < k.length; Se++) he = J(j, k[Se], Q), he !== null && (L = f(he, L, Se), Le === null ? ve = he : Le.sibling = he, Le = he);
        return Me && la(j, Se), ve;
      }
      for (he = o(he); Se < k.length; Se++) Oe = $(he, j, Se, k[Se], Q), Oe !== null && (t && Oe.alternate !== null && he.delete(Oe.key === null ? Se : Oe.key), L = f(Oe, L, Se), Le === null ? ve = Oe : Le.sibling = Oe, Le = Oe);
      return t && he.forEach(function(qa) {
        return n(j, qa);
      }), Me && la(j, Se), ve;
    }
    function ge(j, L, k, Q) {
      if (k == null) throw Error(u(151));
      for (var ve = null, Le = null, he = L, Se = L = 0, Oe = null, He = k.next(); he !== null && !He.done; Se++, He = k.next()) {
        he.index > Se ? (Oe = he, he = null) : Oe = he.sibling;
        var qa = G(j, he, He.value, Q);
        if (qa === null) {
          he === null && (he = Oe);
          break;
        }
        t && he && qa.alternate === null && n(j, he), L = f(qa, L, Se), Le === null ? ve = qa : Le.sibling = qa, Le = qa, he = Oe;
      }
      if (He.done) return i(j, he), Me && la(j, Se), ve;
      if (he === null) {
        for (; !He.done; Se++, He = k.next()) He = J(j, He.value, Q), He !== null && (L = f(He, L, Se), Le === null ? ve = He : Le.sibling = He, Le = He);
        return Me && la(j, Se), ve;
      }
      for (he = o(he); !He.done; Se++, He = k.next()) He = $(he, j, Se, He.value, Q), He !== null && (t && He.alternate !== null && he.delete(He.key === null ? Se : He.key), L = f(He, L, Se), Le === null ? ve = He : Le.sibling = He, Le = He);
      return t && he.forEach(function(cw) {
        return n(j, cw);
      }), Me && la(j, Se), ve;
    }
    function Ie(j, L, k, Q) {
      if (typeof k == "object" && k !== null && k.type === A && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case x:
            e: {
              for (var ve = k.key; L !== null; ) {
                if (L.key === ve) {
                  if (ve = k.type, ve === A) {
                    if (L.tag === 7) {
                      i(j, L.sibling), Q = s(L, k.props.children), Q.return = j, j = Q;
                      break e;
                    }
                  } else if (L.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === F && yi(ve) === L.type) {
                    i(j, L.sibling), Q = s(L, k.props), co(Q, k), Q.return = j, j = Q;
                    break e;
                  }
                  i(j, L);
                  break;
                } else n(j, L);
                L = L.sibling;
              }
              k.type === A ? (Q = hi(k.props.children, j.mode, Q, k.key), Q.return = j, j = Q) : (Q = Tl(k.type, k.key, k.props, null, j.mode, Q), co(Q, k), Q.return = j, j = Q);
            }
            return v(j);
          case C:
            e: {
              for (ve = k.key; L !== null; ) {
                if (L.key === ve) if (L.tag === 4 && L.stateNode.containerInfo === k.containerInfo && L.stateNode.implementation === k.implementation) {
                  i(j, L.sibling), Q = s(L, k.children || []), Q.return = j, j = Q;
                  break e;
                } else {
                  i(j, L);
                  break;
                }
                else n(j, L);
                L = L.sibling;
              }
              Q = Ks(k, j.mode, Q), Q.return = j, j = Q;
            }
            return v(j);
          case F:
            return k = yi(k), Ie(j, L, k, Q);
        }
        if (P(k)) return fe(j, L, k, Q);
        if (ue(k)) {
          if (ve = ue(k), typeof ve != "function") throw Error(u(150));
          return k = ve.call(k), ge(j, L, k, Q);
        }
        if (typeof k.then == "function") return Ie(j, L, Nl(k), Q);
        if (k.$$typeof === R) return Ie(j, L, xl(j, k), Q);
        Dl(j, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, L !== null && L.tag === 6 ? (i(j, L.sibling), Q = s(L, k), Q.return = j, j = Q) : (i(j, L), Q = Qs(k, j.mode, Q), Q.return = j, j = Q), v(j)) : i(j, L);
    }
    return function(j, L, k, Q) {
      try {
        so = 0;
        var ve = Ie(j, L, k, Q);
        return or = null, ve;
      } catch (he) {
        if (he === rr || he === Ml) throw he;
        var Le = tn(29, he, null, j.mode);
        return Le.lanes = Q, Le.return = j, Le;
      }
    };
  }
  var _i = Dm(!0), zm = Dm(!1), za = !1;
  function cc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function fc(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function wi(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Si(t, n, i) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (je & 2) !== 0) {
      var s = o.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), o.pending = n, n = El(t), pm(t, null, i), n;
    }
    return Sl(t, o, n, i), El(t);
  }
  function fo(t, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= t.pendingLanes, i |= o, n.lanes = i, sl(t, i);
    }
  }
  function dc(t, n) {
    var i = t.updateQueue, o = t.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var s = null, f = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var v = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = v : f = f.next = v, i = i.next;
        } while (i !== null);
        f === null ? s = f = n : f = f.next = n;
      } else s = f = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks
      }, t.updateQueue = i;
      return;
    }
    t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = n : t.next = n, i.lastBaseUpdate = n;
  }
  var hc = !1;
  function ho() {
    if (hc) {
      var t = ir;
      if (t !== null) throw t;
    }
  }
  function mo(t, n, i, o) {
    hc = !1;
    var s = t.updateQueue;
    za = !1;
    var f = s.firstBaseUpdate, v = s.lastBaseUpdate, w = s.shared.pending;
    if (w !== null) {
      s.shared.pending = null;
      var O = w, Z = O.next;
      O.next = null, v === null ? f = Z : v.next = Z, v = O;
      var X = t.alternate;
      X !== null && (X = X.updateQueue, w = X.lastBaseUpdate, w !== v && (w === null ? X.firstBaseUpdate = Z : w.next = Z, X.lastBaseUpdate = O));
    }
    if (f !== null) {
      var J = s.baseState;
      v = 0, X = Z = O = null, w = f;
      do {
        var G = w.lane & -536870913, $ = G !== w.lane;
        if ($ ? (xe & G) === G : (o & G) === G) {
          G !== 0 && G === ar && (hc = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = t, ge = w;
            G = n;
            var Ie = i;
            switch (ge.tag) {
              case 1:
                if (fe = ge.payload, typeof fe == "function") {
                  J = fe.call(Ie, J, G);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ge.payload, G = typeof fe == "function" ? fe.call(Ie, J, G) : fe, G == null) break e;
                J = S({}, J, G);
                break e;
              case 2:
                za = !0;
            }
          }
          G = w.callback, G !== null && (t.flags |= 64, $ && (t.flags |= 8192), $ = s.callbacks, $ === null ? s.callbacks = [G] : $.push(G));
        } else $ = {
          lane: G,
          tag: w.tag,
          payload: w.payload,
          callback: w.callback,
          next: null
        }, X === null ? (Z = X = $, O = J) : X = X.next = $, v |= G;
        if (w = w.next, w === null) {
          if (w = s.shared.pending, w === null) break;
          $ = w, w = $.next, $.next = null, s.lastBaseUpdate = $, s.shared.pending = null;
        }
      } while (!0);
      X === null && (O = J), s.baseState = O, s.firstBaseUpdate = Z, s.lastBaseUpdate = X, f === null && (s.shared.lanes = 0), Ua |= v, t.lanes = v, t.memoizedState = J;
    }
  }
  function Lm(t, n) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(n);
  }
  function Hm(t, n) {
    var i = t.callbacks;
    if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++) Lm(i[t], n);
  }
  var lr = z(null), zl = z(0);
  function jm(t, n) {
    t = ya, ne(zl, t), ne(lr, n), ya = t | n.baseLanes;
  }
  function mc() {
    ne(zl, ya), ne(lr, lr.current);
  }
  function vc() {
    ya = zl.current, W(lr), W(zl);
  }
  var nn = z(null), wn = null;
  function La(t) {
    var n = t.alternate;
    ne(ot, ot.current & 1), ne(nn, t), wn === null && (n === null || lr.current !== null || n.memoizedState !== null) && (wn = t);
  }
  function pc(t) {
    ne(ot, ot.current), ne(nn, t), wn === null && (wn = t);
  }
  function Bm(t) {
    t.tag === 22 ? (ne(ot, ot.current), ne(nn, t), wn === null && (wn = t)) : Ha(t);
  }
  function Ha() {
    ne(ot, ot.current), ne(nn, nn.current);
  }
  function an(t) {
    W(nn), wn === t && (wn = null), W(ot);
  }
  var ot = z(0);
  function Ll(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || Sf(i) || Ef(i))) return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var ca = 0, we = null, Pe = null, dt = null, Hl = !1, ur = !1, Ei = !1, jl = 0, vo = 0, sr = null, W_ = 0;
  function at() {
    throw Error(u(321));
  }
  function gc(t, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < t.length; i++) if (!en(t[i], n[i])) return !1;
    return !0;
  }
  function yc(t, n, i, o, s, f) {
    return ca = f, we = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, E.H = t === null || t.memoizedState === null ? _v : zc, Ei = !1, f = i(o, s), Ei = !1, ur && (f = km(n, i, o, s)), Um(t), f;
  }
  function Um(t) {
    E.H = yo;
    var n = Pe !== null && Pe.next !== null;
    if (ca = 0, dt = Pe = we = null, Hl = !1, vo = 0, sr = null, n) throw Error(u(300));
    t === null || ht || (t = t.dependencies, t !== null && Al(t) && (ht = !0));
  }
  function km(t, n, i, o) {
    we = t;
    var s = 0;
    do {
      if (ur && (sr = null), vo = 0, ur = !1, 25 <= s) throw Error(u(301));
      if (s += 1, dt = Pe = null, t.updateQueue != null) {
        var f = t.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      E.H = wv, f = n(i, o);
    } while (ur);
    return f;
  }
  function Q_() {
    var t = E.H, n = t.useState()[0];
    return n = typeof n.then == "function" ? po(n) : n, t = t.useState()[0], (Pe !== null ? Pe.memoizedState : null) !== t && (we.flags |= 1024), n;
  }
  function bc() {
    var t = jl !== 0;
    return jl = 0, t;
  }
  function _c(t, n, i) {
    n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~i;
  }
  function wc(t) {
    if (Hl) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), t = t.next;
      }
      Hl = !1;
    }
    ca = 0, dt = Pe = we = null, ur = !1, vo = jl = 0, sr = null;
  }
  function Ut() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return dt === null ? we.memoizedState = dt = t : dt = dt.next = t, dt;
  }
  function lt() {
    if (Pe === null) {
      var t = we.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Pe.next;
    var n = dt === null ? we.memoizedState : dt.next;
    if (n !== null) dt = n, Pe = t;
    else {
      if (t === null)
        throw we.alternate === null ? Error(u(467)) : Error(u(310));
      Pe = t, t = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null
      }, dt === null ? we.memoizedState = dt = t : dt = dt.next = t;
    }
    return dt;
  }
  function Bl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function po(t) {
    var n = vo;
    return vo += 1, sr === null && (sr = []), t = Mm(sr, t, n), n = we, (dt === null ? n.memoizedState : dt.next) === null && (n = n.alternate, E.H = n === null || n.memoizedState === null ? _v : zc), t;
  }
  function Ul(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return po(t);
      if (t.$$typeof === R) return Rt(t);
    }
    throw Error(u(438, String(t)));
  }
  function Sc(t) {
    var n = null, i = we.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = we.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n ??= {
      data: [],
      index: 0
    }, i === null && (i = Bl(), we.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0) for (i = n.data[n.index] = Array(t), o = 0; o < t; o++) i[o] = Y;
    return n.index++, i;
  }
  function fa(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function kl(t) {
    return Ec(lt(), Pe, t);
  }
  function Ec(t, n, i) {
    var o = t.queue;
    if (o === null) throw Error(u(311));
    o.lastRenderedReducer = i;
    var s = t.baseQueue, f = o.pending;
    if (f !== null) {
      if (s !== null) {
        var v = s.next;
        s.next = f.next, f.next = v;
      }
      n.baseQueue = s = f, o.pending = null;
    }
    if (f = t.baseState, s === null) t.memoizedState = f;
    else {
      n = s.next;
      var w = v = null, O = null, Z = n, X = !1;
      do {
        var J = Z.lane & -536870913;
        if (J !== Z.lane ? (xe & J) === J : (ca & J) === J) {
          var G = Z.revertLane;
          if (G === 0) O !== null && (O = O.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }), J === ar && (X = !0);
          else if ((ca & G) === G) {
            Z = Z.next, G === ar && (X = !0);
            continue;
          } else J = {
            lane: 0,
            revertLane: Z.revertLane,
            gesture: null,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          }, O === null ? (w = O = J, v = f) : O = O.next = J, we.lanes |= G, Ua |= G;
          J = Z.action, Ei && i(f, J), f = Z.hasEagerState ? Z.eagerState : i(f, J);
        } else G = {
          lane: J,
          revertLane: Z.revertLane,
          gesture: Z.gesture,
          action: Z.action,
          hasEagerState: Z.hasEagerState,
          eagerState: Z.eagerState,
          next: null
        }, O === null ? (w = O = G, v = f) : O = O.next = G, we.lanes |= J, Ua |= J;
        Z = Z.next;
      } while (Z !== null && Z !== n);
      if (O === null ? v = f : O.next = w, !en(f, t.memoizedState) && (ht = !0, X && (i = ir, i !== null))) throw i;
      t.memoizedState = f, t.baseState = v, t.baseQueue = O, o.lastRenderedState = f;
    }
    return s === null && (o.lanes = 0), [t.memoizedState, o.dispatch];
  }
  function Tc(t) {
    var n = lt(), i = n.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = t;
    var o = i.dispatch, s = i.pending, f = n.memoizedState;
    if (s !== null) {
      i.pending = null;
      var v = s = s.next;
      do
        f = t(f, v.action), v = v.next;
      while (v !== s);
      en(f, n.memoizedState) || (ht = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), i.lastRenderedState = f;
    }
    return [f, o];
  }
  function Pm(t, n, i) {
    var o = we, s = lt(), f = Me;
    if (f) {
      if (i === void 0) throw Error(u(407));
      i = i();
    } else i = n();
    var v = !en((Pe || s).memoizedState, i);
    if (v && (s.memoizedState = i, ht = !0), s = s.queue, xc(Gm.bind(null, o, s, t), [t]), s.getSnapshot !== n || v || dt !== null && dt.memoizedState.tag & 1) {
      if (o.flags |= 2048, cr(9, { destroy: void 0 }, Im.bind(null, o, s, i, n), null), Ge === null) throw Error(u(349));
      f || (ca & 127) !== 0 || Zm(o, n, i);
    }
    return i;
  }
  function Zm(t, n, i) {
    t.flags |= 16384, t = {
      getSnapshot: n,
      value: i
    }, n = we.updateQueue, n === null ? (n = Bl(), we.updateQueue = n, n.stores = [t]) : (i = n.stores, i === null ? n.stores = [t] : i.push(t));
  }
  function Im(t, n, i, o) {
    n.value = i, n.getSnapshot = o, $m(n) && Vm(t);
  }
  function Gm(t, n, i) {
    return i(function() {
      $m(n) && Vm(t);
    });
  }
  function $m(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var i = n();
      return !en(t, i);
    } catch {
      return !0;
    }
  }
  function Vm(t) {
    var n = di(t, 2);
    n !== null && qt(n, t, 2);
  }
  function Cc(t) {
    var n = Ut();
    if (typeof t == "function") {
      var i = t;
      if (t = i(), Ei) {
        Mn(!0);
        try {
          i();
        } finally {
          Mn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = t, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fa,
      lastRenderedState: t
    }, n;
  }
  function Fm(t, n, i, o) {
    return t.baseState = i, Ec(t, Pe, typeof o == "function" ? o : fa);
  }
  function K_(t, n, i, o, s) {
    if (Il(t)) throw Error(u(485));
    if (t = n.action, t !== null) {
      var f = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          f.listeners.push(v);
        }
      };
      E.T !== null ? i(!0) : f.isTransition = !1, o(f), i = n.pending, i === null ? (f.next = n.pending = f, Xm(n, f)) : (f.next = i.next, n.pending = i.next = f);
    }
  }
  function Xm(t, n) {
    var i = n.action, o = n.payload, s = t.state;
    if (n.isTransition) {
      var f = E.T, v = {};
      E.T = v;
      try {
        var w = i(s, o), O = E.S;
        O !== null && O(v, w), qm(t, n, w);
      } catch (Z) {
        Ac(t, n, Z);
      } finally {
        f !== null && v.types !== null && (f.types = v.types), E.T = f;
      }
    } else try {
      f = i(s, o), qm(t, n, f);
    } catch (Z) {
      Ac(t, n, Z);
    }
  }
  function qm(t, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(o) {
      Ym(t, n, o);
    }, function(o) {
      return Ac(t, n, o);
    }) : Ym(t, n, i);
  }
  function Ym(t, n, i) {
    n.status = "fulfilled", n.value = i, Wm(n), t.state = i, n = t.pending, n !== null && (i = n.next, i === n ? t.pending = null : (i = i.next, n.next = i, Xm(t, i)));
  }
  function Ac(t, n, i) {
    var o = t.pending;
    if (t.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Wm(n), n = n.next;
      while (n !== o);
    }
    t.action = null;
  }
  function Wm(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function Qm(t, n) {
    return n;
  }
  function Km(t, n) {
    if (Me) {
      var i = Ge.formState;
      if (i !== null) {
        e: {
          var o = we;
          if (Me) {
            if (Ye) {
              t: {
                for (var s = Ye, f = _n; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = En(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                Ye = En(s.nextSibling), o = s.data === "F!";
                break e;
              }
            }
            Na(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = Ut(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qm,
      lastRenderedState: n
    }, i.queue = o, i = gv.bind(null, we, o), o.dispatch = i, o = Cc(!1), f = Dc.bind(null, we, !1, o.queue), o = Ut(), s = {
      state: n,
      dispatch: null,
      action: t,
      pending: null
    }, o.queue = s, i = K_.bind(null, we, s, f, i), s.dispatch = i, o.memoizedState = t, [
      n,
      i,
      !1
    ];
  }
  function Jm(t) {
    return ev(lt(), Pe, t);
  }
  function ev(t, n, i) {
    if (n = Ec(t, n, Qm)[0], t = kl(fa)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var o = po(n);
    } catch (v) {
      throw v === rr ? Ml : v;
    }
    else o = n;
    n = lt();
    var s = n.queue, f = s.dispatch;
    return i !== n.memoizedState && (we.flags |= 2048, cr(9, { destroy: void 0 }, J_.bind(null, s, i), null)), [
      o,
      f,
      t
    ];
  }
  function J_(t, n) {
    t.action = n;
  }
  function tv(t) {
    var n = lt(), i = Pe;
    if (i !== null) return ev(n, i, t);
    lt(), n = n.memoizedState, i = lt();
    var o = i.queue.dispatch;
    return i.memoizedState = t, [
      n,
      o,
      !1
    ];
  }
  function cr(t, n, i, o) {
    return t = {
      tag: t,
      create: i,
      deps: o,
      inst: n,
      next: null
    }, n = we.updateQueue, n === null && (n = Bl(), we.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = t.next = t : (o = i.next, i.next = t, t.next = o, n.lastEffect = t), t;
  }
  function nv() {
    return lt().memoizedState;
  }
  function Pl(t, n, i, o) {
    var s = Ut();
    we.flags |= t, s.memoizedState = cr(1 | n, { destroy: void 0 }, i, o === void 0 ? null : o);
  }
  function Zl(t, n, i, o) {
    var s = lt();
    o = o === void 0 ? null : o;
    var f = s.memoizedState.inst;
    Pe !== null && o !== null && gc(o, Pe.memoizedState.deps) ? s.memoizedState = cr(n, f, i, o) : (we.flags |= t, s.memoizedState = cr(1 | n, f, i, o));
  }
  function av(t, n) {
    Pl(8390656, 8, t, n);
  }
  function xc(t, n) {
    Zl(2048, 8, t, n);
  }
  function e2(t) {
    we.flags |= 4;
    var n = we.updateQueue;
    if (n === null) n = Bl(), we.updateQueue = n, n.events = [t];
    else {
      var i = n.events;
      i === null ? n.events = [t] : i.push(t);
    }
  }
  function iv(t) {
    var n = lt().memoizedState;
    return e2({
      ref: n,
      nextImpl: t
    }), function() {
      if ((je & 2) !== 0) throw Error(u(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function rv(t, n) {
    return Zl(4, 2, t, n);
  }
  function ov(t, n) {
    return Zl(4, 4, t, n);
  }
  function lv(t, n) {
    if (typeof n == "function") {
      t = t();
      var i = n(t);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null) return t = t(), n.current = t, function() {
      n.current = null;
    };
  }
  function uv(t, n, i) {
    i = i != null ? i.concat([t]) : null, Zl(4, 4, lv.bind(null, n, t), i);
  }
  function Oc() {
  }
  function sv(t, n) {
    var i = lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && gc(n, o[1]) ? o[0] : (i.memoizedState = [t, n], t);
  }
  function cv(t, n) {
    var i = lt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && gc(n, o[1])) return o[0];
    if (o = t(), Ei) {
      Mn(!0);
      try {
        t();
      } finally {
        Mn(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Mc(t, n, i) {
    return i === void 0 || (ca & 1073741824) !== 0 && (xe & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = i, t = up(), we.lanes |= t, Ua |= t, i);
  }
  function fv(t, n, i, o) {
    return en(i, n) ? i : lr.current !== null ? (t = Mc(t, i, o), en(t, n) || (ht = !0), t) : (ca & 42) === 0 || (ca & 1073741824) !== 0 && (xe & 261930) === 0 ? (ht = !0, t.memoizedState = i) : (t = up(), we.lanes |= t, Ua |= t, n);
  }
  function dv(t, n, i, o, s) {
    var f = I.p;
    I.p = f !== 0 && 8 > f ? f : 8;
    var v = E.T, w = {};
    E.T = w, Dc(t, !1, n, i);
    try {
      var O = s(), Z = E.S;
      Z !== null && Z(w, O), O !== null && typeof O == "object" && typeof O.then == "function" ? go(t, n, Y_(O, o), Sn(t)) : go(t, n, o, Sn(t));
    } catch (X) {
      go(t, n, {
        then: function() {
        },
        status: "rejected",
        reason: X
      }, Sn());
    } finally {
      I.p = f, v !== null && w.types !== null && (v.types = w.types), E.T = v;
    }
  }
  function t2() {
  }
  function Rc(t, n, i, o) {
    if (t.tag !== 5) throw Error(u(476));
    var s = hv(t).queue;
    dv(t, s, n, ae, i === null ? t2 : function() {
      return mv(t), i(o);
    });
  }
  function hv(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: ae
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: i
      },
      next: null
    }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n;
  }
  function mv(t) {
    var n = hv(t);
    n.next === null && (n = t.alternate.memoizedState), go(t, n.next.queue, {}, Sn());
  }
  function Nc() {
    return Rt(Lo);
  }
  function vv() {
    return lt().memoizedState;
  }
  function pv() {
    return lt().memoizedState;
  }
  function n2(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = Sn();
          t = wi(i);
          var o = Si(n, t, i);
          o !== null && (qt(o, n, i), fo(o, n, i)), n = { cache: oc() }, t.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function a2(t, n, i) {
    var o = Sn();
    i = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Il(t) ? yv(n, i) : (i = Ys(t, n, i, o), i !== null && (qt(i, t, o), bv(i, n, o)));
  }
  function gv(t, n, i) {
    go(t, n, i, Sn());
  }
  function go(t, n, i, o) {
    var s = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Il(t)) yv(n, s);
    else {
      var f = t.alternate;
      if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null)) try {
        var v = n.lastRenderedState, w = f(v, i);
        if (s.hasEagerState = !0, s.eagerState = w, en(w, v)) return Sl(t, n, s, 0), Ge === null && wl(), !1;
      } catch {
      }
      if (i = Ys(t, n, s, o), i !== null) return qt(i, t, o), bv(i, n, o), !0;
    }
    return !1;
  }
  function Dc(t, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: ff(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Il(t)) {
      if (n) throw Error(u(479));
    } else n = Ys(t, i, o, 2), n !== null && qt(n, t, 2);
  }
  function Il(t) {
    var n = t.alternate;
    return t === we || n !== null && n === we;
  }
  function yv(t, n) {
    ur = Hl = !0;
    var i = t.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), t.pending = n;
  }
  function bv(t, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= t.pendingLanes, i |= o, n.lanes = i, sl(t, i);
    }
  }
  var yo = {
    readContext: Rt,
    use: Ul,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useLayoutEffect: at,
    useInsertionEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useSyncExternalStore: at,
    useId: at,
    useHostTransitionStatus: at,
    useFormState: at,
    useActionState: at,
    useOptimistic: at,
    useMemoCache: at,
    useCacheRefresh: at
  };
  yo.useEffectEvent = at;
  var _v = {
    readContext: Rt,
    use: Ul,
    useCallback: function(t, n) {
      return Ut().memoizedState = [t, n === void 0 ? null : n], t;
    },
    useContext: Rt,
    useEffect: av,
    useImperativeHandle: function(t, n, i) {
      i = i != null ? i.concat([t]) : null, Pl(4194308, 4, lv.bind(null, n, t), i);
    },
    useLayoutEffect: function(t, n) {
      return Pl(4194308, 4, t, n);
    },
    useInsertionEffect: function(t, n) {
      Pl(4, 2, t, n);
    },
    useMemo: function(t, n) {
      var i = Ut();
      n = n === void 0 ? null : n;
      var o = t();
      if (Ei) {
        Mn(!0);
        try {
          t();
        } finally {
          Mn(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(t, n, i) {
      var o = Ut();
      if (i !== void 0) {
        var s = i(n);
        if (Ei) {
          Mn(!0);
          try {
            i(n);
          } finally {
            Mn(!1);
          }
        }
      } else s = n;
      return o.memoizedState = o.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, o.queue = t, t = t.dispatch = a2.bind(null, we, t), [o.memoizedState, t];
    },
    useRef: function(t) {
      var n = Ut();
      return t = { current: t }, n.memoizedState = t;
    },
    useState: function(t) {
      t = Cc(t);
      var n = t.queue, i = gv.bind(null, we, n);
      return n.dispatch = i, [t.memoizedState, i];
    },
    useDebugValue: Oc,
    useDeferredValue: function(t, n) {
      return Mc(Ut(), t, n);
    },
    useTransition: function() {
      var t = Cc(!1);
      return t = dv.bind(null, we, t.queue, !0, !1), Ut().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, n, i) {
      var o = we, s = Ut();
      if (Me) {
        if (i === void 0) throw Error(u(407));
        i = i();
      } else {
        if (i = n(), Ge === null) throw Error(u(349));
        (xe & 127) !== 0 || Zm(o, n, i);
      }
      s.memoizedState = i;
      var f = {
        value: i,
        getSnapshot: n
      };
      return s.queue = f, av(Gm.bind(null, o, f, t), [t]), o.flags |= 2048, cr(9, { destroy: void 0 }, Im.bind(null, o, f, i, n), null), i;
    },
    useId: function() {
      var t = Ut(), n = Ge.identifierPrefix;
      if (Me) {
        var i = $n, o = Gn;
        i = (o & ~(1 << 32 - te(o) - 1)).toString(32) + i, n = "_" + n + "R_" + i, i = jl++, 0 < i && (n += "H" + i.toString(32)), n += "_";
      } else i = W_++, n = "_" + n + "r_" + i.toString(32) + "_";
      return t.memoizedState = n;
    },
    useHostTransitionStatus: Nc,
    useFormState: Km,
    useActionState: Km,
    useOptimistic: function(t) {
      var n = Ut();
      n.memoizedState = n.baseState = t;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = Dc.bind(null, we, !0, i), i.dispatch = n, [t, n];
    },
    useMemoCache: Sc,
    useCacheRefresh: function() {
      return Ut().memoizedState = n2.bind(null, we);
    },
    useEffectEvent: function(t) {
      var n = Ut(), i = { impl: t };
      return n.memoizedState = i, function() {
        if ((je & 2) !== 0) throw Error(u(440));
        return i.impl.apply(void 0, arguments);
      };
    }
  }, zc = {
    readContext: Rt,
    use: Ul,
    useCallback: sv,
    useContext: Rt,
    useEffect: xc,
    useImperativeHandle: uv,
    useInsertionEffect: rv,
    useLayoutEffect: ov,
    useMemo: cv,
    useReducer: kl,
    useRef: nv,
    useState: function() {
      return kl(fa);
    },
    useDebugValue: Oc,
    useDeferredValue: function(t, n) {
      return fv(lt(), Pe.memoizedState, t, n);
    },
    useTransition: function() {
      var t = kl(fa)[0], n = lt().memoizedState;
      return [typeof t == "boolean" ? t : po(t), n];
    },
    useSyncExternalStore: Pm,
    useId: vv,
    useHostTransitionStatus: Nc,
    useFormState: Jm,
    useActionState: Jm,
    useOptimistic: function(t, n) {
      return Fm(lt(), Pe, t, n);
    },
    useMemoCache: Sc,
    useCacheRefresh: pv
  };
  zc.useEffectEvent = iv;
  var wv = {
    readContext: Rt,
    use: Ul,
    useCallback: sv,
    useContext: Rt,
    useEffect: xc,
    useImperativeHandle: uv,
    useInsertionEffect: rv,
    useLayoutEffect: ov,
    useMemo: cv,
    useReducer: Tc,
    useRef: nv,
    useState: function() {
      return Tc(fa);
    },
    useDebugValue: Oc,
    useDeferredValue: function(t, n) {
      var i = lt();
      return Pe === null ? Mc(i, t, n) : fv(i, Pe.memoizedState, t, n);
    },
    useTransition: function() {
      var t = Tc(fa)[0], n = lt().memoizedState;
      return [typeof t == "boolean" ? t : po(t), n];
    },
    useSyncExternalStore: Pm,
    useId: vv,
    useHostTransitionStatus: Nc,
    useFormState: tv,
    useActionState: tv,
    useOptimistic: function(t, n) {
      var i = lt();
      return Pe !== null ? Fm(i, Pe, t, n) : (i.baseState = t, [t, i.queue.dispatch]);
    },
    useMemoCache: Sc,
    useCacheRefresh: pv
  };
  wv.useEffectEvent = iv;
  function Lc(t, n, i, o) {
    n = t.memoizedState, i = i(o, n), i = i == null ? n : S({}, n, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var Hc = {
    enqueueSetState: function(t, n, i) {
      t = t._reactInternals;
      var o = Sn(), s = wi(o);
      s.payload = n, i != null && (s.callback = i), n = Si(t, s, o), n !== null && (qt(n, t, o), fo(n, t, o));
    },
    enqueueReplaceState: function(t, n, i) {
      t = t._reactInternals;
      var o = Sn(), s = wi(o);
      s.tag = 1, s.payload = n, i != null && (s.callback = i), n = Si(t, s, o), n !== null && (qt(n, t, o), fo(n, t, o));
    },
    enqueueForceUpdate: function(t, n) {
      t = t._reactInternals;
      var i = Sn(), o = wi(i);
      o.tag = 2, n != null && (o.callback = n), n = Si(t, o, i), n !== null && (qt(n, t, i), fo(n, t, i));
    }
  };
  function Sv(t, n, i, o, s, f, v) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, f, v) : n.prototype && n.prototype.isPureReactComponent ? !ao(i, o) || !ao(s, f) : !0;
  }
  function Ev(t, n, i, o) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== t && Hc.enqueueReplaceState(n, n.state, null);
  }
  function Ti(t, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n) o !== "ref" && (i[o] = n[o]);
    }
    if (t = t.defaultProps) {
      i === n && (i = S({}, i));
      for (var s in t) i[s] === void 0 && (i[s] = t[s]);
    }
    return i;
  }
  function i2(t) {
    _l(t);
  }
  function r2(t) {
    console.error(t);
  }
  function o2(t) {
    _l(t);
  }
  function Gl(t, n) {
    try {
      var i = t.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Tv(t, n, i) {
    try {
      var o = t.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function jc(t, n, i) {
    return i = wi(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Gl(t, n);
    }, i;
  }
  function Cv(t) {
    return t = wi(t), t.tag = 3, t;
  }
  function Av(t, n, i, o) {
    var s = i.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = o.value;
      t.payload = function() {
        return s(f);
      }, t.callback = function() {
        Tv(n, i, o);
      };
    }
    var v = i.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (t.callback = function() {
      Tv(n, i, o), typeof s != "function" && (ka === null ? ka = /* @__PURE__ */ new Set([this]) : ka.add(this));
      var w = o.stack;
      this.componentDidCatch(o.value, { componentStack: w !== null ? w : "" });
    });
  }
  function l2(t, n, i, o, s) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && nr(n, i, s, !0), i = nn.current, i !== null) {
        switch (i.tag) {
          case 31:
          case 13:
            return wn === null ? tu() : i.alternate === null && it === 0 && (it = 3), i.flags &= -257, i.flags |= 65536, i.lanes = s, o === Rl ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), uf(t, o, s)), !1;
          case 22:
            return i.flags |= 65536, o === Rl ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), uf(t, o, s)), !1;
        }
        throw Error(u(435, i.tag));
      }
      return uf(t, o, s), tu(), !1;
    }
    if (Me) return n = nn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, o !== tc && (t = Error(u(422), { cause: o }), oo(gn(t, i)))) : (o !== tc && (n = Error(u(423), { cause: o }), oo(gn(n, i))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, o = gn(o, i), s = jc(t.stateNode, o, s), dc(t, s), it !== 4 && (it = 2)), !1;
    var f = Error(u(520), { cause: o });
    if (f = gn(f, i), Ao === null ? Ao = [f] : Ao.push(f), it !== 4 && (it = 2), n === null) return !0;
    o = gn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, t = s & -s, i.lanes |= t, t = jc(i.stateNode, o, t), dc(i, t), !1;
        case 1:
          if (n = i.type, f = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ka === null || !ka.has(f)))) return i.flags |= 65536, s &= -s, i.lanes |= s, s = Cv(s), Av(s, t, i, o), dc(i, s), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Bc = Error(u(461)), ht = !1;
  function Nt(t, n, i, o) {
    n.child = t === null ? zm(n, null, i, o) : _i(n, t.child, i, o);
  }
  function xv(t, n, i, o, s) {
    i = i.render;
    var f = n.ref;
    if ("ref" in o) {
      var v = {};
      for (var w in o) w !== "ref" && (v[w] = o[w]);
    } else v = o;
    return pi(n), o = yc(t, n, i, v, f, s), w = bc(), t !== null && !ht ? (_c(t, n, s), da(t, n, s)) : (Me && w && Js(n), n.flags |= 1, Nt(t, n, o, s), n.child);
  }
  function Ov(t, n, i, o, s) {
    if (t === null) {
      var f = i.type;
      return typeof f == "function" && !Ws(f) && f.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = f, Mv(t, n, f, o, s)) : (t = Tl(i.type, null, o, n, n.mode, s), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (f = t.child, !Vc(t, s)) {
      var v = f.memoizedProps;
      if (i = i.compare, i = i !== null ? i : ao, i(v, o) && t.ref === n.ref) return da(t, n, s);
    }
    return n.flags |= 1, t = oa(f, o), t.ref = n.ref, t.return = n, n.child = t;
  }
  function Mv(t, n, i, o, s) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (ao(f, o) && t.ref === n.ref) if (ht = !1, n.pendingProps = o = f, Vc(t, s)) (t.flags & 131072) !== 0 && (ht = !0);
      else return n.lanes = t.lanes, da(t, n, s);
    }
    return Uc(t, n, i, o, s);
  }
  function Rv(t, n, i, o) {
    var s = o.children, f = t !== null ? t.memoizedState : null;
    if (t === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | i : i, t !== null) {
          for (o = n.child = t.child, s = 0; o !== null; ) s = s | o.lanes | o.childLanes, o = o.sibling;
          o = s & ~f;
        } else o = 0, n.child = null;
        return Nv(t, n, f, i, o);
      }
      if ((i & 536870912) !== 0) n.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Ol(n, f !== null ? f.cachePool : null), f !== null ? jm(n, f) : mc(), Bm(n);
      else return o = n.lanes = 536870912, Nv(t, n, f !== null ? f.baseLanes | i : i, i, o);
    } else f !== null ? (Ol(n, f.cachePool), jm(n, f), Ha(n), n.memoizedState = null) : (t !== null && Ol(n, null), mc(), Ha(n));
    return Nt(t, n, s, i), n.child;
  }
  function bo(t, n) {
    return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Nv(t, n, i, o, s) {
    var f = uc();
    return f = f === null ? null : {
      parent: ft._currentValue,
      pool: f
    }, n.memoizedState = {
      baseLanes: i,
      cachePool: f
    }, t !== null && Ol(n, null), mc(), Bm(n), t !== null && nr(t, n, o, !0), n.childLanes = s, null;
  }
  function $l(t, n) {
    return n = Fl({
      mode: n.mode,
      children: n.children
    }, t.mode), n.ref = t.ref, t.child = n, n.return = t, n;
  }
  function Dv(t, n, i) {
    return _i(n, t.child, null, i), t = $l(n, n.pendingProps), t.flags |= 2, an(n), n.memoizedState = null, t;
  }
  function u2(t, n, i) {
    var o = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, t === null) {
      if (Me) {
        if (o.mode === "hidden") return t = $l(n, o), n.lanes = 536870912, bo(null, t);
        if (pc(n), (t = Ye) ? (t = Vp(t, _n), t = t !== null && t.data === "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: Ma !== null ? {
            id: Gn,
            overflow: $n
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = ym(t), i.return = n, n.child = i, Mt = n, Ye = null)) : t = null, t === null) throw Na(n);
        return n.lanes = 536870912, null;
      }
      return $l(n, o);
    }
    var f = t.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (pc(n), s) if (n.flags & 256) n.flags &= -257, n = Dv(t, n, i);
      else if (n.memoizedState !== null) n.child = t.child, n.flags |= 128, n = null;
      else throw Error(u(558));
      else if (ht || nr(t, n, i, !1), s = (i & t.childLanes) !== 0, ht || s) {
        if (o = Ge, o !== null && (v = Th(o, i), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, di(t, v), qt(o, t, v), Bc;
        tu(), n = Dv(t, n, i);
      } else t = f.treeContext, Ye = En(v.nextSibling), Mt = n, Me = !0, Ra = null, _n = !1, t !== null && wm(n, t), n = $l(n, o), n.flags |= 4096;
      return n;
    }
    return t = oa(t.child, {
      mode: o.mode,
      children: o.children
    }), t.ref = n.ref, n.child = t, t.return = n, t;
  }
  function Vl(t, n) {
    var i = n.ref;
    if (i === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(u(284));
      (t === null || t.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Uc(t, n, i, o, s) {
    return pi(n), i = yc(t, n, i, o, void 0, s), o = bc(), t !== null && !ht ? (_c(t, n, s), da(t, n, s)) : (Me && o && Js(n), n.flags |= 1, Nt(t, n, i, s), n.child);
  }
  function zv(t, n, i, o, s, f) {
    return pi(n), n.updateQueue = null, i = km(n, o, i, s), Um(t), o = bc(), t !== null && !ht ? (_c(t, n, f), da(t, n, f)) : (Me && o && Js(n), n.flags |= 1, Nt(t, n, i, f), n.child);
  }
  function Lv(t, n, i, o, s) {
    if (pi(n), n.stateNode === null) {
      var f = Ki, v = i.contextType;
      typeof v == "object" && v !== null && (f = Rt(v)), f = new i(o, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Hc, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = o, f.state = n.memoizedState, f.refs = {}, cc(n), v = i.contextType, f.context = typeof v == "object" && v !== null ? Rt(v) : Ki, f.state = n.memoizedState, v = i.getDerivedStateFromProps, typeof v == "function" && (Lc(n, i, v, o), f.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && Hc.enqueueReplaceState(f, f.state, null), mo(n, o, f, s), ho(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (t === null) {
      f = n.stateNode;
      var w = n.memoizedProps, O = Ti(i, w);
      f.props = O;
      var Z = f.context, X = i.contextType;
      v = Ki, typeof X == "object" && X !== null && (v = Rt(X));
      var J = i.getDerivedStateFromProps;
      X = typeof J == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = n.pendingProps !== w, X || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || Z !== v) && Ev(n, f, o, v), za = !1;
      var G = n.memoizedState;
      f.state = G, mo(n, o, f, s), ho(), Z = n.memoizedState, w || G !== Z || za ? (typeof J == "function" && (Lc(n, i, J, o), Z = n.memoizedState), (O = za || Sv(n, i, O, o, G, Z, v)) ? (X || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = Z), f.props = o, f.state = Z, f.context = v, o = O) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      f = n.stateNode, fc(t, n), v = n.memoizedProps, X = Ti(i, v), f.props = X, J = n.pendingProps, G = f.context, Z = i.contextType, O = Ki, typeof Z == "object" && Z !== null && (O = Rt(Z)), w = i.getDerivedStateFromProps, (Z = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== J || G !== O) && Ev(n, f, o, O), za = !1, G = n.memoizedState, f.state = G, mo(n, o, f, s), ho();
      var $ = n.memoizedState;
      v !== J || G !== $ || za || t !== null && t.dependencies !== null && Al(t.dependencies) ? (typeof w == "function" && (Lc(n, i, w, o), $ = n.memoizedState), (X = za || Sv(n, i, X, o, G, $, O) || t !== null && t.dependencies !== null && Al(t.dependencies)) ? (Z || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, $, O), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, $, O)), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = $), f.props = o, f.state = $, f.context = O, o = X) : (typeof f.componentDidUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), o = !1);
    }
    return f = o, Vl(t, n), o = (n.flags & 128) !== 0, f || o ? (f = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, t !== null && o ? (n.child = _i(n, t.child, null, s), n.child = _i(n, null, i, s)) : Nt(t, n, i, s), n.memoizedState = f.state, t = n.child) : t = da(t, n, s), t;
  }
  function Hv(t, n, i, o) {
    return mi(), n.flags |= 256, Nt(t, n, i, o), n.child;
  }
  var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pc(t) {
    return {
      baseLanes: t,
      cachePool: xm()
    };
  }
  function Zc(t, n, i) {
    return t = t !== null ? t.childLanes & ~i : 0, n && (t |= on), t;
  }
  function jv(t, n, i) {
    var o = n.pendingProps, s = !1, f = (n.flags & 128) !== 0, v;
    if ((v = f) || (v = t !== null && t.memoizedState === null ? !1 : (ot.current & 2) !== 0), v && (s = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
      if (Me) {
        if (s ? La(n) : Ha(n), (t = Ye) ? (t = Vp(t, _n), t = t !== null && t.data !== "&" ? t : null, t !== null && (n.memoizedState = {
          dehydrated: t,
          treeContext: Ma !== null ? {
            id: Gn,
            overflow: $n
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, i = ym(t), i.return = n, n.child = i, Mt = n, Ye = null)) : t = null, t === null) throw Na(n);
        return Ef(t) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var w = o.children;
      return o = o.fallback, s ? (Ha(n), s = n.mode, w = Fl({
        mode: "hidden",
        children: w
      }, s), o = hi(o, s, i, null), w.return = n, o.return = n, w.sibling = o, n.child = w, o = n.child, o.memoizedState = Pc(i), o.childLanes = Zc(t, v, i), n.memoizedState = kc, bo(null, o)) : (La(n), Ic(n, w));
    }
    var O = t.memoizedState;
    if (O !== null && (w = O.dehydrated, w !== null)) {
      if (f) n.flags & 256 ? (La(n), n.flags &= -257, n = Gc(t, n, i)) : n.memoizedState !== null ? (Ha(n), n.child = t.child, n.flags |= 128, n = null) : (Ha(n), w = o.fallback, s = n.mode, o = Fl({
        mode: "visible",
        children: o.children
      }, s), w = hi(w, s, i, null), w.flags |= 2, o.return = n, w.return = n, o.sibling = w, n.child = o, _i(n, t.child, null, i), o = n.child, o.memoizedState = Pc(i), o.childLanes = Zc(t, v, i), n.memoizedState = kc, n = bo(null, o));
      else if (La(n), Ef(w)) {
        if (v = w.nextSibling && w.nextSibling.dataset, v) var Z = v.dgst;
        v = Z, o = Error(u(419)), o.stack = "", o.digest = v, oo({
          value: o,
          source: null,
          stack: null
        }), n = Gc(t, n, i);
      } else if (ht || nr(t, n, i, !1), v = (i & t.childLanes) !== 0, ht || v) {
        if (v = Ge, v !== null && (o = Th(v, i), o !== 0 && o !== O.retryLane)) throw O.retryLane = o, di(t, o), qt(v, t, o), Bc;
        Sf(w) || tu(), n = Gc(t, n, i);
      } else Sf(w) ? (n.flags |= 192, n.child = t.child, n = null) : (t = O.treeContext, Ye = En(w.nextSibling), Mt = n, Me = !0, Ra = null, _n = !1, t !== null && wm(n, t), n = Ic(n, o.children), n.flags |= 4096);
      return n;
    }
    return s ? (Ha(n), w = o.fallback, s = n.mode, O = t.child, Z = O.sibling, o = oa(O, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = O.subtreeFlags & 65011712, Z !== null ? w = oa(Z, w) : (w = hi(w, s, i, null), w.flags |= 2), w.return = n, o.return = n, o.sibling = w, n.child = o, bo(null, o), o = n.child, w = t.child.memoizedState, w === null ? w = Pc(i) : (s = w.cachePool, s !== null ? (O = ft._currentValue, s = s.parent !== O ? {
      parent: O,
      pool: O
    } : s) : s = xm(), w = {
      baseLanes: w.baseLanes | i,
      cachePool: s
    }), o.memoizedState = w, o.childLanes = Zc(t, v, i), n.memoizedState = kc, bo(t.child, o)) : (La(n), i = t.child, t = i.sibling, i = oa(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, t !== null && (v = n.deletions, v === null ? (n.deletions = [t], n.flags |= 16) : v.push(t)), n.child = i, n.memoizedState = null, i);
  }
  function Ic(t, n) {
    return n = Fl({
      mode: "visible",
      children: n
    }, t.mode), n.return = t, t.child = n;
  }
  function Fl(t, n) {
    return t = tn(22, t, null, n), t.lanes = 0, t;
  }
  function Gc(t, n, i) {
    return _i(n, t.child, null, i), t = Ic(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
  }
  function Bv(t, n, i) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n), ic(t.return, n, i);
  }
  function $c(t, n, i, o, s, f) {
    var v = t.memoizedState;
    v === null ? t.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: s,
      treeForkCount: f
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = i, v.tailMode = s, v.treeForkCount = f);
  }
  function Uv(t, n, i) {
    var o = n.pendingProps, s = o.revealOrder, f = o.tail;
    o = o.children;
    var v = ot.current, w = (v & 2) !== 0;
    if (w ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, ne(ot, v), Nt(t, n, o, i), o = Me ? ro : 0, !w && t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Bv(t, i, n);
      else if (t.tag === 19) Bv(t, i, n);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break e;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) break e;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (s) {
      case "forwards":
        for (i = n.child, s = null; i !== null; ) t = i.alternate, t !== null && Ll(t) === null && (s = i), i = i.sibling;
        i = s, i === null ? (s = n.child, n.child = null) : (s = i.sibling, i.sibling = null), $c(n, !1, s, i, f, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (i = null, s = n.child, n.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && Ll(t) === null) {
            n.child = s;
            break;
          }
          t = s.sibling, s.sibling = i, i = s, s = t;
        }
        $c(n, !0, i, null, f, o);
        break;
      case "together":
        $c(n, !1, null, null, void 0, o);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function da(t, n, i) {
    if (t !== null && (n.dependencies = t.dependencies), Ua |= n.lanes, (i & n.childLanes) === 0) if (t !== null) {
      if (nr(t, n, i, !1), (i & n.childLanes) === 0) return null;
    } else return null;
    if (t !== null && n.child !== t.child) throw Error(u(153));
    if (n.child !== null) {
      for (t = n.child, i = oa(t, t.pendingProps), n.child = i, i.return = n; t.sibling !== null; ) t = t.sibling, i = i.sibling = oa(t, t.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function Vc(t, n) {
    return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Al(t)));
  }
  function s2(t, n, i) {
    switch (n.tag) {
      case 3:
        Ve(n, n.stateNode.containerInfo), Da(n, ft, t.memoizedState.cache), mi();
        break;
      case 27:
      case 5:
        Ke(n);
        break;
      case 4:
        Ve(n, n.stateNode.containerInfo);
        break;
      case 10:
        Da(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return n.flags |= 128, pc(n), null;
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (La(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? jv(t, n, i) : (La(n), t = da(t, n, i), t !== null ? t.sibling : null);
        La(n);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (nr(t, n, i, !1), o = (i & n.childLanes) !== 0), s) {
          if (o) return Uv(t, n, i);
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ne(ot, ot.current), o) break;
        return null;
      case 22:
        return n.lanes = 0, Rv(t, n, i, n.pendingProps);
      case 24:
        Da(n, ft, t.memoizedState.cache);
    }
    return da(t, n, i);
  }
  function kv(t, n, i) {
    if (t !== null) if (t.memoizedProps !== n.pendingProps) ht = !0;
    else {
      if (!Vc(t, i) && (n.flags & 128) === 0) return ht = !1, s2(t, n, i);
      ht = (t.flags & 131072) !== 0;
    }
    else ht = !1, Me && (n.flags & 1048576) !== 0 && _m(n, ro, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var o = n.pendingProps;
          if (t = yi(n.elementType), n.type = t, typeof t == "function") Ws(t) ? (o = Ti(t, o), n.tag = 1, n = Lv(null, n, t, o, i)) : (n.tag = 0, n = Uc(null, n, t, o, i));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === B) {
                n.tag = 11, n = xv(null, n, t, o, i);
                break e;
              } else if (s === ee) {
                n.tag = 14, n = Ov(null, n, t, o, i);
                break e;
              }
            }
            throw n = V(t) || t, Error(u(306, n, ""));
          }
        }
        return n;
      case 0:
        return Uc(t, n, n.type, n.pendingProps, i);
      case 1:
        return o = n.type, s = Ti(o, n.pendingProps), Lv(t, n, o, s, i);
      case 3:
        e: {
          if (Ve(n, n.stateNode.containerInfo), t === null) throw Error(u(387));
          o = n.pendingProps;
          var f = n.memoizedState;
          s = f.element, fc(t, n), mo(n, o, null, i);
          var v = n.memoizedState;
          if (o = v.cache, Da(n, ft, o), o !== f.cache && rc(n, [ft], i, !0), ho(), o = v.element, f.isDehydrated) if (f = {
            element: o,
            isDehydrated: !1,
            cache: v.cache
          }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
            n = Hv(t, n, o, i);
            break e;
          } else if (o !== s) {
            s = gn(Error(u(424)), n), oo(s), n = Hv(t, n, o, i);
            break e;
          } else
            for (t = n.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ye = En(t.firstChild), Mt = n, Me = !0, Ra = null, _n = !0, i = zm(n, null, o, i), n.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (mi(), o === s) {
              n = da(t, n, i);
              break e;
            }
            Nt(t, n, o, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Vl(t, n), t === null ? (i = Qp(n.type, null, n.pendingProps, null)) ? n.memoizedState = i : Me || (i = n.type, t = n.pendingProps, o = uu(be.current).createElement(i), o[Ot] = n, o[It] = t, Dt(o, i, t), Ct(o), n.stateNode = o) : n.memoizedState = Qp(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
      case 27:
        return Ke(n), t === null && Me && (o = n.stateNode = qp(n.type, n.pendingProps, be.current), Mt = n, _n = !0, s = Ye, Ga(n.type) ? (Tf = s, Ye = En(o.firstChild)) : Ye = s), Nt(t, n, n.pendingProps.children, i), Vl(t, n), t === null && (n.flags |= 4194304), n.child;
      case 5:
        return t === null && Me && ((s = o = Ye) && (o = B2(o, n.type, n.pendingProps, _n), o !== null ? (n.stateNode = o, Mt = n, Ye = En(o.firstChild), _n = !1, s = !0) : s = !1), s || Na(n)), Ke(n), s = n.type, f = n.pendingProps, v = t !== null ? t.memoizedProps : null, o = f.children, bf(s, f) ? o = null : v !== null && bf(s, v) && (n.flags |= 32), n.memoizedState !== null && (s = yc(t, n, Q_, null, null, i), Lo._currentValue = s), Vl(t, n), Nt(t, n, o, i), n.child;
      case 6:
        return t === null && Me && ((t = i = Ye) && (i = U2(i, n.pendingProps, _n), i !== null ? (n.stateNode = i, Mt = n, Ye = null, t = !0) : t = !1), t || Na(n)), null;
      case 13:
        return jv(t, n, i);
      case 4:
        return Ve(n, n.stateNode.containerInfo), o = n.pendingProps, t === null ? n.child = _i(n, null, o, i) : Nt(t, n, o, i), n.child;
      case 11:
        return xv(t, n, n.type, n.pendingProps, i);
      case 7:
        return Nt(t, n, n.pendingProps, i), n.child;
      case 8:
        return Nt(t, n, n.pendingProps.children, i), n.child;
      case 12:
        return Nt(t, n, n.pendingProps.children, i), n.child;
      case 10:
        return o = n.pendingProps, Da(n, n.type, o.value), Nt(t, n, o.children, i), n.child;
      case 9:
        return s = n.type._context, o = n.pendingProps.children, pi(n), s = Rt(s), o = o(s), n.flags |= 1, Nt(t, n, o, i), n.child;
      case 14:
        return Ov(t, n, n.type, n.pendingProps, i);
      case 15:
        return Mv(t, n, n.type, n.pendingProps, i);
      case 19:
        return Uv(t, n, i);
      case 31:
        return u2(t, n, i);
      case 22:
        return Rv(t, n, i, n.pendingProps);
      case 24:
        return pi(n), o = Rt(ft), t === null ? (s = uc(), s === null && (s = Ge, f = oc(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= i), s = f), n.memoizedState = {
          parent: o,
          cache: s
        }, cc(n), Da(n, ft, s)) : ((t.lanes & i) !== 0 && (fc(t, n), mo(n, null, null, i), ho()), s = t.memoizedState, f = n.memoizedState, s.parent !== o ? (s = {
          parent: o,
          cache: o
        }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Da(n, ft, o)) : (o = f.cache, Da(n, ft, o), o !== s.cache && rc(n, [ft], i, !0))), Nt(t, n, n.pendingProps.children, i), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(u(156, n.tag));
  }
  function ha(t) {
    t.flags |= 4;
  }
  function Fc(t, n, i, o, s) {
    if ((n = (t.mode & 32) !== 0) && (n = !1), n) {
      if (t.flags |= 16777216, (s & 335544128) === s) if (t.stateNode.complete) t.flags |= 8192;
      else if (dp()) t.flags |= 8192;
      else throw bi = Rl, sc;
    } else t.flags &= -16777217;
  }
  function Pv(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !n0(n)) if (dp()) t.flags |= 8192;
    else throw bi = Rl, sc;
  }
  function Xl(t, n) {
    n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? ul() : 536870912, t.lanes |= n, mr |= n);
  }
  function _o(t, n) {
    if (!Me) switch (t.tailMode) {
      case "hidden":
        n = t.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = t.tail;
        for (var o = null; i !== null; ) i.alternate !== null && (o = i), i = i.sibling;
        o === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null;
    }
  }
  function We(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, i = 0, o = 0;
    if (n) for (var s = t.child; s !== null; ) i |= s.lanes | s.childLanes, o |= s.subtreeFlags & 65011712, o |= s.flags & 65011712, s.return = t, s = s.sibling;
    else for (s = t.child; s !== null; ) i |= s.lanes | s.childLanes, o |= s.subtreeFlags, o |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= o, t.childLanes = i, n;
  }
  function c2(t, n, i) {
    var o = n.pendingProps;
    switch (ec(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return We(n), null;
      case 1:
        return We(n), null;
      case 3:
        return i = n.stateNode, o = null, t !== null && (o = t.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), sa(ft), ke(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (tr(n) ? ha(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, nc())), We(n), null;
      case 26:
        var s = n.type, f = n.memoizedState;
        return t === null ? (ha(n), f !== null ? (We(n), Pv(n, f)) : (We(n), Fc(n, s, null, o, i))) : f ? f !== t.memoizedState ? (ha(n), We(n), Pv(n, f)) : (We(n), n.flags &= -16777217) : (t = t.memoizedProps, t !== o && ha(n), We(n), Fc(n, s, t, o, i)), null;
      case 27:
        if (nt(n), i = be.current, s = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && ha(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(u(166));
            return We(n), null;
          }
          t = ce.current, tr(n) ? Sm(n, t) : (t = qp(s, o, i), n.stateNode = t, ha(n));
        }
        return We(n), null;
      case 5:
        if (nt(n), s = n.type, t !== null && n.stateNode != null) t.memoizedProps !== o && ha(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(u(166));
            return We(n), null;
          }
          if (f = ce.current, tr(n)) Sm(n, f);
          else {
            var v = uu(be.current);
            switch (f) {
              case 1:
                f = v.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    f = v.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                    break;
                  case "select":
                    f = typeof o.is == "string" ? v.createElement("select", { is: o.is }) : v.createElement("select"), o.multiple ? f.multiple = !0 : o.size && (f.size = o.size);
                    break;
                  default:
                    f = typeof o.is == "string" ? v.createElement(s, { is: o.is }) : v.createElement(s);
                }
            }
            f[Ot] = n, f[It] = o;
            e: for (v = n.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === n) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === n) break e;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            n.stateNode = f;
            e: switch (Dt(f, s, o), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && ha(n);
          }
        }
        return We(n), Fc(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, i), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== o && ha(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(u(166));
          if (t = be.current, tr(n)) {
            if (t = n.stateNode, i = n.memoizedProps, o = null, s = Mt, s !== null) switch (s.tag) {
              case 27:
              case 5:
                o = s.memoizedProps;
            }
            t[Ot] = n, t = !!(t.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Bp(t.nodeValue, i)), t || Na(n, !0);
          } else t = uu(t).createTextNode(o), t[Ot] = n, n.stateNode = t;
        }
        return We(n), null;
      case 31:
        if (i = n.memoizedState, t === null || t.memoizedState !== null) {
          if (o = tr(n), i !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (t = n.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[Ot] = n;
            } else mi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            We(n), t = !1;
          } else i = nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), t = !0;
          if (!t)
            return n.flags & 256 ? (an(n), n) : (an(n), null);
          if ((n.flags & 128) !== 0) throw Error(u(558));
        }
        return We(n), null;
      case 13:
        if (o = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = tr(n), o !== null && o.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
              s[Ot] = n;
            } else mi(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            We(n), s = !1;
          } else s = nc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (an(n), n) : (an(n), null);
        }
        return an(n), (n.flags & 128) !== 0 ? (n.lanes = i, n) : (i = o !== null, t = t !== null && t.memoizedState !== null, i && (o = n.child, s = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (s = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== s && (o.flags |= 2048)), i !== t && i && (n.child.flags |= 8192), Xl(n, n.updateQueue), We(n), null);
      case 4:
        return ke(), t === null && zp(n.stateNode.containerInfo), We(n), null;
      case 10:
        return sa(n.type), We(n), null;
      case 19:
        if (W(ot), o = n.memoizedState, o === null) return We(n), null;
        if (s = (n.flags & 128) !== 0, f = o.rendering, f === null) if (s) _o(o, !1);
        else {
          if (it !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
            if (f = Ll(t), f !== null) {
              for (n.flags |= 128, _o(o, !1), t = f.updateQueue, n.updateQueue = t, Xl(n, t), n.subtreeFlags = 0, t = i, i = n.child; i !== null; ) gm(i, t), i = i.sibling;
              return ne(ot, ot.current & 1 | 2), Me && la(n, o.treeForkCount), n.child;
            }
            t = t.sibling;
          }
          o.tail !== null && St() > Kl && (n.flags |= 128, s = !0, _o(o, !1), n.lanes = 4194304);
        }
        else {
          if (!s) if (t = Ll(f), t !== null) {
            if (n.flags |= 128, s = !0, t = t.updateQueue, n.updateQueue = t, Xl(n, t), _o(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Me) return We(n), null;
          } else 2 * St() - o.renderingStartTime > Kl && i !== 536870912 && (n.flags |= 128, s = !0, _o(o, !1), n.lanes = 4194304);
          o.isBackwards ? (f.sibling = n.child, n.child = f) : (t = o.last, t !== null ? t.sibling = f : n.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = St(), t.sibling = null, i = ot.current, ne(ot, s ? i & 1 | 2 : i & 1), Me && la(n, o.treeForkCount), t) : (We(n), null);
      case 22:
      case 23:
        return an(n), vc(), o = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (We(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : We(n), i = n.updateQueue, i !== null && Xl(n, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), t !== null && W(gi), null;
      case 24:
        return i = null, t !== null && (i = t.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), sa(ft), We(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, n.tag));
  }
  function f2(t, n) {
    switch (ec(n), n.tag) {
      case 1:
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return sa(ft), ke(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return nt(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (an(n), n.alternate === null) throw Error(u(340));
          mi();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 13:
        if (an(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null) throw Error(u(340));
          mi();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return W(ot), null;
      case 4:
        return ke(), null;
      case 10:
        return sa(n.type), null;
      case 22:
      case 23:
        return an(n), vc(), t !== null && W(gi), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 24:
        return sa(ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zv(t, n) {
    switch (ec(n), n.tag) {
      case 3:
        sa(ft), ke();
        break;
      case 26:
      case 27:
      case 5:
        nt(n);
        break;
      case 4:
        ke();
        break;
      case 31:
        n.memoizedState !== null && an(n);
        break;
      case 13:
        an(n);
        break;
      case 19:
        W(ot);
        break;
      case 10:
        sa(n.type);
        break;
      case 22:
      case 23:
        an(n), vc(), t !== null && W(gi);
        break;
      case 24:
        sa(ft);
    }
  }
  function wo(t, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            o = void 0;
            var f = i.create, v = i.inst;
            o = f(), v.destroy = o;
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (w) {
      Ue(n, n.return, w);
    }
  }
  function ja(t, n, i) {
    try {
      var o = n.updateQueue, s = o !== null ? o.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        o = f;
        do {
          if ((o.tag & t) === t) {
            var v = o.inst, w = v.destroy;
            if (w !== void 0) {
              v.destroy = void 0, s = n;
              var O = i, Z = w;
              try {
                Z();
              } catch (X) {
                Ue(s, O, X);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (X) {
      Ue(n, n.return, X);
    }
  }
  function Iv(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var i = t.stateNode;
      try {
        Hm(n, i);
      } catch (o) {
        Ue(t, t.return, o);
      }
    }
  }
  function Gv(t, n, i) {
    i.props = Ti(t.type, t.memoizedProps), i.state = t.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      Ue(t, n, o);
    }
  }
  function So(t, n) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof i == "function" ? t.refCleanup = i(o) : i.current = o;
      }
    } catch (s) {
      Ue(t, n, s);
    }
  }
  function Vn(t, n) {
    var i = t.ref, o = t.refCleanup;
    if (i !== null) if (typeof o == "function") try {
      o();
    } catch (s) {
      Ue(t, n, s);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof i == "function") try {
      i(null);
    } catch (s) {
      Ue(t, n, s);
    }
    else i.current = null;
  }
  function $v(t) {
    var n = t.type, i = t.memoizedProps, o = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (s) {
      Ue(t, t.return, s);
    }
  }
  function Xc(t, n, i) {
    try {
      var o = t.stateNode;
      N2(o, t.type, i, n), o[It] = n;
    } catch (s) {
      Ue(t, t.return, s);
    }
  }
  function Vv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ga(t.type) || t.tag === 4;
  }
  function qc(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Vv(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ga(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yc(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(t), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = ia));
    else if (o !== 4 && (o === 27 && Ga(t.type) && (i = t.stateNode, n = null), t = t.child, t !== null)) for (Yc(t, n, i), t = t.sibling; t !== null; ) Yc(t, n, i), t = t.sibling;
  }
  function ql(t, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, n ? i.insertBefore(t, n) : i.appendChild(t);
    else if (o !== 4 && (o === 27 && Ga(t.type) && (i = t.stateNode), t = t.child, t !== null)) for (ql(t, n, i), t = t.sibling; t !== null; ) ql(t, n, i), t = t.sibling;
  }
  function Fv(t) {
    var n = t.stateNode, i = t.memoizedProps;
    try {
      for (var o = t.type, s = n.attributes; s.length; ) n.removeAttributeNode(s[0]);
      Dt(n, o, i), n[Ot] = t, n[It] = i;
    } catch (f) {
      Ue(t, t.return, f);
    }
  }
  var ma = !1, mt = !1, Wc = !1, Xv = typeof WeakSet == "function" ? WeakSet : Set, At = null;
  function d2(t, n) {
    if (t = t.containerInfo, gf = vu, t = um(t), Gs(t)) {
      if ("selectionStart" in t) var i = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else e: {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var s = o.anchorOffset, f = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, f.nodeType;
          } catch {
            i = null;
            break e;
          }
          var v = 0, w = -1, O = -1, Z = 0, X = 0, J = t, G = null;
          t: for (; ; ) {
            for (var $; J !== i || s !== 0 && J.nodeType !== 3 || (w = v + s), J !== f || o !== 0 && J.nodeType !== 3 || (O = v + o), J.nodeType === 3 && (v += J.nodeValue.length), ($ = J.firstChild) !== null; )
              G = J, J = $;
            for (; ; ) {
              if (J === t) break t;
              if (G === i && ++Z === s && (w = v), G === f && ++X === o && (O = v), ($ = J.nextSibling) !== null) break;
              J = G, G = J.parentNode;
            }
            J = $;
          }
          i = w === -1 || O === -1 ? null : {
            start: w,
            end: O
          };
        } else i = null;
      }
      i = i || {
        start: 0,
        end: 0
      };
    } else i = null;
    for (yf = {
      focusedElem: t,
      selectionRange: i
    }, vu = !1, At = n; At !== null; ) if (n = At, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null) t.return = n, At = t;
    else for (; At !== null; ) {
      switch (n = At, f = n.alternate, t = n.flags, n.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = n.updateQueue, t = t !== null ? t.events : null, t !== null)) for (i = 0; i < t.length; i++) s = t[i], s.ref.impl = s.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && f !== null) {
            t = void 0, i = n, s = f.memoizedProps, f = f.memoizedState, o = i.stateNode;
            try {
              var fe = Ti(i.type, s);
              t = o.getSnapshotBeforeUpdate(fe, f), o.__reactInternalSnapshotBeforeUpdate = t;
            } catch (ge) {
              Ue(i, i.return, ge);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = n.stateNode.containerInfo, i = t.nodeType, i === 9) wf(t);
            else if (i === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                wf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(u(163));
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, At = t;
        break;
      }
      At = n.return;
    }
  }
  function qv(t, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        pa(t, i), o & 4 && wo(5, i);
        break;
      case 1:
        if (pa(t, i), o & 4) if (t = i.stateNode, n === null) try {
          t.componentDidMount();
        } catch (v) {
          Ue(i, i.return, v);
        }
        else {
          var s = Ti(i.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            t.componentDidUpdate(s, n, t.__reactInternalSnapshotBeforeUpdate);
          } catch (v) {
            Ue(i, i.return, v);
          }
        }
        o & 64 && Iv(i), o & 512 && So(i, i.return);
        break;
      case 3:
        if (pa(t, i), o & 64 && (t = i.updateQueue, t !== null)) {
          if (n = null, i.child !== null) switch (i.child.tag) {
            case 27:
            case 5:
              n = i.child.stateNode;
              break;
            case 1:
              n = i.child.stateNode;
          }
          try {
            Hm(t, n);
          } catch (v) {
            Ue(i, i.return, v);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Fv(i);
      case 26:
      case 5:
        pa(t, i), n === null && o & 4 && $v(i), o & 512 && So(i, i.return);
        break;
      case 12:
        pa(t, i);
        break;
      case 31:
        pa(t, i), o & 4 && Qv(t, i);
        break;
      case 13:
        pa(t, i), o & 4 && Kv(t, i), o & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = w2.bind(null, i), k2(t, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || ma, !o) {
          n = n !== null && n.memoizedState !== null || mt, s = ma;
          var f = mt;
          ma = o, (mt = n) && !f ? ga(t, i, (i.subtreeFlags & 8772) !== 0) : pa(t, i), ma = s, mt = f;
        }
        break;
      case 30:
        break;
      default:
        pa(t, i);
    }
  }
  function Yv(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, Yv(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && As(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Je = null, $t = !1;
  function va(t, n, i) {
    for (i = i.child; i !== null; ) Wv(t, n, i), i = i.sibling;
  }
  function Wv(t, n, i) {
    if (Bt && typeof Bt.onCommitFiberUnmount == "function") try {
      Bt.onCommitFiberUnmount(li, i);
    } catch {
    }
    switch (i.tag) {
      case 26:
        mt || Vn(i, n), va(t, n, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        mt || Vn(i, n);
        var o = Je, s = $t;
        Ga(i.type) && (Je = i.stateNode, $t = !1), va(t, n, i), No(i.stateNode), Je = o, $t = s;
        break;
      case 5:
        mt || Vn(i, n);
      case 6:
        if (o = Je, s = $t, Je = null, va(t, n, i), Je = o, $t = s, Je !== null) if ($t) try {
          (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(i.stateNode);
        } catch (f) {
          Ue(i, n, f);
        }
        else try {
          Je.removeChild(i.stateNode);
        } catch (f) {
          Ue(i, n, f);
        }
        break;
      case 18:
        Je !== null && ($t ? (t = Je, Gp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), Sr(t)) : Gp(Je, i.stateNode));
        break;
      case 4:
        o = Je, s = $t, Je = i.stateNode.containerInfo, $t = !0, va(t, n, i), Je = o, $t = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ja(2, i, n), mt || ja(4, i, n), va(t, n, i);
        break;
      case 1:
        mt || (Vn(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Gv(i, n, o)), va(t, n, i);
        break;
      case 21:
        va(t, n, i);
        break;
      case 22:
        mt = (o = mt) || i.memoizedState !== null, va(t, n, i), mt = o;
        break;
      default:
        va(t, n, i);
    }
  }
  function Qv(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Sr(t);
      } catch (i) {
        Ue(n, n.return, i);
      }
    }
  }
  function Kv(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Sr(t);
    } catch (i) {
      Ue(n, n.return, i);
    }
  }
  function h2(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Xv()), n;
      case 22:
        return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Xv()), n;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Yl(t, n) {
    var i = h2(t);
    n.forEach(function(o) {
      if (!i.has(o)) {
        i.add(o);
        var s = S2.bind(null, t, o);
        o.then(s, s);
      }
    });
  }
  function Vt(t, n) {
    var i = n.deletions;
    if (i !== null) for (var o = 0; o < i.length; o++) {
      var s = i[o], f = t, v = n, w = v;
      e: for (; w !== null; ) {
        switch (w.tag) {
          case 27:
            if (Ga(w.type)) {
              Je = w.stateNode, $t = !1;
              break e;
            }
            break;
          case 5:
            Je = w.stateNode, $t = !1;
            break e;
          case 3:
          case 4:
            Je = w.stateNode.containerInfo, $t = !0;
            break e;
        }
        w = w.return;
      }
      if (Je === null) throw Error(u(160));
      Wv(f, v, s), Je = null, $t = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
    }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) Jv(n, t), n = n.sibling;
  }
  var Nn = null;
  function Jv(t, n) {
    var i = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Vt(n, t), Ft(t), o & 4 && (ja(3, t, t.return), wo(3, t), ja(5, t, t.return));
        break;
      case 1:
        Vt(n, t), Ft(t), o & 512 && (mt || i === null || Vn(i, i.return)), o & 64 && ma && (t = t.updateQueue, t !== null && (o = t.callbacks, o !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var s = Nn;
        if (Vt(n, t), Ft(t), o & 512 && (mt || i === null || Vn(i, i.return)), o & 4) {
          var f = i !== null ? i.memoizedState : null;
          if (o = t.memoizedState, i === null) if (o === null) if (t.stateNode === null) {
            e: {
              o = t.type, i = t.memoizedProps, s = s.ownerDocument || s;
              t: switch (o) {
                case "title":
                  f = s.getElementsByTagName("title")[0], (!f || f[qr] || f[Ot] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(o), s.head.insertBefore(f, s.querySelector("head > title"))), Dt(f, o, i), f[Ot] = t, Ct(f), o = f;
                  break e;
                case "link":
                  var v = e0("link", "href", s).get(o + (i.href || ""));
                  if (v) {
                    for (var w = 0; w < v.length; w++) if (f = v[w], f.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && f.getAttribute("rel") === (i.rel == null ? null : i.rel) && f.getAttribute("title") === (i.title == null ? null : i.title) && f.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                      v.splice(w, 1);
                      break t;
                    }
                  }
                  f = s.createElement(o), Dt(f, o, i), s.head.appendChild(f);
                  break;
                case "meta":
                  if (v = e0("meta", "content", s).get(o + (i.content || ""))) {
                    for (w = 0; w < v.length; w++) if (f = v[w], f.getAttribute("content") === (i.content == null ? null : "" + i.content) && f.getAttribute("name") === (i.name == null ? null : i.name) && f.getAttribute("property") === (i.property == null ? null : i.property) && f.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && f.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                      v.splice(w, 1);
                      break t;
                    }
                  }
                  f = s.createElement(o), Dt(f, o, i), s.head.appendChild(f);
                  break;
                default:
                  throw Error(u(468, o));
              }
              f[Ot] = t, Ct(f), o = f;
            }
            t.stateNode = o;
          } else t0(s, t.type, t.stateNode);
          else t.stateNode = Jp(s, o, t.memoizedProps);
          else f !== o ? (f === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : f.count--, o === null ? t0(s, t.type, t.stateNode) : Jp(s, o, t.memoizedProps)) : o === null && t.stateNode !== null && Xc(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Vt(n, t), Ft(t), o & 512 && (mt || i === null || Vn(i, i.return)), i !== null && o & 4 && Xc(t, t.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (Vt(n, t), Ft(t), o & 512 && (mt || i === null || Vn(i, i.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            Vi(s, "");
          } catch (fe) {
            Ue(t, t.return, fe);
          }
        }
        o & 4 && t.stateNode != null && (s = t.memoizedProps, Xc(t, s, i !== null ? i.memoizedProps : s)), o & 1024 && (Wc = !0);
        break;
      case 6:
        if (Vt(n, t), Ft(t), o & 4) {
          if (t.stateNode === null) throw Error(u(162));
          o = t.memoizedProps, i = t.stateNode;
          try {
            i.nodeValue = o;
          } catch (fe) {
            Ue(t, t.return, fe);
          }
        }
        break;
      case 3:
        if (fu = null, s = Nn, Nn = su(n.containerInfo), Vt(n, t), Nn = s, Ft(t), o & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Sr(n.containerInfo);
        } catch (fe) {
          Ue(t, t.return, fe);
        }
        Wc && (Wc = !1, ep(t));
        break;
      case 4:
        o = Nn, Nn = su(t.stateNode.containerInfo), Vt(n, t), Ft(t), Nn = o;
        break;
      case 12:
        Vt(n, t), Ft(t);
        break;
      case 31:
        Vt(n, t), Ft(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Yl(t, o)));
        break;
      case 13:
        Vt(n, t), Ft(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Ql = St()), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Yl(t, o)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var O = i !== null && i.memoizedState !== null, Z = ma, X = mt;
        if (ma = Z || s, mt = X || O, Vt(n, t), mt = X, ma = Z, Ft(t), o & 8192) e: for (n = t.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (i === null || O || ma || mt || Ci(t)), i = null, n = t; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (i === null) {
              O = i = n;
              try {
                if (f = O.stateNode, s) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                else {
                  w = O.stateNode;
                  var J = O.memoizedProps.style, G = J != null && J.hasOwnProperty("display") ? J.display : null;
                  w.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                }
              } catch (fe) {
                Ue(O, O.return, fe);
              }
            }
          } else if (n.tag === 6) {
            if (i === null) {
              O = n;
              try {
                O.stateNode.nodeValue = s ? "" : O.memoizedProps;
              } catch (fe) {
                Ue(O, O.return, fe);
              }
            }
          } else if (n.tag === 18) {
            if (i === null) {
              O = n;
              try {
                var $ = O.stateNode;
                s ? $p($, !0) : $p(O.stateNode, !1);
              } catch (fe) {
                Ue(O, O.return, fe);
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) break e;
            i === n && (i = null), n = n.return;
          }
          i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
        }
        o & 4 && (o = t.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, Yl(t, i))));
        break;
      case 19:
        Vt(n, t), Ft(t), o & 4 && (o = t.updateQueue, o !== null && (t.updateQueue = null, Yl(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Vt(n, t), Ft(t);
    }
  }
  function Ft(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var i, o = t.return; o !== null; ) {
          if (Vv(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(u(160));
        switch (i.tag) {
          case 27:
            var s = i.stateNode;
            ql(t, qc(t), s);
            break;
          case 5:
            var f = i.stateNode;
            i.flags & 32 && (Vi(f, ""), i.flags &= -33), ql(t, qc(t), f);
            break;
          case 3:
          case 4:
            var v = i.stateNode.containerInfo;
            Yc(t, qc(t), v);
            break;
          default:
            throw Error(u(161));
        }
      } catch (w) {
        Ue(t, t.return, w);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function ep(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var n = t;
      ep(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling;
    }
  }
  function pa(t, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) qv(t, n.alternate, n), n = n.sibling;
  }
  function Ci(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ja(4, n, n.return), Ci(n);
          break;
        case 1:
          Vn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Gv(n, n.return, i), Ci(n);
          break;
        case 27:
          No(n.stateNode);
        case 26:
        case 5:
          Vn(n, n.return), Ci(n);
          break;
        case 22:
          n.memoizedState === null && Ci(n);
          break;
        case 30:
          Ci(n);
          break;
        default:
          Ci(n);
      }
      t = t.sibling;
    }
  }
  function ga(t, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, s = t, f = n, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ga(s, f, i), wo(4, f);
          break;
        case 1:
          if (ga(s, f, i), o = f, s = o.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (Z) {
            Ue(o, o.return, Z);
          }
          if (o = f, s = o.updateQueue, s !== null) {
            var w = o.stateNode;
            try {
              var O = s.shared.hiddenCallbacks;
              if (O !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < O.length; s++) Lm(O[s], w);
            } catch (Z) {
              Ue(o, o.return, Z);
            }
          }
          i && v & 64 && Iv(f), So(f, f.return);
          break;
        case 27:
          Fv(f);
        case 26:
        case 5:
          ga(s, f, i), i && o === null && v & 4 && $v(f), So(f, f.return);
          break;
        case 12:
          ga(s, f, i);
          break;
        case 31:
          ga(s, f, i), i && v & 4 && Qv(s, f);
          break;
        case 13:
          ga(s, f, i), i && v & 4 && Kv(s, f);
          break;
        case 22:
          f.memoizedState === null && ga(s, f, i), So(f, f.return);
          break;
        case 30:
          break;
        default:
          ga(s, f, i);
      }
      n = n.sibling;
    }
  }
  function Qc(t, n) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && lo(i));
  }
  function Kc(t, n) {
    t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && lo(t));
  }
  function Dn(t, n, i, o) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) tp(t, n, i, o), n = n.sibling;
  }
  function tp(t, n, i, o) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(t, n, i, o), s & 2048 && wo(9, n);
        break;
      case 1:
        Dn(t, n, i, o);
        break;
      case 3:
        Dn(t, n, i, o), s & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && lo(t)));
        break;
      case 12:
        if (s & 2048) {
          Dn(t, n, i, o), t = n.stateNode;
          try {
            var f = n.memoizedProps, v = f.id, w = f.onPostCommit;
            typeof w == "function" && w(v, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (O) {
            Ue(n, n.return, O);
          }
        } else Dn(t, n, i, o);
        break;
      case 31:
        Dn(t, n, i, o);
        break;
      case 13:
        Dn(t, n, i, o);
        break;
      case 23:
        break;
      case 22:
        f = n.stateNode, v = n.alternate, n.memoizedState !== null ? f._visibility & 2 ? Dn(t, n, i, o) : Eo(t, n) : f._visibility & 2 ? Dn(t, n, i, o) : (f._visibility |= 2, fr(t, n, i, o, (n.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Qc(v, n);
        break;
      case 24:
        Dn(t, n, i, o), s & 2048 && Kc(n.alternate, n);
        break;
      default:
        Dn(t, n, i, o);
    }
  }
  function fr(t, n, i, o, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var f = t, v = n, w = i, O = o, Z = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          fr(f, v, w, O, s), wo(8, v);
          break;
        case 23:
          break;
        case 22:
          var X = v.stateNode;
          v.memoizedState !== null ? X._visibility & 2 ? fr(f, v, w, O, s) : Eo(f, v) : (X._visibility |= 2, fr(f, v, w, O, s)), s && Z & 2048 && Qc(v.alternate, v);
          break;
        case 24:
          fr(f, v, w, O, s), s && Z & 2048 && Kc(v.alternate, v);
          break;
        default:
          fr(f, v, w, O, s);
      }
      n = n.sibling;
    }
  }
  function Eo(t, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var i = t, o = n, s = o.flags;
      switch (o.tag) {
        case 22:
          Eo(i, o), s & 2048 && Qc(o.alternate, o);
          break;
        case 24:
          Eo(i, o), s & 2048 && Kc(o.alternate, o);
          break;
        default:
          Eo(i, o);
      }
      n = n.sibling;
    }
  }
  var To = 8192;
  function dr(t, n, i) {
    if (t.subtreeFlags & To) for (t = t.child; t !== null; ) np(t, n, i), t = t.sibling;
  }
  function np(t, n, i) {
    switch (t.tag) {
      case 26:
        dr(t, n, i), t.flags & To && t.memoizedState !== null && Q2(i, Nn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        dr(t, n, i);
        break;
      case 3:
      case 4:
        var o = Nn;
        Nn = su(t.stateNode.containerInfo), dr(t, n, i), Nn = o;
        break;
      case 22:
        t.memoizedState === null && (o = t.alternate, o !== null && o.memoizedState !== null ? (o = To, To = 16777216, dr(t, n, i), To = o) : dr(t, n, i));
        break;
      default:
        dr(t, n, i);
    }
  }
  function ap(t) {
    var n = t.alternate;
    if (n !== null && (t = n.child, t !== null)) {
      n.child = null;
      do
        n = t.sibling, t.sibling = null, t = n;
      while (t !== null);
    }
  }
  function Co(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var i = 0; i < n.length; i++) {
        var o = n[i];
        At = o, rp(o, t);
      }
      ap(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) ip(t), t = t.sibling;
  }
  function ip(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Co(t), t.flags & 2048 && ja(9, t, t.return);
        break;
      case 3:
        Co(t);
        break;
      case 12:
        Co(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, Wl(t)) : Co(t);
        break;
      default:
        Co(t);
    }
  }
  function Wl(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var i = 0; i < n.length; i++) {
        var o = n[i];
        At = o, rp(o, t);
      }
      ap(t);
    }
    for (t = t.child; t !== null; ) {
      switch (n = t, n.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, n, n.return), Wl(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, Wl(n));
          break;
        default:
          Wl(n);
      }
      t = t.sibling;
    }
  }
  function rp(t, n) {
    for (; At !== null; ) {
      var i = At;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          lo(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, At = o;
      else e: for (i = t; At !== null; ) {
        o = At;
        var s = o.sibling, f = o.return;
        if (Yv(o), o === i) {
          At = null;
          break e;
        }
        if (s !== null) {
          s.return = f, At = s;
          break e;
        }
        At = f;
      }
    }
  }
  var m2 = {
    getCacheForType: function(t) {
      var n = Rt(ft), i = n.data.get(t);
      return i === void 0 && (i = t(), n.data.set(t, i)), i;
    },
    cacheSignal: function() {
      return Rt(ft).controller.signal;
    }
  }, v2 = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Ge = null, Te = null, xe = 0, Be = 0, rn = null, Ba = !1, hr = !1, Jc = !1, ya = 0, it = 0, Ua = 0, Ai = 0, ef = 0, on = 0, mr = 0, Ao = null, Xt = null, tf = !1, Ql = 0, op = 0, Kl = 1 / 0, Jl = null, ka = null, bt = 0, Pa = null, vr = null, ba = 0, nf = 0, af = null, lp = null, xo = 0, rf = null;
  function Sn() {
    return (je & 2) !== 0 && xe !== 0 ? xe & -xe : E.T !== null ? ff() : Ah();
  }
  function up() {
    if (on === 0) if ((xe & 536870912) === 0 || Me) {
      var t = gt;
      gt <<= 1, (gt & 3932160) === 0 && (gt = 262144), on = t;
    } else on = 536870912;
    return t = nn.current, t !== null && (t.flags |= 32), on;
  }
  function qt(t, n, i) {
    (t === Ge && (Be === 2 || Be === 9) || t.cancelPendingCommit !== null) && (pr(t, 0), Za(t, xe, on, !1)), ki(t, i), ((je & 2) === 0 || t !== Ge) && (t === Ge && ((je & 2) === 0 && (Ai |= i), it === 4 && Za(t, xe, on, !1)), _a(t));
  }
  function sp(t, n, i) {
    if ((je & 6) !== 0) throw Error(u(327));
    var o = !i && (n & 127) === 0 && (n & t.expiredLanes) === 0 || Aa(t, n), s = o ? y2(t, n) : lf(t, n, !0), f = o;
    do {
      if (s === 0) {
        hr && !o && Za(t, n, 0, !1);
        break;
      } else {
        if (i = t.current.alternate, f && !p2(i)) {
          s = lf(t, n, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = n, t.errorRecoveryDisabledLanes & f) var v = 0;
          else v = t.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            n = v;
            e: {
              var w = t;
              s = Ao;
              var O = w.current.memoizedState.isDehydrated;
              if (O && (pr(w, v).flags |= 256), v = lf(w, v, !1), v !== 2) {
                if (Jc && !O) {
                  w.errorRecoveryDisabledLanes |= f, Ai |= f, s = 4;
                  break e;
                }
                f = Xt, Xt = s, f !== null && (Xt === null ? Xt = f : Xt.push.apply(Xt, f));
              }
              s = v;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          pr(t, 0), Za(t, n, 0, !0);
          break;
        }
        e: {
          switch (o = t, f = s, f) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Za(o, n, on, !Ba);
              break e;
            case 2:
              Xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((n & 62914560) === n && (s = Ql + 300 - St(), 10 < s)) {
            if (Za(o, n, on, !Ba), Jt(o, 0, !0) !== 0) break e;
            ba = n, o.timeoutHandle = Zp(cp.bind(null, o, i, Xt, Jl, tf, n, on, Ai, mr, Ba, f, "Throttled", -0, 0), s);
            break e;
          }
          cp(o, i, Xt, Jl, tf, n, on, Ai, mr, Ba, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    _a(t);
  }
  function cp(t, n, i, o, s, f, v, w, O, Z, X, J, G, $) {
    if (t.timeoutHandle = -1, J = n.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
      J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ia
      }, np(n, f, J);
      var fe = (f & 62914560) === f ? Ql - St() : (f & 4194048) === f ? op - St() : 0;
      if (fe = K2(J, fe), fe !== null) {
        ba = f, t.cancelPendingCommit = fe(yp.bind(null, t, n, f, i, o, s, v, w, O, X, J, null, G, $)), Za(t, f, v, !Z);
        return;
      }
    }
    yp(t, n, f, i, o, s, v, w, O);
  }
  function p2(t) {
    for (var n = t; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null))) for (var o = 0; o < i.length; o++) {
        var s = i[o], f = s.getSnapshot;
        s = s.value;
        try {
          if (!en(f(), s)) return !1;
        } catch {
          return !1;
        }
      }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null) i.return = n, n = i;
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Za(t, n, i, o) {
    n &= ~ef, n &= ~Ai, t.suspendedLanes |= n, t.pingedLanes &= ~n, o && (t.warmLanes |= n), o = t.expirationTimes;
    for (var s = n; 0 < s; ) {
      var f = 31 - te(s), v = 1 << f;
      o[f] = -1, s &= ~v;
    }
    i !== 0 && Fr(t, i, n);
  }
  function eu() {
    return (je & 6) === 0 ? (Oo(0, !1), !1) : !0;
  }
  function of() {
    if (Te !== null) {
      if (Be === 0) var t = Te.return;
      else t = Te, ua = vi = null, wc(t), or = null, so = 0, t = Te;
      for (; t !== null; ) Zv(t.alternate, t), t = t.return;
      Te = null;
    }
  }
  function pr(t, n) {
    var i = t.timeoutHandle;
    i !== -1 && (t.timeoutHandle = -1, L2(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), ba = 0, of(), Ge = t, Te = i = oa(t.current, null), xe = n, Be = 0, rn = null, Ba = !1, hr = Aa(t, n), Jc = !1, mr = on = ef = Ai = Ua = it = 0, Xt = Ao = null, tf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0) for (t = t.entanglements, o &= n; 0 < o; ) {
      var s = 31 - te(o), f = 1 << s;
      n |= t[s], o &= ~f;
    }
    return ya = n, wl(), i;
  }
  function fp(t, n) {
    we = null, E.H = yo, n === rr || n === Ml ? (n = Rm(), Be = 3) : n === sc ? (n = Rm(), Be = 4) : Be = n === Bc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, rn = n, Te === null && (it = 1, Gl(t, gn(n, t.current)));
  }
  function dp() {
    var t = nn.current;
    return t === null ? !0 : (xe & 4194048) === xe ? wn === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? t === wn : !1;
  }
  function hp() {
    var t = E.H;
    return E.H = yo, t === null ? yo : t;
  }
  function mp() {
    var t = E.A;
    return E.A = m2, t;
  }
  function tu() {
    it = 4, Ba || (xe & 4194048) !== xe && nn.current !== null || (hr = !0), (Ua & 134217727) === 0 && (Ai & 134217727) === 0 || Ge === null || Za(Ge, xe, on, !1);
  }
  function lf(t, n, i) {
    var o = je;
    je |= 2;
    var s = hp(), f = mp();
    (Ge !== t || xe !== n) && (Jl = null, pr(t, n)), n = !1;
    var v = it;
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          var w = Te, O = rn;
          switch (Be) {
            case 8:
              of(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (n = !0);
              var Z = Be;
              if (Be = 0, rn = null, gr(t, w, O, Z), i && hr) {
                v = 0;
                break e;
              }
              break;
            default:
              Z = Be, Be = 0, rn = null, gr(t, w, O, Z);
          }
        }
        g2(), v = it;
        break;
      } catch (X) {
        fp(t, X);
      }
    while (!0);
    return n && t.shellSuspendCounter++, ua = vi = null, je = o, E.H = s, E.A = f, Te === null && (Ge = null, xe = 0, wl()), v;
  }
  function g2() {
    for (; Te !== null; ) vp(Te);
  }
  function y2(t, n) {
    var i = je;
    je |= 2;
    var o = hp(), s = mp();
    Ge !== t || xe !== n ? (Jl = null, Kl = St() + 500, pr(t, n)) : hr = Aa(t, n);
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          n = Te;
          var f = rn;
          t: switch (Be) {
            case 1:
              Be = 0, rn = null, gr(t, n, f, 1);
              break;
            case 2:
            case 9:
              if (Om(f)) {
                Be = 0, rn = null, pp(n);
                break;
              }
              n = function() {
                Be !== 2 && Be !== 9 || Ge !== t || (Be = 7), _a(t);
              }, f.then(n, n);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              Om(f) ? (Be = 0, rn = null, pp(n)) : (Be = 0, rn = null, gr(t, n, f, 7));
              break;
            case 5:
              var v = null;
              switch (Te.tag) {
                case 26:
                  v = Te.memoizedState;
                case 5:
                case 27:
                  var w = Te;
                  if (v ? n0(v) : w.stateNode.complete) {
                    Be = 0, rn = null;
                    var O = w.sibling;
                    if (O !== null) Te = O;
                    else {
                      var Z = w.return;
                      Z !== null ? (Te = Z, nu(Z)) : Te = null;
                    }
                    break t;
                  }
              }
              Be = 0, rn = null, gr(t, n, f, 5);
              break;
            case 6:
              Be = 0, rn = null, gr(t, n, f, 6);
              break;
            case 8:
              of(), it = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        b2();
        break;
      } catch (X) {
        fp(t, X);
      }
    while (!0);
    return ua = vi = null, E.H = o, E.A = s, je = i, Te !== null ? 0 : (Ge = null, xe = 0, wl(), it);
  }
  function b2() {
    for (; Te !== null && !Ui(); ) vp(Te);
  }
  function vp(t) {
    var n = kv(t.alternate, t, ya);
    t.memoizedProps = t.pendingProps, n === null ? nu(t) : Te = n;
  }
  function pp(t) {
    var n = t, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = zv(i, n, n.pendingProps, n.type, void 0, xe);
        break;
      case 11:
        n = zv(i, n, n.pendingProps, n.type.render, n.ref, xe);
        break;
      case 5:
        wc(n);
      default:
        Zv(i, n), n = Te = gm(n, ya), n = kv(i, n, ya);
    }
    t.memoizedProps = t.pendingProps, n === null ? nu(t) : Te = n;
  }
  function gr(t, n, i, o) {
    ua = vi = null, wc(n), or = null, so = 0;
    var s = n.return;
    try {
      if (l2(t, s, n, i, xe)) {
        it = 1, Gl(t, gn(i, t.current)), Te = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw Te = s, f;
      it = 1, Gl(t, gn(i, t.current)), Te = null;
      return;
    }
    n.flags & 32768 ? (Me || o === 1 ? t = !0 : hr || (xe & 536870912) !== 0 ? t = !1 : (Ba = t = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = nn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), gp(n, t)) : nu(n);
  }
  function nu(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        gp(n, Ba);
        return;
      }
      t = n.return;
      var i = c2(n.alternate, n, ya);
      if (i !== null) {
        Te = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Te = n;
        return;
      }
      Te = n = t;
    } while (n !== null);
    it === 0 && (it = 5);
  }
  function gp(t, n) {
    do {
      var i = f2(t.alternate, t);
      if (i !== null) {
        i.flags &= 32767, Te = i;
        return;
      }
      if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (t = t.sibling, t !== null)) {
        Te = t;
        return;
      }
      Te = t = i;
    } while (t !== null);
    it = 6, Te = null;
  }
  function yp(t, n, i, o, s, f, v, w, O) {
    t.cancelPendingCommit = null;
    do
      au();
    while (bt !== 0);
    if ((je & 6) !== 0) throw Error(u(327));
    if (n !== null) {
      if (n === t.current) throw Error(u(177));
      if (f = n.lanes | n.childLanes, f |= qs, Es(t, i, f, v, w, O), t === Ge && (Te = Ge = null, xe = 0), vr = n, Pa = t, ba = i, nf = f, af = s, lp = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, E2(Ht, function() {
        return Ep(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = E.T, E.T = null, s = I.p, I.p = 2, v = je, je |= 4;
        try {
          d2(t, n, i);
        } finally {
          je = v, I.p = s, E.T = o;
        }
      }
      bt = 1, bp(), _p(), wp();
    }
  }
  function bp() {
    if (bt === 1) {
      bt = 0;
      var t = Pa, n = vr, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = E.T, E.T = null;
        var o = I.p;
        I.p = 2;
        var s = je;
        je |= 4;
        try {
          Jv(n, t);
          var f = yf, v = um(t.containerInfo), w = f.focusedElem, O = f.selectionRange;
          if (v !== w && w && w.ownerDocument && lm(w.ownerDocument.documentElement, w)) {
            if (O !== null && Gs(w)) {
              var Z = O.start, X = O.end;
              if (X === void 0 && (X = Z), "selectionStart" in w) w.selectionStart = Z, w.selectionEnd = Math.min(X, w.value.length);
              else {
                var J = w.ownerDocument || document, G = J && J.defaultView || window;
                if (G.getSelection) {
                  var $ = G.getSelection(), fe = w.textContent.length, ge = Math.min(O.start, fe), Ie = O.end === void 0 ? ge : Math.min(O.end, fe);
                  !$.extend && ge > Ie && (v = Ie, Ie = ge, ge = v);
                  var j = om(w, ge), L = om(w, Ie);
                  if (j && L && ($.rangeCount !== 1 || $.anchorNode !== j.node || $.anchorOffset !== j.offset || $.focusNode !== L.node || $.focusOffset !== L.offset)) {
                    var k = J.createRange();
                    k.setStart(j.node, j.offset), $.removeAllRanges(), ge > Ie ? ($.addRange(k), $.extend(L.node, L.offset)) : (k.setEnd(L.node, L.offset), $.addRange(k));
                  }
                }
              }
            }
            for (J = [], $ = w; $ = $.parentNode; ) $.nodeType === 1 && J.push({
              element: $,
              left: $.scrollLeft,
              top: $.scrollTop
            });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < J.length; w++) {
              var Q = J[w];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          vu = !!gf, yf = gf = null;
        } finally {
          je = s, I.p = o, E.T = i;
        }
      }
      t.current = n, bt = 2;
    }
  }
  function _p() {
    if (bt === 2) {
      bt = 0;
      var t = Pa, n = vr, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = E.T, E.T = null;
        var o = I.p;
        I.p = 2;
        var s = je;
        je |= 4;
        try {
          qv(t, n.alternate, n);
        } finally {
          je = s, I.p = o, E.T = i;
        }
      }
      bt = 3;
    }
  }
  function wp() {
    if (bt === 4 || bt === 3) {
      bt = 0, Gr();
      var t = Pa, n = vr, i = ba, o = lp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? bt = 5 : (bt = 0, vr = Pa = null, Sp(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (ka = null), Ts(i), n = n.stateNode, Bt && typeof Bt.onCommitFiberRoot == "function") try {
        Bt.onCommitFiberRoot(li, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        n = E.T, s = I.p, I.p = 2, E.T = null;
        try {
          for (var f = t.onRecoverableError, v = 0; v < o.length; v++) {
            var w = o[v];
            f(w.value, { componentStack: w.stack });
          }
        } finally {
          E.T = n, I.p = s;
        }
      }
      (ba & 3) !== 0 && au(), _a(t), s = t.pendingLanes, (i & 261930) !== 0 && (s & 42) !== 0 ? t === rf ? xo++ : (xo = 0, rf = t) : xo = 0, Oo(0, !1);
    }
  }
  function Sp(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, lo(n)));
  }
  function au() {
    return bp(), _p(), wp(), Ep();
  }
  function Ep() {
    if (bt !== 5) return !1;
    var t = Pa, n = nf;
    nf = 0;
    var i = Ts(ba), o = E.T, s = I.p;
    try {
      I.p = 32 > i ? 32 : i, E.T = null, i = af, af = null;
      var f = Pa, v = ba;
      if (bt = 0, vr = Pa = null, ba = 0, (je & 6) !== 0) throw Error(u(331));
      var w = je;
      if (je |= 4, ip(f.current), tp(f, f.current, v, i), je = w, Oo(0, !1), Bt && typeof Bt.onPostCommitFiberRoot == "function") try {
        Bt.onPostCommitFiberRoot(li, f);
      } catch {
      }
      return !0;
    } finally {
      I.p = s, E.T = o, Sp(t, n);
    }
  }
  function Tp(t, n, i) {
    n = gn(i, n), n = jc(t.stateNode, n, 2), t = Si(t, n, 2), t !== null && (ki(t, 2), _a(t));
  }
  function Ue(t, n, i) {
    if (t.tag === 3) Tp(t, t, i);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Tp(n, t, i);
        break;
      } else if (n.tag === 1) {
        var o = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ka === null || !ka.has(o))) {
          t = gn(i, t), i = Cv(2), o = Si(n, i, 2), o !== null && (Av(i, o, n, t), ki(o, 2), _a(o));
          break;
        }
      }
      n = n.return;
    }
  }
  function uf(t, n, i) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new v2();
      var s = /* @__PURE__ */ new Set();
      o.set(n, s);
    } else s = o.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), o.set(n, s));
    s.has(i) || (Jc = !0, s.add(i), t = _2.bind(null, t, n, i), n.then(t, t));
  }
  function _2(t, n, i) {
    var o = t.pingCache;
    o !== null && o.delete(n), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Ge === t && (xe & i) === i && (it === 4 || it === 3 && (xe & 62914560) === xe && 300 > St() - Ql ? (je & 2) === 0 && pr(t, 0) : ef |= i, mr === xe && (mr = 0)), _a(t);
  }
  function Cp(t, n) {
    n === 0 && (n = ul()), t = di(t, n), t !== null && (ki(t, n), _a(t));
  }
  function w2(t) {
    var n = t.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Cp(t, i);
  }
  function S2(t, n) {
    var i = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var o = t.stateNode, s = t.memoizedState;
        s !== null && (i = s.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    o !== null && o.delete(n), Cp(t, i);
  }
  function E2(t, n) {
    return In(t, n);
  }
  var iu = null, yr = null, sf = !1, ru = !1, cf = !1, Ia = 0;
  function _a(t) {
    t !== yr && t.next === null && (yr === null ? iu = yr = t : yr = yr.next = t), ru = !0, sf || (sf = !0, C2());
  }
  function Oo(t, n) {
    if (!cf && ru) {
      cf = !0;
      do
        for (var i = !1, o = iu; o !== null; ) {
          if (!n) if (t !== 0) {
            var s = o.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var v = o.suspendedLanes, w = o.pingedLanes;
              f = (1 << 31 - te(42 | t) + 1) - 1, f &= s & ~(v & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (i = !0, Mp(o, f));
          } else f = xe, f = Jt(o, o === Ge ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (f & 3) === 0 || Aa(o, f) || (i = !0, Mp(o, f));
          o = o.next;
        }
      while (i);
      cf = !1;
    }
  }
  function T2() {
    Ap();
  }
  function Ap() {
    ru = sf = !1;
    var t = 0;
    Ia !== 0 && z2() && (t = Ia);
    for (var n = St(), i = null, o = iu; o !== null; ) {
      var s = o.next, f = xp(o, n);
      f === 0 ? (o.next = null, i === null ? iu = s : i.next = s, s === null && (yr = i)) : (i = o, (t !== 0 || (f & 3) !== 0) && (ru = !0)), o = s;
    }
    bt !== 0 && bt !== 5 || Oo(t, !1), Ia !== 0 && (Ia = 0);
  }
  function xp(t, n) {
    for (var i = t.suspendedLanes, o = t.pingedLanes, s = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
      var v = 31 - te(f), w = 1 << v, O = s[v];
      O === -1 ? ((w & i) === 0 || (w & o) !== 0) && (s[v] = Ss(w, n)) : O <= n && (t.expiredLanes |= w), f &= ~w;
    }
    if (n = Ge, i = xe, i = Jt(t, t === n ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o = t.callbackNode, i === 0 || t === n && (Be === 2 || Be === 9) || t.cancelPendingCommit !== null) return o !== null && o !== null && na(o), t.callbackNode = null, t.callbackPriority = 0;
    if ((i & 3) === 0 || Aa(t, i)) {
      if (n = i & -i, n === t.callbackPriority) return n;
      switch (o !== null && na(o), Ts(i)) {
        case 2:
        case 8:
          i = Lt;
          break;
        case 32:
          i = Ht;
          break;
        case 268435456:
          i = ol;
          break;
        default:
          i = Ht;
      }
      return o = Op.bind(null, t), i = In(i, o), t.callbackPriority = n, t.callbackNode = i, n;
    }
    return o !== null && o !== null && na(o), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Op(t, n) {
    if (bt !== 0 && bt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var i = t.callbackNode;
    if (au() && t.callbackNode !== i) return null;
    var o = xe;
    return o = Jt(t, t === Ge ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), o === 0 ? null : (sp(t, o, n), xp(t, St()), t.callbackNode != null && t.callbackNode === i ? Op.bind(null, t) : null);
  }
  function Mp(t, n) {
    if (au()) return null;
    sp(t, n, !0);
  }
  function C2() {
    H2(function() {
      (je & 6) !== 0 ? In(Et, T2) : Ap();
    });
  }
  function ff() {
    if (Ia === 0) {
      var t = ar;
      t === 0 && (t = st, st <<= 1, (st & 261888) === 0 && (st = 256)), Ia = t;
    }
    return Ia;
  }
  function Rp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hl("" + t);
  }
  function Np(t, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, t.id && i.setAttribute("form", t.id), n.parentNode.insertBefore(i, n), t = new FormData(t), i.parentNode.removeChild(i), t;
  }
  function A2(t, n, i, o, s) {
    if (n === "submit" && i && i.stateNode === s) {
      var f = Rp((s[It] || null).action), v = o.submitter;
      v && (n = (n = v[It] || null) ? Rp(n.formAction) : v.getAttribute("formAction"), n !== null && (f = n, v = null));
      var w = new gl("action", "action", null, o, s);
      t.push({
        event: w,
        listeners: [{
          instance: null,
          listener: function() {
            if (o.defaultPrevented) {
              if (Ia !== 0) {
                var O = v ? Np(s, v) : new FormData(s);
                Rc(i, {
                  pending: !0,
                  data: O,
                  method: s.method,
                  action: f
                }, null, O);
              }
            } else typeof f == "function" && (w.preventDefault(), O = v ? Np(s, v) : new FormData(s), Rc(i, {
              pending: !0,
              data: O,
              method: s.method,
              action: f
            }, f, O));
          },
          currentTarget: s
        }]
      });
    }
  }
  for (var df = 0; df < Xs.length; df++) {
    var hf = Xs[df];
    Rn(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
  }
  Rn(fm, "onAnimationEnd"), Rn(dm, "onAnimationIteration"), Rn(hm, "onAnimationStart"), Rn("dblclick", "onDoubleClick"), Rn("focusin", "onFocus"), Rn("focusout", "onBlur"), Rn(Z_, "onTransitionRun"), Rn(I_, "onTransitionStart"), Rn(G_, "onTransitionCancel"), Rn(mm, "onTransitionEnd"), Gi("onMouseEnter", ["mouseout", "mouseover"]), Gi("onMouseLeave", ["mouseout", "mouseover"]), Gi("onPointerEnter", ["pointerout", "pointerover"]), Gi("onPointerLeave", ["pointerout", "pointerover"]), ui("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ui("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ui("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ui("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ui("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ui("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), x2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));
  function Dp(t, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var o = t[i], s = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (n) for (var v = o.length - 1; 0 <= v; v--) {
          var w = o[v], O = w.instance, Z = w.currentTarget;
          if (w = w.listener, O !== f && s.isPropagationStopped()) break e;
          f = w, s.currentTarget = Z;
          try {
            f(s);
          } catch (X) {
            _l(X);
          }
          s.currentTarget = null, f = O;
        }
        else for (v = 0; v < o.length; v++) {
          if (w = o[v], O = w.instance, Z = w.currentTarget, w = w.listener, O !== f && s.isPropagationStopped()) break e;
          f = w, s.currentTarget = Z;
          try {
            f(s);
          } catch (X) {
            _l(X);
          }
          s.currentTarget = null, f = O;
        }
      }
    }
  }
  function Ce(t, n) {
    var i = n[Cs];
    i === void 0 && (i = n[Cs] = /* @__PURE__ */ new Set());
    var o = t + "__bubble";
    i.has(o) || (Lp(n, t, 2, !1), i.add(o));
  }
  function mf(t, n, i) {
    var o = 0;
    n && (o |= 4), Lp(i, t, o, n);
  }
  var ou = "_reactListening" + Math.random().toString(36).slice(2);
  function zp(t) {
    if (!t[ou]) {
      t[ou] = !0, Mh.forEach(function(i) {
        i !== "selectionchange" && (x2.has(i) || mf(i, !1, t), mf(i, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[ou] || (n[ou] = !0, mf("selectionchange", !1, n));
    }
  }
  function Lp(t, n, i, o) {
    switch (l0(n)) {
      case 2:
        var s = aw;
        break;
      case 8:
        s = iw;
        break;
      default:
        s = Mf;
    }
    i = s.bind(null, n, i, t), s = void 0, !Ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), o ? s !== void 0 ? t.addEventListener(n, i, {
      capture: !0,
      passive: s
    }) : t.addEventListener(n, i, !0) : s !== void 0 ? t.addEventListener(n, i, { passive: s }) : t.addEventListener(n, i, !1);
  }
  function vf(t, n, i, o, s) {
    var f = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var v = o.tag;
      if (v === 3 || v === 4) {
        var w = o.stateNode.containerInfo;
        if (w === s) break;
        if (v === 4) for (v = o.return; v !== null; ) {
          var O = v.tag;
          if ((O === 3 || O === 4) && v.stateNode.containerInfo === s) return;
          v = v.return;
        }
        for (; w !== null; ) {
          if (v = Pi(w), v === null) return;
          if (O = v.tag, O === 5 || O === 6 || O === 26 || O === 27) {
            o = f = v;
            continue e;
          }
          w = w.parentNode;
        }
      }
      o = o.return;
    }
    Zh(function() {
      var Z = f, X = Ds(i), J = [];
      e: {
        var G = vm.get(t);
        if (G !== void 0) {
          var $ = gl, fe = t;
          switch (t) {
            case "keypress":
              if (vl(i) === 0) break e;
            case "keydown":
            case "keyup":
              $ = T_;
              break;
            case "focusin":
              fe = "focus", $ = Us;
              break;
            case "focusout":
              fe = "blur", $ = Us;
              break;
            case "beforeblur":
            case "afterblur":
              $ = Us;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = $h;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = g_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = C_;
              break;
            case fm:
            case dm:
            case hm:
              $ = y_;
              break;
            case mm:
              $ = A_;
              break;
            case "scroll":
            case "scrollend":
              $ = p_;
              break;
            case "wheel":
              $ = x_;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = b_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Fh;
              break;
            case "toggle":
            case "beforetoggle":
              $ = O_;
          }
          var ge = (n & 4) !== 0, Ie = !ge && (t === "scroll" || t === "scrollend"), j = ge ? G !== null ? G + "Capture" : null : G;
          ge = [];
          for (var L = Z, k; L !== null; ) {
            var Q = L;
            if (k = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || k === null || j === null || (Q = Wr(L, j), Q != null && ge.push(Ro(L, Q, k))), Ie) break;
            L = L.return;
          }
          0 < ge.length && (G = new $(G, fe, null, i, X), J.push({
            event: G,
            listeners: ge
          }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (G = t === "mouseover" || t === "pointerover", $ = t === "mouseout" || t === "pointerout", G && i !== Ns && (fe = i.relatedTarget || i.fromElement) && (Pi(fe) || fe[Xr])) break e;
          if (($ || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, $ ? (fe = i.relatedTarget || i.toElement, $ = Z, fe = fe ? Pi(fe) : null, fe !== null && (Ie = d(fe), ge = fe.tag, fe !== Ie || ge !== 5 && ge !== 27 && ge !== 6) && (fe = null)) : ($ = null, fe = Z), $ !== fe)) {
            if (ge = $h, Q = "onMouseLeave", j = "onMouseEnter", L = "mouse", (t === "pointerout" || t === "pointerover") && (ge = Fh, Q = "onPointerLeave", j = "onPointerEnter", L = "pointer"), Ie = $ == null ? G : Yr($), k = fe == null ? G : Yr(fe), G = new ge(Q, L + "leave", $, i, X), G.target = Ie, G.relatedTarget = k, Q = null, Pi(X) === Z && (ge = new ge(j, L + "enter", fe, i, X), ge.target = k, ge.relatedTarget = Ie, Q = ge), Ie = Q, $ && fe) t: {
              for (ge = O2, j = $, L = fe, k = 0, Q = j; Q; Q = ge(Q)) k++;
              Q = 0;
              for (var ve = L; ve; ve = ge(ve)) Q++;
              for (; 0 < k - Q; ) j = ge(j), k--;
              for (; 0 < Q - k; ) L = ge(L), Q--;
              for (; k--; ) {
                if (j === L || L !== null && j === L.alternate) {
                  ge = j;
                  break t;
                }
                j = ge(j), L = ge(L);
              }
              ge = null;
            }
            else ge = null;
            $ !== null && Hp(J, G, $, ge, !1), fe !== null && Ie !== null && Hp(J, Ie, fe, ge, !0);
          }
        }
        e: {
          if (G = Z ? Yr(Z) : window, $ = G.nodeName && G.nodeName.toLowerCase(), $ === "select" || $ === "input" && G.type === "file") var Le = em;
          else if (Kh(G)) if (tm) Le = U_;
          else {
            Le = j_;
            var he = H_;
          }
          else $ = G.nodeName, !$ || $.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? Z && Rs(Z.elementType) && (Le = em) : Le = B_;
          if (Le && (Le = Le(t, Z))) {
            Jh(J, Le, i, X);
            break e;
          }
          he && he(t, G, Z), t === "focusout" && Z && G.type === "number" && Z.memoizedProps.value != null && Ms(G, "number", G.value);
        }
        switch (he = Z ? Yr(Z) : window, t) {
          case "focusin":
            (Kh(he) || he.contentEditable === "true") && (Yi = he, $s = Z, io = null);
            break;
          case "focusout":
            io = $s = Yi = null;
            break;
          case "mousedown":
            Vs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Vs = !1, sm(J, i, X);
            break;
          case "selectionchange":
            if (P_) break;
          case "keydown":
          case "keyup":
            sm(J, i, X);
        }
        var Se;
        if (Ps) e: {
          switch (t) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else qi ? Wh(t, i) && (Oe = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (Xh && i.locale !== "ko" && (qi || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && qi && (Se = Ih()) : (Oa = X, Hs = "value" in Oa ? Oa.value : Oa.textContent, qi = !0)), he = lu(Z, Oe), 0 < he.length && (Oe = new Vh(Oe, t, null, i, X), J.push({
          event: Oe,
          listeners: he
        }), Se ? Oe.data = Se : (Se = Qh(i), Se !== null && (Oe.data = Se)))), (Se = R_ ? N_(t, i) : D_(t, i)) && (Oe = lu(Z, "onBeforeInput"), 0 < Oe.length && (he = new Vh("onBeforeInput", "beforeinput", null, i, X), J.push({
          event: he,
          listeners: Oe
        }), he.data = Se)), A2(J, t, Z, i, X);
      }
      Dp(J, n);
    });
  }
  function Ro(t, n, i) {
    return {
      instance: t,
      listener: n,
      currentTarget: i
    };
  }
  function lu(t, n) {
    for (var i = n + "Capture", o = []; t !== null; ) {
      var s = t, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = Wr(t, i), s != null && o.unshift(Ro(t, s, f)), s = Wr(t, n), s != null && o.push(Ro(t, s, f))), t.tag === 3) return o;
      t = t.return;
    }
    return [];
  }
  function O2(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Hp(t, n, i, o, s) {
    for (var f = n._reactName, v = []; i !== null && i !== o; ) {
      var w = i, O = w.alternate, Z = w.stateNode;
      if (w = w.tag, O !== null && O === o) break;
      w !== 5 && w !== 26 && w !== 27 || Z === null || (O = Z, s ? (Z = Wr(i, f), Z != null && v.unshift(Ro(i, Z, O))) : s || (Z = Wr(i, f), Z != null && v.push(Ro(i, Z, O)))), i = i.return;
    }
    v.length !== 0 && t.push({
      event: n,
      listeners: v
    });
  }
  var M2 = /\r\n?/g, R2 = /\u0000|\uFFFD/g;
  function jp(t) {
    return (typeof t == "string" ? t : "" + t).replace(M2, `
`).replace(R2, "");
  }
  function Bp(t, n) {
    return n = jp(n), jp(t) === n;
  }
  function Ze(t, n, i, o, s, f) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Vi(t, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Vi(t, "" + o);
        break;
      case "className":
        fl(t, "class", o);
        break;
      case "tabIndex":
        fl(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fl(t, i, o);
        break;
      case "style":
        kh(t, o, f);
        break;
      case "data":
        if (n !== "object") {
          fl(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = hl("" + o), t.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (i === "formAction" ? (n !== "input" && Ze(t, n, "name", s.name, s, null), Ze(t, n, "formEncType", s.formEncType, s, null), Ze(t, n, "formMethod", s.formMethod, s, null), Ze(t, n, "formTarget", s.formTarget, s, null)) : (Ze(t, n, "encType", s.encType, s, null), Ze(t, n, "method", s.method, s, null), Ze(t, n, "target", s.target, s, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(i);
          break;
        }
        o = hl("" + o), t.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (t.onclick = ia);
        break;
      case "onScroll":
        o != null && Ce("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ce("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        i = hl("" + o), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "" + o) : t.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? t.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(i, o) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(i) : t.setAttribute(i, o);
        break;
      case "popover":
        Ce("beforetoggle", t), Ce("toggle", t), cl(t, "popover", o);
        break;
      case "xlinkActuate":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        cl(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = m_.get(i) || i, cl(t, i, o));
    }
  }
  function pf(t, n, i, o, s, f) {
    switch (i) {
      case "style":
        kh(t, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(u(61));
          if (i = o.__html, i != null) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Vi(t, o) : (typeof o == "number" || typeof o == "bigint") && Vi(t, "" + o);
        break;
      case "onScroll":
        o != null && Ce("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Ce("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = ia);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Rh.hasOwnProperty(i)) e: {
          if (i[0] === "o" && i[1] === "n" && (s = i.endsWith("Capture"), n = i.slice(2, s ? i.length - 7 : void 0), f = t[It] || null, f = f != null ? f[i] : null, typeof f == "function" && t.removeEventListener(n, f, s), typeof o == "function")) {
            typeof f != "function" && f !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(n, o, s);
            break e;
          }
          i in t ? t[i] = o : o === !0 ? t.setAttribute(i, "") : cl(t, i, o);
        }
    }
  }
  function Dt(t, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ce("error", t), Ce("load", t);
        var o = !1, s = !1, f;
        for (f in i) if (i.hasOwnProperty(f)) {
          var v = i[f];
          if (v != null) switch (f) {
            case "src":
              o = !0;
              break;
            case "srcSet":
              s = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, n));
            default:
              Ze(t, n, f, v, i, null);
          }
        }
        s && Ze(t, n, "srcSet", i.srcSet, i, null), o && Ze(t, n, "src", i.src, i, null);
        return;
      case "input":
        Ce("invalid", t);
        var w = f = v = s = null, O = null, Z = null;
        for (o in i) if (i.hasOwnProperty(o)) {
          var X = i[o];
          if (X != null) switch (o) {
            case "name":
              s = X;
              break;
            case "type":
              v = X;
              break;
            case "checked":
              O = X;
              break;
            case "defaultChecked":
              Z = X;
              break;
            case "value":
              f = X;
              break;
            case "defaultValue":
              w = X;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (X != null) throw Error(u(137, n));
              break;
            default:
              Ze(t, n, o, X, i, null);
          }
        }
        Hh(t, f, w, O, Z, v, s, !1);
        return;
      case "select":
        Ce("invalid", t), o = v = f = null;
        for (s in i) if (i.hasOwnProperty(s) && (w = i[s], w != null)) switch (s) {
          case "value":
            f = w;
            break;
          case "defaultValue":
            v = w;
            break;
          case "multiple":
            o = w;
          default:
            Ze(t, n, s, w, i, null);
        }
        n = f, i = v, t.multiple = !!o, n != null ? $i(t, !!o, n, !1) : i != null && $i(t, !!o, i, !0);
        return;
      case "textarea":
        Ce("invalid", t), f = s = o = null;
        for (v in i) if (i.hasOwnProperty(v) && (w = i[v], w != null)) switch (v) {
          case "value":
            o = w;
            break;
          case "defaultValue":
            s = w;
            break;
          case "children":
            f = w;
            break;
          case "dangerouslySetInnerHTML":
            if (w != null) throw Error(u(91));
            break;
          default:
            Ze(t, n, v, w, i, null);
        }
        Bh(t, o, s, f);
        return;
      case "option":
        for (O in i) i.hasOwnProperty(O) && (o = i[O], o != null) && (O === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol" : Ze(t, n, O, o, i, null));
        return;
      case "dialog":
        Ce("beforetoggle", t), Ce("toggle", t), Ce("cancel", t), Ce("close", t);
        break;
      case "iframe":
      case "object":
        Ce("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Mo.length; o++) Ce(Mo[o], t);
        break;
      case "image":
        Ce("error", t), Ce("load", t);
        break;
      case "details":
        Ce("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", t), Ce("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Z in i) if (i.hasOwnProperty(Z) && (o = i[Z], o != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, n));
          default:
            Ze(t, n, Z, o, i, null);
        }
        return;
      default:
        if (Rs(n)) {
          for (X in i) i.hasOwnProperty(X) && (o = i[X], o !== void 0 && pf(t, n, X, o, i, void 0));
          return;
        }
    }
    for (w in i) i.hasOwnProperty(w) && (o = i[w], o != null && Ze(t, n, w, o, i, null));
  }
  function N2(t, n, i, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, f = null, v = null, w = null, O = null, Z = null, X = null;
        for ($ in i) {
          var J = i[$];
          if (i.hasOwnProperty($) && J != null) switch ($) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              O = J;
            default:
              o.hasOwnProperty($) || Ze(t, n, $, null, o, J);
          }
        }
        for (var G in o) {
          var $ = o[G];
          if (J = i[G], o.hasOwnProperty(G) && ($ != null || J != null)) switch (G) {
            case "type":
              f = $;
              break;
            case "name":
              s = $;
              break;
            case "checked":
              Z = $;
              break;
            case "defaultChecked":
              X = $;
              break;
            case "value":
              v = $;
              break;
            case "defaultValue":
              w = $;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if ($ != null) throw Error(u(137, n));
              break;
            default:
              $ !== J && Ze(t, n, G, $, o, J);
          }
        }
        Os(t, v, w, O, Z, X, f, s);
        return;
      case "select":
        $ = v = w = G = null;
        for (f in i) if (O = i[f], i.hasOwnProperty(f) && O != null) switch (f) {
          case "value":
            break;
          case "multiple":
            $ = O;
          default:
            o.hasOwnProperty(f) || Ze(t, n, f, null, o, O);
        }
        for (s in o) if (f = o[s], O = i[s], o.hasOwnProperty(s) && (f != null || O != null)) switch (s) {
          case "value":
            G = f;
            break;
          case "defaultValue":
            w = f;
            break;
          case "multiple":
            v = f;
          default:
            f !== O && Ze(t, n, s, f, o, O);
        }
        n = w, i = v, o = $, G != null ? $i(t, !!i, G, !1) : !!o != !!i && (n != null ? $i(t, !!i, n, !0) : $i(t, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        $ = G = null;
        for (w in i) if (s = i[w], i.hasOwnProperty(w) && s != null && !o.hasOwnProperty(w)) switch (w) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ze(t, n, w, null, o, s);
        }
        for (v in o) if (s = o[v], f = i[v], o.hasOwnProperty(v) && (s != null || f != null)) switch (v) {
          case "value":
            G = s;
            break;
          case "defaultValue":
            $ = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(u(91));
            break;
          default:
            s !== f && Ze(t, n, v, s, o, f);
        }
        jh(t, G, $);
        return;
      case "option":
        for (var fe in i) G = i[fe], i.hasOwnProperty(fe) && G != null && !o.hasOwnProperty(fe) && (fe === "selected" ? t.selected = !1 : Ze(t, n, fe, null, o, G));
        for (O in o) G = o[O], $ = i[O], o.hasOwnProperty(O) && G !== $ && (G != null || $ != null) && (O === "selected" ? t.selected = G && typeof G != "function" && typeof G != "symbol" : Ze(t, n, O, G, o, $));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ge in i) G = i[ge], i.hasOwnProperty(ge) && G != null && !o.hasOwnProperty(ge) && Ze(t, n, ge, null, o, G);
        for (Z in o) if (G = o[Z], $ = i[Z], o.hasOwnProperty(Z) && G !== $ && (G != null || $ != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (G != null) throw Error(u(137, n));
            break;
          default:
            Ze(t, n, Z, G, o, $);
        }
        return;
      default:
        if (Rs(n)) {
          for (var Ie in i) G = i[Ie], i.hasOwnProperty(Ie) && G !== void 0 && !o.hasOwnProperty(Ie) && pf(t, n, Ie, void 0, o, G);
          for (X in o) G = o[X], $ = i[X], !o.hasOwnProperty(X) || G === $ || G === void 0 && $ === void 0 || pf(t, n, X, G, o, $);
          return;
        }
    }
    for (var j in i) G = i[j], i.hasOwnProperty(j) && G != null && !o.hasOwnProperty(j) && Ze(t, n, j, null, o, G);
    for (J in o) G = o[J], $ = i[J], !o.hasOwnProperty(J) || G === $ || G == null && $ == null || Ze(t, n, J, G, o, $);
  }
  function Up(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function D2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, n = 0, i = performance.getEntriesByType("resource"), o = 0; o < i.length; o++) {
        var s = i[o], f = s.transferSize, v = s.initiatorType, w = s.duration;
        if (f && w && Up(v)) {
          for (v = 0, w = s.responseEnd, o += 1; o < i.length; o++) {
            var O = i[o], Z = O.startTime;
            if (Z > w) break;
            var X = O.transferSize, J = O.initiatorType;
            X && Up(J) && (O = O.responseEnd, v += X * (O < w ? 1 : (w - Z) / (O - Z)));
          }
          if (--o, n += 8 * (f + v) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var gf = null, yf = null;
  function uu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function kp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pp(t, n) {
    if (t === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function bf(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var _f = null;
  function z2() {
    var t = window.event;
    return t && t.type === "popstate" ? t === _f ? !1 : (_f = t, !0) : (_f = null, !1);
  }
  var Zp = typeof setTimeout == "function" ? setTimeout : void 0, L2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ip = typeof Promise == "function" ? Promise : void 0, H2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ip < "u" ? function(t) {
    return Ip.resolve(null).then(t).catch(j2);
  } : Zp;
  function j2(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ga(t) {
    return t === "head";
  }
  function Gp(t, n) {
    var i = n, o = 0;
    do {
      var s = i.nextSibling;
      if (t.removeChild(i), s && s.nodeType === 8) if (i = s.data, i === "/$" || i === "/&") {
        if (o === 0) {
          t.removeChild(s), Sr(n);
          return;
        }
        o--;
      } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&") o++;
      else if (i === "html") No(t.ownerDocument.documentElement);
      else if (i === "head") {
        i = t.ownerDocument.head, No(i);
        for (var f = i.firstChild; f; ) {
          var v = f.nextSibling, w = f.nodeName;
          f[qr] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && f.rel.toLowerCase() === "stylesheet" || i.removeChild(f), f = v;
        }
      } else i === "body" && No(t.ownerDocument.body);
      i = s;
    } while (i);
    Sr(n);
  }
  function $p(t, n) {
    var i = t;
    t = 0;
    do {
      var o = i.nextSibling;
      if (i.nodeType === 1 ? n ? (i._stashedDisplay = i.style.display, i.style.display = "none") : (i.style.display = i._stashedDisplay || "", i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (n ? (i._stashedText = i.nodeValue, i.nodeValue = "") : i.nodeValue = i._stashedText || ""), o && o.nodeType === 8) if (i = o.data, i === "/$") {
        if (t === 0) break;
        t--;
      } else i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || t++;
      i = o;
    } while (i);
  }
  function wf(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wf(i), As(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function B2(t, n, i, o) {
    for (; t.nodeType === 1; ) {
      var s = i;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[qr]) switch (n) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (f !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (f = t.getAttribute("src"), (f !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (n === "input" && t.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === f) return t;
      } else return t;
      if (t = En(t.nextSibling), t === null) break;
    }
    return null;
  }
  function U2(t, n, i) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = En(t.nextSibling), t === null)) return null;
    return t;
  }
  function Vp(t, n) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = En(t.nextSibling), t === null)) return null;
    return t;
  }
  function Sf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ef(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function k2(t, n) {
    var i = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || i.readyState !== "loading") n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), t._reactRetry = o;
    }
  }
  function En(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var Tf = null;
  function Fp(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "/$" || i === "/&") {
          if (n === 0) return En(t.nextSibling);
          n--;
        } else i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Xp(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (n === 0) return t;
          n--;
        } else i !== "/$" && i !== "/&" || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function qp(t, n, i) {
    switch (n = uu(i), t) {
      case "html":
        if (t = n.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = n.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = n.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function No(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    As(t);
  }
  var Tn = /* @__PURE__ */ new Map(), Yp = /* @__PURE__ */ new Set();
  function su(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var wa = I.d;
  I.d = {
    f: P2,
    r: Z2,
    D: I2,
    C: G2,
    L: $2,
    m: V2,
    X: X2,
    S: F2,
    M: q2
  };
  function P2() {
    var t = wa.f(), n = eu();
    return t || n;
  }
  function Z2(t) {
    var n = Zi(t);
    n !== null && n.tag === 5 && n.type === "form" ? mv(n) : wa.r(t);
  }
  var br = typeof document > "u" ? null : document;
  function Wp(t, n, i) {
    var o = br;
    if (o && typeof n == "string" && n) {
      var s = vn(n);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof i == "string" && (s += '[crossorigin="' + i + '"]'), Yp.has(s) || (Yp.add(s), t = {
        rel: t,
        crossOrigin: i,
        href: n
      }, o.querySelector(s) === null && (n = o.createElement("link"), Dt(n, "link", t), Ct(n), o.head.appendChild(n)));
    }
  }
  function I2(t) {
    wa.D(t), Wp("dns-prefetch", t, null);
  }
  function G2(t, n) {
    wa.C(t, n), Wp("preconnect", t, n);
  }
  function $2(t, n, i) {
    wa.L(t, n, i);
    var o = br;
    if (o && t && n) {
      var s = 'link[rel="preload"][as="' + vn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (s += '[imagesrcset="' + vn(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (s += '[imagesizes="' + vn(i.imageSizes) + '"]')) : s += '[href="' + vn(t) + '"]';
      var f = s;
      switch (n) {
        case "style":
          f = _r(t);
          break;
        case "script":
          f = wr(t);
      }
      Tn.has(f) || (t = S({
        rel: "preload",
        href: n === "image" && i && i.imageSrcSet ? void 0 : t,
        as: n
      }, i), Tn.set(f, t), o.querySelector(s) !== null || n === "style" && o.querySelector(Do(f)) || n === "script" && o.querySelector(zo(f)) || (n = o.createElement("link"), Dt(n, "link", t), Ct(n), o.head.appendChild(n)));
    }
  }
  function V2(t, n) {
    wa.m(t, n);
    var i = br;
    if (i && t) {
      var o = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + vn(o) + '"][href="' + vn(t) + '"]', f = s;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = wr(t);
      }
      if (!Tn.has(f) && (t = S({
        rel: "modulepreload",
        href: t
      }, n), Tn.set(f, t), i.querySelector(s) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(zo(f))) return;
        }
        o = i.createElement("link"), Dt(o, "link", t), Ct(o), i.head.appendChild(o);
      }
    }
  }
  function F2(t, n, i) {
    wa.S(t, n, i);
    var o = br;
    if (o && t) {
      var s = Ii(o).hoistableStyles, f = _r(t);
      n = n || "default";
      var v = s.get(f);
      if (!v) {
        var w = {
          loading: 0,
          preload: null
        };
        if (v = o.querySelector(Do(f))) w.loading = 5;
        else {
          t = S({
            rel: "stylesheet",
            href: t,
            "data-precedence": n
          }, i), (i = Tn.get(f)) && Cf(t, i);
          var O = v = o.createElement("link");
          Ct(O), Dt(O, "link", t), O._p = new Promise(function(Z, X) {
            O.onload = Z, O.onerror = X;
          }), O.addEventListener("load", function() {
            w.loading |= 1;
          }), O.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, cu(v, n, o);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: w
        }, s.set(f, v);
      }
    }
  }
  function X2(t, n) {
    wa.X(t, n);
    var i = br;
    if (i && t) {
      var o = Ii(i).hoistableScripts, s = wr(t), f = o.get(s);
      f || (f = i.querySelector(zo(s)), f || (t = S({
        src: t,
        async: !0
      }, n), (n = Tn.get(s)) && Af(t, n), f = i.createElement("script"), Ct(f), Dt(f, "link", t), i.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(s, f));
    }
  }
  function q2(t, n) {
    wa.M(t, n);
    var i = br;
    if (i && t) {
      var o = Ii(i).hoistableScripts, s = wr(t), f = o.get(s);
      f || (f = i.querySelector(zo(s)), f || (t = S({
        src: t,
        async: !0,
        type: "module"
      }, n), (n = Tn.get(s)) && Af(t, n), f = i.createElement("script"), Ct(f), Dt(f, "link", t), i.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(s, f));
    }
  }
  function Qp(t, n, i, o) {
    var s = (s = be.current) ? su(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = _r(i.href), i = Ii(s).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = _r(i.href);
          var f = Ii(s).hoistableStyles, v = f.get(t);
          if (v || (s = s.ownerDocument || s, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(t, v), (f = s.querySelector(Do(t))) && !f._p && (v.instance = f, v.state.loading = 5), Tn.has(t) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Tn.set(t, i), f || Y2(s, t, i, v.state))), n && o === null) throw Error(u(528, ""));
          return v;
        }
        if (n && o !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wr(i), i = Ii(s).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(u(444, t));
    }
  }
  function _r(t) {
    return 'href="' + vn(t) + '"';
  }
  function Do(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Kp(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Y2(t, n, i, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = t.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Dt(n, "link", i), Ct(n), t.head.appendChild(n));
  }
  function wr(t) {
    return '[src="' + vn(t) + '"]';
  }
  function zo(t) {
    return "script[async]" + t;
  }
  function Jp(t, n, i) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var o = t.querySelector('style[data-href~="' + vn(i.href) + '"]');
        if (o) return n.instance = o, Ct(o), o;
        var s = S({}, i, {
          "data-href": i.href,
          "data-precedence": i.precedence,
          href: null,
          precedence: null
        });
        return o = (t.ownerDocument || t).createElement("style"), Ct(o), Dt(o, "style", s), cu(o, i.precedence, t), n.instance = o;
      case "stylesheet":
        s = _r(i.href);
        var f = t.querySelector(Do(s));
        if (f) return n.state.loading |= 4, n.instance = f, Ct(f), f;
        o = Kp(i), (s = Tn.get(s)) && Cf(o, s), f = (t.ownerDocument || t).createElement("link"), Ct(f);
        var v = f;
        return v._p = new Promise(function(w, O) {
          v.onload = w, v.onerror = O;
        }), Dt(f, "link", o), n.state.loading |= 4, cu(f, i.precedence, t), n.instance = f;
      case "script":
        return f = wr(i.src), (s = t.querySelector(zo(f))) ? (n.instance = s, Ct(s), s) : (o = i, (s = Tn.get(f)) && (o = S({}, i), Af(o, s)), t = t.ownerDocument || t, s = t.createElement("script"), Ct(s), Dt(s, "link", o), t.head.appendChild(s), n.instance = s);
      case "void":
        return null;
      default:
        throw Error(u(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, cu(o, i.precedence, t));
    return n.instance;
  }
  function cu(t, n, i) {
    for (var o = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = o.length ? o[o.length - 1] : null, f = s, v = 0; v < o.length; v++) {
      var w = o[v];
      if (w.dataset.precedence === n) f = w;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(t, f.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(t, n.firstChild));
  }
  function Cf(t, n) {
    t.crossOrigin ??= n.crossOrigin, t.referrerPolicy ??= n.referrerPolicy, t.title ??= n.title;
  }
  function Af(t, n) {
    t.crossOrigin ??= n.crossOrigin, t.referrerPolicy ??= n.referrerPolicy, t.integrity ??= n.integrity;
  }
  var fu = null;
  function e0(t, n, i) {
    if (fu === null) {
      var o = /* @__PURE__ */ new Map(), s = fu = /* @__PURE__ */ new Map();
      s.set(i, o);
    } else s = fu, o = s.get(i), o || (o = /* @__PURE__ */ new Map(), s.set(i, o));
    if (o.has(t)) return o;
    for (o.set(t, null), i = i.getElementsByTagName(t), s = 0; s < i.length; s++) {
      var f = i[s];
      if (!(f[qr] || f[Ot] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = f.getAttribute(n) || "";
        v = t + v;
        var w = o.get(v);
        w ? w.push(f) : o.set(v, [f]);
      }
    }
    return o;
  }
  function t0(t, n, i) {
    t = t.ownerDocument || t, t.head.insertBefore(i, n === "title" ? t.querySelector("head > title") : null);
  }
  function W2(t, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        return n.rel === "stylesheet" ? (t = n.disabled, typeof n.precedence == "string" && t == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return !0;
    }
    return !1;
  }
  function n0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Q2(t, n, i, o) {
    if (i.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (i.state.loading & 4) === 0) {
      if (i.instance === null) {
        var s = _r(o.href), f = n.querySelector(Do(s));
        if (f) {
          n = f._p, n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++, t = du.bind(t), n.then(t, t)), i.state.loading |= 4, i.instance = f, Ct(f);
          return;
        }
        f = n.ownerDocument || n, o = Kp(o), (s = Tn.get(s)) && Cf(o, s), f = f.createElement("link"), Ct(f);
        var v = f;
        v._p = new Promise(function(w, O) {
          v.onload = w, v.onerror = O;
        }), Dt(f, "link", o), i.instance = f;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(i, n), (n = i.state.preload) && (i.state.loading & 3) === 0 && (t.count++, i = du.bind(t), n.addEventListener("load", i), n.addEventListener("error", i));
    }
  }
  var xf = 0;
  function K2(t, n) {
    return t.stylesheets && t.count === 0 && mu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(i) {
      var o = setTimeout(function() {
        if (t.stylesheets && mu(t, t.stylesheets), t.unsuspend) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, 6e4 + n);
      0 < t.imgBytes && xf === 0 && (xf = 62500 * D2());
      var s = setTimeout(function() {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && mu(t, t.stylesheets), t.unsuspend)) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, (t.imgBytes > xf ? 50 : 800) + n);
      return t.unsuspend = i, function() {
        t.unsuspend = null, clearTimeout(o), clearTimeout(s);
      };
    } : null;
  }
  function du() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) mu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var hu = null;
  function mu(t, n) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, hu = /* @__PURE__ */ new Map(), n.forEach(J2, t), hu = null, du.call(t));
  }
  function J2(t, n) {
    if (!(n.state.loading & 4)) {
      var i = hu.get(t);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), hu.set(t, i);
        for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < s.length; f++) {
          var v = s[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (i.set(v.dataset.precedence, v), o = v);
        }
        o && i.set(null, o);
      }
      s = n.instance, v = s.getAttribute("data-precedence"), f = i.get(v) || o, f === o && i.set(null, s), i.set(v, s), this.count++, o = du.bind(this), s.addEventListener("load", o), s.addEventListener("error", o), f ? f.parentNode.insertBefore(s, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), n.state.loading |= 4;
    }
  }
  var Lo = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0
  };
  function ew(t, n, i, o, s, f, v, w, O) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vr(0), this.hiddenUpdates = Vr(null), this.identifierPrefix = o, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tw(t, n, i, o, s, f, v, w, O, Z, X, J) {
    return t = new ew(t, n, i, v, O, Z, X, J, w), n = 1, f === !0 && (n |= 24), f = tn(3, null, null, n), t.current = f, f.stateNode = t, n = oc(), n.refCount++, t.pooledCache = n, n.refCount++, f.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, cc(f), t;
  }
  function nw(t) {
    return t ? (t = Ki, t) : Ki;
  }
  function a0(t, n, i, o, s, f) {
    s = nw(s), o.context === null ? o.context = s : o.pendingContext = s, o = wi(n), o.payload = { element: i }, f = f === void 0 ? null : f, f !== null && (o.callback = f), i = Si(t, o, n), i !== null && (qt(i, t, n), fo(i, t, n));
  }
  function i0(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Of(t, n) {
    i0(t, n), (t = t.alternate) && i0(t, n);
  }
  function r0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = di(t, 67108864);
      n !== null && qt(n, t, 67108864), Of(t, 67108864);
    }
  }
  function o0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Sn();
      n = Ch(n);
      var i = di(t, n);
      i !== null && qt(i, t, n), Of(t, n);
    }
  }
  var vu = !0;
  function aw(t, n, i, o) {
    var s = E.T;
    E.T = null;
    var f = I.p;
    try {
      I.p = 2, Mf(t, n, i, o);
    } finally {
      I.p = f, E.T = s;
    }
  }
  function iw(t, n, i, o) {
    var s = E.T;
    E.T = null;
    var f = I.p;
    try {
      I.p = 8, Mf(t, n, i, o);
    } finally {
      I.p = f, E.T = s;
    }
  }
  function Mf(t, n, i, o) {
    if (vu) {
      var s = Rf(o);
      if (s === null) vf(t, n, o, pu, i), u0(t, o);
      else if (ow(s, t, n, i, o)) o.stopPropagation();
      else if (u0(t, o), n & 4 && -1 < rw.indexOf(t)) {
        for (; s !== null; ) {
          var f = Zi(s);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var v = yt(f.pendingLanes);
                if (v !== 0) {
                  var w = f;
                  for (w.pendingLanes |= 2, w.entangledLanes |= 2; v; ) {
                    var O = 1 << 31 - te(v);
                    w.entanglements[1] |= O, v &= ~O;
                  }
                  _a(f), (je & 6) === 0 && (Kl = St() + 500, Oo(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              w = di(f, 2), w !== null && qt(w, f, 2), eu(), Of(f, 2);
          }
          if (f = Rf(o), f === null && vf(t, n, o, pu, i), f === s) break;
          s = f;
        }
        s !== null && o.stopPropagation();
      } else vf(t, n, o, null, i);
    }
  }
  function Rf(t) {
    return t = Ds(t), Nf(t);
  }
  var pu = null;
  function Nf(t) {
    if (pu = null, t = Pi(t), t !== null) {
      var n = d(t);
      if (n === null) t = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (t = h(n), t !== null) return t;
          t = null;
        } else if (i === 31) {
          if (t = m(n), t !== null) return t;
          t = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return pu = t, null;
  }
  function l0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (me()) {
          case Et:
            return 2;
          case Lt:
            return 8;
          case Ht:
          case $r:
            return 32;
          case ol:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Df = !1, $a = null, Va = null, Fa = null, Ho = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), Xa = [], rw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function u0(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        $a = null;
        break;
      case "dragenter":
      case "dragleave":
        Va = null;
        break;
      case "mouseover":
      case "mouseout":
        Fa = null;
        break;
      case "pointerover":
      case "pointerout":
        Ho.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jo.delete(n.pointerId);
    }
  }
  function Bo(t, n, i, o, s, f) {
    return t === null || t.nativeEvent !== f ? (t = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: f,
      targetContainers: [s]
    }, n !== null && (n = Zi(n), n !== null && r0(n)), t) : (t.eventSystemFlags |= o, n = t.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), t);
  }
  function ow(t, n, i, o, s) {
    switch (n) {
      case "focusin":
        return $a = Bo($a, t, n, i, o, s), !0;
      case "dragenter":
        return Va = Bo(Va, t, n, i, o, s), !0;
      case "mouseover":
        return Fa = Bo(Fa, t, n, i, o, s), !0;
      case "pointerover":
        var f = s.pointerId;
        return Ho.set(f, Bo(Ho.get(f) || null, t, n, i, o, s)), !0;
      case "gotpointercapture":
        return f = s.pointerId, jo.set(f, Bo(jo.get(f) || null, t, n, i, o, s)), !0;
    }
    return !1;
  }
  function s0(t) {
    var n = Pi(t.target);
    if (n !== null) {
      var i = d(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = h(i), n !== null) {
            t.blockedOn = n, xh(t.priority, function() {
              o0(i);
            });
            return;
          }
        } else if (n === 31) {
          if (n = m(i), n !== null) {
            t.blockedOn = n, xh(t.priority, function() {
              o0(i);
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function gu(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var i = Rf(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var o = new i.constructor(i.type, i);
        Ns = o, i.target.dispatchEvent(o), Ns = null;
      } else return n = Zi(i), n !== null && r0(n), t.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function c0(t, n, i) {
    gu(t) && i.delete(n);
  }
  function lw() {
    Df = !1, $a !== null && gu($a) && ($a = null), Va !== null && gu(Va) && (Va = null), Fa !== null && gu(Fa) && (Fa = null), Ho.forEach(c0), jo.forEach(c0);
  }
  function yu(t, n) {
    t.blockedOn === n && (t.blockedOn = null, Df || (Df = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, lw)));
  }
  var bu = null;
  function f0(t) {
    bu !== t && (bu = t, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
      bu === t && (bu = null);
      for (var n = 0; n < t.length; n += 3) {
        var i = t[n], o = t[n + 1], s = t[n + 2];
        if (typeof o != "function") {
          if (Nf(o || i) === null) continue;
          break;
        }
        var f = Zi(i);
        f !== null && (t.splice(n, 3), n -= 3, Rc(f, {
          pending: !0,
          data: s,
          method: i.method,
          action: o
        }, o, s));
      }
    }));
  }
  function Sr(t) {
    function n(O) {
      return yu(O, t);
    }
    $a !== null && yu($a, t), Va !== null && yu(Va, t), Fa !== null && yu(Fa, t), Ho.forEach(n), jo.forEach(n);
    for (var i = 0; i < Xa.length; i++) {
      var o = Xa[i];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Xa.length && (i = Xa[0], i.blockedOn === null); ) s0(i), i.blockedOn === null && Xa.shift();
    if (i = (t.ownerDocument || t).$$reactFormReplay, i != null) for (o = 0; o < i.length; o += 3) {
      var s = i[o], f = i[o + 1], v = s[It] || null;
      if (typeof f == "function") v || f0(i);
      else if (v) {
        var w = null;
        if (f && f.hasAttribute("formAction")) {
          if (s = f, v = f[It] || null) w = v.formAction;
          else if (Nf(s) !== null) continue;
        } else w = v.action;
        typeof w == "function" ? i[o + 1] = w : (i.splice(o, 3), o -= 3), f0(i);
      }
    }
  }
  function uw() {
    function t(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(v) {
            return s = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), o || setTimeout(i, 20);
    }
    function i() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(i, 100), function() {
        o = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function zf(t) {
    this._internalRoot = t;
  }
  Lf.prototype.render = zf.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null) throw Error(u(409));
    var i = n.current;
    a0(i, Sn(), t, n, null, null);
  }, Lf.prototype.unmount = zf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      a0(t.current, 2, null, t, null, null), eu(), n[Xr] = null;
    }
  };
  function Lf(t) {
    this._internalRoot = t;
  }
  Lf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = Ah();
      t = {
        blockedOn: null,
        target: t,
        priority: n
      };
      for (var i = 0; i < Xa.length && n !== 0 && n < Xa[i].priority; i++) ;
      Xa.splice(i, 0, t), i === 0 && s0(t);
    }
  };
  var d0 = r.version;
  if (d0 !== "19.2.8") throw Error(u(527, d0, "19.2.8"));
  I.findDOMNode = function(t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = p(n), t = t !== null ? _(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var sw = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_u.isDisabled && _u.supportsFiber) try {
      li = _u.inject(sw), Bt = _u;
    } catch {
    }
  }
  e.createRoot = function(t, n) {
    if (!c(t)) throw Error(u(299));
    var i = !1, o = "", s = i2, f = r2, v = o2;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = tw(t, 1, !1, null, null, i, o, null, s, f, v, uw), t[Xr] = n.current, zp(t), new zf(n);
  };
})), $8 = /* @__PURE__ */ fn(((e, a) => {
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (l) {
        console.error(l);
      }
  }
  r(), a.exports = G8();
})), V8 = $8();
async function F8(e) {
  if (e === "en-US") return {};
  try {
    const a = await fetch(`/_sites/dispatch-assets/sites-widget-locales/${encodeURIComponent(e)}.json`);
    if (!a.ok) return {};
    const r = await a.json();
    return r === null || typeof r != "object" || Array.isArray(r) ? {} : Object.fromEntries(Object.entries(r).filter(([l, u]) => l.startsWith("sites.dispatch.widget.") && Array.isArray(u)));
  } catch {
    return {};
  }
}
function X8({ onMount: e }) {
  return (0, b.useLayoutEffect)(e, [e]), null;
}
function Nd(e, a, r = {}) {
  if (!r.isolatedDocument && Rd()) return {
    ready: Promise.resolve(),
    dispose: () => {
    }
  };
  const l = document.createElement("div");
  l.dataset.sitesWidget = e.kind, document.body.append(l);
  let u, c;
  const d = () => {
    c?.disconnect(), u?.unmount(), l.remove();
  };
  return r.isolatedDocument || (c = new MutationObserver(() => {
    Rd() && d();
  }), c.observe(document.documentElement, { childList: !0 })), {
    ready: (async () => {
      const h = nE(e.locale ?? "") ?? "en-US", m = r.isolatedDocument ? l : l.attachShadow({ mode: "open" }), g = document.createElement("style");
      g.textContent = `
      ${r.isolatedDocument ? "html, body { margin: 0; background: transparent; color-scheme: light dark; }" : ""}
      :host {
        all: initial !important;
        display: block !important;
        inset: 0 !important;
        pointer-events: none !important;
        position: fixed !important;
        z-index: 2147483647 !important;
      }
    `;
      const p = document.createElement("style");
      p.textContent = "._Button_milvu_1{--button-press-scale:.96;--button-surface-transition:background-color .15s ease, box-shadow .15s ease, transform .15s ease;--button-size:32px;--button-icon-size:18px;--button-gutter:12px;all:initial;box-sizing:border-box;color:var(--button-text-color);cursor:pointer;font:inherit;height:var(--button-size);padding:0 var(--button-gutter);-webkit-user-select:none;user-select:none;white-space:nowrap;flex-shrink:0;gap:6px;font-weight:500;display:inline-block;position:relative}._Button_milvu_1:before,._Button_milvu_1:after{border-radius:inherit;content:\"\";pointer-events:none;transition:var(--button-surface-transition);will-change:transform;position:absolute;inset:0}._Button_milvu_1:before{background:var(--button-background-color)}._Button_milvu_1:focus{outline:0}._Button_milvu_1:focus-visible:after{outline:2px solid var(--button-ring-color,currentColor);outline-offset:var(--button-ring-offset,2px)}._Button_milvu_1[data-size=lg]{--button-size:36px}._Button_milvu_1[data-icon-size=lg]{--button-icon-size:20px}._Button_milvu_1:where([data-pill]){padding-inline:calc(var(--button-gutter) * 1.33);border-radius:9999px}._Button_milvu_1[data-uniform]{width:var(--button-size);padding:0}._Button_milvu_1:where([data-variant=solid][data-color=primary]){--button-background-color:var(--lightningcss-light,#181818)var(--lightningcss-dark,#f3f3f3);--button-background-color-hover:var(--lightningcss-light,#303030)var(--lightningcss-dark,#ededed);--button-background-color-active:var(--lightningcss-light,#414141)var(--lightningcss-dark,#dcdcdc);--button-text-color:var(--lightningcss-light,#fff)var(--lightningcss-dark,#0d0d0d)}._Button_milvu_1:where([data-variant=solid][data-color=secondary]){--button-background-color:#fff;--button-background-color-hover:#f7f7f7;--button-background-color-active:#ededed;--button-text-color:#171717}._Button_milvu_1:where([data-variant=ghost]){--button-background-color:transparent;--button-background-color-hover:var(--lightningcss-light,#0d0d0d14)var(--lightningcss-dark,#ffffff1f);--button-background-color-active:var(--lightningcss-light,#0d0d0d1f)var(--lightningcss-dark,#ffffff29);--button-text-color:var(--lightningcss-light,#0d0d0d)var(--lightningcss-dark,#fff)}._Button_milvu_1:where([data-variant=ghost][data-color=secondary]){--button-text-color:var(--lightningcss-light,#5d5d5d)var(--lightningcss-dark,#afafaf)}._Button_milvu_1:not(:disabled):hover:before{background:var(--button-background-color-hover)}._Button_milvu_1:not(:disabled):active:before{background:var(--button-background-color-active);transform:scale(var(--button-press-scale))}._Button_milvu_1:not(:disabled):active:after{transform:scale(var(--button-press-scale))}._Button_milvu_1[data-disabled]{cursor:default;opacity:.32}._Button_milvu_1:disabled{cursor:default}._Button_milvu_1 svg:not([data-no-autosize]){height:var(--button-icon-size);width:var(--button-icon-size)}._ButtonInner_milvu_128{align-items:center;gap:inherit;justify-content:center;width:100%;height:100%;transition:opacity .15s .1s;display:flex;position:relative}._Button_milvu_1[data-loading] ._ButtonInner_milvu_128{opacity:0;transition:opacity .3s}._Button_milvu_1>._ButtonLoader_milvu_145{z-index:3;pointer-events:none;justify-content:center;align-items:center;display:flex;position:absolute;inset:0}._Button_milvu_1>._ButtonLoader_milvu_145[data-entering]{opacity:0}._Button_milvu_1>._ButtonLoader_milvu_145[data-exiting]{opacity:1}._Button_milvu_1>._ButtonLoader_milvu_145[data-entering-active],._Button_milvu_1>._ButtonLoader_milvu_145[data-entering][data-interrupted]{opacity:1;transition:opacity .15s}._Button_milvu_1>._ButtonLoader_milvu_145[data-exiting-active],._Button_milvu_1>._ButtonLoader_milvu_145[data-exiting][data-interrupted]{opacity:0;transition:opacity .15s}@media (prefers-reduced-motion:reduce){._Button_milvu_1:before,._Button_milvu_1:after,._Button_milvu_1 ._ButtonInner_milvu_128,._Button_milvu_1>._ButtonLoader_milvu_145{transition:none}}._LoadingIndicator_1mmfp_1{width:var(--indicator-size,1em);height:var(--indicator-size,1em);animation:_rotate_1mmfp_1 var(--indicator-rotate-duration,.8s) linear infinite;flex-shrink:0;transition:opacity .15s;display:inline-block;position:relative}._LoadingIndicator_1mmfp_1:before{border:var(--indicator-stroke,2px) solid var(--indicator-color,currentcolor);content:\"\";border-radius:50%;display:block;position:absolute;inset:0;-webkit-mask-image:conic-gradient(#0000,#000);mask-image:conic-gradient(#0000,#000)}._LoadingIndicator_1mmfp_1:after{width:var(--indicator-stroke,2px);height:var(--indicator-stroke,2px);margin-left:calc(var(--indicator-stroke,2px) * -1 / 2);background-color:var(--indicator-color,currentcolor);content:\"\";border-radius:100%;display:block;position:absolute;top:0;left:50%}@keyframes _rotate_1mmfp_1{0%{transform:rotate(0)}to{transform:rotate(1turn)}}._TransitionGroupChild_1d6a5_1{display:block}._Image_1l1xj_1{opacity:0;transition:opacity .3s var(--transition-ease-basic,ease);display:block}._Image_1l1xj_1[data-loaded]{opacity:1}@media (prefers-reduced-motion:reduce){._Image_1l1xj_1{transition:none}}._Tooltip_arpo7_1{border-radius:var(--tooltip-border-radius);max-width:300px;animation-name:_scale-in_arpo7_1;animation-duration:.25s;animation-timing-function:var(--cubic-enter);background:var(--tooltip-background-color);box-shadow:var(--tooltip-box-shadow);color:var(--tooltip-text-color);font-size:var(--tooltip-font-size);font-weight:var(--tooltip-font-weight);line-height:var(--tooltip-line-height);transform-origin:var(--radix-tooltip-content-transform-origin);transition:background-color .15s}._Tooltip_arpo7_1[data-state=closed]{animation:_scale-out_arpo7_1 .25s var(--cubic-enter)}._Tooltip_arpo7_1[data-clickable=false]{cursor:default}._Tooltip_arpo7_1[data-clickable=true]{cursor:pointer}@media (hover:hover){._Tooltip_arpo7_1[data-compact=true][data-clickable=true]:hover{background:var(--tooltip-compact-interactive-background-color-hover);color:var(--tooltip-compact-interactive-text-color-hover)}}._Tooltip_arpo7_1[data-gutter-size=sm]{padding:var(--tooltip-padding-sm)}._Tooltip_arpo7_1[data-gutter-size=md]{padding:var(--tooltip-padding-md)}._Tooltip_arpo7_1[data-gutter-size=lg]{padding:var(--tooltip-padding-lg)}._Tooltip_arpo7_1[data-compact=true]{padding:var(--tooltip-compact-padding);background:var(--tooltip-compact-background-color);color:var(--tooltip-compact-text-color);font-size:var(--tooltip-compact-font-size);font-weight:var(--tooltip-compact-font-weight)}@keyframes _scale-in_arpo7_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes _scale-out_arpo7_1{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.97)}}._TriggerDecorator_arpo7_86{cursor:pointer;transition:text-decoration .2s var(--cubic-exit);-webkit-text-decoration:underline dotted #0000;text-decoration:underline dotted #0000;display:inline-flex}._TriggerDecorator_arpo7_86:focus{outline:0}._TriggerDecorator_arpo7_86[data-state*=open]{-webkit-text-decoration-color:var(--color-text-tertiary);text-decoration-color:var(--color-text-tertiary);transition-timing-function:var(--cubic-enter)}._Layout_1a5g1_1{flex-shrink:0;transition-property:height,width;display:block;position:relative}._Layout_1a5g1_1[data-clip=true]{overflow:hidden}._Layout_1a5g1_1[data-direction=in]{transition-delay:var(--tg-layout-enter-delay);transition-duration:var(--tg-layout-enter-duration);transition-timing-function:var(--tg-layout-enter-timing-function)}._Layout_1a5g1_1[data-direction=out]{transition-delay:var(--tg-layout-exit-delay);transition-duration:var(--tg-layout-exit-duration);transition-timing-function:var(--tg-layout-exit-timing-function)}._Layout_1a5g1_1[data-direction=move]{transition-delay:var(--tg-layout-move-delay);transition-duration:var(--tg-layout-move-duration);transition-timing-function:var(--tg-layout-move-timing-function)}._Layout_1a5g1_1[data-interrupted=true]{transition-delay:0s}._TransitionItem_1a5g1_34{will-change:var(--tg-will-change,auto);flex-shrink:0}._TransitionItem_1a5g1_34[data-entering],._TransitionItem_1a5g1_34[data-exiting]{width:100%;position:absolute;top:0;left:0}._Layout_1a5g1_1[data-dimension=width]>._TransitionItem_1a5g1_34[data-entering],._Layout_1a5g1_1[data-dimension=width]>._TransitionItem_1a5g1_34[data-exiting]{width:auto}._Layout_1a5g1_1[data-resize-contents][data-dimension=width]>._TransitionItem_1a5g1_34[data-entering]{width:100%}._Layout_1a5g1_1[data-item-anchor=end]>._TransitionItem_1a5g1_34[data-entering],._Layout_1a5g1_1[data-item-anchor=end]>._TransitionItem_1a5g1_34[data-exiting]{bottom:0;top:initial}._Layout_1a5g1_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_1a5g1_34[data-entering],._Layout_1a5g1_1[data-item-anchor=end][data-dimension=width]>._TransitionItem_1a5g1_34[data-exiting]{left:initial;right:0}._Layout_1a5g1_1[data-item-anchor=center]>._TransitionItem_1a5g1_34:is([data-entering],[data-exiting]){top:50%;translate:0 -50%}._Layout_1a5g1_1[data-item-anchor=center][data-dimension=width]>._TransitionItem_1a5g1_34:is([data-entering],[data-exiting]){top:0;left:50%;translate:-50%}._TransitionItem_1a5g1_34[data-entering]{filter:var(--tg-initial-filter);opacity:var(--tg-initial-opacity);transform:var(--tg-initial-transform)}._TransitionItem_1a5g1_34[data-exiting]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform)}._TransitionItem_1a5g1_34[data-entering-active],._TransitionItem_1a5g1_34[data-entering][data-interrupted]{filter:var(--tg-enter-filter);opacity:var(--tg-enter-opacity);transform:var(--tg-enter-transform);transition:opacity var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), transform var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay), filter var(--tg-enter-duration) var(--tg-enter-timing-function) var(--tg-enter-delay)}._TransitionItem_1a5g1_34[data-exiting-active],._TransitionItem_1a5g1_34[data-exiting][data-interrupted]{filter:var(--tg-exit-filter);opacity:var(--tg-exit-opacity);transform:var(--tg-exit-transform);transition:opacity var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), transform var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay), filter var(--tg-exit-duration) var(--tg-exit-timing-function) var(--tg-exit-delay)}._Theme_1ewnz_2{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--cubic-enter:cubic-bezier(.19, 1, .22, 1);--cubic-exit:cubic-bezier(.8, 0, .4, 1);--tooltip-border-radius:9999px;--tooltip-background-color:#1d1d1d;--tooltip-text-color:#fff;--tooltip-box-shadow:0 4px 12px #0000001f;--tooltip-font-size:14px;--tooltip-font-weight:500;--tooltip-line-height:20px;--tooltip-padding-sm:8px 12px;--tooltip-padding-md:5px 12px;--tooltip-padding-lg:14px 18px;--tooltip-compact-padding:2px 8px;--tooltip-compact-background-color:var(--lightningcss-light,#303030)var(--lightningcss-dark,#afafaf);--tooltip-compact-text-color:var(--lightningcss-light,#fff)var(--lightningcss-dark,#0d0d0d);--tooltip-compact-interactive-background-color-hover:var(--lightningcss-light,#414141)var(--lightningcss-dark,#8f8f8f);--tooltip-compact-interactive-text-color-hover:var(--lightningcss-light,#fff)var(--lightningcss-dark,#0d0d0d);--tooltip-compact-font-size:14px;--tooltip-compact-font-weight:400;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}@media (prefers-color-scheme:dark){._Theme_1ewnz_2{--lightningcss-light: ;--lightningcss-dark:initial}}._Portal_1ewnz_35{pointer-events:none;z-index:2147483647;position:relative}._Tooltip_1ewnz_41{box-sizing:border-box;cursor:default;letter-spacing:0;pointer-events:auto;text-align:center;border:1px solid #ffffff1f}._SharingTooltip_1ewnz_51{--tooltip-border-radius:14px;--tooltip-background-color:var(--tooltip-compact-background-color);--tooltip-text-color:var(--tooltip-compact-text-color);text-wrap:pretty}._HideHint_1ewnz_58{--tooltip-border-radius:14px;--tooltip-padding-md:10px 12px;pointer-events:auto;text-align:left;border:0;width:280px}._SharingHint_1ewnz_68,._SharingHint_1ewnz_68>span{overflow-wrap:anywhere;display:block}._HideHintContent_1ewnz_74{align-items:center;gap:12px;display:flex}._HideHintText_1ewnz_80{flex:1;min-width:0}._Shortcut_1ewnz_85{flex-shrink:0;gap:4px;display:inline-flex}._Shortcut_1ewnz_85 kbd{box-sizing:border-box;font:inherit;background:#ffffff17;border:1px solid #ffffff24;border-radius:5px;justify-content:center;align-items:center;min-width:22px;height:22px;padding:0 4px;font-size:12px;display:inline-flex;box-shadow:0 1px 1px #ffffff1f}@media (prefers-reduced-motion:reduce){._Portal_1ewnz_35 ._Tooltip_1ewnz_41[data-state]{animation:none}}._Widget_li154_1,._Widget_li154_1 *,._Widget_li154_1 :before,._Widget_li154_1 :after{box-sizing:border-box}._Widget_li154_1{--button-ring-color:#171717;--button-ring-offset:3px;--widget-surface:#ffffffc7;--widget-surface-highlight:#ffffffc7;--widget-text:#171717;--widget-text-secondary:#444;--widget-text-tertiary:var(--lightningcss-light,#8f8f8f)var(--lightningcss-dark,#afafaf);--widget-placeholder:#777;--widget-border:#0d0d0d1f;--widget-border-highlight:#0d0d0d2e;--widget-control-hover:#0d0d0d0f;--widget-control-active:#0d0d0d1a;--widget-shadow:#00000024;all:initial;box-sizing:border-box;color:var(--widget-text);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;pointer-events:auto;z-index:2147483647;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;position:fixed}@media (prefers-color-scheme:dark){._Widget_li154_1{--lightningcss-light: ;--lightningcss-dark:initial}}._Widget_li154_1{pointer-events:none;bottom:auto;right:auto}._Widget_li154_1[data-snapping]{transition:left var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1), top var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1)}._LandingShadow_li154_46{box-sizing:border-box;pointer-events:none;z-index:2147483646;background:#64748b29;border-radius:18px;position:fixed;box-shadow:0 4px 20px #00000014}._WidgetEntrance_li154_56[data-entering]{opacity:0;transform:translateY(4px)}._WidgetEntrance_li154_56[data-entering-active]{opacity:1;transition:opacity .18s cubic-bezier(.19,1,.22,1),transform .18s cubic-bezier(.19,1,.22,1);transform:translateY(0)}._WidgetExit_li154_69[data-exiting]{opacity:0}._WidgetExit_li154_69{contain:paint;pointer-events:none;z-index:2147483647;position:fixed;inset:0}._Widget_li154_1[data-tucked] ._Shell_li154_82{width:64px;height:64px;transform:translate(var(--tuck-x), var(--tuck-y));border-radius:32px}._Widget_li154_1[data-peek-phase=expanded] ._Shell_li154_82{width:88px;height:88px;transform:translate(calc(var(--tuck-x) - 12px), calc(var(--tuck-y) - 12px));--widget-morph-easing:cubic-bezier(.2, 1.4, .4, 1);border-radius:32px}._Widget_li154_1[data-quiet-tuck] ._Shell_li154_82{--widget-morph-duration:.22s;--widget-morph-easing:ease}._Widget_li154_1[data-peek-phase=away] ._Shell_li154_82{transform:translate(calc(var(--tuck-x) + var(--corner-x-direction) * 80px), calc(var(--tuck-y) + var(--corner-y-direction) * 80px));--widget-morph-duration:.36s;--widget-morph-easing:cubic-bezier(.55, 0, .85, .4)}._Widget_li154_1[data-peek-phase=tucked]:not([data-quiet-tuck]) ._ToolbarPanel_li154_115 ._Shell_li154_82{--widget-morph-duration:.15s;--widget-morph-easing:ease-out}._ShellControls_li154_120{width:max-content;transition:opacity .12s .14s}._Widget_li154_1[data-tucked] ._ShellControls_li154_120{opacity:0;transition:opacity .1s}._Launcher_li154_130{cursor:pointer;font:inherit;color:var(--widget-text);white-space:nowrap;-webkit-user-select:none;user-select:none;z-index:1;background:0 0;border:0;justify-content:center;align-items:center;gap:12px;min-width:137px;height:36px;padding:0 40px;font-size:13px;font-weight:400;display:inline-flex}._LauncherRow_li154_153{position:relative}._LauncherLabel_li154_157{line-height:20px;display:inline-block}._Widget_li154_1[data-dragging] ._Launcher_li154_130{cursor:grabbing}._CornerTarget_li154_167{cursor:pointer;pointer-events:auto;touch-action:none;z-index:2147483647;background:0 0;border:0;width:44px;height:44px;padding:0;position:fixed}._CornerTarget_li154_167:hover,._CornerTarget_li154_167:focus-visible{width:52px;height:52px}._CornerTarget_li154_167:focus-visible{outline:2px solid var(--button-ring-color);outline-offset:-3px}._Widget_li154_1[data-corner=top-left] ._CornerTarget_li154_167{border-radius:0 0 32px;top:0;left:0}._Widget_li154_1[data-corner=top-right] ._CornerTarget_li154_167{border-radius:0 0 0 32px;top:0;right:0}._Widget_li154_1[data-corner=bottom-left] ._CornerTarget_li154_167{border-radius:0 32px 0 0;bottom:0;left:0}._Widget_li154_1[data-corner=bottom-right] ._CornerTarget_li154_167{border-radius:32px 0 0;bottom:0;right:0}._Widget_li154_1[data-corner=bottom-center] ._CornerTarget_li154_167{border-radius:32px 32px 0 0;bottom:0;left:50%;transform:translate(-50%)}._Panel_li154_203 ._LogoButton_li154_203[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text);--button-size:28px;z-index:2;position:absolute;top:4px;left:4px}._LogoButton_li154_203:focus-visible:before{background:var(--button-background-color-hover)}._Shell_li154_82{--widget-morph-duration:.42s;--widget-morph-easing:cubic-bezier(.4, 0, .2, 1);pointer-events:auto;width:var(--widget-surface-width,137px);height:var(--widget-surface-height,36px);transition:transform var(--widget-morph-duration) var(--widget-morph-easing), width var(--widget-morph-duration) var(--widget-morph-easing), height var(--widget-morph-duration) var(--widget-morph-easing), border-radius var(--widget-morph-duration) var(--widget-morph-easing), opacity .15s ease;border-radius:18px;position:relative;transform:translate(0)}._Panel_li154_203[data-expanded] ._Shell_li154_82,._WidgetEntrance_li154_56[data-entering] ._ToolbarPanel_li154_115 ._Shell_li154_82{transition:none}._Widget_li154_1:not([data-tucked]) ._Shell_li154_82:has(._ShellContent_li154_248[data-entering],._ShellContent_li154_248[data-exiting]){transition-property:transform,border-radius,opacity}._ShellLayout_li154_252{border-radius:inherit;width:max-content;min-height:36px;transition-property:width}._ShellContent_li154_248{z-index:1;min-height:36px;position:relative}._Widget_li154_1[data-corner^=top] ._ShellContent_li154_248:is([data-entering],[data-exiting]){top:0;bottom:auto}._Widget_li154_1[data-corner^=bottom] ._ShellContent_li154_248:is([data-entering],[data-exiting]){top:auto;bottom:0}._ShellContent_li154_248[data-exiting],._ShellContent_li154_248[data-exiting] *{pointer-events:none}._Shell_li154_82:before{-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter,blur(18px) saturate(1.25));backdrop-filter:var(--sites-toolbar-backdrop-filter,blur(18px) saturate(1.25));background:var(--sites-toolbar-glass,var(--widget-surface));border-radius:inherit;box-shadow:0 0 0 1px var(--widget-border), 0 10px 30px var(--widget-shadow), 0 2px 6px #00000014;content:\"\";pointer-events:none;will-change:transform;transition:background-color .15s,box-shadow .15s,transform .15s;position:absolute;inset:0}._Shell_li154_82:hover:before,._Shell_li154_82:focus-within:before{background:var(--sites-toolbar-glass,var(--widget-surface-highlight))}._Shell_li154_82:after{border-radius:inherit;content:\"\";pointer-events:none;transition:transform .15s;position:absolute;inset:0}._Panel_li154_203:not([data-expanded]) ._Shell_li154_82:has(._Launcher_li154_130:focus-visible):after{outline:2px solid var(--button-ring-color);outline-offset:var(--button-ring-offset)}._Shell_li154_82:has(._Launcher_li154_130:active):before{transform:scale(.98)}._Shell_li154_82:has(._Launcher_li154_130:active):after{transform:scale(.98)}._LauncherLogo_li154_325{flex:none;width:18px;height:18px;display:block}._LauncherLogo_li154_325[data-entering] img[data-loaded]{transform-origin:50%;animation:.7s cubic-bezier(.22,1,.36,1) both _blossomEntrance_li154_1}@keyframes _blossomEntrance_li154_1{0%{transform:rotate(-60deg)scale(.9)}to{transform:rotate(0)scale(1)}}._Panel_li154_203{--widget-panel-width:min(var(--widget-composer-width,360px), calc(100vw - 48px));width:var(--widget-panel-width);flex-direction:column;align-items:flex-start;display:flex;position:relative}._Panel_li154_203:is(:lang(ae),:lang(ar),:lang(arc),:lang(bcc),:lang(bqi),:lang(ckb),:lang(dv),:lang(fa),:lang(glk),:lang(he),:lang(ku),:lang(mzn),:lang(nqo),:lang(pnb),:lang(ps),:lang(sd),:lang(ug),:lang(ur),:lang(yi)){align-items:flex-end}._Composer_li154_357{min-height:36px;width:var(--widget-panel-width);background:0 0;grid-template-columns:minmax(0,1fr) 24px;align-items:end;gap:8px;padding:6px;display:grid;overflow:hidden}._ShellLayout_li154_252[data-resize-contents] ._Composer_li154_357{width:100%}._Textarea_li154_373{all:initial;box-sizing:border-box;color:var(--widget-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;resize:none;align-self:center;width:calc(100% - 12px);height:24px;min-height:24px;max-height:180px;margin-left:12px;padding:3px 0;font-family:inherit;font-size:14px;font-weight:400;line-height:18px;transition:none;display:block;overflow-y:auto}._Textarea_li154_373::placeholder{color:var(--widget-placeholder);opacity:1}._Textarea_li154_373:placeholder-shown{white-space:pre;overflow-x:hidden}._Textarea_li154_373:focus{outline:0}._ComposerFooter_li154_411{justify-content:flex-end;display:flex}._ComposerTooltip_li154_416{--tooltip-border-radius:12px;--tooltip-background-color:var(--tooltip-compact-background-color);--tooltip-text-color:var(--tooltip-compact-text-color)}._ComposerArrow_li154_422{transition:transform .16s ease-out;transform:rotate(0)}._ComposerArrow_li154_422[data-open]{transform:rotate(45deg)}@media (prefers-reduced-motion:reduce){._ComposerArrow_li154_422{transition:none}}._Panel_li154_203 ._SendButton_li154_435[data-variant][data-color]{--button-size:24px;--button-icon-size:16px;align-self:end}:where(._Widget_li154_1:not([data-tucked])) ._ToolbarPanel_li154_115 ._Shell_li154_82{border-radius:22px;height:auto}._ToolbarPanel_li154_115 ._ShellLayout_li154_252[data-resize-contents]>._ShellContent_li154_248[data-entering]{position:relative}._ToolbarPanel_li154_115 ._ShellContent_li154_248[data-exiting]:has(._Composer_li154_357){width:100%}._ToolbarPanel_li154_115 ._ShellContent_li154_248[data-exiting]:has(._Composer_li154_357) ._Composer_li154_357{width:100%}._ToolbarPanel_li154_115 ._Composer_li154_357{grid-template-columns:minmax(0,1fr) 28px;padding:8px}._ToolbarPanel_li154_115 ._Textarea_li154_373{height:28px;min-height:28px;padding-block:4px;font-size:15px;line-height:20px}._ToolbarPanel_li154_115 ._SendButton_li154_435[data-variant][data-color]{--button-size:28px;--button-icon-size:16px;--button-background-color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);--button-background-color-hover:var(--lightningcss-light,#303030)var(--lightningcss-dark,#e5e5e5);--button-background-color-active:var(--lightningcss-light,#444)var(--lightningcss-dark,#d4d4d4);--button-text-color:var(--lightningcss-light,#fff)var(--lightningcss-dark,#171717)}._Launcher_li154_130:focus{outline:0}._Panel_li154_203 ._LauncherDismissButton_li154_490[data-variant][data-color]{--button-background-color-hover:var(--widget-control-hover);--button-background-color-active:var(--widget-control-active);--button-text-color:var(--widget-text-tertiary);--button-size:28px;--button-icon-size:16px;opacity:0;pointer-events:none;z-index:2;transition:opacity 80ms;position:absolute;bottom:4px;right:4px}._LauncherDismissButton_li154_490:focus-visible:before{background:var(--button-background-color-hover)}._Panel_li154_203:not([data-expanded]) ._LauncherDismissButton_li154_490[data-variant][data-color]{opacity:1;pointer-events:auto}._Panel_li154_203:not([data-expanded]) ._Shell_li154_82:has(._ShellContent_li154_248[data-entering]) ._LauncherDismissButton_li154_490[data-variant][data-color]{opacity:0;pointer-events:none}@media (prefers-reduced-motion:reduce){._WidgetEntrance_li154_56[data-entering]{opacity:1;transition:none;transform:none}._Widget_li154_1[data-snapping],._LauncherLogo_li154_325[data-entering] img[data-loaded],._Widget_li154_1[data-tucked] ._Shell_li154_82,._Widget_li154_1[data-peek-phase] ._Shell_li154_82,._Widget_li154_1[data-quiet-tuck] ._Shell_li154_82,._ShellControls_li154_120,._Widget_li154_1[data-tucked] ._ShellControls_li154_120,._Composer_li154_357,._Launcher_li154_130,._Launcher_li154_130:before,._Shell_li154_82,._ShellLayout_li154_252,._Shell_li154_82:before,._Shell_li154_82:after,._Panel_li154_203 ._LauncherDismissButton_li154_490[data-variant][data-color],._Textarea_li154_373{transition:none;animation:none}}@media (hover:hover){._Shell_li154_82:hover{--widget-border:var(--widget-border-highlight)}}@media (prefers-color-scheme:dark){._Widget_li154_1{--button-ring-color:#fff;--widget-surface:#282828c2;--widget-surface-highlight:#383838c2;--widget-text:#f5f5f5;--widget-text-secondary:#d0d0d0;--widget-placeholder:#aaa;--widget-border:#ffffff24;--widget-border-highlight:#ffffff38;--widget-control-hover:#ffffff1a;--widget-control-active:#ffffff29;--widget-shadow:#0000004d}._LauncherLogo_li154_325{filter:invert()}}@media (max-width:520px){._Textarea_li154_373{font-size:16px}._Panel_li154_203{--widget-panel-width:calc(100vw - 32px)}}._Shell_li154_82:has([data-toolbar-menu-mounted]):before{visibility:hidden}._Shell_li154_82:has([data-toolbar-menu-mounted]):after{visibility:hidden}._SharingClose_li154_592{gap:12px;min-width:0;padding-block:0;padding-inline:10px 16px}._SharingClose_li154_592 svg{width:16px;height:16px}._Shell_li154_82:has(._SharingClose_li154_592):before{background:var(--sites-toolbar-action-glass)}._Shell_li154_82:has(._SharingClose_li154_592:active):before{transform:scale(.94)}._Shell_li154_82:has(._SharingClose_li154_592:active):after{transform:scale(.94)}._Shell_li154_82:has([data-menu-open]){pointer-events:none}._Widget_1lfcb_1{--safe-top:env(safe-area-inset-top,0px);--safe-right:env(safe-area-inset-right,0px);--safe-bottom:env(safe-area-inset-bottom,0px);--safe-left:env(safe-area-inset-left,0px);pointer-events:auto;width:max-content;max-width:calc(100vw - 32px);height:52px}._Widget_1lfcb_1[data-mobile-widget-menu-open]{pointer-events:none}._Widget_1lfcb_1[data-mobile-widget-snapping]{transition:left var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1), top var(--widget-snap-duration) cubic-bezier(.2, .8, .2, 1)}@media (prefers-reduced-motion:reduce){._Widget_1lfcb_1[data-mobile-widget-snapping]{transition:none}}._Launcher_1lfcb_27,._Action_1lfcb_28,._EditAction_1lfcb_29,._MoreAction_1lfcb_30{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}._Launcher_1lfcb_27:before,._Menu_1lfcb_39:before{border:1px solid var(--widget-border);-webkit-backdrop-filter:blur(18px)saturate(1.25);backdrop-filter:blur(18px)saturate(1.25);background:var(--widget-surface);box-shadow:0 4px 20px var(--widget-shadow);color:var(--widget-text)}._Launcher_1lfcb_27{cursor:grab;isolation:isolate;touch-action:none;border-radius:26px;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;height:52px;padding:4px;transition:opacity .14s .11s;display:grid;position:relative}._Launcher_1lfcb_27:before{z-index:-1;border-radius:inherit;content:\"\";pointer-events:none;transition:transform var(--press-duration,.24s) ease-out;position:absolute;inset:0}:where(._Widget_1lfcb_1[data-mobile-widget-pressed]) ._Launcher_1lfcb_27:before{--press-duration:.1s;transform:scale(.96)}:where(._Widget_1lfcb_1[data-mobile-widget-menu-open]) ._Launcher_1lfcb_27{opacity:0;pointer-events:none;transition-duration:80ms;transition-delay:0s}:where(._Widget_1lfcb_1[data-mobile-widget-menu-mounted]) ._Launcher_1lfcb_27:before{visibility:hidden}._Launcher_1lfcb_27 img{pointer-events:none;justify-self:center}@media (prefers-color-scheme:dark){._Launcher_1lfcb_27 img{filter:invert()}}:where(._Widget_1lfcb_1[data-mobile-widget-dragging]) ._Launcher_1lfcb_27{cursor:grabbing}@media (prefers-reduced-motion:reduce){._Launcher_1lfcb_27,._Launcher_1lfcb_27:before{transition:none}}._EditAction_1lfcb_29,._MoreAction_1lfcb_30{min-width:44px;height:44px;color:inherit;cursor:pointer;font:inherit;background:0 0;border:0;border-radius:22px;justify-content:center;align-items:center;padding:0;font-size:16px;line-height:20px;text-decoration:none;display:flex}._EditAction_1lfcb_29{overflow-wrap:anywhere;text-align:center;min-width:0;padding:0 8px}._MoreAction_1lfcb_30{color:var(--widget-text-tertiary)}._MoreAction_1lfcb_30 svg{width:24px;height:24px}._Menu_1lfcb_39{--surface-easing:cubic-bezier(.2, .8, .2, 1);--surface-duration:.25s;--surface-inset:var(--closed-top) var(--closed-right) var(--closed-bottom) var(--closed-left);--surface-radius:26px;z-index:2147483646;opacity:0;pointer-events:none;border-radius:24px;width:min(200px,100vw - 32px);max-width:calc(100vw - 32px);padding:0;display:block;position:relative}._Menu_1lfcb_39:focus{outline:none}._Menu_1lfcb_39:before{inset:var(--surface-inset);border-radius:var(--surface-radius);content:\"\";pointer-events:none;transition:inset var(--surface-duration) var(--surface-easing), border-radius var(--surface-duration) var(--surface-easing);position:absolute}._Menu_1lfcb_39[data-mobile-widget-positioned]{opacity:1;pointer-events:auto}._Menu_1lfcb_39[data-mobile-widget-positioned][data-state=open]{--surface-duration:.38s;--surface-inset:0px;--surface-radius:24px}._Menu_1lfcb_39[data-state=closed]{animation:_menu-exit_1lfcb_1 var(--surface-duration) both;pointer-events:none}@media (prefers-reduced-motion:reduce){._Menu_1lfcb_39[data-state=closed],._Menu_1lfcb_39:before{transition:none;animation:none}}._Actions_1lfcb_204{clip-path:inset(var(--surface-inset) round var(--surface-radius));opacity:0;transition:clip-path var(--surface-duration) var(--surface-easing), opacity 60ms ease;flex-direction:column;padding:8px;display:flex;position:relative}:where(._Menu_1lfcb_39[data-mobile-widget-positioned][data-state=open]) ._Actions_1lfcb_204{opacity:1;transition:clip-path var(--surface-duration) var(--surface-easing), opacity .18s ease 80ms}@media (prefers-reduced-motion:reduce){._Actions_1lfcb_204{transition:none}}@keyframes _menu-exit_1lfcb_1{0%,to{visibility:visible}}._Action_1lfcb_28{min-height:48px;color:inherit;cursor:pointer;font:inherit;overflow-wrap:anywhere;text-align:start;background:0 0;border:0;border-radius:20px;align-items:center;gap:12px;padding:10px 12px;font-size:16px;text-decoration:none;display:flex}._Action_1lfcb_28 svg{flex:none;width:20px;height:20px}._Action_1lfcb_28:active{background:var(--widget-control-active)}@media (hover:hover){._Action_1lfcb_28:hover{background:var(--widget-control-hover)}}._Action_1lfcb_28:focus-visible,._EditAction_1lfcb_29:focus-visible,._MoreAction_1lfcb_30:focus-visible{outline:2px solid var(--button-ring-color);outline-offset:2px}._Launcher_1f48j_1,._Launcher_1f48j_1[data-mobile]{cursor:grab;-webkit-user-select:none;user-select:none;align-items:center;gap:4px;width:max-content;max-width:calc(100vw - 48px);height:36px;padding:4px;transition:opacity .22s 60ms;display:flex}:is(._Launcher_1f48j_1,._Launcher_1f48j_1[data-mobile]):active{cursor:grabbing}:is(._Launcher_1f48j_1,._Launcher_1f48j_1[data-mobile])[data-menu-open]{opacity:0;pointer-events:none;transition-duration:80ms;transition-delay:0s}@media (prefers-reduced-motion:reduce){._Launcher_1f48j_1,._Launcher_1f48j_1[data-mobile]{transition:none}}._Launcher_1f48j_1 ._Logo_1f48j_32{place-items:center;width:28px;height:28px;display:grid}._Divider_1f48j_38{background:var(--widget-border);flex:none;width:1px;height:18px}@media (hover:hover){._Launcher_1f48j_1:has(._Shortcut_1f48j_45:hover) ._Divider_1f48j_38{opacity:0}._Divider_1f48j_38:has(+._More_1f48j_46:hover){opacity:0}}._Ghost_1f48j_50[data-variant=ghost]{--button-background-color-hover:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);--button-background-color-active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e);--button-text-color:var(--widget-text)}._Ghost_1f48j_50[data-variant=ghost]:focus-visible:after{outline:none}._Ghost_1f48j_50[data-variant=ghost]:focus-visible:not(:disabled):not(:active):before{background:var(--button-background-color-hover)}._Launcher_1f48j_1 ._Shortcut_1f48j_45,._Launcher_1f48j_1 ._More_1f48j_46{--button-size:28px;--button-icon-size:16px;font-size:13px}._Launcher_1f48j_1 ._Shortcut_1f48j_45{flex-shrink:1;gap:6px;min-width:0;margin-inline:-3px;padding:0 11px}._Label_1f48j_84{text-overflow:ellipsis;overflow:hidden}._More_1f48j_46[data-variant=ghost]{--button-text-color:var(--widget-text-tertiary)}._Menu_1f48j_91[data-state]{width:max-content;min-width:184px;max-width:none}._Menu_1f48j_91:before{outline:1px solid var(--widget-border);-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter);backdrop-filter:var(--sites-toolbar-backdrop-filter);background:var(--sites-toolbar-glass);border:0}._Menu_1f48j_91 ._MenuActions_1f48j_104{padding:6px}._MenuDivider_1f48j_107{border:0;border-top:1px solid var(--widget-border);margin:4px 10px}._MenuAction_1f48j_104{--button-icon-size:20px;text-align:start;white-space:nowrap;border-radius:9999px;align-items:center;gap:10px;height:auto;min-height:38px;padding:7px 10px;font-size:13px;line-height:20px;text-decoration:none;display:flex}._MenuAction_1f48j_104>span{justify-content:flex-start}._MenuAction_1f48j_104 svg{flex-shrink:0}._MenuAction_1f48j_104:before{transition-property:transform}._Launcher_1f48j_1[data-mobile]{max-width:calc(100vw - 32px)}._Launcher_1f48j_1[data-mobile]:not([data-menu-open]){pointer-events:auto}._Launcher_1f48j_1[data-mobile][data-toolbar-menu-mounted]:before{visibility:hidden}._Menu_1f48j_91[data-mobile]{max-width:calc(100vw - 32px)}._Menu_1f48j_91[data-mobile] ._MenuAction_1f48j_104{white-space:normal}:where([data-mobile-widget-dragging]) ._Launcher_1f48j_1:before{box-shadow:none}._Widget_lanvw_1{pointer-events:none;height:auto}._CloseButton_lanvw_7[data-variant]{--button-size:36px;--button-icon-size:16px;--button-text-color:var(--widget-text);--button-background-color:var(--widget-surface);--button-background-color-hover:var(--widget-surface);--button-background-color-active:var(--widget-surface);pointer-events:auto;gap:12px;padding-block:0;padding-inline:10px 16px;font-size:13px}._CloseButton_lanvw_7[data-variant]:before{border:1px solid var(--widget-border);-webkit-backdrop-filter:blur(18px)saturate(1.25);backdrop-filter:blur(18px)saturate(1.25);box-shadow:0 4px 20px var(--widget-shadow)}._RemixTooltip_6yzd8_1{color:#fff;pointer-events:auto;text-align:start;background:#3a83f7;border-radius:12px;width:min(300px,100vw - 32px);padding:16px;font-size:13px;line-height:18px;position:absolute;bottom:calc(100% + 22px);right:0;box-shadow:0 12px 24px #0000001f}@media (prefers-reduced-motion:no-preference){._RemixTooltip_6yzd8_1{animation:.36s ease-out _remixTooltipFadeIn_6yzd8_1}}@keyframes _remixTooltipFadeIn_6yzd8_1{0%{opacity:0}to{opacity:1}}._RemixTooltip_6yzd8_1:after{--arrow-inset:max(12px, 50% - 7px + (var(--widget-surface-width) - var(--widget-panel-width)) / 2);background:inherit;content:\"\";height:14px;bottom:-7px;right:var(--arrow-inset);width:14px;position:absolute;transform:rotate(45deg)}[data-corner$=left] ._RemixTooltip_6yzd8_1{left:0;right:auto}[data-corner$=left] ._RemixTooltip_6yzd8_1:after{left:var(--arrow-inset);right:auto}[data-corner=bottom-center] ._RemixTooltip_6yzd8_1{left:50%;right:auto;translate:-50%}[data-corner=bottom-center] ._RemixTooltip_6yzd8_1:after{right:calc(50% - 7px)}[data-corner^=top] ._RemixTooltip_6yzd8_1{top:calc(100% + 22px);bottom:auto}[data-corner^=top] ._RemixTooltip_6yzd8_1:after{top:-7px;bottom:auto}._RemixTooltip_6yzd8_1 strong{letter-spacing:-.08px;padding-inline-end:24px;font-weight:500;display:block}._RemixTooltip_6yzd8_1 p{margin:8px 0 0}._RemixTooltip_6yzd8_1 ._CloseButton_6yzd8_68[data-variant=ghost]{--button-size:24px;--button-icon-size:16px;--button-text-color:white;--button-ring-color:white;--button-background-color-hover:#0000001f;--button-background-color-active:#0003;inset-inline-end:12px;border-radius:4px;position:absolute;top:12px}._Banner_1iivt_1,._Banner_1iivt_1 *,._Banner_1iivt_1 :before,._Banner_1iivt_1 :after{box-sizing:border-box}._Banner_1iivt_1{all:initial;box-sizing:border-box;color:#171717;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;pointer-events:auto;z-index:2147483647;background:#fff;border-radius:24px;align-items:center;width:min(640px,100vw - 48px);min-height:68px;padding:12px 14px 12px 20px;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;display:flex;position:fixed;top:24px;left:50%;transform:translate(-50%);box-shadow:0 0 0 1px #0d0d0d1a,0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a}._Content_1iivt_34{flex:1;justify-content:space-between;align-items:center;min-width:0;display:flex}._Message_1iivt_42{overflow-wrap:break-word;flex:1;min-width:0;font-size:14px;line-height:1.5}._OwnerName_1iivt_50{font-weight:600}._Actions_1iivt_54{flex:none;align-items:center;gap:8px;margin-left:16px;display:flex}._EditLink_1iivt_62,._DismissButton_1iivt_63{--scale:.985;font:inherit;isolation:isolate;border:0;justify-content:center;align-items:center;transition:color .15s;display:inline-flex;position:relative}._EditLink_1iivt_62:before,._DismissButton_1iivt_63:before{border-radius:inherit;content:\"\";will-change:transform;z-index:-1;transition:background-color .15s,opacity .15s,transform .15s;position:absolute;inset:0}._EditLink_1iivt_62{color:#fff;white-space:nowrap;background:0 0;border-radius:9999px;flex:none;gap:6px;min-height:36px;padding:0 16px;font-size:13px;font-weight:400;text-decoration:none}._EditLink_1iivt_62 svg{width:18px;height:18px}._EditLink_1iivt_62:before{background:#171717}._EditLink_1iivt_62:hover:before{background:#2f2f2f}._EditLink_1iivt_62:active:before{transform:scale(var(--scale));background:#3a3a3a}._EditLink_1iivt_62:focus-visible,._DismissButton_1iivt_63:focus-visible{outline-offset:2px;outline:2px solid #0d6efd}._DismissButton_1iivt_63{color:#5f5f5f;cursor:pointer;background:0 0;border-radius:9999px;flex:none;width:36px;height:36px;padding:0;font-size:20px}._DismissButton_1iivt_63:before{opacity:0;transform:scale(var(--scale));background:#f2f2f2}._DismissButton_1iivt_63:hover{color:#171717}._DismissButton_1iivt_63:hover:before{opacity:1;transform:scale(1)}._DismissButton_1iivt_63:active:before{opacity:1;transform:scale(var(--scale));background:#e8e8e8}@media (prefers-reduced-motion:reduce){._EditLink_1iivt_62,._EditLink_1iivt_62:before,._DismissButton_1iivt_63,._DismissButton_1iivt_63:before{transition:none}}@media (max-width:520px){._Banner_1iivt_1{width:calc(100vw - 24px);padding:14px 16px 16px 20px;top:12px}._Content_1iivt_34{flex-wrap:wrap;gap:12px}._Message_1iivt_42{flex-basis:calc(100% - 48px)}._Actions_1iivt_54{display:contents}._EditLink_1iivt_62{order:2}._DismissButton_1iivt_63{order:1;align-self:flex-start}}._ModalHost_ijf6m_1{--widget-composer-width:336px;--sites-toolbar-glass:var(--lightningcss-light,#ffffffc7)var(--lightningcss-dark,#21212199);--sites-toolbar-action-glass:var(--lightningcss-light,#ffffffc7)var(--lightningcss-dark,#18181899);--sites-toolbar-backdrop-filter:blur(52px);--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;pointer-events:none;background:0 0;border:0;width:100vw;max-width:none;height:100dvh;max-height:none;margin:0;padding:0;position:fixed;inset:0;overflow:visible}@media (prefers-color-scheme:dark){._ModalHost_ijf6m_1{--lightningcss-light: ;--lightningcss-dark:initial}}._ModalHost_ijf6m_1[data-sharing-open]{pointer-events:auto}._ModalHost_ijf6m_1::backdrop{background:0 0}._ModalHost_ijf6m_1[data-sharing-open] ._FrameHost_ijf6m_34[data-panel-ready]{visibility:visible;pointer-events:auto;transition:none}._FrameHost_ijf6m_34{--sharing-max-height:584px;--sharing-enter-y:16px;--sharing-exit-y:10px;z-index:2147483647;width:min(504px,100vw - 8px);height:min(var(--sharing-max-height), calc(100dvh - 88px));max-height:var(--sharing-max-height);pointer-events:none;visibility:hidden;transition:visibility .18s step-end;position:absolute;bottom:60px;right:12px}._FrameHost_ijf6m_34[data-placement=top]{--sharing-enter-y:-16px;--sharing-exit-y:-10px}._FrameHost_ijf6m_34[data-placement=top]>._Glass_ijf6m_66,._Dialog_ijf6m_67[data-placement=top]{top:12px;bottom:auto}._Frame_ijf6m_34{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;background:0 0;border:0;width:100%;height:100%;display:block;position:relative}@media (prefers-color-scheme:dark){._Frame_ijf6m_34{--lightningcss-light: ;--lightningcss-dark:initial}}._Glass_ijf6m_66{background:var(--lightningcss-light,#ffffffb8)var(--lightningcss-dark,var(--sites-toolbar-glass));max-height:calc(100% - 24px);-webkit-backdrop-filter:var(--sites-toolbar-backdrop-filter);backdrop-filter:var(--sites-toolbar-backdrop-filter);pointer-events:none;border-radius:24px;position:absolute;inset:auto 12px 12px;box-shadow:0 0 0 1px var(--lightningcss-light,#0d0d0d1f)var(--lightningcss-dark,#0000),0 8px 32px #0000001a}._FrameHost_ijf6m_34[data-panel-ready]>._Frame_ijf6m_34,._FrameHost_ijf6m_34[data-panel-ready]>._Glass_ijf6m_66{animation:.18s both _sharing-exit_ijf6m_1}._ModalHost_ijf6m_1[data-sharing-open] ._FrameHost_ijf6m_34[data-panel-ready]>._Frame_ijf6m_34,._ModalHost_ijf6m_1[data-sharing-open] ._FrameHost_ijf6m_34[data-panel-ready]>._Glass_ijf6m_66{animation:.24s cubic-bezier(.2,.8,.2,1) both _sharing-enter_ijf6m_1}._Root_ijf6m_104{--ink:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);--border:var(--lightningcss-light,#0d0d0d33)var(--lightningcss-dark,#ffffff40);--surface:var(--lightningcss-light,#fff)var(--lightningcss-dark,#242424);--hover:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);--active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e);--muted:var(--lightningcss-light,#777)var(--lightningcss-dark,#aaa);--error:var(--lightningcss-light,#b42828)var(--lightningcss-dark,#ff9191);color:var(--ink);pointer-events:none;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;font:14px/1.45 ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;position:fixed;inset:0}@media (prefers-color-scheme:dark){._Root_ijf6m_104{--lightningcss-light: ;--lightningcss-dark:initial}}._Root_ijf6m_104 *{box-sizing:border-box}._Dialog_ijf6m_67{pointer-events:auto;background:0 0;border:0;border-radius:24px;outline:none;flex-direction:column;max-height:calc(100% - 24px);padding:0;display:flex;position:absolute;inset:auto 12px 12px;overflow:hidden}._Dialog_ijf6m_67[data-state=closed]{pointer-events:none;animation:.18s both _sharing-retain_ijf6m_1}._Body_ijf6m_149{flex-direction:column;min-height:0;display:flex}._Header_ijf6m_154{flex-direction:column;flex-shrink:0;padding:20px 20px 0;display:flex}._AccessList_ijf6m_160{--fade-top:0px;--fade-bottom:0px;overscroll-behavior:contain;min-height:0;-webkit-mask-image:linear-gradient(to bottom, transparent, black var(--fade-top), black calc(100% - var(--fade-bottom)), transparent);mask-image:linear-gradient(to bottom, transparent, black var(--fade-top), black calc(100% - var(--fade-bottom)), transparent);overflow:auto}._AccessList_ijf6m_160[data-scroll-cutoff]{--fade-top:16px}._AccessList_ijf6m_160[data-scroll-cutoff-below]{--fade-bottom:16px}._AccessListContent_ijf6m_181{padding-inline:20px}._Title_ijf6m_184{overflow-wrap:anywhere;margin:0 0 24px;font-size:18px;font-weight:500;line-height:1.3}._Dialog_ijf6m_67[data-read-only] ._Title_ijf6m_184{margin-bottom:0}._Section_ijf6m_194{margin:20px 0 8px;font-size:14px;font-weight:400}._Results_ijf6m_199{width:var(--radix-popover-trigger-width);max-width:var(--radix-popover-content-available-width);max-height:min(256px, var(--radix-popover-content-available-height));z-index:1;background:var(--lightningcss-light,#fff)var(--lightningcss-dark,#292929);border-radius:14px;outline:none;padding:6px;overflow:auto;box-shadow:0 8px 28px #00000029,0 0 0 1px var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f)}._Result_ijf6m_199{text-align:start;white-space:normal;width:100%;height:auto;min-height:52px;color:var(--ink);border-radius:8px;gap:10px;padding:8px;font-weight:400}._Result_ijf6m_199[data-variant]{--button-background-color-hover:var(--hover);--button-background-color-active:var(--active)}._Result_ijf6m_199>span{justify-content:flex-start}._Result_ijf6m_199:not(:disabled):hover:before{background:var(--hover)}._Result_ijf6m_199:before{transition-property:transform}._Person_ijf6m_243{align-items:center;gap:12px;padding:8px 0;display:flex}._GroupAvatar_ijf6m_249{--button-icon-size:16px}._GroupAvatar_ijf6m_249>svg{width:16px;height:16px}._Identity_ijf6m_258{overflow-wrap:anywhere;flex-direction:column;flex:1;min-width:0;display:flex}._Secondary_ijf6m_265{color:var(--muted);font-size:13px}._Role_ijf6m_269{max-width:130px;margin-inline-end:-8px}._Role_ijf6m_269[data-variant]{color:var(--muted)}._RoleMenu_ijf6m_278{--select-menu-width:240px;text-wrap:pretty}._AccessMode_ijf6m_283{align-self:flex-start;height:44px;margin-inline-start:-8px;padding:0 8px;padding-inline-end:13px}._AccessModeLabel_ijf6m_291{align-items:center;gap:8px;min-height:44px;margin:0;display:flex}._AccessModeIcon_ijf6m_298{flex-shrink:0;justify-content:center;align-items:center;width:28px;height:28px;display:inline-flex}._AccessModeIcon_ijf6m_298>svg{width:20px;height:20px}._ReadOnlyRole_ijf6m_311{color:var(--muted);padding-inline-end:4px}._Footer_ijf6m_315{flex-shrink:0;justify-content:flex-end;gap:8px;padding:20px;display:flex}._Advanced_ijf6m_322{margin-inline-end:auto}._AdvancedHeader_ijf6m_325 ._Title_ijf6m_184{margin-bottom:16px}._AdvancedFooter_ijf6m_328{padding-top:16px}._InviteRole_ijf6m_332{height:var(--tag-input-height);color:var(--muted);flex-shrink:0}._InviteRole_ijf6m_332[data-variant]{gap:6px;padding-inline:10px 6px}._RemixSetting_ijf6m_342{align-items:center;gap:8px;padding-block:8px 12px;display:flex}._RemixInfo_ijf6m_348{color:var(--muted);cursor:default;background:0 0;border:0;flex-shrink:0;padding:2px;display:inline-flex}._RemixExplanation_ijf6m_357{--tooltip-border-radius:12px;--tooltip-compact-padding:12px 16px;--tooltip-line-height:1.45}._RemixSwitch_ijf6m_362{flex-shrink:0;margin-inline-start:auto}._RemixSetting_ijf6m_342>label{cursor:pointer}._Copy_ijf6m_369{color:var(--ink);background:0 0;gap:8px;padding:0 16px;font-size:13px}._Copy_ijf6m_369[data-variant]{--button-background-color-hover:var(--hover);--button-background-color-active:var(--active)}._Copy_ijf6m_369:before{box-shadow:inset 0 0 0 1px var(--border)}._Error_ijf6m_386{color:var(--error);flex-shrink:0;margin:12px 20px;font-size:13px}._Notice_ijf6m_392{color:var(--muted);padding:8px 0;font-size:13px}._SearchHint_ijf6m_397{margin:0;padding:12px}._SearchLoading_ijf6m_401{place-items:center;min-height:calc(1lh + 16px);display:grid}._EmptyResults_ijf6m_407{color:var(--muted);margin:0;padding:12px;font-size:14px;line-height:20px}@media (max-width:480px){._Role_ijf6m_269{max-width:105px}}@keyframes _sharing-retain_ijf6m_1{0%,to{visibility:visible}}@keyframes _sharing-enter_ijf6m_1{0%{opacity:0;transform:translateY(var(--sharing-enter-y))}to{opacity:1;transform:translateY(0)}}@keyframes _sharing-exit_ijf6m_1{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(var(--sharing-exit-y))}}@media (prefers-reduced-motion:reduce){._Dialog_ijf6m_67[data-state],._ModalHost_ijf6m_1 ._FrameHost_ijf6m_34>._Frame_ijf6m_34,._ModalHost_ijf6m_1 ._FrameHost_ijf6m_34>._Glass_ijf6m_66{animation:none}._FrameHost_ijf6m_34{transition:none}}._Avatar_1qach_1{--avatar-radius:50%;--avatar-font-size-scaling:.4;--avatar-overflow-font-size-scaling-one:.4;--avatar-overflow-font-size-scaling-two:.32;--avatar-overflow-font-size-scaling-three:.28;--avatar-image-border-color:var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f);--font-weight-semibold:600;width:var(--avatar-size);height:var(--avatar-size);border-radius:var(--avatar-radius);transition:background-color .3s var(--cubic-enter);-webkit-user-select:none;user-select:none;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;display:inline-flex;position:relative;overflow:hidden}._Avatar_1qach_1[type=button]{cursor:pointer}._Avatar_1qach_1[type=button]:focus-visible{outline:2px solid var(--avatar-ring-color);outline-offset:2px}._Avatar_1qach_1{color:var(--lightningcss-light,#5d5d5d)var(--lightningcss-dark,#d1d1d1);background-color:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}._AvatarImageContainer_1qach_47{border-radius:inherit}._AvatarImageContainer_1qach_47:after{border:1px solid var(--avatar-image-border-color);border-radius:inherit;content:\"\";pointer-events:none;display:block;position:absolute;inset:0}._AvatarImage_1qach_47{border-radius:inherit;object-fit:cover;opacity:0;pointer-events:none;width:100%;height:100%;transition:all .15s;position:absolute;top:0;left:0}._AvatarImage_1qach_47[data-loaded]{opacity:1}._AvatarInitial_1qach_79{font-size:calc(var(--avatar-size) * var(--avatar-font-size-scaling));font-weight:var(--font-weight-semibold)}._AvatarInitial_1qach_79[data-letter-count=\"2\"]{font-size:calc(var(--avatar-size) * var(--avatar-font-size-scaling) * .75)}._AvatarOverflowCount_1qach_90{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-three));font-weight:var(--font-weight-semibold)}._AvatarOverflowCount_1qach_90[data-letter-count=\"2\"]{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-two))}._AvatarOverflowCount_1qach_90[data-letter-count=\"1\"]{font-size:calc(var(--avatar-size) * var(--avatar-overflow-font-size-scaling-one))}._AvatarOverflowCountSymbol_1qach_113{top:calc(-1 * var(--avatar-size) / 24);margin-left:-1px;position:relative}._AvatarIcon_1qach_119{font-size:calc(var(--avatar-size) * .7);flex-grow:0;flex-shrink:0;display:block}._Trigger_168v9_3{color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);border-radius:8px;gap:8px;max-width:100%;font-size:14px}._Trigger_168v9_3[data-pill]{border-radius:9999px}._Trigger_168v9_3[data-variant],._Action_168v9_14[data-variant]{--button-background-color-active:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e)}._Trigger_168v9_3:before{background:0 0}._Trigger_168v9_3[aria-busy=true]{opacity:1;cursor:wait}._Trigger_168v9_3:not(:disabled):hover:before,._Trigger_168v9_3[data-state=open]:before{background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}._Trigger_168v9_3 ._Chevron_168v9_31{color:var(--lightningcss-light,#777)var(--lightningcss-dark,#aaa);flex-shrink:0;width:14px;height:14px}._Label_168v9_37{text-overflow:ellipsis;overflow:hidden}._Thumbnail_168v9_41{background:0 0;border-radius:8px;flex-shrink:0;justify-content:center;align-items:center;width:28px;height:28px;display:inline-flex}._Thumbnail_168v9_41 svg{width:20px;height:20px}._MenuList_168v9_55{pointer-events:auto;box-sizing:border-box;min-width:min(220px,100vw - 24px);width:var(--select-menu-width,max-content);max-width:min(280px,100vw - 24px);max-height:var(--radix-popover-content-available-height);color:var(--lightningcss-light,#171717)var(--lightningcss-dark,#f3f3f3);transform-origin:var(--radix-popover-content-transform-origin);-webkit-user-select:none;user-select:none;z-index:1;background:var(--lightningcss-light,#fff)var(--lightningcss-dark,#292929);border-radius:14px;font:14px/20px ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;animation:.18s cubic-bezier(.19,1,.22,1) _enter_168v9_1;overflow:auto;box-shadow:0 8px 28px #00000029,0 0 0 1px var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f)}._MenuList_168v9_55:focus,._OptionsList_168v9_81:focus{outline:none}._OptionsList_168v9_81{padding:6px}._Option_168v9_81{cursor:pointer;overflow-wrap:anywhere;padding:10px;scroll-margin:15px 0;position:relative}._Option_168v9_81:before{content:\"\";opacity:0;background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);border-radius:8px;display:block;position:absolute;inset:0;transform:scale(.98)}._Option_168v9_81[data-highlight]:before{opacity:1;transform:scale(1)}._Option_168v9_81[data-highlight]:active:before{transform:scale(.98)}._Option_168v9_81[data-disabled]{cursor:not-allowed}._Option_168v9_81[data-disabled] ._OptionText_168v9_115>:first-child,._Option_168v9_81[data-disabled] ._OptionInner_168v9_116>svg,._Option_168v9_81[data-disabled] ._OptionIndicatorSlot_168v9_117{opacity:.5}._Option_168v9_81[data-disabled]:before{display:none}._Option_168v9_81[aria-busy=true]{cursor:wait;opacity:1}._Option_168v9_81[aria-busy=true]:before{display:block}._OptionInner_168v9_116{align-items:center;gap:10px;display:flex;position:relative}._OptionInner_168v9_116>svg{flex-shrink:0;width:20px;height:20px}._OptionText_168v9_115{flex-direction:column;flex:1;min-width:0;display:flex}._Description_168v9_147{white-space:normal;color:var(--lightningcss-light,#6e6e6e)var(--lightningcss-dark,#aaa);font-size:12px;font-weight:400;line-height:18px}._OptionIndicatorSlot_168v9_117{flex-shrink:0;width:16px;height:16px;margin-inline-start:auto;display:flex}._OptionIndicatorSlot_168v9_117 svg{width:16px;height:16px}._ActionsContainer_168v9_165{border-top:1px solid var(--lightningcss-light,#eee)var(--lightningcss-dark,#444);padding:6px}._Action_168v9_14{color:var(--lightningcss-light,#b42318)var(--lightningcss-dark,#ff8583);border-radius:8px;width:100%;font-size:14px}._Action_168v9_14>span{justify-content:flex-start}._Action_168v9_14:before{transition-property:transform}._ActionIndicator_168v9_181{color:var(--lightningcss-light,#6e6e6e)var(--lightningcss-dark,#aaa);margin-inline-start:auto}._Action_168v9_14:not(:disabled):hover:before{background:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f)}@keyframes _enter_168v9_1{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@media (prefers-reduced-motion:reduce){._MenuList_168v9_55{animation:none}}._Container_kb33f_2{--tag-input-padding-inline-start:var(--tag-input-tag-spacing);--tag-input-padding-inline-end:var(--tag-input-tag-spacing);min-height:calc((var(--min-rows) * var(--tag-input-height)) + ((var(--min-rows) + 1) * var(--tag-input-tag-spacing)));padding:var(--tag-input-tag-spacing) var(--tag-input-padding-inline-end) var(--tag-input-tag-spacing) var(--tag-input-padding-inline-start);cursor:text;border-radius:8px;outline:0;transition:box-shadow .15s;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px var(--lightningcss-light,#0d0d0d29)var(--lightningcss-dark,#ffffff40)}._Container_kb33f_2[data-disabled]{pointer-events:none}@media (hover:hover){._Container_kb33f_2:not([data-disabled]):hover{box-shadow:inset 0 0 0 1px var(--lightningcss-light,#afafaf)var(--lightningcss-dark,#5d5d5d)}}._Container_kb33f_2:not([data-disabled])[data-focused]{box-shadow:inset 0 0 0 1px var(--lightningcss-light,#0d0d0d80)var(--lightningcss-dark,#ffffff80)}._Container_kb33f_2[data-empty]:not([data-has-start-adornment]){--tag-input-padding-inline-start:12px}._Container_kb33f_2[data-empty]:not([data-has-end-adornment]){--tag-input-padding-inline-end:12px}._Container_kb33f_2:where([data-size=md]){--tag-input-font-size:14px;--tag-input-height:20px;--tag-input-tag-spacing:6px}._Container_kb33f_2:where([data-size=lg]){--tag-input-font-size:14px;--tag-input-height:24px;--tag-input-tag-spacing:6px}._Container_kb33f_2:where([data-size=xl]){--tag-input-font-size:16px;--tag-input-height:24px;--tag-input-tag-spacing:8px}._Container_kb33f_2:where([data-size=\"2xl\"]){--tag-input-font-size:16px;--tag-input-height:28px;--tag-input-tag-spacing:8px}._Container_kb33f_2:where([data-size=\"3xl\"]){--tag-input-font-size:16px;--tag-input-height:32px;--tag-input-tag-spacing:8px}._TagInput_kb33f_89{margin-bottom:calc(var(--tag-input-tag-spacing) * -1);font-size:0;line-height:0;display:flow-root}._StartAdornment_kb33f_96,._EndAdornment_kb33f_97{min-width:var(--tag-input-height);max-width:calc(100% - var(--tag-input-tag-spacing));height:var(--tag-input-height);color:#8f8f8f;font-size:var(--tag-input-font-size);justify-content:center;align-items:center;line-height:1;display:inline-flex}:is(._StartAdornment_kb33f_96,._EndAdornment_kb33f_97)>*{max-width:100%}._StartAdornment_kb33f_96{margin-right:var(--tag-input-tag-spacing);margin-bottom:var(--tag-input-tag-spacing);vertical-align:top}._EndAdornment_kb33f_97{margin-bottom:var(--tag-input-tag-spacing);margin-left:var(--tag-input-tag-spacing);float:right}._Tag_kb33f_89{max-width:100%;height:var(--tag-input-height);margin-right:var(--tag-input-tag-spacing);margin-bottom:var(--tag-input-tag-spacing);color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#fff);cursor:pointer;background-color:var(--lightningcss-light,#0000000f)var(--lightningcss-dark,#ffffff1f);border-radius:8px;outline:none;align-items:center;padding:4px 4px 4px 8px;line-height:1.4;transition:background-color .15s;display:inline-flex;overflow:hidden;box-shadow:inset 0 0 0 1px var(--lightningcss-light,#00000014)var(--lightningcss-dark,#ffffff1f)}@media (hover:hover){._Tag_kb33f_89:hover{background-color:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e)}}._Tag_kb33f_89:focus{background-color:var(--lightningcss-light,#0000001a)var(--lightningcss-dark,#ffffff2e)}._Container_kb33f_2[data-disabled] ._Tag_kb33f_89{color:#8f8f8f}._Tag_kb33f_89[data-invalid]{color:var(--lightningcss-light,#ba2623)var(--lightningcss-dark,#fa423e);background-color:#ffd9d9}@media (hover:hover){._Tag_kb33f_89[data-invalid]:hover{background-color:#ffc6c5}}._Tag_kb33f_89[data-invalid]:focus{background-color:#ffc6c5}._Tag_kb33f_89[data-duplicate]{animation:.5s _shake_kb33f_1}._Tag_kb33f_89 ._TagRemove_kb33f_177{appearance:none;font:inherit;cursor:pointer;background:0 0;border:0;padding:0}._Tag_kb33f_89 ._TagRemove_kb33f_177:focus-visible{outline-offset:2px;outline:2px solid}._Tag_kb33f_89 ._TagRemove_kb33f_177{color:inherit;opacity:.7;align-items:center;margin-left:4px;transition:opacity .15s;display:flex;position:relative}@media (hover:hover){._Tag_kb33f_89 ._TagRemove_kb33f_177:hover{opacity:1}}._TagContent_kb33f_205{white-space:nowrap;align-items:center;min-width:0;max-width:100%;line-height:1;display:flex;overflow:hidden}._TagValue_kb33f_215{min-width:0;max-width:100%;font-size:var(--tag-input-font-size);text-overflow:ellipsis;white-space:nowrap;line-height:normal;display:block;overflow:hidden}._TagValue_kb33f_215>*{vertical-align:top}._InputContainer_kb33f_230{max-width:100%;margin-bottom:var(--tag-input-tag-spacing);vertical-align:top;align-items:center;display:inline-flex}._InputWrapper_kb33f_238{width:100%;overflow:hidden}._InputMeasure_kb33f_243{font-size:var(--tag-input-font-size);visibility:hidden;white-space:nowrap;position:absolute}._Input_kb33f_230{min-width:20px;height:var(--tag-input-height);box-shadow:none;color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc);font-family:inherit;font-size:var(--tag-input-font-size);white-space:nowrap;background:0 0;border:0;border-radius:0;padding:0;line-height:1.4;display:block}._Input_kb33f_230:focus{outline:0}._Input_kb33f_230::-webkit-search-cancel-button{appearance:none}._Input_kb33f_230::placeholder,._Input_kb33f_230:disabled{color:#8f8f8f}._Input_kb33f_230:-webkit-any(:-webkit-autofill,:-webkit-autofill){color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc)!important;-webkit-text-fill-color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc)!important;transition:background-color 0s 50000s,box-shadow 0s 50000s,filter 0s 50000s!important}._Input_kb33f_230:is(:autofill,:autofill){color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc)!important;-webkit-text-fill-color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc)!important;transition:background-color 0s 50000s,box-shadow 0s 50000s,filter 0s 50000s!important}._Limit_kb33f_296{color:var(--lightningcss-light,#282828)var(--lightningcss-dark,#dcdcdc);font-variant-numeric:tabular-nums;width:100%;margin-top:2px;font-size:12px}._Limit_kb33f_296>span{margin-inline:1px}._Limit_kb33f_296{text-align:right}@keyframes _shake_kb33f_1{0%{transform:translate(0)}20%,60%{transform:translate(-5px)}40%,80%{transform:translate(5px)}to{transform:translate(0)}}._Container_244h6_2{--switch-track-width:32px;--switch-track-height:19px;--switch-track-color:var(--lightningcss-light,#dfdfdf)var(--lightningcss-dark,#414141);--switch-track-color-hover:var(--lightningcss-light,#cdcdcd)var(--lightningcss-dark,#4f4f4f);--switch-track-color-checked:var(--lightningcss-light,#181818)var(--lightningcss-dark,#0285ff);--switch-track-color-checked-disabled:var(--lightningcss-light,#afafaf)var(--lightningcss-dark,#003f7a);--switch-track-color-disabled:var(--lightningcss-light,#ededed)var(--lightningcss-dark,#303030);--switch-thumb-offset:3px;--switch-thumb-size:calc(var(--switch-track-height) - 2 * var(--switch-thumb-offset));--switch-thumb-shadow:0 1px 2px #0003;--switch-thumb-color:#fff;--switch-thumb-color-disabled:var(--lightningcss-light,#fff)var(--lightningcss-dark,#cdcdcd);--switch-label-gap:8px;-webkit-user-select:none;user-select:none;font-size:14px;line-height:20px;display:flex;position:relative}._Container_244h6_2[data-has-label]{align-items:flex-start}._Container_244h6_2[data-label-position=start]{flex-direction:row-reverse}._Track_244h6_34{width:var(--switch-track-width);max-width:var(--switch-track-width);height:var(--switch-track-height);background:var(--switch-track-color);cursor:pointer;border:0;border-radius:9999px;flex-shrink:0;padding:0;transition:background-color .25s cubic-bezier(.65,0,.35,1);position:relative}@media (hover:hover){._Track_244h6_34:where(:not([data-disabled],[data-state=checked])):hover{background:var(--switch-track-color-hover)}}[data-has-label] ._Track_244h6_34{top:var(--switch-track-top-offset,1px)}._Track_244h6_34:focus-visible{outline-offset:2px;outline:2px solid var(--lightningcss-light,#0169cc)var(--lightningcss-dark,#0285ff)}._Track_244h6_34[data-state=checked]{background:var(--switch-track-color-checked)}._Track_244h6_34[data-disabled],._Track_244h6_34[aria-disabled=true]{background:var(--switch-track-color-disabled);cursor:not-allowed}:is(._Track_244h6_34[data-disabled],._Track_244h6_34[aria-disabled=true])[data-state=checked]{background:var(--switch-track-color-checked-disabled)}._Thumb_244h6_82{top:var(--switch-thumb-offset);left:var(--switch-thumb-offset);width:var(--switch-thumb-size);height:var(--switch-thumb-size);background:var(--switch-thumb-color);box-shadow:var(--switch-thumb-shadow);border-radius:9999px;transition:transform .25s cubic-bezier(.65,0,.35,1);display:block;position:absolute}[data-state=checked] ._Thumb_244h6_82{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - var(--switch-thumb-offset) * 2))}._Thumb_244h6_82[data-disabled]{background:var(--switch-thumb-color-disabled);box-shadow:none}._Label_244h6_109{cursor:pointer}[data-label-position=end] ._Label_244h6_109{padding-left:var(--switch-label-gap)}[data-label-position=start] ._Label_244h6_109{padding-right:var(--switch-label-gap)}[data-disabled] ._Label_244h6_109{cursor:not-allowed}\n/*$vite$:1*/";
      const _ = document.createElement("div");
      _.className = Pt.Theme;
      const S = document.createElement("div");
      S.className = ze(Pt.Theme, Pt.Portal), S.lang = h, S.dir = ai(h), m.append(g, p, _, S);
      const T = await F8(h);
      if (l.isConnected) {
        if (!r.isolatedDocument && typeof l.showPopover == "function") {
          l.popover = "manual";
          try {
            l.showPopover(), l.matches(":popover-open") || l.removeAttribute("popover");
          } catch {
            l.removeAttribute("popover");
          }
        }
        await new Promise((x, C) => {
          u = (0, V8.createRoot)(_, { onUncaughtError: C }), u.render(/* @__PURE__ */ (0, y.jsx)(JS, {
            locale: h,
            defaultLocale: Go,
            messages: T,
            onError: (A) => {
              if (A.code !== "MISSING_TRANSLATION") throw A;
            },
            children: /* @__PURE__ */ (0, y.jsxs)(Rb, {
              container: S,
              children: [a({
                shadowHost: l,
                onDismiss: d
              }), /* @__PURE__ */ (0, y.jsx)(X8, { onMount: x })]
            })
          }));
        });
      }
    })(),
    dispose: d
  };
}
var q8 = jn({
  type: qd("sites-toolbar-summary"),
  label: Zt().min(1).max(256),
  icon: Qa([
    "lock",
    "globe",
    "people",
    "building"
  ])
}).strict(), Y8 = jn({
  type: Qa(["sites-toolbar-open-sharing", "sites-toolbar-close-sharing"]),
  placement: Qa(["top", "bottom"]).optional()
}).strict(), W8 = jn({ type: qd("sites-toolbar-sharing-closed") }).strict(), Q8 = jn({
  type: qd("sites-toolbar-sharing-size"),
  height: W1().finite().positive().max(1e4)
}).strict();
function Kb(e, a, r) {
  return a !== null && e.source === a && e.origin === r;
}
var K8 = "_ModalHost_ijf6m_1", J8 = "_FrameHost_ijf6m_34", eO = "_Glass_ijf6m_66", tO = "_Dialog_ijf6m_67", nO = "_Frame_ijf6m_34", aO = "_Root_ijf6m_104", iO = "_Body_ijf6m_149", rO = "_Header_ijf6m_154", oO = "_AccessList_ijf6m_160", lO = "_AccessListContent_ijf6m_181", uO = "_Title_ijf6m_184", sO = "_Section_ijf6m_194", cO = "_Results_ijf6m_199", fO = "_Result_ijf6m_199", dO = "_Person_ijf6m_243", hO = "_GroupAvatar_ijf6m_249", mO = "_Identity_ijf6m_258", vO = "_Secondary_ijf6m_265", pO = "_Role_ijf6m_269", gO = "_RoleMenu_ijf6m_278", yO = "_AccessMode_ijf6m_283", bO = "_AccessModeLabel_ijf6m_291", _O = "_AccessModeIcon_ijf6m_298", wO = "_ReadOnlyRole_ijf6m_311", SO = "_Footer_ijf6m_315", EO = "_Advanced_ijf6m_322", TO = "_AdvancedHeader_ijf6m_325", CO = "_AdvancedFooter_ijf6m_328", AO = "_InviteRole_ijf6m_332", xO = "_RemixSetting_ijf6m_342", OO = "_RemixInfo_ijf6m_348", MO = "_RemixExplanation_ijf6m_357", RO = "_RemixSwitch_ijf6m_362", NO = "_Copy_ijf6m_369", DO = "_Notice_ijf6m_392", zO = "_SearchHint_ijf6m_397", LO = "_SearchLoading_ijf6m_401", HO = "_EmptyResults_ijf6m_407", de = {
  ModalHost: K8,
  FrameHost: J8,
  Glass: eO,
  Dialog: tO,
  Frame: nO,
  "sharing-exit": "_sharing-exit_ijf6m_1",
  "sharing-enter": "_sharing-enter_ijf6m_1",
  Root: aO,
  "sharing-retain": "_sharing-retain_ijf6m_1",
  Body: iO,
  Header: rO,
  AccessList: oO,
  AccessListContent: lO,
  Title: uO,
  Section: sO,
  Results: cO,
  Result: fO,
  Person: dO,
  GroupAvatar: hO,
  Identity: mO,
  Secondary: vO,
  Role: pO,
  RoleMenu: gO,
  AccessMode: yO,
  AccessModeLabel: bO,
  AccessModeIcon: _O,
  ReadOnlyRole: wO,
  Footer: SO,
  Advanced: EO,
  AdvancedHeader: TO,
  AdvancedFooter: CO,
  InviteRole: AO,
  RemixSetting: xO,
  RemixInfo: OO,
  RemixExplanation: MO,
  RemixSwitch: RO,
  Copy: NO,
  Error: "_Error_ijf6m_386",
  Notice: DO,
  SearchHint: zO,
  SearchLoading: LO,
  EmptyResults: HO
};
function jO({ context: e, store: a, siteTitle: r }) {
  const l = Xe(), u = (0, b.useRef)(null), c = (0, b.useRef)(null), d = (0, b.useRef)(null), { sharingOpen: h, placement: m, summary: g, config: p, actions: _ } = es(a), [S, T] = (0, b.useState)(null), [x, C] = (0, b.useState)(null), A = new URL("/", e.toolbarOrigin);
  A.searchParams.set("site_origin", window.location.origin), A.hash = new URLSearchParams({
    account_id: e.accountId ?? "",
    locale: e.locale
  }).toString();
  const M = (0, b.useCallback)(() => {
    u.current?.contentWindow?.postMessage({ type: "sites-toolbar-close-sharing" }, e.toolbarOrigin), _.closeSharing();
  }, [e.toolbarOrigin, _]);
  (0, b.useLayoutEffect)(() => {
    const D = c.current;
    if (D) {
      if (h)
        D.close(), D.showModal(), u.current?.focus();
      else if (D.matches(":modal")) {
        D.close(), D.show();
        const R = requestAnimationFrame(() => {
          (d.current?.isConnected ? d.current : D.querySelector("[data-toolbar-sharing-trigger]"))?.focus({ preventScroll: !0 });
        });
        return () => cancelAnimationFrame(R);
      }
    }
  }, [h]), (0, b.useLayoutEffect)(() => {
    if (!h) return;
    const D = c.current, R = u.current?.parentElement;
    if (!D || !R) return;
    let B = null;
    const H = () => {
      const F = D.querySelector("[data-toolbar-sharing-close]");
      if (!F) return;
      const U = F.closest("[data-corner]") ?? F;
      U !== B && (B && q.unobserve(B), B = U, q.observe(B), ee.observe(B, {
        attributes: !0,
        attributeFilter: ["style", "data-corner"]
      }));
      const Y = F.getBoundingClientRect(), oe = B.dataset.corner, ue = BO(oe, Y, R.offsetWidth);
      R.style.left = `${Math.max(4, Math.min(ue, window.innerWidth - R.offsetWidth - 4))}px`, R.style.right = "auto", R.style.top = m === "top" ? `${Y.bottom}px` : "auto", R.style.bottom = m === "bottom" ? `${window.innerHeight - Y.top}px` : "auto";
      const re = window.visualViewport, V = re?.offsetTop ?? 0, P = V + (re?.height ?? window.innerHeight), E = m === "top" ? P - Y.bottom : Y.top - V;
      R.style.height = `${Math.max(0, E - 4)}px`;
    }, q = new ResizeObserver(H);
    q.observe(R);
    const ee = new MutationObserver(H);
    return ee.observe(D, {
      childList: !0,
      subtree: !0
    }), window.addEventListener("resize", H), window.visualViewport?.addEventListener("resize", H), window.visualViewport?.addEventListener("scroll", H), H(), () => {
      q.disconnect(), ee.disconnect(), window.removeEventListener("resize", H), window.visualViewport?.removeEventListener("resize", H), window.visualViewport?.removeEventListener("scroll", H);
    };
  }, [h, m]), (0, b.useEffect)(() => {
    const D = (R) => {
      if (!Kb(R, u.current?.contentWindow ?? null, e.toolbarOrigin)) return;
      const B = q8.safeParse(R.data);
      if (B.success) _.setSummary(B.data);
      else if (W8.safeParse(R.data).success) M();
      else {
        const H = Q8.safeParse(R.data);
        H.success && C(H.data.height);
      }
    };
    return window.addEventListener("message", D), () => window.removeEventListener("message", D);
  }, [
    e.toolbarOrigin,
    M,
    _
  ]);
  const N = (D) => {
    d.current = D;
    const R = D?.getBoundingClientRect(), B = R && R.top + R.height / 2 < window.innerHeight / 2 ? "top" : "bottom";
    _.openSharing(B), u.current?.contentWindow?.postMessage({
      type: "sites-toolbar-open-sharing",
      placement: B
    }, e.toolbarOrigin);
  };
  return /* @__PURE__ */ (0, y.jsxs)("dialog", {
    open: !0,
    ref: c,
    className: de.ModalHost,
    "data-sharing-open": h ? "" : void 0,
    role: h ? "dialog" : "presentation",
    "aria-label": h ? l.formatMessage(ie.share) : void 0,
    onCancel: (D) => {
      D.preventDefault(), M();
    },
    onClick: (D) => {
      D.target === D.currentTarget && h && M();
    },
    children: [
      p && g && S && /* @__PURE__ */ (0, y.jsx)(Rb, {
        container: S,
        children: /* @__PURE__ */ (0, y.jsx)(Qb, {
          accountId: e.accountId,
          chatgptOrigin: e.chatgptOrigin,
          projectId: e.projectId,
          siteTitle: r,
          config: p,
          toolbar: {
            currentUserRole: e.currentUserRole ?? "owner",
            remixEnabled: p.remix_enabled !== !1,
            summary: g,
            openSharing: N,
            sharingOpen: h,
            closeSharing: M,
            settingsUrl: zx(e)?.toString(),
            remixUrl: bs({
              accountId: e.accountId,
              chatgptOrigin: e.chatgptOrigin,
              query: l.formatMessage(ie.remixPrompt, { site: Ur(r, e.projectId) })
            }).toString()
          }
        })
      }),
      /* @__PURE__ */ (0, y.jsx)("div", { ref: T }),
      /* @__PURE__ */ (0, y.jsxs)("div", {
        className: de.FrameHost,
        "data-placement": m,
        "data-panel-ready": x !== null ? "" : void 0,
        inert: !h,
        "aria-hidden": !h,
        children: [x !== null && /* @__PURE__ */ (0, y.jsx)("div", {
          className: de.Glass,
          "aria-hidden": "true",
          style: { height: x }
        }), /* @__PURE__ */ (0, y.jsx)("iframe", {
          ref: u,
          title: l.formatMessage(ie.share),
          src: A.toString(),
          className: de.Frame,
          allow: "clipboard-write",
          referrerPolicy: "no-referrer",
          sandbox: "allow-scripts allow-same-origin"
        })]
      })
    ]
  });
}
function BO(e, a, r) {
  return e?.endsWith("left") ? a.left - 12 : e?.endsWith("center") ? (a.left + a.right - r) / 2 : a.right + 12 - r;
}
function UO() {
  return Pd()((e) => ({
    sharingOpen: !1,
    placement: "bottom",
    summary: null,
    config: null,
    actions: {
      openSharing: (a) => e({
        sharingOpen: !0,
        placement: a
      }),
      closeSharing: () => e({ sharingOpen: !1 }),
      setSummary: (a) => e({ summary: a }),
      setConfig: (a) => e({ config: a })
    }
  }));
}
var Dd = jn({
  account_user_id: Zt(),
  name: Zt().nullable().optional(),
  email: Zt().nullable().optional(),
  avatar_url: Zt().nullable().optional(),
  role: Qa([
    "owner",
    "editor",
    "viewer"
  ]).nullable().optional(),
  is_external: Ln().nullable().optional()
}), zd = jn({
  id: Zt(),
  name: Zt(),
  size: W1(),
  role: Qa(["viewer", "editor"]).nullable().optional()
}), Pg = jn({
  project_id: Zt(),
  title: Zt(),
  url: Zt().nullable(),
  workspace_name: Zt().nullable().optional(),
  available_access_modes: Yn(Qa([
    "custom",
    "workspace_all",
    "public"
  ])).nullable(),
  can_invite_external_visitors: Ln(),
  can_manage_editors: Ln(),
  can_manage_access: Ln().default(!0),
  has_private_tunnels: Ln(),
  remix_enabled: Ln().nullish(),
  access_policy: jn({
    access_mode: Qa([
      "custom",
      "workspace_all",
      "public",
      "admins_only"
    ]),
    allowed_users: Yn(Dd),
    allowed_editors: Yn(Dd).default([]),
    allowed_groups: Yn(zd),
    allowed_workspace_group_ids: Yn(Zt()),
    allowed_tenant_group_ids: Yn(Zt())
  }).nullable()
}), kO = jn({
  users: Yn(Dd),
  workspace_groups: Yn(zd),
  tenant_groups: Yn(zd),
  has_more_users: Ln(),
  has_more_groups: Ln()
});
function PO(e, a) {
  async function r(l, u, c) {
    const d = await fetch(new URL(`/_internal/sites_widget/${l}`, e), {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      redirect: "error",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(u),
      signal: c ? AbortSignal.any([c, AbortSignal.timeout(15e3)]) : AbortSignal.timeout(15e3)
    });
    if (!d.ok)
      throw await d.body?.cancel(), new Error("Toolbar request failed");
    return d;
  }
  return {
    logInteraction(l) {
      _t(l, e);
    },
    async load() {
      return await (await r("auth/session", {})).body?.cancel(), Pg.parse(await (await r("access", {})).json());
    },
    async save(l) {
      return await a(), Pg.parse(await (await r("access/save", l)).json());
    },
    async search(l, u) {
      return kO.parse(await (await r("access/search", {
        query: l,
        limit: 20,
        offset: 0
      }, u)).json());
    }
  };
}
function _s(e) {
  const a = e.access_policy;
  if (!a) return [];
  const r = new Map(a.allowed_users.map((l) => [l.account_user_id, l]));
  for (const l of a.allowed_editors) r.get(l.account_user_id)?.role !== "owner" && r.set(l.account_user_id, {
    ...l,
    role: "editor"
  });
  return [...r.values()].sort((l, u) => +(u.role === "owner") - +(l.role === "owner"));
}
function Zg(e, a) {
  if (e.role === "owner") throw new Error("Cannot change Site ownership");
  if (e.is_external) {
    if (a === "editor") throw new Error("External visitors cannot edit");
    if (a === "viewer") return {};
    if (!e.email) throw new Error("Incomplete sharing recipients");
    return { viewer_changes: { remove_external_visitor_emails: [e.email] } };
  }
  const r = e.account_user_id, l = { viewer_changes: { remove_viewer_account_user_ids: [r] } };
  return a === "viewer" && (l.viewer_changes = { add_viewer_account_user_ids: [r] }), a === "editor" ? l.editor_changes = { add_editor_account_user_ids: [r] } : e.role === "editor" && (l.editor_changes = { remove_editor_account_user_ids: [r] }), l;
}
var ZO = "_Avatar_1qach_1", IO = "_AvatarImageContainer_1qach_47", GO = "_AvatarImage_1qach_47", $O = "_AvatarInitial_1qach_79", VO = "_AvatarOverflowCount_1qach_90", FO = "_AvatarOverflowCountSymbol_1qach_113", XO = "_AvatarIcon_1qach_119", Hi = {
  Avatar: ZO,
  AvatarImageContainer: IO,
  AvatarImage: GO,
  AvatarInitial: $O,
  AvatarOverflowCount: VO,
  AvatarOverflowCountSymbol: FO,
  AvatarIcon: XO
}, Ju = (e) => {
  const a = YO(e.imageUrl);
  return /* @__PURE__ */ (0, y.jsx)(qO, {
    ...e,
    imageUrl: a
  });
}, qO = (e) => {
  const { className: a, size: r, overflowCount: l, name: u, initials: c = "first", color: d = "secondary", variant: h = "soft", imageUrl: m, Icon: g, tooltipComponent: p, ..._ } = e, [S, T] = (0, b.useState)(), x = (0, b.useRef)(m);
  (0, b.useEffect)(() => {
    m !== x.current && ((S === "error" || !m) && T(void 0), x.current = m);
  }, [m, S]);
  const C = !!(_.onPointerDown || _.onClick), A = /* @__PURE__ */ (0, y.jsx)(C ? "button" : "span", {
    className: ze(Hi.Avatar, a),
    style: { "--avatar-size": `${r ?? 40}px` },
    role: C ? void 0 : "presentation",
    "data-color": d,
    "data-variant": h,
    type: C ? "button" : void 0,
    ..._,
    children: m && S !== "error" ? /* @__PURE__ */ (0, y.jsx)(WO, {
      status: S,
      url: m,
      onError: () => T("error"),
      onLoad: () => T("loaded")
    }) : g ? /* @__PURE__ */ (0, y.jsx)(g, { className: Hi.AvatarIcon }) : l ? /* @__PURE__ */ (0, y.jsx)(KO, { count: l }) : /* @__PURE__ */ (0, y.jsx)(QO, {
      name: u,
      initials: c
    })
  });
  return !u || !p ? A : /* @__PURE__ */ (0, y.jsx)(p, {
    content: u,
    children: A
  });
}, YO = (e) => {
  if (e?.startsWith("https://") && !(e.includes("gravatar.com") && e.includes("cdn.auth0.com")))
    return e;
}, WO = ({ url: e, status: a, onLoad: r, onError: l }) => /* @__PURE__ */ (0, y.jsx)("span", {
  className: Hi.AvatarImageContainer,
  children: /* @__PURE__ */ (0, y.jsx)("img", {
    src: e,
    referrerPolicy: "no-referrer",
    className: Hi.AvatarImage,
    "data-loaded": a === "loaded" ? "" : void 0,
    onLoad: r,
    onError: l,
    alt: "",
    role: "presentation"
  })
}), QO = ({ name: e = "", initials: a }) => {
  const r = (0, b.useMemo)(() => {
    if (a === "firstlast") {
      const l = e.trim().split(/\s+/);
      return ([...l[0].toUpperCase()][0] ?? "") + (l.length > 1 ? [...l[l.length - 1].toUpperCase()][0] : "");
    } else
      return e.charAt(0).toUpperCase();
  }, [e, a]);
  return /* @__PURE__ */ (0, y.jsx)("span", {
    className: Hi.AvatarInitial,
    "data-letter-count": a === "firstlast" ? [...r].length : void 0,
    children: r
  });
}, KO = ({ count: e }) => {
  const a = (0, b.useMemo)(() => new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 0
  }).format(e).toLocaleLowerCase(), [e]);
  return /* @__PURE__ */ (0, y.jsxs)("span", {
    className: Hi.AvatarOverflowCount,
    "data-letter-count": a.length,
    children: [/* @__PURE__ */ (0, y.jsx)("span", {
      className: Hi.AvatarOverflowCountSymbol,
      children: "+"
    }), a]
  });
}, Jb = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.647 6.82-10.003a1 1 0 0 1 1.39-.263Z",
    clipRule: "evenodd"
  })
}), JO = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    fillRule: "evenodd",
    d: "M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z",
    clipRule: "evenodd"
  })
}), eM = "_Trigger_168v9_3", tM = "_Action_168v9_14", nM = "_Chevron_168v9_31", aM = "_Label_168v9_37", iM = "_Thumbnail_168v9_41", rM = "_MenuList_168v9_55", oM = "_enter_168v9_1", lM = "_OptionsList_168v9_81", uM = "_Option_168v9_81", sM = "_OptionText_168v9_115", cM = "_OptionInner_168v9_116", fM = "_OptionIndicatorSlot_168v9_117", dM = "_Description_168v9_147", hM = "_ActionsContainer_168v9_165", mM = "_ActionIndicator_168v9_181", Yt = {
  Trigger: eM,
  Action: tM,
  Chevron: nM,
  Label: aM,
  Thumbnail: iM,
  MenuList: rM,
  enter: oM,
  OptionsList: lM,
  Option: uM,
  OptionText: sM,
  OptionInner: cM,
  OptionIndicatorSlot: fM,
  Description: dM,
  ActionsContainer: hM,
  ActionIndicator: mM
};
function Zu({ value: e, options: a, onChange: r, disabled: l, loading: u = !1, className: c, menuClassName: d, align: h = "start", pill: m = !0, action: g, ...p }) {
  const [_, S] = (0, b.useState)(!1), [T, x] = (0, b.useState)(null), C = (0, b.useRef)(!1), A = u || T !== null, [M, N] = (0, b.useState)(e), D = (0, b.useRef)(null), R = (0, b.useRef)(null), B = rl(), H = (0, b.useId)(), q = (0, b.useRef)({
    text: "",
    time: 0
  }), ee = T?.previousValue ?? e, F = a.find((E) => E.value === ee), U = a.filter((E) => !E.disabled), Y = (E) => `${H}-${encodeURIComponent(E)}`, oe = (E) => {
    A || C.current || l && E || (E && (N(U.find((I) => I.value === e)?.value ?? U[0]?.value ?? e), q.current = {
      text: "",
      time: 0
    }), S(E));
  }, ue = async (E, I) => {
    if (l || A || C.current) return;
    const ae = performance.now();
    C.current = !0;
    try {
      const le = I();
      if (!le || typeof le.then != "function") {
        C.current = !1, S(!1);
        return;
      }
      x({
        ...E,
        previousValue: e
      }), await le;
    } finally {
      const le = 400 - (performance.now() - ae);
      C.current && le > 0 && await new Promise((Ee) => window.setTimeout(Ee, le)), C.current = !1, x(null), S(!1);
    }
  }, re = (E) => {
    l || A || C.current || E.disabled || (N(E.value), ue({ value: E.value }, () => r(E)));
  }, V = (E) => {
    E && (N(E.value), R.current?.querySelector(`#${CSS.escape(Y(E.value))}`)?.scrollIntoView({ block: "nearest" }));
  };
  function P(E) {
    return T && "value" in T && T.value === E.value ? /* @__PURE__ */ (0, y.jsx)(Fu, { size: 16 }) : !T && E.value === e ? /* @__PURE__ */ (0, y.jsx)(Jb, {}) : null;
  }
  return /* @__PURE__ */ (0, y.jsxs)(hs, {
    open: _,
    onOpenChange: oe,
    children: [/* @__PURE__ */ (0, y.jsx)(gh, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsxs)(wt, {
        pill: m,
        ref: D,
        className: ze(Yt.Trigger, c),
        variant: "ghost",
        color: "secondary",
        disabled: l || A,
        "aria-busy": A || void 0,
        ...p,
        "aria-haspopup": "listbox",
        "aria-controls": _ ? H : void 0,
        onKeyDown: (E) => {
          (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), E.stopPropagation(), oe(!0));
        },
        children: [
          F?.icon && /* @__PURE__ */ (0, y.jsx)("span", {
            className: Yt.Thumbnail,
            children: F.icon
          }),
          /* @__PURE__ */ (0, y.jsx)("span", {
            className: Yt.Label,
            children: F?.label
          }),
          /* @__PURE__ */ (0, y.jsx)(JO, {
            className: Yt.Chevron,
            "data-no-autosize": !0
          })
        ]
      })
    }), /* @__PURE__ */ (0, y.jsx)(ms, {
      container: D.current?.closest('[role="dialog"]') ?? B,
      children: /* @__PURE__ */ (0, y.jsxs)(vs, {
        className: ze(Yt.MenuList, d),
        align: h,
        sideOffset: 5,
        collisionPadding: 12,
        onOpenAutoFocus: (E) => {
          E.preventDefault(), R.current?.focus({ preventScroll: !0 });
        },
        onEscapeKeyDown: (E) => {
          E.stopPropagation(), A && E.preventDefault();
        },
        onInteractOutside: (E) => {
          A && E.preventDefault();
        },
        children: [/* @__PURE__ */ (0, y.jsx)("div", {
          ref: R,
          id: H,
          className: Yt.OptionsList,
          role: "listbox",
          "aria-busy": A || void 0,
          "aria-disabled": l || A,
          tabIndex: 0,
          ...p,
          "aria-activedescendant": a.some((E) => E.value === M) ? Y(M) : void 0,
          onKeyDown: (E) => {
            if (l || A) {
              E.preventDefault();
              return;
            }
            const I = U.findIndex((ae) => ae.value === M);
            switch (E.key) {
              case "ArrowDown":
                E.preventDefault(), V(U[Math.min(I + 1, U.length - 1)]);
                break;
              case "ArrowUp":
                E.preventDefault(), V(U[Math.max(I - 1, 0)]);
                break;
              case "Home":
                E.preventDefault(), V(U[0]);
                break;
              case "End":
                E.preventDefault(), V(U.at(-1));
                break;
              case "Enter":
              case " ": {
                E.preventDefault();
                const ae = U.find((le) => le.value === M);
                ae && re(ae);
                break;
              }
              default: {
                if (E.key.length !== 1 || E.ctrlKey || E.metaKey || E.altKey) return;
                E.preventDefault();
                const ae = Date.now(), le = (ae - q.current.time < 500 ? q.current.text : "") + E.key.toLocaleLowerCase();
                q.current = {
                  text: le,
                  time: ae
                }, V(U.find((Ee) => Ee.label.toLocaleLowerCase().startsWith(le)));
              }
            }
          },
          children: a.map((E) => /* @__PURE__ */ (0, y.jsx)("div", {
            id: Y(E.value),
            className: Yt.Option,
            role: "option",
            "aria-selected": E.value === ee,
            "aria-busy": T !== null && "value" in T && T.value === E.value || void 0,
            "aria-disabled": l || A || E.disabled,
            "data-selected": E.value === ee ? "" : void 0,
            "data-highlight": E.value === M ? "" : void 0,
            "data-disabled": l || A || E.disabled ? "" : void 0,
            onPointerMove: () => {
              !l && !A && !E.disabled && N(E.value);
            },
            onClick: () => re(E),
            children: /* @__PURE__ */ (0, y.jsxs)("div", {
              className: Yt.OptionInner,
              children: [
                E.icon,
                /* @__PURE__ */ (0, y.jsxs)("span", {
                  className: Yt.OptionText,
                  children: [/* @__PURE__ */ (0, y.jsx)("span", { children: E.label }), E.description && /* @__PURE__ */ (0, y.jsx)("span", {
                    className: Yt.Description,
                    children: E.description
                  })]
                }),
                /* @__PURE__ */ (0, y.jsx)("span", {
                  className: Yt.OptionIndicatorSlot,
                  children: P(E)
                })
              ]
            })
          }, E.value))
        }), g && /* @__PURE__ */ (0, y.jsx)("div", {
          className: Yt.ActionsContainer,
          children: /* @__PURE__ */ (0, y.jsxs)(wt, {
            variant: "ghost",
            color: "secondary",
            className: Yt.Action,
            disabled: l || A,
            onClick: () => {
              ue({ action: !0 }, g.onSelect);
            },
            children: [g.label, T && "action" in T && /* @__PURE__ */ (0, y.jsx)(Fu, {
              className: Yt.ActionIndicator,
              size: 16
            })]
          })
        })]
      })
    })]
  });
}
var e_ = (e) => /* @__PURE__ */ (0, y.jsxs)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  ...e,
  children: [
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M8.00002 8.6543C10.0676 8.65454 11.7647 10.2413 11.9405 12.2637C11.9655 12.5524 11.7515 12.8067 11.4629 12.832C11.1741 12.8571 10.9197 12.6433 10.8946 12.3545C10.7655 10.87 9.51819 9.70532 8.00002 9.70508C6.48179 9.70522 5.23552 10.87 5.10647 12.3545C5.08139 12.6432 4.8258 12.8568 4.53713 12.832C4.24852 12.8067 4.03452 12.5524 4.05959 12.2637C4.23531 10.2412 5.93232 8.65443 8.00002 8.6543Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M3.35744 8.87598C3.64673 8.85709 3.89611 9.07594 3.91506 9.36523C3.93395 9.65452 3.7151 9.9039 3.4258 9.92285C2.27831 9.99807 1.35691 10.9051 1.25783 12.0459C1.23271 12.3345 0.978105 12.5482 0.689475 12.5234C0.400692 12.4983 0.185993 12.2438 0.210959 11.9551C0.354799 10.2988 1.6914 8.98511 3.35744 8.87598Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M12.6367 8.87598C14.3028 8.9851 15.6394 10.2988 15.7832 11.9551C15.8082 12.2439 15.5935 12.4984 15.3047 12.5234C15.0161 12.5482 14.7615 12.3345 14.7364 12.0459C14.6373 10.9051 13.7159 9.99806 12.5684 9.92285C12.2791 9.90389 12.0602 9.65451 12.0791 9.36523C12.0981 9.07595 12.3475 8.8571 12.6367 8.87598Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.67092 4.30859C3.69683 4.3089 4.52927 5.14102 4.52932 6.16699C4.52905 7.19278 3.6967 8.02509 2.67092 8.02539C1.64488 8.02539 0.812786 7.19297 0.812522 6.16699C0.812574 5.14083 1.64475 4.30859 2.67092 4.30859ZM2.67092 5.35938C2.22465 5.35938 1.86238 5.72073 1.86233 6.16699C1.86259 6.61307 2.22478 6.97559 2.67092 6.97559C3.1168 6.97528 3.47827 6.61288 3.47854 6.16699C3.47848 5.72092 3.11693 5.35968 2.67092 5.35938Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.3242 4.30859C14.3504 4.30859 15.1826 5.14083 15.1826 6.16699C15.1824 7.19297 14.3503 8.02539 13.3242 8.02539C12.2983 8.02533 11.4661 7.19293 11.4658 6.16699C11.4659 5.14087 12.2981 4.30866 13.3242 4.30859ZM13.3242 5.35938C12.878 5.35944 12.5167 5.72077 12.5166 6.16699C12.5169 6.61303 12.8782 6.97552 13.3242 6.97559C13.7704 6.97559 14.1326 6.61307 14.1328 6.16699C14.1328 5.72073 13.7705 5.35938 13.3242 5.35938Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.00002 3.2793C9.26655 3.27955 10.2938 4.30668 10.294 5.57324C10.294 6.83991 9.26663 7.86694 8.00002 7.86719C6.7333 7.86707 5.70608 6.83999 5.70608 5.57324C5.7062 4.3066 6.73338 3.27942 8.00002 3.2793ZM8.00002 4.33008C7.31328 4.3302 6.75698 4.8865 6.75686 5.57324C6.75686 6.26009 7.3132 6.81726 8.00002 6.81738C8.68673 6.81713 9.24416 6.26001 9.24416 5.57324C9.24404 4.88658 8.68665 4.33033 8.00002 4.33008Z",
      fill: "currentColor"
    })
  ]
}), vM = "_Container_kb33f_2", pM = "_TagInput_kb33f_89", gM = "_StartAdornment_kb33f_96", yM = "_EndAdornment_kb33f_97", bM = "_Tag_kb33f_89", _M = "_shake_kb33f_1", wM = "_TagRemove_kb33f_177", SM = "_TagContent_kb33f_205", EM = "_TagValue_kb33f_215", TM = "_InputContainer_kb33f_230", CM = "_InputWrapper_kb33f_238", AM = "_InputMeasure_kb33f_243", xM = "_Input_kb33f_230", OM = "_Limit_kb33f_296", ln = {
  Container: vM,
  TagInput: pM,
  StartAdornment: gM,
  EndAdornment: yM,
  Tag: bM,
  shake: _M,
  TagRemove: wM,
  TagContent: SM,
  TagValue: EM,
  InputContainer: TM,
  InputWrapper: CM,
  InputMeasure: AM,
  Input: xM,
  Limit: OM
}, MM = 10, Ig = 20, RM = 500, NM = ({ value: e, label: a }) => /* @__PURE__ */ (0, y.jsx)(y.Fragment, { children: a ?? e }), Gg = (e) => {
  const a = Number.parseFloat(e);
  return Number.isFinite(a) ? a : 0;
}, Mr = (e) => typeof Element < "u" && e instanceof Element ? e : typeof Node < "u" && e instanceof Node ? e.parentElement : null, $g = (e) => !!Mr(e)?.closest("[data-tag]"), id = (e) => !!Mr(e)?.closest("[data-tag-input-adornment]"), DM = b.memo(function({ disabled: a, getRemoveLabel: r, tags: l, duplicateTags: u, TagView: c, inert: d, onSelectTag: h, onRemoveTag: m }) {
  return /* @__PURE__ */ (0, y.jsx)(y.Fragment, { children: Array.from(l.values()).map((g) => /* @__PURE__ */ (0, y.jsxs)("div", {
    className: ln.Tag,
    tabIndex: -1,
    onClick: () => h(g.value),
    "data-tag": g.value,
    "data-tag-input-flow-item": "",
    "data-invalid": g.valid ? void 0 : "",
    "data-duplicate": u.has(g.value) ? "" : void 0,
    inert: d || a,
    children: [/* @__PURE__ */ (0, y.jsx)("span", {
      className: ln.TagContent,
      title: g.label ?? g.value,
      children: /* @__PURE__ */ (0, y.jsx)("span", {
        className: ln.TagValue,
        children: /* @__PURE__ */ (0, y.jsx)(c, { ...g })
      })
    }), !d && /* @__PURE__ */ (0, y.jsx)("button", {
      type: "button",
      disabled: a,
      className: ln.TagRemove,
      onClick: (p) => {
        p.stopPropagation(), m(g.value);
      },
      "aria-label": r(g),
      children: /* @__PURE__ */ (0, y.jsx)(ti, {
        height: 14,
        width: 14,
        "aria-hidden": "true"
      })
    })]
  }, g.value)) });
}), zM = (e) => {
  const { defaultValue: a = [], inputValue: r, onInputChange: l, inputRef: u, inputProps: c, allowCustomTags: d = !0, getRemoveLabel: h, value: m, size: g = "xl", onChange: p, validator: _, maxTags: S, placeholder: T = "", autoComplete: x, autoFocus: C = !1, rows: A = 1, delimiters: M = [",", " "], disabled: N, inert: D, id: R, className: B, TagView: H = NM, startAdornment: q, endAdornment: ee } = e, [F, U] = (0, b.useState)(a), Y = m ?? F, oe = m !== void 0, ue = (0, b.useMemo)(() => new Map(Y.map((te) => [te.value, te])), [Y]), [re, V] = (0, b.useState)(""), P = r ?? re, E = (te) => {
    l?.(te), r === void 0 && V(te);
  }, [I, ae] = (0, b.useState)(C), [le, Ee] = (0, b.useState)(null), [z, W] = (0, b.useState)(/* @__PURE__ */ new Set()), [ne, ce] = (0, b.useState)(0), [_e, be] = (0, b.useState)(0), Ae = Pu(_), Ve = Pu(p), ke = (0, b.useRef)(null), Ke = u ?? ke, nt = (0, b.useRef)(null), zt = (0, b.useRef)(null), Pn = (0, b.useRef)(null), Kt = (0, b.useRef)(null), dn = !S || ue.size < S, Zn = !!q, hn = !!ee;
  (0, b.useEffect)(() => {
    if (!I || !nt.current) return;
    const te = Ke.current ?? nt.current;
    if (le === null) te.focus();
    else {
      const ye = Array.from(nt.current.querySelectorAll("[data-tag]")).find((qe) => qe.dataset.tag === le);
      ye ? ye.focus() : te.focus();
    }
  }, [
    I,
    le,
    dn
  ]);
  const Ca = ue.size === 0 ? T : void 0;
  (0, b.useLayoutEffect)(() => {
    if (!hn || !Kt.current) {
      be(0);
      return;
    }
    const te = Kt.current, ye = () => {
      const Tt = Math.ceil(te.getBoundingClientRect().width);
      be((st) => st === Tt ? st : Tt);
    };
    if (ye(), typeof ResizeObserver > "u") return;
    const qe = new ResizeObserver(ye);
    return qe.observe(te), () => {
      qe.disconnect();
    };
  }, [hn, ee]), (0, b.useLayoutEffect)(() => {
    if (!zt.current || !Pn.current) return;
    const te = zt.current, ye = () => {
      if (!Pn.current) return;
      const Tt = te.getBoundingClientRect(), st = Gg(getComputedStyle(te).getPropertyValue("--tag-input-tag-spacing")), gt = Array.from(te.querySelectorAll("[data-tag-input-flow-item]")), ct = gt[gt.length - 1], yt = ct?.getBoundingClientRect(), Jt = Tt.left, Aa = Tt.right, Ss = yt ? yt.right : Jt, ul = ct ? Gg(getComputedStyle(ct).marginRight) : 0, Vr = !yt || Math.abs(yt.top - Tt.top) < 1, ki = Aa - (hn && Vr && _e > 0 ? _e + st : 0);
      Pn.current.textContent = P || Ca || "";
      const Es = Pn.current.getBoundingClientRect().width + MM, Fr = Math.max(0, ki - Ss - ul), sl = Math.max(0, Aa - Jt);
      Es <= Fr ? ce(Math.max(Ig, Fr)) : ce(Math.max(Ig, sl));
    };
    ye();
    const qe = new ResizeObserver(ye);
    return qe.observe(te), () => qe.disconnect();
  }, [
    P,
    _e,
    hn,
    Ca,
    g,
    q,
    ue,
    H
  ]);
  const ta = (te) => {
    const ye = new Map(ue);
    let qe = !1;
    for (const st of te) {
      const gt = st.trim();
      if (!gt) continue;
      if (ye.has(gt)) {
        W((yt) => new Set(yt).add(gt)), setTimeout(() => W((yt) => {
          const Jt = new Set(yt);
          return Jt.delete(gt), Jt;
        }), RM);
        continue;
      }
      const ct = Ae.current?.(gt) ?? !0;
      ye.set(gt, {
        value: gt,
        valid: ct
      }), qe = !0;
    }
    if (!qe) return;
    const Tt = Array.from(ye.values());
    Ve.current?.(Tt), oe || U(Tt);
  }, In = (te) => {
    ta([te]);
  }, na = (0, b.useCallback)((te) => {
    const ye = new Map(ue);
    ye.delete(te);
    const qe = Array.from(ye.values());
    Ve.current?.(qe), oe || U(qe), le === te && Ee(null);
  }, [
    oe,
    Ve,
    le,
    ue
  ]), Ui = () => {
    if (ue.size === 0) return;
    const te = Array.from(ue.keys());
    if (le === null) Ee(te[te.length - 1]);
    else {
      const ye = te.indexOf(le);
      Ee(te[Math.max(0, ye - 1)]);
    }
  }, Gr = () => {
    if (le === null) return;
    const te = Array.from(ue.keys()), ye = te.indexOf(le) + 1;
    ye < te.length ? Ee(te[ye]) : Ee(null);
  }, St = () => {
    const te = Ke.current;
    return te ? te.selectionStart === 0 && te.selectionEnd === 0 : !0;
  }, me = (0, b.useCallback)(() => {
    Ee(null), ae(!0), (Ke.current ?? nt.current)?.focus({ preventScroll: !0 });
  }, []), Et = (0, b.useCallback)((te) => {
    na(te), me();
  }, [me, na]), Lt = () => {
    ae(!1), Ee(null), d && P && (In(P), E(""));
  }, Ht = (te) => {
    if (N || D || te.defaultPrevented || te.nativeEvent.isComposing) return;
    const ye = Mr(te.target);
    !ye || !nt.current?.contains(ye) || id(ye) || (te.key === "ArrowLeft" || te.key === "ArrowUp" ? St() && (te.preventDefault(), Ui()) : te.key === "ArrowRight" || te.key === "ArrowDown" ? le !== null && (te.preventDefault(), Gr()) : te.key === "Backspace" && (le !== null ? (te.preventDefault(), na(le)) : St() && Ui()));
  }, $r = (te) => {
    c?.onKeyDown?.(te), !(!d || N || D || te.defaultPrevented || te.nativeEvent.isComposing) && (te.key === "Enter" || M.includes(te.key) ? (te.preventDefault(), P && (In(P), E(""))) : te.key === "Tab" && P && (te.preventDefault(), In(P), E("")));
  }, ol = (te) => {
    if (!d) return;
    let ye = [te.clipboardData.getData("Text")];
    for (const qe of M) {
      const Tt = [];
      for (const st of ye) Tt.push(...st.split(qe));
      ye = Tt;
    }
    ye = ye.filter(Boolean), ye.length > 1 && (te.preventDefault(), ta(ye));
  }, ll = (te) => {
    const ye = Mr(te.target);
    if (N || D || te.button > 0 || te.defaultPrevented || !ye || !te.currentTarget.contains(ye)) return;
    const qe = te.currentTarget, Tt = te.nativeEvent, st = te.currentTarget.ownerDocument, gt = st.activeElement;
    setTimeout(() => {
      if (!qe.isConnected || Tt.defaultPrevented) return;
      const ct = st.activeElement;
      ct && ct !== gt && ct !== st.body && ct !== st.documentElement && ct !== nt.current && ct !== Ke.current || me();
    });
  }, ws = (te) => {
    const ye = Mr(te.target);
    if (!(!ye || !nt.current?.contains(ye)) && !id(ye) && (ae(!0), !$g(ye) && (Ee(null), Ke.current && !Ke.current.contains(ye)))) {
      te.preventDefault();
      const { left: qe, right: Tt, top: st, bottom: gt } = Ke.current.getBoundingClientRect(), { clientX: ct, clientY: yt } = te;
      if (te.detail === 1) {
        if (yt < st || ct < qe) Ke.current.setSelectionRange(0, 0);
        else if (yt > gt || ct > Tt) {
          const Jt = Ke.current.value.length;
          Ke.current.setSelectionRange(Jt, Jt);
        }
      } else Ke.current.select();
    }
  }, li = (te) => {
    const ye = Mr(te.target);
    !ye || !nt.current?.contains(ye) || $g(ye) || id(ye) || ae(!0);
  }, Bt = (te) => {
    if (!(!te.relatedTarget || !(te.relatedTarget instanceof Node))) {
      if (nt.current && nt.current.contains(te.relatedTarget)) {
        Ke.current && Ke.current.contains(te.relatedTarget) && Ee(null);
        return;
      }
      Lt();
    }
  }, Mn = Pu(Lt);
  return (0, b.useEffect)(() => {
    const te = nt.current?.ownerDocument, ye = (qe) => {
      qe.target instanceof Node && qe.target.isConnected && !nt.current?.contains(qe.target) && Mn.current();
    };
    return te?.addEventListener("mousedown", ye), () => te?.removeEventListener("mousedown", ye);
  }, [Mn]), /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)("div", {
    className: ze(ln.Container, B),
    ref: nt,
    onKeyDown: Ht,
    onMouseDown: ws,
    onFocus: li,
    onBlur: Bt,
    "data-size": g,
    "data-focused": I ? "" : void 0,
    "data-empty": ue.size === 0 ? "" : void 0,
    "data-has-start-adornment": Zn ? "" : void 0,
    "data-has-end-adornment": hn ? "" : void 0,
    tabIndex: -1,
    style: { "--min-rows": A },
    "data-disabled": N ? "" : void 0,
    inert: D,
    children: /* @__PURE__ */ (0, y.jsxs)("div", {
      className: ln.TagInput,
      ref: zt,
      children: [
        Zn && /* @__PURE__ */ (0, y.jsx)("div", {
          className: ln.StartAdornment,
          "data-tag-input-adornment": "",
          "data-tag-input-flow-item": "",
          onPointerDownCapture: ll,
          children: q
        }),
        hn && /* @__PURE__ */ (0, y.jsx)("div", {
          className: ln.EndAdornment,
          ref: Kt,
          "data-tag-input-adornment": "",
          onPointerDownCapture: ll,
          children: ee
        }),
        /* @__PURE__ */ (0, y.jsx)(DM, {
          disabled: N,
          getRemoveLabel: h,
          tags: ue,
          duplicateTags: z,
          TagView: H,
          inert: D,
          onSelectTag: Ee,
          onRemoveTag: Et
        }),
        dn && /* @__PURE__ */ (0, y.jsxs)("div", {
          className: ln.InputContainer,
          children: [/* @__PURE__ */ (0, y.jsx)("span", {
            ref: Pn,
            className: ln.InputMeasure
          }), /* @__PURE__ */ (0, y.jsx)("div", {
            className: ln.InputWrapper,
            children: /* @__PURE__ */ (0, y.jsx)("input", {
              ...c,
              "data-lpignore": !0,
              "data-1p-ignore": !0,
              id: R,
              className: ln.Input,
              ref: Ke,
              value: P,
              onChange: (te) => {
                E(te.target.value);
              },
              onPaste: ol,
              onKeyDown: $r,
              placeholder: Ca,
              style: { width: ne },
              disabled: N,
              autoComplete: x,
              inert: D
            })
          })]
        })
      ]
    })
  }), S && /* @__PURE__ */ (0, y.jsxs)("div", {
    className: ln.Limit,
    children: [
      ue.size,
      /* @__PURE__ */ (0, y.jsx)("span", { children: "/" }),
      S
    ]
  })] });
};
function Vg(e) {
  switch (e.kind) {
    case "person":
      return `person:${e.person.account_user_id}`;
    case "email":
      return `email:${e.email.toLowerCase()}`;
    case "group":
      return `group:${e.field}:${e.id}`;
  }
}
function Iu(e) {
  return e.kind === "person" ? !e.person.is_external : e.kind === "group" && e.field === "allowed_workspace_group_ids";
}
function LM() {
  return {
    recipients: [],
    inviteRole: "viewer"
  };
}
function HM(e, a) {
  const r = {}, l = e.access_policy;
  if (!l || !e.can_manage_access) return r;
  const u = {}, c = {}, d = new Set(l.allowed_workspace_group_ids), h = new Set(l.allowed_tenant_group_ids);
  for (const m of a.recipients) {
    const g = e.can_manage_editors && Iu(m) ? a.inviteRole : "viewer";
    if (m.kind === "person") {
      const p = m.person.account_user_id;
      g === "editor" ? (c.add_editor_account_user_ids ??= []).push(p) : (u.add_viewer_account_user_ids ??= []).push(p);
    } else m.kind === "email" ? (u.add_external_visitor_emails ??= []).push(m.email) : g === "editor" ? (c.add_editor_group_ids ??= []).push(m.id) : (m.field === "allowed_tenant_group_ids" ? h : d).add(m.id);
  }
  return Object.keys(u).length && (r.viewer_changes = u), Object.keys(c).length && (r.editor_changes = c), (d.size !== l.allowed_workspace_group_ids.length || l.allowed_workspace_group_ids.some((m) => !d.has(m))) && (r.allowed_workspace_group_ids = [...d]), (h.size !== l.allowed_tenant_group_ids.length || l.allowed_tenant_group_ids.some((m) => !h.has(m))) && (r.allowed_tenant_group_ids = [...h]), r;
}
function jM({ access: e, api: a, saving: r, remixEnabled: l, recipients: u, onRecipientsChange: c, role: d, onRoleChange: h }) {
  const m = Xe().formatMessage, [g, p] = (0, b.useState)(""), [_, S] = (0, b.useState)(null), [T, x] = (0, b.useState)(!1), [C, A] = (0, b.useState)(!1), M = (0, b.useRef)(null), N = (0, b.useRef)(null), D = (0, b.useId)(), R = g.trim(), B = u.every(Iu), H = l !== !0 || !u.some(Iu) ? m(ie.viewerDescriptionShort) : B ? m(ie.viewerRemixDescription) : m(ie.viewerMixedRemixDescription, { workspace: e.workspace_name || m(ie.workspace) }), q = !!R && !C, ee = (E) => {
    const I = Array.from(N.current?.querySelectorAll("button:not(:disabled)") ?? []), ae = I.findIndex((Ee) => Ee === document.activeElement);
    let le = ae + E;
    ae < 0 && (le = E === 1 ? 0 : I.length - 1), le < 0 || le >= I.length ? M.current?.focus() : I[le]?.focus();
  };
  (0, b.useEffect)(() => {
    if (S(null), x(!1), !R) return;
    const E = new AbortController(), I = setTimeout(() => {
      a.search(R, E.signal).then((ae) => {
        E.signal.aborted || S(ae);
      }).catch(() => {
        E.signal.aborted || x(!0);
      });
    }, 250);
    return () => {
      clearTimeout(I), E.abort();
    };
  }, [a, R]);
  const F = e.access_policy;
  if (!F) return null;
  const U = _s(e), Y = _?.users.filter((E) => !U.some((I) => I.account_user_id === E.account_user_id) && !u.some((I) => I.kind === "person" && I.person.account_user_id === E.account_user_id)) ?? [], oe = [...(_?.workspace_groups ?? []).map((E) => ({
    ...E,
    field: "allowed_workspace_group_ids"
  })), ...(_?.tenant_groups ?? []).map((E) => ({
    ...E,
    field: "allowed_tenant_group_ids"
  }))].filter((E) => !F.allowed_groups.some((I) => I.id === E.id) && !u.some((I) => I.kind === "group" && I.id === E.id)), ue = _4().safeParse(R), re = _ && e.can_invite_external_visitors && ue.success && !u.some((E) => E.kind === "email" && E.email.toLowerCase() === R.toLowerCase()) && ![...U, ..._.users].some((E) => E.email?.toLowerCase() === R.toLowerCase()), V = (E) => {
    Iu(E) || h("viewer"), c([...u, E]), p(""), M.current?.focus();
  };
  function P() {
    return T ? /* @__PURE__ */ (0, y.jsx)("p", {
      role: "alert",
      className: de.Error,
      children: m(ie.searchError)
    }) : _ ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
      Y.map((E) => /* @__PURE__ */ (0, y.jsxs)(wt, {
        color: "secondary",
        variant: "ghost",
        className: de.Result,
        disabled: r,
        onClick: () => V({
          kind: "person",
          person: E
        }),
        children: [/* @__PURE__ */ (0, y.jsx)(Ju, {
          size: 32,
          imageUrl: E.avatar_url ?? void 0,
          name: E.name || E.email || void 0
        }), /* @__PURE__ */ (0, y.jsxs)("span", {
          className: de.Identity,
          children: [/* @__PURE__ */ (0, y.jsx)("span", { children: E.name || E.email }), /* @__PURE__ */ (0, y.jsx)("span", {
            className: de.Secondary,
            children: E.email
          })]
        })]
      }, E.account_user_id)),
      oe.map((E) => /* @__PURE__ */ (0, y.jsxs)(wt, {
        color: "secondary",
        variant: "ghost",
        className: de.Result,
        disabled: r,
        onClick: () => V({
          kind: "group",
          id: E.id,
          name: E.name,
          field: E.field
        }),
        children: [/* @__PURE__ */ (0, y.jsx)(Ju, {
          size: 32,
          Icon: e_,
          className: de.GroupAvatar
        }), /* @__PURE__ */ (0, y.jsxs)("span", {
          className: de.Identity,
          children: [/* @__PURE__ */ (0, y.jsx)("span", { children: E.name }), /* @__PURE__ */ (0, y.jsx)("span", {
            className: de.Secondary,
            children: m(ie.members, { count: E.size })
          })]
        })]
      }, `${E.field}:${E.id}`)),
      re && /* @__PURE__ */ (0, y.jsx)(wt, {
        color: "secondary",
        variant: "ghost",
        className: de.Result,
        disabled: r,
        onClick: () => V({
          kind: "email",
          email: R
        }),
        children: m(ie.invite, { email: R })
      }),
      !re && Y.length === 0 && oe.length === 0 && /* @__PURE__ */ (0, y.jsx)("p", {
        className: de.EmptyResults,
        children: m(ie.noResults)
      }),
      (_.has_more_users || _.has_more_groups) && /* @__PURE__ */ (0, y.jsx)("p", {
        className: `${de.Notice} ${de.SearchHint}`,
        children: m(ie.more)
      })
    ] }) : /* @__PURE__ */ (0, y.jsx)("p", {
      role: "status",
      "aria-label": m(ie.searching),
      className: `${de.Notice} ${de.SearchLoading}`,
      children: /* @__PURE__ */ (0, y.jsx)(Fu, { size: 16 })
    });
  }
  return /* @__PURE__ */ (0, y.jsxs)(hs, {
    open: q,
    onOpenChange: (E) => {
      r || A(!E);
    },
    children: [/* @__PURE__ */ (0, y.jsx)(ph, {
      asChild: !0,
      children: /* @__PURE__ */ (0, y.jsx)("div", { children: /* @__PURE__ */ (0, y.jsx)(zM, {
        size: "lg",
        value: u.map((E) => ({
          value: Vg(E),
          label: E.kind === "person" ? E.person.name || E.person.email || E.person.account_user_id : E.kind === "email" ? E.email : E.name,
          valid: !0
        })),
        onChange: (E) => {
          const I = new Set(E.map((ae) => ae.value));
          c(u.filter((ae) => I.has(Vg(ae))));
        },
        getRemoveLabel: (E) => m(ie.removeRecipient, { name: E.label ?? E.value }),
        inputRef: M,
        inputValue: g,
        onInputChange: (E) => {
          A(!1), p(E), E.trim() !== R && (S(null), x(!1));
        },
        allowCustomTags: !1,
        placeholder: m(ie.search),
        autoComplete: "off",
        disabled: r,
        inputProps: {
          type: "search",
          autoCorrect: "off",
          autoCapitalize: "none",
          spellCheck: !1,
          maxLength: 200,
          "aria-label": m(ie.search),
          "aria-haspopup": "dialog",
          "aria-expanded": q,
          "aria-controls": q ? D : void 0,
          onFocus: () => A(!1),
          onKeyDown: (E) => {
            q && !E.nativeEvent.isComposing && (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), ee(E.key === "ArrowDown" ? 1 : -1));
          }
        },
        endAdornment: u.length > 0 && /* @__PURE__ */ (0, y.jsx)(Zu, {
          className: de.InviteRole,
          menuClassName: de.RoleMenu,
          value: d,
          "aria-label": m(ie.inviteRole),
          disabled: r,
          align: "end",
          options: [{
            value: "viewer",
            label: m(ie.viewer),
            description: H
          }, ...e.can_manage_editors ? [{
            value: "editor",
            label: m(ie.editor),
            description: m(B ? ie.editorDescriptionShort : ie.editorWorkspaceOnlyDescription),
            disabled: !B
          }] : []],
          onChange: ({ value: E }) => h(E)
        })
      }) })
    }), /* @__PURE__ */ (0, y.jsx)(ms, {
      container: M.current?.closest('[role="dialog"]'),
      children: /* @__PURE__ */ (0, y.jsx)(vs, {
        ref: N,
        id: D,
        className: de.Results,
        "aria-label": m(ie.search),
        "aria-busy": r || !_ && !T,
        align: "start",
        sideOffset: 6,
        collisionPadding: 12,
        onOpenAutoFocus: (E) => E.preventDefault(),
        onCloseAutoFocus: (E) => E.preventDefault(),
        onEscapeKeyDown: (E) => {
          E.stopPropagation(), r ? E.preventDefault() : M.current?.focus();
        },
        onInteractOutside: (E) => {
          (r || E.target === M.current) && E.preventDefault();
        },
        onKeyDown: (E) => {
          (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), r || ee(E.key === "ArrowDown" ? 1 : -1));
        },
        children: P()
      })
    })]
  });
}
var BM = (e) => /* @__PURE__ */ (0, y.jsx)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: /* @__PURE__ */ (0, y.jsx)("path", {
    d: "M18.2929 5.7071C16.4743 3.88849 13.5257 3.88849 11.7071 5.7071L10.7071 6.7071C10.3166 7.09763 9.68341 7.09763 9.29289 6.7071C8.90236 6.31658 8.90236 5.68341 9.29289 5.29289L10.2929 4.29289C12.8926 1.69322 17.1074 1.69322 19.7071 4.29289C22.3068 6.89255 22.3068 11.1074 19.7071 13.7071L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.2929 12.2929C20.1115 10.4743 20.1115 7.52572 18.2929 5.7071ZM15.7071 8.29289C16.0976 8.68341 16.0976 9.31658 15.7071 9.7071L9.7071 15.7071C9.31658 16.0976 8.68341 16.0976 8.29289 15.7071C7.90236 15.3166 7.90236 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90236 15.3166 7.90236 15.7071 8.29289ZM6.7071 9.29289C7.09763 9.68341 7.09763 10.3166 6.7071 10.7071L5.7071 11.7071C3.88849 13.5257 3.88849 16.4743 5.7071 18.2929C7.52572 20.1115 10.4743 20.1115 12.2929 18.2929L13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071L13.7071 19.7071C11.1074 22.3068 6.89255 22.3068 4.29289 19.7071C1.69322 17.1074 1.69322 12.8926 4.29289 10.2929L5.29289 9.29289C5.68341 8.90236 6.31658 8.90236 6.7071 9.29289Z",
    fill: "currentColor"
  })
}), UM = (e) => /* @__PURE__ */ (0, y.jsxs)("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  ...e,
  children: [
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z",
      fill: "currentColor"
    }),
    /* @__PURE__ */ (0, y.jsx)("path", {
      d: "M12 9.30005C12.6351 9.30005 13.15 8.78518 13.15 8.15005C13.15 7.51492 12.6351 7.00005 12 7.00005C11.3649 7.00005 10.85 7.51492 10.85 8.15005C10.85 8.78518 11.3649 9.30005 12 9.30005Z",
      fill: "currentColor"
    })
  ]
}), kM = "_Container_244h6_2", PM = "_Track_244h6_34", ZM = "_Thumb_244h6_82", IM = "_Label_244h6_109", Hu = {
  Container: kM,
  Track: PM,
  Thumb: ZM,
  Label: IM
}, GM = ({ className: e, label: a, id: r, disabled: l, inert: u, labelPosition: c = "end", ...d }) => {
  const h = (0, b.useId)(), m = r ?? h;
  return /* @__PURE__ */ (0, y.jsxs)("div", {
    className: ze(Hu.Container, e),
    "data-disabled": l ? "" : void 0,
    "data-has-label": a ? "" : void 0,
    "data-label-position": c,
    inert: u,
    children: [/* @__PURE__ */ (0, y.jsx)(V9, {
      id: m,
      className: Hu.Track,
      disabled: l,
      inert: u,
      ...d,
      children: /* @__PURE__ */ (0, y.jsx)(F9, { className: Hu.Thumb })
    }), a && /* @__PURE__ */ (0, y.jsx)("label", {
      htmlFor: m,
      className: Hu.Label,
      children: a
    })]
  });
}, Fg = 400, $M = 150, Xg = 0.99, Yo = class extends Error {
  constructor() {
    super("Sharing requires an interaction with the visible dialog");
  }
};
function VM(e, a) {
  const r = e.ownerDocument, l = r.defaultView;
  let u = null, c = null, d = 0, h = !1, m;
  const g = "IntersectionObserverEntry" in l && "isVisible" in l.IntersectionObserverEntry.prototype, p = () => {
    clearTimeout(m), m = void 0, a?.(!1), c = null, d++;
  }, _ = (C) => {
    for (const A of C) A.isIntersecting && A.intersectionRatio >= Xg && A.boundingClientRect.width > 0 && A.boundingClientRect.height > 0 && (!g || A.isVisible === !0) ? c === null && (c = performance.now(), a && (m = l.setTimeout(() => {
      m = void 0, a(!h && c !== null && r.visibilityState === "visible" && r.hasFocus());
    }, Fg))) : p();
  }, S = new IntersectionObserver(_, {
    threshold: [Xg],
    ...g ? {
      trackVisibility: !0,
      delay: 100
    } : {}
  });
  S.observe(e);
  const T = () => {
    p(), S.takeRecords(), S.unobserve(e), h || S.observe(e);
  };
  r.addEventListener("visibilitychange", T), l.addEventListener("blur", T), l.addEventListener("focus", T);
  const x = (C) => {
    _(S.takeRecords());
    const A = C.getBoundingClientRect();
    return !h && e.isConnected && e.contains(C) && r.visibilityState === "visible" && r.hasFocus() && c !== null && performance.now() - c >= Fg && A.width > 0 && A.height > 0 && A.top >= 0 && A.left >= 0 && A.bottom <= l.innerHeight && A.right <= l.innerWidth;
  };
  return {
    capture(C) {
      u = C;
    },
    async authorize() {
      const C = u;
      u = null;
      const A = C?.type === "click" || C?.type === "keydown" && ["Enter", " "].includes(C.key) && !C.repeat;
      let M = C?.composedPath().find((R) => R instanceof Element)?.closest("button, [role=option], [role=listbox]");
      const N = M?.getAttribute("aria-activedescendant");
      if (N && (M = e.querySelector(`#${CSS.escape(N)}`)), !C?.isTrusted || C.eventPhase === Event.NONE || !A || !l.navigator.userActivation?.isActive || !M || !x(M)) throw new Yo();
      const D = d;
      if (await new Promise((R) => l.setTimeout(R, $M)), !x(M) || d !== D) throw new Yo();
    },
    dispose() {
      h = !0, u = null, p(), S.disconnect(), r.removeEventListener("visibilitychange", T), l.removeEventListener("blur", T), l.removeEventListener("focus", T);
    }
  };
}
function FM(e) {
  return Pd()((a, r) => ({
    access: null,
    open: !1,
    openSession: 0,
    placement: "bottom",
    mutation: null,
    error: null,
    actions: {
      load: async (l) => {
        try {
          const u = await e.load();
          !l.aborted && u.access_policy && a({ access: u });
        } catch {
        }
      },
      open: (l = "bottom") => {
        const u = !r().open;
        u && e.logInteraction("toolbar_sharing_opened"), a((c) => ({
          open: !0,
          openSession: c.openSession + (u ? 1 : 0),
          placement: l,
          error: null
        }));
      },
      close: () => {
        r().open && e.logInteraction("toolbar_sharing_closed"), a({
          open: !1,
          error: null
        });
      },
      setError: (l) => a({ error: l }),
      save: async (l, u = null) => {
        if (r().mutation || r().access?.can_manage_access === !1) return !1;
        a({
          mutation: { control: u },
          error: null
        });
        const c = new Promise((d) => setTimeout(d, u === "remix" ? 300 : 400));
        try {
          const [d] = await Promise.all([e.save(l), c]);
          return a((h) => ({
            mutation: null,
            access: {
              ...d,
              workspace_name: d.workspace_name ?? h.access?.workspace_name
            }
          })), e.logInteraction("toolbar_sharing_update_succeeded"), !0;
        } catch (d) {
          return await c, a({
            mutation: null,
            error: d instanceof Yo ? "interactionRequired" : "error"
          }), e.logInteraction(d instanceof Yo ? "toolbar_sharing_update_blocked" : "toolbar_sharing_update_failed"), !1;
        }
      }
    }
  }));
}
function XM({ siteOrigin: e }) {
  const a = Xe(), r = a.formatMessage, l = (0, b.useRef)(null), u = (0, b.useMemo)(() => PO(e, async () => {
    if (!l.current) throw new Yo();
    await l.current.authorize();
  }), [e]), { access: c, open: d, openSession: h, placement: m, mutation: g, error: p, actions: _ } = es((0, b.useMemo)(() => FM(u), [u])), { save: S } = _, T = g !== null, x = c?.can_manage_access === !1, [C, A] = (0, b.useState)(null);
  (0, b.useEffect)(() => {
    if (C === null) return;
    const E = window.setTimeout(() => A(null), 5e3);
    return () => window.clearTimeout(E);
  }, [C]);
  const [M, N] = (0, b.useState)(null), [D, R] = (0, b.useState)(!1);
  (0, b.useEffect)(() => {
    if (!d || !x || !M) return;
    const E = requestAnimationFrame(() => M.focus({ preventScroll: !0 }));
    return () => cancelAnimationFrame(E);
  }, [
    d,
    x,
    M
  ]), (0, b.useLayoutEffect)(() => {
    if (!M) return;
    const E = VM(M, R);
    return l.current = E, () => {
      l.current = null, E.dispose();
    };
  }, [M]), (0, b.useLayoutEffect)(() => {
    if (!M) return;
    const E = () => {
      window.parent.postMessage({
        type: "sites-toolbar-sharing-size",
        height: M.getBoundingClientRect().height
      }, e);
    }, I = new ResizeObserver(E);
    return I.observe(M), E(), () => I.disconnect();
  }, [M, e]), (0, b.useEffect)(() => {
    const E = (I) => {
      if (!Kb(I, window.parent, e)) return;
      const ae = Y8.safeParse(I.data);
      ae.success && (ae.data.type === "sites-toolbar-open-sharing" ? _.open(ae.data.placement) : _.close(), A(null));
    };
    return window.addEventListener("message", E), () => window.removeEventListener("message", E);
  }, [e, _]), (0, b.useEffect)(() => {
    const E = new AbortController();
    return _.load(E.signal), () => E.abort();
  }, [_]);
  const B = c?.access_policy, H = c ? _s(c) : [], q = c?.workspace_name || r(ie.workspace), ee = B?.access_mode, F = B?.allowed_groups ?? [];
  function U() {
    return ee === "admins_only" ? r(ie.admins) : ee === "public" ? r(ie.public) : ee === "workspace_all" ? q : F.length ? r(ie.inviteOnly) : H.length > 1 ? r(ie.people, { count: H.length }) : r(ie.private);
  }
  function Y() {
    return ee === "public" ? "globe" : ee === "workspace_all" ? "building" : F.length || H.length > 1 ? "people" : "lock";
  }
  const oe = U(), ue = Y();
  (0, b.useEffect)(() => {
    B && window.parent.postMessage({
      type: "sites-toolbar-summary",
      label: oe.slice(0, 256),
      icon: ue
    }, e);
  }, [
    B,
    oe,
    ue,
    e
  ]);
  const re = () => {
    _.close(), window.parent.postMessage({ type: "sites-toolbar-sharing-closed" }, e);
  };
  if (!c || !B) return null;
  const V = /* @__PURE__ */ (0, y.jsxs)(wt, {
    className: de.Copy,
    color: "secondary",
    variant: "ghost",
    pill: !0,
    size: "lg",
    onClick: async () => {
      const E = c.url ?? e;
      try {
        await navigator.clipboard.writeText(E), A(Date.now()), u.logInteraction("toolbar_copy_link_succeeded");
      } catch {
        _.setError("copyError"), u.logInteraction("toolbar_copy_link_failed");
      }
    },
    children: [C !== null ? /* @__PURE__ */ (0, y.jsx)(Jb, {
      "aria-hidden": "true",
      focusable: "false"
    }) : /* @__PURE__ */ (0, y.jsx)(BM, {
      "aria-hidden": "true",
      focusable: "false"
    }), r(C !== null ? ie.copied : ie.copy)]
  }), P = p ? /* @__PURE__ */ (0, y.jsx)("p", {
    role: "alert",
    className: de.Error,
    children: r(ie[p])
  }) : null;
  return /* @__PURE__ */ (0, y.jsx)("div", {
    className: de.Root,
    dir: ai(a.locale),
    children: /* @__PURE__ */ (0, y.jsx)(v6, {
      modal: !1,
      open: d,
      onOpenChange: (E) => {
        E ? _.open(m) : T || re();
      },
      children: /* @__PURE__ */ (0, y.jsxs)(p6, {
        ref: N,
        onClickCapture: (E) => l.current?.capture(E.nativeEvent),
        onKeyDownCapture: (E) => l.current?.capture(E.nativeEvent),
        className: de.Dialog,
        "data-placement": m,
        "data-read-only": x || void 0,
        "aria-describedby": void 0,
        onOpenAutoFocus: (E) => {
          x && E.preventDefault();
        },
        onCloseAutoFocus: (E) => {
          E.preventDefault();
        },
        children: [
          /* @__PURE__ */ (0, y.jsx)("div", {
            className: de.Body,
            children: x ? /* @__PURE__ */ (0, y.jsx)(YM, { access: c }) : /* @__PURE__ */ (0, y.jsx)(qM, {
              access: c,
              api: u,
              saving: T,
              visibilityReady: D,
              tooltipContainer: M,
              savingControl: g?.control,
              save: S,
              onClose: re,
              copyLink: V,
              error: P,
              onClearError: () => _.setError(null)
            }, h)
          }),
          x && P,
          x && /* @__PURE__ */ (0, y.jsx)("div", {
            className: de.Footer,
            children: V
          })
        ]
      })
    })
  });
}
function qM({ access: e, api: a, saving: r, visibilityReady: l, tooltipContainer: u, savingControl: c, save: d, onClose: h, copyLink: m, error: g, onClearError: p }) {
  const { formatMessage: _ } = Xe(), S = i_(e), [T, x] = (0, b.useState)(LM), [C, A] = (0, b.useState)(null), [M, N] = (0, b.useState)(!1), D = e.access_policy;
  if (!D) return null;
  const R = HM(e, T), B = e.available_access_modes, H = C ?? e.remix_enabled, q = e.workspace_name ? _(ie.remixWorkspace, { workspace: e.workspace_name }) : _(ie.remixViewers);
  function ee(U, Y) {
    if (!D || Y === (U.role ?? "viewer")) return;
    const oe = D.allowed_tenant_group_ids.includes(U.id) ? "allowed_tenant_group_ids" : "allowed_workspace_group_ids", ue = D[oe].filter((V) => V !== U.id), re = { [oe]: ue };
    return Y === "viewer" && (re[oe] = [...ue, U.id]), Y === "editor" ? re.editor_changes = { add_editor_group_ids: [U.id] } : U.role === "editor" && (re.editor_changes = { remove_editor_group_ids: [U.id] }), d(re, `group:${U.id}`);
  }
  function F(U, Y) {
    return [{
      value: "viewer",
      label: _(ie.viewer),
      description: _(H === !0 && Y ? ie.viewerRemixDescription : ie.viewerDescriptionShort)
    }, ...U ? [{
      value: "editor",
      label: _(ie.editor),
      description: _(Y ? ie.editorDescriptionShort : ie.editorWorkspaceOnlyDescription),
      disabled: !Y
    }] : []];
  }
  return M ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
    /* @__PURE__ */ (0, y.jsxs)("div", {
      className: `${de.Header} ${de.AdvancedHeader}`,
      children: [
        /* @__PURE__ */ (0, y.jsx)(Ny, {
          className: de.Title,
          children: _(ie.advancedSettings)
        }),
        /* @__PURE__ */ (0, y.jsxs)("div", {
          className: de.RemixSetting,
          children: [
            /* @__PURE__ */ (0, y.jsx)("label", {
              id: "toolbar-remix-label",
              htmlFor: "toolbar-remix",
              children: q
            }),
            /* @__PURE__ */ (0, y.jsx)(Hn, {
              portalContainer: u,
              compact: !0,
              content: _(ie.remixExplanation),
              contentClassName: de.RemixExplanation,
              side: "top",
              maxWidth: 300,
              children: /* @__PURE__ */ (0, y.jsx)("button", {
                type: "button",
                className: de.RemixInfo,
                "aria-label": _(ie.remixInfo),
                children: /* @__PURE__ */ (0, y.jsx)(UM, {
                  width: 16,
                  height: 16,
                  "aria-hidden": "true",
                  focusable: "false"
                })
              })
            }),
            /* @__PURE__ */ (0, y.jsx)(GM, {
              id: "toolbar-remix",
              className: de.RemixSwitch,
              "aria-labelledby": "toolbar-remix-label",
              checked: H === !0,
              disabled: r || H == null,
              "aria-disabled": !l || void 0,
              onCheckedChange: async (U) => {
                if (l) {
                  A(U);
                  try {
                    await d({ remix_enabled: U }, "remix");
                  } finally {
                    A(null);
                  }
                }
              }
            })
          ]
        }),
        H == null && /* @__PURE__ */ (0, y.jsx)("p", {
          className: de.Notice,
          children: _(ie.remixUnavailable)
        })
      ]
    }),
    g,
    /* @__PURE__ */ (0, y.jsx)("div", {
      className: `${de.Footer} ${de.AdvancedFooter}`,
      children: /* @__PURE__ */ (0, y.jsx)(wt, {
        autoFocus: !0,
        className: `${de.Copy} ${de.Advanced}`,
        color: "secondary",
        variant: "ghost",
        pill: !0,
        size: "lg",
        loading: r,
        onClick: () => {
          p(), N(!1);
        },
        children: _(ie.back)
      })
    })
  ] }) : /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
    /* @__PURE__ */ (0, y.jsxs)(t_, {
      access: e,
      children: [/* @__PURE__ */ (0, y.jsx)(jM, {
        access: e,
        api: a,
        saving: r,
        remixEnabled: H,
        recipients: T.recipients,
        role: T.inviteRole,
        onRecipientsChange: (U) => x((Y) => ({
          ...Y,
          recipients: U
        })),
        onRoleChange: (U) => x((Y) => ({
          ...Y,
          inviteRole: U
        }))
      }), /* @__PURE__ */ (0, y.jsx)(a_, {
        access: e,
        children: /* @__PURE__ */ (0, y.jsx)(Zu, {
          className: de.AccessMode,
          pill: !1,
          "aria-labelledby": "toolbar-link-access",
          loading: c === "access",
          value: D.access_mode,
          disabled: r || !B?.length,
          options: [.../* @__PURE__ */ new Set([...B ?? [], D.access_mode])].map(S),
          onChange: ({ value: U }) => {
            if (U !== "admins_only" && U !== D.access_mode) return d({ access_mode: U }, "access");
          }
        })
      })]
    }),
    /* @__PURE__ */ (0, y.jsxs)(n_, { children: [_s(e).map((U) => {
      const Y = U.role ?? "viewer";
      return /* @__PURE__ */ (0, y.jsx)(r_, {
        person: U,
        children: U.role === "owner" ? /* @__PURE__ */ (0, y.jsx)(Ld, { role: U.role }) : /* @__PURE__ */ (0, y.jsx)(Zu, {
          className: de.Role,
          menuClassName: de.RoleMenu,
          align: "end",
          "aria-label": _(ie.role, { name: U.name || U.email || "" }),
          loading: c === `person:${U.account_user_id}`,
          value: Y,
          disabled: r || U.role === "editor" && !e.can_manage_editors || !!(U.is_external && !U.email),
          options: F(e.can_manage_editors || U.role === "editor", !U.is_external),
          onChange: ({ value: oe }) => {
            if (oe !== Y) return d(Zg(U, oe), `person:${U.account_user_id}`);
          },
          action: {
            label: _(ie.remove),
            onSelect: () => d(Zg(U, "remove"), `person:${U.account_user_id}`)
          }
        })
      }, U.account_user_id);
    }), D.allowed_groups.map((U) => {
      const Y = U.role ?? "viewer";
      return /* @__PURE__ */ (0, y.jsx)(o_, {
        group: U,
        children: /* @__PURE__ */ (0, y.jsx)(Zu, {
          className: de.Role,
          menuClassName: de.RoleMenu,
          align: "end",
          loading: c === `group:${U.id}`,
          value: Y,
          "aria-label": _(ie.role, { name: U.name }),
          disabled: r || U.role === "editor" && !e.can_manage_editors,
          options: F(e.can_manage_editors || U.role === "editor", !D.allowed_tenant_group_ids.includes(U.id)),
          onChange: ({ value: oe }) => ee(U, oe),
          action: {
            label: _(ie.remove),
            onSelect: () => ee(U, "remove")
          }
        })
      }, U.id);
    })] }),
    /* @__PURE__ */ (0, y.jsxs)("div", {
      className: de.Footer,
      children: [/* @__PURE__ */ (0, y.jsxs)(wt, {
        className: `${de.Copy} ${de.Advanced}`,
        color: "secondary",
        variant: "ghost",
        pill: !0,
        size: "lg",
        disabled: r,
        onClick: () => {
          p(), N(!0);
        },
        children: [/* @__PURE__ */ (0, y.jsx)(Yb, { "aria-hidden": "true" }), _(ie.advanced)]
      }), T.recipients.length > 0 ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(wt, {
        color: "primary",
        variant: "ghost",
        pill: !0,
        size: "lg",
        disabled: r,
        onClick: h,
        children: _(ie.cancel)
      }), /* @__PURE__ */ (0, y.jsx)(wt, {
        color: "primary",
        pill: !0,
        size: "lg",
        "aria-busy": c === "invite",
        disabled: r || !Object.keys(R).length,
        onClick: async () => {
          await d(R, "invite") && h();
        },
        children: _(c === "invite" ? ie.saving : ie.commitInvites)
      })] }) : m]
    }),
    g
  ] });
}
function YM({ access: e }) {
  const a = i_(e), r = e.access_policy;
  if (!r) return null;
  const l = a(r.access_mode);
  return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(t_, {
    access: e,
    children: /* @__PURE__ */ (0, y.jsx)(a_, {
      access: e,
      children: /* @__PURE__ */ (0, y.jsxs)("p", {
        className: de.AccessModeLabel,
        children: [/* @__PURE__ */ (0, y.jsx)("span", {
          className: de.AccessModeIcon,
          children: l.icon
        }), l.label]
      })
    })
  }), /* @__PURE__ */ (0, y.jsxs)(n_, {
    readOnly: !0,
    children: [_s(e).map((u) => /* @__PURE__ */ (0, y.jsx)(r_, {
      person: u,
      children: /* @__PURE__ */ (0, y.jsx)(Ld, { role: u.role })
    }, u.account_user_id)), r.allowed_groups.map((u) => /* @__PURE__ */ (0, y.jsx)(o_, {
      group: u,
      children: /* @__PURE__ */ (0, y.jsx)(Ld, { role: u.role })
    }, u.id))]
  })] });
}
function t_({ access: e, children: a }) {
  const { formatMessage: r } = Xe();
  return /* @__PURE__ */ (0, y.jsxs)("div", {
    className: de.Header,
    children: [
      /* @__PURE__ */ (0, y.jsx)(WM, { title: e.title }),
      a,
      /* @__PURE__ */ (0, y.jsx)("h2", {
        className: de.Section,
        id: "toolbar-who-has-access",
        children: r(ie.who)
      })
    ]
  });
}
function n_({ children: e, readOnly: a }) {
  const [r, l] = (0, b.useState)(null), [u, c] = (0, b.useState)(!1), [d, h] = (0, b.useState)(!1);
  return (0, b.useLayoutEffect)(() => {
    if (!r) return;
    const m = () => {
      c(r.scrollTop > 1), h(r.scrollHeight - r.clientHeight - r.scrollTop > 1);
    }, g = new ResizeObserver(m);
    return g.observe(r), r.firstElementChild && g.observe(r.firstElementChild), r.addEventListener("scroll", m, { passive: !0 }), m(), () => {
      g.disconnect(), r.removeEventListener("scroll", m);
    };
  }, [r]), /* @__PURE__ */ (0, y.jsx)("div", {
    className: de.AccessList,
    ref: l,
    role: "region",
    "aria-labelledby": "toolbar-who-has-access",
    tabIndex: a ? 0 : void 0,
    "data-scroll-cutoff": u || void 0,
    "data-scroll-cutoff-below": d || void 0,
    children: /* @__PURE__ */ (0, y.jsx)("div", {
      className: de.AccessListContent,
      children: e
    })
  });
}
function WM({ title: e }) {
  const { formatMessage: a } = Xe();
  return /* @__PURE__ */ (0, y.jsx)(Ny, {
    className: de.Title,
    children: a(ie.title, { title: e })
  });
}
function a_({ access: e, children: a }) {
  const { formatMessage: r } = Xe();
  return /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [
    /* @__PURE__ */ (0, y.jsx)("h2", {
      className: de.Section,
      id: "toolbar-link-access",
      children: r(ie.linkAccess)
    }),
    a,
    e.has_private_tunnels && e.available_access_modes?.includes("public") && /* @__PURE__ */ (0, y.jsx)("p", {
      className: de.Notice,
      children: r(ie.privateTunnels)
    })
  ] });
}
function i_(e) {
  const { formatMessage: a } = Xe(), r = e.workspace_name || a(ie.workspace);
  return (l) => {
    const u = {
      value: l,
      disabled: !e.available_access_modes?.some((c) => c === l)
    };
    switch (l) {
      case "public":
        return {
          ...u,
          label: a(ie.anyone),
          icon: /* @__PURE__ */ (0, y.jsx)(Xb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(ie.publicDescription)
        };
      case "workspace_all":
        return {
          ...u,
          label: a(ie.everyone, { workspace: r }),
          icon: /* @__PURE__ */ (0, y.jsx)(qb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(ie.workspaceDescription)
        };
      default:
        return {
          ...u,
          label: a(l === "admins_only" ? ie.admins : ie.invited),
          icon: /* @__PURE__ */ (0, y.jsx)(Fb, {
            "aria-hidden": "true",
            focusable: "false"
          }),
          description: a(ie.privateDescription)
        };
    }
  };
}
function r_({ person: e, children: a }) {
  return /* @__PURE__ */ (0, y.jsxs)("div", {
    className: de.Person,
    children: [
      /* @__PURE__ */ (0, y.jsx)(Ju, {
        name: e.name || e.email || "?",
        imageUrl: e.avatar_url ?? void 0,
        size: 32
      }),
      /* @__PURE__ */ (0, y.jsxs)("div", {
        className: de.Identity,
        children: [/* @__PURE__ */ (0, y.jsx)("div", { children: e.name || e.email }), e.name && /* @__PURE__ */ (0, y.jsx)("div", {
          className: de.Secondary,
          children: e.email
        })]
      }),
      a
    ]
  });
}
function o_({ group: e, children: a }) {
  const { formatMessage: r } = Xe();
  return /* @__PURE__ */ (0, y.jsxs)("div", {
    className: de.Person,
    children: [
      /* @__PURE__ */ (0, y.jsx)(Ju, {
        size: 32,
        Icon: e_,
        className: de.GroupAvatar
      }),
      /* @__PURE__ */ (0, y.jsxs)("div", {
        className: de.Identity,
        children: [e.name, /* @__PURE__ */ (0, y.jsx)("div", {
          className: de.Secondary,
          children: r(ie.members, { count: e.size })
        })]
      }),
      a
    ]
  });
}
function Ld({ role: e }) {
  const { formatMessage: a } = Xe();
  return /* @__PURE__ */ (0, y.jsx)("span", {
    className: de.ReadOnlyRole,
    children: a(ie[e ?? "viewer"])
  });
}
function hR() {
  if (window.self === window.top) return;
  const e = new URLSearchParams(location.search).get("site_origin"), a = document.body.dataset.chatgptOrigin;
  if (!e || !["https://chatgpt.com", "https://chatgpt-staging.com"].includes(a ?? "")) return;
  const r = new URLSearchParams(location.hash.slice(1)), l = Nd({
    kind: "sites-toolbar",
    toolbarOrigin: location.origin,
    chatgptOrigin: a,
    accountId: r.get("account_id") || null,
    locale: r.get("locale") || navigator.language,
    projectId: null,
    projectTitle: null
  }, () => /* @__PURE__ */ (0, y.jsx)(XM, { siteOrigin: e }), { isolatedDocument: !0 });
  l.ready.catch(l.dispose);
}
function mR(e) {
  if (e.kind === "preview-annotations") return;
  try {
    if (window.self !== window.top) return;
  } catch {
    return;
  }
  if (Ew(navigator.userAgent) || Rd()) return;
  if (Qd()) {
    if (e.mobileEnabled !== !0) return;
    e.kind !== "sites-toolbar" && (e = {
      ...e,
      kind: "editor-composer"
    });
  }
  const a = e.projectTitle?.trim() || document.title.trim() || window.location.hostname, r = m3();
  if (e.kind === "sites-toolbar") {
    const l = UO(), u = Nd(e, () => /* @__PURE__ */ (0, y.jsx)(jO, {
      context: e,
      store: l,
      siteTitle: a
    }));
    u.ready.catch(u.dispose), r.then((c) => {
      if (e.currentUserRole === "viewer" && c.remix_enabled === !1) {
        u.dispose();
        return;
      }
      l.getState().actions.setConfig(c);
    }, u.dispose);
    return;
  }
  r.then((l) => {
    const u = Nd(e, ({ onDismiss: c }) => e.kind === "editor-composer" ? /* @__PURE__ */ (0, y.jsx)(Qb, {
      accountId: e.accountId,
      chatgptOrigin: e.chatgptOrigin,
      projectId: e.projectId,
      siteTitle: a,
      config: l
    }) : /* @__PURE__ */ (0, y.jsx)(k8, {
      accountId: e.accountId,
      chatgptOrigin: e.chatgptOrigin,
      ownerName: e.ownerName,
      projectId: e.projectId,
      siteTitle: a,
      editContext: l.edit_context,
      onDismiss: c
    }));
    u.ready.catch(u.dispose);
  }).catch(() => {
  });
}
export {
  mR as mountSiteWidget,
  hR as mountSitesToolbarFrame
};
