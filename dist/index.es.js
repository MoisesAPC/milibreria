var $i = Object.defineProperty;
var Pi = (e, t, r) => t in e ? $i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ot = (e, t, r) => Pi(e, typeof t != "symbol" ? t + "" : t, r);
import * as I from "react";
import st, { forwardRef as _i, useContext as ki, Children as Ai, isValidElement as er, cloneElement as tr } from "react";
function Mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ur = { exports: {} }, $t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Ii() {
  if (kn) return $t;
  kn = 1;
  var e = st, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, f, d) {
    var p, h = {}, y = null, C = null;
    d !== void 0 && (y = "" + d), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (p in f) n.call(f, p) && !i.hasOwnProperty(p) && (h[p] = f[p]);
    if (s && s.defaultProps) for (p in f = s.defaultProps, f) h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: t, type: s, key: y, ref: C, props: h, _owner: o.current };
  }
  return $t.Fragment = r, $t.jsx = a, $t.jsxs = a, $t;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function ji() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    var e = st, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = Symbol.iterator, g = "@@iterator";
    function m(u) {
      if (u === null || typeof u != "object")
        return null;
      var T = v && u[v] || u[g];
      return typeof T == "function" ? T : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(u) {
      {
        for (var T = arguments.length, k = new Array(T > 1 ? T - 1 : 0), F = 1; F < T; F++)
          k[F - 1] = arguments[F];
        R("error", u, k);
      }
    }
    function R(u, T, k) {
      {
        var F = x.ReactDebugCurrentFrame, ne = F.getStackAddendum();
        ne !== "" && (T += "%s", k = k.concat([ne]));
        var ue = k.map(function(Z) {
          return String(Z);
        });
        ue.unshift("Warning: " + T), Function.prototype.apply.call(console[u], console, ue);
      }
    }
    var E = !1, b = !1, M = !1, A = !1, ee = !1, Q;
    Q = Symbol.for("react.module.reference");
    function c(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || ee || u === o || u === d || u === p || A || u === C || E || b || M || typeof u == "object" && u !== null && (u.$$typeof === y || u.$$typeof === h || u.$$typeof === a || u.$$typeof === s || u.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === Q || u.getModuleId !== void 0));
    }
    function P(u, T, k) {
      var F = u.displayName;
      if (F)
        return F;
      var ne = T.displayName || T.name || "";
      return ne !== "" ? k + "(" + ne + ")" : k;
    }
    function N(u) {
      return u.displayName || "Context";
    }
    function D(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var T = u;
            return N(T) + ".Consumer";
          case a:
            var k = u;
            return N(k._context) + ".Provider";
          case f:
            return P(u, u.render, "ForwardRef");
          case h:
            var F = u.displayName || null;
            return F !== null ? F : D(u.type) || "Memo";
          case y: {
            var ne = u, ue = ne._payload, Z = ne._init;
            try {
              return D(Z(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, le = 0, ce, ye, Te, we, w, O, z;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function B() {
      {
        if (le === 0) {
          ce = console.log, ye = console.info, Te = console.warn, we = console.error, w = console.group, O = console.groupCollapsed, z = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        le++;
      }
    }
    function K() {
      {
        if (le--, le === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, u, {
              value: ce
            }),
            info: q({}, u, {
              value: ye
            }),
            warn: q({}, u, {
              value: Te
            }),
            error: q({}, u, {
              value: we
            }),
            group: q({}, u, {
              value: w
            }),
            groupCollapsed: q({}, u, {
              value: O
            }),
            groupEnd: q({}, u, {
              value: z
            })
          });
        }
        le < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = x.ReactCurrentDispatcher, L;
    function H(u, T, k) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ne) {
            var F = ne.stack.trim().match(/\n( *(at )?)/);
            L = F && F[1] || "";
          }
        return `
` + L + u;
      }
    }
    var X = !1, G;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Se();
    }
    function $(u, T) {
      if (!u || X)
        return "";
      {
        var k = G.get(u);
        if (k !== void 0)
          return k;
      }
      var F;
      X = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = V.current, V.current = null, B();
      try {
        if (T) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Ae) {
              F = Ae;
            }
            Reflect.construct(u, [], Z);
          } else {
            try {
              Z.call();
            } catch (Ae) {
              F = Ae;
            }
            u.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            F = Ae;
          }
          u();
        }
      } catch (Ae) {
        if (Ae && F && typeof Ae.stack == "string") {
          for (var J = Ae.stack.split(`
`), ke = F.stack.split(`
`), be = J.length - 1, Ce = ke.length - 1; be >= 1 && Ce >= 0 && J[be] !== ke[Ce]; )
            Ce--;
          for (; be >= 1 && Ce >= 0; be--, Ce--)
            if (J[be] !== ke[Ce]) {
              if (be !== 1 || Ce !== 1)
                do
                  if (be--, Ce--, Ce < 0 || J[be] !== ke[Ce]) {
                    var De = `
` + J[be].replace(" at new ", " at ");
                    return u.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", u.displayName)), typeof u == "function" && G.set(u, De), De;
                  }
                while (be >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        X = !1, V.current = ue, K(), Error.prepareStackTrace = ne;
      }
      var ft = u ? u.displayName || u.name : "", at = ft ? H(ft) : "";
      return typeof u == "function" && G.set(u, at), at;
    }
    function $e(u, T, k) {
      return $(u, !1);
    }
    function j(u) {
      var T = u.prototype;
      return !!(T && T.isReactComponent);
    }
    function _e(u, T, k) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return $(u, j(u));
      if (typeof u == "string")
        return H(u);
      switch (u) {
        case d:
          return H("Suspense");
        case p:
          return H("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case f:
            return $e(u.render);
          case h:
            return _e(u.type, T, k);
          case y: {
            var F = u, ne = F._payload, ue = F._init;
            try {
              return _e(ue(ne), T, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, ot = {}, it = x.ReactDebugCurrentFrame;
    function Ye(u) {
      if (u) {
        var T = u._owner, k = _e(u.type, u._source, T ? T.type : null);
        it.setExtraStackFrame(k);
      } else
        it.setExtraStackFrame(null);
    }
    function Or(u, T, k, F, ne) {
      {
        var ue = Function.call.bind(Be);
        for (var Z in u)
          if (ue(u, Z)) {
            var J = void 0;
            try {
              if (typeof u[Z] != "function") {
                var ke = Error((F || "React class") + ": " + k + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              J = u[Z](T, Z, F, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              J = be;
            }
            J && !(J instanceof Error) && (Ye(ne), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", k, Z, typeof J), Ye(null)), J instanceof Error && !(J.message in ot) && (ot[J.message] = !0, Ye(ne), _("Failed %s type: %s", k, J.message), Ye(null));
          }
      }
    }
    var qt = Array.isArray;
    function wt(u) {
      return qt(u);
    }
    function Y(u) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, k = T && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return k;
      }
    }
    function Ht(u) {
      try {
        return Gt(u), !1;
      } catch {
        return !0;
      }
    }
    function Gt(u) {
      return "" + u;
    }
    function Rt(u) {
      if (Ht(u))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Y(u)), Gt(u);
    }
    var lt = x.ReactCurrentOwner, ui = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xn, En, $r;
    $r = {};
    function fi(u) {
      if (Be.call(u, "ref")) {
        var T = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function di(u) {
      if (Be.call(u, "key")) {
        var T = Object.getOwnPropertyDescriptor(u, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function pi(u, T) {
      if (typeof u.ref == "string" && lt.current && T && lt.current.stateNode !== T) {
        var k = D(lt.current.type);
        $r[k] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(lt.current.type), u.ref), $r[k] = !0);
      }
    }
    function hi(u, T) {
      {
        var k = function() {
          xn || (xn = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        k.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function mi(u, T) {
      {
        var k = function() {
          En || (En = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        k.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var gi = function(u, T, k, F, ne, ue, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: T,
        ref: k,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function yi(u, T, k, F, ne) {
      {
        var ue, Z = {}, J = null, ke = null;
        k !== void 0 && (Rt(k), J = "" + k), di(T) && (Rt(T.key), J = "" + T.key), fi(T) && (ke = T.ref, pi(T, ne));
        for (ue in T)
          Be.call(T, ue) && !ui.hasOwnProperty(ue) && (Z[ue] = T[ue]);
        if (u && u.defaultProps) {
          var be = u.defaultProps;
          for (ue in be)
            Z[ue] === void 0 && (Z[ue] = be[ue]);
        }
        if (J || ke) {
          var Ce = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          J && hi(Z, Ce), ke && mi(Z, Ce);
        }
        return gi(u, J, ke, ne, F, lt.current, Z);
      }
    }
    var Pr = x.ReactCurrentOwner, Tn = x.ReactDebugCurrentFrame;
    function ut(u) {
      if (u) {
        var T = u._owner, k = _e(u.type, u._source, T ? T.type : null);
        Tn.setExtraStackFrame(k);
      } else
        Tn.setExtraStackFrame(null);
    }
    var _r;
    _r = !1;
    function kr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function wn() {
      {
        if (Pr.current) {
          var u = D(Pr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function bi(u) {
      return "";
    }
    var Rn = {};
    function vi(u) {
      {
        var T = wn();
        if (!T) {
          var k = typeof u == "string" ? u : u.displayName || u.name;
          k && (T = `

Check the top-level render call using <` + k + ">.");
        }
        return T;
      }
    }
    function On(u, T) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var k = vi(T);
        if (Rn[k])
          return;
        Rn[k] = !0;
        var F = "";
        u && u._owner && u._owner !== Pr.current && (F = " It was passed a child from " + D(u._owner.type) + "."), ut(u), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, F), ut(null);
      }
    }
    function $n(u, T) {
      {
        if (typeof u != "object")
          return;
        if (wt(u))
          for (var k = 0; k < u.length; k++) {
            var F = u[k];
            kr(F) && On(F, T);
          }
        else if (kr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var ne = m(u);
          if (typeof ne == "function" && ne !== u.entries)
            for (var ue = ne.call(u), Z; !(Z = ue.next()).done; )
              kr(Z.value) && On(Z.value, T);
        }
      }
    }
    function Si(u) {
      {
        var T = u.type;
        if (T == null || typeof T == "string")
          return;
        var k;
        if (typeof T == "function")
          k = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          k = T.propTypes;
        else
          return;
        if (k) {
          var F = D(T);
          Or(k, u.props, "prop", F, u);
        } else if (T.PropTypes !== void 0 && !_r) {
          _r = !0;
          var ne = D(T);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ci(u) {
      {
        for (var T = Object.keys(u.props), k = 0; k < T.length; k++) {
          var F = T[k];
          if (F !== "children" && F !== "key") {
            ut(u), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), ut(null);
            break;
          }
        }
        u.ref !== null && (ut(u), _("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
      }
    }
    var Pn = {};
    function _n(u, T, k, F, ne, ue) {
      {
        var Z = c(u);
        if (!Z) {
          var J = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = bi();
          ke ? J += ke : J += wn();
          var be;
          u === null ? be = "null" : wt(u) ? be = "array" : u !== void 0 && u.$$typeof === t ? (be = "<" + (D(u.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : be = typeof u, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, J);
        }
        var Ce = yi(u, T, k, ne, ue);
        if (Ce == null)
          return Ce;
        if (Z) {
          var De = T.children;
          if (De !== void 0)
            if (F)
              if (wt(De)) {
                for (var ft = 0; ft < De.length; ft++)
                  $n(De[ft], u);
                Object.freeze && Object.freeze(De);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $n(De, u);
        }
        if (Be.call(T, "key")) {
          var at = D(u), Ae = Object.keys(T).filter(function(Oi) {
            return Oi !== "key";
          }), Ar = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pn[at + Ar]) {
            var Ri = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ar, at, Ri, at), Pn[at + Ar] = !0;
          }
        }
        return u === n ? Ci(Ce) : Si(Ce), Ce;
      }
    }
    function xi(u, T, k) {
      return _n(u, T, k, !0);
    }
    function Ei(u, T, k) {
      return _n(u, T, k, !1);
    }
    var Ti = Ei, wi = xi;
    Pt.Fragment = n, Pt.jsx = Ti, Pt.jsxs = wi;
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Ur.exports = Ii() : Ur.exports = ji();
var W = Ur.exports, Yr = { exports: {} }, Kt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Ni() {
  if (Mn) return oe;
  Mn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function R(b) {
    if (typeof b == "object" && b !== null) {
      var M = b.$$typeof;
      switch (M) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case p:
                case v:
                case C:
                case a:
                  return b;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function E(b) {
    return R(b) === d;
  }
  return oe.AsyncMode = f, oe.ConcurrentMode = d, oe.ContextConsumer = s, oe.ContextProvider = a, oe.Element = t, oe.ForwardRef = p, oe.Fragment = n, oe.Lazy = v, oe.Memo = C, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = h, oe.isAsyncMode = function(b) {
    return E(b) || R(b) === f;
  }, oe.isConcurrentMode = E, oe.isContextConsumer = function(b) {
    return R(b) === s;
  }, oe.isContextProvider = function(b) {
    return R(b) === a;
  }, oe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, oe.isForwardRef = function(b) {
    return R(b) === p;
  }, oe.isFragment = function(b) {
    return R(b) === n;
  }, oe.isLazy = function(b) {
    return R(b) === v;
  }, oe.isMemo = function(b) {
    return R(b) === C;
  }, oe.isPortal = function(b) {
    return R(b) === r;
  }, oe.isProfiler = function(b) {
    return R(b) === i;
  }, oe.isStrictMode = function(b) {
    return R(b) === o;
  }, oe.isSuspense = function(b) {
    return R(b) === h;
  }, oe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === h || b === y || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === C || b.$$typeof === a || b.$$typeof === s || b.$$typeof === p || b.$$typeof === m || b.$$typeof === x || b.$$typeof === _ || b.$$typeof === g);
  }, oe.typeOf = R, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function Bi() {
  return In || (In = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function R($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === i || $ === o || $ === h || $ === y || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === C || $.$$typeof === a || $.$$typeof === s || $.$$typeof === p || $.$$typeof === m || $.$$typeof === x || $.$$typeof === _ || $.$$typeof === g);
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var $e = $.$$typeof;
        switch ($e) {
          case t:
            var j = $.type;
            switch (j) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case h:
                return j;
              default:
                var _e = j && j.$$typeof;
                switch (_e) {
                  case s:
                  case p:
                  case v:
                  case C:
                  case a:
                    return _e;
                  default:
                    return $e;
                }
            }
          case r:
            return $e;
        }
      }
    }
    var b = f, M = d, A = s, ee = a, Q = t, c = p, P = n, N = v, D = C, q = r, le = i, ce = o, ye = h, Te = !1;
    function we($) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w($) || E($) === f;
    }
    function w($) {
      return E($) === d;
    }
    function O($) {
      return E($) === s;
    }
    function z($) {
      return E($) === a;
    }
    function U($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function B($) {
      return E($) === p;
    }
    function K($) {
      return E($) === n;
    }
    function V($) {
      return E($) === v;
    }
    function L($) {
      return E($) === C;
    }
    function H($) {
      return E($) === r;
    }
    function X($) {
      return E($) === i;
    }
    function G($) {
      return E($) === o;
    }
    function Se($) {
      return E($) === h;
    }
    ie.AsyncMode = b, ie.ConcurrentMode = M, ie.ContextConsumer = A, ie.ContextProvider = ee, ie.Element = Q, ie.ForwardRef = c, ie.Fragment = P, ie.Lazy = N, ie.Memo = D, ie.Portal = q, ie.Profiler = le, ie.StrictMode = ce, ie.Suspense = ye, ie.isAsyncMode = we, ie.isConcurrentMode = w, ie.isContextConsumer = O, ie.isContextProvider = z, ie.isElement = U, ie.isForwardRef = B, ie.isFragment = K, ie.isLazy = V, ie.isMemo = L, ie.isPortal = H, ie.isProfiler = X, ie.isStrictMode = G, ie.isSuspense = Se, ie.isValidElementType = R, ie.typeOf = E;
  }()), ie;
}
var jn;
function rn() {
  return jn || (jn = 1, process.env.NODE_ENV === "production" ? Kt.exports = Ni() : Kt.exports = Bi()), Kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mr, Nn;
function Di() {
  if (Nn) return Mr;
  Nn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Mr = o() ? Object.assign : function(i, a) {
    for (var s, f = n(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        d = e(s);
        for (var y = 0; y < d.length; y++)
          r.call(s, d[y]) && (f[d[y]] = s[d[y]]);
      }
    }
    return f;
  }, Mr;
}
var Ir, Bn;
function nn() {
  if (Bn) return Ir;
  Bn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ir = e, Ir;
}
var jr, Dn;
function Co() {
  return Dn || (Dn = 1, jr = Function.call.bind(Object.prototype.hasOwnProperty)), jr;
}
var Nr, Fn;
function Fi() {
  if (Fn) return Nr;
  Fn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = nn(), r = {}, n = Co();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (f || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[p](a, p, f, s, null, t);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + s + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Nr = o, Nr;
}
var Br, zn;
function zi() {
  if (zn) return Br;
  zn = 1;
  var e = rn(), t = Di(), r = nn(), n = Co(), o = Fi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Br = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(w) {
      var O = w && (d && w[d] || w[p]);
      if (typeof O == "function")
        return O;
    }
    var y = "<<anonymous>>", C = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: _(),
      arrayOf: R,
      element: E(),
      elementType: b(),
      instanceOf: M,
      node: c(),
      objectOf: ee,
      oneOf: A,
      oneOfType: Q,
      shape: N,
      exact: D
    };
    function v(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function g(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, z = 0;
      function U(K, V, L, H, X, G, Se) {
        if (H = H || y, G = G || L, Se !== r) {
          if (f) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var $e = H + ":" + L;
            !O[$e] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[$e] = !0, z++);
          }
        }
        return V[L] == null ? K ? V[L] === null ? new g("The " + X + " `" + G + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new g("The " + X + " `" + G + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : w(V, L, H, X, G);
      }
      var B = U.bind(null, !1);
      return B.isRequired = U.bind(null, !0), B;
    }
    function x(w) {
      function O(z, U, B, K, V, L) {
        var H = z[U], X = ce(H);
        if (X !== w) {
          var G = ye(H);
          return new g(
            "Invalid " + K + " `" + V + "` of type " + ("`" + G + "` supplied to `" + B + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return m(O);
    }
    function _() {
      return m(a);
    }
    function R(w) {
      function O(z, U, B, K, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var L = z[U];
        if (!Array.isArray(L)) {
          var H = ce(L);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected an array."));
        }
        for (var X = 0; X < L.length; X++) {
          var G = w(L, X, B, K, V + "[" + X + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m(O);
    }
    function E() {
      function w(O, z, U, B, K) {
        var V = O[z];
        if (!s(V)) {
          var L = ce(V);
          return new g("Invalid " + B + " `" + K + "` of type " + ("`" + L + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(w);
    }
    function b() {
      function w(O, z, U, B, K) {
        var V = O[z];
        if (!e.isValidElementType(V)) {
          var L = ce(V);
          return new g("Invalid " + B + " `" + K + "` of type " + ("`" + L + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(w);
    }
    function M(w) {
      function O(z, U, B, K, V) {
        if (!(z[U] instanceof w)) {
          var L = w.name || y, H = we(z[U]);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m(O);
    }
    function A(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(z, U, B, K, V) {
        for (var L = z[U], H = 0; H < w.length; H++)
          if (v(L, w[H]))
            return null;
        var X = JSON.stringify(w, function(Se, $) {
          var $e = ye($);
          return $e === "symbol" ? String($) : $;
        });
        return new g("Invalid " + K + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + B + "`, expected one of " + X + "."));
      }
      return m(O);
    }
    function ee(w) {
      function O(z, U, B, K, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var L = z[U], H = ce(L);
        if (H !== "object")
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected an object."));
        for (var X in L)
          if (n(L, X)) {
            var G = w(L, X, B, K, V + "." + X, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m(O);
    }
    function Q(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < w.length; O++) {
        var z = w[O];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Te(z) + " at index " + O + "."
          ), a;
      }
      function U(B, K, V, L, H) {
        for (var X = [], G = 0; G < w.length; G++) {
          var Se = w[G], $ = Se(B, K, V, L, H, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && X.push($.data.expectedType);
        }
        var $e = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + L + " `" + H + "` supplied to " + ("`" + V + "`" + $e + "."));
      }
      return m(U);
    }
    function c() {
      function w(O, z, U, B, K) {
        return q(O[z]) ? null : new g("Invalid " + B + " `" + K + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return m(w);
    }
    function P(w, O, z, U, B) {
      return new g(
        (w || "React class") + ": " + O + " type `" + z + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function N(w) {
      function O(z, U, B, K, V) {
        var L = z[U], H = ce(L);
        if (H !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + H + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var X in w) {
          var G = w[X];
          if (typeof G != "function")
            return P(B, K, V, X, ye(G));
          var Se = G(L, X, B, K, V + "." + X, r);
          if (Se)
            return Se;
        }
        return null;
      }
      return m(O);
    }
    function D(w) {
      function O(z, U, B, K, V) {
        var L = z[U], H = ce(L);
        if (H !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + H + "` " + ("supplied to `" + B + "`, expected `object`."));
        var X = t({}, z[U], w);
        for (var G in X) {
          var Se = w[G];
          if (n(w, G) && typeof Se != "function")
            return P(B, K, V, G, ye(Se));
          if (!Se)
            return new g(
              "Invalid " + K + " `" + V + "` key `" + G + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(z[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var $ = Se(L, G, B, K, V + "." + G, r);
          if ($)
            return $;
        }
        return null;
      }
      return m(O);
    }
    function q(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(q);
          if (w === null || s(w))
            return !0;
          var O = h(w);
          if (O) {
            var z = O.call(w), U;
            if (O !== w.entries) {
              for (; !(U = z.next()).done; )
                if (!q(U.value))
                  return !1;
            } else
              for (; !(U = z.next()).done; ) {
                var B = U.value;
                if (B && !q(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ce(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : le(O, w) ? "symbol" : O;
    }
    function ye(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = ce(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function Te(w) {
      var O = ye(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function we(w) {
      return !w.constructor || !w.constructor.name ? y : w.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, Br;
}
var Dr, Vn;
function Vi() {
  if (Vn) return Dr;
  Vn = 1;
  var e = nn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Dr = function() {
    function n(a, s, f, d, p, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Dr;
}
if (process.env.NODE_ENV !== "production") {
  var Li = rn(), Wi = !0;
  Yr.exports = zi()(Li.isElement, Wi);
} else
  Yr.exports = Vi()();
var Ui = Yr.exports;
const l = /* @__PURE__ */ Mi(Ui);
function xo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = xo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function xe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = xo(e)) && (n && (n += " "), n += t);
  return n;
}
function ar(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const f = s;
              r[o][f] = ar(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Qe(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (s === !0 ? "" : " ") + t(d), s = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function tt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Yi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function on(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Yi(e, t, r);
}
function qi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function rt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return rt(qi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : tt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : tt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Hi = (e) => {
  const t = rt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, At = (e, t) => {
  try {
    return Hi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function pr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Eo(e) {
  e = rt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let s = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", f.push(t[3])), pr({
    type: s,
    values: f
  });
}
function qr(e) {
  e = rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? rt(Eo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ln(e, t) {
  const r = qr(e), n = qr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ke(e, t) {
  return e = rt(e), t = on(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, pr(e);
}
function Xt(e, t, r) {
  try {
    return Ke(e, t);
  } catch {
    return e;
  }
}
function an(e, t) {
  if (e = rt(e), t = on(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return pr(e);
}
function fe(e, t, r) {
  try {
    return an(e, t);
  } catch {
    return e;
  }
}
function sn(e, t) {
  if (e = rt(e), t = on(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return pr(e);
}
function de(e, t, r) {
  try {
    return sn(e, t);
  } catch {
    return e;
  }
}
function Gi(e, t = 0.15) {
  return qr(e) > 0.5 ? an(e, t) : sn(e, t);
}
function Jt(e, t, r) {
  try {
    return Gi(e, t);
  } catch {
    return e;
  }
}
function Ki(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const To = (e) => Ki(e) && e !== "classes";
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function wo(e) {
  if (!Xe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = wo(e[r]);
  }), t;
}
function je(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Xe(e) && Xe(t) && Object.keys(t).forEach((o) => {
    Xe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xe(e[o]) ? n[o] = je(e[o], t[o], r) : r.clone ? n[o] = Xe(t[o]) ? wo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function It(e, t) {
  return t ? je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const nt = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function Xi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Ji(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Qi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : tt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Zi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const f = t(e.breakpoints.not(...s), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const hr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Wn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${hr[e]}px)`
}, ea = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : hr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function et(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Wn;
    return t.reduce((a, s, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Wn;
    return Object.keys(t).reduce((a, s) => {
      if (Ji(i.keys, s)) {
        const f = Qi(n.containerQueries ? n : ea, s);
        f && (a[f] = r(t[s], s));
      } else if (Object.keys(i.values || hr).includes(s)) {
        const f = i.up(s);
        a[f] = r(t[s], s);
      } else {
        const f = s;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function ta(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ra(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function mr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function sr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = mr(e, r) || n, t && (o = t(o, n, e)), o;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], f = a.theme, d = mr(f, n) || {};
    return et(a, s, (h) => {
      let y = sr(d, o, h);
      return h === y && typeof h == "string" && (y = sr(d, o, `${t}${h === "default" ? "" : pe(h)}`, h)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: nt
  } : {}, i.filterProps = [t], i;
}
function na(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const oa = {
  m: "margin",
  p: "padding"
}, ia = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Un = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, aa = na((e) => {
  if (e.length > 2)
    if (Un[e])
      e = Un[e];
    else
      return [e];
  const [t, r] = e.split(""), n = oa[t], o = ia[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), gr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], yr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], sa = [...gr, ...yr];
function Vt(e, t, r, n) {
  const o = mr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function cn(e) {
  return Vt(e, "spacing", 8, "spacing");
}
function Lt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ca(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Lt(t, r), n), {});
}
function la(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = aa(r), i = ca(o, n), a = e[r];
  return et(e, a, i);
}
function Ro(e, t) {
  const r = cn(e.theme);
  return Object.keys(e).map((n) => la(e, t, n, r)).reduce(It, {});
}
function me(e) {
  return Ro(e, gr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? gr.reduce((e, t) => (e[t] = nt, e), {}) : {};
me.filterProps = gr;
function ge(e) {
  return Ro(e, yr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? yr.reduce((e, t) => (e[t] = nt, e), {}) : {};
ge.filterProps = yr;
process.env.NODE_ENV !== "production" && sa.reduce((e, t) => (e[t] = nt, e), {});
function br(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? It(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ze(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ua = Ve("border", ze), fa = Ve("borderTop", ze), da = Ve("borderRight", ze), pa = Ve("borderBottom", ze), ha = Ve("borderLeft", ze), ma = Ve("borderColor"), ga = Ve("borderTopColor"), ya = Ve("borderRightColor"), ba = Ve("borderBottomColor"), va = Ve("borderLeftColor"), Sa = Ve("outline", ze), Ca = Ve("outlineColor"), vr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Vt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Lt(t, n)
    });
    return et(e, e.borderRadius, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: nt
} : {};
vr.filterProps = ["borderRadius"];
br(ua, fa, da, pa, ha, ma, ga, ya, ba, va, vr, Sa, Ca);
const Sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Lt(t, n)
    });
    return et(e, e.gap, r);
  }
  return null;
};
Sr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: nt
} : {};
Sr.filterProps = ["gap"];
const Cr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Lt(t, n)
    });
    return et(e, e.columnGap, r);
  }
  return null;
};
Cr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: nt
} : {};
Cr.filterProps = ["columnGap"];
const xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Lt(t, n)
    });
    return et(e, e.rowGap, r);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: nt
} : {};
xr.filterProps = ["rowGap"];
const xa = ve({
  prop: "gridColumn"
}), Ea = ve({
  prop: "gridRow"
}), Ta = ve({
  prop: "gridAutoFlow"
}), wa = ve({
  prop: "gridAutoColumns"
}), Ra = ve({
  prop: "gridAutoRows"
}), Oa = ve({
  prop: "gridTemplateColumns"
}), $a = ve({
  prop: "gridTemplateRows"
}), Pa = ve({
  prop: "gridTemplateAreas"
}), _a = ve({
  prop: "gridArea"
});
br(Sr, Cr, xr, xa, Ea, Ta, wa, Ra, Oa, $a, Pa, _a);
function vt(e, t) {
  return t === "grey" ? t : e;
}
const ka = ve({
  prop: "color",
  themeKey: "palette",
  transform: vt
}), Aa = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: vt
}), Ma = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: vt
});
br(ka, Aa, Ma);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ia = ve({
  prop: "width",
  transform: Ie
}), ln = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || hr[r];
      return n ? ((f = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ie(r)
      };
    };
    return et(e, e.maxWidth, t);
  }
  return null;
};
ln.filterProps = ["maxWidth"];
const ja = ve({
  prop: "minWidth",
  transform: Ie
}), Na = ve({
  prop: "height",
  transform: Ie
}), Ba = ve({
  prop: "maxHeight",
  transform: Ie
}), Da = ve({
  prop: "minHeight",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const Fa = ve({
  prop: "boxSizing"
});
br(Ia, ln, ja, Na, Ba, Da, Fa);
const Wt = {
  // borders
  border: {
    themeKey: "borders",
    transform: ze
  },
  borderTop: {
    themeKey: "borders",
    transform: ze
  },
  borderRight: {
    themeKey: "borders",
    transform: ze
  },
  borderBottom: {
    themeKey: "borders",
    transform: ze
  },
  borderLeft: {
    themeKey: "borders",
    transform: ze
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ze
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: vt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: vt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: vt
  },
  // spacing
  p: {
    style: ge
  },
  pt: {
    style: ge
  },
  pr: {
    style: ge
  },
  pb: {
    style: ge
  },
  pl: {
    style: ge
  },
  px: {
    style: ge
  },
  py: {
    style: ge
  },
  padding: {
    style: ge
  },
  paddingTop: {
    style: ge
  },
  paddingRight: {
    style: ge
  },
  paddingBottom: {
    style: ge
  },
  paddingLeft: {
    style: ge
  },
  paddingX: {
    style: ge
  },
  paddingY: {
    style: ge
  },
  paddingInline: {
    style: ge
  },
  paddingInlineStart: {
    style: ge
  },
  paddingInlineEnd: {
    style: ge
  },
  paddingBlock: {
    style: ge
  },
  paddingBlockStart: {
    style: ge
  },
  paddingBlockEnd: {
    style: ge
  },
  m: {
    style: me
  },
  mt: {
    style: me
  },
  mr: {
    style: me
  },
  mb: {
    style: me
  },
  ml: {
    style: me
  },
  mx: {
    style: me
  },
  my: {
    style: me
  },
  margin: {
    style: me
  },
  marginTop: {
    style: me
  },
  marginRight: {
    style: me
  },
  marginBottom: {
    style: me
  },
  marginLeft: {
    style: me
  },
  marginX: {
    style: me
  },
  marginY: {
    style: me
  },
  marginInline: {
    style: me
  },
  marginInlineStart: {
    style: me
  },
  marginInlineEnd: {
    style: me
  },
  marginBlock: {
    style: me
  },
  marginBlockStart: {
    style: me
  },
  marginBlockEnd: {
    style: me
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Sr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: Cr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ie
  },
  maxWidth: {
    style: ln
  },
  minWidth: {
    transform: Ie
  },
  height: {
    transform: Ie
  },
  maxHeight: {
    transform: Ie
  },
  minHeight: {
    transform: Ie
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function za(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Va(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function La() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: p,
      style: h
    } = s;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = mr(o, d) || {};
    return h ? h(a) : et(a, n, (v) => {
      let g = sr(y, p, v);
      return v === g && typeof v == "string" && (g = sr(y, p, `${r}${v === "default" ? "" : pe(v)}`, v)), f === !1 ? g : {
        [f]: g
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Wt;
    function a(s) {
      let f = s;
      if (typeof s == "function")
        f = s(o);
      else if (typeof s != "object")
        return s;
      if (!f)
        return null;
      const d = ta(o.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(f).forEach((y) => {
        const C = Va(f[y], o);
        if (C != null)
          if (typeof C == "object")
            if (i[y])
              h = It(h, e(y, C, o, i));
            else {
              const v = et({
                theme: o
              }, C, (g) => ({
                [y]: g
              }));
              za(v, C) ? h[y] = t({
                sx: C,
                theme: o
              }) : h = It(h, v);
            }
          else
            h = It(h, e(y, C, o, i));
      }), Xi(o, ra(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Ct = La();
Ct.filterProps = ["sx"];
const Wa = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Wt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Ua(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Wa(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return Xe(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cr.apply(null, arguments);
}
function Oo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ya = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qa = /* @__PURE__ */ Oo(
  function(e) {
    return Ya.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ha = !1;
function Ga(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ka(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Xa = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ha : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ka(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ga(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Pe = "-ms-", lr = "-moz-", te = "-webkit-", $o = "comm", un = "rule", fn = "decl", Ja = "@import", Po = "@keyframes", Qa = "@layer", Za = Math.abs, Er = String.fromCharCode, es = Object.assign;
function ts(e, t) {
  return Re(e, 0) ^ 45 ? (((t << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0;
}
function _o(e) {
  return e.trim();
}
function rs(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, r) {
  return e.replace(t, r);
}
function Hr(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function jt(e, t, r) {
  return e.slice(t, r);
}
function He(e) {
  return e.length;
}
function dn(e) {
  return e.length;
}
function Qt(e, t) {
  return t.push(e), e;
}
function ns(e, t) {
  return e.map(t).join("");
}
var Tr = 1, xt = 1, ko = 0, Me = 0, Ee = 0, Tt = "";
function wr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Tr, column: xt, length: a, return: "" };
}
function _t(e, t) {
  return es(wr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function os() {
  return Ee;
}
function is() {
  return Ee = Me > 0 ? Re(Tt, --Me) : 0, xt--, Ee === 10 && (xt = 1, Tr--), Ee;
}
function Ne() {
  return Ee = Me < ko ? Re(Tt, Me++) : 0, xt++, Ee === 10 && (xt = 1, Tr++), Ee;
}
function Je() {
  return Re(Tt, Me);
}
function rr() {
  return Me;
}
function Ut(e, t) {
  return jt(Tt, e, t);
}
function Nt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ao(e) {
  return Tr = xt = 1, ko = He(Tt = e), Me = 0, [];
}
function Mo(e) {
  return Tt = "", e;
}
function nr(e) {
  return _o(Ut(Me - 1, Gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function as(e) {
  for (; (Ee = Je()) && Ee < 33; )
    Ne();
  return Nt(e) > 2 || Nt(Ee) > 3 ? "" : " ";
}
function ss(e, t) {
  for (; --t && Ne() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97); )
    ;
  return Ut(e, rr() + (t < 6 && Je() == 32 && Ne() == 32));
}
function Gr(e) {
  for (; Ne(); )
    switch (Ee) {
      case e:
        return Me;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gr(Ee);
        break;
      case 40:
        e === 41 && Gr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Me;
}
function cs(e, t) {
  for (; Ne() && e + Ee !== 57; )
    if (e + Ee === 84 && Je() === 47)
      break;
  return "/*" + Ut(t, Me - 1) + "*" + Er(e === 47 ? e : Ne());
}
function ls(e) {
  for (; !Nt(Je()); )
    Ne();
  return Ut(e, Me);
}
function us(e) {
  return Mo(or("", null, null, null, [""], e = Ao(e), 0, [0], e));
}
function or(e, t, r, n, o, i, a, s, f) {
  for (var d = 0, p = 0, h = a, y = 0, C = 0, v = 0, g = 1, m = 1, x = 1, _ = 0, R = "", E = o, b = i, M = n, A = R; m; )
    switch (v = _, _ = Ne()) {
      case 40:
        if (v != 108 && Re(A, h - 1) == 58) {
          Hr(A += re(nr(_), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += nr(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += as(v);
        break;
      case 92:
        A += ss(rr() - 1, 7);
        continue;
      case 47:
        switch (Je()) {
          case 42:
          case 47:
            Qt(fs(cs(Ne(), rr()), t, r), f);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * g:
        s[d++] = He(A) * x;
      case 125 * g:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            m = 0;
          case 59 + p:
            x == -1 && (A = re(A, /\f/g, "")), C > 0 && He(A) - h && Qt(C > 32 ? qn(A + ";", n, r, h - 1) : qn(re(A, " ", "") + ";", n, r, h - 2), f);
            break;
          case 59:
            A += ";";
          default:
            if (Qt(M = Yn(A, t, r, d, p, o, s, R, E = [], b = [], h), i), _ === 123)
              if (p === 0)
                or(A, t, M, M, E, i, h, s, b);
              else
                switch (y === 99 && Re(A, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    or(e, M, M, n && Qt(Yn(e, M, M, 0, 0, o, s, R, o, E = [], h), b), o, b, h, s, n ? E : b);
                    break;
                  default:
                    or(A, M, M, M, [""], b, 0, s, b);
                }
        }
        d = p = C = 0, g = x = 1, R = A = "", h = a;
        break;
      case 58:
        h = 1 + He(A), C = v;
      default:
        if (g < 1) {
          if (_ == 123)
            --g;
          else if (_ == 125 && g++ == 0 && is() == 125)
            continue;
        }
        switch (A += Er(_), _ * g) {
          case 38:
            x = p > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[d++] = (He(A) - 1) * x, x = 1;
            break;
          case 64:
            Je() === 45 && (A += nr(Ne())), y = Je(), p = h = He(R = A += ls(rr())), _++;
            break;
          case 45:
            v === 45 && He(A) == 2 && (g = 0);
        }
    }
  return i;
}
function Yn(e, t, r, n, o, i, a, s, f, d, p) {
  for (var h = o - 1, y = o === 0 ? i : [""], C = dn(y), v = 0, g = 0, m = 0; v < n; ++v)
    for (var x = 0, _ = jt(e, h + 1, h = Za(g = a[v])), R = e; x < C; ++x)
      (R = _o(g > 0 ? y[x] + " " + _ : re(_, /&\f/g, y[x]))) && (f[m++] = R);
  return wr(e, t, r, o === 0 ? un : s, f, d, p);
}
function fs(e, t, r) {
  return wr(e, t, r, $o, Er(os()), jt(e, 2, -2), 0);
}
function qn(e, t, r, n) {
  return wr(e, t, r, fn, jt(e, 0, n), jt(e, n + 1, -1), n);
}
function St(e, t) {
  for (var r = "", n = dn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ds(e, t, r, n) {
  switch (e.type) {
    case Qa:
      if (e.children.length) break;
    case Ja:
    case fn:
      return e.return = e.return || e.value;
    case $o:
      return "";
    case Po:
      return e.return = e.value + "{" + St(e.children, n) + "}";
    case un:
      e.value = e.props.join(",");
  }
  return He(r = St(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ps(e) {
  var t = dn(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function hs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ms = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Je(), o === 38 && i === 12 && (r[n] = 1), !Nt(i); )
    Ne();
  return Ut(t, Me);
}, gs = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Nt(o)) {
      case 0:
        o === 38 && Je() === 12 && (r[n] = 1), t[n] += ms(Me - 1, r, n);
        break;
      case 2:
        t[n] += nr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Je() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Er(o);
    }
  while (o = Ne());
  return t;
}, ys = function(t, r) {
  return Mo(gs(Ao(t), r));
}, Hn = /* @__PURE__ */ new WeakMap(), bs = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Hn.get(n)) && !o) {
      Hn.set(t, !0);
      for (var i = [], a = ys(r, i), s = n.props, f = 0, d = 0; f < a.length; f++)
        for (var p = 0; p < s.length; p++, d++)
          t.props[d] = i[f] ? a[f].replace(/&\f/g, s[p]) : s[p] + " " + a[f];
    }
  }
}, vs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Io(e, t) {
  switch (ts(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + lr + e + Pe + e + e;
    case 6828:
    case 4268:
      return te + e + Pe + e + e;
    case 6165:
      return te + e + Pe + "flex-" + e + e;
    case 5187:
      return te + e + re(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Pe + "flex-$1$2") + e;
    case 5443:
      return te + e + Pe + "flex-item-" + re(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + Pe + "flex-line-pack" + re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + Pe + re(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Pe + re(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + re(e, "-grow", "") + te + e + Pe + re(e, "grow", "positive") + e;
    case 4554:
      return te + re(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return re(re(re(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return re(re(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (He(e) - 1 - t > 6) switch (Re(e, t + 1)) {
        case 109:
          if (Re(e, t + 4) !== 45) break;
        case 102:
          return re(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + lr + (Re(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Hr(e, "stretch") ? Io(re(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, He(e) - 3 - (~Hr(e, "!important") && 10))) {
        case 107:
          return re(e, ":", ":" + te) + e;
        case 101:
          return re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + Pe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return te + e + Pe + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Pe + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Pe + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Pe + e + e;
  }
  return e;
}
var Ss = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case fn:
      t.return = Io(t.value, t.length);
      break;
    case Po:
      return St([_t(t, {
        value: re(t.value, "@", "@" + te)
      })], o);
    case un:
      if (t.length) return ns(t.props, function(i) {
        switch (rs(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return St([_t(t, {
              props: [re(i, /:(read-\w+)/, ":" + lr + "$1")]
            })], o);
          case "::placeholder":
            return St([_t(t, {
              props: [re(i, /:(plac\w+)/, ":" + te + "input-$1")]
            }), _t(t, {
              props: [re(i, /:(plac\w+)/, ":" + lr + "$1")]
            }), _t(t, {
              props: [re(i, /:(plac\w+)/, Pe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Cs = [Ss], xs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var m = g.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Cs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var m = g.getAttribute("data-emotion").split(" "), x = 1; x < m.length; x++)
        i[m[x]] = !0;
      s.push(g);
    }
  );
  var f, d = [bs, vs];
  {
    var p, h = [ds, hs(function(g) {
      p.insert(g);
    })], y = ps(d.concat(o, h)), C = function(m) {
      return St(us(m), y);
    };
    f = function(m, x, _, R) {
      p = _, C(m ? m + "{" + x.styles + "}" : x.styles), R && (v.inserted[x.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new Xa({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return v.sheet.hydrate(s), v;
}, jo = rn(), Es = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ts = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, No = {};
No[jo.ForwardRef] = Es;
No[jo.Memo] = Ts;
var ws = !0;
function Rs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Bo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ws === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Os = function(t, r, n) {
  Bo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function $s(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ps = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _s = !1, ks = /[A-Z]|^ms/g, As = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Do = function(t) {
  return t.charCodeAt(1) === 45;
}, Gn = function(t) {
  return t != null && typeof t != "boolean";
}, Fr = /* @__PURE__ */ Oo(function(e) {
  return Do(e) ? e : e.replace(ks, "-$&").toLowerCase();
}), Kn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(As, function(n, o, i) {
          return Ge = {
            name: o,
            styles: i,
            next: Ge
          }, o;
        });
  }
  return Ps[t] !== 1 && !Do(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, Ms = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ge = {
          name: o.name,
          styles: o.styles,
          next: Ge
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ge = {
              name: a.name,
              styles: a.styles,
              next: Ge
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Is(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = Ge, d = r(e);
        return Ge = f, Bt(e, t, d);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function Is(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Bt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Gn(s) && (n += Fr(i) + ":" + Kn(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && _s)
          throw new Error(Ms);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var f = 0; f < a.length; f++)
            Gn(a[f]) && (n += Fr(i) + ":" + Kn(i, a[f]) + ";");
        else {
          var d = Bt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Fr(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Xn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ge;
function pn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ge = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Bt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Bt(r, t, e[s]), n) {
      var f = i;
      o += f[s];
    }
  Xn.lastIndex = 0;
  for (var d = "", p; (p = Xn.exec(o)) !== null; )
    d += "-" + p[1];
  var h = $s(o) + d;
  return {
    name: h,
    styles: o,
    next: Ge
  };
}
var js = function(t) {
  return t();
}, Ns = I.useInsertionEffect ? I.useInsertionEffect : !1, Bs = Ns || js, Fo = /* @__PURE__ */ I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ xs({
    key: "css"
  }) : null
);
Fo.Provider;
var Ds = function(t) {
  return /* @__PURE__ */ _i(function(r, n) {
    var o = ki(Fo);
    return t(r, o, n);
  });
}, zo = /* @__PURE__ */ I.createContext({});
function Fs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return pn(t);
}
var hn = function() {
  var t = Fs.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, zs = qa, Vs = function(t) {
  return t !== "theme";
}, Jn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? zs : Vs;
}, Qn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ls = !1, Ws = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Bo(r, n, o), Bs(function() {
    return Os(r, n, o);
  }), null;
}, Us = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Qn(t, r, n), f = s || Jn(o), d = !f("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      h.push(p[0][0]);
      for (var y = p.length, C = 1; C < y; C++)
        h.push(p[C], p[0][C]);
    }
    var v = Ds(function(g, m, x) {
      var _ = d && g.as || o, R = "", E = [], b = g;
      if (g.theme == null) {
        b = {};
        for (var M in g)
          b[M] = g[M];
        b.theme = I.useContext(zo);
      }
      typeof g.className == "string" ? R = Rs(m.registered, E, g.className) : g.className != null && (R = g.className + " ");
      var A = pn(h.concat(E), m.registered, b);
      R += m.key + "-" + A.name, a !== void 0 && (R += " " + a);
      var ee = d && s === void 0 ? Jn(_) : f, Q = {};
      for (var c in g)
        d && c === "as" || ee(c) && (Q[c] = g[c]);
      return Q.className = R, x && (Q.ref = x), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Ws, {
        cache: m,
        serialized: A,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ I.createElement(_, Q));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = h, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && Ls ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(g, m) {
      return e(g, cr({}, r, m, {
        shouldForwardProp: Qn(v, m, !0)
      })).apply(void 0, h);
    }, v;
  };
}, Ys = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Kr = Us.bind();
Ys.forEach(function(e) {
  Kr[e] = Kr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qs(e, t) {
  const r = Kr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Hs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Zn = [];
function eo(e) {
  return Zn[0] = e, pn(Zn);
}
const Gs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Ks(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Gs(t), a = Object.keys(i);
  function s(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function f(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function d(y, C) {
    const v = a.indexOf(C);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : C) - n / 100}${r})`;
  }
  function p(y) {
    return a.indexOf(y) + 1 < a.length ? d(y, a[a.indexOf(y) + 1]) : s(y);
  }
  function h(y) {
    const C = a.indexOf(y);
    return C === 0 ? s(a[1]) : C === a.length - 1 ? f(a[C]) : d(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: f,
    between: d,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
const Xs = {
  borderRadius: 4
};
function Vo(e = 8, t = cn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Js(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function mn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Ks(r), f = Vo(o);
  let d = je({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Xs,
      ...i
    }
  }, a);
  return d = Zi(d), d.applyStyles = Js, d = t.reduce((p, h) => je(p, h), d), d.unstable_sxConfig = {
    ...Wt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(h) {
    return Ct({
      sx: h,
      theme: this
    });
  }, d;
}
function Qs(e) {
  return Object.keys(e).length === 0;
}
function Zs(e = null) {
  const t = I.useContext(zo);
  return !t || Qs(t) ? e : t;
}
const ec = mn();
function tc(e = ec) {
  return Zs(e);
}
const to = (e) => e, rc = () => {
  let e = to;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = to;
    }
  };
}, nc = rc(), oc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Le(e, t, r = "Mui") {
  const n = oc[t];
  return n ? `${r}-${n}` : `${nc.generate(e)}-${t}`;
}
function We(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Le(e, o, r);
  }), n;
}
var Xr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function ic() {
  if (ro) return ae;
  ro = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case f:
                case y:
                case h:
                case i:
                  return m;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ae.ContextConsumer = a, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = f, ae.Fragment = r, ae.Lazy = y, ae.Memo = h, ae.Portal = t, ae.Profiler = o, ae.StrictMode = n, ae.Suspense = d, ae.SuspenseList = p, ae.isAsyncMode = function() {
    return !1;
  }, ae.isConcurrentMode = function() {
    return !1;
  }, ae.isContextConsumer = function(m) {
    return g(m) === a;
  }, ae.isContextProvider = function(m) {
    return g(m) === i;
  }, ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ae.isForwardRef = function(m) {
    return g(m) === f;
  }, ae.isFragment = function(m) {
    return g(m) === r;
  }, ae.isLazy = function(m) {
    return g(m) === y;
  }, ae.isMemo = function(m) {
    return g(m) === h;
  }, ae.isPortal = function(m) {
    return g(m) === t;
  }, ae.isProfiler = function(m) {
    return g(m) === o;
  }, ae.isStrictMode = function(m) {
    return g(m) === n;
  }, ae.isSuspense = function(m) {
    return g(m) === d;
  }, ae.isSuspenseList = function(m) {
    return g(m) === p;
  }, ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === p || m === C || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === f || m.$$typeof === v || m.getModuleId !== void 0);
  }, ae.typeOf = g, ae;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function ac() {
  return no || (no = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), v = !1, g = !1, m = !1, x = !1, _ = !1, R;
    R = Symbol.for("react.module.reference");
    function E(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === o || _ || j === n || j === d || j === p || x || j === C || v || g || m || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === h || j.$$typeof === i || j.$$typeof === a || j.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === R || j.getModuleId !== void 0));
    }
    function b(j) {
      if (typeof j == "object" && j !== null) {
        var _e = j.$$typeof;
        switch (_e) {
          case e:
            var Be = j.type;
            switch (Be) {
              case r:
              case o:
              case n:
              case d:
              case p:
                return Be;
              default:
                var ot = Be && Be.$$typeof;
                switch (ot) {
                  case s:
                  case a:
                  case f:
                  case y:
                  case h:
                  case i:
                    return ot;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var M = a, A = i, ee = e, Q = f, c = r, P = y, N = h, D = t, q = o, le = n, ce = d, ye = p, Te = !1, we = !1;
    function w(j) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(j) {
      return we || (we = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(j) {
      return b(j) === a;
    }
    function U(j) {
      return b(j) === i;
    }
    function B(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function K(j) {
      return b(j) === f;
    }
    function V(j) {
      return b(j) === r;
    }
    function L(j) {
      return b(j) === y;
    }
    function H(j) {
      return b(j) === h;
    }
    function X(j) {
      return b(j) === t;
    }
    function G(j) {
      return b(j) === o;
    }
    function Se(j) {
      return b(j) === n;
    }
    function $(j) {
      return b(j) === d;
    }
    function $e(j) {
      return b(j) === p;
    }
    se.ContextConsumer = M, se.ContextProvider = A, se.Element = ee, se.ForwardRef = Q, se.Fragment = c, se.Lazy = P, se.Memo = N, se.Portal = D, se.Profiler = q, se.StrictMode = le, se.Suspense = ce, se.SuspenseList = ye, se.isAsyncMode = w, se.isConcurrentMode = O, se.isContextConsumer = z, se.isContextProvider = U, se.isElement = B, se.isForwardRef = K, se.isFragment = V, se.isLazy = L, se.isMemo = H, se.isPortal = X, se.isProfiler = G, se.isStrictMode = Se, se.isSuspense = $, se.isSuspenseList = $e, se.isValidElementType = E, se.typeOf = b;
  }()), se;
}
process.env.NODE_ENV === "production" ? Xr.exports = ic() : Xr.exports = ac();
var oo = Xr.exports;
function Lo(e, t = "") {
  return e.displayName || e.name || t;
}
function io(e, t, r) {
  const n = Lo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function sc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Lo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oo.ForwardRef:
          return io(e, e.render, "ForwardRef");
        case oo.Memo:
          return io(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Wo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: eo(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = eo(o.style));
  }), n;
}
const cc = mn();
function zr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function lc(e) {
  return e ? (t, r) => r[e] : null;
}
function uc(e, t, r) {
  e.theme = hc(e.theme) ? r : e.theme[t] || e.theme;
}
function ir(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ir(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Uo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Uo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function fc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = cc,
    rootShouldForwardProp: n = zr,
    slotShouldForwardProp: o = zr
  } = e;
  function i(s) {
    uc(s, t, r);
  }
  return (s, f = {}) => {
    Hs(s, (b) => b.filter((M) => M !== Ct));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: h,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = lc(Yo(p)),
      ...v
    } = f, g = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), m = y || !1;
    let x = zr;
    p === "Root" || p === "root" ? x = n : p ? x = o : mc(s) && (x = void 0);
    const _ = qs(s, {
      shouldForwardProp: x,
      label: pc(d, p),
      ...v
    }), R = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(A) {
          return ir(A, b);
        };
      if (Xe(b)) {
        const M = Wo(b);
        return M.variants ? function(ee) {
          return ir(ee, M);
        } : M.style;
      }
      return b;
    }, E = (...b) => {
      const M = [], A = b.map(R), ee = [];
      if (M.push(i), d && C && ee.push(function(N) {
        var ce, ye;
        const q = (ye = (ce = N.theme.components) == null ? void 0 : ce[d]) == null ? void 0 : ye.styleOverrides;
        if (!q)
          return null;
        const le = {};
        for (const Te in q)
          le[Te] = ir(N, q[Te]);
        return C(N, le);
      }), d && !g && ee.push(function(N) {
        var le, ce;
        const D = N.theme, q = (ce = (le = D == null ? void 0 : D.components) == null ? void 0 : le[d]) == null ? void 0 : ce.variants;
        return q ? Uo(N, q) : null;
      }), m || ee.push(Ct), Array.isArray(A[0])) {
        const P = A.shift(), N = new Array(M.length).fill(""), D = new Array(ee.length).fill("");
        let q;
        q = [...N, ...P, ...D], q.raw = [...N, ...P.raw, ...D], M.unshift(q);
      }
      const Q = [...M, ...A, ...ee], c = _(...Q);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = dc(d, p, s)), c;
    };
    return _.withConfig && (E.withConfig = _.withConfig), E;
  };
}
function dc(e, t, r) {
  return e ? `${e}${pe(t || "")}` : `Styled(${sc(r)})`;
}
function pc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Yo(t || "Root")}`), r;
}
function hc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function mc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const gc = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function Yt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function yc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function bc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !yc(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vc = Yt(l.elementType, bc), Sc = l.oneOfType([l.func, l.object]);
function Cc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zt(e) {
  const t = I.useRef(e);
  return gc(() => {
    t.current = e;
  }), I.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function ao(...e) {
  return I.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Cc(r, t);
    });
  }, e);
}
const so = {};
function qo(e, t) {
  const r = I.useRef(so);
  return r.current === so && (r.current = e(t)), r;
}
const xc = [];
function Ec(e) {
  I.useEffect(e, xc);
}
class gn {
  constructor() {
    Ot(this, "currentId", null);
    Ot(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ot(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new gn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Tc() {
  const e = qo(gn.create).current;
  return Ec(e.disposeEffect), e;
}
function co(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function wc(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ho(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = wc(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Go(e, t, ...r) {
  return e[t] === void 0 ? null : Ho(e, t, ...r);
}
function Jr() {
  return null;
}
Go.isRequired = Ho;
Jr.isRequired = Jr;
const Rc = process.env.NODE_ENV === "production" ? Jr : Go, Oc = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function $c(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ar(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ar(o, n) : n;
}
function Pc({
  props: e,
  name: t
}) {
  const r = I.useContext(Oc);
  return $c({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const lo = {
  theme: void 0
};
function _c(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (lo.theme = o.theme, i = Wo(e(lo)), t = i, r = o.theme), i;
  };
}
function kc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const uo = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ac = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, f]) => {
      (!r || r && !r([...i, s])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, s], Array.isArray(f) ? [...a, s] : a) : t([...i, s], f, a));
    });
  }
  n(e);
}, Mc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Ac(
    e,
    (s, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(s, f))) {
        const p = `--${r ? `${r}-` : ""}${s.join("-")}`, h = Mc(s, f);
        Object.assign(o, {
          [p]: h
        }), uo(i, s, `var(${p})`, d), uo(a, s, `var(${p}, ${h})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Ic(e, t = {}) {
  const {
    getSelector: r = m,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...f
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: h
  } = Vr(f, t);
  let y = h;
  const C = {}, {
    [s]: v,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([R, E]) => {
    const {
      vars: b,
      css: M,
      varsWithDefaults: A
    } = Vr(E, t);
    y = je(y, A), C[R] = {
      css: M,
      vars: b
    };
  }), v) {
    const {
      css: R,
      vars: E,
      varsWithDefaults: b
    } = Vr(v, t);
    y = je(y, b), C[s] = {
      css: R,
      vars: E
    };
  }
  function m(R, E) {
    var M, A;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), R) {
      if (b === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (M = i[R]) == null ? void 0 : M.palette) == null ? void 0 : A.mode) || R})`]: {
            ":root": E
          }
        };
      if (b)
        return e.defaultColorScheme === R ? `:root, ${b.replace("%s", String(R))}` : b.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let R = {
        ...d
      };
      return Object.entries(C).forEach(([, {
        vars: E
      }]) => {
        R = je(R, E);
      }), R;
    },
    generateStyleSheets: () => {
      var ee, Q;
      const R = [], E = e.defaultColorScheme || "light";
      function b(c, P) {
        Object.keys(P).length && R.push(typeof c == "string" ? {
          [c]: {
            ...P
          }
        } : c);
      }
      b(r(void 0, {
        ...p
      }), p);
      const {
        [E]: M,
        ...A
      } = C;
      if (M) {
        const {
          css: c
        } = M, P = (Q = (ee = i[E]) == null ? void 0 : ee.palette) == null ? void 0 : Q.mode, N = !n && P ? {
          colorScheme: P,
          ...c
        } : {
          ...c
        };
        b(r(E, {
          ...N
        }), N);
      }
      return Object.entries(A).forEach(([c, {
        css: P
      }]) => {
        var q, le;
        const N = (le = (q = i[c]) == null ? void 0 : q.palette) == null ? void 0 : le.mode, D = !n && N ? {
          colorScheme: N,
          ...P
        } : {
          ...P
        };
        b(r(c, {
          ...D
        }), D);
      }), R;
    }
  };
}
function jc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Dt = {
  black: "#000",
  white: "#fff"
}, Nc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, dt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, pt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, kt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ht = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, mt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, gt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, fo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Dt.white,
    default: Dt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Lr = {
  text: {
    primary: Dt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Dt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function po(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = sn(e.main, o) : t === "dark" && (e.dark = an(e.main, i)));
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: ht[200],
    light: ht[50],
    dark: ht[400]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  };
}
function Fc(e = "light") {
  return e === "dark" ? {
    main: pt[500],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[700],
    light: mt[500],
    dark: mt[900]
  };
}
function Vc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[800],
    light: gt[500],
    dark: gt[900]
  };
}
function Lc(e = "light") {
  return e === "dark" ? {
    main: kt[400],
    light: kt[300],
    dark: kt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: kt[500],
    dark: kt[900]
  };
}
function yn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Bc(t), a = e.secondary || Dc(t), s = e.error || Fc(t), f = e.info || zc(t), d = e.success || Vc(t), p = e.warning || Lc(t);
  function h(g) {
    const m = Ln(g, Lr.text.primary) >= r ? Lr.text.primary : fo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Ln(g, m);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const y = ({
    color: g,
    name: m,
    mainShade: x = 500,
    lightShade: _ = 300,
    darkShade: R = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[x] && (g.main = g[x]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : tt(11, m ? ` (${m})` : "", x));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : tt(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return po(g, "light", _, n), po(g, "dark", R, n), g.contrastText || (g.contrastText = h(g.main)), g;
  }, C = {
    dark: Lr,
    light: fo
  };
  return process.env.NODE_ENV !== "production" && (C[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), je({
    // A collection of common colors.
    common: {
      ...Dt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Nc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...C[t]
  }, o);
}
function Wc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Uc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Yc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ho = {
  textTransform: "uppercase"
}, mo = '"Roboto", "Helvetica", "Arial", sans-serif';
function qc(e, t) {
  const {
    fontFamily: r = mo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, C = p || ((m) => `${m / f * y}rem`), v = (m, x, _, R, E) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: C(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === mo ? {
      letterSpacing: `${Yc(R / x)}em`
    } : {},
    ...E,
    ...d
  }), g = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, ho),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, ho),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je({
    htmlFontSize: f,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...g
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Hc = 0.2, Gc = 0.14, Kc = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Hc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Gc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Kc})`].join(",");
}
const Xc = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Jc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Qc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function go(e) {
  return `${Math.round(e)}ms`;
}
function Zc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function el(e) {
  const t = {
    ...Jc,
    ...e.easing
  }, r = {
    ...Qc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Zc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (y) => typeof y == "string", h = (y) => !Number.isNaN(parseFloat(y));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(s) || console.error('MUI: Argument "easing" must be a string.'), !h(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : go(a)} ${s} ${typeof f == "string" ? f : go(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const tl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Qr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : tt(20));
  const p = yn(i), h = mn(e);
  let y = je(h, {
    mixins: Uc(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Xc.slice(),
    typography: qc(p, s),
    transitions: el(a),
    zIndex: {
      ...tl
    }
  });
  if (y = je(y, d), y = t.reduce((C, v) => je(C, v), y), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (g, m) => {
      let x;
      for (x in g) {
        const _ = g[x];
        if (C.includes(x) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = Le("", x);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[x] = {};
        }
      }
    };
    Object.keys(y.components).forEach((g) => {
      const m = y.components[g].styleOverrides;
      m && g.startsWith("Mui") && v(m, g);
    });
  }
  return y.unstable_sxConfig = {
    ...Wt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(v) {
    return Ct({
      sx: v,
      theme: this
    });
  }, y;
}
function Zr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const rl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Zr(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ko(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Xo(e) {
  return e === "dark" ? rl : [];
}
function nl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = yn(t);
  return {
    palette: i,
    opacity: {
      ...Ko(i.mode),
      ...r
    },
    overlays: n || Xo(i.mode),
    ...o
  };
}
function ol(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const il = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], al = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return il(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function sl(e) {
  return Xe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function cl(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !sl(s) || a.startsWith("unstable_") ? delete n[a] : Xe(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ll(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function S(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Mt(e) {
  return !e || !e.startsWith("hsl") ? e : Eo(e);
}
function Ze(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = At(Mt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ul(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const qe = (e) => {
  try {
    return e();
  } catch {
  }
}, fl = (e = "mui") => kc(e);
function Wr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = nl({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Qr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Ko(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Xo(o)
  }, a;
}
function dl(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = ol,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), y = fl(i), {
    [h]: C,
    light: v,
    dark: g,
    ...m
  } = r, x = {
    ...m
  };
  let _ = C;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : tt(21, h));
  const R = Wr(x, _, d, h);
  v && !x.light && Wr(x, v, void 0, "light"), g && !x.dark && Wr(x, g, void 0, "dark");
  let E = {
    defaultColorScheme: h,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: f,
    getCssVar: y,
    colorSchemes: x,
    font: {
      ...Wc(R.typography),
      ...R.font
    },
    spacing: ul(d.spacing)
  };
  Object.keys(E.colorSchemes).forEach((Q) => {
    const c = E.colorSchemes[Q].palette, P = (N) => {
      const D = N.split("-"), q = D[1], le = D[2];
      return y(N, c[q][le]);
    };
    if (c.mode === "light" && (S(c.common, "background", "#fff"), S(c.common, "onBackground", "#000")), c.mode === "dark" && (S(c.common, "background", "#000"), S(c.common, "onBackground", "#fff")), ll(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      S(c.Alert, "errorColor", fe(c.error.light, 0.6)), S(c.Alert, "infoColor", fe(c.info.light, 0.6)), S(c.Alert, "successColor", fe(c.success.light, 0.6)), S(c.Alert, "warningColor", fe(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", P("palette-error-main")), S(c.Alert, "infoFilledBg", P("palette-info-main")), S(c.Alert, "successFilledBg", P("palette-success-main")), S(c.Alert, "warningFilledBg", P("palette-warning-main")), S(c.Alert, "errorFilledColor", qe(() => c.getContrastText(c.error.main))), S(c.Alert, "infoFilledColor", qe(() => c.getContrastText(c.info.main))), S(c.Alert, "successFilledColor", qe(() => c.getContrastText(c.success.main))), S(c.Alert, "warningFilledColor", qe(() => c.getContrastText(c.warning.main))), S(c.Alert, "errorStandardBg", de(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", de(c.info.light, 0.9)), S(c.Alert, "successStandardBg", de(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", de(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", P("palette-error-main")), S(c.Alert, "infoIconColor", P("palette-info-main")), S(c.Alert, "successIconColor", P("palette-success-main")), S(c.Alert, "warningIconColor", P("palette-warning-main")), S(c.AppBar, "defaultBg", P("palette-grey-100")), S(c.Avatar, "defaultBg", P("palette-grey-400")), S(c.Button, "inheritContainedBg", P("palette-grey-300")), S(c.Button, "inheritContainedHoverBg", P("palette-grey-A100")), S(c.Chip, "defaultBorder", P("palette-grey-400")), S(c.Chip, "defaultAvatarColor", P("palette-grey-700")), S(c.Chip, "defaultIconColor", P("palette-grey-700")), S(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(c.LinearProgress, "primaryBg", de(c.primary.main, 0.62)), S(c.LinearProgress, "secondaryBg", de(c.secondary.main, 0.62)), S(c.LinearProgress, "errorBg", de(c.error.main, 0.62)), S(c.LinearProgress, "infoBg", de(c.info.main, 0.62)), S(c.LinearProgress, "successBg", de(c.success.main, 0.62)), S(c.LinearProgress, "warningBg", de(c.warning.main, 0.62)), S(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), S(c.Slider, "primaryTrack", de(c.primary.main, 0.62)), S(c.Slider, "secondaryTrack", de(c.secondary.main, 0.62)), S(c.Slider, "errorTrack", de(c.error.main, 0.62)), S(c.Slider, "infoTrack", de(c.info.main, 0.62)), S(c.Slider, "successTrack", de(c.success.main, 0.62)), S(c.Slider, "warningTrack", de(c.warning.main, 0.62));
      const N = Jt(c.background.default, 0.8);
      S(c.SnackbarContent, "bg", N), S(c.SnackbarContent, "color", qe(() => c.getContrastText(N))), S(c.SpeedDialAction, "fabHoverBg", Jt(c.background.paper, 0.15)), S(c.StepConnector, "border", P("palette-grey-400")), S(c.StepContent, "border", P("palette-grey-400")), S(c.Switch, "defaultColor", P("palette-common-white")), S(c.Switch, "defaultDisabledColor", P("palette-grey-100")), S(c.Switch, "primaryDisabledColor", de(c.primary.main, 0.62)), S(c.Switch, "secondaryDisabledColor", de(c.secondary.main, 0.62)), S(c.Switch, "errorDisabledColor", de(c.error.main, 0.62)), S(c.Switch, "infoDisabledColor", de(c.info.main, 0.62)), S(c.Switch, "successDisabledColor", de(c.success.main, 0.62)), S(c.Switch, "warningDisabledColor", de(c.warning.main, 0.62)), S(c.TableCell, "border", de(Xt(c.divider, 1), 0.88)), S(c.Tooltip, "bg", Xt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      S(c.Alert, "errorColor", de(c.error.light, 0.6)), S(c.Alert, "infoColor", de(c.info.light, 0.6)), S(c.Alert, "successColor", de(c.success.light, 0.6)), S(c.Alert, "warningColor", de(c.warning.light, 0.6)), S(c.Alert, "errorFilledBg", P("palette-error-dark")), S(c.Alert, "infoFilledBg", P("palette-info-dark")), S(c.Alert, "successFilledBg", P("palette-success-dark")), S(c.Alert, "warningFilledBg", P("palette-warning-dark")), S(c.Alert, "errorFilledColor", qe(() => c.getContrastText(c.error.dark))), S(c.Alert, "infoFilledColor", qe(() => c.getContrastText(c.info.dark))), S(c.Alert, "successFilledColor", qe(() => c.getContrastText(c.success.dark))), S(c.Alert, "warningFilledColor", qe(() => c.getContrastText(c.warning.dark))), S(c.Alert, "errorStandardBg", fe(c.error.light, 0.9)), S(c.Alert, "infoStandardBg", fe(c.info.light, 0.9)), S(c.Alert, "successStandardBg", fe(c.success.light, 0.9)), S(c.Alert, "warningStandardBg", fe(c.warning.light, 0.9)), S(c.Alert, "errorIconColor", P("palette-error-main")), S(c.Alert, "infoIconColor", P("palette-info-main")), S(c.Alert, "successIconColor", P("palette-success-main")), S(c.Alert, "warningIconColor", P("palette-warning-main")), S(c.AppBar, "defaultBg", P("palette-grey-900")), S(c.AppBar, "darkBg", P("palette-background-paper")), S(c.AppBar, "darkColor", P("palette-text-primary")), S(c.Avatar, "defaultBg", P("palette-grey-600")), S(c.Button, "inheritContainedBg", P("palette-grey-800")), S(c.Button, "inheritContainedHoverBg", P("palette-grey-700")), S(c.Chip, "defaultBorder", P("palette-grey-700")), S(c.Chip, "defaultAvatarColor", P("palette-grey-300")), S(c.Chip, "defaultIconColor", P("palette-grey-300")), S(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(c.LinearProgress, "primaryBg", fe(c.primary.main, 0.5)), S(c.LinearProgress, "secondaryBg", fe(c.secondary.main, 0.5)), S(c.LinearProgress, "errorBg", fe(c.error.main, 0.5)), S(c.LinearProgress, "infoBg", fe(c.info.main, 0.5)), S(c.LinearProgress, "successBg", fe(c.success.main, 0.5)), S(c.LinearProgress, "warningBg", fe(c.warning.main, 0.5)), S(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), S(c.Slider, "primaryTrack", fe(c.primary.main, 0.5)), S(c.Slider, "secondaryTrack", fe(c.secondary.main, 0.5)), S(c.Slider, "errorTrack", fe(c.error.main, 0.5)), S(c.Slider, "infoTrack", fe(c.info.main, 0.5)), S(c.Slider, "successTrack", fe(c.success.main, 0.5)), S(c.Slider, "warningTrack", fe(c.warning.main, 0.5));
      const N = Jt(c.background.default, 0.98);
      S(c.SnackbarContent, "bg", N), S(c.SnackbarContent, "color", qe(() => c.getContrastText(N))), S(c.SpeedDialAction, "fabHoverBg", Jt(c.background.paper, 0.15)), S(c.StepConnector, "border", P("palette-grey-600")), S(c.StepContent, "border", P("palette-grey-600")), S(c.Switch, "defaultColor", P("palette-grey-300")), S(c.Switch, "defaultDisabledColor", P("palette-grey-600")), S(c.Switch, "primaryDisabledColor", fe(c.primary.main, 0.55)), S(c.Switch, "secondaryDisabledColor", fe(c.secondary.main, 0.55)), S(c.Switch, "errorDisabledColor", fe(c.error.main, 0.55)), S(c.Switch, "infoDisabledColor", fe(c.info.main, 0.55)), S(c.Switch, "successDisabledColor", fe(c.success.main, 0.55)), S(c.Switch, "warningDisabledColor", fe(c.warning.main, 0.55)), S(c.TableCell, "border", fe(Xt(c.divider, 1), 0.68)), S(c.Tooltip, "bg", Xt(c.grey[700], 0.92));
    }
    Ze(c.background, "default"), Ze(c.background, "paper"), Ze(c.common, "background"), Ze(c.common, "onBackground"), Ze(c, "divider"), Object.keys(c).forEach((N) => {
      const D = c[N];
      D && typeof D == "object" && (D.main && S(c[N], "mainChannel", At(Mt(D.main))), D.light && S(c[N], "lightChannel", At(Mt(D.light))), D.dark && S(c[N], "darkChannel", At(Mt(D.dark))), D.contrastText && S(c[N], "contrastTextChannel", At(Mt(D.contrastText))), N === "text" && (Ze(c[N], "primary"), Ze(c[N], "secondary")), N === "action" && (D.active && Ze(c[N], "active"), D.selected && Ze(c[N], "selected")));
    });
  }), E = t.reduce((Q, c) => je(Q, c), E);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: al(E)
  }, {
    vars: M,
    generateThemeVars: A,
    generateStyleSheets: ee
  } = Ic(E, b);
  return E.vars = M, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([Q, c]) => {
    E[Q] = c;
  }), E.generateThemeVars = A, E.generateStyleSheets = ee, E.generateSpacing = function() {
    return Vo(d.spacing, cn(this));
  }, E.getColorSchemeSelector = jc(s), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...Wt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, E.unstable_sx = function(c) {
    return Ct({
      sx: c,
      theme: this
    });
  }, E.toRuntimeSource = cl, E;
}
function yo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: yn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function pl(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", f = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Qr(e, ...t);
    let p = r;
    "palette" in e || d[s] && (d[s] !== !0 ? p = d[s].palette : s === "dark" && (p = {
      mode: "dark"
    }));
    const h = Qr({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = s, h.colorSchemes = d, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: h.palette
    }, yo(h, "dark", d.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: h.palette
    }, yo(h, "light", d.light)), h;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), dl({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Jo = pl(), Qo = "$$material";
function hl() {
  const e = tc(Jo);
  return process.env.NODE_ENV !== "production" && I.useDebugValue(e), e[Qo] || e;
}
const Oe = fc({
  themeId: Qo,
  defaultTheme: Jo,
  rootShouldForwardProp: To
});
function ml() {
  return Ua;
}
const Et = _c;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Ue(e) {
  return Pc(e);
}
class ur {
  constructor() {
    Ot(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ur();
  }
  static use() {
    const t = qo(ur.create).current, [r, n] = I.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, I.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = yl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function gl() {
  return ur.use();
}
function yl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function bl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function en(e, t) {
  return en = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, en(e, t);
}
function vl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, en(e, t);
}
const bo = st.createContext(null);
function Sl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bn(e, t) {
  var r = function(i) {
    return t && er(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ai.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Cl(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        s[n[f][a]] = r(d);
      }
    s[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function ct(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function xl(e, t) {
  return bn(e.children, function(r) {
    return tr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ct(r, "appear", e),
      enter: ct(r, "enter", e),
      exit: ct(r, "exit", e)
    });
  });
}
function El(e, t, r) {
  var n = bn(e.children), o = Cl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (er(a)) {
      var s = i in t, f = i in n, d = t[i], p = er(d) && !d.props.in;
      f && (!s || p) ? o[i] = tr(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }) : !f && s && !p ? o[i] = tr(a, {
        in: !1
      }) : f && s && er(d) && (o[i] = tr(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }));
    }
  }), o;
}
var Tl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, wl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vn = /* @__PURE__ */ function(e) {
  vl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Sl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, f = i.firstRender;
    return {
      children: f ? xl(o, s) : El(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = bn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var f = cr({}, s.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = bl(o, ["component", "childFactory"]), f = this.state.contextValue, d = Tl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ st.createElement(bo.Provider, {
      value: f
    }, d) : /* @__PURE__ */ st.createElement(bo.Provider, {
      value: f
    }, /* @__PURE__ */ st.createElement(i, s, d));
  }, t;
}(st.Component);
vn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
vn.defaultProps = wl;
function Zo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: f,
    timeout: d
  } = e, [p, h] = I.useState(!1), y = xe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = xe(r.child, p && r.childLeaving, n && r.childPulsate);
  return !s && !p && h(!0), I.useEffect(() => {
    if (!s && f != null) {
      const g = setTimeout(f, d);
      return () => {
        clearTimeout(g);
      };
    }
  }, [f, s, d]), /* @__PURE__ */ W.jsx("span", {
    className: y,
    style: C,
    children: /* @__PURE__ */ W.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Zo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object.isRequired,
  className: l.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: l.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: l.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: l.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: l.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: l.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: l.number,
  /**
   * exit delay
   */
  timeout: l.number.isRequired
});
const Fe = We("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), tn = 550, Rl = 80, Ol = hn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, $l = hn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Pl = hn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _l = Oe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), kl = Oe(Zo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Fe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ol};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Fe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Fe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Fe.childLeaving} {
    opacity: 0;
    animation-name: ${$l};
    animation-duration: ${tn}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Fe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ei = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [f, d] = I.useState([]), p = I.useRef(0), h = I.useRef(null);
  I.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [f]);
  const y = I.useRef(!1), C = Tc(), v = I.useRef(null), g = I.useRef(null), m = I.useCallback((E) => {
    const {
      pulsate: b,
      rippleX: M,
      rippleY: A,
      rippleSize: ee,
      cb: Q
    } = E;
    d((c) => [...c, /* @__PURE__ */ W.jsx(kl, {
      classes: {
        ripple: xe(i.ripple, Fe.ripple),
        rippleVisible: xe(i.rippleVisible, Fe.rippleVisible),
        ripplePulsate: xe(i.ripplePulsate, Fe.ripplePulsate),
        child: xe(i.child, Fe.child),
        childLeaving: xe(i.childLeaving, Fe.childLeaving),
        childPulsate: xe(i.childPulsate, Fe.childPulsate)
      },
      timeout: tn,
      pulsate: b,
      rippleX: M,
      rippleY: A,
      rippleSize: ee
    }, p.current)]), p.current += 1, h.current = Q;
  }, [i]), x = I.useCallback((E = {}, b = {}, M = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: ee = o || b.pulsate,
      fakeElement: Q = !1
      // For test purposes
    } = b;
    if ((E == null ? void 0 : E.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (y.current = !0);
    const c = Q ? null : g.current, P = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, D, q;
    if (ee || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      N = Math.round(P.width / 2), D = Math.round(P.height / 2);
    else {
      const {
        clientX: le,
        clientY: ce
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      N = Math.round(le - P.left), D = Math.round(ce - P.top);
    }
    if (ee)
      q = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), q % 2 === 0 && (q += 1);
    else {
      const le = Math.max(Math.abs((c ? c.clientWidth : 0) - N), N) * 2 + 2, ce = Math.max(Math.abs((c ? c.clientHeight : 0) - D), D) * 2 + 2;
      q = Math.sqrt(le ** 2 + ce ** 2);
    }
    E != null && E.touches ? v.current === null && (v.current = () => {
      m({
        pulsate: A,
        rippleX: N,
        rippleY: D,
        rippleSize: q,
        cb: M
      });
    }, C.start(Rl, () => {
      v.current && (v.current(), v.current = null);
    })) : m({
      pulsate: A,
      rippleX: N,
      rippleY: D,
      rippleSize: q,
      cb: M
    });
  }, [o, m, C]), _ = I.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), R = I.useCallback((E, b) => {
    if (C.clear(), (E == null ? void 0 : E.type) === "touchend" && v.current) {
      v.current(), v.current = null, C.start(0, () => {
        R(E, b);
      });
      return;
    }
    v.current = null, d((M) => M.length > 0 ? M.slice(1) : M), h.current = b;
  }, [C]);
  return I.useImperativeHandle(r, () => ({
    pulsate: _,
    start: x,
    stop: R
  }), [_, x, R]), /* @__PURE__ */ W.jsx(_l, {
    className: xe(Fe.root, i.root, a),
    ref: g,
    ...s,
    children: /* @__PURE__ */ W.jsx(vn, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: l.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string
});
function Al(e) {
  return Le("MuiButtonBase", e);
}
const Ml = We("MuiButtonBase", ["root", "disabled", "focusVisible"]), Il = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Qe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Al, o);
  return r && n && (a.root += ` ${n}`), a;
}, jl = Oe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Ml.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Sn = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: f = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: y = !1,
    focusVisibleClassName: C,
    LinkComponent: v = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: x,
    onDragLeave: _,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: b,
    onKeyUp: M,
    onMouseDown: A,
    onMouseLeave: ee,
    onMouseUp: Q,
    onTouchEnd: c,
    onTouchMove: P,
    onTouchStart: N,
    tabIndex: D = 0,
    TouchRippleProps: q,
    touchRippleRef: le,
    type: ce,
    ...ye
  } = n, Te = I.useRef(null), we = gl(), w = ao(we.ref, le), [O, z] = I.useState(!1);
  d && O && z(!1), I.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), Te.current.focus();
    }
  }), []);
  const U = we.shouldMount && !p && !d;
  I.useEffect(() => {
    O && y && !p && we.pulsate();
  }, [p, y, O, we]);
  function B(Y, Ht, Gt = h) {
    return Zt((Rt) => (Ht && Ht(Rt), Gt || we[Y](Rt), !0));
  }
  const K = B("start", A), V = B("stop", x), L = B("stop", _), H = B("stop", Q), X = B("stop", (Y) => {
    O && Y.preventDefault(), ee && ee(Y);
  }), G = B("start", N), Se = B("stop", c), $ = B("stop", P), $e = B("stop", (Y) => {
    co(Y.target) || z(!1), g && g(Y);
  }, !1), j = Zt((Y) => {
    Te.current || (Te.current = Y.currentTarget), co(Y.target) && (z(!0), E && E(Y)), R && R(Y);
  }), _e = () => {
    const Y = Te.current;
    return f && f !== "button" && !(Y.tagName === "A" && Y.href);
  }, Be = Zt((Y) => {
    y && !Y.repeat && O && Y.key === " " && we.stop(Y, () => {
      we.start(Y);
    }), Y.target === Y.currentTarget && _e() && Y.key === " " && Y.preventDefault(), b && b(Y), Y.target === Y.currentTarget && _e() && Y.key === "Enter" && !d && (Y.preventDefault(), m && m(Y));
  }), ot = Zt((Y) => {
    y && Y.key === " " && O && !Y.defaultPrevented && we.stop(Y, () => {
      we.pulsate(Y);
    }), M && M(Y), m && Y.target === Y.currentTarget && _e() && Y.key === " " && !Y.defaultPrevented && m(Y);
  });
  let it = f;
  it === "button" && (ye.href || ye.to) && (it = v);
  const Ye = {};
  it === "button" ? (Ye.type = ce === void 0 ? "button" : ce, Ye.disabled = d) : (!ye.href && !ye.to && (Ye.role = "button"), d && (Ye["aria-disabled"] = d));
  const Or = ao(r, Te), qt = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: y,
    tabIndex: D,
    focusVisible: O
  }, wt = Il(qt);
  return /* @__PURE__ */ W.jsxs(jl, {
    as: it,
    className: xe(wt.root, s),
    ownerState: qt,
    onBlur: $e,
    onClick: m,
    onContextMenu: V,
    onFocus: j,
    onKeyDown: Be,
    onKeyUp: ot,
    onMouseDown: K,
    onMouseLeave: X,
    onMouseUp: H,
    onDragLeave: L,
    onTouchEnd: Se,
    onTouchMove: $,
    onTouchStart: G,
    ref: Or,
    tabIndex: d ? -1 : D,
    type: ce,
    ...Ye,
    ...ye,
    children: [a, U ? /* @__PURE__ */ W.jsx(ei, {
      ref: w,
      center: i,
      ...q
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Sc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: vc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: l.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: l.elementType,
  /**
   * @ignore
   */
  onBlur: l.func,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * @ignore
   */
  onContextMenu: l.func,
  /**
   * @ignore
   */
  onDragLeave: l.func,
  /**
   * @ignore
   */
  onFocus: l.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * @ignore
   */
  onMouseDown: l.func,
  /**
   * @ignore
   */
  onMouseLeave: l.func,
  /**
   * @ignore
   */
  onMouseUp: l.func,
  /**
   * @ignore
   */
  onTouchEnd: l.func,
  /**
   * @ignore
   */
  onTouchMove: l.func,
  /**
   * @ignore
   */
  onTouchStart: l.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: l.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: l.oneOfType([l.func, l.shape({
    current: l.shape({
      pulsate: l.func.isRequired,
      start: l.func.isRequired,
      stop: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string])
});
function Nl(e) {
  return typeof e.main == "string";
}
function Bl(e, t = []) {
  if (!Nl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function fr(e = []) {
  return ([, t]) => t && Bl(t, e);
}
function Dl(e) {
  return Le("MuiButton", e);
}
const yt = We("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), ti = /* @__PURE__ */ I.createContext({});
process.env.NODE_ENV !== "production" && (ti.displayName = "ButtonGroupContext");
const ri = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (ri.displayName = "ButtonGroupButtonContext");
const Fl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${pe(t)}`, `size${pe(o)}`, `${i}Size${pe(o)}`, `color${pe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${pe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(o)}`]
  }, f = Qe(s, Dl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, ni = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], zl = Oe(Sn, {
  shouldForwardProp: (e) => To(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${pe(r.color)}`], t[`size${pe(r.size)}`], t[`${r.variant}Size${pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Et(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${yt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${yt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${yt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${yt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(fr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Ke(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${yt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${yt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Vl = Oe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...ni]
}), Ll = Oe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...ni]
}), Rr = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = I.useContext(ti), o = I.useContext(ri), i = ar(n, t), a = Ue({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: f = "primary",
    component: d = "button",
    className: p,
    disabled: h = !1,
    disableElevation: y = !1,
    disableFocusRipple: C = !1,
    endIcon: v,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: x = "medium",
    startIcon: _,
    type: R,
    variant: E = "text",
    ...b
  } = a, M = {
    ...a,
    color: f,
    component: d,
    disabled: h,
    disableElevation: y,
    disableFocusRipple: C,
    fullWidth: m,
    size: x,
    type: R,
    variant: E
  }, A = Fl(M), ee = _ && /* @__PURE__ */ W.jsx(Vl, {
    className: A.startIcon,
    ownerState: M,
    children: _
  }), Q = v && /* @__PURE__ */ W.jsx(Ll, {
    className: A.endIcon,
    ownerState: M,
    children: v
  }), c = o || "";
  return /* @__PURE__ */ W.jsxs(zl, {
    ownerState: M,
    className: xe(n.className, A.root, p, c),
    component: d,
    disabled: h,
    focusRipple: !C,
    focusVisibleClassName: xe(A.focusVisible, g),
    ref: r,
    type: R,
    ...b,
    classes: A,
    children: [ee, s, Q]
  });
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * Element placed after the children.
   */
  endIcon: l.node,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: l.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * Element placed before the children.
   */
  startIcon: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: l.oneOfType([l.oneOf(["contained", "outlined", "text"]), l.string])
});
function wu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ W.jsx(
      Rr,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function Wl(e) {
  return Le("MuiSvgIcon", e);
}
We("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ul = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(r)}`]
  };
  return Qe(o, Wl, n);
}, Yl = Oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pe(r.color)}`], t[`fontSize${pe(r.fontSize)}`]];
  }
})(Et(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, f, d, p, h, y, C, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (g) => !g.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : f.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var m, x;
        return {
          props: {
            color: g
          },
          style: {
            color: (x = (m = (e.vars ?? e).palette) == null ? void 0 : m[g]) == null ? void 0 : x.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (v = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) == null ? void 0 : v.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Ft = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: y = "0 0 24 24",
    ...C
  } = n, v = /* @__PURE__ */ I.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: a,
    component: s,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: y,
    hasSvgAsChild: v
  }, m = {};
  p || (m.viewBox = y);
  const x = Ul(g);
  return /* @__PURE__ */ W.jsxs(Yl, {
    as: s,
    className: xe(x.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...m,
    ...C,
    ...v && o.props,
    ownerState: g,
    children: [v ? o.props.children : o, h ? /* @__PURE__ */ W.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ft.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
Ft && (Ft.muiName = "SvgIcon");
function Cn(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ W.jsx(Ft, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ft.muiName, /* @__PURE__ */ I.memo(/* @__PURE__ */ I.forwardRef(r));
}
function ql(e) {
  return Le("MuiPaper", e);
}
We("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Hl = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Qe(i, ql, o);
}, Gl = Oe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Et(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), oi = /* @__PURE__ */ I.forwardRef(function(t, r) {
  var C;
  const n = Ue({
    props: t,
    name: "MuiPaper"
  }), o = hl(), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: f = !1,
    variant: d = "elevation",
    ...p
  } = n, h = {
    ...n,
    component: a,
    elevation: s,
    square: f,
    variant: d
  }, y = Hl(h);
  return process.env.NODE_ENV !== "production" && o.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ W.jsx(Gl, {
    as: a,
    ownerState: h,
    className: xe(y.root, i),
    ref: r,
    ...p,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[s],
        ...o.vars && {
          "--Paper-overlay": (C = o.vars.overlays) == null ? void 0 : C[s]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ke("#fff", Zr(s))}, ${Ke("#fff", Zr(s))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Yt(Rc, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: l.oneOfType([l.oneOf(["elevation", "outlined"]), l.string])
});
function Kl(e) {
  return Le("MuiIconButton", e);
}
const Xl = We("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Jl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${pe(n)}`, o && `edge${pe(o)}`, `size${pe(i)}`]
  };
  return Qe(a, Kl, t);
}, Ql = Oe(Sn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${pe(r.color)}`], r.edge && t[`edge${pe(r.edge)}`], t[`size${pe(r.size)}`]];
  }
})(Et(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Et(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(fr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(fr()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ke((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Xl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), zt = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: f = !1,
    disableFocusRipple: d = !1,
    disableRipple: p = !1,
    size: h = "medium",
    ...y
  } = n, C = {
    ...n,
    edge: o,
    color: s,
    disabled: f,
    disableFocusRipple: d,
    disableRipple: p,
    size: h
  }, v = Jl(C);
  return /* @__PURE__ */ W.jsx(Ql, {
    className: xe(v.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: f,
    disableRipple: p,
    ref: r,
    ...y,
    ownerState: C,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Yt(l.node, (e) => I.Children.toArray(e.children).some((r) => /* @__PURE__ */ I.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: l.oneOfType([l.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: l.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function Zl(e) {
  return Le("MuiTypography", e);
}
const vo = We("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), eu = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, tu = ml(), ru = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${pe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Qe(s, Zl, a);
}, nu = Oe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${pe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Et(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(fr()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${pe(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), So = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, bt = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = Ue({
    props: t,
    name: "MuiTypography"
  }), i = !eu[n], a = tu({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: s = "inherit",
    className: f,
    component: d,
    gutterBottom: p = !1,
    noWrap: h = !1,
    paragraph: y = !1,
    variant: C = "body1",
    variantMapping: v = So,
    ...g
  } = a, m = {
    ...a,
    align: s,
    color: n,
    className: f,
    component: d,
    gutterBottom: p,
    noWrap: h,
    paragraph: y,
    variant: C,
    variantMapping: v
  }, x = d || (y ? "p" : v[C] || So[C]) || "span", _ = ru(m);
  return /* @__PURE__ */ W.jsx(nu, {
    as: x,
    ref: r,
    className: xe(_.root, f),
    ...g,
    ownerState: m,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...g.style
    }
  });
});
process.env.NODE_ENV !== "production" && (bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: l.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: l.oneOfType([l.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: l.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: l.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: l.oneOfType([l.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), l.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: l.object
});
function ou(e) {
  return Le("MuiCard", e);
}
We("MuiCard", ["root"]);
const iu = (e) => {
  const {
    classes: t
  } = e;
  return Qe({
    root: ["root"]
  }, ou, t);
}, au = Oe(oi, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  overflow: "hidden"
}), ii = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...a
  } = n, s = {
    ...n,
    raised: i
  }, f = iu(s);
  return /* @__PURE__ */ W.jsx(au, {
    className: xe(f.root, o),
    elevation: i ? 8 : void 0,
    ref: r,
    ownerState: s,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Yt(l.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function su(e) {
  return Le("MuiCardContent", e);
}
We("MuiCardContent", ["root"]);
const cu = (e) => {
  const {
    classes: t
  } = e;
  return Qe({
    root: ["root"]
  }, su, t);
}, lu = Oe("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), ai = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...a
  } = n, s = {
    ...n,
    component: i
  }, f = cu(s);
  return /* @__PURE__ */ W.jsx(lu, {
    as: i,
    className: xe(f.root, o),
    ownerState: s,
    ref: r,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function uu(e) {
  return Le("MuiCardHeader", e);
}
const dr = We("MuiCardHeader", ["root", "avatar", "action", "content", "title", "subheader"]), fu = (e) => {
  const {
    classes: t
  } = e;
  return Qe({
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"]
  }, uu, t);
}, du = Oe("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (e, t) => ({
    [`& .${dr.title}`]: t.title,
    [`& .${dr.subheader}`]: t.subheader,
    ...t.root
  })
})({
  display: "flex",
  alignItems: "center",
  padding: 16
}), pu = Oe("div", {
  name: "MuiCardHeader",
  slot: "Avatar",
  overridesResolver: (e, t) => t.avatar
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16
}), hu = Oe("div", {
  name: "MuiCardHeader",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
}), mu = Oe("div", {
  name: "MuiCardHeader",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})({
  flex: "1 1 auto",
  [`.${vo.root}:where(& .${dr.title})`]: {
    display: "block"
  },
  [`.${vo.root}:where(& .${dr.subheader})`]: {
    display: "block"
  }
}), si = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiCardHeader"
  }), {
    action: o,
    avatar: i,
    className: a,
    component: s = "div",
    disableTypography: f = !1,
    subheader: d,
    subheaderTypographyProps: p,
    title: h,
    titleTypographyProps: y,
    ...C
  } = n, v = {
    ...n,
    component: s,
    disableTypography: f
  }, g = fu(v);
  let m = h;
  m != null && m.type !== bt && !f && (m = /* @__PURE__ */ W.jsx(bt, {
    variant: i ? "body2" : "h5",
    className: g.title,
    component: "span",
    ...y,
    children: m
  }));
  let x = d;
  return x != null && x.type !== bt && !f && (x = /* @__PURE__ */ W.jsx(bt, {
    variant: i ? "body2" : "body1",
    className: g.subheader,
    color: "textSecondary",
    component: "span",
    ...p,
    children: x
  })), /* @__PURE__ */ W.jsxs(du, {
    className: xe(g.root, a),
    as: s,
    ref: r,
    ownerState: v,
    ...C,
    children: [i && /* @__PURE__ */ W.jsx(pu, {
      className: g.avatar,
      ownerState: v,
      children: i
    }), /* @__PURE__ */ W.jsxs(mu, {
      className: g.content,
      ownerState: v,
      children: [m, x]
    }), o && /* @__PURE__ */ W.jsx(hu, {
      className: g.action,
      ownerState: v,
      children: o
    })]
  });
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display in the card header.
   */
  action: l.node,
  /**
   * The Avatar element to display.
   */
  avatar: l.node,
  /**
   * @ignore
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   * @default false
   */
  disableTypography: l.bool,
  /**
   * The content of the component.
   */
  subheader: l.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The content of the component.
   */
  title: l.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: l.object
});
function gu(e) {
  return Le("MuiCardMedia", e);
}
We("MuiCardMedia", ["root", "media", "img"]);
const yu = (e) => {
  const {
    classes: t,
    isMediaComponent: r,
    isImageComponent: n
  } = e;
  return Qe({
    root: ["root", r && "media", n && "img"]
  }, gu, t);
}, bu = Oe("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      isMediaComponent: n,
      isImageComponent: o
    } = r;
    return [t.root, n && t.media, o && t.img];
  }
})({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  variants: [{
    props: {
      isMediaComponent: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      isImageComponent: !0
    },
    style: {
      objectFit: "cover"
    }
  }]
}), vu = ["video", "audio", "picture", "iframe", "img"], Su = ["picture", "img"], ci = /* @__PURE__ */ I.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiCardMedia"
  }), {
    children: o,
    className: i,
    component: a = "div",
    image: s,
    src: f,
    style: d,
    ...p
  } = n, h = vu.includes(a), y = !h && s ? {
    backgroundImage: `url("${s}")`,
    ...d
  } : d, C = {
    ...n,
    component: a,
    isMediaComponent: h,
    isImageComponent: Su.includes(a)
  }, v = yu(C);
  return /* @__PURE__ */ W.jsx(bu, {
    className: xe(v.root, i),
    as: a,
    role: !h && s ? "img" : void 0,
    ref: r,
    style: y,
    ownerState: C,
    src: h ? s || f : void 0,
    ...p,
    children: o
  });
});
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: Yt(l.node, (e) => !e.children && !e.image && !e.src && !e.component ? new Error("MUI: Either `children`, `image`, `src` or `component` prop must be specified.") : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: l.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: l.string,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Cu = Cn(/* @__PURE__ */ W.jsx("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
}), "Share"), li = Cn(/* @__PURE__ */ W.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function Ru(e) {
  const {
    titulo: t,
    subcabecera: r,
    texto: n,
    imagen: o,
    onFavorite: i,
    onShare: a,
    textoBoton: s,
    onAction: f,
    desactivarCompartir: d,
    desactivarMeGusta: p,
    desactivarBoton: h,
    colorBotonMeGusta: y,
    colorBotonCompartir: C,
    colorBoton: v
  } = e;
  return (
    // El componente MoisesAntonioPC está basado en un Card de MUI
    /* @__PURE__ */ W.jsxs(ii, { sx: { maxWidth: 345 }, role: "card", children: [
      /* @__PURE__ */ W.jsx(
        si,
        {
          title: t,
          subheader: r
        }
      ),
      /* @__PURE__ */ W.jsx(
        ci,
        {
          component: "img",
          height: "194",
          image: o,
          alt: t
        }
      ),
      /* @__PURE__ */ W.jsx(ai, { children: /* @__PURE__ */ W.jsx(bt, { variant: "body2", color: "text.secondary", children: n }) }),
      /* @__PURE__ */ W.jsx(
        zt,
        {
          "aria-label": "add to favorites",
          onClick: i,
          disabled: p,
          children: /* @__PURE__ */ W.jsx(li, { style: { color: y } })
        }
      ),
      /* @__PURE__ */ W.jsx(
        zt,
        {
          "aria-label": "share",
          onClick: a,
          disabled: d,
          children: /* @__PURE__ */ W.jsx(Cu, { style: { color: C } })
        }
      ),
      /* @__PURE__ */ W.jsx(
        Rr,
        {
          size: "small",
          onClick: f,
          disabled: h,
          style: { color: v },
          children: s
        }
      )
    ] })
  );
}
function Ou(e) {
  const { text: t, txtcolor: r, bgcolor: n, borderColor: o, borderWidth: i, hoverTextColor: a, hoverBgColor: s, size: f, disabled: d, onClick: p } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ W.jsx(
      Rr,
      {
        type: "button",
        onClick: p,
        disabled: d,
        size: f,
        sx: {
          backgroundColor: n,
          color: r,
          // Cambiamos el color y la anchura del borde
          border: `${i} solid ${o}`,
          // Cambiamos los colores de fondo y de texto del botón cuando el cursor se encuentre encima del mismo
          ":hover": {
            color: a,
            backgroundColor: s
          }
        },
        children: t
      }
    )
  );
}
function $u(e) {
  const { color: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ W.jsx(
    zt,
    {
      disabled: r,
      onClick: n,
      children: /* @__PURE__ */ W.jsx(li, { style: { color: t } })
    }
  );
}
const xu = Cn(/* @__PURE__ */ W.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function Pu(e) {
  const { color: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ W.jsx(
    zt,
    {
      disabled: r,
      onClick: n,
      children: /* @__PURE__ */ W.jsx(xu, { style: { color: t } })
    }
  );
}
export {
  wu as CustomButton,
  Ru as MoisesAntonioPC,
  Ou as MyButton,
  $u as MyFavourite,
  Pu as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
