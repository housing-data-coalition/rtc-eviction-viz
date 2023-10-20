// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"YOwE":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
},{}],"pyFg":[function(require,module,exports) {
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var l = require("object-assign"),
  n = 60103,
  p = 60106;
exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
  r = 60110,
  t = 60112;
exports.Suspense = 60113;
var u = 60115,
  v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  if (null === a || "object" !== typeof a) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  B = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D() {}
D.prototype = C.prototype;
function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
    current: null
  },
  H = Object.prototype.hasOwnProperty,
  I = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function J(a, b, c) {
  var e,
    d = {},
    k = null,
    h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}
function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var M = /\/+/g;
function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }
  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (null == a) return a;
  var e = [],
    d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }
  if (1 === a._status) return a._result;
  throw a._result;
}
var R = {
  current: null
};
function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}
var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: P,
  forEach: function (a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function (a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
    d = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = J;
exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};
exports.isValidElement = L;
exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};
exports.useContext = function (a, b) {
  return S().useContext(a, b);
};
exports.useDebugValue = function () {};
exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};
exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};
exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};
exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};
exports.useRef = function (a) {
  return S().useRef(a);
};
exports.useState = function (a) {
  return S().useState(a);
};
exports.version = "17.0.2";
},{"object-assign":"YOwE"}],"HdMw":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"pyFg"}],"x9cO":[function(require,module,exports) {
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};

},{}],"IGIl":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"x9cO"}],"jF7N":[function(require,module,exports) {
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),m=require("object-assign"),r=require("scheduler");function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";

},{"react":"HdMw","object-assign":"YOwE","scheduler":"IGIl"}],"X9zx":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"jF7N"}],"Hh03":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNSAFE_ErrorResponseImpl = exports.UNSAFE_DeferredData = exports.UNSAFE_DEFERRED_SYMBOL = exports.IDLE_NAVIGATION = exports.IDLE_FETCHER = exports.IDLE_BLOCKER = exports.Action = exports.AbortedDeferredError = void 0;
exports.UNSAFE_convertRouteMatchToUiMatch = convertRouteMatchToUiMatch;
exports.UNSAFE_convertRoutesToDataRoutes = convertRoutesToDataRoutes;
exports.UNSAFE_getPathContributingMatches = getPathContributingMatches;
exports.UNSAFE_invariant = invariant;
exports.UNSAFE_warning = warning;
exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createPath = createPath;
exports.createRouter = createRouter;
exports.createStaticHandler = createStaticHandler;
exports.defer = void 0;
exports.generatePath = generatePath;
exports.getStaticContextFromError = getStaticContextFromError;
exports.getToPathname = getToPathname;
exports.isDeferredData = isDeferredData;
exports.isRouteErrorResponse = isRouteErrorResponse;
exports.json = exports.joinPaths = void 0;
exports.matchPath = matchPath;
exports.matchRoutes = matchRoutes;
exports.normalizePathname = void 0;
exports.parsePath = parsePath;
exports.redirectDocument = exports.redirect = void 0;
exports.resolvePath = resolvePath;
exports.resolveTo = resolveTo;
exports.stripBasename = stripBasename;
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (exports.Action = Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i],
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:(\w+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
exports.joinPaths = joinPaths;
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
exports.normalizePathname = normalizePathname;
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */
const json = exports.json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
exports.AbortedDeferredError = AbortedDeferredError;
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
exports.UNSAFE_DeferredData = DeferredData;
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer = exports.defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = exports.redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */
exports.redirectDocument = redirectDocument;
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
exports.UNSAFE_ErrorResponseImpl = ErrorResponseImpl;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = exports.IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = exports.IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = exports.IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  // Config driven behavior flags
  let future = _extends({
    v7_normalizeFormMethod: false,
    v7_prependBasename: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized =
  // All initialMatches need to be loaded before we're ready.  If we have lazy
  // functions around still then we'll need to run them in initialize()
  !initialMatches.some(m => m.route.lazy) && (
  // And we have to either have no loaders or have been provided hydrationData
  !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // Should the current navigation enable document.startViewTransition?
  let pendingViewTransitionEnabled = false;
  // Store applied view transitions so we can apply them on POP
  let appliedViewTransitions = new Map();
  // Cleanup function for persisting applied transitions to sessionStorage
  let removePageHideEventListener = null;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = [];
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let ignoreNextHistoryUpdate = false;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      // FIXME: This feels gross.  How can we cleanup the lines between
      // scrollRestoration/appliedTransitions persistance?
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState, viewTransitionOpts) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state, {
      unstable_viewTransitionOpts: viewTransitionOpts
    }));
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState) {
    var _location$state, _location$state2;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ;else if (pendingAction === Action.Pop) ;else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    // On POP, enable transitions if they were enabled on the original navigation
    if (pendingAction === Action.Pop) {
      // Forward takes precedence so they behave like the original navigation
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        // If we don't have a previous forward nav, assume we're popping back to
        // the new location and enable if that location previously enabled
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      // Store the applied transition on PUSH/REPLACE
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), viewTransitionOpts);
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ;else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.unstable_viewTransition
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      // Cancel all pending deferred on 404s since we don't keep any routes
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial load will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited) {
        return;
      }
      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      // Create a GET request for the loaders
      request = new Request(request.url, {
        signal: request.signal
      });
    }
    // Call loaders
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    });
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      return {
        shortCircuited: true
      };
    }
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }
    revalidatingFetchers.forEach(rf => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(state, redirect.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }));
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error);
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    let fetcher = getSubmittingFetcher(submission, existingFetcher);
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the action for the fetcher
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename);
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our action started, so that
        // should take precedence over this redirect navigation.  We already
        // set isRevalidationRequired so all loaders for the new route should
        // fire unless opted out via shouldRevalidate
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        let loadingFetcher = getLoadingFetcher(submission);
        state.fetchers.set(key, loadingFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return startRedirectNavigation(state, actionResult, {
          fetcherSubmission: submission
        });
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
      [match.route.id]: actionResult.data
    }, undefined // No need to send through errors since we short circuit above
    );
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(state, redirect.result);
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    let didAbortFetchLoads = abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key);
    // Put this fetcher into it's loading state
    let loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined);
    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the loader for this fetcher route match
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename);
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(state, result);
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key);
      // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?
      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    let doneFetcher = getDoneFetcher(result.data);
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(state, redirect, _temp) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp === void 0 ? {} : _temp;
    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }
    let redirectLocation = createLocation(state.location, redirect.location, {
      _isRedirect: true
    });
    invariant(redirectLocation, "Expected a location on the redirect navigation");
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.reloadDocument) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
        const url = init.history.createURL(redirect.location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(redirect.location);
        } else {
          routerWindow.location.assign(redirect.location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename)), ...fetchersToLoad.map(f => {
      if (f.matches && f.match && f.controller) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, fetchersToLoad.map(f => f.controller ? f.controller.signal : null), true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  router = {
    get basename() {
      return basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = exports.UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */
  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */
  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error) {
          throw e.response;
        }
        return e.response;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, {
        isStaticRequest: true,
        isRouteRequest,
        requestContext
      });
      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted: " + request.method + " " + request.url);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      });
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }
  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, {
      isStaticRequest: true,
      isRouteRequest,
      requestContext
    }))]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId != null && relative !== "path") {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route.  When using relative:path,
    // fromRouteId is ignored since that is always relative to the current
    // location path
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getPathContributingMatches(contextualMatches).map(m => m.pathnameBase), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Add an ?index param for matched index routes if we don't already have one
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (match.route.loader == null) {
      return false;
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate:
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired ||
      // Clicked the same link, resubmitted a GET form
      currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate if fetcher won't be present in the subsequent render
    if (!matches.some(m => m.route.id === f.routeId)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      // Always revalidate if the fetcher was cancelled
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate: isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let resultType;
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: opts.requestContext
    }), abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let values = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadLazyRouteModule(match.route, mapRouteProperties, manifest)]);
        if (handlerError) {
          throw handlerError;
        }
        result = values[0];
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          // Handler still run even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            data: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  if (isResponse(result)) {
    let status = result.status;
    // Process redirects
    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      // Support relative routing in internal redirects
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
      } else if (!opts.isStaticRequest) {
        // Strip off the protocol+origin for same-origin + same-basename absolute
        // redirects. If this is a static request, we can let it go back to the
        // browser as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      }
      // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account
      if (opts.isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }
      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown
    if (opts.isRouteRequest) {
      let queryRouteResponse = {
        type: resultType === ResultType.error ? ResultType.error : ResultType.data,
        response: result
      };
      throw queryRouteResponse;
    }
    let data;
    let contentType = result.headers.get("Content-Type");
    // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponseImpl(status, result.statusText, data),
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  // Process loader results into state.loaderData/state.errors
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }
      errors = errors || {};
      // Prefer higher error values if lower errors bubble to the same boundary
      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      }
      // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.
      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  // Process results from our revalidating fetchers
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.length === 1 ? routes[0] : routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
    // no-op, use default empty object
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
//#endregion
},{}],"QasS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AbortedDeferredError", {
  enumerable: true,
  get: function () {
    return _router.AbortedDeferredError;
  }
});
exports.Await = Await;
exports.MemoryRouter = MemoryRouter;
exports.Navigate = Navigate;
Object.defineProperty(exports, "NavigationType", {
  enumerable: true,
  get: function () {
    return _router.Action;
  }
});
exports.Outlet = Outlet;
exports.Route = Route;
exports.Router = Router;
exports.RouterProvider = RouterProvider;
exports.Routes = Routes;
exports.UNSAFE_RouteContext = exports.UNSAFE_NavigationContext = exports.UNSAFE_LocationContext = exports.UNSAFE_DataRouterStateContext = exports.UNSAFE_DataRouterContext = void 0;
exports.UNSAFE_mapRouteProperties = mapRouteProperties;
exports.UNSAFE_useRouteId = useRouteId;
exports.UNSAFE_useRoutesImpl = useRoutesImpl;
exports.createMemoryRouter = createMemoryRouter;
Object.defineProperty(exports, "createPath", {
  enumerable: true,
  get: function () {
    return _router.createPath;
  }
});
exports.createRoutesFromElements = exports.createRoutesFromChildren = createRoutesFromChildren;
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _router.defer;
  }
});
Object.defineProperty(exports, "generatePath", {
  enumerable: true,
  get: function () {
    return _router.generatePath;
  }
});
Object.defineProperty(exports, "isRouteErrorResponse", {
  enumerable: true,
  get: function () {
    return _router.isRouteErrorResponse;
  }
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _router.json;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function () {
    return _router.matchPath;
  }
});
Object.defineProperty(exports, "matchRoutes", {
  enumerable: true,
  get: function () {
    return _router.matchRoutes;
  }
});
Object.defineProperty(exports, "parsePath", {
  enumerable: true,
  get: function () {
    return _router.parsePath;
  }
});
Object.defineProperty(exports, "redirect", {
  enumerable: true,
  get: function () {
    return _router.redirect;
  }
});
Object.defineProperty(exports, "redirectDocument", {
  enumerable: true,
  get: function () {
    return _router.redirectDocument;
  }
});
exports.renderMatches = renderMatches;
Object.defineProperty(exports, "resolvePath", {
  enumerable: true,
  get: function () {
    return _router.resolvePath;
  }
});
exports.unstable_useBlocker = useBlocker;
exports.useActionData = useActionData;
exports.useAsyncError = useAsyncError;
exports.useAsyncValue = useAsyncValue;
exports.useHref = useHref;
exports.useInRouterContext = useInRouterContext;
exports.useLoaderData = useLoaderData;
exports.useLocation = useLocation;
exports.useMatch = useMatch;
exports.useMatches = useMatches;
exports.useNavigate = useNavigate;
exports.useNavigation = useNavigation;
exports.useNavigationType = useNavigationType;
exports.useOutlet = useOutlet;
exports.useOutletContext = useOutletContext;
exports.useParams = useParams;
exports.useResolvedPath = useResolvedPath;
exports.useRevalidator = useRevalidator;
exports.useRouteError = useRouteError;
exports.useRouteLoaderData = useRouteLoaderData;
exports.useRoutes = useRoutes;
var React = _interopRequireWildcard(require("react"));
var _router = require("@remix-run/router");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = exports.UNSAFE_DataRouterContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = exports.UNSAFE_DataRouterStateContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = exports.UNSAFE_NavigationContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = exports.UNSAFE_LocationContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = exports.UNSAFE_RouteContext = /*#__PURE__*/React.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if ("production" !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/React.createContext(null);
if ("production" !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = React.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0, _router.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  return React.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */
function useNavigationType() {
  return React.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let {
    pathname
  } = useLocation();
  return React.useMemo(() => (0, _router.matchPath)(pattern, pathname), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = React.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let dataRouterContext = React.useContext(DataRouterContext);
  let {
    basename,
    navigator
  } = React.useContext(NavigationContext);
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    "production" !== "production" ? (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/React.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */
function useOutletContext() {
  return React.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = React.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/React.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = React.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0, _router.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return React.useMemo(() => (0, _router.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let {
    navigator
  } = React.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = React.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if ("production" !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0, _router.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : (0, _router.UNSAFE_invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0, _router.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if ("production" !== "production") {
    "production" !== "production" ? (0, _router.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    "production" !== "production" ? (0, _router.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0, _router.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _router.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/React.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _router.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0, _router.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if ("production" !== "production") {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/React.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/React.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/React.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/React.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /*#__PURE__*/React.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/React.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = React.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/React.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : (0, _router.UNSAFE_invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    // Only data routers handle errors
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/React.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/React.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/React.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  !state ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = React.useContext(RouteContext);
  !route ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : (0, _router.UNSAFE_invariant)(false) : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return React.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return React.useMemo(() => matches.map(m => (0, _router.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = React.useContext(RouteContext);
  !route ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = React.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */
function useAsyncValue() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor `<Await />` value
 */
function useAsyncError() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = React.useState("");
  let blockerFunction = React.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0, _router.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0, _router.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  React.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  React.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _router.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    "production" !== "production" ? (0, _router.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    "production" !== "production" ? (0, _router.UNSAFE_warning)(false, message) : void 0;
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = React.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = React.useCallback(newState => {
    if (v7_startTransition && startTransitionImpl) {
      startTransitionImpl(() => setStateImpl(newState));
    } else {
      setStateImpl(newState);
    }
  }, [setStateImpl, v7_startTransition]);

  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  React.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  let navigator = React.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = React.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/React.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator
  }, state.initialized ? /*#__PURE__*/React.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, _router.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = React.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  React.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false,
  // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : (0, _router.UNSAFE_invariant)(false) : void 0;
  "production" !== "production" ? (0, _router.UNSAFE_warning)(!React.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0, _router.resolveTo)(to, (0, _router.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  React.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
  "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0, _router.UNSAFE_invariant)(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _router.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0, _router.UNSAFE_invariant)(false) : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0, _router.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React.useMemo(() => {
    let trailingPathname = (0, _router.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  "production" !== "production" ? (0, _router.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/React.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/React.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/React.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _router.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/React.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/React.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  React.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/React.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === React.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0, _router.UNSAFE_invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "An index route cannot have child routes.") : (0, _router.UNSAFE_invariant)(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if ("production" !== "production") {
      if (route.element) {
        "production" !== "production" ? (0, _router.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : void 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/React.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.ErrorBoundary) {
    if ("production" !== "production") {
      if (route.errorElement) {
        "production" !== "production" ? (0, _router.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : void 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/React.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0, _router.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0, _router.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties
  }).initialize();
}
},{"react":"HdMw","@remix-run/router":"Hh03"}],"Mzho":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AbortedDeferredError", {
  enumerable: true,
  get: function () {
    return _reactRouter.AbortedDeferredError;
  }
});
Object.defineProperty(exports, "Await", {
  enumerable: true,
  get: function () {
    return _reactRouter.Await;
  }
});
exports.BrowserRouter = BrowserRouter;
exports.Form = void 0;
exports.HashRouter = HashRouter;
exports.Link = void 0;
Object.defineProperty(exports, "MemoryRouter", {
  enumerable: true,
  get: function () {
    return _reactRouter.MemoryRouter;
  }
});
exports.NavLink = void 0;
Object.defineProperty(exports, "Navigate", {
  enumerable: true,
  get: function () {
    return _reactRouter.Navigate;
  }
});
Object.defineProperty(exports, "NavigationType", {
  enumerable: true,
  get: function () {
    return _reactRouter.NavigationType;
  }
});
Object.defineProperty(exports, "Outlet", {
  enumerable: true,
  get: function () {
    return _reactRouter.Outlet;
  }
});
Object.defineProperty(exports, "Route", {
  enumerable: true,
  get: function () {
    return _reactRouter.Route;
  }
});
Object.defineProperty(exports, "Router", {
  enumerable: true,
  get: function () {
    return _reactRouter.Router;
  }
});
exports.RouterProvider = RouterProvider;
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function () {
    return _reactRouter.Routes;
  }
});
exports.ScrollRestoration = ScrollRestoration;
Object.defineProperty(exports, "UNSAFE_DataRouterContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_DataRouterContext;
  }
});
Object.defineProperty(exports, "UNSAFE_DataRouterStateContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_DataRouterStateContext;
  }
});
Object.defineProperty(exports, "UNSAFE_LocationContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_LocationContext;
  }
});
Object.defineProperty(exports, "UNSAFE_NavigationContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_NavigationContext;
  }
});
Object.defineProperty(exports, "UNSAFE_RouteContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_RouteContext;
  }
});
exports.UNSAFE_ViewTransitionContext = void 0;
Object.defineProperty(exports, "UNSAFE_useRouteId", {
  enumerable: true,
  get: function () {
    return _reactRouter.UNSAFE_useRouteId;
  }
});
exports.UNSAFE_useScrollRestoration = useScrollRestoration;
exports.createBrowserRouter = createBrowserRouter;
exports.createHashRouter = createHashRouter;
Object.defineProperty(exports, "createMemoryRouter", {
  enumerable: true,
  get: function () {
    return _reactRouter.createMemoryRouter;
  }
});
Object.defineProperty(exports, "createPath", {
  enumerable: true,
  get: function () {
    return _reactRouter.createPath;
  }
});
Object.defineProperty(exports, "createRoutesFromChildren", {
  enumerable: true,
  get: function () {
    return _reactRouter.createRoutesFromChildren;
  }
});
Object.defineProperty(exports, "createRoutesFromElements", {
  enumerable: true,
  get: function () {
    return _reactRouter.createRoutesFromElements;
  }
});
exports.createSearchParams = createSearchParams;
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _reactRouter.defer;
  }
});
Object.defineProperty(exports, "generatePath", {
  enumerable: true,
  get: function () {
    return _reactRouter.generatePath;
  }
});
Object.defineProperty(exports, "isRouteErrorResponse", {
  enumerable: true,
  get: function () {
    return _reactRouter.isRouteErrorResponse;
  }
});
Object.defineProperty(exports, "json", {
  enumerable: true,
  get: function () {
    return _reactRouter.json;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function () {
    return _reactRouter.matchPath;
  }
});
Object.defineProperty(exports, "matchRoutes", {
  enumerable: true,
  get: function () {
    return _reactRouter.matchRoutes;
  }
});
Object.defineProperty(exports, "parsePath", {
  enumerable: true,
  get: function () {
    return _reactRouter.parsePath;
  }
});
Object.defineProperty(exports, "redirect", {
  enumerable: true,
  get: function () {
    return _reactRouter.redirect;
  }
});
Object.defineProperty(exports, "redirectDocument", {
  enumerable: true,
  get: function () {
    return _reactRouter.redirectDocument;
  }
});
Object.defineProperty(exports, "renderMatches", {
  enumerable: true,
  get: function () {
    return _reactRouter.renderMatches;
  }
});
Object.defineProperty(exports, "resolvePath", {
  enumerable: true,
  get: function () {
    return _reactRouter.resolvePath;
  }
});
exports.unstable_HistoryRouter = HistoryRouter;
Object.defineProperty(exports, "unstable_useBlocker", {
  enumerable: true,
  get: function () {
    return _reactRouter.unstable_useBlocker;
  }
});
exports.unstable_usePrompt = usePrompt;
exports.unstable_useViewTransitionState = useViewTransitionState;
Object.defineProperty(exports, "useActionData", {
  enumerable: true,
  get: function () {
    return _reactRouter.useActionData;
  }
});
Object.defineProperty(exports, "useAsyncError", {
  enumerable: true,
  get: function () {
    return _reactRouter.useAsyncError;
  }
});
Object.defineProperty(exports, "useAsyncValue", {
  enumerable: true,
  get: function () {
    return _reactRouter.useAsyncValue;
  }
});
exports.useBeforeUnload = useBeforeUnload;
exports.useFetcher = useFetcher;
exports.useFetchers = useFetchers;
exports.useFormAction = useFormAction;
Object.defineProperty(exports, "useHref", {
  enumerable: true,
  get: function () {
    return _reactRouter.useHref;
  }
});
Object.defineProperty(exports, "useInRouterContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.useInRouterContext;
  }
});
exports.useLinkClickHandler = useLinkClickHandler;
Object.defineProperty(exports, "useLoaderData", {
  enumerable: true,
  get: function () {
    return _reactRouter.useLoaderData;
  }
});
Object.defineProperty(exports, "useLocation", {
  enumerable: true,
  get: function () {
    return _reactRouter.useLocation;
  }
});
Object.defineProperty(exports, "useMatch", {
  enumerable: true,
  get: function () {
    return _reactRouter.useMatch;
  }
});
Object.defineProperty(exports, "useMatches", {
  enumerable: true,
  get: function () {
    return _reactRouter.useMatches;
  }
});
Object.defineProperty(exports, "useNavigate", {
  enumerable: true,
  get: function () {
    return _reactRouter.useNavigate;
  }
});
Object.defineProperty(exports, "useNavigation", {
  enumerable: true,
  get: function () {
    return _reactRouter.useNavigation;
  }
});
Object.defineProperty(exports, "useNavigationType", {
  enumerable: true,
  get: function () {
    return _reactRouter.useNavigationType;
  }
});
Object.defineProperty(exports, "useOutlet", {
  enumerable: true,
  get: function () {
    return _reactRouter.useOutlet;
  }
});
Object.defineProperty(exports, "useOutletContext", {
  enumerable: true,
  get: function () {
    return _reactRouter.useOutletContext;
  }
});
Object.defineProperty(exports, "useParams", {
  enumerable: true,
  get: function () {
    return _reactRouter.useParams;
  }
});
Object.defineProperty(exports, "useResolvedPath", {
  enumerable: true,
  get: function () {
    return _reactRouter.useResolvedPath;
  }
});
Object.defineProperty(exports, "useRevalidator", {
  enumerable: true,
  get: function () {
    return _reactRouter.useRevalidator;
  }
});
Object.defineProperty(exports, "useRouteError", {
  enumerable: true,
  get: function () {
    return _reactRouter.useRouteError;
  }
});
Object.defineProperty(exports, "useRouteLoaderData", {
  enumerable: true,
  get: function () {
    return _reactRouter.useRouteLoaderData;
  }
});
Object.defineProperty(exports, "useRoutes", {
  enumerable: true,
  get: function () {
    return _reactRouter.useRoutes;
  }
});
exports.useSearchParams = useSearchParams;
exports.useSubmit = useSubmit;
var React = _interopRequireWildcard(require("react"));
var _reactRouter = require("react-router");
var _router = require("@remix-run/router");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    "production" !== "production" ? (0, _router.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0, _router.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0, _router.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
  _excluded3 = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset", "unstable_viewTransition"];
function createBrowserRouter(routes, opts) {
  return (0, _router.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0, _router.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: _reactRouter.UNSAFE_mapRouteProperties,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0, _router.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0, _router.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: _reactRouter.UNSAFE_mapRouteProperties,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new _router.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
const ViewTransitionContext = exports.UNSAFE_ViewTransitionContext = /*#__PURE__*/React.createContext({
  isTransitioning: false
});
if ("production" !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];
function startTransitionSafe(cb) {
  if (startTransitionImpl) {
    startTransitionImpl(cb);
  } else {
    cb();
  }
}
class Deferred {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = value => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = reason => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = React.useState(router.state);
  let [pendingState, setPendingState] = React.useState();
  let [vtContext, setVtContext] = React.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = React.useState();
  let [transition, setTransition] = React.useState();
  let [interruption, setInterruption] = React.useState();
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = React.useCallback(cb => {
    if (v7_startTransition) {
      startTransitionSafe(cb);
    } else {
      cb();
    }
  }, [v7_startTransition]);
  let setState = React.useCallback((newState, _ref2) => {
    let {
      unstable_viewTransitionOpts: viewTransitionOpts
    } = _ref2;
    if (!viewTransitionOpts || router.window == null || typeof router.window.document.startViewTransition !== "function") {
      // Mid-navigation state update, or startViewTransition isn't available
      optInStartTransition(() => setStateImpl(newState));
    } else if (transition && renderDfd) {
      // Interrupting an in-progress transition, cancel and let everything flush
      // out, and then kick off a new transition from the interruption state
      renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      // Completed navigation update with opted-in view transitions, let 'er rip
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [optInStartTransition, transition, renderDfd, router.window]);
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  React.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  // When we start a view transition, create a Deferred we can use for the
  // eventual "completed" render
  React.useEffect(() => {
    if (vtContext.isTransitioning) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext.isTransitioning]);
  // Once the deferred is created, kick off startViewTransition() to update the
  // DOM and then wait on the Deferred to resolve (indicating the DOM update has
  // happened)
  React.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition = router.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition);
    }
  }, [optInStartTransition, pendingState, renderDfd, router.window]);
  // When the new location finally renders and is committed to the DOM, this
  // effect will run to resolve the transition
  React.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  // If we get interrupted with a new navigation during a transition, we skip
  // the active transition, let it cleanup, then kick it off again here
  React.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator = React.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = React.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactRouter.UNSAFE_DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/React.createElement(_reactRouter.UNSAFE_DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /*#__PURE__*/React.createElement(_reactRouter.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator
  }, state.initialized ? /*#__PURE__*/React.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement)))), null);
}
function DataRoutes(_ref3) {
  let {
    routes,
    state
  } = _ref3;
  return (0, _reactRouter.UNSAFE_useRoutesImpl)(routes, undefined, state);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window
  } = _ref4;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, _router.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = React.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  React.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/React.createElement(_reactRouter.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = React.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, _router.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = React.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  React.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/React.createElement(_reactRouter.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref6) {
  let {
    basename,
    children,
    future,
    history
  } = _ref6;
  let [state, setStateImpl] = React.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = React.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  React.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/React.createElement(_reactRouter.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if ("production" !== "production") {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = exports.Link = /*#__PURE__*/React.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      unstable_viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0, _router.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
        "production" !== "production" ? (0, _router.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : void 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0, _reactRouter.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    unstable_viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /*#__PURE__*/(
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if ("production" !== "production") {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = exports.NavLink = /*#__PURE__*/React.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      unstable_viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = (0, _reactRouter.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0, _reactRouter.useLocation)();
  let routerState = React.useContext(_reactRouter.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && unstable_viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    unstable_viewTransition: unstable_viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if ("production" !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = exports.Form = /*#__PURE__*/React.forwardRef((props, ref) => {
  let submit = useSubmit();
  return /*#__PURE__*/React.createElement(FormImpl, _extends({}, props, {
    submit: submit,
    ref: ref
  }));
});
if ("production" !== "production") {
  Form.displayName = "Form";
}
const FormImpl = /*#__PURE__*/React.forwardRef((_ref9, forwardedRef) => {
  let {
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      submit,
      relative,
      preventScrollReset,
      unstable_viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      state,
      relative,
      preventScrollReset,
      unstable_viewTransition
    });
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if ("production" !== "production") {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref10) {
  let {
    getKey,
    storageKey
  } = _ref10;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if ("production" !== "production") {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(_reactRouter.UNSAFE_DataRouterContext);
  !ctx ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(_reactRouter.UNSAFE_DataRouterStateContext);
  !state ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0, _router.UNSAFE_invariant)(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    unstable_viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0, _reactRouter.useNavigate)();
  let location = (0, _reactRouter.useLocation)();
  let path = (0, _reactRouter.useResolvedPath)(to, {
    relative
  });
  return React.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0, _reactRouter.createPath)(location) === (0, _reactRouter.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        unstable_viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, unstable_viewTransition]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
  "production" !== "production" ? (0, _router.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
  let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = React.useRef(false);
  let location = (0, _reactRouter.useLocation)();
  let searchParams = React.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0, _reactRouter.useNavigate)();
  let setSearchParams = React.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  let currentRouteId = (0, _reactRouter.UNSAFE_useRouteId)();
  return React.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    router.navigate(options.action || action, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType,
      replace: options.replace,
      state: options.state,
      fromRouteId: currentRouteId,
      unstable_viewTransition: options.unstable_viewTransition
    });
  }, [router, basename, currentRouteId]);
}
/**
 * Returns the implementation for fetcher.submit
 */
function useSubmitFetcher(fetcherKey, fetcherRouteId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitFetcher);
  let {
    basename
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  return React.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    !(fetcherRouteId != null) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "No routeId available for useFetcher()") : (0, _router.UNSAFE_invariant)(false) : void 0;
    router.fetch(fetcherKey, fetcherRouteId, options.action || action, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType
    });
  }, [router, basename, fetcherKey, fetcherRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  let routeContext = React.useContext(_reactRouter.UNSAFE_RouteContext);
  !routeContext ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0, _reactRouter.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params of the resolved URL. This is
  // the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927
  let location = (0, _reactRouter.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0, _router.joinPaths)([basename, path.pathname]);
  }
  return (0, _reactRouter.createPath)(path);
}
function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/React.forwardRef((props, ref) => {
    let submit = useSubmitFetcher(fetcherKey, routeId);
    return /*#__PURE__*/React.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      submit: submit
    }));
  });
  if ("production" !== "production") {
    FetcherForm.displayName = "fetcher.Form";
  }
  return FetcherForm;
}
let fetcherId = 0;
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher() {
  var _route$matches;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = React.useContext(_reactRouter.UNSAFE_RouteContext);
  !route ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let [fetcherKey] = React.useState(() => String(++fetcherId));
  let [Form] = React.useState(() => {
    !routeId ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()") : (0, _router.UNSAFE_invariant)(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = React.useState(() => href => {
    !router ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "No router available for fetcher.load()") : (0, _router.UNSAFE_invariant)(false) : void 0;
    !routeId ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : (0, _router.UNSAFE_invariant)(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitFetcher(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = React.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  React.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No router available to clean up from useFetcher()");
        return;
      }
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = React.useContext(_reactRouter.UNSAFE_NavigationContext);
  let location = (0, _reactRouter.useLocation)();
  let matches = (0, _reactRouter.useMatches)();
  let navigation = (0, _reactRouter.useNavigation)();
  // Trigger manual scroll restoration while we're active
  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(React.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
      "production" !== "production" ? (0, _router.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : void 0;
    }
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey(
      // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0, _router.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref11) {
  let {
    when,
    message
  } = _ref11;
  let blocker = (0, _reactRouter.unstable_useBlocker)(when);
  React.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  React.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = React.useContext(ViewTransitionContext);
  !(vtContext != null) ? "production" !== "production" ? (0, _router.UNSAFE_invariant)(false, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : (0, _router.UNSAFE_invariant)(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = (0, _reactRouter.useResolvedPath)(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = (0, _router.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = (0, _router.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" unstable_viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" unstable_viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return (0, _router.matchPath)(path.pathname, nextPath) != null || (0, _router.matchPath)(path.pathname, currentPath) != null;
}
//#endregion
},{"react":"HdMw","react-router":"QasS","@remix-run/router":"Hh03"}],"AJJT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHTMLElement = getHTMLElement;
/**
 * Find an element with the given HTML tag and selector, raising an exception
 * if it's not found.
 *
 * @param tagName The name of the element's HTML tag.
 * @param selector The selector for the element, not including its HTML tag.
 * @param parent The parent node to search within (defaults to `document`).
 */
function getHTMLElement(tagName, selector, parent = document) {
  const finalSelector = `${tagName}${selector}`;
  const node = parent.querySelector(finalSelector);
  if (!node) {
    throw new Error(`Couldn't find any elements matching "${finalSelector}"`);
  }
  return node;
}
},{}],"MNo7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNotNull = assertNotNull;
exports.assertNotUndefined = assertNotUndefined;
exports.hardFail = hardFail;
/**
 * Assert that the given argument isn't null and return it. Throw
 * an exception otherwise.
 *
 * This is primarily useful for situations where we're unable to
 * statically verify that something isn't null (e.g. due to the limitations
 * of typings we didn't write) but are sure it won't be in practice.
 */
function assertNotNull(thing) {
  if (thing === null) {
    throw new Error("Assertion failure, expected argument to not be null!");
  }
  return thing;
}
/**
 * Assert that the given argument isn't undefined and return it. Throw
 * an exception otherwise.
 *
 * This is primarily useful for situations where we're unable to
 * statically verify that something isn't undefined (e.g. due to the limitations
 * of typings we didn't write) but are sure it won't be in practice.
 */
function assertNotUndefined(thing) {
  if (thing === undefined) {
    throw new Error("Assertion failure, expected argument to not be undefined!");
  }
  return thing;
}
/**
 * This function throws an exception with the given optional message. It's
 * useful as an assertion in combination with the logical OR or nullish
 * coalescing operators, as a way of asserting that a value must always
 * be truthy or non-nullish.
 */
function hardFail(msg = "Code should never reach this point!") {
  throw new Error(msg);
}
},{}],"xScV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "assertNotNull", {
  enumerable: true,
  get: function () {
    return _assertions.assertNotNull;
  }
});
Object.defineProperty(exports, "assertNotUndefined", {
  enumerable: true,
  get: function () {
    return _assertions.assertNotUndefined;
  }
});
Object.defineProperty(exports, "getHTMLElement", {
  enumerable: true,
  get: function () {
    return _getHtmlElement.getHTMLElement;
  }
});
Object.defineProperty(exports, "hardFail", {
  enumerable: true,
  get: function () {
    return _assertions.hardFail;
  }
});
var _getHtmlElement = require("./get-html-element");
var _assertions = require("./assertions");
},{"./get-html-element":"AJJT","./assertions":"MNo7"}],"Bt2I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.setCookie = exports.getCookie = void 0;
exports.stringifyOptions = stringifyOptions;
var _react = require("react");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isBrowser = typeof window !== 'undefined';
function stringifyOptions(options) {
  return Object.keys(options).reduce(function (acc, key) {
    if (key === 'days') {
      return acc;
    } else {
      if (options[key] === false) {
        return acc;
      } else if (options[key] === true) {
        return "".concat(acc, "; ").concat(key);
      } else {
        return "".concat(acc, "; ").concat(key, "=").concat(options[key]);
      }
    }
  }, '');
}
var setCookie = function setCookie(name, value, options) {
  if (!isBrowser) return;
  var optionsWithDefaults = _objectSpread({
    days: 7,
    path: '/'
  }, options);
  var expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + stringifyOptions(optionsWithDefaults);
};
exports.setCookie = setCookie;
var getCookie = function getCookie(name) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isBrowser && document.cookie.split('; ').reduce(function (r, v) {
    var parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '') || initialValue;
};
exports.getCookie = getCookie;
function _default(key, initialValue) {
  var _useState = (0, _react.useState)(function () {
      return getCookie(key, initialValue);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    item = _useState2[0],
    setItem = _useState2[1];
  var updateItem = function updateItem(value, options) {
    setItem(value);
    setCookie(key, value, options);
  };
  return [item, updateItem];
}
},{"react":"HdMw"}],"vdre":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContext = void 0;
exports.AuthProvider = AuthProvider;
var _react = _interopRequireDefault(require("react"));
var _reactUseCookie = _interopRequireDefault(require("react-use-cookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AuthContext = exports.AuthContext = _react.default.createContext(null);
function AuthProvider({
  children
}) {
  let [isAuthenticated, setAuthentication] = (0, _reactUseCookie.default)("auth", "");
  let signin = (password, callback) => {
    setAuthentication(password);
    callback();
  };
  let value = {
    isAuthenticated,
    signin
  };
  return _react.default.createElement(AuthContext.Provider, {
    value: value
  }, children);
}
},{"react":"HdMw","react-use-cookie":"Bt2I"}],"vbQr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureString = ensureString;
exports.toInt = toInt;
exports.toIntOrNull = toIntOrNull;
/**
 * Convert the given value to an integer, throwing an error if
 * the conversion doesn't work.
 */
function toInt(value) {
  const result = parseInt(value);
  if (isNaN(result)) {
    throw new Error(`"${value}" is not an integer!`);
  }
  return result;
}
/**
 * Convert the given value to either an integer or just pass it
 * through if it's null. Throw an error if the conversion doesn't work.
 */
function toIntOrNull(value) {
  if (value === null) return null;
  return toInt(value);
}
/**
 * Ensure the given value is a string, throwing an error otherwise.
 */
function ensureString(value) {
  if (typeof value !== "string") {
    throw new Error(`"${value}" is not a string!`);
  }
  return value;
}
},{}],"Yro0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryFiles = void 0;
class QueryFiles {
  constructor(baseName) {
    this.baseName = baseName;
    this.sql = `${baseName}.sql`;
    this.json = `${baseName}.json`;
    this.csv = `${baseName}.csv`;
  }
}
exports.QueryFiles = QueryFiles;
},{}],"A0lQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EvictionTimeSeriesQuery = exports.EVICTION_TIME_SERIES = void 0;
exports.convertEvictionTimeSeriesRow = convertEvictionTimeSeriesRow;
var _converters = require("../converters");
var _query = require("../query");
const EVICTION_TIME_SERIES = exports.EVICTION_TIME_SERIES = new _query.QueryFiles(`eviction-time-series`);
function convertEvictionTimeSeriesRow(row) {
  return {
    day: row.day.toISOString(),
    nyc_holdover_filings: (0, _converters.toInt)(row.nyc_holdover_filings),
    nyc_holdover_res_filings: (0, _converters.toInt)(row.nyc_holdover_res_filings),
    nyc_nonpay_filings: (0, _converters.toInt)(row.nyc_nonpay_filings),
    nyc_nonpay_res_filings: (0, _converters.toInt)(row.nyc_nonpay_res_filings),
    outside_nyc_holdover_filings: (0, _converters.toInt)(row.outside_nyc_holdover_filings),
    outside_nyc_nonpay_filings: (0, _converters.toInt)(row.outside_nyc_nonpay_filings),
    total_filings: (0, _converters.toInt)(row.total_filings)
  };
}
function getEvictionTimeSeriesCsvHeader() {
  return ['day', 'nyc_holdover_filings', 'nyc_holdover_res_filings', 'nyc_nonpay_filings', 'nyc_nonpay_res_filings', 'outside_nyc_holdover_filings', 'outside_nyc_nonpay_filings', 'total_filings'];
}
function toEvictionTimeSeriesCsvRow(row) {
  return [row.day.substr(0, 10), row.nyc_holdover_filings.toString(), row.nyc_holdover_res_filings.toString(), row.nyc_nonpay_filings.toString(), row.nyc_nonpay_res_filings.toString(), row.outside_nyc_holdover_filings.toString(), row.outside_nyc_nonpay_filings.toString(), row.total_filings.toString()];
}
const EvictionTimeSeriesQuery = exports.EvictionTimeSeriesQuery = {
  files: EVICTION_TIME_SERIES,
  sqlToRow: convertEvictionTimeSeriesRow,
  csvHeader: getEvictionTimeSeriesCsvHeader(),
  toCsvRow: toEvictionTimeSeriesCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"FhqL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilingsByZipQuery = exports.FILINGS_BY_ZIP_EMPTY_ROW = exports.FILINGS_BY_ZIP = void 0;
exports.convertFilingsByZipRow = convertFilingsByZipRow;
var _converters = require("../converters");
var _query = require("../query");
const FILINGS_BY_ZIP = exports.FILINGS_BY_ZIP = new _query.QueryFiles(`filings-by-zip-since-0323`);
const FILINGS_BY_ZIP_EMPTY_ROW = exports.FILINGS_BY_ZIP_EMPTY_ROW = {
  zipcode: '',
  filings_since_032320: 0,
  unitsres_total: null,
  unitsrental: null,
  filingsrate_2plus: null
};
function convertFilingsByZipRow(row) {
  return {
    zipcode: (0, _converters.ensureString)(row.zipcode),
    filings_since_032320: (0, _converters.toInt)(row.filings_since_032320),
    unitsres_total: (0, _converters.toIntOrNull)(row.unitsres_total),
    unitsrental: (0, _converters.toIntOrNull)(row.unitsrental),
    filingsrate_2plus: (0, _converters.toIntOrNull)(row.filingsrate_2plus)
  };
}
function getCsvHeader() {
  return ['zipcode', 'filings_since_032320', 'unitsres_total', 'unitsrental', 'filingsrate_2plus'];
}
function toCsvRow(row) {
  var _a, _b, _c, _d, _e, _f;
  return [row.zipcode, row.filings_since_032320.toString(), (_b = (_a = row.unitsres_total) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', (_d = (_c = row.unitsrental) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '', (_f = (_e = row.filingsrate_2plus) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : ''];
}
const FilingsByZipQuery = exports.FilingsByZipQuery = {
  files: FILINGS_BY_ZIP,
  sqlToRow: convertFilingsByZipRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"ZOHx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonLoader = JsonLoader;
var _react = require("react");
/**
 * Global singleton to cache all our data requests.
 */
const requests = new Map();
function getRequest(url) {
  let request = requests.get(url);
  if (!request) {
    request = fetch(url).then(res => {
      if (!res.ok) {
        throw new Error(`Got HTTP ${res.status} when fetching ${url}`);
      }
      return res.json();
    });
    requests.set(url, request);
  }
  return request;
}
/**
 * Lazily-load a JSON file, showing the given fallback component until
 * the loading is complete.
 *
 * Once the loading is complete, the child is rendered and passed
 * the loaded data.
 *
 * NOTE: At present, the data, once loaded, is never freed.
 */
function JsonLoader(props) {
  const {
    url
  } = props;
  const [data, setData] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    getRequest(url).then(data => {
      setData(data);
    });
  }, [url]);
  if (data === null) return props.fallback;
  return props.children(data);
}
},{"react":"HdMw"}],"teeT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VizFallback = exports.VIZ_TIME_SERIES_SHORT_CLASS = exports.VIZ_TIME_SERIES_CLASS = exports.VIZ_TABLE_CLASS = exports.VIZ_GEO_CLASS = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** A visualization that represents a geographic map (e.g. chloropeth). */
const VIZ_GEO_CLASS = exports.VIZ_GEO_CLASS = "viz-geo";
/** A visualization that represents a time series. */
const VIZ_TIME_SERIES_CLASS = exports.VIZ_TIME_SERIES_CLASS = "viz-time-series";
const VIZ_TIME_SERIES_SHORT_CLASS = exports.VIZ_TIME_SERIES_SHORT_CLASS = "viz-time-series-short";
/** A visualization that represents a table. */
const VIZ_TABLE_CLASS = exports.VIZ_TABLE_CLASS = "viz-table";
// https://commons.wikimedia.org/wiki/File:Chromiumthrobber.svg
const ChromiumThrobber = () => _react.default.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 300 300",
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1"
}, _react.default.createElement("path", {
  d: "M 150,0\n            a 150,150 0 0,1 106.066,256.066\n            l -35.355,-35.355\n            a -100,-100 0 0,0 -70.711,-170.711 z",
  fill: "#000000"
}, _react.default.createElement("animateTransform", {
  attributeName: "transform",
  attributeType: "XML",
  type: "rotate",
  from: "0 150 150",
  to: "360 150 150",
  begin: "0s",
  dur: "1s",
  fill: "freeze",
  repeatCount: "indefinite"
})));
/**
 * Fallback component for a visualization that is still loading, letting
 * the user know that loading is occurring without causing layout
 * instability.
 */
const VizFallback = ({
  className
}) => _react.default.createElement("div", {
  className: `${className} loading`
}, _react.default.createElement(ChromiumThrobber, null));
exports.VizFallback = VizFallback;
},{"react":"HdMw"}],"Bh1I":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"z1Am":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;
function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }
  var id = bundles[bundles.length - 1];
  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }
    throw err;
  }
}
function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}
var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}
module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }
  if (bundles[bundle]) {
    return bundles[bundle];
  }
  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }
      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}
function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}
LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};
LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"Bh1I"}],"o1jW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyVegaLite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _vizUtil = require("./viz-util");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const VegaLite = _react.default.lazy(() => require("_bundle_loader")(require.resolve("./vega")));
/**
 * Lazily-load a Vega visualization, showing a throbber while it's loading.
 * This will also lazily load the Vega library itself, which can be quite large.
 */
const LazyVegaLite = props => {
  return _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: props.className || ''
    })
  }, _react.default.createElement(VegaLite, {
    ...props
  }));
};
exports.LazyVegaLite = LazyVegaLite;
},{"react":"HdMw","./viz-util":"teeT","_bundle_loader":"z1Am","./vega":[["vega.9e91e01b.js","saqM"],"saqM"]}],"tEet":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EvictionVisualizations = exports.EVICTION_VISUALIZATIONS = void 0;
exports.isEvictionTimeSeriesNumericField = isEvictionTimeSeriesNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getEvictionDataLagDate(data, lagDays) {
  const maxEvictionDateNum = Math.max.apply(Math, data.map(row => Date.parse(row.day)));
  let returnDate = new Date(maxEvictionDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}
const EvictionViz = props => {
  return _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.EVICTION_TIME_SERIES.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: `${_vizUtil.VIZ_TIME_SERIES_CLASS} ${_vizUtil.VIZ_TIME_SERIES_SHORT_CLASS}`
    })
  }, values => _react.default.createElement(EvictionVizWithValues, {
    values: values,
    ...props
  }));
};
const EvictionVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2020-01-05 00:00:00" : "2020-01-01 00:00:00"));
  const casesSinceCovid = values.filter(row => row.day >= "2020-03-23 00:00:00").reduce((total, row) => total + row[fieldName], 0);
  const EvictionDataLagStart = getEvictionDataLagDate(values, 30); // 4 weeks for lag
  const EvictionDataLagEnd = getEvictionDataLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day" : timeUnit === "yearweek" ? "Week" : "Month";
  const lineColor = "#AF2525";
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height,
    title: {
      text: `${title}, 2020 - Present`,
      subtitle: [`Cases since COVID-19 (all cases, active and disposed): ${casesSinceCovid.toLocaleString()}`,
      // This effectively adds extra padding below the subtitle.
      ""]
    },
    layer: [{
      data: {
        values: [{
          lagDateStart: EvictionDataLagStart,
          lagDateEnd: EvictionDataLagEnd
        }]
      },
      layer: [{
        mark: {
          type: "rect",
          color: "grey",
          opacity: 0.3
        },
        encoding: {
          x: {
            field: "lagDateStart",
            type: "temporal"
          },
          x2: {
            field: "lagDateEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "right",
          baseline: "bottom",
          dy: -(height / 2) - 1,
          text: "Due to reporting lags, data for most recent weeks (in gray) is incomplete"
        },
        encoding: {
          x: {
            field: "lagDateEnd",
            type: "temporal"
          }
        }
      }]
    }, {
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "day"
        },
        tooltip: [{
          field: "day",
          timeUnit,
          title: `${timeUnitLabel} of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          aggregate: "sum",
          title: "Filings",
          formatType: "numberWithCommas"
        }]
      },
      layer: [{
        mark: {
          type: "line",
          color: lineColor,
          interpolate: "monotone"
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y",
              labelAngle: 45
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {
              title: `Eviction Filings per ${timeUnitLabel}`
            }
          }
        }
      }, {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "point",
          strokeWidth: 4,
          color: lineColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "day"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }]
  };
  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: `${_vizUtil.VIZ_TIME_SERIES_SHORT_CLASS} ${_vizUtil.VIZ_TIME_SERIES_CLASS}`
  });
};
function isEvictionTimeSeriesNumericField(value) {
  return EVICTION_VISUALIZATIONS.has(value);
}
const EVICTION_VISUALIZATIONS = exports.EVICTION_VISUALIZATIONS = new Map([["total_filings", "Total NY State Eviction Filings"], ["nyc_holdover_filings", "NYC Holdover Filings"], ["nyc_holdover_res_filings", "NYC Holdover Residential Filings"], ["nyc_nonpay_filings", "NYC Non-Payment Filings"], ["nyc_nonpay_res_filings", "NYC Non-Payment Residential Filings"], ["outside_nyc_holdover_filings", "Upstate Holdover Filings"], ["outside_nyc_nonpay_filings", "Upstate Non-Payment Filings"]]);
const EvictionVisualizations = ({
  height,
  fieldNames
}) => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  fieldNames = fieldNames || Array.from(EVICTION_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, "View by:\u00A0\u00A0", _react.default.createElement("label", null, _react.default.createElement("input", {
    type: "radio",
    name: "timeUnit",
    value: "yearmonthdate",
    checked: timeUnit === "yearmonthdate",
    onChange: e => setTimeUnit("yearmonthdate")
  }), "Day"), "\u00A0\u00A0", _react.default.createElement("label", null, _react.default.createElement("input", {
    type: "radio",
    name: "timeUnit",
    value: "yearweek",
    checked: timeUnit === "yearweek",
    onChange: e => setTimeUnit("yearweek")
  }), "Week"), "\u00A0\u00A0", _react.default.createElement("label", null, _react.default.createElement("input", {
    type: "radio",
    name: "timeUnit",
    value: "yearmonth",
    checked: timeUnit === "yearmonth",
    onChange: e => setTimeUnit("yearmonth")
  }), "Month")), fieldNames.map(fieldName => _react.default.createElement(EvictionViz, {
    key: fieldName,
    height: height,
    timeUnit: timeUnit,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(EVICTION_VISUALIZATIONS.get(fieldName))
  })));
};
exports.EvictionVisualizations = EvictionVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"A0lQ"}],"CGwy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveCasesQuery = exports.ACTIVE_CASES = void 0;
exports.convertActiveCasesRow = convertActiveCasesRow;
var _converters = require("../converters");
var _query = require("../query");
const ACTIVE_CASES = exports.ACTIVE_CASES = new _query.QueryFiles(`total-active-cases`);
function convertActiveCasesRow(row) {
  return {
    day: row.day.toISOString(),
    active_cases: (0, _converters.toInt)(row.active_cases)
  };
}
function getActiveCasesCsvHeader() {
  return ['day', 'active_cases'];
}
function toActiveCasesCsvRow(row) {
  return [row.day.substr(0, 10), row.active_cases.toString()];
}
const ActiveCasesQuery = exports.ActiveCasesQuery = {
  files: ACTIVE_CASES,
  sqlToRow: convertActiveCasesRow,
  csvHeader: getActiveCasesCsvHeader(),
  toCsvRow: toActiveCasesCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"n7Ht":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveCasesVisualizations = exports.ACTIVECASES_VISUALIZATIONS = void 0;
exports.isActiveCasesNumericField = isActiveCasesNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getActiveCasesLagDate(data, lagDays) {
  const maxActiveCasesDateNum = Math.max.apply(Math, data.map(row => Date.parse(row.day)));
  let returnDate = new Date(maxActiveCasesDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}
const ActiveCasesViz = props => {
  return _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.ACTIVE_CASES.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TIME_SERIES_CLASS
    })
  }, values => _react.default.createElement(ActiveCasesVizWithValues, {
    values: values,
    ...props
  }));
};
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const ActiveCasesVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  var _a;
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2020-01-05 00:00:00" : "2020-01-01 00:00:00"));
  //   const casesSinceCovid = values.filter(
  //     row => row.day >= "2020-03-23 00:00:00"
  //   ).reduce(
  //     (total, row) => total + row[fieldName], 0
  //   );
  // commented this out because this counter should probably be different from total active cases
  const ActiveCasesDataLagStart = getActiveCasesLagDate(values, 30); // 4 weeks for lag
  const ActiveCasesDataLagEnd = getActiveCasesLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day" : timeUnit === "yearweek" ? "Week" : "Month";
  const lineColor = "#AF2525";
  const MoratoriumStart = new Date("2020-03-17");
  const MoratoriumEnd = new Date("2020-06-20");
  const MoratoriumMid = new Date("2020-05-05");
  const MorTwoStart = new Date("2020-12-28");
  const MorTwoEnd = new Date("2021-02-26");
  const MorTwoMid = new Date("2021-01-26");
  const lineTop = 20;
  const lineBottom = 20;
  const casesCovidStart = (_a = values.find(datapoint => datapoint.day === '2020-03-16T04:00:00.000Z')) === null || _a === void 0 ? void 0 : _a.active_cases;
  const casesCovidStartThousands = thousands_separators(casesCovidStart);
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      text: `${title}`,
      fontSize: 16,
      subtitle: [`January 2020 - Present`,
      // This effectively adds extra padding below the subtitle.
      ""]
    },
    layer: [{
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "day"
        },
        tooltip: [{
          field: "day",
          timeUnit,
          title: `${timeUnitLabel} of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          aggregate: "sum",
          title: "Active Cases",
          formatType: "numberWithCommas"
        }]
      },
      layer: [{
        mark: {
          type: "area",
          color: lineColor,
          interpolate: "monotone",
          opacity: 0.6
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y",
              labelAngle: 45,
              grid: false
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {
              title: `Total Active Cases`
            },
            scale: {
              "zero": false
            }
          }
        }
      }, {
        mark: {
          type: "line",
          color: lineColor,
          interpolate: "monotone",
          strokeWidth: 4
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y"
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {},
            scale: {
              "zero": false
            }
          }
        }
      }, {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "point",
          strokeWidth: 4,
          color: lineColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "day"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }, {
      data: {
        values: [{
          lagDateStart: ActiveCasesDataLagStart,
          lagDateEnd: ActiveCasesDataLagEnd
        }]
      },
      layer: [{
        mark: {
          type: "rect",
          color: "grey",
          opacity: 0
        },
        encoding: {
          x: {
            field: "lagDateStart",
            type: "temporal"
          },
          x2: {
            field: "lagDateEnd",
            type: "temporal"
          }
        }
      }
      // Request to take this out and include as note below chart instead.
      // {
      //   mark: {
      //     type: "text",
      //     align: "center",
      //     baseline: "bottom",
      //     dy: -(height)-35,
      //     dx: -50,
      //     fontSize: 12,
      //     text: ["Recent court data incomplete", "due to reporting lags"]
      //   },
      //   encoding: {
      //     x: { field: "lagDateEnd", type: "temporal" },
      //   },
      // },
      ]
    }, {
      data: {
        values: [{
          morDateStart: MoratoriumStart,
          morDateEnd: MoratoriumEnd,
          morDateMid: MoratoriumMid,
          morTwoStart: MorTwoStart,
          morTwoEnd: MorTwoEnd,
          morTwoMid: MorTwoMid,
          covidCasesStart: 150000
        }]
      },
      layer: [{
        // For some reason this gray rectangle and the
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          },
          x2: {
            field: "morDateEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Eviction", "Moratorium"]
        },
        encoding: {
          x: {
            field: "morDateMid",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morTwoStart",
            type: "temporal"
          },
          x2: {
            field: "morTwoEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Most Eviction", "Cases Paused"]
        },
        encoding: {
          x: {
            field: "morTwoMid",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          fontSize: 12,
          dy: height / 6,
          text: [`There were ${casesCovidStartThousands}`, `eviction cases at the`, `start of the pandemic`]
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          }
        }
      }
      // {
      //   mark: { 
      //     type: "rect", 
      //     color: "black", 
      //     opacity: 1,
      //     width: 2, 
      //     y: 170,
      //     y2: 240,
      // },
      //   encoding: {
      //     x: { field: "morDateStart", type: "temporal" },
      //   },
      // },
      ]
    }]
  };

  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: _vizUtil.VIZ_TIME_SERIES_CLASS
  });
};
function isActiveCasesNumericField(value) {
  return ACTIVECASES_VISUALIZATIONS.has(value);
}
const ACTIVECASES_VISUALIZATIONS = exports.ACTIVECASES_VISUALIZATIONS = new Map([["active_cases", "Active Eviction Cases in New York State"]]);
const ActiveCasesVisualizations = ({
  height,
  fieldNames
}) => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  fieldNames = fieldNames || Array.from(ACTIVECASES_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, fieldNames.map(fieldName => _react.default.createElement(ActiveCasesViz, {
    key: fieldName,
    height: height,
    timeUnit: timeUnit,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(ACTIVECASES_VISUALIZATIONS.get(fieldName))
  })));
};
exports.ActiveCasesVisualizations = ActiveCasesVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"CGwy"}],"cfwr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarshalEvicsQuery = exports.MARSHALEVICS = void 0;
exports.convertMarshalEvicsRow = convertMarshalEvicsRow;
var _converters = require("../converters");
var _query = require("../query");
const MARSHALEVICS = exports.MARSHALEVICS = new _query.QueryFiles(`marshal-evictions-by-week`);
function convertMarshalEvicsRow(row) {
  return {
    week_eviction: row.week_eviction.toISOString(),
    marshalevictions: (0, _converters.toInt)(row.marshalevictions)
  };
}
function getMarshalEvicsCsvHeader() {
  return ['week_eviction', 'marshalevictions'];
}
function toMarshalEvicsCsvRow(row) {
  return [row.week_eviction.substr(0, 10), row.marshalevictions.toString()];
}
const MarshalEvicsQuery = exports.MarshalEvicsQuery = {
  files: MARSHALEVICS,
  sqlToRow: convertMarshalEvicsRow,
  csvHeader: getMarshalEvicsCsvHeader(),
  toCsvRow: toMarshalEvicsCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"gxny":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarshalEvicsVisualizations = exports.MARSHALEVICS_VISUALIZATIONS = void 0;
exports.isMarshalEvicsNumericField = isMarshalEvicsNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getMarshalEvicsLagDate(data, lagDays) {
  const maxMarshalEvicsDateNum = Math.max.apply(Math, data.map(row => Date.parse(row.week_eviction)));
  let returnDate = new Date(maxMarshalEvicsDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}
const MarshalEvicsViz = props => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  return _react.default.createElement("div", null, _react.default.createElement("form", null, _react.default.createElement("input", {
    type: "radio",
    name: "citywide-timeunit",
    id: "citywide-yearweek",
    checked: timeUnit === "yearweek",
    onChange: e => setTimeUnit("yearweek")
  }), _react.default.createElement("label", {
    htmlFor: "citywide-yearweek"
  }, "Week"), _react.default.createElement("input", {
    type: "radio",
    name: "citywide-timeunit",
    id: "citywide-yearmonth",
    checked: timeUnit === "yearmonth",
    onChange: e => setTimeUnit("yearmonth")
  }), _react.default.createElement("label", {
    htmlFor: "citywide-yearmonth"
  }, "Month")), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.MARSHALEVICS.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TIME_SERIES_CLASS
    })
  }, values => _react.default.createElement(MarshalEvicsVizWithValues, {
    values: values,
    timeUnit: timeUnit,
    ...props
  })));
};
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const MarshalEvicsVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.week_eviction >= (timeUnit === "yearweek" ? "2021-06-01 00:00:00" : "2021-06-01 00:00:00"));
  const evictionsSinceJan = values.filter(row => row.week_eviction >= "2022-01-14 00:00:00").reduce((total, row) => total + row[fieldName], 0);
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day" : timeUnit === "yearweek" ? "Week" : "Month";
  const barColor = "#B73A3A";
  const selectedBarColor = "#AF2525";
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      align: "left",
      anchor: "start",
      text: `${title}`,
      fontSize: 24,
      subtitle: [`There have been ${thousands_separators(evictionsSinceJan)} residential evictions by court-ordered`, `marshals since eviction protections expired on January 15, 2022.`,
      // This effectively adds extra padding below the subtitle.
      ""],
      subtitleFontSize: 16
    },
    layer: [{
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "week_eviction"
        },
        tooltip: [{
          field: "week_eviction",
          timeUnit,
          title: `${timeUnitLabel} of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          aggregate: "sum",
          title: "Evictions",
          formatType: "numberWithCommas"
        }]
      },
      layer: [{
        mark: {
          type: "bar",
          color: barColor,
          interpolate: "monotone",
          opacity: 0.9
        },
        encoding: {
          x: {
            timeUnit,
            field: "week_eviction",
            axis: {
              title: "",
              format: "%b ’%y",
              labelAngle: 45,
              grid: false
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {
              title: `Total Evictions`
            },
            scale: {
              "zero": false
            }
          }
        }
      }, {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "bar",
          strokeWidth: 4,
          color: selectedBarColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "week_eviction"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }]
  };
  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: _vizUtil.VIZ_TIME_SERIES_CLASS
  });
};
function isMarshalEvicsNumericField(value) {
  return MARSHALEVICS_VISUALIZATIONS.has(value);
}
const MARSHALEVICS_VISUALIZATIONS = exports.MARSHALEVICS_VISUALIZATIONS = new Map([["marshalevictions", "Pandemic Evictions in New York City"]]);
const MarshalEvicsVisualizations = ({
  height,
  fieldNames
}) => {
  fieldNames = fieldNames || Array.from(MARSHALEVICS_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, fieldNames.map(fieldName => _react.default.createElement(MarshalEvicsViz, {
    key: fieldName,
    height: height,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(MARSHALEVICS_VISUALIZATIONS.get(fieldName))
  })));
};
exports.MarshalEvicsVisualizations = MarshalEvicsVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"cfwr"}],"SREK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PctReppedQuery = exports.PCT_REPPED = void 0;
exports.convertPctReppedRow = convertPctReppedRow;
var _query = require("../query");
const PCT_REPPED = exports.PCT_REPPED = new _query.QueryFiles(`share-represented`);
function convertPctReppedRow(row) {
  return {
    day: row.day.toISOString(),
    rep_rate: row.rep_rate
  };
}
function getPctReppedCsvHeader() {
  return ['day', 'rep_rate'];
}
function toPctReppedCsvRow(row) {
  return [row.day.substr(0, 10), row.rep_rate.toString()];
}
const PctReppedQuery = exports.PctReppedQuery = {
  files: PCT_REPPED,
  sqlToRow: convertPctReppedRow,
  csvHeader: getPctReppedCsvHeader(),
  toCsvRow: toPctReppedCsvRow
};
},{"../query":"Yro0"}],"P6qT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PctReppedVisualizations = exports.PCT_REPPED_VISUALIZATIONS = void 0;
exports.isPctReppedNumericField = isPctReppedNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PctReppedViz = props => {
  return _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.PCT_REPPED.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TIME_SERIES_CLASS
    })
  }, values => _react.default.createElement(PctReppedVizWithValues, {
    values: values,
    ...props
  }));
};
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const PctReppedVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2022-01-01 00:00:00" : "2022-01-01 00:00:00"));
  // const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day"
  //   : timeUnit === "yearweek" ? "Week" 
  //   : "Month";
  const lineColor = "#AF2525";
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      align: "left",
      anchor: "start",
      text: `Share of Represented Tenants`,
      fontSize: 24,
      subtitle: [`Percent of all tenants with eviction cases who are represented`, `by an attorney by the week the case was filed`,
      // This effectively adds extra padding below the subtitle.
      ""],
      subtitleFontSize: 16
    },
    layer: [{
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "day"
        },
        tooltip: [{
          field: "day",
          timeUnit,
          title: `Week of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          // aggregate: "sum",
          title: "Represented tenants (%)"
          // formatType: "numberWithCommas"
        }]
      },

      layer: [{
        mark: {
          type: "line",
          color: lineColor,
          interpolate: "monotone",
          opacity: 1
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b %d ’%y",
              labelAngle: 45,
              grid: false
            }
          },
          y: {
            field: `${fieldName}`,
            aggregate: "sum",
            axis: {
              title: `Percent of tenants with representation (%)`
            },
            scale: {
              "zero": false
            }
          }
        }
      }, {
        mark: {
          type: "line",
          color: lineColor,
          interpolate: "monotone",
          strokeWidth: 4
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y"
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {},
            scale: {
              "zero": false
            }
          }
        }
      }, {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "point",
          strokeWidth: 4,
          color: lineColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "day"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }]
  };
  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: _vizUtil.VIZ_TIME_SERIES_CLASS
  });
};
function isPctReppedNumericField(value) {
  return PCT_REPPED_VISUALIZATIONS.has(value);
}
const PCT_REPPED_VISUALIZATIONS = exports.PCT_REPPED_VISUALIZATIONS = new Map([["rep_rate", "PctRepped"]]);
const PctReppedVisualizations = ({
  height,
  fieldNames
}) => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  fieldNames = fieldNames || Array.from(PCT_REPPED_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, fieldNames.map(fieldName => _react.default.createElement(PctReppedViz, {
    key: fieldName,
    height: height,
    timeUnit: timeUnit,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(PCT_REPPED_VISUALIZATIONS.get(fieldName))
  })));
};
exports.PctReppedVisualizations = PctReppedVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"SREK"}],"LzY8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JudgmentsStatewideQuery = exports.JUDGMENTS = void 0;
exports.convertJudgmentsRow = convertJudgmentsRow;
var _converters = require("../converters");
var _query = require("../query");
const JUDGMENTS = exports.JUDGMENTS = new _query.QueryFiles(`total-judgments-statewide`);
function convertJudgmentsRow(row) {
  return {
    day: row.day.toISOString(),
    judgments: (0, _converters.toInt)(row.judgments)
  };
}
function getJudgmentsCsvHeader() {
  return ['day', 'judgments'];
}
function toJudgmentsCsvRow(row) {
  return [row.day.substr(0, 10), row.judgments.toString()];
}
const JudgmentsStatewideQuery = exports.JudgmentsStatewideQuery = {
  files: JUDGMENTS,
  sqlToRow: convertJudgmentsRow,
  csvHeader: getJudgmentsCsvHeader(),
  toCsvRow: toJudgmentsCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"FFmW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JudgmentsStatewideVisualizations = exports.JUDGMENTS_VISUALIZATIONS = void 0;
exports.isJudgmentsNumericField = isJudgmentsNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getJudgmentsLagDate(data, lagDays) {
  const maxJudgmentsDateNum = Math.max.apply(Math, data.map(row => Date.parse(row.day)));
  let returnDate = new Date(maxJudgmentsDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}
const JudgmentsViz = props => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  return _react.default.createElement("div", null, _react.default.createElement("form", null, _react.default.createElement("input", {
    type: "radio",
    name: "statewide-timeunit",
    id: "statewide-yearweek",
    checked: timeUnit === "yearweek",
    onChange: e => setTimeUnit("yearweek")
  }), _react.default.createElement("label", {
    htmlFor: "statewide-yearweek"
  }, "Week"), _react.default.createElement("input", {
    type: "radio",
    name: "statewide-timeunit",
    id: "statewide-yearmonth",
    checked: timeUnit === "yearmonth",
    onChange: e => setTimeUnit("yearmonth")
  }), _react.default.createElement("label", {
    htmlFor: "statewide-yearmonth"
  }, "Month")), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.JUDGMENTS.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TIME_SERIES_CLASS
    })
  }, values => _react.default.createElement(JudgmentsVizWithValues, {
    values: values,
    timeUnit: timeUnit,
    ...props
  })));
};
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const JudgmentsVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2020-01-05 00:00:00" : "2020-01-01 00:00:00"));
  //   const casesSinceCovid = values.filter(
  //     row => row.day >= "2020-03-23 00:00:00"
  //   ).reduce(
  //     (total, row) => total + row[fieldName], 0
  //   );
  // commented this out because this counter should probably be different from total judgments
  const JudgmentsDataLagStart = getJudgmentsLagDate(values, 30); // 4 weeks for lag
  const JudgmentsDataLagEnd = getJudgmentsLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day" : timeUnit === "yearweek" ? "Week" : "Month";
  const barColor = "#B73A3A";
  const selectedBarColor = "#AF2525";
  const MoratoriumStart = new Date("2020-03-17");
  const MoratoriumEnd = new Date("2020-06-20");
  const MoratoriumMid = new Date("2020-05-05");
  const MorTwoStart = new Date("2020-12-28");
  const MorTwoEnd = new Date("2021-02-26");
  const MorTwoMid = new Date("2021-01-26");
  const lineTop = 20;
  const lineBottom = 20;
  // const casesCovidStart = values.find(datapoint => datapoint.day === '2020-03-16T04:00:00.000Z')?.judgments;
  // const casesCovidStartThousands = thousands_separators(casesCovidStart);
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      text: `${title}`,
      fontSize: 16,
      subtitle: [`March 2020 - Present`,
      // This effectively adds extra padding below the subtitle.
      ""]
    },
    layer: [{
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "day"
        },
        tooltip: [{
          field: "day",
          timeUnit,
          title: `${timeUnitLabel} of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          aggregate: "sum",
          title: "Judgments",
          formatType: "numberWithCommas"
        }]
      },
      layer: [{
        mark: {
          type: "bar",
          color: barColor,
          interpolate: "monotone",
          opacity: 0.6
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y",
              labelAngle: 45,
              grid: false
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {
              title: `Total Judgments`
            },
            scale: {
              "zero": false
            }
          }
        }
      },
      // {
      //   mark: {
      //     type: "line",
      //     color: lineColor,
      //     interpolate: "monotone",
      //     strokeWidth: 4,
      //   },
      //   encoding: {
      //     x: {
      //       timeUnit,
      //       field: "day",
      //       axis: {
      //         title: "",
      //         format: "%b ’%y",
      //       },
      //     },
      //     y: {
      //       field: fieldName,
      //       aggregate: "sum",
      //       axis: {
      //       },
      //       scale: {"zero": false},
      //     },
      //   },
      // },
      {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "bar",
          strokeWidth: 4,
          color: selectedBarColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "day"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }, {
      data: {
        values: [{
          lagDateStart: JudgmentsDataLagStart,
          lagDateEnd: JudgmentsDataLagEnd
        }]
      },
      layer: [{
        mark: {
          type: "rect",
          color: "grey",
          opacity: 0
        },
        encoding: {
          x: {
            field: "lagDateStart",
            type: "temporal"
          },
          x2: {
            field: "lagDateEnd",
            type: "temporal"
          }
        }
      }
      // Request to take this out and include as note below chart instead.
      // {
      //   mark: {
      //     type: "text",
      //     align: "center",
      //     baseline: "bottom",
      //     dy: -(height)-35,
      //     dx: -50,
      //     fontSize: 12,
      //     text: ["Recent court data incomplete", "due to reporting lags"]
      //   },
      //   encoding: {
      //     x: { field: "lagDateEnd", type: "temporal" },
      //   },
      // },
      ]
    }, {
      data: {
        values: [{
          morDateStart: MoratoriumStart,
          morDateEnd: MoratoriumEnd,
          morDateMid: MoratoriumMid,
          morTwoStart: MorTwoStart,
          morTwoEnd: MorTwoEnd,
          morTwoMid: MorTwoMid
        }]
      },
      layer: [{
        // For some reason this gray rectangle and the
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          },
          x2: {
            field: "morDateEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Eviction", "Moratorium"]
        },
        encoding: {
          x: {
            field: "morDateMid",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morTwoStart",
            type: "temporal"
          },
          x2: {
            field: "morTwoEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Most Eviction", "Cases Paused"]
        },
        encoding: {
          x: {
            field: "morTwoMid",
            type: "temporal"
          }
        }
      },
      // { 
      //   mark: {
      //     type: "text",
      //     align: "center",
      //     baseline: "bottom",
      //     fontSize: 12,             
      //     dy: (height*.05),
      //     text: [`There  were ${casesCovidStartThousands}`, `eviction cases at the`,`start of the pandemic`],
      //   },
      //   encoding: {
      //     x: { field: "morDateStart", type: "temporal" },
      //   },  
      // },
      {
        mark: {
          type: "rect",
          color: "black",
          opacity: 1,
          width: 2,
          y: height - height * .45,
          y2: height - height * .48
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          }
        }
      }]
    }]
  };
  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: _vizUtil.VIZ_TIME_SERIES_CLASS
  });
};
function isJudgmentsNumericField(value) {
  return JUDGMENTS_VISUALIZATIONS.has(value);
}
const JUDGMENTS_VISUALIZATIONS = exports.JUDGMENTS_VISUALIZATIONS = new Map([["judgments", "Eviction Judgments in New York State"]]);
const JudgmentsStatewideVisualizations = ({
  height,
  fieldNames
}) => {
  fieldNames = fieldNames || Array.from(JUDGMENTS_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, fieldNames.map(fieldName => _react.default.createElement(JudgmentsViz, {
    key: fieldName,
    height: height,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(JUDGMENTS_VISUALIZATIONS.get(fieldName))
  })));
};
exports.JudgmentsStatewideVisualizations = JudgmentsStatewideVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"LzY8"}],"udGi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JudgmentsCitywideQuery = exports.JUDGMENTS = void 0;
exports.convertJudgmentsRow = convertJudgmentsRow;
var _converters = require("../converters");
var _query = require("../query");
const JUDGMENTS = exports.JUDGMENTS = new _query.QueryFiles(`total-judgments-citywide`);
function convertJudgmentsRow(row) {
  return {
    day: row.day.toISOString(),
    judgments: (0, _converters.toInt)(row.judgments)
  };
}
function getJudgmentsCsvHeader() {
  return ['day', 'judgments'];
}
function toJudgmentsCsvRow(row) {
  return [row.day.substr(0, 10), row.judgments.toString()];
}
const JudgmentsCitywideQuery = exports.JudgmentsCitywideQuery = {
  files: JUDGMENTS,
  sqlToRow: convertJudgmentsRow,
  csvHeader: getJudgmentsCsvHeader(),
  toCsvRow: toJudgmentsCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"yAa3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JudgmentsCitywideVisualizations = exports.JUDGMENTS_VISUALIZATIONS = void 0;
exports.isJudgmentsNumericField = isJudgmentsNumericField;
var _util = require("@justfixnyc/util");
var _react = _interopRequireWildcard(require("react"));
var _jsonLoader = require("../json-loader");
var _vegaLazy = require("../vega-lazy");
var _vizUtil = require("../viz-util");
var _data = require("./data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getJudgmentsLagDate(data, lagDays) {
  const maxJudgmentsDateNum = Math.max.apply(Math, data.map(row => Date.parse(row.day)));
  let returnDate = new Date(maxJudgmentsDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}
const JudgmentsViz = props => {
  const [timeUnit, setTimeUnit] = (0, _react.useState)("yearweek");
  return _react.default.createElement("div", null, _react.default.createElement("form", null, _react.default.createElement("input", {
    type: "radio",
    name: "citywide-timeunit",
    id: "citywide-yearweek",
    checked: timeUnit === "yearweek",
    onChange: e => setTimeUnit("yearweek")
  }), _react.default.createElement("label", {
    htmlFor: "citywide-yearweek"
  }, "Week"), _react.default.createElement("input", {
    type: "radio",
    name: "citywide-timeunit",
    id: "citywide-yearmonth",
    checked: timeUnit === "yearmonth",
    onChange: e => setTimeUnit("yearmonth")
  }), _react.default.createElement("label", {
    htmlFor: "citywide-yearmonth"
  }, "Month")), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.JUDGMENTS.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TIME_SERIES_CLASS
    })
  }, values => _react.default.createElement(JudgmentsVizWithValues, {
    values: values,
    timeUnit: timeUnit,
    ...props
  })));
};
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
const JudgmentsVizWithValues = ({
  values,
  fieldName,
  title,
  timeUnit,
  height
}) => {
  values = values.filter(
  // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
  // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2020-01-05 00:00:00" : "2020-01-01 00:00:00"));
  //   const casesSinceCovid = values.filter(
  //     row => row.day >= "2020-03-23 00:00:00"
  //   ).reduce(
  //     (total, row) => total + row[fieldName], 0
  //   );
  // commented this out because this counter should probably be different from total judgments
  const JudgmentsDataLagStart = getJudgmentsLagDate(values, 30); // 4 weeks for lag
  const JudgmentsDataLagEnd = getJudgmentsLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day" : timeUnit === "yearweek" ? "Week" : "Month";
  const barColor = "#B73A3A";
  const selectedBarColor = "#AF2525";
  const MoratoriumStart = new Date("2020-03-17");
  const MoratoriumEnd = new Date("2020-06-20");
  const MoratoriumMid = new Date("2020-05-05");
  const MorTwoStart = new Date("2020-12-28");
  const MorTwoEnd = new Date("2021-02-26");
  const MorTwoMid = new Date("2021-01-26");
  const lineTop = 20;
  const lineBottom = 20;
  // const casesCovidStart = values.find(datapoint => datapoint.day === '2020-03-16T04:00:00.000Z')?.judgments;
  // const casesCovidStartThousands = thousands_separators(casesCovidStart);
  const spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      text: `${title}`,
      fontSize: 16,
      subtitle: [`March 2020 - Present`,
      // This effectively adds extra padding below the subtitle.
      ""]
    },
    layer: [{
      data: {
        values
      },
      encoding: {
        x: {
          timeUnit,
          field: "day"
        },
        tooltip: [{
          field: "day",
          timeUnit,
          title: `${timeUnitLabel} of`,
          type: "temporal",
          format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y"
        }, {
          field: fieldName,
          aggregate: "sum",
          title: "Judgments",
          formatType: "numberWithCommas"
        }]
      },
      layer: [{
        mark: {
          type: "bar",
          color: barColor,
          interpolate: "monotone",
          opacity: 0.6
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
            axis: {
              title: "",
              format: "%b ’%y",
              labelAngle: 45,
              grid: false
            }
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            axis: {
              title: `Total Judgments`
            },
            scale: {
              "zero": false
            }
          }
        }
      }, {
        selection: {
          index: {
            type: "single",
            on: "mousemove",
            encodings: ["x"],
            nearest: true,
            empty: "none",
            clear: "mouseout"
          }
        },
        mark: {
          type: "bar",
          strokeWidth: 4,
          color: selectedBarColor
        },
        encoding: {
          x: {
            timeUnit,
            field: "day"
          },
          y: {
            field: fieldName,
            aggregate: "sum",
            type: "quantitative"
          },
          opacity: {
            condition: {
              selection: "index",
              value: 1
            },
            value: 0
          }
        }
      }]
    }, {
      data: {
        values: [{
          lagDateStart: JudgmentsDataLagStart,
          lagDateEnd: JudgmentsDataLagEnd
        }]
      },
      layer: [{
        mark: {
          type: "rect",
          color: "grey",
          opacity: 0
        },
        encoding: {
          x: {
            field: "lagDateStart",
            type: "temporal"
          },
          x2: {
            field: "lagDateEnd",
            type: "temporal"
          }
        }
      }
      // Request to take this out and include as note below chart instead.
      // {
      //   mark: {
      //     type: "text",
      //     align: "center",
      //     baseline: "bottom",
      //     dy: -(height)-35,
      //     dx: -50,
      //     fontSize: 12,
      //     text: ["Recent court data incomplete", "due to reporting lags"]
      //   },
      //   encoding: {
      //     x: { field: "lagDateEnd", type: "temporal" },
      //   },
      // },
      ]
    }, {
      data: {
        values: [{
          morDateStart: MoratoriumStart,
          morDateEnd: MoratoriumEnd,
          morDateMid: MoratoriumMid,
          morTwoStart: MorTwoStart,
          morTwoEnd: MorTwoEnd,
          morTwoMid: MorTwoMid
        }]
      },
      layer: [{
        // For some reason this gray rectangle and the
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          },
          x2: {
            field: "morDateEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Eviction", "Moratorium"]
        },
        encoding: {
          x: {
            field: "morDateMid",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "rect",
          color: "gray",
          opacity: 0.2
        },
        encoding: {
          x: {
            field: "morTwoStart",
            type: "temporal"
          },
          x2: {
            field: "morTwoEnd",
            type: "temporal"
          }
        }
      }, {
        mark: {
          type: "text",
          align: "center",
          baseline: "bottom",
          dy: -(height * 0.05),
          fontSize: 14,
          opacity: 0.6,
          text: ["Most Eviction", "Cases Paused"]
        },
        encoding: {
          x: {
            field: "morTwoMid",
            type: "temporal"
          }
        }
      },
      // { 
      //   mark: {
      //     type: "text",
      //     align: "center",
      //     baseline: "bottom",
      //     fontSize: 12,             
      //     dy: (height*.05),
      //     text: [`There  were ${casesCovidStartThousands}`, `eviction cases at the`,`start of the pandemic`],
      //   },
      //   encoding: {
      //     x: { field: "morDateStart", type: "temporal" },
      //   },  
      // },
      {
        mark: {
          type: "rect",
          color: "black",
          opacity: 1,
          width: 2,
          y: height - height * .45,
          y2: height - height * .48
        },
        encoding: {
          x: {
            field: "morDateStart",
            type: "temporal"
          }
        }
      }]
    }]
  };
  return _react.default.createElement(_vegaLazy.LazyVegaLite, {
    spec: spec,
    className: _vizUtil.VIZ_TIME_SERIES_CLASS
  });
};
function isJudgmentsNumericField(value) {
  return JUDGMENTS_VISUALIZATIONS.has(value);
}
const JUDGMENTS_VISUALIZATIONS = exports.JUDGMENTS_VISUALIZATIONS = new Map([["judgments", "Eviction Judgments in NYC"]]);
const JudgmentsCitywideVisualizations = ({
  height,
  fieldNames
}) => {
  fieldNames = fieldNames || Array.from(JUDGMENTS_VISUALIZATIONS.keys());
  return _react.default.createElement(_react.default.Fragment, null, fieldNames.map(fieldName => _react.default.createElement(JudgmentsViz, {
    key: fieldName,
    height: height,
    fieldName: fieldName,
    title: (0, _util.assertNotUndefined)(JUDGMENTS_VISUALIZATIONS.get(fieldName))
  })));
};
exports.JudgmentsCitywideVisualizations = JudgmentsCitywideVisualizations;
},{"@justfixnyc/util":"xScV","react":"HdMw","../json-loader":"ZOHx","../vega-lazy":"o1jW","../viz-util":"teeT","./data":"udGi"}],"mUTZ":[function(require,module,exports) {
var define;
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("react")) : "function" == typeof define && define.amd ? define(["exports", "react"], t) : t((e = e || self).ReactTable = {}, e.React);
}(this, function (e, t) {
  "use strict";

  function n(e, t, n, o, r, i, u) {
    try {
      var l = e[i](u),
        s = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(s) : Promise.resolve(s).then(o, r);
  }
  function o(e) {
    return function () {
      var t = this,
        o = arguments;
      return new Promise(function (r, i) {
        var u = e.apply(t, o);
        function l(e) {
          n(u, r, i, l, s, "next", e);
        }
        function s(e) {
          n(u, r, i, l, s, "throw", e);
        }
        l(void 0);
      });
    };
  }
  function r() {
    return (r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    }).apply(this, arguments);
  }
  function i(e, t) {
    if (null == e) return {};
    var n,
      o,
      r = {},
      i = Object.keys(e);
    for (o = 0; o < i.length; o++) n = i[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
  }
  function u(e) {
    var t = function (e, t) {
      if ("object" != typeof e || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var o = n.call(e, t || "default");
        if ("object" != typeof o) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }(e, "string");
    return "symbol" == typeof t ? t : String(t);
  }
  t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  var l = {
      init: "init"
    },
    s = function (e) {
      var t = e.value;
      return void 0 === t ? "" : t;
    },
    a = function () {
      return t.createElement(t.Fragment, null, " ");
    },
    c = {
      Cell: s,
      width: 150,
      minWidth: 0,
      maxWidth: Number.MAX_SAFE_INTEGER
    };
  function d() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      var n = t.style,
        o = t.className;
      return e = r({}, e, {}, i(t, ["style", "className"])), n && (e.style = e.style ? r({}, e.style || {}, {}, n || {}) : n), o && (e.className = e.className ? e.className + " " + o : o), "" === e.className && delete e.className, e;
    }, {});
  }
  var f = function (e, t) {
      return void 0 === t && (t = {}), function (n) {
        return void 0 === n && (n = {}), [].concat(e, [n]).reduce(function (e, o) {
          return function e(t, n, o) {
            return "function" == typeof n ? e({}, n(t, o)) : Array.isArray(n) ? d.apply(void 0, [t].concat(n)) : d(t, n);
          }(e, o, r({}, t, {
            userProps: n
          }));
        }, {});
      };
    },
    p = function (e, t, n, o) {
      return void 0 === n && (n = {}), e.reduce(function (e, t) {
        return t(e, n);
      }, t);
    },
    g = function (e, t, n) {
      return void 0 === n && (n = {}), e.forEach(function (e) {
        e(t, n);
      });
    };
  function v(e, t, n, o) {
    e.findIndex(function (e) {
      return e.pluginName === n;
    });
    t.forEach(function (t) {
      e.findIndex(function (e) {
        return e.pluginName === t;
      });
    });
  }
  function m(e, t) {
    return "function" == typeof e ? e(t) : e;
  }
  function h(e) {
    var n = t.useRef();
    return n.current = e, t.useCallback(function () {
      return n.current;
    }, []);
  }
  var y = "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
  function w(e, n) {
    var o = t.useRef(!1);
    y(function () {
      o.current && e(), o.current = !0;
    }, n);
  }
  function R(e, t, n) {
    return void 0 === n && (n = {}), function (o, i) {
      void 0 === i && (i = {});
      var u = "string" == typeof o ? t[o] : o;
      if (void 0 === u) throw console.info(t), new Error("Renderer Error ☝️");
      return b(u, r({}, e, {
        column: t
      }, n, {}, i));
    };
  }
  function b(e, n) {
    return function (e) {
      return "function" == typeof e && (t = Object.getPrototypeOf(e)).prototype && t.prototype.isReactComponent;
      var t;
    }(o = e) || "function" == typeof o || function (e) {
      return "object" == typeof e && "symbol" == typeof e.$$typeof && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
    }(o) ? t.createElement(e, n) : e;
    var o;
  }
  function S(e, t, n) {
    return void 0 === n && (n = 0), e.map(function (e) {
      return x(e = r({}, e, {
        parent: t,
        depth: n
      })), e.columns && (e.columns = S(e.columns, e, n + 1)), e;
    });
  }
  function C(e) {
    return G(e, "columns");
  }
  function x(e) {
    var t = e.id,
      n = e.accessor,
      o = e.Header;
    if ("string" == typeof n) {
      t = t || n;
      var r = n.split(".");
      n = function (e) {
        return function (e, t, n) {
          if (!t) return e;
          var o,
            r = "function" == typeof t ? t : JSON.stringify(t),
            i = E.get(r) || function () {
              var e = function (e) {
                return function e(t, n) {
                  void 0 === n && (n = []);
                  if (Array.isArray(t)) for (var o = 0; o < t.length; o += 1) e(t[o], n);else n.push(t);
                  return n;
                }(e).map(function (e) {
                  return String(e).replace(".", "_");
                }).join(".").replace(T, ".").replace(O, "").split(".");
              }(t);
              return E.set(r, e), e;
            }();
          try {
            o = i.reduce(function (e, t) {
              return e[t];
            }, e);
          } catch (e) {}
          return void 0 !== o ? o : n;
        }(e, r);
      };
    }
    if (!t && "string" == typeof o && o && (t = o), !t && e.columns) throw console.error(e), new Error('A column ID (or unique "Header" value) is required!');
    if (!t) throw console.error(e), new Error("A column ID (or string accessor) is required!");
    return Object.assign(e, {
      id: t,
      accessor: n
    }), e;
  }
  function P(e, t) {
    if (!t) throw new Error();
    return Object.assign(e, r({
      Header: a,
      Footer: a
    }, c, {}, t, {}, e)), Object.assign(e, {
      originalWidth: e.width
    }), e;
  }
  function B(e, t, n) {
    void 0 === n && (n = function () {
      return {};
    });
    for (var o = [], i = e, u = 0, l = function () {
        return u++;
      }, s = function () {
        var e = {
            headers: []
          },
          u = [],
          s = i.some(function (e) {
            return e.parent;
          });
        i.forEach(function (o) {
          var i,
            a = [].concat(u).reverse()[0];
          if (s) {
            if (o.parent) i = r({}, o.parent, {
              originalId: o.parent.id,
              id: o.parent.id + "_" + l(),
              headers: [o]
            }, n(o));else i = P(r({
              originalId: o.id + "_placeholder",
              id: o.id + "_placeholder_" + l(),
              placeholderOf: o,
              headers: [o]
            }, n(o)), t);
            a && a.originalId === i.originalId ? a.headers.push(o) : u.push(i);
          }
          e.headers.push(o);
        }), o.push(e), i = u;
      }; i.length;) s();
    return o.reverse();
  }
  var E = new Map();
  function I() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    for (var o = 0; o < t.length; o += 1) if (void 0 !== t[o]) return t[o];
  }
  function F(e) {
    if ("function" == typeof e) return e;
  }
  function G(e, t) {
    var n = [];
    return function e(o) {
      o.forEach(function (o) {
        o[t] ? e(o[t]) : n.push(o);
      });
    }(e), n;
  }
  function A(e, t) {
    var n = t.manualExpandedKey,
      o = t.expanded,
      r = t.expandSubRows,
      i = void 0 === r || r,
      u = [];
    return e.forEach(function (e) {
      return function e(t, r) {
        void 0 === r && (r = !0), t.isExpanded = t.original && t.original[n] || o[t.id], t.canExpand = t.subRows && !!t.subRows.length, r && u.push(t), t.subRows && t.subRows.length && t.isExpanded && t.subRows.forEach(function (t) {
          return e(t, i);
        });
      }(e);
    }), u;
  }
  function k(e, t, n) {
    return F(e) || t[e] || n[e] || n.text;
  }
  function H(e, t, n) {
    return e ? e(t, n) : void 0 === t;
  }
  function W() {
    throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
  }
  var z = null;
  var T = /\[/g,
    O = /\]/g;
  var M = function (e) {
      return r({
        role: "table"
      }, e);
    },
    j = function (e) {
      return r({
        role: "rowgroup"
      }, e);
    },
    L = function (e, t) {
      var n = t.column;
      return r({
        key: "header_" + n.id,
        colSpan: n.totalVisibleHeaderCount,
        role: "columnheader"
      }, e);
    },
    N = function (e, t) {
      var n = t.column;
      return r({
        key: "footer_" + n.id,
        colSpan: n.totalVisibleHeaderCount
      }, e);
    },
    D = function (e, t) {
      return r({
        key: "headerGroup_" + t.index,
        role: "row"
      }, e);
    },
    V = function (e, t) {
      return r({
        key: "footerGroup_" + t.index
      }, e);
    },
    _ = function (e, t) {
      return r({
        key: "row_" + t.row.id,
        role: "row"
      }, e);
    },
    X = function (e, t) {
      var n = t.cell;
      return r({
        key: "cell_" + n.row.id + "_" + n.column.id,
        role: "cell"
      }, e);
    };
  function q() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [M],
      getTableBodyProps: [j],
      getHeaderGroupProps: [D],
      getFooterGroupProps: [V],
      getHeaderProps: [L],
      getFooterProps: [N],
      getRowProps: [_],
      getCellProps: [X],
      useFinalInstance: []
    };
  }
  l.resetHiddenColumns = "resetHiddenColumns", l.toggleHideColumn = "toggleHideColumn", l.setHiddenColumns = "setHiddenColumns", l.toggleHideAllColumns = "toggleHideAllColumns";
  var K = function (e) {
    e.getToggleHiddenProps = [U], e.getToggleHideAllColumnsProps = [$], e.stateReducers.push(J), e.useInstanceBeforeDimensions.push(Y), e.headerGroupsDeps.push(function (e, t) {
      var n = t.instance;
      return [].concat(e, [n.state.hiddenColumns]);
    }), e.useInstance.push(Q);
  };
  K.pluginName = "useColumnVisibility";
  var U = function (e, t) {
      var n = t.column;
      return [e, {
        onChange: function (e) {
          n.toggleHidden(!e.target.checked);
        },
        style: {
          cursor: "pointer"
        },
        checked: n.isVisible,
        title: "Toggle Column Visible"
      }];
    },
    $ = function (e, t) {
      var n = t.instance;
      return [e, {
        onChange: function (e) {
          n.toggleHideAllColumns(!e.target.checked);
        },
        style: {
          cursor: "pointer"
        },
        checked: !n.allColumnsHidden && !n.state.hiddenColumns.length,
        title: "Toggle All Columns Hidden",
        indeterminate: !n.allColumnsHidden && n.state.hiddenColumns.length
      }];
    };
  function J(e, t, n, o) {
    if (t.type === l.init) return r({
      hiddenColumns: []
    }, e);
    if (t.type === l.resetHiddenColumns) return r({}, e, {
      hiddenColumns: o.initialState.hiddenColumns || []
    });
    if (t.type === l.toggleHideColumn) {
      var i = (void 0 !== t.value ? t.value : !e.hiddenColumns.includes(t.columnId)) ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function (e) {
        return e !== t.columnId;
      });
      return r({}, e, {
        hiddenColumns: i
      });
    }
    return t.type === l.setHiddenColumns ? r({}, e, {
      hiddenColumns: m(t.value, e.hiddenColumns)
    }) : t.type === l.toggleHideAllColumns ? r({}, e, {
      hiddenColumns: (void 0 !== t.value ? t.value : !e.hiddenColumns.length) ? o.allColumns.map(function (e) {
        return e.id;
      }) : []
    }) : void 0;
  }
  function Y(e) {
    var n = e.headers,
      o = e.state.hiddenColumns;
    t.useRef(!1).current;
    var r = 0;
    n.forEach(function (e) {
      return r += function e(t, n) {
        t.isVisible = n && !o.includes(t.id);
        var r = 0;
        return t.headers && t.headers.length ? t.headers.forEach(function (n) {
          return r += e(n, t.isVisible);
        }) : r = t.isVisible ? 1 : 0, t.totalVisibleHeaderCount = r, r;
      }(e, !0);
    });
  }
  function Q(e) {
    var n = e.columns,
      o = e.flatHeaders,
      r = e.dispatch,
      i = e.allColumns,
      u = e.getHooks,
      s = e.state.hiddenColumns,
      a = e.autoResetHiddenColumns,
      c = void 0 === a || a,
      d = h(e),
      p = i.length === s.length,
      g = t.useCallback(function (e, t) {
        return r({
          type: l.toggleHideColumn,
          columnId: e,
          value: t
        });
      }, [r]),
      v = t.useCallback(function (e) {
        return r({
          type: l.setHiddenColumns,
          value: e
        });
      }, [r]),
      m = t.useCallback(function (e) {
        return r({
          type: l.toggleHideAllColumns,
          value: e
        });
      }, [r]),
      y = f(u().getToggleHideAllColumnsProps, {
        instance: d()
      });
    o.forEach(function (e) {
      e.toggleHidden = function (t) {
        r({
          type: l.toggleHideColumn,
          columnId: e.id,
          value: t
        });
      }, e.getToggleHiddenProps = f(u().getToggleHiddenProps, {
        instance: d(),
        column: e
      });
    });
    var R = h(c);
    w(function () {
      R() && r({
        type: l.resetHiddenColumns
      });
    }, [r, n]), Object.assign(e, {
      allColumnsHidden: p,
      toggleHideColumn: g,
      setHiddenColumns: v,
      toggleHideAllColumns: m,
      getToggleHideAllColumnsProps: y
    });
  }
  var Z = {},
    ee = {},
    te = function (e, t, n) {
      return e;
    },
    ne = function (e, t) {
      return e.subRows || [];
    },
    oe = function (e, t, n) {
      return "" + (n ? [n.id, t].join(".") : t);
    },
    re = function (e) {
      return e;
    };
  function ie(e) {
    var t = e.initialState,
      n = void 0 === t ? Z : t,
      o = e.defaultColumn,
      u = void 0 === o ? ee : o,
      l = e.getSubRows,
      s = void 0 === l ? ne : l,
      a = e.getRowId,
      c = void 0 === a ? oe : a,
      d = e.stateReducer,
      f = void 0 === d ? te : d,
      p = e.useControlledState,
      g = void 0 === p ? re : p;
    return r({}, i(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), {
      initialState: n,
      defaultColumn: u,
      getSubRows: s,
      getRowId: c,
      stateReducer: f,
      useControlledState: g
    });
  }
  function ue(e, t) {
    void 0 === t && (t = 0);
    var n = 0,
      o = 0,
      r = 0,
      i = 0;
    return e.forEach(function (e) {
      var u = e.headers;
      if (e.totalLeft = t, u && u.length) {
        var l = ue(u, t),
          s = l[0],
          a = l[1],
          c = l[2],
          d = l[3];
        e.totalMinWidth = s, e.totalWidth = a, e.totalMaxWidth = c, e.totalFlexWidth = d;
      } else e.totalMinWidth = e.minWidth, e.totalWidth = Math.min(Math.max(e.minWidth, e.width), e.maxWidth), e.totalMaxWidth = e.maxWidth, e.totalFlexWidth = e.canResize ? e.totalWidth : 0;
      e.isVisible && (t += e.totalWidth, n += e.totalMinWidth, o += e.totalWidth, r += e.totalMaxWidth, i += e.totalFlexWidth);
    }), [n, o, r, i];
  }
  function le(e) {
    var t = e.data,
      n = e.rows,
      o = e.flatRows,
      r = e.rowsById,
      i = e.column,
      u = e.getRowId,
      l = e.getSubRows,
      s = e.accessValueHooks,
      a = e.getInstance;
    t.forEach(function (e, c) {
      return function e(n, c, d, f, g) {
        void 0 === d && (d = 0);
        var v = n,
          m = u(n, c, f),
          h = r[m];
        if (h) h.subRows && h.originalSubRows.forEach(function (t, n) {
          return e(t, n, d + 1, h);
        });else if ((h = {
          id: m,
          original: v,
          index: c,
          depth: d,
          cells: [{}]
        }).cells.map = W, h.cells.filter = W, h.cells.forEach = W, h.cells[0].getCellProps = W, h.values = {}, g.push(h), o.push(h), r[m] = h, h.originalSubRows = l(n, c), h.originalSubRows) {
          var y = [];
          h.originalSubRows.forEach(function (t, n) {
            return e(t, n, d + 1, h, y);
          }), h.subRows = y;
        }
        i.accessor && (h.values[i.id] = i.accessor(n, c, h, g, t)), h.values[i.id] = p(s, h.values[i.id], {
          row: h,
          column: i,
          instance: a()
        });
      }(e, c, 0, void 0, n);
    });
  }
  l.resetExpanded = "resetExpanded", l.toggleRowExpanded = "toggleRowExpanded", l.toggleAllRowsExpanded = "toggleAllRowsExpanded";
  var se = function (e) {
    e.getToggleAllRowsExpandedProps = [ae], e.getToggleRowExpandedProps = [ce], e.stateReducers.push(de), e.useInstance.push(fe), e.prepareRow.push(pe);
  };
  se.pluginName = "useExpanded";
  var ae = function (e, t) {
      var n = t.instance;
      return [e, {
        onClick: function (e) {
          n.toggleAllRowsExpanded();
        },
        style: {
          cursor: "pointer"
        },
        title: "Toggle All Rows Expanded"
      }];
    },
    ce = function (e, t) {
      var n = t.row;
      return [e, {
        onClick: function () {
          n.toggleRowExpanded();
        },
        style: {
          cursor: "pointer"
        },
        title: "Toggle Row Expanded"
      }];
    };
  function de(e, t, n, o) {
    if (t.type === l.init) return r({
      expanded: {}
    }, e);
    if (t.type === l.resetExpanded) return r({}, e, {
      expanded: o.initialState.expanded || {}
    });
    if (t.type === l.toggleAllRowsExpanded) {
      var s = t.value,
        a = o.rowsById,
        c = Object.keys(a).length === Object.keys(e.expanded).length;
      if (void 0 !== s ? s : !c) {
        var d = {};
        return Object.keys(a).forEach(function (e) {
          d[e] = !0;
        }), r({}, e, {
          expanded: d
        });
      }
      return r({}, e, {
        expanded: {}
      });
    }
    if (t.type === l.toggleRowExpanded) {
      var f,
        p = t.id,
        g = t.value,
        v = e.expanded[p],
        m = void 0 !== g ? g : !v;
      if (!v && m) return r({}, e, {
        expanded: r({}, e.expanded, (f = {}, f[p] = !0, f))
      });
      if (v && !m) {
        var h = e.expanded;
        h[p];
        return r({}, e, {
          expanded: i(h, [p].map(u))
        });
      }
      return e;
    }
  }
  function fe(e) {
    var n = e.data,
      o = e.rows,
      r = e.rowsById,
      i = e.manualExpandedKey,
      u = void 0 === i ? "expanded" : i,
      s = e.paginateExpandedRows,
      a = void 0 === s || s,
      c = e.expandSubRows,
      d = void 0 === c || c,
      p = e.autoResetExpanded,
      g = void 0 === p || p,
      m = e.getHooks,
      y = e.plugins,
      R = e.state.expanded,
      b = e.dispatch;
    v(y, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
    var S = h(g),
      C = Boolean(Object.keys(r).length && Object.keys(R).length);
    C && Object.keys(r).some(function (e) {
      return !R[e];
    }) && (C = !1), w(function () {
      S() && b({
        type: l.resetExpanded
      });
    }, [b, n]);
    var x = t.useCallback(function (e, t) {
        b({
          type: l.toggleRowExpanded,
          id: e,
          value: t
        });
      }, [b]),
      P = t.useCallback(function (e) {
        return b({
          type: l.toggleAllRowsExpanded,
          value: e
        });
      }, [b]),
      B = t.useMemo(function () {
        return a ? A(o, {
          manualExpandedKey: u,
          expanded: R,
          expandSubRows: d
        }) : o;
      }, [a, o, u, R, d]),
      E = t.useMemo(function () {
        return function (e) {
          var t = 0;
          return Object.keys(e).forEach(function (e) {
            var n = e.split(".");
            t = Math.max(t, n.length);
          }), t;
        }(R);
      }, [R]),
      I = h(e),
      F = f(m().getToggleAllRowsExpandedProps, {
        instance: I()
      });
    Object.assign(e, {
      preExpandedRows: o,
      expandedRows: B,
      rows: B,
      expandedDepth: E,
      isAllRowsExpanded: C,
      toggleRowExpanded: x,
      toggleAllRowsExpanded: P,
      getToggleAllRowsExpandedProps: F
    });
  }
  function pe(e, t) {
    var n = t.instance.getHooks,
      o = t.instance;
    e.toggleRowExpanded = function (t) {
      return o.toggleRowExpanded(e.id, t);
    }, e.getToggleRowExpandedProps = f(n().getToggleRowExpandedProps, {
      instance: o,
      row: e
    });
  }
  var ge = function (e, t, n) {
    return e = e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return String(o).toLowerCase().includes(String(n).toLowerCase());
      });
    });
  };
  ge.autoRemove = function (e) {
    return !e;
  };
  var ve = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return void 0 === o || String(o).toLowerCase() === String(n).toLowerCase();
      });
    });
  };
  ve.autoRemove = function (e) {
    return !e;
  };
  var me = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return void 0 === o || String(o) === String(n);
      });
    });
  };
  me.autoRemove = function (e) {
    return !e;
  };
  var he = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        return e.values[t].includes(n);
      });
    });
  };
  he.autoRemove = function (e) {
    return !e || !e.length;
  };
  var ye = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return o && o.length && n.every(function (e) {
          return o.includes(e);
        });
      });
    });
  };
  ye.autoRemove = function (e) {
    return !e || !e.length;
  };
  var we = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return o && o.length && n.some(function (e) {
          return o.includes(e);
        });
      });
    });
  };
  we.autoRemove = function (e) {
    return !e || !e.length;
  };
  var Re = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        var o = e.values[t];
        return n.includes(o);
      });
    });
  };
  Re.autoRemove = function (e) {
    return !e || !e.length;
  };
  var be = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        return e.values[t] === n;
      });
    });
  };
  be.autoRemove = function (e) {
    return void 0 === e;
  };
  var Se = function (e, t, n) {
    return e.filter(function (e) {
      return t.some(function (t) {
        return e.values[t] == n;
      });
    });
  };
  Se.autoRemove = function (e) {
    return null == e;
  };
  var Ce = function (e, t, n) {
    var o = n || [],
      r = o[0],
      i = o[1];
    if ((r = "number" == typeof r ? r : -1 / 0) > (i = "number" == typeof i ? i : 1 / 0)) {
      var u = r;
      r = i, i = u;
    }
    return e.filter(function (e) {
      return t.some(function (t) {
        var n = e.values[t];
        return n >= r && n <= i;
      });
    });
  };
  Ce.autoRemove = function (e) {
    return !e || "number" != typeof e[0] && "number" != typeof e[1];
  };
  var xe = Object.freeze({
    __proto__: null,
    text: ge,
    exactText: ve,
    exactTextCase: me,
    includes: he,
    includesAll: ye,
    includesSome: we,
    includesValue: Re,
    exact: be,
    equals: Se,
    between: Ce
  });
  l.resetFilters = "resetFilters", l.setFilter = "setFilter", l.setAllFilters = "setAllFilters";
  var Pe = function (e) {
    e.stateReducers.push(Be), e.useInstance.push(Ee);
  };
  function Be(e, t, n, o) {
    if (t.type === l.init) return r({
      filters: []
    }, e);
    if (t.type === l.resetFilters) return r({}, e, {
      filters: o.initialState.filters || []
    });
    if (t.type === l.setFilter) {
      var i = t.columnId,
        u = t.filterValue,
        s = o.allColumns,
        a = o.filterTypes,
        c = s.find(function (e) {
          return e.id === i;
        });
      if (!c) throw new Error("React-Table: Could not find a column with id: " + i);
      var d = k(c.filter, a || {}, xe),
        f = e.filters.find(function (e) {
          return e.id === i;
        }),
        p = m(u, f && f.value);
      return H(d.autoRemove, p, c) ? r({}, e, {
        filters: e.filters.filter(function (e) {
          return e.id !== i;
        })
      }) : r({}, e, f ? {
        filters: e.filters.map(function (e) {
          return e.id === i ? {
            id: i,
            value: p
          } : e;
        })
      } : {
        filters: [].concat(e.filters, [{
          id: i,
          value: p
        }])
      });
    }
    if (t.type === l.setAllFilters) {
      var g = t.filters,
        v = o.allColumns,
        h = o.filterTypes;
      return r({}, e, {
        filters: m(g, e.filters).filter(function (e) {
          var t = v.find(function (t) {
            return t.id === e.id;
          });
          return !H(k(t.filter, h || {}, xe).autoRemove, e.value, t);
        })
      });
    }
  }
  function Ee(e) {
    var n = e.data,
      o = e.rows,
      r = e.flatRows,
      i = e.rowsById,
      u = e.allColumns,
      s = e.filterTypes,
      a = e.manualFilters,
      c = e.defaultCanFilter,
      d = void 0 !== c && c,
      f = e.disableFilters,
      p = e.state.filters,
      g = e.dispatch,
      v = e.autoResetFilters,
      m = void 0 === v || v,
      y = t.useCallback(function (e, t) {
        g({
          type: l.setFilter,
          columnId: e,
          filterValue: t
        });
      }, [g]),
      R = t.useCallback(function (e) {
        g({
          type: l.setAllFilters,
          filters: e
        });
      }, [g]);
    u.forEach(function (e) {
      var t = e.id,
        n = e.accessor,
        o = e.defaultCanFilter,
        r = e.disableFilters;
      e.canFilter = n ? I(!0 !== r && void 0, !0 !== f && void 0, !0) : I(o, d, !1), e.setFilter = function (t) {
        return y(e.id, t);
      };
      var i = p.find(function (e) {
        return e.id === t;
      });
      e.filterValue = i && i.value;
    });
    var b = t.useMemo(function () {
        if (a || !p.length) return [o, r, i];
        var e = [],
          t = {};
        return [function n(o, r) {
          void 0 === r && (r = 0);
          var i = o;
          return (i = p.reduce(function (e, t) {
            var n = t.id,
              o = t.value,
              i = u.find(function (e) {
                return e.id === n;
              });
            if (!i) return e;
            0 === r && (i.preFilteredRows = e);
            var l = k(i.filter, s || {}, xe);
            return l ? (i.filteredRows = l(e, [n], o), i.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + i.id + "."), e);
          }, o)).forEach(function (o) {
            e.push(o), t[o.id] = o, o.subRows && (o.subRows = o.subRows && o.subRows.length > 0 ? n(o.subRows, r + 1) : o.subRows);
          }), i;
        }(o), e, t];
      }, [a, p, o, r, i, u, s]),
      S = b[0],
      C = b[1],
      x = b[2];
    t.useMemo(function () {
      u.filter(function (e) {
        return !p.find(function (t) {
          return t.id === e.id;
        });
      }).forEach(function (e) {
        e.preFilteredRows = S, e.filteredRows = S;
      });
    }, [S, p, u]);
    var P = h(m);
    w(function () {
      P() && g({
        type: l.resetFilters
      });
    }, [g, a ? null : n]), Object.assign(e, {
      preFilteredRows: o,
      preFilteredFlatRows: r,
      preFilteredRowsById: i,
      filteredRows: S,
      filteredFlatRows: C,
      filteredRowsById: x,
      rows: S,
      flatRows: C,
      rowsById: x,
      setFilter: y,
      setAllFilters: R
    });
  }
  Pe.pluginName = "useFilters", l.resetGlobalFilter = "resetGlobalFilter", l.setGlobalFilter = "setGlobalFilter";
  var Ie = function (e) {
    e.stateReducers.push(Fe), e.useInstance.push(Ge);
  };
  function Fe(e, t, n, o) {
    if (t.type === l.resetGlobalFilter) return r({}, e, {
      globalFilter: o.initialState.globalFilter || void 0
    });
    if (t.type === l.setGlobalFilter) {
      var u = t.filterValue,
        s = o.userFilterTypes,
        a = k(o.globalFilter, s || {}, xe),
        c = m(u, e.globalFilter);
      if (H(a.autoRemove, c)) {
        e.globalFilter;
        return i(e, ["globalFilter"]);
      }
      return r({}, e, {
        globalFilter: c
      });
    }
  }
  function Ge(e) {
    var n = e.data,
      o = e.rows,
      r = e.flatRows,
      i = e.rowsById,
      u = e.allColumns,
      s = e.filterTypes,
      a = e.globalFilter,
      c = e.manualGlobalFilter,
      d = e.state.globalFilter,
      f = e.dispatch,
      p = e.autoResetGlobalFilter,
      g = void 0 === p || p,
      v = e.disableGlobalFilter,
      m = t.useCallback(function (e) {
        f({
          type: l.setGlobalFilter,
          filterValue: e
        });
      }, [f]),
      y = t.useMemo(function () {
        if (c || void 0 === d) return [o, r, i];
        var e = [],
          t = {},
          n = k(a, s || {}, xe);
        if (!n) return console.warn("Could not find a valid 'globalFilter' option."), o;
        u.forEach(function (e) {
          var t = e.disableGlobalFilter;
          e.canFilter = I(!0 !== t && void 0, !0 !== v && void 0, !0);
        });
        var l = u.filter(function (e) {
          return !0 === e.canFilter;
        });
        return [function o(r) {
          return (r = n(r, l.map(function (e) {
            return e.id;
          }), d)).forEach(function (n) {
            e.push(n), t[n.id] = n, n.subRows = n.subRows && n.subRows.length ? o(n.subRows) : n.subRows;
          }), r;
        }(o), e, t];
      }, [c, d, a, s, u, o, r, i, v]),
      R = y[0],
      b = y[1],
      S = y[2],
      C = h(g);
    w(function () {
      C() && f({
        type: l.resetGlobalFilter
      });
    }, [f, c ? null : n]), Object.assign(e, {
      preGlobalFilteredRows: o,
      preGlobalFilteredFlatRows: r,
      preGlobalFilteredRowsById: i,
      globalFilteredRows: R,
      globalFilteredFlatRows: b,
      globalFilteredRowsById: S,
      rows: R,
      flatRows: b,
      rowsById: S,
      setGlobalFilter: m,
      disableGlobalFilter: v
    });
  }
  function Ae(e, t) {
    return t.reduce(function (e, t) {
      return e + ("number" == typeof t ? t : 0);
    }, 0);
  }
  Ie.pluginName = "useGlobalFilter";
  var ke = Object.freeze({
      __proto__: null,
      sum: Ae,
      min: function (e) {
        var t = e[0] || 0;
        return e.forEach(function (e) {
          "number" == typeof e && (t = Math.min(t, e));
        }), t;
      },
      max: function (e) {
        var t = e[0] || 0;
        return e.forEach(function (e) {
          "number" == typeof e && (t = Math.max(t, e));
        }), t;
      },
      minMax: function (e) {
        var t = e[0] || 0,
          n = e[0] || 0;
        return e.forEach(function (e) {
          "number" == typeof e && (t = Math.min(t, e), n = Math.max(n, e));
        }), t + ".." + n;
      },
      average: function (e) {
        return Ae(0, e) / e.length;
      },
      median: function (e) {
        if (!e.length) return null;
        var t = Math.floor(e.length / 2),
          n = [].concat(e).sort(function (e, t) {
            return e - t;
          });
        return e.length % 2 != 0 ? n[t] : (n[t - 1] + n[t]) / 2;
      },
      unique: function (e) {
        return Array.from(new Set(e).values());
      },
      uniqueCount: function (e) {
        return new Set(e).size;
      },
      count: function (e) {
        return e.length;
      }
    }),
    He = [],
    We = {};
  l.resetGroupBy = "resetGroupBy", l.setGroupBy = "setGroupBy", l.toggleGroupBy = "toggleGroupBy";
  var ze = function (e) {
    e.getGroupByToggleProps = [Te], e.stateReducers.push(Oe), e.visibleColumnsDeps.push(function (e, t) {
      var n = t.instance;
      return [].concat(e, [n.state.groupBy]);
    }), e.visibleColumns.push(Me), e.useInstance.push(Le), e.prepareRow.push(Ne);
  };
  ze.pluginName = "useGroupBy";
  var Te = function (e, t) {
    var n = t.header;
    return [e, {
      onClick: n.canGroupBy ? function (e) {
        e.persist(), n.toggleGroupBy();
      } : void 0,
      style: {
        cursor: n.canGroupBy ? "pointer" : void 0
      },
      title: "Toggle GroupBy"
    }];
  };
  function Oe(e, t, n, o) {
    if (t.type === l.init) return r({
      groupBy: []
    }, e);
    if (t.type === l.resetGroupBy) return r({}, e, {
      groupBy: o.initialState.groupBy || []
    });
    if (t.type === l.setGroupBy) return r({}, e, {
      groupBy: t.value
    });
    if (t.type === l.toggleGroupBy) {
      var i = t.columnId,
        u = t.value,
        s = void 0 !== u ? u : !e.groupBy.includes(i);
      return r({}, e, s ? {
        groupBy: [].concat(e.groupBy, [i])
      } : {
        groupBy: e.groupBy.filter(function (e) {
          return e !== i;
        })
      });
    }
  }
  function Me(e, t) {
    var n = t.instance.state.groupBy,
      o = n.map(function (t) {
        return e.find(function (e) {
          return e.id === t;
        });
      }).filter(Boolean),
      r = e.filter(function (e) {
        return !n.includes(e.id);
      });
    return (e = [].concat(o, r)).forEach(function (e) {
      e.isGrouped = n.includes(e.id), e.groupedIndex = n.indexOf(e.id);
    }), e;
  }
  var je = {};
  function Le(e) {
    var n = e.data,
      o = e.rows,
      i = e.flatRows,
      u = e.rowsById,
      s = e.allColumns,
      a = e.flatHeaders,
      c = e.groupByFn,
      d = void 0 === c ? De : c,
      p = e.manualGroupBy,
      g = e.aggregations,
      m = void 0 === g ? je : g,
      y = e.plugins,
      R = e.state.groupBy,
      b = e.dispatch,
      S = e.autoResetGroupBy,
      C = void 0 === S || S,
      x = e.disableGroupBy,
      P = e.defaultCanGroupBy,
      B = e.getHooks;
    v(y, ["useColumnOrder", "useFilters"], "useGroupBy");
    var E = h(e);
    s.forEach(function (t) {
      var n = t.accessor,
        o = t.defaultGroupBy,
        r = t.disableGroupBy;
      t.canGroupBy = n ? I(t.canGroupBy, !0 !== r && void 0, !0 !== x && void 0, !0) : I(t.canGroupBy, o, P, !1), t.canGroupBy && (t.toggleGroupBy = function () {
        return e.toggleGroupBy(t.id);
      }), t.Aggregated = t.Aggregated || t.Cell;
    });
    var F = t.useCallback(function (e, t) {
        b({
          type: l.toggleGroupBy,
          columnId: e,
          value: t
        });
      }, [b]),
      A = t.useCallback(function (e) {
        b({
          type: l.setGroupBy,
          value: e
        });
      }, [b]);
    a.forEach(function (e) {
      e.getGroupByToggleProps = f(B().getGroupByToggleProps, {
        instance: E(),
        header: e
      });
    });
    var k = t.useMemo(function () {
        if (p || !R.length) return [o, i, u, He, We, i, u];
        var e = R.filter(function (e) {
            return s.find(function (t) {
              return t.id === e;
            });
          }),
          t = [],
          n = {},
          l = [],
          a = {},
          c = [],
          f = {},
          g = function o(i, u, p) {
            if (void 0 === u && (u = 0), u === e.length) return i.map(function (e) {
              return r({}, e, {
                depth: u
              });
            });
            var g = e[u],
              v = d(i, g);
            return Object.entries(v).map(function (r, i) {
              var d = r[0],
                v = r[1],
                h = g + ":" + d,
                y = o(v, u + 1, h = p ? p + ">" + h : h),
                w = u ? G(v, "leafRows") : v,
                R = function (t, n, o) {
                  var r = {};
                  return s.forEach(function (i) {
                    if (e.includes(i.id)) r[i.id] = n[0] ? n[0].values[i.id] : null;else {
                      var u = "function" == typeof i.aggregate ? i.aggregate : m[i.aggregate] || ke[i.aggregate];
                      if (u) {
                        var l = n.map(function (e) {
                            return e.values[i.id];
                          }),
                          s = t.map(function (e) {
                            var t = e.values[i.id];
                            if (!o && i.aggregateValue) {
                              var n = "function" == typeof i.aggregateValue ? i.aggregateValue : m[i.aggregateValue] || ke[i.aggregateValue];
                              if (!n) throw console.info({
                                column: i
                              }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                              t = n(t, e, i);
                            }
                            return t;
                          });
                        r[i.id] = u(s, l);
                      } else {
                        if (i.aggregate) throw console.info({
                          column: i
                        }), new Error("React Table: Invalid column.aggregate option for column listed above");
                        r[i.id] = null;
                      }
                    }
                  }), r;
                }(w, v, u),
                b = {
                  id: h,
                  isGrouped: !0,
                  groupByID: g,
                  groupByVal: d,
                  values: R,
                  subRows: y,
                  leafRows: w,
                  depth: u,
                  index: i
                };
              return y.forEach(function (e) {
                t.push(e), n[e.id] = e, e.isGrouped ? (l.push(e), a[e.id] = e) : (c.push(e), f[e.id] = e);
              }), b;
            });
          }(o);
        return g.forEach(function (e) {
          t.push(e), n[e.id] = e, e.isGrouped ? (l.push(e), a[e.id] = e) : (c.push(e), f[e.id] = e);
        }), [g, t, n, l, a, c, f];
      }, [p, R, o, i, u, s, m, d]),
      H = k[0],
      W = k[1],
      z = k[2],
      T = k[3],
      O = k[4],
      M = k[5],
      j = k[6],
      L = h(C);
    w(function () {
      L() && b({
        type: l.resetGroupBy
      });
    }, [b, p ? null : n]), Object.assign(e, {
      preGroupedRows: o,
      preGroupedFlatRow: i,
      preGroupedRowsById: u,
      groupedRows: H,
      groupedFlatRows: W,
      groupedRowsById: z,
      onlyGroupedFlatRows: T,
      onlyGroupedRowsById: O,
      nonGroupedFlatRows: M,
      nonGroupedRowsById: j,
      rows: H,
      flatRows: W,
      rowsById: z,
      toggleGroupBy: F,
      setGroupBy: A
    });
  }
  function Ne(e) {
    e.allCells.forEach(function (t) {
      var n;
      t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && (null == (n = e.subRows) ? void 0 : n.length);
    });
  }
  function De(e, t) {
    return e.reduce(function (e, n, o) {
      var r = "" + n.values[t];
      return e[r] = Array.isArray(e[r]) ? e[r] : [], e[r].push(n), e;
    }, {});
  }
  var Ve = /([0-9]+)/gm;
  function _e(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Xe(e, t, n) {
    return [e.values[n], t.values[n]];
  }
  function qe(e) {
    return "number" == typeof e ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : "string" == typeof e ? e : "";
  }
  var Ke = Object.freeze({
    __proto__: null,
    alphanumeric: function (e, t, n) {
      var o = Xe(e, t, n),
        r = o[0],
        i = o[1];
      for (r = qe(r), i = qe(i), r = r.split(Ve).filter(Boolean), i = i.split(Ve).filter(Boolean); r.length && i.length;) {
        var u = r.shift(),
          l = i.shift(),
          s = parseInt(u, 10),
          a = parseInt(l, 10),
          c = [s, a].sort();
        if (isNaN(c[0])) {
          if (u > l) return 1;
          if (l > u) return -1;
        } else {
          if (isNaN(c[1])) return isNaN(s) ? -1 : 1;
          if (s > a) return 1;
          if (a > s) return -1;
        }
      }
      return r.length - i.length;
    },
    datetime: function (e, t, n) {
      var o = Xe(e, t, n),
        r = o[0],
        i = o[1];
      return _e(r = r.getTime(), i = i.getTime());
    },
    basic: function (e, t, n) {
      var o = Xe(e, t, n);
      return _e(o[0], o[1]);
    },
    string: function (e, t, n) {
      var o = Xe(e, t, n),
        r = o[0],
        i = o[1];
      for (r = r.split("").filter(Boolean), i = i.split("").filter(Boolean); r.length && i.length;) {
        var u = r.shift(),
          l = i.shift(),
          s = u.toLowerCase(),
          a = l.toLowerCase();
        if (s > a) return 1;
        if (a > s) return -1;
        if (u > l) return 1;
        if (l > u) return -1;
      }
      return r.length - i.length;
    },
    number: function (e, t, n) {
      var o = Xe(e, t, n),
        r = o[0],
        i = o[1],
        u = /[^0-9.]/gi;
      return _e(r = Number(String(r).replace(u, "")), i = Number(String(i).replace(u, "")));
    }
  });
  l.resetSortBy = "resetSortBy", l.setSortBy = "setSortBy", l.toggleSortBy = "toggleSortBy", l.clearSortBy = "clearSortBy", c.sortType = "alphanumeric", c.sortDescFirst = !1;
  var Ue = function (e) {
    e.getSortByToggleProps = [$e], e.stateReducers.push(Je), e.useInstance.push(Ye);
  };
  Ue.pluginName = "useSortBy";
  var $e = function (e, t) {
    var n = t.instance,
      o = t.column,
      r = n.isMultiSortEvent,
      i = void 0 === r ? function (e) {
        return e.shiftKey;
      } : r;
    return [e, {
      onClick: o.canSort ? function (e) {
        e.persist(), o.toggleSortBy(void 0, !n.disableMultiSort && i(e));
      } : void 0,
      style: {
        cursor: o.canSort ? "pointer" : void 0
      },
      title: o.canSort ? "Toggle SortBy" : void 0
    }];
  };
  function Je(e, t, n, o) {
    if (t.type === l.init) return r({
      sortBy: []
    }, e);
    if (t.type === l.resetSortBy) return r({}, e, {
      sortBy: o.initialState.sortBy || []
    });
    if (t.type === l.clearSortBy) return r({}, e, {
      sortBy: e.sortBy.filter(function (e) {
        return e.id !== t.columnId;
      })
    });
    if (t.type === l.setSortBy) return r({}, e, {
      sortBy: t.sortBy
    });
    if (t.type === l.toggleSortBy) {
      var i,
        u = t.columnId,
        s = t.desc,
        a = t.multi,
        c = o.allColumns,
        d = o.disableMultiSort,
        f = o.disableSortRemove,
        p = o.disableMultiRemove,
        g = o.maxMultiSortColCount,
        v = void 0 === g ? Number.MAX_SAFE_INTEGER : g,
        m = e.sortBy,
        h = c.find(function (e) {
          return e.id === u;
        }).sortDescFirst,
        y = m.find(function (e) {
          return e.id === u;
        }),
        w = m.findIndex(function (e) {
          return e.id === u;
        }),
        R = null != s,
        b = [];
      return "toggle" !== (i = !d && a ? y ? "toggle" : "add" : w !== m.length - 1 || 1 !== m.length ? "replace" : y ? "toggle" : "replace") || f || R || a && p || !(y && y.desc && !h || !y.desc && h) || (i = "remove"), "replace" === i ? b = [{
        id: u,
        desc: R ? s : h
      }] : "add" === i ? (b = [].concat(m, [{
        id: u,
        desc: R ? s : h
      }])).splice(0, b.length - v) : "toggle" === i ? b = m.map(function (e) {
        return e.id === u ? r({}, e, {
          desc: R ? s : !y.desc
        }) : e;
      }) : "remove" === i && (b = m.filter(function (e) {
        return e.id !== u;
      })), r({}, e, {
        sortBy: b
      });
    }
  }
  function Ye(e) {
    var n = e.data,
      o = e.rows,
      r = e.flatRows,
      i = e.allColumns,
      u = e.orderByFn,
      s = void 0 === u ? Qe : u,
      a = e.sortTypes,
      c = e.manualSortBy,
      d = e.defaultCanSort,
      p = e.disableSortBy,
      g = e.flatHeaders,
      m = e.state.sortBy,
      y = e.dispatch,
      R = e.plugins,
      b = e.getHooks,
      S = e.autoResetSortBy,
      C = void 0 === S || S;
    v(R, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
    var x = t.useCallback(function (e) {
        y({
          type: l.setSortBy,
          sortBy: e
        });
      }, [y]),
      P = t.useCallback(function (e, t, n) {
        y({
          type: l.toggleSortBy,
          columnId: e,
          desc: t,
          multi: n
        });
      }, [y]),
      B = h(e);
    g.forEach(function (e) {
      var t = e.accessor,
        n = e.canSort,
        o = e.disableSortBy,
        r = e.id,
        i = t ? I(!0 !== o && void 0, !0 !== p && void 0, !0) : I(d, n, !1);
      e.canSort = i, e.canSort && (e.toggleSortBy = function (t, n) {
        return P(e.id, t, n);
      }, e.clearSortBy = function () {
        y({
          type: l.clearSortBy,
          columnId: e.id
        });
      }), e.getSortByToggleProps = f(b().getSortByToggleProps, {
        instance: B(),
        column: e
      });
      var u = m.find(function (e) {
        return e.id === r;
      });
      e.isSorted = !!u, e.sortedIndex = m.findIndex(function (e) {
        return e.id === r;
      }), e.isSortedDesc = e.isSorted ? u.desc : void 0;
    });
    var E = t.useMemo(function () {
        if (c || !m.length) return [o, r];
        var e = [],
          t = m.filter(function (e) {
            return i.find(function (t) {
              return t.id === e.id;
            });
          });
        return [function n(o) {
          var r = s(o, t.map(function (e) {
            var t = i.find(function (t) {
              return t.id === e.id;
            });
            if (!t) throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
            var n = t.sortType,
              o = F(n) || (a || {})[n] || Ke[n];
            if (!o) throw new Error("React-Table: Could not find a valid sortType of '" + n + "' for column '" + e.id + "'.");
            return function (t, n) {
              return o(t, n, e.id, e.desc);
            };
          }), t.map(function (e) {
            var t = i.find(function (t) {
              return t.id === e.id;
            });
            return t && t.sortInverted ? e.desc : !e.desc;
          }));
          return r.forEach(function (t) {
            e.push(t), t.subRows && 0 !== t.subRows.length && (t.subRows = n(t.subRows));
          }), r;
        }(o), e];
      }, [c, m, o, r, i, s, a]),
      G = E[0],
      A = E[1],
      k = h(C);
    w(function () {
      k() && y({
        type: l.resetSortBy
      });
    }, [c ? null : n]), Object.assign(e, {
      preSortedRows: o,
      preSortedFlatRows: r,
      sortedRows: G,
      sortedFlatRows: A,
      rows: G,
      flatRows: A,
      setSortBy: x,
      toggleSortBy: P
    });
  }
  function Qe(e, t, n) {
    return [].concat(e).sort(function (e, o) {
      for (var r = 0; r < t.length; r += 1) {
        var i = t[r],
          u = !1 === n[r] || "desc" === n[r],
          l = i(e, o);
        if (0 !== l) return u ? -l : l;
      }
      return n[0] ? e.index - o.index : o.index - e.index;
    });
  }
  l.resetPage = "resetPage", l.gotoPage = "gotoPage", l.setPageSize = "setPageSize";
  var Ze = function (e) {
    e.stateReducers.push(et), e.useInstance.push(tt);
  };
  function et(e, t, n, o) {
    if (t.type === l.init) return r({
      pageSize: 10,
      pageIndex: 0
    }, e);
    if (t.type === l.resetPage) return r({}, e, {
      pageIndex: o.initialState.pageIndex || 0
    });
    if (t.type === l.gotoPage) {
      var i = o.pageCount,
        u = o.page,
        s = m(t.pageIndex, e.pageIndex),
        a = !1;
      return s > e.pageIndex ? a = -1 === i ? u.length >= e.pageSize : s < i : s < e.pageIndex && (a = s > -1), a ? r({}, e, {
        pageIndex: s
      }) : e;
    }
    if (t.type === l.setPageSize) {
      var c = t.pageSize,
        d = e.pageSize * e.pageIndex;
      return r({}, e, {
        pageIndex: Math.floor(d / c),
        pageSize: c
      });
    }
  }
  function tt(e) {
    var n = e.rows,
      o = e.autoResetPage,
      r = void 0 === o || o,
      i = e.manualExpandedKey,
      u = void 0 === i ? "expanded" : i,
      s = e.plugins,
      a = e.pageCount,
      c = e.paginateExpandedRows,
      d = void 0 === c || c,
      f = e.expandSubRows,
      p = void 0 === f || f,
      g = e.state,
      m = g.pageSize,
      y = g.pageIndex,
      R = g.expanded,
      b = g.globalFilter,
      S = g.filters,
      C = g.groupBy,
      x = g.sortBy,
      P = e.dispatch,
      B = e.data,
      E = e.manualPagination;
    v(s, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
    var I = h(r);
    w(function () {
      I() && P({
        type: l.resetPage
      });
    }, [P, E ? null : B, b, S, C, x]);
    var F = E ? a : Math.ceil(n.length / m),
      G = t.useMemo(function () {
        return F > 0 ? [].concat(new Array(F)).fill(null).map(function (e, t) {
          return t;
        }) : [];
      }, [F]),
      k = t.useMemo(function () {
        var e;
        if (E) e = n;else {
          var t = m * y,
            o = t + m;
          e = n.slice(t, o);
        }
        return d ? e : A(e, {
          manualExpandedKey: u,
          expanded: R,
          expandSubRows: p
        });
      }, [p, R, u, E, y, m, d, n]),
      H = y > 0,
      W = -1 === F ? k.length >= m : y < F - 1,
      z = t.useCallback(function (e) {
        P({
          type: l.gotoPage,
          pageIndex: e
        });
      }, [P]),
      T = t.useCallback(function () {
        return z(function (e) {
          return e - 1;
        });
      }, [z]),
      O = t.useCallback(function () {
        return z(function (e) {
          return e + 1;
        });
      }, [z]),
      M = t.useCallback(function (e) {
        P({
          type: l.setPageSize,
          pageSize: e
        });
      }, [P]);
    Object.assign(e, {
      pageOptions: G,
      pageCount: F,
      page: k,
      canPreviousPage: H,
      canNextPage: W,
      gotoPage: z,
      previousPage: T,
      nextPage: O,
      setPageSize: M
    });
  }
  Ze.pluginName = "usePagination", l.resetPivot = "resetPivot", l.togglePivot = "togglePivot";
  var nt = function (e) {
    e.getPivotToggleProps = [rt], e.stateReducers.push(it), e.useInstanceAfterData.push(ut), e.allColumns.push(lt), e.accessValue.push(st), e.materializedColumns.push(at), e.materializedColumnsDeps.push(ct), e.visibleColumns.push(dt), e.visibleColumnsDeps.push(ft), e.useInstance.push(pt), e.prepareRow.push(gt);
  };
  nt.pluginName = "usePivotColumns";
  var ot = [],
    rt = function (e, t) {
      var n = t.header;
      return [e, {
        onClick: n.canPivot ? function (e) {
          e.persist(), n.togglePivot();
        } : void 0,
        style: {
          cursor: n.canPivot ? "pointer" : void 0
        },
        title: "Toggle Pivot"
      }];
    };
  function it(e, t, n, o) {
    if (t.type === l.init) return r({
      pivotColumns: ot
    }, e);
    if (t.type === l.resetPivot) return r({}, e, {
      pivotColumns: o.initialState.pivotColumns || ot
    });
    if (t.type === l.togglePivot) {
      var i = t.columnId,
        u = t.value,
        s = void 0 !== u ? u : !e.pivotColumns.includes(i);
      return r({}, e, s ? {
        pivotColumns: [].concat(e.pivotColumns, [i])
      } : {
        pivotColumns: e.pivotColumns.filter(function (e) {
          return e !== i;
        })
      });
    }
  }
  function ut(e) {
    e.allColumns.forEach(function (t) {
      t.isPivotSource = e.state.pivotColumns.includes(t.id);
    });
  }
  function lt(e, t) {
    var n = t.instance;
    return e.forEach(function (e) {
      e.isPivotSource = n.state.pivotColumns.includes(e.id), e.uniqueValues = new Set();
    }), e;
  }
  function st(e, t) {
    var n = t.column;
    return n.uniqueValues && void 0 !== e && n.uniqueValues.add(e), e;
  }
  function at(e, t) {
    var n = t.instance,
      o = n.allColumns,
      i = n.state;
    if (!i.pivotColumns.length || !i.groupBy || !i.groupBy.length) return e;
    var u = i.pivotColumns.map(function (e) {
        return o.find(function (t) {
          return t.id === e;
        });
      }).filter(Boolean),
      l = o.filter(function (e) {
        return !e.isPivotSource && !i.groupBy.includes(e.id) && !i.pivotColumns.includes(e.id);
      }),
      s = C(function e(t, n, o) {
        void 0 === t && (t = 0), void 0 === o && (o = []);
        var i = u[t];
        return i ? Array.from(i.uniqueValues).sort().map(function (u) {
          var l = r({}, i, {
            Header: i.PivotHeader || "string" == typeof i.header ? i.Header + ": " + u : u,
            isPivotGroup: !0,
            parent: n,
            depth: t,
            id: n ? n.id + "." + i.id + "." + u : i.id + "." + u,
            pivotValue: u
          });
          return l.columns = e(t + 1, l, [].concat(o, [function (e) {
            return e.values[i.id] === u;
          }])), l;
        }) : l.map(function (e) {
          return r({}, e, {
            canPivot: !1,
            isPivoted: !0,
            parent: n,
            depth: t,
            id: "" + (n ? n.id + "." + e.id : e.id),
            accessor: function (t, n, r) {
              if (o.every(function (e) {
                return e(r);
              })) return r.values[e.id];
            }
          });
        });
      }());
    return [].concat(e, s);
  }
  function ct(e, t) {
    var n = t.instance.state,
      o = n.pivotColumns,
      r = n.groupBy;
    return [].concat(e, [o, r]);
  }
  function dt(e, t) {
    var n = t.instance.state;
    return e = e.filter(function (e) {
      return !e.isPivotSource;
    }), n.pivotColumns.length && n.groupBy && n.groupBy.length && (e = e.filter(function (e) {
      return e.isGrouped || e.isPivoted;
    })), e;
  }
  function ft(e, t) {
    var n = t.instance;
    return [].concat(e, [n.state.pivotColumns, n.state.groupBy]);
  }
  function pt(e) {
    var t = e.columns,
      n = e.allColumns,
      o = e.flatHeaders,
      r = e.getHooks,
      i = e.plugins,
      u = e.dispatch,
      s = e.autoResetPivot,
      a = void 0 === s || s,
      c = e.manaulPivot,
      d = e.disablePivot,
      p = e.defaultCanPivot;
    v(i, ["useGroupBy"], "usePivotColumns");
    var g = h(e);
    n.forEach(function (t) {
      var n = t.accessor,
        o = t.defaultPivot,
        r = t.disablePivot;
      t.canPivot = n ? I(t.canPivot, !0 !== r && void 0, !0 !== d && void 0, !0) : I(t.canPivot, o, p, !1), t.canPivot && (t.togglePivot = function () {
        return e.togglePivot(t.id);
      }), t.Aggregated = t.Aggregated || t.Cell;
    });
    o.forEach(function (e) {
      e.getPivotToggleProps = f(r().getPivotToggleProps, {
        instance: g(),
        header: e
      });
    });
    var m = h(a);
    w(function () {
      m() && u({
        type: l.resetPivot
      });
    }, [u, c ? null : t]), Object.assign(e, {
      togglePivot: function (e, t) {
        u({
          type: l.togglePivot,
          columnId: e,
          value: t
        });
      }
    });
  }
  function gt(e) {
    e.allCells.forEach(function (e) {
      e.isPivoted = e.column.isPivoted;
    });
  }
  l.resetSelectedRows = "resetSelectedRows", l.toggleAllRowsSelected = "toggleAllRowsSelected", l.toggleRowSelected = "toggleRowSelected", l.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
  var vt = function (e) {
    e.getToggleRowSelectedProps = [mt], e.getToggleAllRowsSelectedProps = [ht], e.getToggleAllPageRowsSelectedProps = [yt], e.stateReducers.push(wt), e.useInstance.push(Rt), e.prepareRow.push(bt);
  };
  vt.pluginName = "useRowSelect";
  var mt = function (e, t) {
      var n = t.instance,
        o = t.row,
        r = n.manualRowSelectedKey,
        i = void 0 === r ? "isSelected" : r;
      return [e, {
        onChange: function (e) {
          o.toggleRowSelected(e.target.checked);
        },
        style: {
          cursor: "pointer"
        },
        checked: !(!o.original || !o.original[i]) || o.isSelected,
        title: "Toggle Row Selected",
        indeterminate: o.isSomeSelected
      }];
    },
    ht = function (e, t) {
      var n = t.instance;
      return [e, {
        onChange: function (e) {
          n.toggleAllRowsSelected(e.target.checked);
        },
        style: {
          cursor: "pointer"
        },
        checked: n.isAllRowsSelected,
        title: "Toggle All Rows Selected",
        indeterminate: Boolean(!n.isAllRowsSelected && Object.keys(n.state.selectedRowIds).length)
      }];
    },
    yt = function (e, t) {
      var n = t.instance;
      return [e, {
        onChange: function (e) {
          n.toggleAllPageRowsSelected(e.target.checked);
        },
        style: {
          cursor: "pointer"
        },
        checked: n.isAllPageRowsSelected,
        title: "Toggle All Current Page Rows Selected",
        indeterminate: Boolean(!n.isAllPageRowsSelected && n.page.some(function (e) {
          var t = e.id;
          return n.state.selectedRowIds[t];
        }))
      }];
    };
  function wt(e, t, n, o) {
    if (t.type === l.init) return r({
      selectedRowIds: {}
    }, e);
    if (t.type === l.resetSelectedRows) return r({}, e, {
      selectedRowIds: o.initialState.selectedRowIds || {}
    });
    if (t.type === l.toggleAllRowsSelected) {
      var i = t.value,
        u = o.isAllRowsSelected,
        s = o.rowsById,
        a = o.nonGroupedRowsById,
        c = void 0 === a ? s : a,
        d = void 0 !== i ? i : !u,
        f = Object.assign({}, e.selectedRowIds);
      return d ? Object.keys(c).forEach(function (e) {
        f[e] = !0;
      }) : Object.keys(c).forEach(function (e) {
        delete f[e];
      }), r({}, e, {
        selectedRowIds: f
      });
    }
    if (t.type === l.toggleRowSelected) {
      var p = t.id,
        g = t.value,
        v = o.rowsById,
        m = o.selectSubRows,
        h = void 0 === m || m,
        y = o.getSubRows,
        w = e.selectedRowIds[p],
        R = void 0 !== g ? g : !w;
      if (w === R) return e;
      var b = r({}, e.selectedRowIds);
      return function e(t) {
        var n = v[t];
        if (n && (n.isGrouped || (R ? b[t] = !0 : delete b[t]), h && y(n))) return y(n).forEach(function (t) {
          return e(t.id);
        });
      }(p), r({}, e, {
        selectedRowIds: b
      });
    }
    if (t.type === l.toggleAllPageRowsSelected) {
      var S = t.value,
        C = o.page,
        x = o.rowsById,
        P = o.selectSubRows,
        B = void 0 === P || P,
        E = o.isAllPageRowsSelected,
        I = o.getSubRows,
        F = void 0 !== S ? S : !E,
        G = r({}, e.selectedRowIds);
      return C.forEach(function (e) {
        return function e(t) {
          var n = x[t];
          if (n.isGrouped || (F ? G[t] = !0 : delete G[t]), B && I(n)) return I(n).forEach(function (t) {
            return e(t.id);
          });
        }(e.id);
      }), r({}, e, {
        selectedRowIds: G
      });
    }
    return e;
  }
  function Rt(e) {
    var n = e.data,
      o = e.rows,
      r = e.getHooks,
      i = e.plugins,
      u = e.rowsById,
      s = e.nonGroupedRowsById,
      a = void 0 === s ? u : s,
      c = e.autoResetSelectedRows,
      d = void 0 === c || c,
      p = e.state.selectedRowIds,
      g = e.selectSubRows,
      m = void 0 === g || g,
      y = e.dispatch,
      R = e.page,
      b = e.getSubRows;
    v(i, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
    var S = t.useMemo(function () {
        var e = [];
        return o.forEach(function (t) {
          var n = m ? function e(t, n, o) {
            if (n[t.id]) return !0;
            var r = o(t);
            if (r && r.length) {
              var i = !0,
                u = !1;
              return r.forEach(function (t) {
                u && !i || (e(t, n, o) ? u = !0 : i = !1);
              }), !!i || !!u && null;
            }
            return !1;
          }(t, p, b) : !!p[t.id];
          t.isSelected = !!n, t.isSomeSelected = null === n, n && e.push(t);
        }), e;
      }, [o, m, p, b]),
      C = Boolean(Object.keys(a).length && Object.keys(p).length),
      x = C;
    C && Object.keys(a).some(function (e) {
      return !p[e];
    }) && (C = !1), C || R && R.length && R.some(function (e) {
      var t = e.id;
      return !p[t];
    }) && (x = !1);
    var P = h(d);
    w(function () {
      P() && y({
        type: l.resetSelectedRows
      });
    }, [y, n]);
    var B = t.useCallback(function (e) {
        return y({
          type: l.toggleAllRowsSelected,
          value: e
        });
      }, [y]),
      E = t.useCallback(function (e) {
        return y({
          type: l.toggleAllPageRowsSelected,
          value: e
        });
      }, [y]),
      I = t.useCallback(function (e, t) {
        return y({
          type: l.toggleRowSelected,
          id: e,
          value: t
        });
      }, [y]),
      F = h(e),
      G = f(r().getToggleAllRowsSelectedProps, {
        instance: F()
      }),
      A = f(r().getToggleAllPageRowsSelectedProps, {
        instance: F()
      });
    Object.assign(e, {
      selectedFlatRows: S,
      isAllRowsSelected: C,
      isAllPageRowsSelected: x,
      toggleRowSelected: I,
      toggleAllRowsSelected: B,
      getToggleAllRowsSelectedProps: G,
      getToggleAllPageRowsSelectedProps: A,
      toggleAllPageRowsSelected: E
    });
  }
  function bt(e, t) {
    var n = t.instance;
    e.toggleRowSelected = function (t) {
      return n.toggleRowSelected(e.id, t);
    }, e.getToggleRowSelectedProps = f(n.getHooks().getToggleRowSelectedProps, {
      instance: n,
      row: e
    });
  }
  var St = function (e) {
      return {};
    },
    Ct = function (e) {
      return {};
    };
  l.setRowState = "setRowState", l.setCellState = "setCellState", l.resetRowState = "resetRowState";
  var xt = function (e) {
    e.stateReducers.push(Pt), e.useInstance.push(Bt), e.prepareRow.push(Et);
  };
  function Pt(e, t, n, o) {
    var i = o.initialRowStateAccessor,
      u = void 0 === i ? St : i,
      s = o.initialCellStateAccessor,
      a = void 0 === s ? Ct : s,
      c = o.rowsById;
    if (t.type === l.init) return r({
      rowState: {}
    }, e);
    if (t.type === l.resetRowState) return r({}, e, {
      rowState: o.initialState.rowState || {}
    });
    if (t.type === l.setRowState) {
      var d,
        f = t.rowId,
        p = t.value,
        g = void 0 !== e.rowState[f] ? e.rowState[f] : u(c[f]);
      return r({}, e, {
        rowState: r({}, e.rowState, (d = {}, d[f] = m(p, g), d))
      });
    }
    if (t.type === l.setCellState) {
      var v,
        h,
        y,
        w,
        R,
        b = t.rowId,
        S = t.columnId,
        C = t.value,
        x = void 0 !== e.rowState[b] ? e.rowState[b] : u(c[b]),
        P = void 0 !== (null == x ? void 0 : null == (v = x.cellState) ? void 0 : v[S]) ? x.cellState[S] : a(null == (h = c[b]) ? void 0 : null == (y = h.cells) ? void 0 : y.find(function (e) {
          return e.column.id === S;
        }));
      return r({}, e, {
        rowState: r({}, e.rowState, (R = {}, R[b] = r({}, x, {
          cellState: r({}, x.cellState || {}, (w = {}, w[S] = m(C, P), w))
        }), R))
      });
    }
  }
  function Bt(e) {
    var n = e.autoResetRowState,
      o = void 0 === n || n,
      r = e.data,
      i = e.dispatch,
      u = t.useCallback(function (e, t) {
        return i({
          type: l.setRowState,
          rowId: e,
          value: t
        });
      }, [i]),
      s = t.useCallback(function (e, t, n) {
        return i({
          type: l.setCellState,
          rowId: e,
          columnId: t,
          value: n
        });
      }, [i]),
      a = h(o);
    w(function () {
      a() && i({
        type: l.resetRowState
      });
    }, [r]), Object.assign(e, {
      setRowState: u,
      setCellState: s
    });
  }
  function Et(e, t) {
    var n = t.instance,
      o = n.initialRowStateAccessor,
      r = void 0 === o ? St : o,
      i = n.initialCellStateAccessor,
      u = void 0 === i ? Ct : i,
      l = n.state.rowState;
    e && (e.state = void 0 !== l[e.id] ? l[e.id] : r(e), e.setState = function (t) {
      return n.setRowState(e.id, t);
    }, e.cells.forEach(function (t) {
      e.state.cellState || (e.state.cellState = {}), t.state = void 0 !== e.state.cellState[t.column.id] ? e.state.cellState[t.column.id] : u(t), t.setState = function (o) {
        return n.setCellState(e.id, t.column.id, o);
      };
    }));
  }
  xt.pluginName = "useRowState", l.resetColumnOrder = "resetColumnOrder", l.setColumnOrder = "setColumnOrder";
  var It = function (e) {
    e.stateReducers.push(Ft), e.visibleColumnsDeps.push(function (e, t) {
      var n = t.instance;
      return [].concat(e, [n.state.columnOrder]);
    }), e.visibleColumns.push(Gt), e.useInstance.push(At);
  };
  function Ft(e, t, n, o) {
    return t.type === l.init ? r({
      columnOrder: []
    }, e) : t.type === l.resetColumnOrder ? r({}, e, {
      columnOrder: o.initialState.columnOrder || []
    }) : t.type === l.setColumnOrder ? r({}, e, {
      columnOrder: m(t.columnOrder, e.columnOrder)
    }) : void 0;
  }
  function Gt(e, t) {
    var n = t.instance.state.columnOrder;
    if (!n || !n.length) return e;
    for (var o = [].concat(n), r = [].concat(e), i = [], u = function () {
        var e = o.shift(),
          t = r.findIndex(function (t) {
            return t.id === e;
          });
        t > -1 && i.push(r.splice(t, 1)[0]);
      }; r.length && o.length;) u();
    return [].concat(i, r);
  }
  function At(e) {
    var n = e.dispatch;
    e.setColumnOrder = t.useCallback(function (e) {
      return n({
        type: l.setColumnOrder,
        columnOrder: e
      });
    }, [n]);
  }
  It.pluginName = "useColumnOrder", c.canResize = !0, l.columnStartResizing = "columnStartResizing", l.columnResizing = "columnResizing", l.columnDoneResizing = "columnDoneResizing", l.resetResize = "resetResize";
  var kt = function (e) {
      e.getResizerProps = [Ht], e.getHeaderProps.push({
        style: {
          position: "relative"
        }
      }), e.stateReducers.push(Wt), e.useInstance.push(Tt), e.useInstanceBeforeDimensions.push(zt);
    },
    Ht = function (e, t) {
      var n = t.instance,
        o = t.header,
        r = n.dispatch,
        i = function (e, t) {
          var n = !1;
          if ("touchstart" === e.type) {
            if (e.touches && e.touches.length > 1) return;
            n = !0;
          }
          var o,
            i,
            u = function (e) {
              var t = [];
              return function e(n) {
                n.columns && n.columns.length && n.columns.map(e);
                t.push(n);
              }(e), t;
            }(t).map(function (e) {
              return [e.id, e.totalWidth];
            }),
            s = n ? Math.round(e.touches[0].clientX) : e.clientX,
            a = function () {
              window.cancelAnimationFrame(o), o = null, r({
                type: l.columnDoneResizing
              });
            },
            c = function () {
              window.cancelAnimationFrame(o), o = null, r({
                type: l.columnResizing,
                clientX: i
              });
            },
            d = function (e) {
              i = e, o || (o = window.requestAnimationFrame(c));
            },
            f = {
              mouse: {
                moveEvent: "mousemove",
                moveHandler: function (e) {
                  return d(e.clientX);
                },
                upEvent: "mouseup",
                upHandler: function (e) {
                  document.removeEventListener("mousemove", f.mouse.moveHandler), document.removeEventListener("mouseup", f.mouse.upHandler), a();
                }
              },
              touch: {
                moveEvent: "touchmove",
                moveHandler: function (e) {
                  return e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1;
                },
                upEvent: "touchend",
                upHandler: function (e) {
                  document.removeEventListener(f.touch.moveEvent, f.touch.moveHandler), document.removeEventListener(f.touch.upEvent, f.touch.moveHandler), a();
                }
              }
            },
            p = n ? f.touch : f.mouse,
            g = !!function () {
              if ("boolean" == typeof z) return z;
              var e = !1;
              try {
                var t = {
                  get passive() {
                    return e = !0, !1;
                  }
                };
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
              } catch (t) {
                e = !1;
              }
              return z = e;
            }() && {
              passive: !1
            };
          document.addEventListener(p.moveEvent, p.moveHandler, g), document.addEventListener(p.upEvent, p.upHandler, g), r({
            type: l.columnStartResizing,
            columnId: t.id,
            columnWidth: t.totalWidth,
            headerIdWidths: u,
            clientX: s
          });
        };
      return [e, {
        onMouseDown: function (e) {
          return e.persist() || i(e, o);
        },
        onTouchStart: function (e) {
          return e.persist() || i(e, o);
        },
        style: {
          cursor: "col-resize"
        },
        draggable: !1,
        role: "separator"
      }];
    };
  function Wt(e, t) {
    if (t.type === l.init) return r({
      columnResizing: {
        columnWidths: {}
      }
    }, e);
    if (t.type === l.resetResize) return r({}, e, {
      columnResizing: {
        columnWidths: {}
      }
    });
    if (t.type === l.columnStartResizing) {
      var n = t.clientX,
        o = t.columnId,
        i = t.columnWidth,
        u = t.headerIdWidths;
      return r({}, e, {
        columnResizing: r({}, e.columnResizing, {
          startX: n,
          headerIdWidths: u,
          columnWidth: i,
          isResizingColumn: o
        })
      });
    }
    if (t.type === l.columnResizing) {
      var s = t.clientX,
        a = e.columnResizing,
        c = a.startX,
        d = a.columnWidth,
        f = a.headerIdWidths,
        p = (s - c) / d,
        g = {};
      return (void 0 === f ? [] : f).forEach(function (e) {
        var t = e[0],
          n = e[1];
        g[t] = Math.max(n + n * p, 0);
      }), r({}, e, {
        columnResizing: r({}, e.columnResizing, {
          columnWidths: r({}, e.columnResizing.columnWidths, {}, g)
        })
      });
    }
    return t.type === l.columnDoneResizing ? r({}, e, {
      columnResizing: r({}, e.columnResizing, {
        startX: null,
        isResizingColumn: null
      })
    }) : void 0;
  }
  kt.pluginName = "useResizeColumns";
  var zt = function (e) {
    var t = e.flatHeaders,
      n = e.disableResizing,
      o = e.getHooks,
      r = e.state.columnResizing,
      i = h(e);
    t.forEach(function (e) {
      var t = I(!0 !== e.disableResizing && void 0, !0 !== n && void 0, !0);
      e.canResize = t, e.width = r.columnWidths[e.id] || e.originalWidth || e.width, e.isResizing = r.isResizingColumn === e.id, t && (e.getResizerProps = f(o().getResizerProps, {
        instance: i(),
        header: e
      }));
    });
  };
  function Tt(e) {
    var n = e.plugins,
      o = e.dispatch,
      r = e.autoResetResize,
      i = void 0 === r || r,
      u = e.columns;
    v(n, ["useAbsoluteLayout"], "useResizeColumns");
    var s = h(i);
    w(function () {
      s() && o({
        type: l.resetResize
      });
    }, [u]);
    var a = t.useCallback(function () {
      return o({
        type: l.resetResize
      });
    }, [o]);
    Object.assign(e, {
      resetResizing: a
    });
  }
  var Ot = {
      position: "absolute",
      top: 0
    },
    Mt = function (e) {
      e.getTableBodyProps.push(jt), e.getRowProps.push(jt), e.getHeaderGroupProps.push(jt), e.getFooterGroupProps.push(jt), e.getHeaderProps.push(function (e, t) {
        var n = t.column;
        return [e, {
          style: r({}, Ot, {
            left: n.totalLeft + "px",
            width: n.totalWidth + "px"
          })
        }];
      }), e.getCellProps.push(function (e, t) {
        var n = t.cell;
        return [e, {
          style: r({}, Ot, {
            left: n.column.totalLeft + "px",
            width: n.column.totalWidth + "px"
          })
        }];
      }), e.getFooterProps.push(function (e, t) {
        var n = t.column;
        return [e, {
          style: r({}, Ot, {
            left: n.totalLeft + "px",
            width: n.totalWidth + "px"
          })
        }];
      });
    };
  Mt.pluginName = "useAbsoluteLayout";
  var jt = function (e, t) {
      return [e, {
        style: {
          position: "relative",
          width: t.instance.totalColumnsWidth + "px"
        }
      }];
    },
    Lt = {
      display: "inline-block",
      boxSizing: "border-box"
    },
    Nt = function (e, t) {
      return [e, {
        style: {
          display: "flex",
          width: t.instance.totalColumnsWidth + "px"
        }
      }];
    },
    Dt = function (e) {
      e.getRowProps.push(Nt), e.getHeaderGroupProps.push(Nt), e.getFooterGroupProps.push(Nt), e.getHeaderProps.push(function (e, t) {
        var n = t.column;
        return [e, {
          style: r({}, Lt, {
            width: n.totalWidth + "px"
          })
        }];
      }), e.getCellProps.push(function (e, t) {
        var n = t.cell;
        return [e, {
          style: r({}, Lt, {
            width: n.column.totalWidth + "px"
          })
        }];
      }), e.getFooterProps.push(function (e, t) {
        var n = t.column;
        return [e, {
          style: r({}, Lt, {
            width: n.totalWidth + "px"
          })
        }];
      });
    };
  function Vt(e) {
    e.getTableProps.push(_t), e.getRowProps.push(Xt), e.getHeaderGroupProps.push(Xt), e.getFooterGroupProps.push(Xt), e.getHeaderProps.push(qt), e.getCellProps.push(Kt), e.getFooterProps.push(Ut);
  }
  Dt.pluginName = "useBlockLayout", Vt.pluginName = "useFlexLayout";
  var _t = function (e, t) {
      return [e, {
        style: {
          minWidth: t.instance.totalColumnsMinWidth + "px"
        }
      }];
    },
    Xt = function (e, t) {
      return [e, {
        style: {
          display: "flex",
          flex: "1 0 auto",
          minWidth: t.instance.totalColumnsMinWidth + "px"
        }
      }];
    },
    qt = function (e, t) {
      var n = t.column;
      return [e, {
        style: {
          boxSizing: "border-box",
          flex: n.totalFlexWidth ? n.totalFlexWidth + " 0 auto" : void 0,
          minWidth: n.totalMinWidth + "px",
          width: n.totalWidth + "px"
        }
      }];
    },
    Kt = function (e, t) {
      var n = t.cell;
      return [e, {
        style: {
          boxSizing: "border-box",
          flex: n.column.totalFlexWidth + " 0 auto",
          minWidth: n.column.totalMinWidth + "px",
          width: n.column.totalWidth + "px"
        }
      }];
    },
    Ut = function (e, t) {
      var n = t.column;
      return [e, {
        style: {
          boxSizing: "border-box",
          flex: n.totalFlexWidth ? n.totalFlexWidth + " 0 auto" : void 0,
          minWidth: n.totalMinWidth + "px",
          width: n.totalWidth + "px"
        }
      }];
    };
  function $t(e) {
    e.stateReducers.push(Zt), e.getTableProps.push(Jt), e.getHeaderProps.push(Yt), e.getRowProps.push(Qt);
  }
  l.columnStartResizing = "columnStartResizing", l.columnResizing = "columnResizing", l.columnDoneResizing = "columnDoneResizing", l.resetResize = "resetResize", $t.pluginName = "useGridLayout";
  var Jt = function (e, t) {
      var n = t.instance;
      return [e, {
        style: {
          display: "grid",
          gridTemplateColumns: n.visibleColumns.map(function (e) {
            var t;
            return n.state.gridLayout.columnWidths[e.id] ? n.state.gridLayout.columnWidths[e.id] + "px" : (null == (t = n.state.columnResizing) ? void 0 : t.isResizingColumn) ? n.state.gridLayout.startWidths[e.id] + "px" : "number" == typeof e.width ? e.width + "px" : e.width;
          }).join(" ")
        }
      }];
    },
    Yt = function (e, t) {
      var n = t.column;
      return [e, {
        id: "header-cell-" + n.id,
        style: {
          position: "sticky",
          gridColumn: "span " + n.totalVisibleHeaderCount
        }
      }];
    },
    Qt = function (e, t) {
      var n = t.row;
      return n.isExpanded ? [e, {
        style: {
          gridColumn: "1 / " + (n.cells.length + 1)
        }
      }] : [e, {}];
    };
  function Zt(e, t, n, o) {
    if (t.type === l.init) return r({
      gridLayout: {
        columnWidths: {}
      }
    }, e);
    if (t.type === l.resetResize) return r({}, e, {
      gridLayout: {
        columnWidths: {}
      }
    });
    if (t.type === l.columnStartResizing) {
      var i = t.columnId,
        u = t.headerIdWidths,
        s = en(i);
      if (void 0 !== s) {
        var a = o.visibleColumns.reduce(function (e, t) {
            var n;
            return r({}, e, ((n = {})[t.id] = en(t.id), n));
          }, {}),
          c = o.visibleColumns.reduce(function (e, t) {
            var n;
            return r({}, e, ((n = {})[t.id] = t.minWidth, n));
          }, {}),
          d = o.visibleColumns.reduce(function (e, t) {
            var n;
            return r({}, e, ((n = {})[t.id] = t.maxWidth, n));
          }, {}),
          f = u.map(function (e) {
            var t = e[0];
            return [t, en(t)];
          });
        return r({}, e, {
          gridLayout: r({}, e.gridLayout, {
            startWidths: a,
            minWidths: c,
            maxWidths: d,
            headerIdGridWidths: f,
            columnWidth: s
          })
        });
      }
      return e;
    }
    if (t.type === l.columnResizing) {
      var p = t.clientX,
        g = e.columnResizing.startX,
        v = e.gridLayout,
        m = v.columnWidth,
        h = v.minWidths,
        y = v.maxWidths,
        w = v.headerIdGridWidths,
        R = (p - g) / m,
        b = {};
      return (void 0 === w ? [] : w).forEach(function (e) {
        var t = e[0],
          n = e[1];
        b[t] = Math.min(Math.max(h[t], n + n * R), y[t]);
      }), r({}, e, {
        gridLayout: r({}, e.gridLayout, {
          columnWidths: r({}, e.gridLayout.columnWidths, {}, b)
        })
      });
    }
    return t.type === l.columnDoneResizing ? r({}, e, {
      gridLayout: r({}, e.gridLayout, {
        startWidths: {},
        minWidths: {},
        maxWidths: {}
      })
    }) : void 0;
  }
  function en(e) {
    var t,
      n = null == (t = document.getElementById("header-cell-" + e)) ? void 0 : t.offsetWidth;
    if (void 0 !== n) return n;
  }
  e._UNSTABLE_usePivotColumns = nt, e.actions = l, e.defaultColumn = c, e.defaultGroupByFn = De, e.defaultOrderByFn = Qe, e.defaultRenderer = s, e.emptyRenderer = a, e.ensurePluginOrder = v, e.flexRender = b, e.functionalUpdate = m, e.loopHooks = g, e.makePropGetter = f, e.makeRenderer = R, e.reduceHooks = p, e.safeUseLayoutEffect = y, e.useAbsoluteLayout = Mt, e.useAsyncDebounce = function (e, n) {
    void 0 === n && (n = 0);
    var r = t.useRef({}),
      i = h(e),
      u = h(n);
    return t.useCallback(function () {
      var e = o(regeneratorRuntime.mark(function e() {
        var t,
          n,
          l,
          s = arguments;
        return regeneratorRuntime.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              for (t = s.length, n = new Array(t), l = 0; l < t; l++) n[l] = s[l];
              return r.current.promise || (r.current.promise = new Promise(function (e, t) {
                r.current.resolve = e, r.current.reject = t;
              })), r.current.timeout && clearTimeout(r.current.timeout), r.current.timeout = setTimeout(o(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return delete r.current.timeout, e.prev = 1, e.t0 = r.current, e.next = 5, i().apply(void 0, n);
                    case 5:
                      e.t1 = e.sent, e.t0.resolve.call(e.t0, e.t1), e.next = 12;
                      break;
                    case 9:
                      e.prev = 9, e.t2 = e.catch(1), r.current.reject(e.t2);
                    case 12:
                      return e.prev = 12, delete r.current.promise, e.finish(12);
                    case 15:
                    case "end":
                      return e.stop();
                  }
                }, e, null, [[1, 9, 12, 15]]);
              })), u()), e.abrupt("return", r.current.promise);
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(), [i, u]);
  }, e.useBlockLayout = Dt, e.useColumnOrder = It, e.useExpanded = se, e.useFilters = Pe, e.useFlexLayout = Vt, e.useGetLatest = h, e.useGlobalFilter = Ie, e.useGridLayout = $t, e.useGroupBy = ze, e.useMountedLayoutEffect = w, e.usePagination = Ze, e.useResizeColumns = kt, e.useRowSelect = vt, e.useRowState = xt, e.useSortBy = Ue, e.useTable = function (e) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
    e = ie(e), o = [K].concat(o);
    var u = t.useRef({}),
      s = h(u.current);
    Object.assign(s(), r({}, e, {
      plugins: o,
      hooks: q()
    })), o.filter(Boolean).forEach(function (e) {
      e(s().hooks);
    });
    var a = h(s().hooks);
    s().getHooks = a, delete s().hooks, Object.assign(s(), p(a().useOptions, ie(e)));
    var c = s(),
      d = c.data,
      v = c.columns,
      m = c.initialState,
      y = c.defaultColumn,
      w = c.getSubRows,
      b = c.getRowId,
      E = c.stateReducer,
      I = c.useControlledState,
      F = h(E),
      G = t.useCallback(function (e, t) {
        if (!t.type) throw console.info({
          action: t
        }), new Error("Unknown Action 👆");
        return [].concat(a().stateReducers, Array.isArray(F()) ? F() : [F()]).reduce(function (n, o) {
          return o(n, t, e, s()) || n;
        }, e);
      }, [a, F, s]),
      A = t.useReducer(G, void 0, function () {
        return G(m, {
          type: l.init
        });
      }),
      k = A[0],
      H = A[1],
      W = p([].concat(a().useControlledState, [I]), k, {
        instance: s()
      });
    Object.assign(s(), {
      state: W,
      dispatch: H
    });
    var z = t.useMemo(function () {
      return S(p(a().columns, v, {
        instance: s()
      }));
    }, [a, s, v].concat(p(a().columnsDeps, [], {
      instance: s()
    })));
    s().columns = z;
    var T = t.useMemo(function () {
      return p(a().allColumns, C(z), {
        instance: s()
      }).map(x);
    }, [z, a, s].concat(p(a().allColumnsDeps, [], {
      instance: s()
    })));
    s().allColumns = T;
    var O = t.useMemo(function () {
        for (var e = [], t = [], n = {}, o = [].concat(T); o.length;) {
          var r = o.shift();
          le({
            data: d,
            rows: e,
            flatRows: t,
            rowsById: n,
            column: r,
            getRowId: b,
            getSubRows: w,
            accessValueHooks: a().accessValue,
            getInstance: s
          });
        }
        return [e, t, n];
      }, [T, d, b, w, a, s]),
      M = O[0],
      j = O[1],
      L = O[2];
    Object.assign(s(), {
      rows: M,
      initialRows: [].concat(M),
      flatRows: j,
      rowsById: L
    }), g(a().useInstanceAfterData, s());
    var N = t.useMemo(function () {
      return p(a().visibleColumns, T, {
        instance: s()
      }).map(function (e) {
        return P(e, y);
      });
    }, [a, T, s, y].concat(p(a().visibleColumnsDeps, [], {
      instance: s()
    })));
    T = t.useMemo(function () {
      var e = [].concat(N);
      return T.forEach(function (t) {
        e.find(function (e) {
          return e.id === t.id;
        }) || e.push(t);
      }), e;
    }, [T, N]), s().allColumns = T;
    var D = t.useMemo(function () {
      return p(a().headerGroups, B(N, y), s());
    }, [a, N, y, s].concat(p(a().headerGroupsDeps, [], {
      instance: s()
    })));
    s().headerGroups = D;
    var V = t.useMemo(function () {
      return D.length ? D[0].headers : [];
    }, [D]);
    s().headers = V, s().flatHeaders = D.reduce(function (e, t) {
      return [].concat(e, t.headers);
    }, []), g(a().useInstanceBeforeDimensions, s());
    var _ = N.filter(function (e) {
      return e.isVisible;
    }).map(function (e) {
      return e.id;
    }).sort().join("_");
    N = t.useMemo(function () {
      return N.filter(function (e) {
        return e.isVisible;
      });
    }, [N, _]), s().visibleColumns = N;
    var X = ue(V),
      U = X[0],
      $ = X[1],
      J = X[2];
    return s().totalColumnsMinWidth = U, s().totalColumnsWidth = $, s().totalColumnsMaxWidth = J, g(a().useInstance, s()), [].concat(s().flatHeaders, s().allColumns).forEach(function (e) {
      e.render = R(s(), e), e.getHeaderProps = f(a().getHeaderProps, {
        instance: s(),
        column: e
      }), e.getFooterProps = f(a().getFooterProps, {
        instance: s(),
        column: e
      });
    }), s().headerGroups = t.useMemo(function () {
      return D.filter(function (e, t) {
        return e.headers = e.headers.filter(function (e) {
          return e.headers ? function e(t) {
            return t.filter(function (t) {
              return t.headers ? e(t.headers) : t.isVisible;
            }).length;
          }(e.headers) : e.isVisible;
        }), !!e.headers.length && (e.getHeaderGroupProps = f(a().getHeaderGroupProps, {
          instance: s(),
          headerGroup: e,
          index: t
        }), e.getFooterGroupProps = f(a().getFooterGroupProps, {
          instance: s(),
          headerGroup: e,
          index: t
        }), !0);
      });
    }, [D, s, a]), s().footerGroups = [].concat(s().headerGroups).reverse(), s().prepareRow = t.useCallback(function (e) {
      e.getRowProps = f(a().getRowProps, {
        instance: s(),
        row: e
      }), e.allCells = T.map(function (t) {
        var n = e.values[t.id],
          o = {
            column: t,
            row: e,
            value: n
          };
        return o.getCellProps = f(a().getCellProps, {
          instance: s(),
          cell: o
        }), o.render = R(s(), t, {
          row: e,
          cell: o,
          value: n
        }), o;
      }), e.cells = N.map(function (t) {
        return e.allCells.find(function (e) {
          return e.column.id === t.id;
        });
      }), g(a().prepareRow, e, {
        instance: s()
      });
    }, [a, s, T, N]), s().getTableProps = f(a().getTableProps, {
      instance: s()
    }), s().getTableBodyProps = f(a().getTableBodyProps, {
      instance: s()
    }), g(a().useFinalInstance, s()), s();
  }, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
},{"react":"HdMw"}],"sVIt":[function(require,module,exports) {
if ("production" === 'production') {
  module.exports = require('./dist/react-table.production.min.js');
} else {
  module.exports = require('./dist/react-table.development.js');
}
},{"./dist/react-table.production.min.js":"mUTZ"}],"pKFb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TotalActiveCasesTableQuery = exports.TOTAL_ACTIVE_CASES_TABLE = void 0;
exports.convertTotalActiveCasesRow = convertTotalActiveCasesRow;
var _converters = require("../converters");
var _query = require("../query");
const TOTAL_ACTIVE_CASES_TABLE = exports.TOTAL_ACTIVE_CASES_TABLE = new _query.QueryFiles(`total-active-cases-table`);
function convertTotalActiveCasesRow(row) {
  return {
    count: (0, _converters.toInt)(row.count),
    category: row.category
  };
}
function getTotalActiveCasesCsvHeader() {
  return ['count', 'category'];
}
function toTotalActiveCasesCsvRow(row) {
  return [row.count, row.category];
}
const TotalActiveCasesTableQuery = exports.TotalActiveCasesTableQuery = {
  files: TOTAL_ACTIVE_CASES_TABLE,
  sqlToRow: convertTotalActiveCasesRow,
  csvHeader: getTotalActiveCasesCsvHeader(),
  toCsvRow: toTotalActiveCasesCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"IUyy":[function(require,module,exports) {
module.exports = flatten
flatten.flatten = flatten
flatten.unflatten = unflatten

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {}

  const delimiter = opts.delimiter || '.'
  const maxDepth = opts.maxDepth
  const transformKey = opts.transformKey || keyIdentity
  const output = {}

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1
    Object.keys(object).forEach(function (key) {
      const value = object[key]
      const isarray = opts.safe && Array.isArray(value)
      const type = Object.prototype.toString.call(value)
      const isbuffer = isBuffer(value)
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key)

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}

function unflatten (target, opts) {
  opts = opts || {}

  const delimiter = opts.delimiter || '.'
  const overwrite = opts.overwrite || false
  const transformKey = opts.transformKey || keyIdentity
  const result = {}

  const isbuffer = isBuffer(target)
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key)

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    ) ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key]

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val)
    const isArray = type === '[object Array]'
    const isObject = type === '[object Object]'

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key])
    const isObject = (type === '[object Object]' || type === '[object Array]')
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key]
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {})

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey)
    let key1 = getkey(split.shift())
    let key2 = getkey(split[0])
    let recipient = result

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1])
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        )
      }

      recipient = recipient[key1]
      if (split.length > 0) {
        key1 = getkey(split.shift())
        key2 = getkey(split[0])
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts)
  })

  return result
}

},{}],"AQna":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveCasesTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTable = require("react-table");
var _jsonLoader = require("../json-loader");
var _data = require("./data");
var _vizUtil = require("../viz-util");
var _flat = require("flat");
var _vega = require("../vega");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ActiveCasesTable = () => {
  return _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.TOTAL_ACTIVE_CASES_TABLE.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TABLE_CLASS
    })
  }, values => _react.default.createElement(ActiveCasesTableWithValues, {
    values: values
  }));
};
exports.ActiveCasesTable = ActiveCasesTable;
const ActiveCasesTableWithValues = values => {
  const dataTable = constructDataTable(values);
  const rowLabels = ['Statewide Totals', '  without NYC commercial #s', 'Pre-Pandemic #', '  without NYC commercial #s', 'Pandemic #', '  without NYC commercial #s', 'NYC Totals', '  residential only #s', 'Pre-Pandemic #', '  residential only #s', 'Pandemic #', '  residential only #s', 'Outside NYC Totals', 'Pre-Pandemic #', 'Pandemic #'];
  var data = [];
  for (var i = 0; i < rowLabels.length; i++) {
    data[i] = {
      id: rowLabels[i],
      totalActiveCases: (0, _vega.numberWithCommas)(dataTable[i][0]),
      nonPayment: (0, _vega.numberWithCommas)(dataTable[i][1]),
      holdover: (0, _vega.numberWithCommas)(dataTable[i][2])
    };
  }
  const columns = [{
    Header: "",
    accessor: "id"
  }, {
    Header: "Total Active Cases",
    accessor: 'totalActiveCases'
  }, {
    Header: "Non-payment",
    accessor: "nonPayment"
  }, {
    Header: "Holdover",
    accessor: "holdover"
  }];
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0, _reactTable.useTable)({
    columns,
    data
  });
  return _react.default.createElement("table", {
    ...getTableProps()
  }, _react.default.createElement("thead", null, headerGroups.map(headerGroup => _react.default.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map(column => _react.default.createElement("th", {
    ...column.getHeaderProps()
  }, column.render("Header")))))), _react.default.createElement("tbody", {
    ...getTableBodyProps()
  }, rows.map((row, i) => {
    prepareRow(row);
    return _react.default.createElement("tr", {
      ...row.getRowProps()
    }, row.cells.map(cell => {
      return _react.default.createElement("td", {
        align: 'right',
        ...cell.getCellProps(),
        style: {
          background: [0, 6, 12].includes(cell.row.index) ? 'yellow' : 'white',
          fontWeight: [0, 2, 4, 6, 8, 10, 12].includes(cell.row.index) ? 'bold' : 'normal'
        }
      }, cell.render("Cell"));
    }));
  })));
};
function constructDataTable(values) {
  var activeCasesMap = Object.fromEntries(new Map(values.values.map(key => [key.category, key.count])));
  var activeCasesDeepObject = (0, _flat.unflatten)(activeCasesMap);
  const easyAccessMap = {
    'outside-pandemic-all': activeCasesDeepObject['Outside NYC']['Issued Pandemic']['All'],
    'outside-prepandemic-all': activeCasesDeepObject['Outside NYC']['Issued Prepandemic']['All'],
    'nyc-pandemic-residential': activeCasesDeepObject['NYC']['Issued Pandemic']['Residential'],
    'nyc-pandemic-commercial': activeCasesDeepObject['NYC']['Issued Pandemic']['Commercial'],
    'nyc-prepandemic-residential': activeCasesDeepObject['NYC']['Issued Prepandemic']['Residential'],
    'nyc-prepandemic-commercial': activeCasesDeepObject['NYC']['Issued Prepandemic']['Commercial']
  };
  var table = Array.from(Array(15), () => Array(3)); // 15 rows, 3 cols
  return fillTable(table, easyAccessMap);
}
function fillTable(table, easyAccessMap) {
  const total_col = 0; // total column index
  const np_col = 1; // nonpayment column
  const ho_col = 2; // holdover column
  const state_row = 0;
  const nyc_row = 6;
  const outside_row = 12;
  // Set most granular counts. All other cells will hold sums of these.
  table[nyc_row + 2][np_col] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment'] + easyAccessMap['nyc-prepandemic-commercial']['Non-Payment'];
  table[nyc_row + 2][ho_col] = easyAccessMap['nyc-prepandemic-residential']['Holdover'] + easyAccessMap['nyc-prepandemic-commercial']['Holdover'];
  table[nyc_row + 3][np_col] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment'];
  table[nyc_row + 3][ho_col] = easyAccessMap['nyc-prepandemic-residential']['Holdover'];
  table[nyc_row + 4][np_col] = easyAccessMap['nyc-pandemic-residential']['Non-Payment'] + easyAccessMap['nyc-pandemic-commercial']['Non-Payment'];
  table[nyc_row + 4][ho_col] = easyAccessMap['nyc-pandemic-residential']['Holdover'] + easyAccessMap['nyc-pandemic-commercial']['Holdover'];
  table[nyc_row + 5][np_col] = easyAccessMap['nyc-pandemic-residential']['Non-Payment'];
  table[nyc_row + 5][ho_col] = easyAccessMap['nyc-pandemic-residential']['Holdover'];
  table[outside_row + 1][np_col] = easyAccessMap['outside-prepandemic-all']['Non-Payment'];
  table[outside_row + 1][ho_col] = easyAccessMap['outside-prepandemic-all']['Holdover'];
  table[outside_row + 2][np_col] = easyAccessMap['outside-pandemic-all']['Non-Payment'];
  table[outside_row + 2][ho_col] = easyAccessMap['outside-pandemic-all']['Holdover'];
  for (var col = np_col; col <= ho_col; col++) {
    // Sum outside NYC vertically
    table[outside_row][col] = table[outside_row + 1][col] + table[outside_row + 2][col];
    // Sum NYC vertically
    table[nyc_row][col] = table[nyc_row + 2][col] + table[nyc_row + 4][col];
    table[nyc_row + 1][col] = table[nyc_row + 3][col] + table[nyc_row + 5][col];
    // Sum Statewide vertically
    table[state_row + 2][col] = table[nyc_row + 2][col] + table[outside_row + 1][col];
    table[state_row + 3][col] = table[nyc_row + 3][col] + table[outside_row + 1][col];
    table[state_row + 4][col] = table[nyc_row + 4][col] + table[outside_row + 2][col];
    table[state_row + 5][col] = table[nyc_row + 5][col] + table[outside_row + 2][col];
    // Top lines vertical
    table[state_row][col] = table[state_row + 2][col] + table[state_row + 4][col];
    table[state_row + 1][col] = table[state_row + 3][col] + table[state_row + 5][col];
  }
  // Sum outside NYC horizontally
  for (var i = outside_row; i < table.length; i++) {
    table[i][total_col] = table[i][np_col] + table[i][ho_col];
  }
  // Sum NYC horizontally
  for (var i = nyc_row; i < outside_row; i++) {
    table[i][total_col] = table[i][np_col] + table[i][ho_col];
  }
  // Sum Statewide horizontally
  for (var i = state_row; i < nyc_row; i++) {
    table[i][total_col] = table[i][np_col] + table[i][ho_col];
  }
  return table;
}
},{"react":"HdMw","react-table":"sVIt","../json-loader":"ZOHx","./data":"pKFb","../viz-util":"teeT","flat":"IUyy","../vega":"saqM"}],"zHMw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilingsByZipOutsideNYCQuery = exports.FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE = exports.FILINGS_BY_ZIP_OUTSIDE_NYC_EMPTY_ROW = void 0;
exports.convertFilingsByZipOutsideNYCRow = convertFilingsByZipOutsideNYCRow;
var _converters = require("../converters");
var _query = require("../query");
const FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE = exports.FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE = new _query.QueryFiles(`filings-by-zip-table-outside-nyc`);
const FILINGS_BY_ZIP_OUTSIDE_NYC_EMPTY_ROW = exports.FILINGS_BY_ZIP_OUTSIDE_NYC_EMPTY_ROW = {
  court_name: '',
  zipcode: '',
  filings: 0
};
function convertFilingsByZipOutsideNYCRow(row) {
  return {
    court_name: (0, _converters.ensureString)(row.court_name),
    zipcode: (0, _converters.ensureString)(row.zipcode),
    filings: (0, _converters.toInt)(row.filings)
  };
}
function getCsvHeader() {
  return ['court_name', 'zipcode', 'filings'];
}
function toCsvRow(row) {
  return [row.court_name, row.zipcode, row.filings.toString()];
}
const FilingsByZipOutsideNYCQuery = exports.FilingsByZipOutsideNYCQuery = {
  files: FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE,
  sqlToRow: convertFilingsByZipOutsideNYCRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"OXmi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilingsByZipOutsideNYCTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTable = require("react-table");
var _data = require("./data");
var _vizUtil = require("../viz-util");
var _jsonLoader = require("../json-loader");
var _vega = require("../vega");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FilingsByZipOutsideNYCTable = () => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, "Note: Zip codes may appear in multiple courts."), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TABLE_CLASS
    })
  }, values => _react.default.createElement(FilingsByZipOutsideNYCTableWithValues, {
    values: values
  })));
};
exports.FilingsByZipOutsideNYCTable = FilingsByZipOutsideNYCTable;
const Table = ({
  columns,
  data
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0, _reactTable.useTable)({
    columns,
    data,
    initialState: {
      groupBy: ['court']
    }
  }, _reactTable.useGroupBy, _reactTable.useExpanded);
  return _react.default.createElement("table", {
    ...getTableProps()
  }, _react.default.createElement("thead", null, headerGroups.map(headerGroup => _react.default.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map(column => _react.default.createElement("th", {
    ...column.getHeaderProps()
  }, column.id == 'court' ? _react.default.createElement("span", {
    ...column.getGroupByToggleProps()
  }, column.isGrouped ? '➡️ ' : '⬇️ ') : null, column.render("Header")))))), _react.default.createElement("tbody", {
    ...getTableBodyProps()
  }, rows.map((row, i) => {
    prepareRow(row);
    return _react.default.createElement("tr", {
      ...row.getRowProps()
    }, row.cells.map(cell => {
      return _react.default.createElement("td", {
        align: "left",
        ...cell.getCellProps()
      }, cell.isGrouped ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
        ...row.getToggleRowExpandedProps()
      }, row.isExpanded ? '⬇️' : '➡️'), ' ', cell.render('Cell'), " (", row.subRows.length, ")") : cell.isAggregated ? cell.render('Aggregated') : cell.isPlaceholder ? null : cell.render('Cell'));
    }));
  })));
};
function makeColumns() {
  const cols = _react.default.useMemo(() => [{
    Header: "Court",
    accessor: "court_name",
    id: "court"
  }, {
    Header: "Zipcode",
    accessor: "zipcode",
    aggregate: "count",
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${value} zip codes`)
  }, {
    Header: "Total cases filed since March 23, 2020",
    accessor: "filings",
    aggregate: "sum",
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}`)
  }], []);
  return cols;
}
const FilingsByZipOutsideNYCTableWithValues = values => {
  var data = values.values;
  const columns = makeColumns();
  return _react.default.createElement(Table, {
    columns: columns,
    data: data
  });
};
},{"react":"HdMw","react-table":"sVIt","./data":"zHMw","../viz-util":"teeT","../json-loader":"ZOHx","../vega":"saqM"}],"MrNH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthlyFilingsByZipTableQuery = exports.MONTHLY_FILINGS_BY_ZIP = void 0;
exports.convertMonthlyFilingsByZipRow = convertMonthlyFilingsByZipRow;
var _query = require("../query");
const MONTHLY_FILINGS_BY_ZIP = exports.MONTHLY_FILINGS_BY_ZIP = new _query.QueryFiles(`monthly-filings-table-by-zip`);
function convertMonthlyFilingsByZipRow(row) {
  return {
    zipcode: row.zipcode,
    region: row.region,
    borough: row.borough,
    two_months_ago: row.two_months_ago,
    three_months_ago: row.three_months_ago,
    num_increase: row.num_increase,
    percent_increase: row.percent_increase
  };
}
function getMonthlyFilingsByZipCsvHeader() {
  return ['zipcode', 'region', 'borough', 'two_months_ago', 'three_months_ago', 'num_increase', 'percent_increase'];
}
function toMonthlyFilingsByZipCsvRow(row) {
  return [row.zipcode, row.region, row.borough, row.two_months_ago, row.three_months_ago, row.num_increase, row.percent_increase];
}
const MonthlyFilingsByZipTableQuery = exports.MonthlyFilingsByZipTableQuery = {
  files: MONTHLY_FILINGS_BY_ZIP,
  sqlToRow: convertMonthlyFilingsByZipRow,
  csvHeader: getMonthlyFilingsByZipCsvHeader(),
  toCsvRow: toMonthlyFilingsByZipCsvRow
};
},{"../query":"Yro0"}],"cx5E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthlyFilingsTableByZip = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTable = require("react-table");
var _data = require("./data");
var _vizUtil = require("../viz-util");
var _jsonLoader = require("../json-loader");
var _vega = require("../vega");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MonthlyFilingsTableByZip = () => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, "Note: Filings from past 5-6 weeks may be artificially low due to reporting lags."), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.MONTHLY_FILINGS_BY_ZIP.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TABLE_CLASS
    })
  }, values => _react.default.createElement(MonthlyFilingsByZipWithValues, {
    values: values
  })));
};
exports.MonthlyFilingsTableByZip = MonthlyFilingsTableByZip;
const Table = ({
  columns,
  data
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0, _reactTable.useTable)({
    columns,
    data
  });
  return _react.default.createElement("table", {
    ...getTableProps()
  }, _react.default.createElement("thead", null, headerGroups.map(headerGroup => _react.default.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map(column => _react.default.createElement("th", {
    ...column.getHeaderProps()
  }, column.render("Header")))))), _react.default.createElement("tbody", {
    ...getTableBodyProps()
  }, rows.map((row, i) => {
    prepareRow(row);
    return _react.default.createElement("tr", {
      ...row.getRowProps()
    }, row.cells.map(cell => {
      return _react.default.createElement("td", {
        align: "left",
        ...cell.getCellProps()
      }, cell.isPlaceholder ? null : cell.render('Cell'));
    }));
  })));
};
function makeColumns() {
  const cols = _react.default.useMemo(() => [{
    Header: "Zipcode",
    accessor: "zipcode"
  }, {
    Header: "Borough",
    accessor: "borough"
  }, {
    Header: "3 months ago",
    accessor: "three_months_ago"
  }, {
    Header: "2 months ago",
    accessor: "two_months_ago"
  }, {
    Header: "# Increase",
    accessor: "num_increase"
  }, {
    Header: "% Increase",
    accessor: "percent_increase",
    Cell: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}%`)
  }], []);
  return cols;
}
const MonthlyFilingsByZipWithValues = values => {
  var data = values.values;
  const columns = makeColumns();
  return _react.default.createElement(Table, {
    columns: columns,
    data: data
  });
};
},{"react":"HdMw","react-table":"sVIt","./data":"MrNH","../viz-util":"teeT","../json-loader":"ZOHx","../vega":"saqM"}],"oFM7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthlyFilingsCitywideTableQuery = exports.MONTHLY_FILINGS_CITYWIDE = void 0;
exports.convertMonthlyFilingsCitywideRow = convertMonthlyFilingsCitywideRow;
var _query = require("../query");
const MONTHLY_FILINGS_CITYWIDE = exports.MONTHLY_FILINGS_CITYWIDE = new _query.QueryFiles(`monthly-filings-table-citywide`);
function convertMonthlyFilingsCitywideRow(row) {
  return {
    borough: row.borough,
    region: row.region,
    two_months_ago: row.two_months_ago,
    three_months_ago: row.three_months_ago,
    num_increase: row.num_increase,
    percent_increase: row.percent_increase
  };
}
function getMonthlyFilingsCitywideCsvHeader() {
  return ['borough', 'region', 'two_months_ago', 'three_months_ago', 'num_increase', 'percent_increase'];
}
function toMonthlyFilingsCitywideCsvRow(row) {
  return [row.borough, row.region, row.two_months_ago, row.three_months_ago, row.num_increase, row.percent_increase];
}
const MonthlyFilingsCitywideTableQuery = exports.MonthlyFilingsCitywideTableQuery = {
  files: MONTHLY_FILINGS_CITYWIDE,
  sqlToRow: convertMonthlyFilingsCitywideRow,
  csvHeader: getMonthlyFilingsCitywideCsvHeader(),
  toCsvRow: toMonthlyFilingsCitywideCsvRow
};
},{"../query":"Yro0"}],"t3fb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthlyFilingsTableCitywide = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTable = require("react-table");
var _data = require("./data");
var _vizUtil = require("../viz-util");
var _jsonLoader = require("../json-loader");
var _vega = require("../vega");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MonthlyFilingsTableCitywide = () => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", null, "Note: Filings from past 5-6 weeks may be artificially low due to reporting lags."), _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.MONTHLY_FILINGS_CITYWIDE.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TABLE_CLASS
    })
  }, values => _react.default.createElement(MonthlyFilingsCitywideWithValues, {
    values: values
  })));
};
exports.MonthlyFilingsTableCitywide = MonthlyFilingsTableCitywide;
const Table = ({
  columns,
  data
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0, _reactTable.useTable)({
    columns,
    data,
    initialState: {
      groupBy: ['region']
    }
  }, _reactTable.useGroupBy, _reactTable.useExpanded);
  return _react.default.createElement("table", {
    ...getTableProps()
  }, _react.default.createElement("thead", null, headerGroups.map(headerGroup => _react.default.createElement("tr", {
    ...headerGroup.getHeaderGroupProps()
  }, headerGroup.headers.map(column => _react.default.createElement("th", {
    ...column.getHeaderProps()
  }, column.id == 'court' ? _react.default.createElement("span", {
    ...column.getGroupByToggleProps()
  }, column.isGrouped ? '➡️ ' : '⬇️ ') : null, column.render("Header")))))), _react.default.createElement("tbody", {
    ...getTableBodyProps()
  }, rows.map((row, i) => {
    prepareRow(row);
    return _react.default.createElement("tr", {
      ...row.getRowProps()
    }, row.cells.map(cell => {
      return _react.default.createElement("td", {
        align: "left",
        ...cell.getCellProps()
      }, cell.isGrouped ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
        ...row.getToggleRowExpandedProps()
      }, row.isExpanded ? '⬇️' : '➡️'), ' ', cell.render('Cell'), " (", row.subRows.length, ")") : cell.isAggregated ? cell.render('Aggregated') : cell.isPlaceholder ? null : cell.render('Cell'));
    }));
  })));
};
function makeColumns() {
  const cols = _react.default.useMemo(() => [{
    Header: "Region",
    accessor: "region",
    id: "region"
  }, {
    Header: "Borough",
    accessor: "borough",
    aggregate: "count",
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${value} boroughs`)
  }, {
    Header: "3 months ago",
    accessor: "three_months_ago",
    // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
    aggregate: leafValues => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}`),
    Cell: ({
      value
    }) => value
  }, {
    Header: "2 months ago",
    accessor: "two_months_ago",
    // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
    aggregate: leafValues => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}`),
    Cell: ({
      value
    }) => value
  }, {
    Header: "# Increase",
    accessor: "num_increase",
    // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
    aggregate: leafValues => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}`),
    Cell: ({
      value
    }) => value
  }, {
    Header: "% Increase",
    accessor: "percent_increase",
    aggregate: leafValues => calculate_percentage_increase(leafValues),
    aggregateValue: (_value, {
      original
    }) => _react.default.createElement(_react.default.Fragment, null, `${original.two_months_ago}-${original.three_months_ago}`),
    Aggregated: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${value}%`),
    Cell: ({
      value
    }) => _react.default.createElement(_react.default.Fragment, null, `${(0, _vega.numberWithCommas)(value)}%`)
  }], []);
  return cols;
}
/**
 *  leafValues looks like:
 *  ['123-455', '467-234']
*/
function calculate_percentage_increase(leafValues) {
  var two_months_ago_sum = 0;
  var three_months_ago_sum = 0;
  for (let idx in leafValues) {
    let spl = leafValues[idx].split('-');
    two_months_ago_sum += parseInt(spl[0]);
    three_months_ago_sum += parseInt(spl[1]);
  }
  return Math.round((two_months_ago_sum - three_months_ago_sum) / three_months_ago_sum * 100);
}
const MonthlyFilingsCitywideWithValues = values => {
  var data = values.values;
  const columns = makeColumns();
  return _react.default.createElement(Table, {
    columns: columns,
    data: data
  });
};
},{"react":"HdMw","react-table":"sVIt","./data":"oFM7","../viz-util":"teeT","../json-loader":"ZOHx","../vega":"saqM"}],"h54e":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactMinimalPieChart = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  function valueBetween(value, min, max) {
    if (value > max) return max;
    if (value < min) return min;
    return value;
  }
  function extractPercentage(value, percentage) {
    return percentage / 100 * value;
  }
  function bisectorAngle(startAngle, lengthAngle) {
    return startAngle + lengthAngle / 2;
  }
  function shiftVectorAlongAngle(angle, distance) {
    var angleRadians = degreesToRadians(angle);
    return {
      dx: distance * Math.cos(angleRadians),
      dy: distance * Math.sin(angleRadians)
    };
  }
  function isNumber(value) {
    return typeof value === 'number';
  }
  function functionProp(prop, payload) {
    return typeof prop === 'function' ? prop(payload) : prop;
  }
  function makePropsWithDefaults(props, defaultProps) {
    var result = Object.assign({}, defaultProps, props);

    // @NOTE Object.assign doesn't default properties with undefined value (like React defaultProps does)
    for (var key in defaultProps) {
      if (props[key] === undefined) {
        result[key] = defaultProps[key];
      }
    }
    return result;
  }

  function sumValues(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].value;
    }
    return sum;
  }

  // Append "percentage", "degrees" and "startAngle" to each data entry
  function extendData(_ref) {
    var data = _ref.data,
      totalAngle = _ref.lengthAngle,
      totalValue = _ref.totalValue,
      paddingAngle = _ref.paddingAngle,
      chartStartAngle = _ref.startAngle;
    var total = totalValue || sumValues(data);
    var normalizedTotalAngle = valueBetween(totalAngle, -360, 360);
    var numberOfPaddings = Math.abs(normalizedTotalAngle) === 360 ? data.length : data.length - 1;
    var singlePaddingDegrees = Math.abs(paddingAngle) * Math.sign(totalAngle);
    var degreesTakenByPadding = singlePaddingDegrees * numberOfPaddings;
    var degreesTakenByPaths = normalizedTotalAngle - degreesTakenByPadding;
    var lastSegmentEnd = 0;
    var extendedData = [];

    // @NOTE: Shall we evaluate percentage accordingly to dataEntry.value's sign?
    for (var i = 0; i < data.length; i++) {
      var dataEntry = data[i];
      var valueInPercentage = total === 0 ? 0 : dataEntry.value / total * 100;
      var degrees = extractPercentage(degreesTakenByPaths, valueInPercentage);
      var startAngle = lastSegmentEnd + chartStartAngle;
      lastSegmentEnd = lastSegmentEnd + degrees + singlePaddingDegrees;
      extendedData.push(Object.assign({
        percentage: valueInPercentage,
        startAngle: startAngle,
        degrees: degrees
      }, dataEntry));
    }
    return extendedData;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function ReactMinimalPieChartLabel(_ref) {
    var renderLabel = _ref.renderLabel,
      labelProps = _ref.labelProps;
    var label = renderLabel(labelProps);

    // Default label
    if (typeof label === 'string' || typeof label === 'number') {
      labelProps.dataEntry;
        labelProps.dataIndex;
        var props = _objectWithoutPropertiesLoose(labelProps, ["dataEntry", "dataIndex"]);
      return /*#__PURE__*/React.createElement("text", Object.assign({
        dominantBaseline: "central"
      }, props), label);
    }
    if (React.isValidElement(label)) {
      return label;
    }
    return null;
  }

  function round(number) {
    var divisor = 1e14; // 14 decimals
    return Math.round((number + Number.EPSILON) * divisor) / divisor;
  }
  function evaluateTextAnchorPosition(_ref) {
    var labelPosition = _ref.labelPosition,
      lineWidth = _ref.lineWidth,
      labelHorizontalShift = _ref.labelHorizontalShift;
    var dx = round(labelHorizontalShift);
    // Label in the vertical center
    if (dx === 0) {
      return 'middle';
    }
    // Outward label
    if (labelPosition > 100) {
      return dx > 0 ? 'start' : 'end';
    }
    // Inward label
    var innerRadius = 100 - lineWidth;
    if (labelPosition < innerRadius) {
      return dx > 0 ? 'end' : 'start';
    }
    // Overlying label
    return 'middle';
  }
  function makeLabelRenderProps(data, props) {
    return data.map(function (dataEntry, index) {
      var _functionProp;
      var segmentsShift = (_functionProp = functionProp(props.segmentsShift, index)) != null ? _functionProp : 0;
      var distanceFromCenter = extractPercentage(props.radius, props.labelPosition) + segmentsShift;
      var _shiftVectorAlongAngl = shiftVectorAlongAngle(bisectorAngle(dataEntry.startAngle, dataEntry.degrees), distanceFromCenter),
        dx = _shiftVectorAlongAngl.dx,
        dy = _shiftVectorAlongAngl.dy; // This object is passed as argument to the "label" function prop
      var labelRenderProps = {
        x: props.center[0],
        y: props.center[1],
        dx: dx,
        dy: dy,
        textAnchor: evaluateTextAnchorPosition({
          labelPosition: props.labelPosition,
          lineWidth: props.lineWidth,
          labelHorizontalShift: dx
        }),
        dataEntry: dataEntry,
        dataIndex: index,
        style: functionProp(props.labelStyle, index)
      };
      return labelRenderProps;
    });
  }
  function renderLabels(data, props) {
    var label = props.label;
    if (label) {
      return makeLabelRenderProps(data, props).map(function (labelRenderProps, index) {
        return /*#__PURE__*/React.createElement(ReactMinimalPieChartLabel, {
          key: "label-" + (labelRenderProps.dataEntry.key || index),
          renderLabel: label,
          labelProps: labelRenderProps
        });
      });
    }
  }

  // from http://stackoverflow.com/a/18473154
  var partialCircle = function partialCircle(cx, cy, r, start, end) {
    var length = end - start;
    if (length === 0) return [];
    var fromX = r * Math.cos(start) + cx;
    var fromY = r * Math.sin(start) + cy;
    var toX = r * Math.cos(end) + cx;
    var toY = r * Math.sin(end) + cy;
    var large = Math.abs(length) <= Math.PI ? '0' : '1';
    var sweep = length < 0 ? '0' : '1';
    return [['M', fromX, fromY], ['A', r, r, 0, large, sweep, toX, toY]];
  };
  var svgPartialCircle = partialCircle;

  var partialCircle$1 = svgPartialCircle;

  function makePathCommands(cx, cy, startAngle, lengthAngle, radius) {
    var patchedLengthAngle = valueBetween(lengthAngle, -359.999, 359.999);
    return partialCircle$1(cx, cy,
    // center X and Y
    radius, degreesToRadians(startAngle), degreesToRadians(startAngle + patchedLengthAngle)).map(function (command) {
      return command.join(' ');
    }).join(' ');
  }
  function ReactMinimalPieChartPath(_ref) {
    var cx = _ref.cx,
      cy = _ref.cy,
      lengthAngle = _ref.lengthAngle,
      lineWidth = _ref.lineWidth,
      radius = _ref.radius,
      _ref$shift = _ref.shift,
      shift = _ref$shift === void 0 ? 0 : _ref$shift,
      reveal = _ref.reveal,
      rounded = _ref.rounded,
      startAngle = _ref.startAngle,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["cx", "cy", "lengthAngle", "lineWidth", "radius", "shift", "reveal", "rounded", "startAngle", "title"]);
    var pathRadius = radius - lineWidth / 2;
    //@NOTE This shift might be rendered as a translation in future
    var _shiftVectorAlongAngl = shiftVectorAlongAngle(bisectorAngle(startAngle, lengthAngle), shift),
      dx = _shiftVectorAlongAngl.dx,
      dy = _shiftVectorAlongAngl.dy;
    var pathCommands = makePathCommands(cx + dx, cy + dy, startAngle, lengthAngle, pathRadius);
    var strokeDasharray;
    var strokeDashoffset;

    // Animate/hide paths with "stroke-dasharray" + "stroke-dashoffset"
    // https://css-tricks.com/svg-line-animation-works/
    if (isNumber(reveal)) {
      var pathLength = degreesToRadians(pathRadius) * lengthAngle;
      strokeDasharray = Math.abs(pathLength);
      strokeDashoffset = strokeDasharray - extractPercentage(strokeDasharray, reveal);
    }
    return /*#__PURE__*/React.createElement("path", Object.assign({
      d: pathCommands,
      fill: "none",
      strokeWidth: lineWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      strokeLinecap: rounded ? 'round' : undefined
    }, props), title && /*#__PURE__*/React.createElement("title", null, title));
  }

  function combineSegmentTransitionsStyle(duration, easing, customStyle) {
    // Merge chart's animation CSS transition with "transition" found to customStyle
    var transition = "stroke-dashoffset " + duration + "ms " + easing;
    if (customStyle && customStyle.transition) {
      transition = transition + "," + customStyle.transition;
    }
    return {
      transition: transition
    };
  }
  function getRevealValue(props) {
    //@NOTE When animation is on, chart has to be fully revealed when reveal is not set
    if (props.animate && !isNumber(props.reveal)) {
      return 100;
    }
    return props.reveal;
  }
  function makeEventHandler(eventHandler, payload) {
    return eventHandler && function (e) {
      eventHandler(e, payload);
    };
  }
  function renderSegments(data, props, revealOverride) {
    // @NOTE this should go in Path component. Here for performance reasons
    var reveal = revealOverride != null ? revealOverride : getRevealValue(props);
    var radius = props.radius,
      _props$center = props.center,
      cx = _props$center[0],
      cy = _props$center[1];
    var lineWidth = extractPercentage(radius, props.lineWidth);
    var paths = data.map(function (dataEntry, index) {
      var segmentsStyle = functionProp(props.segmentsStyle, index);
      return /*#__PURE__*/React.createElement(ReactMinimalPieChartPath, {
        cx: cx,
        cy: cy,
        key: dataEntry.key || index,
        lengthAngle: dataEntry.degrees,
        lineWidth: lineWidth,
        radius: radius,
        rounded: props.rounded,
        reveal: reveal,
        shift: functionProp(props.segmentsShift, index),
        startAngle: dataEntry.startAngle,
        title: dataEntry.title,
        style: Object.assign({}, segmentsStyle, props.animate && combineSegmentTransitionsStyle(props.animationDuration, props.animationEasing, segmentsStyle)),
        stroke: dataEntry.color,
        tabIndex: props.segmentsTabIndex,
        onBlur: makeEventHandler(props.onBlur, index),
        onClick: makeEventHandler(props.onClick, index),
        onFocus: makeEventHandler(props.onFocus, index),
        onKeyDown: makeEventHandler(props.onKeyDown, index),
        onMouseOver: makeEventHandler(props.onMouseOver, index),
        onMouseOut: makeEventHandler(props.onMouseOut, index)
      });
    });
    if (props.background) {
      paths.unshift( /*#__PURE__*/React.createElement(ReactMinimalPieChartPath, {
        cx: cx,
        cy: cy,
        key: "bg",
        lengthAngle: props.lengthAngle,
        lineWidth: lineWidth,
        radius: radius,
        rounded: props.rounded,
        startAngle: props.startAngle,
        stroke: props.background
      }));
    }
    return paths;
  }

  var defaultProps = {
    animationDuration: 500,
    animationEasing: 'ease-out',
    center: [50, 50],
    data: [],
    labelPosition: 50,
    lengthAngle: 360,
    lineWidth: 100,
    paddingAngle: 0,
    radius: 50,
    startAngle: 0,
    viewBoxSize: [100, 100]
  };
  function ReactMinimalPieChart(originalProps) {
    var props = makePropsWithDefaults(originalProps,
    // @ts-expect-error: defaultProps.data is typed as BaseDataEntry
    defaultProps);
    var _useState = React.useState(props.animate ? 0 : null),
      revealOverride = _useState[0],
      setRevealOverride = _useState[1];
    React.useEffect(function () {
      if (props.animate) {
        // Trigger initial animation
        setRevealOverride(null);
      }
    }, []);
    var extendedData = extendData(props);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + props.viewBoxSize[0] + " " + props.viewBoxSize[1],
      width: "100%",
      height: "100%",
      className: props.className,
      style: props.style
    }, renderSegments(extendedData, props, revealOverride), renderLabels(extendedData, props), props.children);
  }

  exports.PieChart = ReactMinimalPieChart;
  exports.pieChartDefaultProps = defaultProps;

}));
//# sourceMappingURL=index.js.map

},{"react":"HdMw"}],"cyyh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoroughPieChartActiveCasesQuery = exports.BOROUGH_PIE_CHART_ACTIVE_CASES = void 0;
exports.convertBoroughPieChartActiveCasesRow = convertBoroughPieChartActiveCasesRow;
var _converters = require("../converters");
var _query = require("../query");
const BOROUGH_PIE_CHART_ACTIVE_CASES = exports.BOROUGH_PIE_CHART_ACTIVE_CASES = new _query.QueryFiles(`borough-pie-chart-active-cases`);
function convertBoroughPieChartActiveCasesRow(row) {
  return {
    count: (0, _converters.toInt)(row.count),
    borough: row.borough,
    timeBucket: row.timebucket
  };
}
function getBoroughPieChartActiveCasesCsvHeader() {
  return ['count', 'borough', 'timeBucket'];
}
function toBoroughPieChartActiveCasesCsvRow(row) {
  return [row.count, row.borough, row.timeBucket];
}
const BoroughPieChartActiveCasesQuery = exports.BoroughPieChartActiveCasesQuery = {
  files: BOROUGH_PIE_CHART_ACTIVE_CASES,
  sqlToRow: convertBoroughPieChartActiveCasesRow,
  csvHeader: getBoroughPieChartActiveCasesCsvHeader(),
  toCsvRow: toBoroughPieChartActiveCasesCsvRow
};
},{"../converters":"vbQr","../query":"Yro0"}],"gbT6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoroughPieChartsActiveCases = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactMinimalPieChart = require("react-minimal-pie-chart");
var _data = require("./data");
var _jsonLoader = require("../json-loader");
var _vizUtil = require("../viz-util");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BoroughPieChartsActiveCases = () => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_jsonLoader.JsonLoader, {
    url: _data.BOROUGH_PIE_CHART_ACTIVE_CASES.json,
    fallback: _react.default.createElement(_vizUtil.VizFallback, {
      className: _vizUtil.VIZ_TABLE_CLASS
    })
  }, values => _react.default.createElement(BoroughPieChartsActiveCasesWithValues, {
    values: values
  })));
};
exports.BoroughPieChartsActiveCases = BoroughPieChartsActiveCases;
const BoroughPieChartsActiveCasesWithValues = values => {
  const data = formatData(values.values);
  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif'
  };
  const [hovered, setHovered] = (0, _react.useState)(undefined);
  function addHover(dataPoint, i) {
    if (hovered === i) {
      return {
        ...dataPoint,
        title: `${dataPoint.value} filings`
      };
    }
    return dataPoint;
  }
  return _react.default.createElement("div", {
    className: "pie-chart-section"
  }, _react.default.createElement("section", {
    className: "pie-chart"
  }, _react.default.createElement("h4", null, "Pre-pandemic Active Cases (NYC)"), _react.default.createElement(_reactMinimalPieChart.PieChart, {
    data: data.prePandemicData.map(addHover),
    label: ({
      dataEntry
    }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`,
    labelStyle: {
      ...defaultLabelStyle
    },
    style: {
      height: '250px'
    },
    onMouseOver: (_, index) => {
      setHovered(index);
    },
    onMouseOut: () => {
      setHovered(undefined);
    }
  })), _react.default.createElement("section", {
    className: "pie-chart"
  }, _react.default.createElement("h4", null, "Pandemic Active Cases (NYC)"), _react.default.createElement(_reactMinimalPieChart.PieChart, {
    data: data.pandemicData.map(addHover),
    label: ({
      dataEntry
    }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`,
    labelStyle: {
      ...defaultLabelStyle
    },
    style: {
      height: '250px'
    },
    onMouseOver: (_, index) => {
      setHovered(index);
    },
    onMouseOut: () => {
      setHovered(undefined);
    }
  })));
};
function formatData(data) {
  const colors = {
    'Bronx': '#B3EFFF',
    'Brooklyn': '#00CFFF',
    'Manhattan': '#046B99',
    'Queens': '#4373B1',
    'Staten Island': '#606060'
  };
  function compareTitles(a, b) {
    return a.title < b.title ? -1 : 0;
  }
  let rowToSection = item => ({
    'title': item.borough,
    'value': item.count,
    'color': colors[item.borough]
  });
  return {
    prePandemicData: data.filter(item => item.timeBucket == 'Issued Prepandemic').map(rowToSection).sort(compareTitles),
    pandemicData: data.filter(item => item.timeBucket == 'Issued Pandemic').map(rowToSection).sort(compareTitles)
  };
}
},{"react":"HdMw","react-minimal-pie-chart":"h54e","./data":"cyyh","../json-loader":"ZOHx","../viz-util":"teeT"}],"mj8g":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaintenanceChecklist = void 0;
var _react = _interopRequireWildcard(require("react"));
var _query = require("./query");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const HDC_GITHUB = "https://github.com/housing-data-coalition";
const to_formatted_date = x => {
  return new Date(x).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  });
};
const getLatestFilingDate = () => {
  const [latestFilingDate, setLatestFilingDate] = (0, _react.useState)(null);
  const latest_filing_date_url = new _query.QueryFiles(`latest-filing-date`);
  (0, _react.useEffect)(() => {
    fetch(latest_filing_date_url.json).then(res => res.json()).then(data => {
      const date = to_formatted_date(data[0].latest_date);
      setLatestFilingDate(date);
    });
  }, [latest_filing_date_url.json]);
  if (latestFilingDate === null) return _react.default.createElement(_react.default.Fragment, null);
  return _react.default.createElement("li", null, "NYCDB is automatically updated with the latest OCA files overnight each Sunday. If successfully updated, the latest filing date in the data should be the latest Friday. The latest filing date in NYCDB is", " ", _react.default.createElement("b", null, latestFilingDate), ".");
};
const getOcaUpdateDate = () => {
  const [ocaUpdateDate, setOcaUpdateDate] = (0, _react.useState)(null);
  const oca_url = "https://oca-2-dev.s3.amazonaws.com/public/last-updated-date.txt";
  (0, _react.useEffect)(() => {
    fetch(oca_url).then(res => res.text()).then(data => {
      const date = to_formatted_date(data);
      setOcaUpdateDate(date);
    });
  }, [oca_url]);
  if (ocaUpdateDate === null) return _react.default.createElement(_react.default.Fragment, null);
  return _react.default.createElement("li", null, _react.default.createElement("a", {
    href: `${HDC_GITHUB}/oca#csv-files`,
    target: "_blank"
  }, "Raw data files from Office of Court Administration"), " ", "should be updated every Tuesday. These files were last updated on", " ", _react.default.createElement("b", null, `${ocaUpdateDate}`), ".");
};
const MaintenanceChecklist = () => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, "Maintenance Checklist:"), _react.default.createElement("ul", null, getOcaUpdateDate(), getLatestFilingDate(), _react.default.createElement("li", null, "Check the tracker\u2019s", " ", _react.default.createElement("a", {
    href: `${HDC_GITHUB}/rtc-eviction-viz/actions/workflows/deploy.yml`,
    target: "_blank"
  }, "build/deploy history"), " ", "to confirm latest build/deploy date is today and there are no recent unsuccessful builds.")));
};
exports.MaintenanceChecklist = MaintenanceChecklist;
},{"react":"HdMw","./query":"Yro0"}],"eKDL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEW_WIDGET = exports.VIEW_CONFIGURE_WIDGET = exports.REACT_APP_PASSWORD = exports.QS_VIEW = exports.QS_HEIGHT = exports.QS_FIELD_NAME = exports.JUDGMENTS_VIZ_DEFAULT_HEIGHT = exports.EVICTION_VIZ_DEFAULT_HEIGHT = exports.ACTIVE_CASES_VIZ_DEFAULT_HEIGHT = void 0;
const VIEW_WIDGET = exports.VIEW_WIDGET = "widget";
const VIEW_CONFIGURE_WIDGET = exports.VIEW_CONFIGURE_WIDGET = "config";
const QS_VIEW = exports.QS_VIEW = "view";
const QS_FIELD_NAME = exports.QS_FIELD_NAME = "fieldName";
const QS_HEIGHT = exports.QS_HEIGHT = "height";
const EVICTION_VIZ_DEFAULT_HEIGHT = exports.EVICTION_VIZ_DEFAULT_HEIGHT = 150;
const ACTIVE_CASES_VIZ_DEFAULT_HEIGHT = exports.ACTIVE_CASES_VIZ_DEFAULT_HEIGHT = 500;
const JUDGMENTS_VIZ_DEFAULT_HEIGHT = exports.JUDGMENTS_VIZ_DEFAULT_HEIGHT = 500;
const REACT_APP_PASSWORD = exports.REACT_APP_PASSWORD = "housing" || "";
},{}],"v7iN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = exports.FullDocument = exports.ConfigureWidget = void 0;
exports.validateFieldName = validateFieldName;
exports.validatePositiveInt = validatePositiveInt;
var _react = _interopRequireWildcard(require("react"));
var _data = require("./lib/eviction-time-series/data");
var _data2 = require("./lib/filings-by-zip/data");
var _viz = require("./lib/eviction-time-series/viz");
var _viz2 = require("./lib/total-active-cases/viz");
var _viz3 = require("./lib/marshal-evictions-by-week/viz");
var _viz4 = require("./lib/share-represented/viz");
var _viz5 = require("./lib/total-judgments-statewide/viz");
var _viz6 = require("./lib/total-judgments-citywide/viz");
var _viz7 = require("./lib/total-active-cases-table/viz");
var _vizUtil = require("./lib/viz-util");
var _viz8 = require("./lib/filings-by-zip-table-outside-nyc/viz");
var _viz9 = require("./lib/monthly-filings-table-by-zip/viz");
var _viz10 = require("./lib/monthly-filings-table-citywide/viz");
var _viz11 = require("./lib/borough-pie-chart-active-cases/viz");
var _checklist = require("./lib/checklist");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ZipCodeViz = _react.default.lazy(() => require("_bundle_loader")(require.resolve("./lib/filings-by-zip/viz")));
const OTHER_VISUALIZATIONS = new Map([["filings_by_zip", "Filings By Zip Code"], ["total_active_cases", "Total Active Cases"], ["total_judgments", "Total Eviction Judgments"], ["marshal_evictions", "Total Marshal Evictions"], ["pct_repped", "Share of Represented Tenants"]]);
const DatasetDownloads = ({
  files,
  title
}) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, _react.default.createElement("a", {
  href: files.csv
}, "Download ", title, " CSV")), _react.default.createElement("p", null, _react.default.createElement("a", {
  href: files.json
}, "Download ", title, " JSON")));
const LazyZipCodeViz = ({
  height
}) => _react.default.createElement(_react.Suspense, {
  fallback: _react.default.createElement(_vizUtil.VizFallback, {
    className: _vizUtil.VIZ_GEO_CLASS
  })
}, _react.default.createElement(ZipCodeViz, {
  height: height
}));
const FullDocument = () => _react.default.createElement("div", {
  className: "container"
}, _react.default.createElement("h1", null, "New York Eviction Filings Tracker"), _react.default.createElement("p", null, "Managed by RTC Coalition's ", _react.default.createElement("a", {
  href: "https://www.righttocounselnyc.org/hcmc",
  target: "_blank"
}, "Housing Courts Must Change! Campaign"), _react.default.createElement("br", null), _react.default.createElement("em", null, "Powered by the ", _react.default.createElement("a", {
  href: "https://www.housingdatanyc.org/",
  target: "_blank"
}, "Housing Data Coalition"), ", ", _react.default.createElement("a", {
  href: "https://www.justfix.nyc/",
  target: "_blank"
}, "JustFix.nyc"), ", and ", _react.default.createElement("a", {
  href: "https://anhd.org/",
  target: "_blank"
}, "ANHD"))), _react.default.createElement("p", null, "This website is for internal use by the Right to Counsel Coalition. Accuracy is not guaranteed and it should not be referenced publicly. If you would like to use or reference this data, please contact ", _react.default.createElement("a", {
  href: "mailto:malika@righttocounselnyc.org",
  target: "_blank"
}, "malika@righttocounselnyc.org"), "."), _react.default.createElement("h2", null, "Total Active Cases"), _react.default.createElement(_viz7.ActiveCasesTable, null), _react.default.createElement("br", null), _react.default.createElement(_viz11.BoroughPieChartsActiveCases, null), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Active Cases since 2020"), _react.default.createElement(_viz2.ActiveCasesVisualizations, {
  height: _constants.ACTIVE_CASES_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Marshal Evictions since Jan 15 2022"), _react.default.createElement(_viz3.MarshalEvicsVisualizations, {
  height: _constants.JUDGMENTS_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Share of Represented Tenants"), _react.default.createElement(_viz4.PctReppedVisualizations, {
  height: _constants.JUDGMENTS_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Eviction Judgments since 3/23/2020"), _react.default.createElement(_viz5.JudgmentsStatewideVisualizations, {
  height: _constants.JUDGMENTS_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement(_viz6.JudgmentsCitywideVisualizations, {
  height: _constants.JUDGMENTS_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Filings by zip code (NYC)"), _react.default.createElement(LazyZipCodeViz, {
  height: 600
}), _react.default.createElement("small", null, _react.default.createElement("strong", null, "Data sources:"), " New York State Office of Court Administration eviction filings and PLUTO19v2 via ", _react.default.createElement("a", {
  href: "https://github.com/nycdb/nycdb",
  target: "_blank"
}, "NYCDB"), ". By the ", _react.default.createElement("a", {
  href: "https://housingdatanyc.org",
  target: "_blank"
}, "Housing Data Coalition"), ", ", _react.default.createElement("a", {
  href: "https://justfix.nyc",
  target: "_blank"
}, "JustFix.nyc"), ", and ", _react.default.createElement("a", {
  href: "https://anhd.org",
  target: "_blank"
}, "ANHD"), ". *Numbers of total units per zip code exclude single-unit properties to approximate the number of rental units."), _react.default.createElement(DatasetDownloads, {
  files: _data2.FILINGS_BY_ZIP,
  title: "filings by zip code (NYC)"
}), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Filings by zip code (Outside NYC)"), _react.default.createElement(_viz8.FilingsByZipOutsideNYCTable, null), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Monthly filings"), _react.default.createElement("h3", null, "By zip code"), _react.default.createElement(_viz9.MonthlyFilingsTableByZip, null), _react.default.createElement("h3", null, "Statewide"), _react.default.createElement(_viz10.MonthlyFilingsTableCitywide, null), _react.default.createElement("br", null), _react.default.createElement("h2", null, "Filings over time"), _react.default.createElement(_viz.EvictionVisualizations, {
  height: _constants.EVICTION_VIZ_DEFAULT_HEIGHT
}), _react.default.createElement(DatasetDownloads, {
  files: _data.EVICTION_TIME_SERIES,
  title: "filings over time"
}), _react.default.createElement("p", null, _react.default.createElement("a", {
  href: `?${_constants.QS_VIEW}=${_constants.VIEW_CONFIGURE_WIDGET}`
}, "Configure this page as a widget")), _react.default.createElement("p", null, _react.default.createElement("a", {
  href: "https://github.com/housing-data-coalition/rtc-eviction-viz"
}, "Learn more on GitHub")), _react.default.createElement("p", null, _react.default.createElement("a", {
  href: "https://github.com/housing-data-coalition/rtc-eviction-viz/actions/workflows/deploy.yml"
}, "See when this site was last deployed")), _react.default.createElement(_checklist.MaintenanceChecklist, null));
exports.FullDocument = FullDocument;
const Widget = ({
  fieldName,
  height
}) => {
  if (fieldName === "filings_by_zip") return _react.default.createElement(LazyZipCodeViz, {
    height: height
  });
  if (fieldName === "total_active_cases") return _react.default.createElement(_viz2.ActiveCasesVisualizations, {
    height: height
  });
  if (fieldName === "total_judgments") return _react.default.createElement(_viz5.JudgmentsStatewideVisualizations, {
    height: height
  });
  if (fieldName === "marshal_evictions") return _react.default.createElement(_viz3.MarshalEvicsVisualizations, {
    height: height
  });
  if (fieldName === "pct_repped") return _react.default.createElement(_viz4.PctReppedVisualizations, {
    height: height
  });
  return _react.default.createElement(_viz.EvictionVisualizations, {
    height: height,
    fieldNames: [fieldName]
  });
};
exports.Widget = Widget;
const ConfigureWidget = () => {
  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("h1", null, "New York Evictions Widget Configurator"), _react.default.createElement("p", null, "Use the following form to generate a widget. Once you submit it, grab the URL from the address bar and put it in an ", _react.default.createElement("code", null, "<iframe>"), ". The widget will horizontally expand to fill all available space, so make sure you style your container as needed."), _react.default.createElement("form", null, _react.default.createElement("input", {
    type: "hidden",
    name: _constants.QS_VIEW,
    value: _constants.VIEW_WIDGET
  }), _react.default.createElement("p", null, "Time series visualization:"), Array.from(_viz.EVICTION_VISUALIZATIONS.entries()).map(([fieldName, title]) => _react.default.createElement("div", {
    key: fieldName
  }, _react.default.createElement("label", null, _react.default.createElement("input", {
    type: "radio",
    name: _constants.QS_FIELD_NAME,
    value: fieldName
  }), title))), _react.default.createElement("p", null, "Other visualization:"), Array.from(OTHER_VISUALIZATIONS.entries()).map(([fieldName, title]) => _react.default.createElement("div", {
    key: fieldName
  }, _react.default.createElement("label", null, _react.default.createElement("input", {
    type: "radio",
    name: _constants.QS_FIELD_NAME,
    value: fieldName
  }), title))), _react.default.createElement("p", null, _react.default.createElement("label", {
    htmlFor: "height"
  }, "Height of graph: "), _react.default.createElement("input", {
    type: "number",
    min: "1",
    id: "height",
    name: _constants.QS_HEIGHT
  })), _react.default.createElement("p", null, _react.default.createElement("button", {
    type: "submit"
  }, "Show widget"))), _react.default.createElement("p", null, _react.default.createElement("a", {
    href: "./"
  }, "Go back")));
};
exports.ConfigureWidget = ConfigureWidget;
function isWidgetVisualization(fieldName) {
  const combinedMap = new Map([..._viz.EVICTION_VISUALIZATIONS.entries(), ...OTHER_VISUALIZATIONS.entries()]);
  return combinedMap.has(fieldName);
}
function validateFieldName(fieldName) {
  fieldName = fieldName || '';
  if (isWidgetVisualization(fieldName)) return fieldName;
  return "total_filings";
}
function validatePositiveInt(value, defaultValue) {
  const num = parseInt(value || '');
  if (!isNaN(num) && num > 0) return num;
  return defaultValue;
}
},{"react":"HdMw","./lib/eviction-time-series/data":"A0lQ","./lib/filings-by-zip/data":"FhqL","./lib/eviction-time-series/viz":"tEet","./lib/total-active-cases/viz":"n7Ht","./lib/marshal-evictions-by-week/viz":"gxny","./lib/share-represented/viz":"P6qT","./lib/total-judgments-statewide/viz":"FFmW","./lib/total-judgments-citywide/viz":"yAa3","./lib/total-active-cases-table/viz":"AQna","./lib/viz-util":"teeT","./lib/filings-by-zip-table-outside-nyc/viz":"OXmi","./lib/monthly-filings-table-by-zip/viz":"cx5E","./lib/monthly-filings-table-citywide/viz":"t3fb","./lib/borough-pie-chart-active-cases/viz":"gbT6","./lib/checklist":"mj8g","./constants":"eKDL","_bundle_loader":"z1Am","./lib/filings-by-zip/viz":[["viz.b1c8f2a9.js","rZDh"],"rZDh"]}],"wdqJ":[function(require,module,exports) {
"use strict";

var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactRouterDom = require("react-router-dom");
var _util = require("@justfixnyc/util");
var _auth = require("./auth");
var _dashboard = require("./dashboard");
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useAuth = () => (0, _react.useContext)(_auth.AuthContext);
function RequireAuth({
  children
}) {
  let auth = useAuth();
  let location = (0, _reactRouterDom.useLocation)();
  if (auth.isAuthenticated !== _constants.REACT_APP_PASSWORD) {
    return _react.default.createElement(_reactRouterDom.Navigate, {
      to: "/login",
      state: {
        from: location
      },
      replace: true
    });
  }
  return children;
}
const LoginPage = () => {
  var _a, _b;
  let navigate = (0, _reactRouterDom.useNavigate)();
  let location = (0, _reactRouterDom.useLocation)();
  let auth = useAuth();
  let from = ((_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.pathname) || "/";
  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let password = formData.get("password");
    auth.signin(password, () => {
      navigate(from, {
        replace: true
      });
    });
  }
  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("p", null, "You must log in to view the dashboard"), _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("label", null, "Password: ", _react.default.createElement("input", {
    name: "password",
    type: "text"
  })), " ", _react.default.createElement("button", {
    type: "submit"
  }, "Login")));
};
const IndexPage = () => {
  const search = new URLSearchParams(window.location.search);
  const view = search.get(_constants.QS_VIEW);
  return view === _constants.VIEW_WIDGET ? _react.default.createElement(_dashboard.Widget, {
    fieldName: (0, _dashboard.validateFieldName)(search.get(_constants.QS_FIELD_NAME)),
    height: (0, _dashboard.validatePositiveInt)(search.get(_constants.QS_HEIGHT), _constants.EVICTION_VIZ_DEFAULT_HEIGHT)
  }) : view === _constants.VIEW_CONFIGURE_WIDGET ? _react.default.createElement(_dashboard.ConfigureWidget, null) : _react.default.createElement(RequireAuth, null, _react.default.createElement(_dashboard.FullDocument, null));
};
const App = () => {
  const [isAuthenticated, setAuthenticated] = (0, _react.useState)(false);
  return _react.default.createElement(_auth.AuthProvider, null, _react.default.createElement(_reactRouterDom.Routes, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: _react.default.createElement(IndexPage, null)
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: _react.default.createElement(LoginPage, null)
  })));
};
async function main() {
  _reactDom.default.render(_react.default.createElement(_reactRouterDom.BrowserRouter, {
    basename: "rtc-eviction-viz"
  }, _react.default.createElement(App, null)), (0, _util.getHTMLElement)("div", "#app"));
}
main();
},{"react":"HdMw","react-dom":"X9zx","react-router-dom":"Mzho","@justfixnyc/util":"xScV","./auth":"vdre","./dashboard":"v7iN","./constants":"eKDL"}],"Ijyk":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;
    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };
    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("js",require("Ijyk"));b.load([["vega.9e91e01b.js","saqM"]]).then(function(){require("wdqJ");});
},{}]},{},[0], null)