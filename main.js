/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?\n}");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?\n}");

/***/ }),

/***/ "./src/audio sync recursive \\.mp3$":
/*!********************************!*\
  !*** ./src/audio/ sync \.mp3$ ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./angry.mp3\": \"./src/audio/angry.mp3\",\n\t\"./apple.mp3\": \"./src/audio/apple.mp3\",\n\t\"./bird.mp3\": \"./src/audio/bird.mp3\",\n\t\"./black.mp3\": \"./src/audio/black.mp3\",\n\t\"./blouse.mp3\": \"./src/audio/blouse.mp3\",\n\t\"./blue.mp3\": \"./src/audio/blue.mp3\",\n\t\"./boot.mp3\": \"./src/audio/boot.mp3\",\n\t\"./bread.mp3\": \"./src/audio/bread.mp3\",\n\t\"./cake.mp3\": \"./src/audio/cake.mp3\",\n\t\"./candy.mp3\": \"./src/audio/candy.mp3\",\n\t\"./cat.mp3\": \"./src/audio/cat.mp3\",\n\t\"./cheek.mp3\": \"./src/audio/cheek.mp3\",\n\t\"./cheese.mp3\": \"./src/audio/cheese.mp3\",\n\t\"./chick.mp3\": \"./src/audio/chick.mp3\",\n\t\"./chicken.mp3\": \"./src/audio/chicken.mp3\",\n\t\"./coat.mp3\": \"./src/audio/coat.mp3\",\n\t\"./correct.mp3\": \"./src/audio/correct.mp3\",\n\t\"./cry.mp3\": \"./src/audio/cry.mp3\",\n\t\"./dance.mp3\": \"./src/audio/dance.mp3\",\n\t\"./dive.mp3\": \"./src/audio/dive.mp3\",\n\t\"./dog.mp3\": \"./src/audio/dog.mp3\",\n\t\"./dolphin.mp3\": \"./src/audio/dolphin.mp3\",\n\t\"./draw.mp3\": \"./src/audio/draw.mp3\",\n\t\"./dress.mp3\": \"./src/audio/dress.mp3\",\n\t\"./error.mp3\": \"./src/audio/error.mp3\",\n\t\"./eye.mp3\": \"./src/audio/eye.mp3\",\n\t\"./failure.mp3\": \"./src/audio/failure.mp3\",\n\t\"./fish.mp3\": \"./src/audio/fish.mp3\",\n\t\"./fly.mp3\": \"./src/audio/fly.mp3\",\n\t\"./foot.mp3\": \"./src/audio/foot.mp3\",\n\t\"./frog.mp3\": \"./src/audio/frog.mp3\",\n\t\"./giraffe.mp3\": \"./src/audio/giraffe.mp3\",\n\t\"./gray.mp3\": \"./src/audio/gray.mp3\",\n\t\"./green.mp3\": \"./src/audio/green.mp3\",\n\t\"./hair.mp3\": \"./src/audio/hair.mp3\",\n\t\"./hand.mp3\": \"./src/audio/hand.mp3\",\n\t\"./happy.mp3\": \"./src/audio/happy.mp3\",\n\t\"./horse.mp3\": \"./src/audio/horse.mp3\",\n\t\"./hug.mp3\": \"./src/audio/hug.mp3\",\n\t\"./juice.mp3\": \"./src/audio/juice.mp3\",\n\t\"./jump.mp3\": \"./src/audio/jump.mp3\",\n\t\"./laugh.mp3\": \"./src/audio/laugh.mp3\",\n\t\"./lion.mp3\": \"./src/audio/lion.mp3\",\n\t\"./lips.mp3\": \"./src/audio/lips.mp3\",\n\t\"./lose.mp3\": \"./src/audio/lose.mp3\",\n\t\"./mouse.mp3\": \"./src/audio/mouse.mp3\",\n\t\"./nose.mp3\": \"./src/audio/nose.mp3\",\n\t\"./open.mp3\": \"./src/audio/open.mp3\",\n\t\"./orange.mp3\": \"./src/audio/orange.mp3\",\n\t\"./pants.mp3\": \"./src/audio/pants.mp3\",\n\t\"./pig.mp3\": \"./src/audio/pig.mp3\",\n\t\"./play.mp3\": \"./src/audio/play.mp3\",\n\t\"./point.mp3\": \"./src/audio/point.mp3\",\n\t\"./purple.mp3\": \"./src/audio/purple.mp3\",\n\t\"./rabbit.mp3\": \"./src/audio/rabbit.mp3\",\n\t\"./red.mp3\": \"./src/audio/red.mp3\",\n\t\"./ride.mp3\": \"./src/audio/ride.mp3\",\n\t\"./run.mp3\": \"./src/audio/run.mp3\",\n\t\"./sad.mp3\": \"./src/audio/sad.mp3\",\n\t\"./scared.mp3\": \"./src/audio/scared.mp3\",\n\t\"./sheep.mp3\": \"./src/audio/sheep.mp3\",\n\t\"./shirt.mp3\": \"./src/audio/shirt.mp3\",\n\t\"./shoe.mp3\": \"./src/audio/shoe.mp3\",\n\t\"./sing.mp3\": \"./src/audio/sing.mp3\",\n\t\"./skip.mp3\": \"./src/audio/skip.mp3\",\n\t\"./skirt.mp3\": \"./src/audio/skirt.mp3\",\n\t\"./smile.mp3\": \"./src/audio/smile.mp3\",\n\t\"./success.mp3\": \"./src/audio/success.mp3\",\n\t\"./surprised.mp3\": \"./src/audio/surprised.mp3\",\n\t\"./swim.mp3\": \"./src/audio/swim.mp3\",\n\t\"./tired.mp3\": \"./src/audio/tired.mp3\",\n\t\"./tongue.mp3\": \"./src/audio/tongue.mp3\",\n\t\"./turtle.mp3\": \"./src/audio/turtle.mp3\",\n\t\"./watermelon.mp3\": \"./src/audio/watermelon.mp3\",\n\t\"./white.mp3\": \"./src/audio/white.mp3\",\n\t\"./win.mp3\": \"./src/audio/win.mp3\",\n\t\"./yellow.mp3\": \"./src/audio/yellow.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/audio sync recursive \\\\.mp3$\";\n\n//# sourceURL=webpack://webpack-template/./src/audio/_sync_\\.mp3$?\n}");

/***/ }),

/***/ "./src/audio/angry.mp3":
/*!*****************************!*\
  !*** ./src/audio/angry.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/angry.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/angry.mp3?\n}");

/***/ }),

/***/ "./src/audio/apple.mp3":
/*!*****************************!*\
  !*** ./src/audio/apple.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/apple.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/apple.mp3?\n}");

/***/ }),

/***/ "./src/audio/bird.mp3":
/*!****************************!*\
  !*** ./src/audio/bird.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/bird.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/bird.mp3?\n}");

/***/ }),

/***/ "./src/audio/black.mp3":
/*!*****************************!*\
  !*** ./src/audio/black.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/black.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/black.mp3?\n}");

/***/ }),

/***/ "./src/audio/blouse.mp3":
/*!******************************!*\
  !*** ./src/audio/blouse.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/blouse.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/blouse.mp3?\n}");

/***/ }),

/***/ "./src/audio/blue.mp3":
/*!****************************!*\
  !*** ./src/audio/blue.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/blue.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/blue.mp3?\n}");

/***/ }),

/***/ "./src/audio/boot.mp3":
/*!****************************!*\
  !*** ./src/audio/boot.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/boot.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/boot.mp3?\n}");

/***/ }),

/***/ "./src/audio/bread.mp3":
/*!*****************************!*\
  !*** ./src/audio/bread.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/bread.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/bread.mp3?\n}");

/***/ }),

/***/ "./src/audio/cake.mp3":
/*!****************************!*\
  !*** ./src/audio/cake.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/cake.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/cake.mp3?\n}");

/***/ }),

/***/ "./src/audio/candy.mp3":
/*!*****************************!*\
  !*** ./src/audio/candy.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/candy.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/candy.mp3?\n}");

/***/ }),

/***/ "./src/audio/cat.mp3":
/*!***************************!*\
  !*** ./src/audio/cat.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/cat.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/cat.mp3?\n}");

/***/ }),

/***/ "./src/audio/cheek.mp3":
/*!*****************************!*\
  !*** ./src/audio/cheek.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/cheek.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/cheek.mp3?\n}");

/***/ }),

/***/ "./src/audio/cheese.mp3":
/*!******************************!*\
  !*** ./src/audio/cheese.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/cheese.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/cheese.mp3?\n}");

/***/ }),

/***/ "./src/audio/chick.mp3":
/*!*****************************!*\
  !*** ./src/audio/chick.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/chick.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/chick.mp3?\n}");

/***/ }),

/***/ "./src/audio/chicken.mp3":
/*!*******************************!*\
  !*** ./src/audio/chicken.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/chicken.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/chicken.mp3?\n}");

/***/ }),

/***/ "./src/audio/coat.mp3":
/*!****************************!*\
  !*** ./src/audio/coat.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/coat.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/coat.mp3?\n}");

/***/ }),

/***/ "./src/audio/correct.mp3":
/*!*******************************!*\
  !*** ./src/audio/correct.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/correct.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/correct.mp3?\n}");

/***/ }),

/***/ "./src/audio/cry.mp3":
/*!***************************!*\
  !*** ./src/audio/cry.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/cry.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/cry.mp3?\n}");

/***/ }),

/***/ "./src/audio/dance.mp3":
/*!*****************************!*\
  !*** ./src/audio/dance.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/dance.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/dance.mp3?\n}");

/***/ }),

/***/ "./src/audio/dive.mp3":
/*!****************************!*\
  !*** ./src/audio/dive.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/dive.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/dive.mp3?\n}");

/***/ }),

/***/ "./src/audio/dog.mp3":
/*!***************************!*\
  !*** ./src/audio/dog.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/dog.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/dog.mp3?\n}");

/***/ }),

/***/ "./src/audio/dolphin.mp3":
/*!*******************************!*\
  !*** ./src/audio/dolphin.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/dolphin.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/dolphin.mp3?\n}");

/***/ }),

/***/ "./src/audio/draw.mp3":
/*!****************************!*\
  !*** ./src/audio/draw.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/draw.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/draw.mp3?\n}");

/***/ }),

/***/ "./src/audio/dress.mp3":
/*!*****************************!*\
  !*** ./src/audio/dress.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/dress.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/dress.mp3?\n}");

/***/ }),

/***/ "./src/audio/error.mp3":
/*!*****************************!*\
  !*** ./src/audio/error.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/error.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/error.mp3?\n}");

/***/ }),

/***/ "./src/audio/eye.mp3":
/*!***************************!*\
  !*** ./src/audio/eye.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/eye.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/eye.mp3?\n}");

/***/ }),

/***/ "./src/audio/failure.mp3":
/*!*******************************!*\
  !*** ./src/audio/failure.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/failure.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/failure.mp3?\n}");

/***/ }),

/***/ "./src/audio/fish.mp3":
/*!****************************!*\
  !*** ./src/audio/fish.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/fish.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/fish.mp3?\n}");

/***/ }),

/***/ "./src/audio/fly.mp3":
/*!***************************!*\
  !*** ./src/audio/fly.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/fly.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/fly.mp3?\n}");

/***/ }),

/***/ "./src/audio/foot.mp3":
/*!****************************!*\
  !*** ./src/audio/foot.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/foot.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/foot.mp3?\n}");

/***/ }),

/***/ "./src/audio/frog.mp3":
/*!****************************!*\
  !*** ./src/audio/frog.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/frog.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/frog.mp3?\n}");

/***/ }),

/***/ "./src/audio/giraffe.mp3":
/*!*******************************!*\
  !*** ./src/audio/giraffe.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/giraffe.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/giraffe.mp3?\n}");

/***/ }),

/***/ "./src/audio/gray.mp3":
/*!****************************!*\
  !*** ./src/audio/gray.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/gray.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/gray.mp3?\n}");

/***/ }),

/***/ "./src/audio/green.mp3":
/*!*****************************!*\
  !*** ./src/audio/green.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/green.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/green.mp3?\n}");

/***/ }),

/***/ "./src/audio/hair.mp3":
/*!****************************!*\
  !*** ./src/audio/hair.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/hair.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/hair.mp3?\n}");

/***/ }),

/***/ "./src/audio/hand.mp3":
/*!****************************!*\
  !*** ./src/audio/hand.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/hand.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/hand.mp3?\n}");

/***/ }),

/***/ "./src/audio/happy.mp3":
/*!*****************************!*\
  !*** ./src/audio/happy.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/happy.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/happy.mp3?\n}");

/***/ }),

/***/ "./src/audio/horse.mp3":
/*!*****************************!*\
  !*** ./src/audio/horse.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/horse.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/horse.mp3?\n}");

/***/ }),

/***/ "./src/audio/hug.mp3":
/*!***************************!*\
  !*** ./src/audio/hug.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/hug.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/hug.mp3?\n}");

/***/ }),

/***/ "./src/audio/juice.mp3":
/*!*****************************!*\
  !*** ./src/audio/juice.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/juice.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/juice.mp3?\n}");

/***/ }),

/***/ "./src/audio/jump.mp3":
/*!****************************!*\
  !*** ./src/audio/jump.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/jump.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/jump.mp3?\n}");

/***/ }),

/***/ "./src/audio/laugh.mp3":
/*!*****************************!*\
  !*** ./src/audio/laugh.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/laugh.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/laugh.mp3?\n}");

/***/ }),

/***/ "./src/audio/lion.mp3":
/*!****************************!*\
  !*** ./src/audio/lion.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/lion.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/lion.mp3?\n}");

/***/ }),

/***/ "./src/audio/lips.mp3":
/*!****************************!*\
  !*** ./src/audio/lips.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/lips.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/lips.mp3?\n}");

/***/ }),

/***/ "./src/audio/lose.mp3":
/*!****************************!*\
  !*** ./src/audio/lose.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/lose.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/lose.mp3?\n}");

/***/ }),

/***/ "./src/audio/mouse.mp3":
/*!*****************************!*\
  !*** ./src/audio/mouse.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/mouse.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/mouse.mp3?\n}");

/***/ }),

/***/ "./src/audio/nose.mp3":
/*!****************************!*\
  !*** ./src/audio/nose.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/nose.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/nose.mp3?\n}");

/***/ }),

/***/ "./src/audio/open.mp3":
/*!****************************!*\
  !*** ./src/audio/open.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/open.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/open.mp3?\n}");

/***/ }),

/***/ "./src/audio/orange.mp3":
/*!******************************!*\
  !*** ./src/audio/orange.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/orange.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/orange.mp3?\n}");

/***/ }),

/***/ "./src/audio/pants.mp3":
/*!*****************************!*\
  !*** ./src/audio/pants.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/pants.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/pants.mp3?\n}");

/***/ }),

/***/ "./src/audio/pig.mp3":
/*!***************************!*\
  !*** ./src/audio/pig.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/pig.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/pig.mp3?\n}");

/***/ }),

/***/ "./src/audio/play.mp3":
/*!****************************!*\
  !*** ./src/audio/play.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/play.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/play.mp3?\n}");

/***/ }),

/***/ "./src/audio/point.mp3":
/*!*****************************!*\
  !*** ./src/audio/point.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/point.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/point.mp3?\n}");

/***/ }),

/***/ "./src/audio/purple.mp3":
/*!******************************!*\
  !*** ./src/audio/purple.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/purple.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/purple.mp3?\n}");

/***/ }),

/***/ "./src/audio/rabbit.mp3":
/*!******************************!*\
  !*** ./src/audio/rabbit.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/rabbit.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/rabbit.mp3?\n}");

/***/ }),

/***/ "./src/audio/red.mp3":
/*!***************************!*\
  !*** ./src/audio/red.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/red.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/red.mp3?\n}");

/***/ }),

/***/ "./src/audio/ride.mp3":
/*!****************************!*\
  !*** ./src/audio/ride.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/ride.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/ride.mp3?\n}");

/***/ }),

/***/ "./src/audio/run.mp3":
/*!***************************!*\
  !*** ./src/audio/run.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/run.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/run.mp3?\n}");

/***/ }),

/***/ "./src/audio/sad.mp3":
/*!***************************!*\
  !*** ./src/audio/sad.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/sad.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/sad.mp3?\n}");

/***/ }),

/***/ "./src/audio/scared.mp3":
/*!******************************!*\
  !*** ./src/audio/scared.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/scared.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/scared.mp3?\n}");

/***/ }),

/***/ "./src/audio/sheep.mp3":
/*!*****************************!*\
  !*** ./src/audio/sheep.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/sheep.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/sheep.mp3?\n}");

/***/ }),

/***/ "./src/audio/shirt.mp3":
/*!*****************************!*\
  !*** ./src/audio/shirt.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/shirt.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/shirt.mp3?\n}");

/***/ }),

/***/ "./src/audio/shoe.mp3":
/*!****************************!*\
  !*** ./src/audio/shoe.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/shoe.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/shoe.mp3?\n}");

/***/ }),

/***/ "./src/audio/sing.mp3":
/*!****************************!*\
  !*** ./src/audio/sing.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/sing.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/sing.mp3?\n}");

/***/ }),

/***/ "./src/audio/skip.mp3":
/*!****************************!*\
  !*** ./src/audio/skip.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/skip.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/skip.mp3?\n}");

/***/ }),

/***/ "./src/audio/skirt.mp3":
/*!*****************************!*\
  !*** ./src/audio/skirt.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/skirt.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/skirt.mp3?\n}");

/***/ }),

/***/ "./src/audio/smile.mp3":
/*!*****************************!*\
  !*** ./src/audio/smile.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/smile.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/smile.mp3?\n}");

/***/ }),

/***/ "./src/audio/success.mp3":
/*!*******************************!*\
  !*** ./src/audio/success.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/success.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/success.mp3?\n}");

/***/ }),

/***/ "./src/audio/surprised.mp3":
/*!*********************************!*\
  !*** ./src/audio/surprised.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/surprised.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/surprised.mp3?\n}");

/***/ }),

/***/ "./src/audio/swim.mp3":
/*!****************************!*\
  !*** ./src/audio/swim.mp3 ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/swim.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/swim.mp3?\n}");

/***/ }),

/***/ "./src/audio/tired.mp3":
/*!*****************************!*\
  !*** ./src/audio/tired.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/tired.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/tired.mp3?\n}");

/***/ }),

/***/ "./src/audio/tongue.mp3":
/*!******************************!*\
  !*** ./src/audio/tongue.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/tongue.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/tongue.mp3?\n}");

/***/ }),

/***/ "./src/audio/turtle.mp3":
/*!******************************!*\
  !*** ./src/audio/turtle.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/turtle.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/turtle.mp3?\n}");

/***/ }),

/***/ "./src/audio/watermelon.mp3":
/*!**********************************!*\
  !*** ./src/audio/watermelon.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/watermelon.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/watermelon.mp3?\n}");

/***/ }),

/***/ "./src/audio/white.mp3":
/*!*****************************!*\
  !*** ./src/audio/white.mp3 ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/white.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/white.mp3?\n}");

/***/ }),

/***/ "./src/audio/win.mp3":
/*!***************************!*\
  !*** ./src/audio/win.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/win.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/win.mp3?\n}");

/***/ }),

/***/ "./src/audio/yellow.mp3":
/*!******************************!*\
  !*** ./src/audio/yellow.mp3 ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/yellow.mp3\");\n\n//# sourceURL=webpack://webpack-template/./src/audio/yellow.mp3?\n}");

/***/ }),

/***/ "./src/css/button.css":
/*!****************************!*\
  !*** ./src/css/button.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1752739986037\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-template/./src/css/button.css?\n}");

/***/ }),

/***/ "./src/css/flip-card.css":
/*!*******************************!*\
  !*** ./src/css/flip-card.css ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1752739986035\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-template/./src/css/flip-card.css?\n}");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1752739986028\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-template/./src/css/main.css?\n}");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1752739986040\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-template/./src/css/menu.css?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1752739986032\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://webpack-template/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/images sync recursive \\.(png%7Cjpg%7Cgif)$":
/*!***********************************************!*\
  !*** ./src/images/ sync \.(png%7Cjpg%7Cgif)$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./action.jpg\": \"./src/images/action.jpg\",\n\t\"./angry.jpg\": \"./src/images/angry.jpg\",\n\t\"./apple.jpg\": \"./src/images/apple.jpg\",\n\t\"./bg_looney_blur.jpg\": \"./src/images/bg_looney_blur.jpg\",\n\t\"./bird.jpg\": \"./src/images/bird.jpg\",\n\t\"./black.jpg\": \"./src/images/black.jpg\",\n\t\"./blouse.jpg\": \"./src/images/blouse.jpg\",\n\t\"./blue.jpg\": \"./src/images/blue.jpg\",\n\t\"./body.jpg\": \"./src/images/body.jpg\",\n\t\"./boot.jpg\": \"./src/images/boot.jpg\",\n\t\"./bread.jpg\": \"./src/images/bread.jpg\",\n\t\"./cake.jpg\": \"./src/images/cake.jpg\",\n\t\"./candy.jpg\": \"./src/images/candy.jpg\",\n\t\"./cat.jpg\": \"./src/images/cat.jpg\",\n\t\"./cheek.jpg\": \"./src/images/cheek.jpg\",\n\t\"./cheese.jpg\": \"./src/images/cheese.jpg\",\n\t\"./chick.jpg\": \"./src/images/chick.jpg\",\n\t\"./chicken.jpg\": \"./src/images/chicken.jpg\",\n\t\"./clothes.jpg\": \"./src/images/clothes.jpg\",\n\t\"./coat.jpg\": \"./src/images/coat.jpg\",\n\t\"./colors.jpg\": \"./src/images/colors.jpg\",\n\t\"./dog.jpg\": \"./src/images/dog.jpg\",\n\t\"./dolphin.jpg\": \"./src/images/dolphin.jpg\",\n\t\"./dress.jpg\": \"./src/images/dress.jpg\",\n\t\"./eye.jpg\": \"./src/images/eye.jpg\",\n\t\"./favicon.png\": \"./src/images/favicon.png\",\n\t\"./fish.jpg\": \"./src/images/fish.jpg\",\n\t\"./food.jpg\": \"./src/images/food.jpg\",\n\t\"./foot.jpg\": \"./src/images/foot.jpg\",\n\t\"./frog.jpg\": \"./src/images/frog.jpg\",\n\t\"./giraffe.jpg\": \"./src/images/giraffe.jpg\",\n\t\"./gray.jpg\": \"./src/images/gray.jpg\",\n\t\"./green.jpg\": \"./src/images/green.jpg\",\n\t\"./hair.jpg\": \"./src/images/hair.jpg\",\n\t\"./hand.jpg\": \"./src/images/hand.jpg\",\n\t\"./happy.jpg\": \"./src/images/happy.jpg\",\n\t\"./horse.jpg\": \"./src/images/horse.jpg\",\n\t\"./juice.jpg\": \"./src/images/juice.jpg\",\n\t\"./laugh.jpg\": \"./src/images/laugh.jpg\",\n\t\"./lion.jpg\": \"./src/images/lion.jpg\",\n\t\"./lips.jpg\": \"./src/images/lips.jpg\",\n\t\"./lose.png\": \"./src/images/lose.png\",\n\t\"./mood.jpg\": \"./src/images/mood.jpg\",\n\t\"./mouse.jpg\": \"./src/images/mouse.jpg\",\n\t\"./nose.jpg\": \"./src/images/nose.jpg\",\n\t\"./open.jpg\": \"./src/images/open.jpg\",\n\t\"./orange.jpg\": \"./src/images/orange.jpg\",\n\t\"./pants.jpg\": \"./src/images/pants.jpg\",\n\t\"./pets.jpg\": \"./src/images/pets.jpg\",\n\t\"./pets_.jpg\": \"./src/images/pets_.jpg\",\n\t\"./pig.jpg\": \"./src/images/pig.jpg\",\n\t\"./play.jpg\": \"./src/images/play.jpg\",\n\t\"./point.jpg\": \"./src/images/point.jpg\",\n\t\"./purple.jpg\": \"./src/images/purple.jpg\",\n\t\"./rabbit.jpg\": \"./src/images/rabbit.jpg\",\n\t\"./red.jpg\": \"./src/images/red.jpg\",\n\t\"./ride.jpg\": \"./src/images/ride.jpg\",\n\t\"./run.jpg\": \"./src/images/run.jpg\",\n\t\"./sad.jpg\": \"./src/images/sad.jpg\",\n\t\"./scared.jpg\": \"./src/images/scared.jpg\",\n\t\"./sheep.jpg\": \"./src/images/sheep.jpg\",\n\t\"./shirt.jpg\": \"./src/images/shirt.jpg\",\n\t\"./shoe.jpg\": \"./src/images/shoe.jpg\",\n\t\"./sing.jpg\": \"./src/images/sing.jpg\",\n\t\"./skip.jpg\": \"./src/images/skip.jpg\",\n\t\"./skirt.jpg\": \"./src/images/skirt.jpg\",\n\t\"./smile.jpg\": \"./src/images/smile.jpg\",\n\t\"./surprised.jpg\": \"./src/images/surprised.jpg\",\n\t\"./swim.jpg\": \"./src/images/swim.jpg\",\n\t\"./tired.jpg\": \"./src/images/tired.jpg\",\n\t\"./tongue.jpg\": \"./src/images/tongue.jpg\",\n\t\"./turtle.jpg\": \"./src/images/turtle.jpg\",\n\t\"./watermelon.jpg\": \"./src/images/watermelon.jpg\",\n\t\"./white.jpg\": \"./src/images/white.jpg\",\n\t\"./win.png\": \"./src/images/win.png\",\n\t\"./yellow.jpg\": \"./src/images/yellow.jpg\",\n\t\"./zoo.jpg\": \"./src/images/zoo.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images sync recursive \\\\.(png%7Cjpg%7Cgif)$\";\n\n//# sourceURL=webpack://webpack-template/./src/images/_sync_\\.(png%257Cjpg%257Cgif)$?\n}");

/***/ }),

/***/ "./src/images/action.jpg":
/*!*******************************!*\
  !*** ./src/images/action.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/action.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/action.jpg?\n}");

/***/ }),

/***/ "./src/images/angry.jpg":
/*!******************************!*\
  !*** ./src/images/angry.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/angry.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/angry.jpg?\n}");

/***/ }),

/***/ "./src/images/apple.jpg":
/*!******************************!*\
  !*** ./src/images/apple.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/apple.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/apple.jpg?\n}");

/***/ }),

/***/ "./src/images/bg_looney_blur.jpg":
/*!***************************************!*\
  !*** ./src/images/bg_looney_blur.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bg_looney_blur.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/bg_looney_blur.jpg?\n}");

/***/ }),

/***/ "./src/images/bird.jpg":
/*!*****************************!*\
  !*** ./src/images/bird.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bird.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/bird.jpg?\n}");

/***/ }),

/***/ "./src/images/black.jpg":
/*!******************************!*\
  !*** ./src/images/black.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/black.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/black.jpg?\n}");

/***/ }),

/***/ "./src/images/blouse.jpg":
/*!*******************************!*\
  !*** ./src/images/blouse.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/blouse.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/blouse.jpg?\n}");

/***/ }),

/***/ "./src/images/blue.jpg":
/*!*****************************!*\
  !*** ./src/images/blue.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/blue.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/blue.jpg?\n}");

/***/ }),

/***/ "./src/images/body.jpg":
/*!*****************************!*\
  !*** ./src/images/body.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/body.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/body.jpg?\n}");

/***/ }),

/***/ "./src/images/boot.jpg":
/*!*****************************!*\
  !*** ./src/images/boot.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/boot.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/boot.jpg?\n}");

/***/ }),

/***/ "./src/images/bread.jpg":
/*!******************************!*\
  !*** ./src/images/bread.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/bread.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/bread.jpg?\n}");

/***/ }),

/***/ "./src/images/cake.jpg":
/*!*****************************!*\
  !*** ./src/images/cake.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/cake.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/cake.jpg?\n}");

/***/ }),

/***/ "./src/images/candy.jpg":
/*!******************************!*\
  !*** ./src/images/candy.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/candy.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/candy.jpg?\n}");

/***/ }),

/***/ "./src/images/cat.jpg":
/*!****************************!*\
  !*** ./src/images/cat.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/cat.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/cat.jpg?\n}");

/***/ }),

/***/ "./src/images/cheek.jpg":
/*!******************************!*\
  !*** ./src/images/cheek.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/cheek.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/cheek.jpg?\n}");

/***/ }),

/***/ "./src/images/cheese.jpg":
/*!*******************************!*\
  !*** ./src/images/cheese.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/cheese.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/cheese.jpg?\n}");

/***/ }),

/***/ "./src/images/chick.jpg":
/*!******************************!*\
  !*** ./src/images/chick.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/chick.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/chick.jpg?\n}");

/***/ }),

/***/ "./src/images/chicken.jpg":
/*!********************************!*\
  !*** ./src/images/chicken.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/chicken.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/chicken.jpg?\n}");

/***/ }),

/***/ "./src/images/clothes.jpg":
/*!********************************!*\
  !*** ./src/images/clothes.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/clothes.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/clothes.jpg?\n}");

/***/ }),

/***/ "./src/images/coat.jpg":
/*!*****************************!*\
  !*** ./src/images/coat.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/coat.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/coat.jpg?\n}");

/***/ }),

/***/ "./src/images/colors.jpg":
/*!*******************************!*\
  !*** ./src/images/colors.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/colors.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/colors.jpg?\n}");

/***/ }),

/***/ "./src/images/dog.jpg":
/*!****************************!*\
  !*** ./src/images/dog.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dog.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/dog.jpg?\n}");

/***/ }),

/***/ "./src/images/dolphin.jpg":
/*!********************************!*\
  !*** ./src/images/dolphin.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dolphin.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/dolphin.jpg?\n}");

/***/ }),

/***/ "./src/images/dress.jpg":
/*!******************************!*\
  !*** ./src/images/dress.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/dress.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/dress.jpg?\n}");

/***/ }),

/***/ "./src/images/eye.jpg":
/*!****************************!*\
  !*** ./src/images/eye.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/eye.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/eye.jpg?\n}");

/***/ }),

/***/ "./src/images/favicon.png":
/*!********************************!*\
  !*** ./src/images/favicon.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/favicon.png\");\n\n//# sourceURL=webpack://webpack-template/./src/images/favicon.png?\n}");

/***/ }),

/***/ "./src/images/fish.jpg":
/*!*****************************!*\
  !*** ./src/images/fish.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fish.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/fish.jpg?\n}");

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/food.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/food.jpg?\n}");

/***/ }),

/***/ "./src/images/foot.jpg":
/*!*****************************!*\
  !*** ./src/images/foot.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/foot.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/foot.jpg?\n}");

/***/ }),

/***/ "./src/images/frog.jpg":
/*!*****************************!*\
  !*** ./src/images/frog.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/frog.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/frog.jpg?\n}");

/***/ }),

/***/ "./src/images/giraffe.jpg":
/*!********************************!*\
  !*** ./src/images/giraffe.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/giraffe.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/giraffe.jpg?\n}");

/***/ }),

/***/ "./src/images/gray.jpg":
/*!*****************************!*\
  !*** ./src/images/gray.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/gray.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/gray.jpg?\n}");

/***/ }),

/***/ "./src/images/green.jpg":
/*!******************************!*\
  !*** ./src/images/green.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/green.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/green.jpg?\n}");

/***/ }),

/***/ "./src/images/hair.jpg":
/*!*****************************!*\
  !*** ./src/images/hair.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/hair.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/hair.jpg?\n}");

/***/ }),

/***/ "./src/images/hand.jpg":
/*!*****************************!*\
  !*** ./src/images/hand.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/hand.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/hand.jpg?\n}");

/***/ }),

/***/ "./src/images/happy.jpg":
/*!******************************!*\
  !*** ./src/images/happy.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/happy.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/happy.jpg?\n}");

/***/ }),

/***/ "./src/images/horse.jpg":
/*!******************************!*\
  !*** ./src/images/horse.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/horse.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/horse.jpg?\n}");

/***/ }),

/***/ "./src/images/juice.jpg":
/*!******************************!*\
  !*** ./src/images/juice.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/juice.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/juice.jpg?\n}");

/***/ }),

/***/ "./src/images/laugh.jpg":
/*!******************************!*\
  !*** ./src/images/laugh.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/laugh.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/laugh.jpg?\n}");

/***/ }),

/***/ "./src/images/lion.jpg":
/*!*****************************!*\
  !*** ./src/images/lion.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/lion.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/lion.jpg?\n}");

/***/ }),

/***/ "./src/images/lips.jpg":
/*!*****************************!*\
  !*** ./src/images/lips.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/lips.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/lips.jpg?\n}");

/***/ }),

/***/ "./src/images/lose.png":
/*!*****************************!*\
  !*** ./src/images/lose.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/lose.png\");\n\n//# sourceURL=webpack://webpack-template/./src/images/lose.png?\n}");

/***/ }),

/***/ "./src/images/mood.jpg":
/*!*****************************!*\
  !*** ./src/images/mood.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/mood.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/mood.jpg?\n}");

/***/ }),

/***/ "./src/images/mouse.jpg":
/*!******************************!*\
  !*** ./src/images/mouse.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/mouse.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/mouse.jpg?\n}");

/***/ }),

/***/ "./src/images/nose.jpg":
/*!*****************************!*\
  !*** ./src/images/nose.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/nose.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/nose.jpg?\n}");

/***/ }),

/***/ "./src/images/open.jpg":
/*!*****************************!*\
  !*** ./src/images/open.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/open.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/open.jpg?\n}");

/***/ }),

/***/ "./src/images/orange.jpg":
/*!*******************************!*\
  !*** ./src/images/orange.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/orange.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/orange.jpg?\n}");

/***/ }),

/***/ "./src/images/pants.jpg":
/*!******************************!*\
  !*** ./src/images/pants.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pants.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/pants.jpg?\n}");

/***/ }),

/***/ "./src/images/pets.jpg":
/*!*****************************!*\
  !*** ./src/images/pets.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pets.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/pets.jpg?\n}");

/***/ }),

/***/ "./src/images/pets_.jpg":
/*!******************************!*\
  !*** ./src/images/pets_.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pets_.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/pets_.jpg?\n}");

/***/ }),

/***/ "./src/images/pig.jpg":
/*!****************************!*\
  !*** ./src/images/pig.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pig.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/pig.jpg?\n}");

/***/ }),

/***/ "./src/images/play.jpg":
/*!*****************************!*\
  !*** ./src/images/play.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/play.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/play.jpg?\n}");

/***/ }),

/***/ "./src/images/point.jpg":
/*!******************************!*\
  !*** ./src/images/point.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/point.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/point.jpg?\n}");

/***/ }),

/***/ "./src/images/purple.jpg":
/*!*******************************!*\
  !*** ./src/images/purple.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/purple.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/purple.jpg?\n}");

/***/ }),

/***/ "./src/images/rabbit.jpg":
/*!*******************************!*\
  !*** ./src/images/rabbit.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/rabbit.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/rabbit.jpg?\n}");

/***/ }),

/***/ "./src/images/red.jpg":
/*!****************************!*\
  !*** ./src/images/red.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/red.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/red.jpg?\n}");

/***/ }),

/***/ "./src/images/ride.jpg":
/*!*****************************!*\
  !*** ./src/images/ride.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/ride.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/ride.jpg?\n}");

/***/ }),

/***/ "./src/images/run.jpg":
/*!****************************!*\
  !*** ./src/images/run.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/run.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/run.jpg?\n}");

/***/ }),

/***/ "./src/images/sad.jpg":
/*!****************************!*\
  !*** ./src/images/sad.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/sad.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/sad.jpg?\n}");

/***/ }),

/***/ "./src/images/scared.jpg":
/*!*******************************!*\
  !*** ./src/images/scared.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/scared.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/scared.jpg?\n}");

/***/ }),

/***/ "./src/images/sheep.jpg":
/*!******************************!*\
  !*** ./src/images/sheep.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/sheep.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/sheep.jpg?\n}");

/***/ }),

/***/ "./src/images/shirt.jpg":
/*!******************************!*\
  !*** ./src/images/shirt.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/shirt.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/shirt.jpg?\n}");

/***/ }),

/***/ "./src/images/shoe.jpg":
/*!*****************************!*\
  !*** ./src/images/shoe.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/shoe.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/shoe.jpg?\n}");

/***/ }),

/***/ "./src/images/sing.jpg":
/*!*****************************!*\
  !*** ./src/images/sing.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/sing.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/sing.jpg?\n}");

/***/ }),

/***/ "./src/images/skip.jpg":
/*!*****************************!*\
  !*** ./src/images/skip.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/skip.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/skip.jpg?\n}");

/***/ }),

/***/ "./src/images/skirt.jpg":
/*!******************************!*\
  !*** ./src/images/skirt.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/skirt.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/skirt.jpg?\n}");

/***/ }),

/***/ "./src/images/smile.jpg":
/*!******************************!*\
  !*** ./src/images/smile.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/smile.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/smile.jpg?\n}");

/***/ }),

/***/ "./src/images/surprised.jpg":
/*!**********************************!*\
  !*** ./src/images/surprised.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/surprised.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/surprised.jpg?\n}");

/***/ }),

/***/ "./src/images/swim.jpg":
/*!*****************************!*\
  !*** ./src/images/swim.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/swim.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/swim.jpg?\n}");

/***/ }),

/***/ "./src/images/tired.jpg":
/*!******************************!*\
  !*** ./src/images/tired.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/tired.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/tired.jpg?\n}");

/***/ }),

/***/ "./src/images/tongue.jpg":
/*!*******************************!*\
  !*** ./src/images/tongue.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/tongue.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/tongue.jpg?\n}");

/***/ }),

/***/ "./src/images/turtle.jpg":
/*!*******************************!*\
  !*** ./src/images/turtle.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/turtle.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/turtle.jpg?\n}");

/***/ }),

/***/ "./src/images/watermelon.jpg":
/*!***********************************!*\
  !*** ./src/images/watermelon.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/watermelon.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/watermelon.jpg?\n}");

/***/ }),

/***/ "./src/images/white.jpg":
/*!******************************!*\
  !*** ./src/images/white.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/white.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/white.jpg?\n}");

/***/ }),

/***/ "./src/images/win.png":
/*!****************************!*\
  !*** ./src/images/win.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/win.png\");\n\n//# sourceURL=webpack://webpack-template/./src/images/win.png?\n}");

/***/ }),

/***/ "./src/images/yellow.jpg":
/*!*******************************!*\
  !*** ./src/images/yellow.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/yellow.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/yellow.jpg?\n}");

/***/ }),

/***/ "./src/images/zoo.jpg":
/*!****************************!*\
  !*** ./src/images/zoo.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/zoo.jpg\");\n\n//# sourceURL=webpack://webpack-template/./src/images/zoo.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/button.css */ \"./src/css/button.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_flip_card_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/flip-card.css */ \"./src/css/flip-card.css\");\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/menu.css */ \"./src/css/menu.css\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\n\n__webpack_require__(\"./src/images sync recursive \\\\.(png%7Cjpg%7Cgif)$\");\n__webpack_require__(\"./src/svg sync recursive \\\\.svg$\");\n__webpack_require__(\"./src/audio sync recursive \\\\.mp3$\");\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("{/* eslint-disable no-loop-func */\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-restricted-globals */\n/* eslint-disable no-undef */\nconst colors = ['darkblue', 'brown', 'lightgreen', 'olive', 'green', 'pink', 'blue', 'brown'];\nconst topics = ['Zoo', 'Pets', 'Mood', 'Clothes', 'Food', 'Action', 'Colors', 'Body'];\nconst word = [\n  ['bird', 'fish', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'],\n  ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'],\n  ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'],\n  ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'],\n  ['orange', 'bread', 'cheese', 'watermelon', 'cake', 'juice', 'apple', 'candy'],\n  ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'],\n  ['red', 'white', 'green', 'yellow', 'black', 'purple', 'blue', 'gray'],\n  ['nose', 'lips', 'hair', 'cheek', 'tongue', 'eye', 'hand', 'foot'],\n];\nconst translation = [\n  ['chim', 'cá', 'ếch', 'hươu cao cổ', 'sư tử', 'chuột', 'rùa', 'cá heo'],\n  ['mèo', 'gà con', 'gà', 'chó', 'ngựa', 'heo', 'thỏ', 'cừu'],\n  ['buồn', 'tức giận', 'vui', 'mệt', 'ngạc nhiên', 'sợ hãi', 'cười mỉm', 'cười lớn'],\n  ['váy ngắn', 'quần', 'áo kiểu', 'váy liền', 'ủng', 'áo sơ mi', 'áo khoác', 'giày'],\n  ['cam', 'bánh mì', 'phô mai', 'dưa hấu', 'bánh ngọt', 'nước ép', 'táo', 'kẹo'],\n  ['mở', 'chơi', 'chỉ', 'cưỡi', 'chạy', 'hát', 'nhảy dây', 'bơi'],\n  ['đỏ', 'trắng', 'xanh lá', 'vàng', 'đen', 'tím', 'xanh dương', 'xám'],\n  ['mũi', 'môi', 'tóc', 'má', 'lưỡi', 'mắt', 'tay', 'chân'],\n];\n\nlet diffWords = [];\nlet diffWordsTranslations = [];\n\nlet indexOfWord;\nlet selectedTopic;\nconst entryTitle = document.querySelector('.entry-title');\nconst blackboard = document.querySelector('.blackboard');\nconst mobileToggle = document.querySelector('.mobileToggle');\nmobileToggle.disabled = true;\nconst row = document.querySelector('.row');\nconst toggleWrapper = document.querySelector('.toggleWrapper');\nlet hasGameStarted;\nconst gameBoard = document.querySelector('.gameboard');\nconst result = document.querySelector('.result');\nlet isDifficultWords = false;\n\nlet correctAnswersCount = 0;\nlet mistakesCount = 0;\nlet wordViewsCount = 0;\n\ndocument.body.style.background = \"url('images/bg_looney_blur.jpg')\";\ndocument.body.style.backgroundRepeat = 'no-repeat';\ndocument.body.style.backgroundSize = 'cover';\n\n// START SCREEN\nconst getStartScreen = (x) => {\n  if (x === true) {\n    const getCardsWithTopics = () => {\n      for (let i = 0; i < colors.length; i += 1) {\n        const box = document.createElement('div');\n        box.classList.add('box', 'border', 'shadow', colors[i]);\n        row.appendChild(box);\n        const boxImage = document.createElement('div');\n        boxImage.classList.add('box-image', 'center');\n        box.appendChild(boxImage);\n        const boxTitle = document.createElement('div');\n        boxTitle.classList.add('box-title', 'center');\n        boxTitle.textContent = topics[i];\n        box.appendChild(boxTitle);\n        const image = document.createElement('img');\n        image.setAttribute('draggable', false);\n        image.src = `images/${topics[i].toLowerCase()}.jpg`;\n        image.classList.add('out');\n        boxImage.appendChild(image);\n        box.addEventListener('click', () => {\n          if (!isClassroom) {\n            selectedTopic = topics[i];\n            indexOfWord = i;\n            getClassroomScreen(word, translation);\n          }\n        });\n\n        // IF PUSH TOGGLE BUTTON\n        toggleWrapper.addEventListener('click', () => {\n          box.classList.add('warning');\n          setTimeout(() => {\n            box.classList.remove('warning');\n          }, 600);\n        });\n      }\n    };\n    getCardsWithTopics();\n  } else {\n    row.innerHTML = '';\n    row.style.display = 'none';\n  }\n};\n\n// BURGER MENU\nconst getMenuItems = () => {\n  const menu = document.getElementById('menu');\n  const menuCheckbox = document.querySelector('.checkbox');\n  const menuToggle = document.querySelector('.menuToggle');\n  const homeItem = document.createElement('li');\n  homeItem.innerHTML = '&#127968;';\n  menu.appendChild(homeItem);\n  const menuStatsItem = document.createElement('li');\n  menuStatsItem.classList.add('item-menu');\n  menuStatsItem.textContent = 'Stats';\n  menu.appendChild(menuStatsItem);\n  for (let i = 0; i < topics.length; i += 1) {\n    const menuItem = document.createElement('li');\n    menuItem.textContent = topics[i];\n    menuItem.style.color = `var(--${colors[i]})`;\n    menu.appendChild(menuItem);\n    menuItem.addEventListener('mouseover', () => {\n      menuItem.style.background = `var(--${colors[i]})`;\n    });\n    menuItem.addEventListener('mouseout', () => {\n      menuItem.style.background = 'transparent';\n    });\n\n    // CLICK ITEM\n    menuItem.addEventListener('click', () => {\n      selectedTopic = topics[i];\n      indexOfWord = i;\n      setTimeout(() => {\n        menuCheckbox.checked = false;\n        menuToggle.style.position = 'relative';\n      }, 120);\n      blackboard.textContent = '';\n      gameBoard.textContent = '';\n      mobileToggle.checked = false;\n      isDifficultWords = false;\n      changeMode();\n      getClassroomScreen(word, translation);\n    });\n  }\n\n  // CLICK STATS\n  menuStatsItem.addEventListener('click', () => {\n    showStats();\n    setTimeout(() => {\n      menuCheckbox.checked = false;\n      menuToggle.style.position = 'relative';\n    }, 120);\n  });\n\n  homeItem.addEventListener('click', () => {\n    menuCheckbox.checked = false;\n    setTimeout(() => {\n      location.reload();\n    }, 500);\n  });\n\n  window.addEventListener('click', (e) => {\n    if (!menuCheckbox.contains(e.target) && !menu.contains(e.target)) {\n      menu.style.position = 'fixed';\n      menuCheckbox.checked = false;\n    }\n    menuToggle.style.position = (menuCheckbox.checked) ? 'fixed' : 'relative';\n  });\n  menuCheckbox.addEventListener('mouseover', () => {\n    menuToggle.classList.add('menuToggle_hover');\n  });\n  menuCheckbox.addEventListener('mouseout', () => {\n    menuToggle.classList.remove('menuToggle_hover');\n  });\n};\n\nlet isClassroom = false;\n\n// CLASSROOM\nlet getClassroomScreen = (array) => {\n  isClassroom = true;\n  entryTitle.textContent = (!isDifficultWords) ? selectedTopic : 'Difficult Words';\n  mobileToggle.disabled = false;\n  getStartScreen(false);\n  const getCardsWithWords = () => {\n    blackboard.classList.add('row');\n\n    // CREATE FRONT CARD\n    for (let i = 0; i < array[indexOfWord].length; i += 1) {\n      const flipCard = document.createElement('div');\n      flipCard.classList.add('card', 'flip-card');\n      blackboard.appendChild(flipCard);\n      const flipCardInner = document.createElement('div');\n      flipCardInner.classList.add('flip-card-inner');\n      flipCard.appendChild(flipCardInner);\n      const flipCardFront = document.createElement('div');\n      flipCardFront.classList.add('flip-card-front', 'border', 'shadow', colors[i]);\n      flipCardInner.appendChild(flipCardFront);\n      const flipCardFrontImageContainer = document.createElement('div');\n      flipCardFrontImageContainer.classList.add('box-image');\n      flipCardFront.appendChild(flipCardFrontImageContainer);\n      const flipCardFrontImage = document.createElement('img');\n      flipCardFrontImage.src = `images/${array[indexOfWord][i]}.jpg`;\n      flipCardFrontImage.setAttribute('draggable', false);\n      flipCardFrontImageContainer.appendChild(flipCardFrontImage);\n      const flipCardFrontTitle = document.createElement('div');\n      flipCardFrontTitle.classList.add('card-title', 'center');\n      flipCardFrontTitle.textContent = array[indexOfWord][i];\n      flipCardFront.appendChild(flipCardFrontTitle);\n      const flipCardFrontButtonContainer = document.createElement('div');\n      flipCardFrontButtonContainer.classList.add('card-button', 'center');\n      flipCardFrontTitle.appendChild(flipCardFrontButtonContainer);\n      const flipCardFrontButton = document.createElement('div');\n      flipCardFrontButton.classList.add('flip-button');\n      flipCardFrontButtonContainer.appendChild(flipCardFrontButton);\n      const flipCardFrontButtonImage = document.createElement('img');\n      flipCardFrontButtonImage.src = 'svg/rotate.svg';\n      flipCardFrontButton.appendChild(flipCardFrontButtonImage);\n\n      // CREATE SOUND\n      const audioFromFlipCard = document.createElement('audio');\n      audioFromFlipCard.src = `audio/${array[indexOfWord][i]}.mp3`;\n      audioFromFlipCard.classList.add('sound');\n      flipCardInner.appendChild(audioFromFlipCard);\n\n      // CREATE BACK CARD\n      const flipCardBack = document.createElement('div');\n      flipCardBack.classList.add('flip-card-back', 'border', 'shadow');\n      flipCardInner.appendChild(flipCardBack);\n      const flipCardBackImageContainer = document.createElement('div');\n      flipCardBackImageContainer.classList.add('box-image');\n      flipCardBack.appendChild(flipCardBackImageContainer);\n      const flipCardBackImage = document.createElement('img');\n      flipCardBackImage.src = `images/${array[indexOfWord][i]}.jpg`;\n      flipCardBackImageContainer.appendChild(flipCardBackImage);\n      const flipCardBackTitle = document.createElement('div');\n      flipCardBackTitle.classList.add('box-title', 'center');\n      flipCardBackTitle.textContent = translation[indexOfWord][i];\n      flipCardBack.appendChild(flipCardBackTitle);\n\n      // ⬇️ THÊM ĐOẠN NÀY NGAY DƯỚI\n      flipCardBack.addEventListener('click', () => {\n        flipCard.classList.remove('flip-card-rotate');\n        flipCardFrontButton.style.opacity = '1';\n      });\n\n      // SOUNDING WORD\n      flipCardFrontImageContainer.addEventListener('click', () => {\n        audioFromFlipCard.play();\n        audioFromFlipCard.currentTime = 0;\n      });\n\n      // FLIP IN CARD\n      flipCardFrontTitle.addEventListener('click', () => {\n        flipCard.classList.add('flip-card-rotate');\n        flipCardFrontButton.style.opacity = '0';\n        flipCardBack.style.visibility = 'visible';\n        wordViewsCount = localStorage.getItem(`${array[indexOfWord][i]}`);\n        wordViewsCount++;\n        localStorage.setItem(`${array[indexOfWord][i]}`, wordViewsCount);\n      });\n\n      // FLIP OUT CARD\n      // window.addEventListener('mouseover', (e) => {\n      //   if (!flipCard.contains(e.target)) {\n      //     setTimeout(() => {\n      //       flipCard.classList.remove('flip-card-rotate');\n      //       flipCardFrontButton.style.opacity = '1';\n      //     }, 100);\n      //   }\n      // });\n    }\n  };\n  statsBoard.innerHTML = '';\n  getCardsWithWords();\n};\n\n// GAME\nconst getGameScreen = (arr) => {\n  let getNewWord;\n  const gameBoardContainer = document.createElement('div');\n  gameBoardContainer.classList.add('gameboard-container', 'center');\n  gameBoard.appendChild(gameBoardContainer);\n  const gameButtonContainer = document.createElement('div');\n  gameButtonContainer.classList.add('center');\n  gameBoard.appendChild(gameButtonContainer);\n  const gameButton = document.createElement('button');\n  gameButton.classList.add('game-button');\n  gameButton.textContent = 'Start';\n  gameButtonContainer.appendChild(gameButton);\n\n  const array = [];\n  let index = 0;\n  for (let i = 0; i < arr[indexOfWord].length; i += 1) {\n    array.push(index);\n    index += 1;\n  } // FOR SHUFFLE\n  let wordID;\n  let unsolvedWordsCount = arr[indexOfWord].length - 1;\n  let isSolved;\n  let isWin = false;\n  let greenStarsCount = 0;\n  let grayStarsCount = 0;\n\n  hasGameStarted = false;\n  entryTitle.style.display = 'none';\n  result.style.display = 'block';\n  result.textContent = 'Result: ';\n\n  // SHUFFLE WORDS STACK\n  function shuffle(indexArray) {\n    indexArray.sort(() => Math.random() - 0.5);\n  }\n\n  // PUSH START GAME BUTTON\n  gameButton.addEventListener('click', () => {\n    if (!hasGameStarted) {\n      gameButton.textContent = 'Repeat';\n      shuffle(array);\n      getNewWord();\n    } else {\n      getNewWord();\n    }\n  });\n\n  // CREATE CARDS\n  for (let i = 0; i < arr[indexOfWord].length; i += 1) {\n    const gameCard = document.createElement('div');\n    gameCard.classList.add('card', 'border', 'shadow', colors[i]);\n    gameBoardContainer.appendChild(gameCard);\n    const gameCardImageContainer = document.createElement('div');\n    gameCardImageContainer.classList.add('game-box-image');\n    gameCard.appendChild(gameCardImageContainer);\n    const gameCardImage = document.createElement('img');\n    gameCardImage.src = `images/${arr[indexOfWord][i]}.jpg`;\n    gameCardImage.setAttribute('draggable', false);\n    gameCardImageContainer.appendChild(gameCardImage);\n\n    // SOUNDING CARDS\n    const soundingOfWord = document.createElement('audio');\n    soundingOfWord.classList.add('sounding');\n    soundingOfWord.src = `audio/${arr[indexOfWord][i]}.mp3`;\n    gameBoardContainer.appendChild(soundingOfWord);\n\n    // TAB THE CARD ACTION\n    gameCard.addEventListener('click', () => {\n      if (!hasGameStarted) {\n        gameCard.classList.add('warning');\n        setTimeout(() => {\n          gameCard.classList.remove('warning');\n          window.scrollTo(0, document.body.scrollHeight);\n          gameButton.classList.add('warning');\n        }, 600);\n        setTimeout(() => {\n          gameButton.classList.remove('warning');\n        }, 1200);\n      } else {\n        if (i === wordID) {\n          isSolved = true;\n          unsolvedWordsCount -= 1;\n          gameCard.style.filter = 'blur(10px)';\n          gameCard.style.opacity = '0.5';\n          gameCard.classList.add('disabled');\n          const starGreen = document.createElement('span');\n          starGreen.classList.add('fa', 'fa-star', 'correct');\n          result.appendChild(starGreen);\n          if ('localStorage' in window && window.localStorage !== null) {\n            correctAnswersCount = localStorage.getItem(`correct-${arr[indexOfWord][i]}`);\n            correctAnswersCount++;\n            localStorage.setItem(`correct-${arr[indexOfWord][i]}`, correctAnswersCount);\n          }\n        } else {\n          isSolved = false;\n          gameCard.classList.add('warning');\n          grayStarsCount += 1;\n          const starGray = document.createElement('span');\n          starGray.classList.add('fa', 'fa-star', 'error');\n          result.appendChild(starGray);\n          setTimeout(() => {\n            gameCard.classList.remove('warning');\n          }, 600);\n          if ('localStorage' in window && window.localStorage !== null) {\n            mistakesCount = localStorage.getItem(`fail-${arr[indexOfWord][wordID]}`);\n            mistakesCount++;\n            localStorage.setItem(`fail-${arr[indexOfWord][wordID]}`, mistakesCount);\n          }\n        }\n        if (isSolved) {\n          if (greenStarsCount < arr[indexOfWord].length - 1) {\n            greenStarsCount += 1;\n            setTimeout(getNewWord, 200);\n          } else {\n            isWin = (grayStarsCount === 0);\n            setTimeout(showResult, 1200);\n          }\n        }\n\n        // CORRECT/ERROR SOUND\n        const sound = document.createElement('audio');\n        sound.src = (isSolved) ? 'audio/correct.mp3' : 'audio/error.mp3';\n        gameBoardContainer.appendChild(sound);\n        sound.play();\n      }\n    });\n  }\n\n  //  GET NEW WORD\n  getNewWord = () => {\n    const audioWordPronunciation = document.querySelectorAll('.sounding');\n    if (!hasGameStarted || isSolved) {\n      wordID = array[unsolvedWordsCount];\n      hasGameStarted = true;\n    }\n    audioWordPronunciation[wordID].play();\n    audioWordPronunciation[wordID].currentTime = 0;\n  };\n\n  // RESULT SCREEN\n  let showResult = () => {\n    gameBoard.innerHTML = '';\n    const gameResultImage = document.createElement('img');\n    gameResultImage.classList.add('result-image');\n    gameResultImage.src = (isWin) ? 'images/win.png' : 'images/lose.png';\n    gameBoard.appendChild(gameResultImage);\n\n    const soundOfResult = document.createElement('audio');\n    soundOfResult.src = (isWin) ? 'audio/win.mp3' : 'audio/lose.mp3';\n    gameBoardContainer.appendChild(soundOfResult);\n    setTimeout(() => {\n      soundOfResult.play();\n    }, 400);\n    setTimeout(() => {\n      location.reload();\n    }, 6000);\n  };\n};\n\n// MODE TOGGLE FUNCTION\nlet changeMode = () => {\n  const mode = document.querySelector('.mode');\n  if (mobileToggle.checked) {\n    if (isDifficultWords && diffWords[0].length > 0) {\n      getGameScreen(diffWords);\n    } else {\n      getGameScreen(word);\n    }\n    gameBoard.style.display = 'flex';\n    blackboard.style.display = 'none';\n    mode.textContent = 'Game';\n    result.style.display = 'block';\n    entryTitle.style.display = 'none';\n  } else {\n    gameBoard.innerHTML = '';\n    gameBoard.style.display = 'none';\n    blackboard.style.display = 'flex';\n    mode.textContent = 'Train';\n    result.style.display = 'none';\n    entryTitle.style.display = 'block';\n  }\n};\nmobileToggle.addEventListener('change', changeMode);\n\n// STATS\nlet statsBoard = document.querySelector('.statsboard');\nlet difficultWords = [];\nconst difficultWordsTranslation = [];\nconst statsTitleItems = [\n  'Word', 'Translation', 'Topic', 'Trained', 'Correct', 'Fail',\n];\n\nlet showStats;\n\nconst statsTable = () => {\n  const table = document.createElement('table');\n  table.classList.add('table', 'table_sort');\n  statsBoard.appendChild(table);\n  const thead = document.createElement('thead');\n  thead.classList.add('thead');\n  table.appendChild(thead);\n  const tr = document.createElement('tr');\n  thead.appendChild(tr);\n  for (let i = 0; i < statsTitleItems.length; i += 1) {\n    const td = document.createElement('td');\n    td.textContent = statsTitleItems[i];\n    tr.appendChild(td);\n  }\n  const tbody = document.createElement('tbody');\n  tbody.classList.add('stats');\n  table.appendChild(tbody);\n\n  const getStats = () => {\n    // CLOSE GAME MODE\n    mobileToggle.checked = false;\n    changeMode();\n\n    // RESET ARRAYS\n    difficultWords = [];\n    diffWords = [];\n    diffWordsTranslations = [];\n\n    // CREATE STATS TABLE\n    for (let i = 0; i < word.length; i += 1) {\n      for (let j = 0; j < word[i].length; j += 1) {\n        statsWord = word[i][j];\n        statsTranslation = translation[i][j];\n        const rowOfTable = `<tr><td>${statsWord}</td><td>${statsTranslation}</td><td>${topics[i]}</td><td>${localStorage.getItem(`${statsWord}`) || '0'}</td><td>${localStorage.getItem(`correct-${statsWord}`) || 0}</td><td>${localStorage.getItem(`fail-${statsWord}`) || 0}</td></tr>`;\n        tbody.insertAdjacentHTML('beforeend', rowOfTable);\n        if (localStorage.getItem(`fail-${statsWord}`) > 0) {\n          difficultWords.push(statsWord);\n          difficultWordsTranslation.push(statsTranslation);\n        }\n      }\n    }\n    diffWords.push(difficultWords);\n    diffWordsTranslations.push(difficultWordsTranslation);\n  };\n\n  const statsButtonContainer = document.createElement('div');\n  statsButtonContainer.classList.add('center');\n  statsBoard.appendChild(statsButtonContainer);\n  const statsResetButton = document.createElement('button');\n  statsResetButton.classList.add('stats-button');\n  statsResetButton.textContent = 'Reset';\n  statsButtonContainer.appendChild(statsResetButton);\n  const transitionToDifficultWordsButton = document.createElement('button');\n  transitionToDifficultWordsButton.classList.add('stats-button');\n  transitionToDifficultWordsButton.textContent = 'Difficult Words';\n  statsButtonContainer.appendChild(transitionToDifficultWordsButton);\n\n  statsResetButton.addEventListener('click', () => {\n    localStorage.clear();\n    showStats();\n  });\n\n  const showDifficultWords = () => {\n    isDifficultWords = true;\n    if (diffWords[0].length < 1) {\n      entryTitle.textContent = 'Difficult Words';\n      const message = document.createElement('h2');\n      message.textContent = 'No difficult words';\n      statsBoard.appendChild(message);\n    } else {\n      indexOfWord = 0;\n      getClassroomScreen(diffWords, diffWordsTranslations);\n    }\n  };\n\n  transitionToDifficultWordsButton.addEventListener('click', () => {\n    table.innerHTML = '';\n    statsButtonContainer.innerHTML = '';\n    showDifficultWords();\n  });\n  getStats();\n};\n\nshowStats = () => {\n  getStartScreen(false);\n  result.style.display = 'none';\n  entryTitle.style.display = 'block';\n  entryTitle.textContent = 'STATS';\n  blackboard.innerHTML = '';\n  gameBoard.innerHTML = '';\n  statsBoard.innerHTML = '';\n  statsTable();\n};\n\ngetMenuItems();\ngetStartScreen(true);\n\n\n//# sourceURL=webpack://webpack-template/./src/js/app.js?\n}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/extensions */\n\n\n\n//# sourceURL=webpack://webpack-template/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/svg sync recursive \\.svg$":
/*!******************************!*\
  !*** ./src/svg/ sync \.svg$ ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./iconmonstr-github.svg\": \"./src/svg/iconmonstr-github.svg\",\n\t\"./rotate.svg\": \"./src/svg/rotate.svg\",\n\t\"./rs_school.svg\": \"./src/svg/rs_school.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/svg sync recursive \\\\.svg$\";\n\n//# sourceURL=webpack://webpack-template/./src/svg/_sync_\\.svg$?\n}");

/***/ }),

/***/ "./src/svg/iconmonstr-github.svg":
/*!***************************************!*\
  !*** ./src/svg/iconmonstr-github.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"svg/iconmonstr-github.svg\");\n\n//# sourceURL=webpack://webpack-template/./src/svg/iconmonstr-github.svg?\n}");

/***/ }),

/***/ "./src/svg/rotate.svg":
/*!****************************!*\
  !*** ./src/svg/rotate.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"svg/rotate.svg\");\n\n//# sourceURL=webpack://webpack-template/./src/svg/rotate.svg?\n}");

/***/ }),

/***/ "./src/svg/rs_school.svg":
/*!*******************************!*\
  !*** ./src/svg/rs_school.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"svg/rs_school.svg\");\n\n//# sourceURL=webpack://webpack-template/./src/svg/rs_school.svg?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "style.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d7ad185fbe075bc71431")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/english-for-kids/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_template"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;