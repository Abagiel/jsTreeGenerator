// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _componentsAppJs = require('./components/App.js');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsAppJsDefault = _parcelHelpers.interopDefault(_componentsAppJs);
_componentsAppJsDefault.default(document.querySelector('canvas'));

},{"./components/App.js":"2mBZE","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2mBZE":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _paintTreeJs = require('./paint/tree.js');
var _paintTreeJsDefault = _parcelHelpers.interopDefault(_paintTreeJs);
var _constsJs = require('./consts.js');
var _utilsJs = require('./utils.js');
var _paramsJs = require('./params.js');
function App(canvas) {
  _utilsJs.setSizes(canvas, _constsJs.WIDTH, _constsJs.HEIGHT, _constsJs.DPI_WIDTH, _constsJs.DPI_HEIGHT);
  const ctx = canvas.getContext('2d');
  const params = _paramsJs.createParams(false, _constsJs.TREE_BASE.h);
  _paintTreeJsDefault.default(ctx, params);
}
exports.default = App;

},{"./paint/tree.js":"3GV3F","./consts.js":"3htOf","./utils.js":"1MFtj","./params.js":"jgcoC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3GV3F":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _baseTreeJs = require('./baseTree.js');
var _baseTreeJsDefault = _parcelHelpers.interopDefault(_baseTreeJs);
var _levelJs = require('./level.js');
var _levelJsDefault = _parcelHelpers.interopDefault(_levelJs);
var _leavesJs = require('./leaves.js');
var _leavesJsDefault = _parcelHelpers.interopDefault(_leavesJs);
var _paramsJs = require('../params.js');
var _constsJs = require('../consts.js');
function tree(ctx, params) {
  const allParams = [params];
  _baseTreeJsDefault.default(ctx, _constsJs.TREE_BASE);
  _levelJsDefault.default(ctx, params);
  paintExtraBranches(ctx, params, allParams);
  paintLeaves(ctx, allParams);
}
exports.default = tree;
function paintExtraBranches(ctx, params, allParams) {
  params.extra.forEach(([side, x, y, deg, w, h]) => {
    w = w / 2;
    h = h / 1.5;
    const param = _paramsJs.createParams(x, y, w, h, deg, false, false, 'auto', side);
    allParams.push(param);
    _levelJsDefault.default(ctx, param, true);
  });
}
function paintLeaves(ctx, allParams) {
  allParams.forEach(param => {
    _leavesJsDefault.default(ctx, param);
  });
}

},{"./baseTree.js":"2Y4dD","./level.js":"502cC","./leaves.js":"KZMB5","../params.js":"jgcoC","../consts.js":"3htOf","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2Y4dD":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function baseTree(ctx, {x, y, w, h}) {
  const strokeW = w / 2;
  ctx.beginPath();
  ctx.fillStyle = 'brown';
  ctx.strokeStyle = 'brown';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 10;
  ctx.fillRect(x, y, w, h);
  ctx.rect(x, y, w, h);
  ctx.stroke();
  ctx.closePath();
}
exports.default = baseTree;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"502cC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _leftLevelJs = require('./leftLevel.js');
var _leftLevelJsDefault = _parcelHelpers.interopDefault(_leftLevelJs);
var _rightLevelJs = require('./rightLevel.js');
var _rightLevelJsDefault = _parcelHelpers.interopDefault(_rightLevelJs);
function level(ctx, params) {
  if (params.count > 0) {
    params.count--;
    const {coords, h, w, degStep, extra} = params;
    const leftCoords = _leftLevelJsDefault.default(ctx, coords, w, h, degStep, params.count, extra);
    const rightCoords = _rightLevelJsDefault.default(ctx, coords, w, h, degStep, params.count, extra);
    changeCoords(params, leftCoords, rightCoords);
    changeHeightAndWidth(params);
    level(ctx, params);
  }
}
exports.default = level;
function changeCoords(params, leftCoords, rightCoords) {
  params.left.coords = leftCoords;
  params.right.coords = rightCoords;
}
function changeHeightAndWidth(params) {
  if (params.w > 1) {
    params.w = params.w / 2;
  }
  if (params.h > 20) {
    params.h = params.h / 1.5;
  }
}

},{"./leftLevel.js":"7tch9","./rightLevel.js":"vSLIC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7tch9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _rotateAndFillJs = require('./rotateAndFill.js');
var _rotateAndFillJsDefault = _parcelHelpers.interopDefault(_rotateAndFillJs);
var _paramsOperationsJs = require('../paramsOperations.js');
var _utilsJs = require('../utils.js');
var _constsJs = require('../consts.js');
function left(ctx, coords, w, h, degStep, count, extra) {
  const newCoords = [];
  ctx.beginPath();
  coords.forEach(([side, x, y, deg]) => {
    if (side === 'right') {
      deg = deg + degStep * 2;
    }
    let currentDeg = _utilsJs.randomDegree(deg, count);
    let curHeight = _utilsJs.randomHeight(h, w, count, _constsJs.INITIAL_COUNT);
    _rotateAndFillJsDefault.default(ctx, x, y, w, curHeight, currentDeg, true);
    _paramsOperationsJs.updateCoords([newCoords, extra], 'right', count, w, curHeight, x, y, currentDeg, degStep);
  });
  ctx.closePath();
  return newCoords;
}
exports.default = left;

},{"./rotateAndFill.js":"1Hifp","../paramsOperations.js":"2LwEp","../utils.js":"1MFtj","../consts.js":"3htOf","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1Hifp":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require('../utils.js');
function rotateAndFillRect(ctx, x1, y1, w, h, deg, style) {
  const x2 = x1;
  const y2 = y1;
  ctx.save();
  if (style) {
    ctx.lineWidth = 1;
    ctx.fillStyle = 'brown';
    ctx.strokeStyle = 'brown';
    ctx.lineJoin = 'round';
  }
  ctx.translate(x2, y2);
  ctx.rotate(_utilsJs.toRad(deg));
  ctx.fillRect(w / -2, y1 - y2, w, h);
  ctx.rect(w / -2, y1 - y2, w, h);
  if (style) {
    ctx.stroke();
  }
  ctx.restore();
}
exports.default = rotateAndFillRect;

},{"../utils.js":"1MFtj","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1MFtj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "setSizes", function () {
  return setSizes;
});
_parcelHelpers.export(exports, "css", function () {
  return css;
});
_parcelHelpers.export(exports, "toRad", function () {
  return toRad;
});
_parcelHelpers.export(exports, "randomGreen", function () {
  return randomGreen;
});
_parcelHelpers.export(exports, "computeNewCoords", function () {
  return computeNewCoords;
});
_parcelHelpers.export(exports, "pushTo", function () {
  return pushTo;
});
_parcelHelpers.export(exports, "randomHeight", function () {
  return randomHeight;
});
_parcelHelpers.export(exports, "randomDegree", function () {
  return randomDegree;
});
function setSizes(target, w, h, dw, dh) {
  css(target, {
    width: w + 'px',
    height: h + 'px'
  });
  target.width = dw;
  target.height = dh;
}
function css(target, css = {}) {
  Object.assign(target.style, css);
}
function toRad(deg) {
  return deg * Math.PI / 180;
}
function randomGreen() {
  const h = Math.floor(Math.random() * 20 + 140);
  const s = Math.floor(Math.random() * 30 + 40);
  const l = Math.floor(Math.random() * 20 + 40);
  return `hsl(${h}, ${s}%, ${l}%)`;
}
function computeNewCoords(side, x, y, currentDeg, degStep, curHeight) {
  const num = Math.random() * 4 + 2;
  const newX = x - Math.sin(toRad(currentDeg)) * curHeight;
  const newY = y + Math.cos(toRad(Math.abs(currentDeg))) * curHeight;
  const xRandom = x - Math.sin(toRad(currentDeg)) * curHeight / num;
  const yRandom = y + Math.cos(toRad(Math.abs(currentDeg))) * curHeight / num;
  const newDeg = side === 'right' ? currentDeg - degStep : currentDeg + degStep;
  return {
    newX,
    newY,
    newDeg,
    xRandom,
    yRandom
  };
}
function pushTo(values, target) {
  target.push(values);
}
function randomHeight(initHeight, width, count, initCount) {
  if (count === initCount) {
    return Math.random() * initHeight * 1.1 + initHeight * 0.1;
  }
  return Math.random() * initHeight / 2 + initHeight / 2;
}
function randomDegree(initDegree, count) {
  if (count <= 1) return initDegree;
  return Math.random() * (initDegree / count) + initDegree;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2LwEp":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "computeParams", function () {
  return computeParams;
});
_parcelHelpers.export(exports, "updateCoords", function () {
  return updateCoords;
});
var _utilsJs = require('./utils.js');
var _constsJs = require('./consts.js');
function computeParams(x, y, w, h, deg, degStep, count, countDef, side) {
  x = OR(x, _constsJs.DPI_WIDTH / 2);
  y = OR(y, 0);
  side = OR(side, 'main');
  deg = OR(deg, _constsJs.INITIAL_DEGREE);
  count = OR(getCount(w, countDef), _constsJs.INITIAL_COUNT);
  w = OR(w, _constsJs.INITIAL_BRANCH_WIDTH);
  h = OR(h, _constsJs.INITIAL_BRANCH_HEIGHT);
  degStep = OR(degStep, _constsJs.INITIAL_DEGREE_STEP);
  return {
    x,
    y,
    w,
    h,
    deg,
    degStep,
    count,
    side
  };
}
function getCount(width, countDef) {
  if (countDef === 'auto') {
    let w = width;
    let count = 1;
    while (w > 1) {
      w /= 2;
      count++;
    }
    return count;
  }
}
const OR = (value, defaultValue) => value || defaultValue;
function updateCoords(targets, side, count, w, curHeight, ...args) {
  args.push(curHeight);
  const {newX, newY, newDeg, xRandom, yRandom} = _utilsJs.computeNewCoords(side, ...args);
  _utilsJs.pushTo([side, newX, newY, newDeg], targets[0]);
  if (count > 2 && w > 5) {
    _utilsJs.pushTo([side, xRandom, yRandom, newDeg * randomDegMuli(), w, curHeight], targets[1]);
  }
}
function randomDegMuli() {
  const mult = Math.ceil(Math.random() * 4);
  return Math.random < 0.5 ? -mult : mult;
}

},{"./utils.js":"1MFtj","./consts.js":"3htOf","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3htOf":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "WIDTH", function () {
  return WIDTH;
});
_parcelHelpers.export(exports, "HEIGHT", function () {
  return HEIGHT;
});
_parcelHelpers.export(exports, "DPI_WIDTH", function () {
  return DPI_WIDTH;
});
_parcelHelpers.export(exports, "DPI_HEIGHT", function () {
  return DPI_HEIGHT;
});
_parcelHelpers.export(exports, "INITIAL_DEGREE", function () {
  return INITIAL_DEGREE;
});
_parcelHelpers.export(exports, "INITIAL_DEGREE_STEP", function () {
  return INITIAL_DEGREE_STEP;
});
_parcelHelpers.export(exports, "INITIAL_BRANCH_HEIGHT", function () {
  return INITIAL_BRANCH_HEIGHT;
});
_parcelHelpers.export(exports, "INITIAL_BRANCH_WIDTH", function () {
  return INITIAL_BRANCH_WIDTH;
});
_parcelHelpers.export(exports, "INITIAL_COUNT", function () {
  return INITIAL_COUNT;
});
_parcelHelpers.export(exports, "TREE_BASE", function () {
  return TREE_BASE;
});
_parcelHelpers.export(exports, "LEAVES", function () {
  return LEAVES;
});
const WIDTH = 800;
const HEIGHT = 600;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;
const INITIAL_DEGREE = 0;
const INITIAL_DEGREE_STEP = 20;
const INITIAL_BRANCH_HEIGHT = 400;
const INITIAL_BRANCH_WIDTH = 30;
const INITIAL_COUNT = 10;
const TREE_BASE = {
  w: 120,
  h: 150,
  get x() {
    return DPI_WIDTH / 2 - this.w / 2;
  },
  y: 0
};
const LEAVES = {
  w: 20,
  h: 20,
  degStep: 30
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"vSLIC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _rotateAndFillJs = require('./rotateAndFill.js');
var _rotateAndFillJsDefault = _parcelHelpers.interopDefault(_rotateAndFillJs);
var _paramsOperationsJs = require('../paramsOperations.js');
var _utilsJs = require('../utils.js');
var _constsJs = require('../consts.js');
function right(ctx, coords, w, h, degStep, count, extra) {
  const newCoords = [];
  ctx.beginPath();
  coords.forEach(([side, x, y, deg]) => {
    if (side === 'main' && deg !== 0) {
      deg = -deg;
    }
    if (side === 'left') {
      deg = deg - degStep * 2;
    }
    let currentDeg = _utilsJs.randomDegree(deg, count);
    let curHeight = _utilsJs.randomHeight(h, w, count, _constsJs.INITIAL_COUNT);
    _rotateAndFillJsDefault.default(ctx, x, y, w, curHeight, currentDeg, true);
    _paramsOperationsJs.updateCoords([newCoords, extra], 'right', count, w, curHeight, x, y, currentDeg, degStep);
  });
  ctx.closePath();
  return newCoords;
}
exports.default = right;

},{"./rotateAndFill.js":"1Hifp","../paramsOperations.js":"2LwEp","../utils.js":"1MFtj","../consts.js":"3htOf","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"KZMB5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _rotateAndFillJs = require('./rotateAndFill.js');
var _rotateAndFillJsDefault = _parcelHelpers.interopDefault(_rotateAndFillJs);
var _utilsJs = require('../utils.js');
var _constsJs = require('../consts.js');
const {w, h, degStep} = _constsJs.LEAVES;
function leaves(ctx, params) {
  params.coords.forEach(([side, x, y, deg]) => {
    if (side === 'left') {
      deg -= params.degStep;
    } else {
      deg += params.degStep;
    }
    ctx.beginPath();
    ctx.fillStyle = _utilsJs.randomGreen();
    generateLeaves(ctx, x, y, w, h, deg, degStep, 7);
    ctx.closePath();
  });
}
exports.default = leaves;
function generateLeaves(ctx, x, y, w, h, deg, degStep, count) {
  w = Math.random() * w + 5;
  h = Math.random() * h + 10;
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      _rotateAndFillJsDefault.default(ctx, x, y, w, h, deg + degStep * i);
    } else {
      _rotateAndFillJsDefault.default(ctx, x, y, w, h, deg + degStep * i);
      _rotateAndFillJsDefault.default(ctx, x, y, w, h, deg - degStep * i);
    }
  }
}

},{"./rotateAndFill.js":"1Hifp","../utils.js":"1MFtj","../consts.js":"3htOf","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"jgcoC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "createParams", function () {
  return createParams;
});
var _paramsOperationsJs = require('./paramsOperations.js');
function createParams(...args) {
  const {x, y, w, h, deg, degStep, count, countDef, side} = _paramsOperationsJs.computeParams(...args);
  return {
    left: {
      coords: [[side, x, y, deg]]
    },
    right: {
      coords: [[side, x, y, deg]]
    },
    extra: [],
    w,
    h,
    degStep,
    count,
    get coords() {
      if (this.left.coords[0][0] === 'main') {
        return [['main', ...this.left.coords[0].slice(1)]];
      }
      return [...this.left.coords, ...this.right.coords];
    }
  };
}

},{"./paramsOperations.js":"2LwEp","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequire767d")

//# sourceMappingURL=index.3fafb3e2.js.map
