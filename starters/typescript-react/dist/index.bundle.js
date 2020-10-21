/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../lib/dist/index.js":
/*!**********************************************************************************!*\
  !*** D:/WebDevelopment/Projekty/Moje/Inzynierka/micro-connect/lib/dist/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "react"));
	else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./src/Component.tsx":
/*!***************************!*\
  !*** ./src/Component.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Component(_a) {
    var component = _a.component;
    // TODO: fix using hooks (probably 2 versions of react, need to alias it)
    var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    // useEffect(() => {
    //   if (elementRef.current) {
    //     component.mount(elementRef.current);
    //   }
    // }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "test");
}
/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),

/***/ "./src/ComponentManager.ts":
/*!*********************************!*\
  !*** ./src/ComponentManager.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ComponentManager = /** @class */ (function () {
    function ComponentManager() {
        this.components = new Map();
    }
    ComponentManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new ComponentManager();
        }
        return this.instance;
    };
    ComponentManager.prototype.registerComponent = function (component) {
        this.components.set(component.uuid, component);
        console.log(this.components);
    };
    return ComponentManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ComponentManager);


/***/ }),

/***/ "./src/ComponentWrapper.ts":
/*!*********************************!*\
  !*** ./src/ComponentWrapper.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _ComponentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentManager */ "./src/ComponentManager.ts");


var ComponentWrapper = /** @class */ (function () {
    function ComponentWrapper(_a) {
        var mountElement = _a.mountElement, unmountElement = _a.unmountElement;
        this.componentManager = _ComponentManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
        this.mountElement = mountElement;
        this.unmountElement = unmountElement;
        this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    }
    ComponentWrapper.prototype.mount = function (element) {
        if (!element) {
            console.error('Could not find element with id root. Mounting aborted.');
            return;
        }
        this.componentManager.registerComponent(this);
        this.mountElement(element);
    };
    return ComponentWrapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (ComponentWrapper);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ComponentManager, ComponentWrapper, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentManager */ "./src/ComponentManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentManager", function() { return _ComponentManager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ComponentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentWrapper */ "./src/ComponentWrapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentWrapper", function() { return _ComponentWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/Component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _Component__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","root":"React"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby1jb25uZWN0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YxLmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9zcmMvQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9taWNyby1jb25uZWN0Ly4vc3JjL0NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC8uL3NyYy9Db21wb25lbnRXcmFwcGVyLnRzIiwid2VicGFjazovL21pY3JvLWNvbm5lY3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWljcm8tY29ubmVjdC9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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bE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaWNyby1jb25uZWN0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pY3JvLWNvbm5lY3RcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbi8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tfaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IE47ICsrX2kyKSB7XG4gICAgdmFyIFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBIWzBdO1xuICAgIHZhciBiID0gSFsxXTtcbiAgICB2YXIgYyA9IEhbMl07XG4gICAgdmFyIGQgPSBIWzNdO1xuICAgIHZhciBlID0gSFs0XTtcblxuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7IC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG5cbnZhciBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IHN0cmluZ2lmeShiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjE7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1LmpzJztcbnZhciB2MyA9IHYzNSgndjMnLCAweDMwLCBtZDUpO1xuZXhwb3J0IGRlZmF1bHQgdjM7IiwiaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZS5qcyc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5leHBvcnQgdmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IHZhciBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9IHBhcnNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdpZnkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IHNoYTEgZnJvbSAnLi9zaGExLmpzJztcbnZhciB2NSA9IHYzNSgndjUnLCAweDUwLCBzaGExKTtcbmV4cG9ydCBkZWZhdWx0IHY1OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc3Vic3RyKDE0LCAxKSwgMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJzaW9uOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb21wb25lbnRXcmFwcGVyIGZyb20gXCIuL0NvbXBvbmVudFdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudFByb3BzIHtcclxuICBjb21wb25lbnQ6IENvbXBvbmVudFdyYXBwZXI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBDb21wb25lbnQoe2NvbXBvbmVudH06IElDb21wb25lbnRQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICAvLyBUT0RPOiBmaXggdXNpbmcgaG9va3MgKHByb2JhYmx5IDIgdmVyc2lvbnMgb2YgcmVhY3QsIG5lZWQgdG8gYWxpYXMgaXQpXHJcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChlbGVtZW50UmVmLmN1cnJlbnQpIHtcclxuICAvLyAgICAgY29tcG9uZW50Lm1vdW50KGVsZW1lbnRSZWYuY3VycmVudCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGRpdj50ZXN0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7IiwiaW1wb3J0IENvbXBvbmVudFdyYXBwZXIgZnJvbSBcIi4vQ29tcG9uZW50V3JhcHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IENvbXBvbmVudE1hbmFnZXI7XHJcbiAgcHJpdmF0ZSBjb21wb25lbnRzOiBNYXA8c3RyaW5nLCBDb21wb25lbnRXcmFwcGVyPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50V3JhcHBlcikge1xyXG4gICAgdGhpcy5jb21wb25lbnRzLnNldChjb21wb25lbnQudXVpZCwgY29tcG9uZW50KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xyXG4gIH1cclxufSIsImltcG9ydCB7djQgYXMgdXVpZH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuL0NvbXBvbmVudE1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIElNb3VudEVsZW1lbnQgPSAocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIElVbm1vdW50RWxlbWVudCA9IChwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnN0cnVjdG9yQXJncyB7XHJcbiAgbW91bnRFbGVtZW50OiBJTW91bnRFbGVtZW50O1xyXG4gIHVubW91bnRFbGVtZW50OiBJVW5tb3VudEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFdyYXBwZXIge1xyXG4gIHV1aWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjb21wb25lbnRNYW5hZ2VyOiBDb21wb25lbnRNYW5hZ2VyID0gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdW50RWxlbWVudDogSU1vdW50RWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHVubW91bnRFbGVtZW50OiBJVW5tb3VudEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHttb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50fTogSUNvbnN0cnVjdG9yQXJncykge1xyXG4gICAgdGhpcy5tb3VudEVsZW1lbnQgPSBtb3VudEVsZW1lbnQ7XHJcbiAgICB0aGlzLnVubW91bnRFbGVtZW50ID0gdW5tb3VudEVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy51dWlkID0gdXVpZCgpO1xyXG4gIH1cclxuXHJcbiAgbW91bnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCBlbGVtZW50IHdpdGggaWQgcm9vdC4gTW91bnRpbmcgYWJvcnRlZC4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5yZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLm1vdW50RWxlbWVudChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIENvbXBvbmVudE1hbmFnZXJ9IGZyb20gJy4vQ29tcG9uZW50TWFuYWdlcic7XHJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnRXcmFwcGVyfSBmcm9tICcuL0NvbXBvbmVudFdyYXBwZXInO1xyXG5leHBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50LCBJQ29tcG9uZW50UHJvcHN9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function App() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "TypeScript React template."));
}
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lukasz_starosta_micro_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lukasz-starosta/micro-connect */ "../../lib/dist/index.js");
/* harmony import */ var _lukasz_starosta_micro_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lukasz_starosta_micro_connect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");




var StrictModeApp = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (new _lukasz_starosta_micro_connect__WEBPACK_IMPORTED_MODULE_2__["ComponentWrapper"]({
    mountElement: function (parentElement) { return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StrictModeApp, null), parentElement); },
    unmountElement: (function (parentElement) { console.info("unmount from " + parentElement); })
}));


/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","root":"React"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),

/***/ "react-dom":
/*!***********************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0Q6L1dlYkRldmVsb3BtZW50L1Byb2pla3R5L01vamUvSW56eW5pZXJrYS9taWNyby1jb25uZWN0L2xpYi9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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O0FBQ0Esa0dBQWtHOztBQUVsRztBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsa0VBQWtFLEVBQUU7O0FBRTdLO0FBQ0EseUdBQXlHLGtFQUFrRSxFQUFFOztBQUU3SztBQUNBLGtHQUFrRywyREFBMkQsRUFBRTs7Ozs7OztBQU8vSixPQUFPOztBQUVQO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQXNEO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQLFVBQVU7QUFDVixDQUFDO0FBQ0QsMkNBQTJDLGNBQWMsMjcyQzs7Ozs7Ozs7Ozs7O0FDeGlDekQ7QUFBQTtBQUFBO0FBQTBCO0FBQzFCO0FBQ0EsWUFBWSw0Q0FBSztBQUNqQjtBQUNlLGtFQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNPO0FBQ2lDO0FBQzFDO0FBQ3hCO0FBQ0EsV0FBVyw0Q0FBSyxlQUFlLDRDQUFLO0FBQ3BDLFFBQVEsNENBQUssZUFBZSw0Q0FBRztBQUMvQjtBQUNlLG1FQUFJLCtFQUFnQjtBQUNuQyw0Q0FBNEMsUUFBUSxnREFBUSxRQUFRLDRDQUFLLG9EQUFvRCxFQUFFO0FBQy9ILCtDQUErQywrQ0FBK0MsRUFBRTtBQUNoRyxDQUFDLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7O0FDWEgsMkI7Ozs7Ozs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWljcm8tY29ubmVjdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaWNyby1jb25uZWN0XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IHYxLCB2MywgdjQsIHY1LCBOSUwsIHZlcnNpb24sIHZhbGlkYXRlLCBzdHJpbmdpZnksIHBhcnNlICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92MV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92MS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInYxXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3YxX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92M19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92My5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInYzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3YzX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92NF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92NC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInY0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3Y0X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92NV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92NS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInY1XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3Y1X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9uaWxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbmlsLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk5JTFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9uaWxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ZlcnNpb25fanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdmVyc2lvbi5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwidmVyc2lvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF92ZXJzaW9uX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92YWxpZGF0ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92YWxpZGF0ZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInZhbGlkYXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3ZhbGlkYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdHJpbmdpZnlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RyaW5naWZ5LmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInN0cmluZ2lmeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zdHJpbmdpZnlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BhcnNlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BhcnNlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwicGFyc2VcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcGFyc2VfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbWQ1LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIHZhciB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICB2YXIgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobWQ1KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25pbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uaWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICgnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92YWxpZGF0ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92YWxpZGF0ZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qc1wiKTtcblxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghT2JqZWN0KF92YWxpZGF0ZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChwYXJzZSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICgvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2kpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJuZzsgfSk7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbi8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoc2hhMSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdmFsaWRhdGVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdmFsaWRhdGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanNcIik7XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCFPYmplY3QoX3ZhbGlkYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChzdHJpbmdpZnkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcm5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JuZy5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3N0cmluZ2lmeV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdHJpbmdpZnkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzXCIpO1xuXG4gLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZ19qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSkoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IE9iamVjdChfc3RyaW5naWZ5X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKShiKTtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh2MSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF92MzVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdjM1LmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWQ1X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21kNS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanNcIik7XG5cblxudmFyIHYzID0gT2JqZWN0KF92MzVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0pKCd2MycsIDB4MzAsIF9tZDVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0pO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh2Myk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjM1LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogRE5TLCBVUkwsIGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRE5TXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRE5TOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJVUkxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBVUkw7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdHJpbmdpZnlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3RyaW5naWZ5LmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcGFyc2VfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcGFyc2UuanMgKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcGFyc2UuanNcIik7XG5cblxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxudmFyIEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xudmFyIFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSBPYmplY3QoX3BhcnNlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmIChuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0KF9zdHJpbmdpZnlfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0pKGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcm5nX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JuZy5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3N0cmluZ2lmeV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdHJpbmdpZnkuanMgKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzXCIpO1xuXG5cblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmdfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0pKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QoX3N0cmluZ2lmeV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSkocm5kcyk7XG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAodjQpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdjM1X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3YzNS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MzUuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NoYTFfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2hhMS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzXCIpO1xuXG5cbnZhciB2NSA9IE9iamVjdChfdjM1X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKSgndjUnLCAweDUwLCBfc2hhMV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHY1KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3JlZ2V4X2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JlZ2V4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzXCIpO1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXhfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0udGVzdCh1dWlkKTtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh2YWxpZGF0ZSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92ZXJzaW9uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ZhbGlkYXRlX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZhbGlkYXRlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzXCIpO1xuXG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoIU9iamVjdChfdmFsaWRhdGVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0pKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnN1YnN0cigxNCwgMSksIDE2KTtcbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh2ZXJzaW9uKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvQ29tcG9uZW50LnRzeFwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL0NvbXBvbmVudC50c3ggKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISByZWFjdCAqLyBcInJlYWN0XCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG5cclxuZnVuY3Rpb24gQ29tcG9uZW50KF9hKSB7XHJcbiAgICB2YXIgY29tcG9uZW50ID0gX2EuY29tcG9uZW50O1xyXG4gICAgLy8gVE9ETzogZml4IHVzaW5nIGhvb2tzIChwcm9iYWJseSAyIHZlcnNpb25zIG9mIHJlYWN0LCBuZWVkIHRvIGFsaWFzIGl0KVxyXG4gICAgdmFyIGVsZW1lbnRSZWYgPSBPYmplY3QocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInVzZVJlZlwiXSkobnVsbCk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICBpZiAoZWxlbWVudFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyAgICAgY29tcG9uZW50Lm1vdW50KGVsZW1lbnRSZWYuY3VycmVudCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sIFtdKTtcclxuICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwidGVzdFwiKTtcclxufVxyXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKENvbXBvbmVudCk7XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9Db21wb25lbnRNYW5hZ2VyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvQ29tcG9uZW50TWFuYWdlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG52YXIgQ29tcG9uZW50TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudE1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudE1hbmFnZXIucHJvdG90eXBlLnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZXQoY29tcG9uZW50LnV1aWQsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21wb25lbnRzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlcjtcclxufSgpKTtcclxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChDb21wb25lbnRNYW5hZ2VyKTtcclxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL0NvbXBvbmVudFdyYXBwZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9Db21wb25lbnRXcmFwcGVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciB1dWlkX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB1dWlkICovIFwiLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2luZGV4LmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Db21wb25lbnRNYW5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NvbXBvbmVudE1hbmFnZXIgKi8gXCIuL3NyYy9Db21wb25lbnRNYW5hZ2VyLnRzXCIpO1xuXHJcblxyXG52YXIgQ29tcG9uZW50V3JhcHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudFdyYXBwZXIoX2EpIHtcclxuICAgICAgICB2YXIgbW91bnRFbGVtZW50ID0gX2EubW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCA9IF9hLnVubW91bnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFuYWdlciA9IF9Db21wb25lbnRNYW5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5tb3VudEVsZW1lbnQgPSBtb3VudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy51bm1vdW50RWxlbWVudCA9IHVubW91bnRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMudXVpZCA9IE9iamVjdCh1dWlkX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJ2NFwiXSkoKTtcclxuICAgIH1cclxuICAgIENvbXBvbmVudFdyYXBwZXIucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IGZpbmQgZWxlbWVudCB3aXRoIGlkIHJvb3QuIE1vdW50aW5nIGFib3J0ZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLnJlZ2lzdGVyQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMubW91bnRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnRXcmFwcGVyO1xyXG59KCkpO1xyXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKENvbXBvbmVudFdyYXBwZXIpO1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogQ29tcG9uZW50TWFuYWdlciwgQ29tcG9uZW50V3JhcHBlciwgQ29tcG9uZW50ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Db21wb25lbnRNYW5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NvbXBvbmVudE1hbmFnZXIgKi8gXCIuL3NyYy9Db21wb25lbnRNYW5hZ2VyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ29tcG9uZW50TWFuYWdlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9Db21wb25lbnRNYW5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Db21wb25lbnRXcmFwcGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NvbXBvbmVudFdyYXBwZXIgKi8gXCIuL3NyYy9Db21wb25lbnRXcmFwcGVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ29tcG9uZW50V3JhcHBlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9Db21wb25lbnRXcmFwcGVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Db21wb25lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vQ29tcG9uZW50ICovIFwiLi9zcmMvQ29tcG9uZW50LnRzeFwiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNvbXBvbmVudFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9Db21wb25lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cclxuXHJcblxyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwicmVhY3RcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9ICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTl0YVdOeWJ5MWpiMjV1WldOMEwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OXRhV055YnkxamIyNXVaV04wTDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyMXBZM0p2TFdOdmJtNWxZM1F2TGk5dWIyUmxYMjF2WkhWc1pYTXZkWFZwWkM5a2FYTjBMMlZ6YlMxaWNtOTNjMlZ5TDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwyMXBZM0p2TFdOdmJtNWxZM1F2TGk5dWIyUmxYMjF2WkhWc1pYTXZkWFZwWkM5a2FYTjBMMlZ6YlMxaWNtOTNjMlZ5TDIxa05TNXFjeUlzSW5kbFluQmhZMnM2THk5dGFXTnlieTFqYjI1dVpXTjBMeTR2Ym05a1pWOXRiMlIxYkdWekwzVjFhV1F2WkdsemRDOWxjMjB0WW5KdmQzTmxjaTl1YVd3dWFuTWlMQ0ozWldKd1lXTnJPaTh2YldsamNtOHRZMjl1Ym1WamRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5MWRXbGtMMlJwYzNRdlpYTnRMV0p5YjNkelpYSXZjR0Z5YzJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2YldsamNtOHRZMjl1Ym1WamRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5MWRXbGtMMlJwYzNRdlpYTnRMV0p5YjNkelpYSXZjbVZuWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2YldsamNtOHRZMjl1Ym1WamRDOHVMMjV2WkdWZmJXOWtkV3hsY3k5MWRXbGtMMlJwYzNRdlpYTnRMV0p5YjNkelpYSXZjbTVuTG1weklpd2lkMlZpY0dGamF6b3ZMMjFwWTNKdkxXTnZibTVsWTNRdkxpOXViMlJsWDIxdlpIVnNaWE12ZFhWcFpDOWthWE4wTDJWemJTMWljbTkzYzJWeUwzTm9ZVEV1YW5NaUxDSjNaV0p3WVdOck9pOHZiV2xqY204dFkyOXVibVZqZEM4dUwyNXZaR1ZmYlc5a2RXeGxjeTkxZFdsa0wyUnBjM1F2WlhOdExXSnliM2R6WlhJdmMzUnlhVzVuYVdaNUxtcHpJaXdpZDJWaWNHRmphem92TDIxcFkzSnZMV052Ym01bFkzUXZMaTl1YjJSbFgyMXZaSFZzWlhNdmRYVnBaQzlrYVhOMEwyVnpiUzFpY205M2MyVnlMM1l4TG1weklpd2lkMlZpY0dGamF6b3ZMMjFwWTNKdkxXTnZibTVsWTNRdkxpOXViMlJsWDIxdlpIVnNaWE12ZFhWcFpDOWthWE4wTDJWemJTMWljbTkzYzJWeUwzWXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwyMXBZM0p2TFdOdmJtNWxZM1F2TGk5dWIyUmxYMjF2WkhWc1pYTXZkWFZwWkM5a2FYTjBMMlZ6YlMxaWNtOTNjMlZ5TDNZek5TNXFjeUlzSW5kbFluQmhZMnM2THk5dGFXTnlieTFqYjI1dVpXTjBMeTR2Ym05a1pWOXRiMlIxYkdWekwzVjFhV1F2WkdsemRDOWxjMjB0WW5KdmQzTmxjaTkyTkM1cWN5SXNJbmRsWW5CaFkyczZMeTl0YVdOeWJ5MWpiMjV1WldOMEx5NHZibTlrWlY5dGIyUjFiR1Z6TDNWMWFXUXZaR2x6ZEM5bGMyMHRZbkp2ZDNObGNpOTJOUzVxY3lJc0luZGxZbkJoWTJzNkx5OXRhV055YnkxamIyNXVaV04wTHk0dmJtOWtaVjl0YjJSMWJHVnpMM1YxYVdRdlpHbHpkQzlsYzIwdFluSnZkM05sY2k5MllXeHBaR0YwWlM1cWN5SXNJbmRsWW5CaFkyczZMeTl0YVdOeWJ5MWpiMjV1WldOMEx5NHZibTlrWlY5dGIyUjFiR1Z6TDNWMWFXUXZaR2x6ZEM5bGMyMHRZbkp2ZDNObGNpOTJaWEp6YVc5dUxtcHpJaXdpZDJWaWNHRmphem92TDIxcFkzSnZMV052Ym01bFkzUXZMaTl6Y21NdlEyOXRjRzl1Wlc1MExuUnplQ0lzSW5kbFluQmhZMnM2THk5dGFXTnlieTFqYjI1dVpXTjBMeTR2YzNKakwwTnZiWEJ2Ym1WdWRFMWhibUZuWlhJdWRITWlMQ0ozWldKd1lXTnJPaTh2YldsamNtOHRZMjl1Ym1WamRDOHVMM055WXk5RGIyMXdiMjVsYm5SWGNtRndjR1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMjFwWTNKdkxXTnZibTVsWTNRdkxpOXpjbU12YVc1a1pYZ3VkSE1pTENKM1pXSndZV05yT2k4dmJXbGpjbTh0WTI5dWJtVmpkQzlsZUhSbGNtNWhiQ0I3WENKamIyMXRiMjVxYzF3aU9sd2ljbVZoWTNSY0lpeGNJbU52YlcxdmJtcHpNbHdpT2x3aWNtVmhZM1JjSWl4Y0luSnZiM1JjSWpwY0lsSmxZV04wWENKOUlsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzFGRFZrRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdVVUZEUVN3d1EwRkJNRU1zWjBOQlFXZERPMUZCUXpGRk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc2QwUkJRWGRFTEd0Q1FVRnJRanRSUVVNeFJUdFJRVU5CTEdsRVFVRnBSQ3hqUVVGak8xRkJReTlFT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3g1UTBGQmVVTXNhVU5CUVdsRE8xRkJRekZGTEdkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0UlFVTnlTVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREpDUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRSUVVOMlJDeHBRMEZCYVVNc1pVRkJaVHRSUVVOb1JEdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRU3h6UkVGQmMwUXNLMFJCUVN0RU96dFJRVVZ5U0R0UlFVTkJPenM3VVVGSFFUdFJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFYZERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMFU3UVVGRFVUdEJRVU5GTzBGQlEwVTdPenM3T3pzN096czdPenM3UVVOUWRFUTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUZyUkRzN1FVRkZiRVE3TzBGQlJVRXNiVUpCUVcxQ0xHZENRVUZuUWp0QlFVTnVRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzYVVKQlFXbENMR05CUVdNN1FVRkRMMEk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHbENRVUZwUWl4alFVRmpPMEZCUXk5Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzWVVGQllUdEJRVU01UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZsTEd0RlFVRkhMRVU3T3pzN096czdPenM3T3p0QlEzUk9iRUk3UVVGQlpTeHhSMEZCYzBNc1JUczdPenM3T3pzN096czdPMEZEUVhKRU8wRkJRVUU3UVVGQmNVTTdPMEZCUlhKRE8wRkJRMEVzVDBGQlR5dzBSRUZCVVR0QlFVTm1PMEZCUTBFN08wRkJSVUU3UVVGRFFTd3JRa0ZCSzBJN08wRkJSUzlDTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzlDUVVGdlFqczdRVUZGY0VJN1FVRkRRU3h2UWtGQmIwSTdPMEZCUlhCQ08wRkJRMEVzYjBKQlFXOUNPenRCUVVWd1FqdEJRVU5CTEc5Q1FVRnZRanRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVmxMRzlGUVVGTExFVTdPenM3T3pzN096czdPenRCUTJ4RGNFSTdRVUZCWlN3MlJVRkJZeXhGUVVGRkxGVkJRVlVzUlVGQlJTeGxRVUZsTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVlVGQlZTeEhRVUZITEhsRFFVRjVReXhGT3pzN096czdPenM3T3pzN1FVTkJjRWs3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMlU3UVVGRFpqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hET3pzN096czdPenM3T3pzN1FVTmlRVHRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR3RFUVVGclJEczdRVUZGYkVRN08wRkJSVUVzYlVKQlFXMUNMR2RDUVVGblFqdEJRVU51UXp0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHJRa0ZCYTBJc1VVRkJVVHRCUVVNeFFqczdRVUZGUVN4dFFrRkJiVUlzVVVGQlVUdEJRVU16UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHMUNRVUZ0UWl4VFFVRlRPMEZCUXpWQ096dEJRVVZCTEcxQ1FVRnRRaXhSUVVGUk8wRkJRek5DTzBGQlEwRTdPMEZCUlVFc2NVSkJRWEZDTEZOQlFWTTdRVUZET1VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIRkNRVUZ4UWl4VlFVRlZPMEZCUXk5Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJXVXNiVVZCUVVrc1JUczdPenM3T3pzN096czdPMEZETDBadVFqdEJRVUZCTzBGQlFYRkRPMEZCUTNKRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxHVkJRV1VzVTBGQlV6dEJRVU40UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNlV2RDUVVGNVowSTdRVUZEZW1kQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMRTlCUVU4c05FUkJRVkU3UVVGRFpqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSV1VzZDBWQlFWTXNSVHM3T3pzN096czdPenM3TzBGRE4wSjRRanRCUVVGQk8wRkJRVUU3UVVGQk1rSTdRVUZEV1R0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1kwRkJZenM3TzBGQlIyUTdRVUZEUVN4dFFrRkJiVUk3TzBGQlJXNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3JSVUZCSzBVN1FVRkRMMFU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSE5FUVVGelJDd3JRMEZCUnpzN1FVRkZla1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenM3UVVGSFFTeDFSVUZCZFVVN1FVRkRka1U3TzBGQlJVRXNNa1ZCUVRKRk96dEJRVVV6UlN3MlJFRkJOa1E3TzBGQlJUZEVPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3p0QlFVZEJPMEZCUTBFN1FVRkRRU3hIUVVGSE96czdRVUZIU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhWQ1FVRjFRanM3UVVGRmRrSXNNRUpCUVRCQ096dEJRVVV4UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWpzN1FVRkZja0k3UVVGRFFUdEJRVU5CTEhOQ1FVRnpRanM3UVVGRmRFSXNiVU5CUVcxRE96dEJRVVZ1UXl3MlFrRkJOa0k3TzBGQlJUZENMR2xEUVVGcFF6czdRVUZGYWtNc01rSkJRVEpDT3p0QlFVVXpRaXhwUWtGQmFVSXNUMEZCVHp0QlFVTjRRanRCUVVOQk96dEJRVVZCTEdkQ1FVRm5RaXcyUkVGQlV6dEJRVU42UWpzN1FVRkZaU3hwUlVGQlJTeEZPenM3T3pzN096czdPenM3UVVNNVJtcENPMEZCUVVFN1FVRkJRVHRCUVVFeVFqdEJRVU5CTzBGQlF6TkNMRk5CUVZNc2RVUkJRVWNzWVVGQllTd3JRMEZCUnp0QlFVTmlMR2xGUVVGRkxFVTdPenM3T3pzN096czdPenRCUTBocVFqdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVhWRE8wRkJRMUk3TzBGQlJTOUNPMEZCUTBFc01FTkJRVEJET3p0QlFVVXhRenM3UVVGRlFTeHBRa0ZCYVVJc1owSkJRV2RDTzBGQlEycERPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGVHp0QlFVTkJPMEZCUTFFN1FVRkRaanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR3RDUVVGclFpeDVSRUZCU3p0QlFVTjJRanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMSEZDUVVGeFFpeFJRVUZSTzBGQlF6ZENPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4WFFVRlhMRFpFUVVGVE8wRkJRM0JDTEVkQlFVYzdPenRCUVVkSU8wRkJRMEVzTmtKQlFUWkNPMEZCUXpkQ0xFZEJRVWNzWlVGQlpUczdPMEZCUjJ4Q08wRkJRMEU3UVVGRFFUdEJRVU5CTEVNN096czdPenM3T3pzN096dEJReTlFUVR0QlFVRkJPMEZCUVVFN1FVRkJNa0k3UVVGRFdUczdRVUZGZGtNN1FVRkRRVHRCUVVOQkxDdERRVUVyUXl3clEwRkJSeXhKUVVGSk96dEJRVVYwUkR0QlFVTkJMR3REUVVGclF6czdRVUZGYkVNN1FVRkRRVHM3UVVGRlFTeHRRa0ZCYlVJc1VVRkJVVHRCUVVNelFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzVTBGQlV5dzJSRUZCVXp0QlFVTnNRanM3UVVGRlpTeHBSVUZCUlN4Rk96czdPenM3T3pzN096czdRVU4yUW1wQ08wRkJRVUU3UVVGQlFUdEJRVUV5UWp0QlFVTkZPMEZCUXpkQ0xGTkJRVk1zZFVSQlFVY3NZVUZCWVN4blJFRkJTVHRCUVVOa0xHbEZRVUZGTEVVN096czdPenM3T3pzN096dEJRMGhxUWp0QlFVRkJPMEZCUVN0Q096dEJRVVV2UWp0QlFVTkJMSEZEUVVGeFF5eHBSRUZCU3p0QlFVTXhRenM3UVVGRlpTeDFSVUZCVVN4Rk96czdPenM3T3pzN096czdRVU5PZGtJN1FVRkJRVHRCUVVGeFF6czdRVUZGY2tNN1FVRkRRU3hQUVVGUExEUkVRVUZSTzBGQlEyWTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZsTEhORlFVRlBMRVU3T3pzN096czdPenM3T3p0QlExWjBRanRCUVVGQk8wRkJRVUU3UVVGQkswTTdRVUZSTDBNc1UwRkJVeXhUUVVGVExFTkJRVU1zUlVGQk5FSTdVVUZCTTBJc1UwRkJVenRKUVVNelFpeDVSVUZCZVVVN1NVRkRla1VzU1VGQlRTeFZRVUZWTEVkQlFVY3NiMFJCUVUwc1EwRkJkMElzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZIZGtRc2IwSkJRVzlDTzBsQlEzQkNMRGhDUVVFNFFqdEpRVU01UWl3eVEwRkJNa003U1VGRE0wTXNUVUZCVFR0SlFVTk9MRlZCUVZVN1NVRkZWaXhQUVVGUExDdEZRVUZsTEVOQlFVTTdRVUZEZWtJc1EwRkJRenRCUVVWakxIZEZRVUZUTEVWQlFVTTdPenM3T3pzN096czdPenM3UVVOd1FucENPMEZCUVVFN1NVRkpSVHRSUVVaUkxHVkJRVlVzUjBGQmEwTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVjNVJDeERRVUZETzBsQlJVMHNORUpCUVZjc1IwRkJiRUk3VVVGRFJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1owSkJRV2RDTEVWQlFVVXNRMEZCUXp0VFFVTjRRenRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVTBzTkVOQlFXbENMRWRCUVhoQ0xGVkJRWGxDTEZOQlFUSkNPMUZCUTJ4RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZGTDBNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVU5JTEhWQ1FVRkRPMEZCUVVRc1EwRkJRenM3T3pzN096czdPenM3T3pzN1FVTnlRa1E3UVVGQlFUdEJRVUZCTzBGQlFXZERPMEZCUTJ0Q08wRkJWV3hFTzBsQlVVVXNNRUpCUVZrc1JVRkJaMFE3V1VGQkwwTXNXVUZCV1N4dlFrRkJSU3hqUVVGak8xRkJUR3BETEhGQ1FVRm5RaXhIUVVGeFFpeDVSRUZCWjBJc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVTB4UlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF6dFJRVU5xUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExHTkJRV01zUTBGQlF6dFJRVVZ5UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExDdERRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVVFzWjBOQlFVc3NSMEZCVEN4VlFVRk5MRTlCUVc5Q08xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRXaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03V1VGRGVFVXNUMEZCVHp0VFFVTlNPMUZCUlVRc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUlRsRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVU5JTEhWQ1FVRkRPMEZCUVVRc1EwRkJRenM3T3pzN096czdPenM3T3pzN1FVTndRMFE3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQkswUTdRVUZEUVR0QlFVTkhPenM3T3pzN096czdPenM3UVVOR2JFVXNiVVFpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSnlaV0ZqZEZ3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0p0YVdOeWJ5MWpiMjV1WldOMFhDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpY21WaFkzUmNJaWtwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0ltMXBZM0p2TFdOdmJtNWxZM1JjSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKU1pXRmpkRndpWFNrN1hHNTlLU2gzYVc1a2IzY3NJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZjbVZoWTNSZlh5a2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNCY0lpNHZjM0pqTDJsdVpHVjRMblJ6WENJcE8xeHVJaXdpWlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCMk1TQjlJR1p5YjIwZ0p5NHZkakV1YW5Nbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUIyTXlCOUlHWnliMjBnSnk0dmRqTXVhbk1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QjJOQ0I5SUdaeWIyMGdKeTR2ZGpRdWFuTW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCMk5TQjlJR1p5YjIwZ0p5NHZkalV1YW5Nbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJPU1V3Z2ZTQm1jbTl0SUNjdUwyNXBiQzVxY3ljN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSFpsY25OcGIyNGdmU0JtY205dElDY3VMM1psY25OcGIyNHVhbk1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QjJZV3hwWkdGMFpTQjlJR1p5YjIwZ0p5NHZkbUZzYVdSaGRHVXVhbk1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QnpkSEpwYm1kcFpua2dmU0JtY205dElDY3VMM04wY21sdVoybG1lUzVxY3ljN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSEJoY25ObElIMGdabkp2YlNBbkxpOXdZWEp6WlM1cWN5YzdJaXdpTHlwY2JpQXFJRUp5YjNkelpYSXRZMjl0Y0dGMGFXSnNaU0JLWVhaaFUyTnlhWEIwSUUxRU5WeHVJQ3BjYmlBcUlFMXZaR2xtYVdOaGRHbHZiaUJ2WmlCS1lYWmhVMk55YVhCMElFMUVOVnh1SUNvZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwySnNkV1ZwYlhBdlNtRjJZVk5qY21sd2RDMU5SRFZjYmlBcVhHNGdLaUJEYjNCNWNtbG5hSFFnTWpBeE1Td2dVMlZpWVhOMGFXRnVJRlJ6WTJoaGJseHVJQ29nYUhSMGNITTZMeTlpYkhWbGFXMXdMbTVsZEZ4dUlDcGNiaUFxSUV4cFkyVnVjMlZrSUhWdVpHVnlJSFJvWlNCTlNWUWdiR2xqWlc1elpUcGNiaUFxSUdoMGRIQnpPaTh2YjNCbGJuTnZkWEpqWlM1dmNtY3ZiR2xqWlc1elpYTXZUVWxVWEc0Z0tseHVJQ29nUW1GelpXUWdiMjVjYmlBcUlFRWdTbUYyWVZOamNtbHdkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQnZaaUIwYUdVZ1VsTkJJRVJoZEdFZ1UyVmpkWEpwZEhrc0lFbHVZeTRnVFVRMUlFMWxjM05oWjJWY2JpQXFJRVJwWjJWemRDQkJiR2R2Y21sMGFHMHNJR0Z6SUdSbFptbHVaV1FnYVc0Z1VrWkRJREV6TWpFdVhHNGdLaUJXWlhKemFXOXVJREl1TWlCRGIzQjVjbWxuYUhRZ0tFTXBJRkJoZFd3Z1NtOW9ibk4wYjI0Z01UazVPU0F0SURJd01EbGNiaUFxSUU5MGFHVnlJR052Ym5SeWFXSjFkRzl5Y3pvZ1IzSmxaeUJJYjJ4MExDQkJibVJ5WlhjZ1MyVndaWEowTENCWlpHNWhjaXdnVEc5emRHbHVaWFJjYmlBcUlFUnBjM1J5YVdKMWRHVmtJSFZ1WkdWeUlIUm9aU0JDVTBRZ1RHbGpaVzV6WlZ4dUlDb2dVMlZsSUdoMGRIQTZMeTl3WVdwb2IyMWxMbTl5Wnk1MWF5OWpjbmx3ZEM5dFpEVWdabTl5SUcxdmNtVWdhVzVtYnk1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnYldRMUtHSjVkR1Z6S1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnWW5sMFpYTWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnZG1GeUlHMXpaeUE5SUhWdVpYTmpZWEJsS0dWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoaWVYUmxjeWtwT3lBdkx5QlZWRVk0SUdWelkyRndaVnh1WEc0Z0lDQWdZbmwwWlhNZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNodGMyY3ViR1Z1WjNSb0tUdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diWE5uTG14bGJtZDBhRHNnS3l0cEtTQjdYRzRnSUNBZ0lDQmllWFJsYzF0cFhTQTlJRzF6Wnk1amFHRnlRMjlrWlVGMEtHa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnRaRFZVYjBobGVFVnVZMjlrWldSQmNuSmhlU2gzYjNKa2MxUnZUV1ExS0dKNWRHVnpWRzlYYjNKa2N5aGllWFJsY3lrc0lHSjVkR1Z6TG14bGJtZDBhQ0FxSURncEtUdGNibjFjYmk4cVhHNGdLaUJEYjI1MlpYSjBJR0Z1SUdGeWNtRjVJRzltSUd4cGRIUnNaUzFsYm1ScFlXNGdkMjl5WkhNZ2RHOGdZVzRnWVhKeVlYa2diMllnWW5sMFpYTmNiaUFxTDF4dVhHNWNibVoxYm1OMGFXOXVJRzFrTlZSdlNHVjRSVzVqYjJSbFpFRnljbUY1S0dsdWNIVjBLU0I3WEc0Z0lIWmhjaUJ2ZFhSd2RYUWdQU0JiWFR0Y2JpQWdkbUZ5SUd4bGJtZDBhRE15SUQwZ2FXNXdkWFF1YkdWdVozUm9JQ29nTXpJN1hHNGdJSFpoY2lCb1pYaFVZV0lnUFNBbk1ERXlNelExTmpjNE9XRmlZMlJsWmljN1hHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2d6TWpzZ2FTQXJQU0E0S1NCN1hHNGdJQ0FnZG1GeUlIZ2dQU0JwYm5CMWRGdHBJRDQrSURWZElENCtQaUJwSUNVZ016SWdKaUF3ZUdabU8xeHVJQ0FnSUhaaGNpQm9aWGdnUFNCd1lYSnpaVWx1ZENob1pYaFVZV0l1WTJoaGNrRjBLSGdnUGo0K0lEUWdKaUF3ZURCbUtTQXJJR2hsZUZSaFlpNWphR0Z5UVhRb2VDQW1JREI0TUdZcExDQXhOaWs3WEc0Z0lDQWdiM1YwY0hWMExuQjFjMmdvYUdWNEtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZkWFJ3ZFhRN1hHNTlYRzR2S2lwY2JpQXFJRU5oYkdOMWJHRjBaU0J2ZFhSd2RYUWdiR1Z1WjNSb0lIZHBkR2dnY0dGa1pHbHVaeUJoYm1RZ1ltbDBJR3hsYm1kMGFGeHVJQ292WEc1Y2JseHVablZ1WTNScGIyNGdaMlYwVDNWMGNIVjBUR1Z1WjNSb0tHbHVjSFYwVEdWdVozUm9PQ2tnZTF4dUlDQnlaWFIxY200Z0tHbHVjSFYwVEdWdVozUm9PQ0FySURZMElENCtQaUE1SUR3OElEUXBJQ3NnTVRRZ0t5QXhPMXh1ZlZ4dUx5cGNiaUFxSUVOaGJHTjFiR0YwWlNCMGFHVWdUVVExSUc5bUlHRnVJR0Z5Y21GNUlHOW1JR3hwZEhSc1pTMWxibVJwWVc0Z2QyOXlaSE1zSUdGdVpDQmhJR0pwZENCc1pXNW5kR2d1WEc0Z0tpOWNibHh1WEc1bWRXNWpkR2x2YmlCM2IzSmtjMVJ2VFdRMUtIZ3NJR3hsYmlrZ2UxeHVJQ0F2S2lCaGNIQmxibVFnY0dGa1pHbHVaeUFxTDF4dUlDQjRXMnhsYmlBK1BpQTFYU0I4UFNBd2VEZ3dJRHc4SUd4bGJpQWxJRE15TzF4dUlDQjRXMmRsZEU5MWRIQjFkRXhsYm1kMGFDaHNaVzRwSUMwZ01WMGdQU0JzWlc0N1hHNGdJSFpoY2lCaElEMGdNVGN6TWpVNE5ERTVNenRjYmlBZ2RtRnlJR0lnUFNBdE1qY3hOek16T0RjNU8xeHVJQ0IyWVhJZ1l5QTlJQzB4TnpNeU5UZzBNVGswTzF4dUlDQjJZWElnWkNBOUlESTNNVGN6TXpnM09EdGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIZ3ViR1Z1WjNSb095QnBJQ3M5SURFMktTQjdYRzRnSUNBZ2RtRnlJRzlzWkdFZ1BTQmhPMXh1SUNBZ0lIWmhjaUJ2YkdSaUlEMGdZanRjYmlBZ0lDQjJZWElnYjJ4a1l5QTlJR003WEc0Z0lDQWdkbUZ5SUc5c1pHUWdQU0JrTzF4dUlDQWdJR0VnUFNCdFpEVm1aaWhoTENCaUxDQmpMQ0JrTENCNFcybGRMQ0EzTENBdE5qZ3dPRGMyT1RNMktUdGNiaUFnSUNCa0lEMGdiV1ExWm1Zb1pDd2dZU3dnWWl3Z1l5d2dlRnRwSUNzZ01WMHNJREV5TENBdE16ZzVOVFkwTlRnMktUdGNiaUFnSUNCaklEMGdiV1ExWm1Zb1l5d2daQ3dnWVN3Z1lpd2dlRnRwSUNzZ01sMHNJREUzTENBMk1EWXhNRFU0TVRrcE8xeHVJQ0FnSUdJZ1BTQnRaRFZtWmloaUxDQmpMQ0JrTENCaExDQjRXMmtnS3lBelhTd2dNaklzSUMweE1EUTBOVEkxTXpNd0tUdGNiaUFnSUNCaElEMGdiV1ExWm1Zb1lTd2dZaXdnWXl3Z1pDd2dlRnRwSUNzZ05GMHNJRGNzSUMweE56WTBNVGc0T1RjcE8xeHVJQ0FnSUdRZ1BTQnRaRFZtWmloa0xDQmhMQ0JpTENCakxDQjRXMmtnS3lBMVhTd2dNVElzSURFeU1EQXdPREEwTWpZcE8xeHVJQ0FnSUdNZ1BTQnRaRFZtWmloakxDQmtMQ0JoTENCaUxDQjRXMmtnS3lBMlhTd2dNVGNzSUMweE5EY3pNak14TXpReEtUdGNiaUFnSUNCaUlEMGdiV1ExWm1Zb1lpd2dZeXdnWkN3Z1lTd2dlRnRwSUNzZ04xMHNJREl5TENBdE5EVTNNRFU1T0RNcE8xeHVJQ0FnSUdFZ1BTQnRaRFZtWmloaExDQmlMQ0JqTENCa0xDQjRXMmtnS3lBNFhTd2dOeXdnTVRjM01EQXpOVFF4TmlrN1hHNGdJQ0FnWkNBOUlHMWtOV1ptS0dRc0lHRXNJR0lzSUdNc0lIaGJhU0FySURsZExDQXhNaXdnTFRFNU5UZzBNVFEwTVRjcE8xeHVJQ0FnSUdNZ1BTQnRaRFZtWmloakxDQmtMQ0JoTENCaUxDQjRXMmtnS3lBeE1GMHNJREUzTENBdE5ESXdOak1wTzF4dUlDQWdJR0lnUFNCdFpEVm1aaWhpTENCakxDQmtMQ0JoTENCNFcya2dLeUF4TVYwc0lESXlMQ0F0TVRrNU1EUXdOREUyTWlrN1hHNGdJQ0FnWVNBOUlHMWtOV1ptS0dFc0lHSXNJR01zSUdRc0lIaGJhU0FySURFeVhTd2dOeXdnTVRnd05EWXdNelk0TWlrN1hHNGdJQ0FnWkNBOUlHMWtOV1ptS0dRc0lHRXNJR0lzSUdNc0lIaGJhU0FySURFelhTd2dNVElzSUMwME1ETTBNVEV3TVNrN1hHNGdJQ0FnWXlBOUlHMWtOV1ptS0dNc0lHUXNJR0VzSUdJc0lIaGJhU0FySURFMFhTd2dNVGNzSUMweE5UQXlNREF5TWprd0tUdGNiaUFnSUNCaUlEMGdiV1ExWm1Zb1lpd2dZeXdnWkN3Z1lTd2dlRnRwSUNzZ01UVmRMQ0F5TWl3Z01USXpOalV6TlRNeU9TazdYRzRnSUNBZ1lTQTlJRzFrTldkbktHRXNJR0lzSUdNc0lHUXNJSGhiYVNBcklERmRMQ0ExTENBdE1UWTFOemsyTlRFd0tUdGNiaUFnSUNCa0lEMGdiV1ExWjJjb1pDd2dZU3dnWWl3Z1l5d2dlRnRwSUNzZ05sMHNJRGtzSUMweE1EWTVOVEF4TmpNeUtUdGNiaUFnSUNCaklEMGdiV1ExWjJjb1l5d2daQ3dnWVN3Z1lpd2dlRnRwSUNzZ01URmRMQ0F4TkN3Z05qUXpOekUzTnpFektUdGNiaUFnSUNCaUlEMGdiV1ExWjJjb1lpd2dZeXdnWkN3Z1lTd2dlRnRwWFN3Z01qQXNJQzB6TnpNNE9UY3pNRElwTzF4dUlDQWdJR0VnUFNCdFpEVm5aeWhoTENCaUxDQmpMQ0JrTENCNFcya2dLeUExWFN3Z05Td2dMVGN3TVRVMU9EWTVNU2s3WEc0Z0lDQWdaQ0E5SUcxa05XZG5LR1FzSUdFc0lHSXNJR01zSUhoYmFTQXJJREV3WFN3Z09Td2dNemd3TVRZd09ETXBPMXh1SUNBZ0lHTWdQU0J0WkRWblp5aGpMQ0JrTENCaExDQmlMQ0I0VzJrZ0t5QXhOVjBzSURFMExDQXROall3TkRjNE16TTFLVHRjYmlBZ0lDQmlJRDBnYldRMVoyY29ZaXdnWXl3Z1pDd2dZU3dnZUZ0cElDc2dORjBzSURJd0xDQXROREExTlRNM09EUTRLVHRjYmlBZ0lDQmhJRDBnYldRMVoyY29ZU3dnWWl3Z1l5d2daQ3dnZUZ0cElDc2dPVjBzSURVc0lEVTJPRFEwTmpRek9DazdYRzRnSUNBZ1pDQTlJRzFrTldkbktHUXNJR0VzSUdJc0lHTXNJSGhiYVNBcklERTBYU3dnT1N3Z0xURXdNVGs0TURNMk9UQXBPMXh1SUNBZ0lHTWdQU0J0WkRWblp5aGpMQ0JrTENCaExDQmlMQ0I0VzJrZ0t5QXpYU3dnTVRRc0lDMHhPRGN6TmpNNU5qRXBPMXh1SUNBZ0lHSWdQU0J0WkRWblp5aGlMQ0JqTENCa0xDQmhMQ0I0VzJrZ0t5QTRYU3dnTWpBc0lERXhOak0xTXpFMU1ERXBPMXh1SUNBZ0lHRWdQU0J0WkRWblp5aGhMQ0JpTENCakxDQmtMQ0I0VzJrZ0t5QXhNMTBzSURVc0lDMHhORFEwTmpneE5EWTNLVHRjYmlBZ0lDQmtJRDBnYldRMVoyY29aQ3dnWVN3Z1lpd2dZeXdnZUZ0cElDc2dNbDBzSURrc0lDMDFNVFF3TXpjNE5DazdYRzRnSUNBZ1l5QTlJRzFrTldkbktHTXNJR1FzSUdFc0lHSXNJSGhiYVNBcklEZGRMQ0F4TkN3Z01UY3pOVE15T0RRM015azdYRzRnSUNBZ1lpQTlJRzFrTldkbktHSXNJR01zSUdRc0lHRXNJSGhiYVNBcklERXlYU3dnTWpBc0lDMHhPVEkyTmpBM056TTBLVHRjYmlBZ0lDQmhJRDBnYldRMWFHZ29ZU3dnWWl3Z1l5d2daQ3dnZUZ0cElDc2dOVjBzSURRc0lDMHpOemcxTlRncE8xeHVJQ0FnSUdRZ1BTQnRaRFZvYUNoa0xDQmhMQ0JpTENCakxDQjRXMmtnS3lBNFhTd2dNVEVzSUMweU1ESXlOVGMwTkRZektUdGNiaUFnSUNCaklEMGdiV1ExYUdnb1l5d2daQ3dnWVN3Z1lpd2dlRnRwSUNzZ01URmRMQ0F4Tml3Z01UZ3pPVEF6TURVMk1pazdYRzRnSUNBZ1lpQTlJRzFrTldob0tHSXNJR01zSUdRc0lHRXNJSGhiYVNBcklERTBYU3dnTWpNc0lDMHpOVE13T1RVMU5pazdYRzRnSUNBZ1lTQTlJRzFrTldob0tHRXNJR0lzSUdNc0lHUXNJSGhiYVNBcklERmRMQ0EwTENBdE1UVXpNRGs1TWpBMk1DazdYRzRnSUNBZ1pDQTlJRzFrTldob0tHUXNJR0VzSUdJc0lHTXNJSGhiYVNBcklEUmRMQ0F4TVN3Z01USTNNamc1TXpNMU15azdYRzRnSUNBZ1l5QTlJRzFrTldob0tHTXNJR1FzSUdFc0lHSXNJSGhiYVNBcklEZGRMQ0F4Tml3Z0xURTFOVFE1TnpZek1pazdYRzRnSUNBZ1lpQTlJRzFrTldob0tHSXNJR01zSUdRc0lHRXNJSGhiYVNBcklERXdYU3dnTWpNc0lDMHhNRGswTnpNd05qUXdLVHRjYmlBZ0lDQmhJRDBnYldRMWFHZ29ZU3dnWWl3Z1l5d2daQ3dnZUZ0cElDc2dNVE5kTENBMExDQTJPREV5TnpreE56UXBPMXh1SUNBZ0lHUWdQU0J0WkRWb2FDaGtMQ0JoTENCaUxDQmpMQ0I0VzJsZExDQXhNU3dnTFRNMU9EVXpOekl5TWlrN1hHNGdJQ0FnWXlBOUlHMWtOV2hvS0dNc0lHUXNJR0VzSUdJc0lIaGJhU0FySUROZExDQXhOaXdnTFRjeU1qVXlNVGszT1NrN1hHNGdJQ0FnWWlBOUlHMWtOV2hvS0dJc0lHTXNJR1FzSUdFc0lIaGJhU0FySURaZExDQXlNeXdnTnpZd01qa3hPRGtwTzF4dUlDQWdJR0VnUFNCdFpEVm9hQ2hoTENCaUxDQmpMQ0JrTENCNFcya2dLeUE1WFN3Z05Dd2dMVFkwTURNMk5EUTROeWs3WEc0Z0lDQWdaQ0E5SUcxa05XaG9LR1FzSUdFc0lHSXNJR01zSUhoYmFTQXJJREV5WFN3Z01URXNJQzAwTWpFNE1UVTRNelVwTzF4dUlDQWdJR01nUFNCdFpEVm9hQ2hqTENCa0xDQmhMQ0JpTENCNFcya2dLeUF4TlYwc0lERTJMQ0ExTXpBM05ESTFNakFwTzF4dUlDQWdJR0lnUFNCdFpEVm9hQ2hpTENCakxDQmtMQ0JoTENCNFcya2dLeUF5WFN3Z01qTXNJQzA1T1RVek16ZzJOVEVwTzF4dUlDQWdJR0VnUFNCdFpEVnBhU2hoTENCaUxDQmpMQ0JrTENCNFcybGRMQ0EyTENBdE1UazROak13T0RRMEtUdGNiaUFnSUNCa0lEMGdiV1ExYVdrb1pDd2dZU3dnWWl3Z1l5d2dlRnRwSUNzZ04xMHNJREV3TENBeE1USTJPRGt4TkRFMUtUdGNiaUFnSUNCaklEMGdiV1ExYVdrb1l5d2daQ3dnWVN3Z1lpd2dlRnRwSUNzZ01UUmRMQ0F4TlN3Z0xURTBNVFl6TlRRNU1EVXBPMXh1SUNBZ0lHSWdQU0J0WkRWcGFTaGlMQ0JqTENCa0xDQmhMQ0I0VzJrZ0t5QTFYU3dnTWpFc0lDMDFOelF6TkRBMU5TazdYRzRnSUNBZ1lTQTlJRzFrTldscEtHRXNJR0lzSUdNc0lHUXNJSGhiYVNBcklERXlYU3dnTml3Z01UY3dNRFE0TlRVM01TazdYRzRnSUNBZ1pDQTlJRzFrTldscEtHUXNJR0VzSUdJc0lHTXNJSGhiYVNBcklETmRMQ0F4TUN3Z0xURTRPVFE1T0RZMk1EWXBPMXh1SUNBZ0lHTWdQU0J0WkRWcGFTaGpMQ0JrTENCaExDQmlMQ0I0VzJrZ0t5QXhNRjBzSURFMUxDQXRNVEExTVRVeU15azdYRzRnSUNBZ1lpQTlJRzFrTldscEtHSXNJR01zSUdRc0lHRXNJSGhiYVNBcklERmRMQ0F5TVN3Z0xUSXdOVFE1TWpJM09Ua3BPMXh1SUNBZ0lHRWdQU0J0WkRWcGFTaGhMQ0JpTENCakxDQmtMQ0I0VzJrZ0t5QTRYU3dnTml3Z01UZzNNek14TXpNMU9TazdYRzRnSUNBZ1pDQTlJRzFrTldscEtHUXNJR0VzSUdJc0lHTXNJSGhiYVNBcklERTFYU3dnTVRBc0lDMHpNRFl4TVRjME5DazdYRzRnSUNBZ1l5QTlJRzFrTldscEtHTXNJR1FzSUdFc0lHSXNJSGhiYVNBcklEWmRMQ0F4TlN3Z0xURTFOakF4T1Rnek9EQXBPMXh1SUNBZ0lHSWdQU0J0WkRWcGFTaGlMQ0JqTENCa0xDQmhMQ0I0VzJrZ0t5QXhNMTBzSURJeExDQXhNekE1TVRVeE5qUTVLVHRjYmlBZ0lDQmhJRDBnYldRMWFXa29ZU3dnWWl3Z1l5d2daQ3dnZUZ0cElDc2dORjBzSURZc0lDMHhORFUxTWpNd056QXBPMXh1SUNBZ0lHUWdQU0J0WkRWcGFTaGtMQ0JoTENCaUxDQmpMQ0I0VzJrZ0t5QXhNVjBzSURFd0xDQXRNVEV5TURJeE1ETTNPU2s3WEc0Z0lDQWdZeUE5SUcxa05XbHBLR01zSUdRc0lHRXNJR0lzSUhoYmFTQXJJREpkTENBeE5Td2dOekU0TnpnM01qVTVLVHRjYmlBZ0lDQmlJRDBnYldRMWFXa29ZaXdnWXl3Z1pDd2dZU3dnZUZ0cElDc2dPVjBzSURJeExDQXRNelF6TkRnMU5UVXhLVHRjYmlBZ0lDQmhJRDBnYzJGbVpVRmtaQ2hoTENCdmJHUmhLVHRjYmlBZ0lDQmlJRDBnYzJGbVpVRmtaQ2hpTENCdmJHUmlLVHRjYmlBZ0lDQmpJRDBnYzJGbVpVRmtaQ2hqTENCdmJHUmpLVHRjYmlBZ0lDQmtJRDBnYzJGbVpVRmtaQ2hrTENCdmJHUmtLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJiWVN3Z1lpd2dZeXdnWkYwN1hHNTlYRzR2S2x4dUlDb2dRMjl1ZG1WeWRDQmhiaUJoY25KaGVTQmllWFJsY3lCMGJ5QmhiaUJoY25KaGVTQnZaaUJzYVhSMGJHVXRaVzVrYVdGdUlIZHZjbVJ6WEc0Z0tpQkRhR0Z5WVdOMFpYSnpJRDR5TlRVZ2FHRjJaU0IwYUdWcGNpQm9hV2RvTFdKNWRHVWdjMmxzWlc1MGJIa2dhV2R1YjNKbFpDNWNiaUFxTDF4dVhHNWNibVoxYm1OMGFXOXVJR0o1ZEdWelZHOVhiM0prY3locGJuQjFkQ2tnZTF4dUlDQnBaaUFvYVc1d2RYUXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnY21WMGRYSnVJRnRkTzF4dUlDQjlYRzVjYmlBZ2RtRnlJR3hsYm1kMGFEZ2dQU0JwYm5CMWRDNXNaVzVuZEdnZ0tpQTRPMXh1SUNCMllYSWdiM1YwY0hWMElEMGdibVYzSUZWcGJuUXpNa0Z5Y21GNUtHZGxkRTkxZEhCMWRFeGxibWQwYUNoc1pXNW5kR2c0S1NrN1hHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c0T3lCcElDczlJRGdwSUh0Y2JpQWdJQ0J2ZFhSd2RYUmJhU0ErUGlBMVhTQjhQU0FvYVc1d2RYUmJhU0F2SURoZElDWWdNSGhtWmlrZ1BEd2dhU0FsSURNeU8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHOTFkSEIxZER0Y2JuMWNiaThxWEc0Z0tpQkJaR1FnYVc1MFpXZGxjbk1zSUhkeVlYQndhVzVuSUdGMElESmVNekl1SUZSb2FYTWdkWE5sY3lBeE5pMWlhWFFnYjNCbGNtRjBhVzl1Y3lCcGJuUmxjbTVoYkd4NVhHNGdLaUIwYnlCM2IzSnJJR0Z5YjNWdVpDQmlkV2R6SUdsdUlITnZiV1VnU2xNZ2FXNTBaWEp3Y21WMFpYSnpMbHh1SUNvdlhHNWNibHh1Wm5WdVkzUnBiMjRnYzJGbVpVRmtaQ2g0TENCNUtTQjdYRzRnSUhaaGNpQnNjM2NnUFNBb2VDQW1JREI0Wm1abVppa2dLeUFvZVNBbUlEQjRabVptWmlrN1hHNGdJSFpoY2lCdGMzY2dQU0FvZUNBK1BpQXhOaWtnS3lBb2VTQStQaUF4TmlrZ0t5QW9iSE4zSUQ0K0lERTJLVHRjYmlBZ2NtVjBkWEp1SUcxemR5QThQQ0F4TmlCOElHeHpkeUFtSURCNFptWm1aanRjYm4xY2JpOHFYRzRnS2lCQ2FYUjNhWE5sSUhKdmRHRjBaU0JoSURNeUxXSnBkQ0J1ZFcxaVpYSWdkRzhnZEdobElHeGxablF1WEc0Z0tpOWNibHh1WEc1bWRXNWpkR2x2YmlCaWFYUlNiM1JoZEdWTVpXWjBLRzUxYlN3Z1kyNTBLU0I3WEc0Z0lISmxkSFZ5YmlCdWRXMGdQRHdnWTI1MElId2diblZ0SUQ0K1BpQXpNaUF0SUdOdWREdGNibjFjYmk4cVhHNGdLaUJVYUdWelpTQm1kVzVqZEdsdmJuTWdhVzF3YkdWdFpXNTBJSFJvWlNCbWIzVnlJR0poYzJsaklHOXdaWEpoZEdsdmJuTWdkR2hsSUdGc1oyOXlhWFJvYlNCMWMyVnpMbHh1SUNvdlhHNWNibHh1Wm5WdVkzUnBiMjRnYldRMVkyMXVLSEVzSUdFc0lHSXNJSGdzSUhNc0lIUXBJSHRjYmlBZ2NtVjBkWEp1SUhOaFptVkJaR1FvWW1sMFVtOTBZWFJsVEdWbWRDaHpZV1psUVdSa0tITmhabVZCWkdRb1lTd2djU2tzSUhOaFptVkJaR1FvZUN3Z2RDa3BMQ0J6S1N3Z1lpazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMWtOV1ptS0dFc0lHSXNJR01zSUdRc0lIZ3NJSE1zSUhRcElIdGNiaUFnY21WMGRYSnVJRzFrTldOdGJpaGlJQ1lnWXlCOElINWlJQ1lnWkN3Z1lTd2dZaXdnZUN3Z2N5d2dkQ2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJRzFrTldkbktHRXNJR0lzSUdNc0lHUXNJSGdzSUhNc0lIUXBJSHRjYmlBZ2NtVjBkWEp1SUcxa05XTnRiaWhpSUNZZ1pDQjhJR01nSmlCK1pDd2dZU3dnWWl3Z2VDd2djeXdnZENrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUcxa05XaG9LR0VzSUdJc0lHTXNJR1FzSUhnc0lITXNJSFFwSUh0Y2JpQWdjbVYwZFhKdUlHMWtOV050YmloaUlGNGdZeUJlSUdRc0lHRXNJR0lzSUhnc0lITXNJSFFwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ0WkRWcGFTaGhMQ0JpTENCakxDQmtMQ0I0TENCekxDQjBLU0I3WEc0Z0lISmxkSFZ5YmlCdFpEVmpiVzRvWXlCZUlDaGlJSHdnZm1RcExDQmhMQ0JpTENCNExDQnpMQ0IwS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdiV1ExT3lJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUNjd01EQXdNREF3TUMwd01EQXdMVEF3TURBdE1EQXdNQzB3TURBd01EQXdNREF3TURBbk95SXNJbWx0Y0c5eWRDQjJZV3hwWkdGMFpTQm1jbTl0SUNjdUwzWmhiR2xrWVhSbExtcHpKenRjYmx4dVpuVnVZM1JwYjI0Z2NHRnljMlVvZFhWcFpDa2dlMXh1SUNCcFppQW9JWFpoYkdsa1lYUmxLSFYxYVdRcEtTQjdYRzRnSUNBZ2RHaHliM2NnVkhsd1pVVnljbTl5S0NkSmJuWmhiR2xrSUZWVlNVUW5LVHRjYmlBZ2ZWeHVYRzRnSUhaaGNpQjJPMXh1SUNCMllYSWdZWEp5SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvTVRZcE95QXZMeUJRWVhKelpTQWpJeU1qSXlNakl5MHVMaTR1TFM0dUxpNHRMaTR1TGkwdUxpNHVMaTR1TGk0dUxpNWNibHh1SUNCaGNuSmJNRjBnUFNBb2RpQTlJSEJoY25ObFNXNTBLSFYxYVdRdWMyeHBZMlVvTUN3Z09Da3NJREUyS1NrZ1BqNCtJREkwTzF4dUlDQmhjbkpiTVYwZ1BTQjJJRDQrUGlBeE5pQW1JREI0Wm1ZN1hHNGdJR0Z5Y2xzeVhTQTlJSFlnUGo0K0lEZ2dKaUF3ZUdabU8xeHVJQ0JoY25KYk0xMGdQU0IySUNZZ01IaG1aanNnTHk4Z1VHRnljMlVnTGk0dUxpNHVMaTR0SXlNakl5MHVMaTR1TFM0dUxpNHRMaTR1TGk0dUxpNHVMaTR1WEc1Y2JpQWdZWEp5V3pSZElEMGdLSFlnUFNCd1lYSnpaVWx1ZENoMWRXbGtMbk5zYVdObEtEa3NJREV6S1N3Z01UWXBLU0ErUGo0Z09EdGNiaUFnWVhKeVd6VmRJRDBnZGlBbUlEQjRabVk3SUM4dklGQmhjbk5sSUM0dUxpNHVMaTR1TFM0dUxpNHRJeU1qSXkwdUxpNHVMUzR1TGk0dUxpNHVMaTR1TGx4dVhHNGdJR0Z5Y2xzMlhTQTlJQ2gySUQwZ2NHRnljMlZKYm5Rb2RYVnBaQzV6YkdsalpTZ3hOQ3dnTVRncExDQXhOaWtwSUQ0K1BpQTRPMXh1SUNCaGNuSmJOMTBnUFNCMklDWWdNSGhtWmpzZ0x5OGdVR0Z5YzJVZ0xpNHVMaTR1TGk0dExpNHVMaTB1TGk0dUxTTWpJeU10TGk0dUxpNHVMaTR1TGk0dVhHNWNiaUFnWVhKeVd6aGRJRDBnS0hZZ1BTQndZWEp6WlVsdWRDaDFkV2xrTG5Oc2FXTmxLREU1TENBeU15a3NJREUyS1NrZ1BqNCtJRGc3WEc0Z0lHRnljbHM1WFNBOUlIWWdKaUF3ZUdabU95QXZMeUJRWVhKelpTQXVMaTR1TGk0dUxpMHVMaTR1TFM0dUxpNHRMaTR1TGkwakl5TWpJeU1qSXlNakl5TmNiaUFnTHk4Z0tGVnpaU0JjSWk5Y0lpQjBieUJoZG05cFpDQXpNaTFpYVhRZ2RISjFibU5oZEdsdmJpQjNhR1Z1SUdKcGRDMXphR2xtZEdsdVp5Qm9hV2RvTFc5eVpHVnlJR0o1ZEdWektWeHVYRzRnSUdGeWNsc3hNRjBnUFNBb2RpQTlJSEJoY25ObFNXNTBLSFYxYVdRdWMyeHBZMlVvTWpRc0lETTJLU3dnTVRZcEtTQXZJREI0TVRBd01EQXdNREF3TURBZ0ppQXdlR1ptTzF4dUlDQmhjbkpiTVRGZElEMGdkaUF2SURCNE1UQXdNREF3TURBd0lDWWdNSGhtWmp0Y2JpQWdZWEp5V3pFeVhTQTlJSFlnUGo0K0lESTBJQ1lnTUhobVpqdGNiaUFnWVhKeVd6RXpYU0E5SUhZZ1BqNCtJREUySUNZZ01IaG1aanRjYmlBZ1lYSnlXekUwWFNBOUlIWWdQajQrSURnZ0ppQXdlR1ptTzF4dUlDQmhjbkpiTVRWZElEMGdkaUFtSURCNFptWTdYRzRnSUhKbGRIVnliaUJoY25JN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSEJoY25ObE95SXNJbVY0Y0c5eWRDQmtaV1poZFd4MElDOWVLRDg2V3pBdE9XRXRabDE3T0gwdFd6QXRPV0V0WmwxN05IMHRXekV0TlYxYk1DMDVZUzFtWFhzemZTMWJPRGxoWWwxYk1DMDVZUzFtWFhzemZTMWJNQzA1WVMxbVhYc3hNbjE4TURBd01EQXdNREF0TURBd01DMHdNREF3TFRBd01EQXRNREF3TURBd01EQXdNREF3S1NRdmFUc2lMQ0l2THlCVmJtbHhkV1VnU1VRZ1kzSmxZWFJwYjI0Z2NtVnhkV2x5WlhNZ1lTQm9hV2RvSUhGMVlXeHBkSGtnY21GdVpHOXRJQ01nWjJWdVpYSmhkRzl5TGlCSmJpQjBhR1VnWW5KdmQzTmxjaUIzWlNCMGFHVnlaV1p2Y21WY2JpOHZJSEpsY1hWcGNtVWdkR2hsSUdOeWVYQjBieUJCVUVrZ1lXNWtJR1J2SUc1dmRDQnpkWEJ3YjNKMElHSjFhV3gwTFdsdUlHWmhiR3hpWVdOcklIUnZJR3h2ZDJWeUlIRjFZV3hwZEhrZ2NtRnVaRzl0SUc1MWJXSmxjbHh1THk4Z1oyVnVaWEpoZEc5eWN5QW9iR2xyWlNCTllYUm9MbkpoYm1SdmJTZ3BLUzVjYmk4dklHZGxkRkpoYm1SdmJWWmhiSFZsY3lCdVpXVmtjeUIwYnlCaVpTQnBiblp2YTJWa0lHbHVJR0VnWTI5dWRHVjRkQ0IzYUdWeVpTQmNJblJvYVhOY0lpQnBjeUJoSUVOeWVYQjBieUJwYlhCc1pXMWxiblJoZEdsdmJpNGdRV3h6Ynl4Y2JpOHZJR1pwYm1RZ2RHaGxJR052YlhCc1pYUmxJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHOW1JR055ZVhCMGJ5QW9iWE5EY25sd2RHOHBJRzl1SUVsRk1URXVYRzUyWVhJZ1oyVjBVbUZ1Wkc5dFZtRnNkV1Z6SUQwZ2RIbHdaVzltSUdOeWVYQjBieUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnWTNKNWNIUnZMbWRsZEZKaGJtUnZiVlpoYkhWbGN5QW1KaUJqY25sd2RHOHVaMlYwVW1GdVpHOXRWbUZzZFdWekxtSnBibVFvWTNKNWNIUnZLU0I4ZkNCMGVYQmxiMllnYlhORGNubHdkRzhnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhSNWNHVnZaaUJ0YzBOeWVYQjBieTVuWlhSU1lXNWtiMjFXWVd4MVpYTWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdiWE5EY25sd2RHOHVaMlYwVW1GdVpHOXRWbUZzZFdWekxtSnBibVFvYlhORGNubHdkRzhwTzF4dWRtRnlJSEp1WkhNNElEMGdibVYzSUZWcGJuUTRRWEp5WVhrb01UWXBPMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdjbTVuS0NrZ2UxeHVJQ0JwWmlBb0lXZGxkRkpoYm1SdmJWWmhiSFZsY3lrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTNKNWNIUnZMbWRsZEZKaGJtUnZiVlpoYkhWbGN5Z3BJRzV2ZENCemRYQndiM0owWldRdUlGTmxaU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2ZFhWcFpHcHpMM1YxYVdRaloyVjBjbUZ1Wkc5dGRtRnNkV1Z6TFc1dmRDMXpkWEJ3YjNKMFpXUW5LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJuWlhSU1lXNWtiMjFXWVd4MVpYTW9jbTVrY3pncE8xeHVmU0lzSWk4dklFRmtZWEIwWldRZ1puSnZiU0JEYUhKcGN5QldaVzVsYzNNbklGTklRVEVnWTI5a1pTQmhkRnh1THk4Z2FIUjBjRG92TDNkM2R5NXRiM1poWW14bExYUjVjR1V1WTI4dWRXc3ZjMk55YVhCMGN5OXphR0V4TG1oMGJXeGNibVoxYm1OMGFXOXVJR1lvY3l3Z2VDd2dlU3dnZWlrZ2UxeHVJQ0J6ZDJsMFkyZ2dLSE1wSUh0Y2JpQWdJQ0JqWVhObElEQTZYRzRnSUNBZ0lDQnlaWFIxY200Z2VDQW1JSGtnWGlCK2VDQW1JSG83WEc1Y2JpQWdJQ0JqWVhObElERTZYRzRnSUNBZ0lDQnlaWFIxY200Z2VDQmVJSGtnWGlCNk8xeHVYRzRnSUNBZ1kyRnpaU0F5T2x4dUlDQWdJQ0FnY21WMGRYSnVJSGdnSmlCNUlGNGdlQ0FtSUhvZ1hpQjVJQ1lnZWp0Y2JseHVJQ0FnSUdOaGMyVWdNenBjYmlBZ0lDQWdJSEpsZEhWeWJpQjRJRjRnZVNCZUlIbzdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnVWs5VVRDaDRMQ0J1S1NCN1hHNGdJSEpsZEhWeWJpQjRJRHc4SUc0Z2ZDQjRJRDQrUGlBek1pQXRJRzQ3WEc1OVhHNWNibVoxYm1OMGFXOXVJSE5vWVRFb1lubDBaWE1wSUh0Y2JpQWdkbUZ5SUVzZ1BTQmJNSGcxWVRneU56azVPU3dnTUhnMlpXUTVaV0poTVN3Z01IZzRaakZpWW1Oa1l5d2dNSGhqWVRZeVl6RmtObDA3WEc0Z0lIWmhjaUJJSUQwZ1d6QjROamMwTlRJek1ERXNJREI0WldaalpHRmlPRGtzSURCNE9UaGlZV1JqWm1Vc0lEQjRNVEF6TWpVME56WXNJREI0WXpOa01tVXhaakJkTzF4dVhHNGdJR2xtSUNoMGVYQmxiMllnWW5sMFpYTWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnZG1GeUlHMXpaeUE5SUhWdVpYTmpZWEJsS0dWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoaWVYUmxjeWtwT3lBdkx5QlZWRVk0SUdWelkyRndaVnh1WEc0Z0lDQWdZbmwwWlhNZ1BTQmJYVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYlhObkxteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0JpZVhSbGN5NXdkWE5vS0cxelp5NWphR0Z5UTI5a1pVRjBLR2twS1R0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCcFppQW9JVUZ5Y21GNUxtbHpRWEp5WVhrb1lubDBaWE1wS1NCN1hHNGdJQ0FnTHk4Z1EyOXVkbVZ5ZENCQmNuSmhlUzFzYVd0bElIUnZJRUZ5Y21GNVhHNGdJQ0FnWW5sMFpYTWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVdVkyRnNiQ2hpZVhSbGN5azdYRzRnSUgxY2JseHVJQ0JpZVhSbGN5NXdkWE5vS0RCNE9EQXBPMXh1SUNCMllYSWdiQ0E5SUdKNWRHVnpMbXhsYm1kMGFDQXZJRFFnS3lBeU8xeHVJQ0IyWVhJZ1RpQTlJRTFoZEdndVkyVnBiQ2hzSUM4Z01UWXBPMXh1SUNCMllYSWdUU0E5SUc1bGR5QkJjbkpoZVNoT0tUdGNibHh1SUNCbWIzSWdLSFpoY2lCZmFTQTlJREE3SUY5cElEd2dUanNnS3l0ZmFTa2dlMXh1SUNBZ0lIWmhjaUJoY25JZ1BTQnVaWGNnVldsdWRETXlRWEp5WVhrb01UWXBPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdhaUE5SURBN0lHb2dQQ0F4TmpzZ0t5dHFLU0I3WEc0Z0lDQWdJQ0JoY25KYmFsMGdQU0JpZVhSbGMxdGZhU0FxSURZMElDc2dhaUFxSURSZElEdzhJREkwSUh3Z1lubDBaWE5iWDJrZ0tpQTJOQ0FySUdvZ0tpQTBJQ3NnTVYwZ1BEd2dNVFlnZkNCaWVYUmxjMXRmYVNBcUlEWTBJQ3NnYWlBcUlEUWdLeUF5WFNBOFBDQTRJSHdnWW5sMFpYTmJYMmtnS2lBMk5DQXJJR29nS2lBMElDc2dNMTA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdUVnRmYVYwZ1BTQmhjbkk3WEc0Z0lIMWNibHh1SUNCTlcwNGdMU0F4WFZzeE5GMGdQU0FvWW5sMFpYTXViR1Z1WjNSb0lDMGdNU2tnS2lBNElDOGdUV0YwYUM1d2IzY29NaXdnTXpJcE8xeHVJQ0JOVzA0Z0xTQXhYVnN4TkYwZ1BTQk5ZWFJvTG1ac2IyOXlLRTFiVGlBdElERmRXekUwWFNrN1hHNGdJRTFiVGlBdElERmRXekUxWFNBOUlDaGllWFJsY3k1c1pXNW5kR2dnTFNBeEtTQXFJRGdnSmlBd2VHWm1abVptWm1abU8xeHVYRzRnSUdadmNpQW9kbUZ5SUY5cE1pQTlJREE3SUY5cE1pQThJRTQ3SUNzclgya3lLU0I3WEc0Z0lDQWdkbUZ5SUZjZ1BTQnVaWGNnVldsdWRETXlRWEp5WVhrb09EQXBPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdkQ0E5SURBN0lIUWdQQ0F4TmpzZ0t5dDBLU0I3WEc0Z0lDQWdJQ0JYVzNSZElEMGdUVnRmYVRKZFczUmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnZjaUFvZG1GeUlGOTBJRDBnTVRZN0lGOTBJRHdnT0RBN0lDc3JYM1FwSUh0Y2JpQWdJQ0FnSUZkYlgzUmRJRDBnVWs5VVRDaFhXMTkwSUMwZ00xMGdYaUJYVzE5MElDMGdPRjBnWGlCWFcxOTBJQzBnTVRSZElGNGdWMXRmZENBdElERTJYU3dnTVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHRWdQU0JJV3pCZE8xeHVJQ0FnSUhaaGNpQmlJRDBnU0ZzeFhUdGNiaUFnSUNCMllYSWdZeUE5SUVoYk1sMDdYRzRnSUNBZ2RtRnlJR1FnUFNCSVd6TmRPMXh1SUNBZ0lIWmhjaUJsSUQwZ1NGczBYVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJRjkwTWlBOUlEQTdJRjkwTWlBOElEZ3dPeUFySzE5ME1pa2dlMXh1SUNBZ0lDQWdkbUZ5SUhNZ1BTQk5ZWFJvTG1ac2IyOXlLRjkwTWlBdklESXdLVHRjYmlBZ0lDQWdJSFpoY2lCVUlEMGdVazlVVENoaExDQTFLU0FySUdZb2N5d2dZaXdnWXl3Z1pDa2dLeUJsSUNzZ1MxdHpYU0FySUZkYlgzUXlYU0ErUGo0Z01EdGNiaUFnSUNBZ0lHVWdQU0JrTzF4dUlDQWdJQ0FnWkNBOUlHTTdYRzRnSUNBZ0lDQmpJRDBnVWs5VVRDaGlMQ0F6TUNrZ1BqNCtJREE3WEc0Z0lDQWdJQ0JpSUQwZ1lUdGNiaUFnSUNBZ0lHRWdQU0JVTzF4dUlDQWdJSDFjYmx4dUlDQWdJRWhiTUYwZ1BTQklXekJkSUNzZ1lTQStQajRnTUR0Y2JpQWdJQ0JJV3pGZElEMGdTRnN4WFNBcklHSWdQajQrSURBN1hHNGdJQ0FnU0ZzeVhTQTlJRWhiTWwwZ0t5QmpJRDQrUGlBd08xeHVJQ0FnSUVoYk0xMGdQU0JJV3pOZElDc2daQ0ErUGo0Z01EdGNiaUFnSUNCSVd6UmRJRDBnU0ZzMFhTQXJJR1VnUGo0K0lEQTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdXMGhiTUYwZ1BqNGdNalFnSmlBd2VHWm1MQ0JJV3pCZElENCtJREUySUNZZ01IaG1aaXdnU0Zzd1hTQStQaUE0SUNZZ01IaG1aaXdnU0Zzd1hTQW1JREI0Wm1Zc0lFaGJNVjBnUGo0Z01qUWdKaUF3ZUdabUxDQklXekZkSUQ0K0lERTJJQ1lnTUhobVppd2dTRnN4WFNBK1BpQTRJQ1lnTUhobVppd2dTRnN4WFNBbUlEQjRabVlzSUVoYk1sMGdQajRnTWpRZ0ppQXdlR1ptTENCSVd6SmRJRDQrSURFMklDWWdNSGhtWml3Z1NGc3lYU0ErUGlBNElDWWdNSGhtWml3Z1NGc3lYU0FtSURCNFptWXNJRWhiTTEwZ1BqNGdNalFnSmlBd2VHWm1MQ0JJV3pOZElENCtJREUySUNZZ01IaG1aaXdnU0ZzelhTQStQaUE0SUNZZ01IaG1aaXdnU0ZzelhTQW1JREI0Wm1Zc0lFaGJORjBnUGo0Z01qUWdKaUF3ZUdabUxDQklXelJkSUQ0K0lERTJJQ1lnTUhobVppd2dTRnMwWFNBK1BpQTRJQ1lnTUhobVppd2dTRnMwWFNBbUlEQjRabVpkTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnphR0V4T3lJc0ltbHRjRzl5ZENCMllXeHBaR0YwWlNCbWNtOXRJQ2N1TDNaaGJHbGtZWFJsTG1wekp6dGNiaThxS2x4dUlDb2dRMjl1ZG1WeWRDQmhjbkpoZVNCdlppQXhOaUJpZVhSbElIWmhiSFZsY3lCMGJ5QlZWVWxFSUhOMGNtbHVaeUJtYjNKdFlYUWdiMllnZEdobElHWnZjbTA2WEc0Z0tpQllXRmhZV0ZoWVdDMVlXRmhZTFZoWVdGZ3RXRmhZV0MxWVdGaFlXRmhZV0ZoWVdGaGNiaUFxTDF4dVhHNTJZWElnWW5sMFpWUnZTR1Y0SUQwZ1cxMDdYRzVjYm1admNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z01qVTJPeUFySzJrcElIdGNiaUFnWW5sMFpWUnZTR1Y0TG5CMWMyZ29LR2tnS3lBd2VERXdNQ2t1ZEc5VGRISnBibWNvTVRZcExuTjFZbk4wY2lneEtTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlITjBjbWx1WjJsbWVTaGhjbklwSUh0Y2JpQWdkbUZ5SUc5bVpuTmxkQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeElDWW1JR0Z5WjNWdFpXNTBjMXN4WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pGZElEb2dNRHRjYmlBZ0x5OGdUbTkwWlRvZ1FtVWdZMkZ5WldaMWJDQmxaR2wwYVc1bklIUm9hWE1nWTI5a1pTRWdJRWwwSjNNZ1ltVmxiaUIwZFc1bFpDQm1iM0lnY0dWeVptOXliV0Z1WTJWY2JpQWdMeThnWVc1a0lIZHZjbXR6SUdsdUlIZGhlWE1nZVc5MUlHMWhlU0J1YjNRZ1pYaHdaV04wTGlCVFpXVWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM1YxYVdScWN5OTFkV2xrTDNCMWJHd3ZORE0wWEc0Z0lIWmhjaUIxZFdsa0lEMGdLR0o1ZEdWVWIwaGxlRnRoY25KYmIyWm1jMlYwSUNzZ01GMWRJQ3NnWW5sMFpWUnZTR1Y0VzJGeWNsdHZabVp6WlhRZ0t5QXhYVjBnS3lCaWVYUmxWRzlJWlhoYllYSnlXMjltWm5ObGRDQXJJREpkWFNBcklHSjVkR1ZVYjBobGVGdGhjbkpiYjJabWMyVjBJQ3NnTTExZElDc2dKeTBuSUNzZ1lubDBaVlJ2U0dWNFcyRnljbHR2Wm1aelpYUWdLeUEwWFYwZ0t5QmllWFJsVkc5SVpYaGJZWEp5VzI5bVpuTmxkQ0FySURWZFhTQXJJQ2N0SnlBcklHSjVkR1ZVYjBobGVGdGhjbkpiYjJabWMyVjBJQ3NnTmwxZElDc2dZbmwwWlZSdlNHVjRXMkZ5Y2x0dlptWnpaWFFnS3lBM1hWMGdLeUFuTFNjZ0t5QmllWFJsVkc5SVpYaGJZWEp5VzI5bVpuTmxkQ0FySURoZFhTQXJJR0o1ZEdWVWIwaGxlRnRoY25KYmIyWm1jMlYwSUNzZ09WMWRJQ3NnSnkwbklDc2dZbmwwWlZSdlNHVjRXMkZ5Y2x0dlptWnpaWFFnS3lBeE1GMWRJQ3NnWW5sMFpWUnZTR1Y0VzJGeWNsdHZabVp6WlhRZ0t5QXhNVjFkSUNzZ1lubDBaVlJ2U0dWNFcyRnljbHR2Wm1aelpYUWdLeUF4TWwxZElDc2dZbmwwWlZSdlNHVjRXMkZ5Y2x0dlptWnpaWFFnS3lBeE0xMWRJQ3NnWW5sMFpWUnZTR1Y0VzJGeWNsdHZabVp6WlhRZ0t5QXhORjFkSUNzZ1lubDBaVlJ2U0dWNFcyRnljbHR2Wm1aelpYUWdLeUF4TlYxZEtTNTBiMHh2ZDJWeVEyRnpaU2dwT3lBdkx5QkRiMjV6YVhOMFpXNWplU0JqYUdWamF5Qm1iM0lnZG1Gc2FXUWdWVlZKUkM0Z0lFbG1JSFJvYVhNZ2RHaHliM2R6TENCcGRDZHpJR3hwYTJWc2VTQmtkV1VnZEc4Z2IyNWxYRzRnSUM4dklHOW1JSFJvWlNCbWIyeHNiM2RwYm1jNlhHNGdJQzh2SUMwZ1QyNWxJRzl5SUcxdmNtVWdhVzV3ZFhRZ1lYSnlZWGtnZG1Gc2RXVnpJR1J2YmlkMElHMWhjQ0IwYnlCaElHaGxlQ0J2WTNSbGRDQW9iR1ZoWkdsdVp5QjBiMXh1SUNBdkx5QmNJblZ1WkdWbWFXNWxaRndpSUdsdUlIUm9aU0IxZFdsa0tWeHVJQ0F2THlBdElFbHVkbUZzYVdRZ2FXNXdkWFFnZG1Gc2RXVnpJR1p2Y2lCMGFHVWdVa1pESUdCMlpYSnphVzl1WUNCdmNpQmdkbUZ5YVdGdWRHQWdabWxsYkdSelhHNWNiaUFnYVdZZ0tDRjJZV3hwWkdGMFpTaDFkV2xrS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRlI1Y0dWRmNuSnZjaWduVTNSeWFXNW5hV1pwWldRZ1ZWVkpSQ0JwY3lCcGJuWmhiR2xrSnlrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RYVnBaRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2MzUnlhVzVuYVdaNU95SXNJbWx0Y0c5eWRDQnlibWNnWm5KdmJTQW5MaTl5Ym1jdWFuTW5PMXh1YVcxd2IzSjBJSE4wY21sdVoybG1lU0JtY205dElDY3VMM04wY21sdVoybG1lUzVxY3ljN0lDOHZJQ29xWUhZeEtDbGdJQzBnUjJWdVpYSmhkR1VnZEdsdFpTMWlZWE5sWkNCVlZVbEVLaXBjYmk4dlhHNHZMeUJKYm5Od2FYSmxaQ0JpZVNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlRHbHZjMHN2VlZWSlJDNXFjMXh1THk4Z1lXNWtJR2gwZEhBNkx5OWtiMk56TG5CNWRHaHZiaTV2Y21jdmJHbGljbUZ5ZVM5MWRXbGtMbWgwYld4Y2JseHVkbUZ5SUY5dWIyUmxTV1E3WEc1Y2JuWmhjaUJmWTJ4dlkydHpaWEU3SUM4dklGQnlaWFpwYjNWeklIVjFhV1FnWTNKbFlYUnBiMjRnZEdsdFpWeHVYRzVjYm5aaGNpQmZiR0Z6ZEUxVFpXTnpJRDBnTUR0Y2JuWmhjaUJmYkdGemRFNVRaV056SUQwZ01Ec2dMeThnVTJWbElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTFkV2xrYW5NdmRYVnBaQ0JtYjNJZ1FWQkpJR1JsZEdGcGJITmNibHh1Wm5WdVkzUnBiMjRnZGpFb2IzQjBhVzl1Y3l3Z1luVm1MQ0J2Wm1aelpYUXBJSHRjYmlBZ2RtRnlJR2tnUFNCaWRXWWdKaVlnYjJabWMyVjBJSHg4SURBN1hHNGdJSFpoY2lCaUlEMGdZblZtSUh4OElHNWxkeUJCY25KaGVTZ3hOaWs3WEc0Z0lHOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5TzF4dUlDQjJZWElnYm05a1pTQTlJRzl3ZEdsdmJuTXVibTlrWlNCOGZDQmZibTlrWlVsa08xeHVJQ0IyWVhJZ1kyeHZZMnR6WlhFZ1BTQnZjSFJwYjI1ekxtTnNiMk5yYzJWeElDRTlQU0IxYm1SbFptbHVaV1FnUHlCdmNIUnBiMjV6TG1Oc2IyTnJjMlZ4SURvZ1gyTnNiMk5yYzJWeE95QXZMeUJ1YjJSbElHRnVaQ0JqYkc5amEzTmxjU0J1WldWa0lIUnZJR0psSUdsdWFYUnBZV3hwZW1Wa0lIUnZJSEpoYm1SdmJTQjJZV3gxWlhNZ2FXWWdkR2hsZVNkeVpTQnViM1JjYmlBZ0x5OGdjM0JsWTJsbWFXVmtMaUFnVjJVZ1pHOGdkR2hwY3lCc1lYcHBiSGtnZEc4Z2JXbHVhVzFwZW1VZ2FYTnpkV1Z6SUhKbGJHRjBaV1FnZEc4Z2FXNXpkV1ptYVdOcFpXNTBYRzRnSUM4dklITjVjM1JsYlNCbGJuUnliM0I1TGlBZ1UyVmxJQ014T0RsY2JseHVJQ0JwWmlBb2JtOWtaU0E5UFNCdWRXeHNJSHg4SUdOc2IyTnJjMlZ4SUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0IyWVhJZ2MyVmxaRUo1ZEdWeklEMGdiM0IwYVc5dWN5NXlZVzVrYjIwZ2ZId2dLRzl3ZEdsdmJuTXVjbTVuSUh4OElISnVaeWtvS1R0Y2JseHVJQ0FnSUdsbUlDaHViMlJsSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUM4dklGQmxjaUEwTGpVc0lHTnlaV0YwWlNCaGJtUWdORGd0WW1sMElHNXZaR1VnYVdRc0lDZzBOeUJ5WVc1a2IyMGdZbWwwY3lBcklHMTFiSFJwWTJGemRDQmlhWFFnUFNBeEtWeHVJQ0FnSUNBZ2JtOWtaU0E5SUY5dWIyUmxTV1FnUFNCYmMyVmxaRUo1ZEdWeld6QmRJSHdnTUhnd01Td2djMlZsWkVKNWRHVnpXekZkTENCelpXVmtRbmwwWlhOYk1sMHNJSE5sWldSQ2VYUmxjMXN6WFN3Z2MyVmxaRUo1ZEdWeld6UmRMQ0J6WldWa1FubDBaWE5iTlYxZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGpiRzlqYTNObGNTQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQXZMeUJRWlhJZ05DNHlMaklzSUhKaGJtUnZiV2w2WlNBb01UUWdZbWwwS1NCamJHOWphM05sY1Z4dUlDQWdJQ0FnWTJ4dlkydHpaWEVnUFNCZlkyeHZZMnR6WlhFZ1BTQW9jMlZsWkVKNWRHVnpXelpkSUR3OElEZ2dmQ0J6WldWa1FubDBaWE5iTjEwcElDWWdNSGd6Wm1abU8xeHVJQ0FnSUgxY2JpQWdmU0F2THlCVlZVbEVJSFJwYldWemRHRnRjSE1nWVhKbElERXdNQ0J1WVc1dkxYTmxZMjl1WkNCMWJtbDBjeUJ6YVc1alpTQjBhR1VnUjNKbFoyOXlhV0Z1SUdWd2IyTm9MRnh1SUNBdkx5QW9NVFU0TWkweE1DMHhOU0F3TURvd01Da3VJQ0JLVTA1MWJXSmxjbk1nWVhKbGJpZDBJSEJ5WldOcGMyVWdaVzV2ZFdkb0lHWnZjaUIwYUdsekxDQnpiMXh1SUNBdkx5QjBhVzFsSUdseklHaGhibVJzWldRZ2FXNTBaWEp1WVd4c2VTQmhjeUFuYlhObFkzTW5JQ2hwYm5SbFoyVnlJRzFwYkd4cGMyVmpiMjVrY3lrZ1lXNWtJQ2R1YzJWamN5ZGNiaUFnTHk4Z0tERXdNQzF1WVc1dmMyVmpiMjVrY3lCdlptWnpaWFFnWm5KdmJTQnRjMlZqY3lrZ2MybHVZMlVnZFc1cGVDQmxjRzlqYUN3Z01UazNNQzB3TVMwd01TQXdNRG93TUM1Y2JseHVYRzRnSUhaaGNpQnRjMlZqY3lBOUlHOXdkR2x2Ym5NdWJYTmxZM01nSVQwOUlIVnVaR1ZtYVc1bFpDQS9JRzl3ZEdsdmJuTXViWE5sWTNNZ09pQkVZWFJsTG01dmR5Z3BPeUF2THlCUVpYSWdOQzR5TGpFdU1pd2dkWE5sSUdOdmRXNTBJRzltSUhWMWFXUW5jeUJuWlc1bGNtRjBaV1FnWkhWeWFXNW5JSFJvWlNCamRYSnlaVzUwSUdOc2IyTnJYRzRnSUM4dklHTjVZMnhsSUhSdklITnBiWFZzWVhSbElHaHBaMmhsY2lCeVpYTnZiSFYwYVc5dUlHTnNiMk5yWEc1Y2JpQWdkbUZ5SUc1elpXTnpJRDBnYjNCMGFXOXVjeTV1YzJWamN5QWhQVDBnZFc1a1pXWnBibVZrSUQ4Z2IzQjBhVzl1Y3k1dWMyVmpjeUE2SUY5c1lYTjBUbE5sWTNNZ0t5QXhPeUF2THlCVWFXMWxJSE5wYm1ObElHeGhjM1FnZFhWcFpDQmpjbVZoZEdsdmJpQW9hVzRnYlhObFkzTXBYRzVjYmlBZ2RtRnlJR1IwSUQwZ2JYTmxZM01nTFNCZmJHRnpkRTFUWldOeklDc2dLRzV6WldOeklDMGdYMnhoYzNST1UyVmpjeWtnTHlBeE1EQXdNRHNnTHk4Z1VHVnlJRFF1TWk0eExqSXNJRUoxYlhBZ1kyeHZZMnR6WlhFZ2IyNGdZMnh2WTJzZ2NtVm5jbVZ6YzJsdmJseHVYRzRnSUdsbUlDaGtkQ0E4SURBZ0ppWWdiM0IwYVc5dWN5NWpiRzlqYTNObGNTQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnWTJ4dlkydHpaWEVnUFNCamJHOWphM05sY1NBcklERWdKaUF3ZURObVptWTdYRzRnSUgwZ0x5OGdVbVZ6WlhRZ2JuTmxZM01nYVdZZ1kyeHZZMnNnY21WbmNtVnpjMlZ6SUNodVpYY2dZMnh2WTJ0elpYRXBJRzl5SUhkbEozWmxJRzF2ZG1Wa0lHOXVkRzhnWVNCdVpYZGNiaUFnTHk4Z2RHbHRaU0JwYm5SbGNuWmhiRnh1WEc1Y2JpQWdhV1lnS0Noa2RDQThJREFnZkh3Z2JYTmxZM01nUGlCZmJHRnpkRTFUWldOektTQW1KaUJ2Y0hScGIyNXpMbTV6WldOeklEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0J1YzJWamN5QTlJREE3WEc0Z0lIMGdMeThnVUdWeUlEUXVNaTR4TGpJZ1ZHaHliM2NnWlhKeWIzSWdhV1lnZEc5dklHMWhibmtnZFhWcFpITWdZWEpsSUhKbGNYVmxjM1JsWkZ4dVhHNWNiaUFnYVdZZ0tHNXpaV056SUQ0OUlERXdNREF3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpZFhWcFpDNTJNU2dwT2lCRFlXNG5kQ0JqY21WaGRHVWdiVzl5WlNCMGFHRnVJREV3VFNCMWRXbGtjeTl6WldOY0lpazdYRzRnSUgxY2JseHVJQ0JmYkdGemRFMVRaV056SUQwZ2JYTmxZM003WEc0Z0lGOXNZWE4wVGxObFkzTWdQU0J1YzJWamN6dGNiaUFnWDJOc2IyTnJjMlZ4SUQwZ1kyeHZZMnR6WlhFN0lDOHZJRkJsY2lBMExqRXVOQ0F0SUVOdmJuWmxjblFnWm5KdmJTQjFibWw0SUdWd2IyTm9JSFJ2SUVkeVpXZHZjbWxoYmlCbGNHOWphRnh1WEc0Z0lHMXpaV056SUNzOUlERXlNakU1TWpreU9EQXdNREF3T3lBdkx5QmdkR2x0WlY5c2IzZGdYRzVjYmlBZ2RtRnlJSFJzSUQwZ0tDaHRjMlZqY3lBbUlEQjRabVptWm1abVppa2dLaUF4TURBd01DQXJJRzV6WldOektTQWxJREI0TVRBd01EQXdNREF3TzF4dUlDQmlXMmtySzEwZ1BTQjBiQ0ErUGo0Z01qUWdKaUF3ZUdabU8xeHVJQ0JpVzJrcksxMGdQU0IwYkNBK1BqNGdNVFlnSmlBd2VHWm1PMXh1SUNCaVcya3JLMTBnUFNCMGJDQStQajRnT0NBbUlEQjRabVk3WEc0Z0lHSmJhU3NyWFNBOUlIUnNJQ1lnTUhobVpqc2dMeThnWUhScGJXVmZiV2xrWUZ4dVhHNGdJSFpoY2lCMGJXZ2dQU0J0YzJWamN5QXZJREI0TVRBd01EQXdNREF3SUNvZ01UQXdNREFnSmlBd2VHWm1abVptWm1ZN1hHNGdJR0piYVNzclhTQTlJSFJ0YUNBK1BqNGdPQ0FtSURCNFptWTdYRzRnSUdKYmFTc3JYU0E5SUhSdGFDQW1JREI0Wm1ZN0lDOHZJR0IwYVcxbFgyaHBaMmhmWVc1a1gzWmxjbk5wYjI1Z1hHNWNiaUFnWWx0cEt5dGRJRDBnZEcxb0lENCtQaUF5TkNBbUlEQjRaaUI4SURCNE1UQTdJQzh2SUdsdVkyeDFaR1VnZG1WeWMybHZibHh1WEc0Z0lHSmJhU3NyWFNBOUlIUnRhQ0ErUGo0Z01UWWdKaUF3ZUdabU95QXZMeUJnWTJ4dlkydGZjMlZ4WDJocFgyRnVaRjl5WlhObGNuWmxaR0FnS0ZCbGNpQTBMakl1TWlBdElHbHVZMngxWkdVZ2RtRnlhV0Z1ZENsY2JseHVJQ0JpVzJrcksxMGdQU0JqYkc5amEzTmxjU0ErUGo0Z09DQjhJREI0T0RBN0lDOHZJR0JqYkc5amExOXpaWEZmYkc5M1lGeHVYRzRnSUdKYmFTc3JYU0E5SUdOc2IyTnJjMlZ4SUNZZ01IaG1aanNnTHk4Z1lHNXZaR1ZnWEc1Y2JpQWdabTl5SUNoMllYSWdiaUE5SURBN0lHNGdQQ0EyT3lBcksyNHBJSHRjYmlBZ0lDQmlXMmtnS3lCdVhTQTlJRzV2WkdWYmJsMDdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZblZtSUh4OElITjBjbWx1WjJsbWVTaGlLVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RqRTdJaXdpYVcxd2IzSjBJSFl6TlNCbWNtOXRJQ2N1TDNZek5TNXFjeWM3WEc1cGJYQnZjblFnYldRMUlHWnliMjBnSnk0dmJXUTFMbXB6Snp0Y2JuWmhjaUIyTXlBOUlIWXpOU2duZGpNbkxDQXdlRE13TENCdFpEVXBPMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkak03SWl3aWFXMXdiM0owSUhOMGNtbHVaMmxtZVNCbWNtOXRJQ2N1TDNOMGNtbHVaMmxtZVM1cWN5YzdYRzVwYlhCdmNuUWdjR0Z5YzJVZ1puSnZiU0FuTGk5d1lYSnpaUzVxY3ljN1hHNWNibVoxYm1OMGFXOXVJSE4wY21sdVoxUnZRbmwwWlhNb2MzUnlLU0I3WEc0Z0lITjBjaUE5SUhWdVpYTmpZWEJsS0dWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoemRISXBLVHNnTHk4Z1ZWUkdPQ0JsYzJOaGNHVmNibHh1SUNCMllYSWdZbmwwWlhNZ1BTQmJYVHRjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE4wY2k1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lHSjVkR1Z6TG5CMWMyZ29jM1J5TG1Ob1lYSkRiMlJsUVhRb2FTa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR0o1ZEdWek8xeHVmVnh1WEc1bGVIQnZjblFnZG1GeUlFUk9VeUE5SUNjMlltRTNZamd4TUMwNVpHRmtMVEV4WkRFdE9EQmlOQzB3TUdNd05HWmtORE13WXpnbk8xeHVaWGh3YjNKMElIWmhjaUJWVWt3Z1BTQW5ObUpoTjJJNE1URXRPV1JoWkMweE1XUXhMVGd3WWpRdE1EQmpNRFJtWkRRek1HTTRKenRjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2h1WVcxbExDQjJaWEp6YVc5dUxDQm9ZWE5vWm5WdVl5a2dlMXh1SUNCbWRXNWpkR2x2YmlCblpXNWxjbUYwWlZWVlNVUW9kbUZzZFdVc0lHNWhiV1Z6Y0dGalpTd2dZblZtTENCdlptWnpaWFFwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCemRISnBibWRVYjBKNWRHVnpLSFpoYkhWbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHNWhiV1Z6Y0dGalpTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUc1aGJXVnpjR0ZqWlNBOUlIQmhjbk5sS0c1aGJXVnpjR0ZqWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHNWhiV1Z6Y0dGalpTNXNaVzVuZEdnZ0lUMDlJREUyS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJVZVhCbFJYSnliM0lvSjA1aGJXVnpjR0ZqWlNCdGRYTjBJR0psSUdGeWNtRjVMV3hwYTJVZ0tERTJJR2wwWlhKaFlteGxJR2x1ZEdWblpYSWdkbUZzZFdWekxDQXdMVEkxTlNrbktUdGNiaUFnSUNCOUlDOHZJRU52YlhCMWRHVWdhR0Z6YUNCdlppQnVZVzFsYzNCaFkyVWdZVzVrSUhaaGJIVmxMQ0JRWlhJZ05DNHpYRzRnSUNBZ0x5OGdSblYwZFhKbE9pQlZjMlVnYzNCeVpXRmtJSE41Ym5SaGVDQjNhR1Z1SUhOMWNIQnZjblJsWkNCdmJpQmhiR3dnY0d4aGRHWnZjbTF6TENCbExtY3VJR0JpZVhSbGN5QTlYRzRnSUNBZ0x5OGdhR0Z6YUdaMWJtTW9XeTR1TG01aGJXVnpjR0ZqWlN3Z0xpNHVJSFpoYkhWbFhTbGdYRzVjYmx4dUlDQWdJSFpoY2lCaWVYUmxjeUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLREUySUNzZ2RtRnNkV1V1YkdWdVozUm9LVHRjYmlBZ0lDQmllWFJsY3k1elpYUW9ibUZ0WlhOd1lXTmxLVHRjYmlBZ0lDQmllWFJsY3k1elpYUW9kbUZzZFdVc0lHNWhiV1Z6Y0dGalpTNXNaVzVuZEdncE8xeHVJQ0FnSUdKNWRHVnpJRDBnYUdGemFHWjFibU1vWW5sMFpYTXBPMXh1SUNBZ0lHSjVkR1Z6V3paZElEMGdZbmwwWlhOYk5sMGdKaUF3ZURCbUlId2dkbVZ5YzJsdmJqdGNiaUFnSUNCaWVYUmxjMXM0WFNBOUlHSjVkR1Z6V3poZElDWWdNSGd6WmlCOElEQjRPREE3WEc1Y2JpQWdJQ0JwWmlBb1luVm1LU0I3WEc0Z0lDQWdJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmSHdnTUR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXhOanNnS3l0cEtTQjdYRzRnSUNBZ0lDQWdJR0oxWmx0dlptWnpaWFFnS3lCcFhTQTlJR0o1ZEdWelcybGRPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZblZtTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnpkSEpwYm1kcFpua29ZbmwwWlhNcE8xeHVJQ0I5SUM4dklFWjFibU4wYVc5dUkyNWhiV1VnYVhNZ2JtOTBJSE5sZEhSaFlteGxJRzl1SUhOdmJXVWdjR3hoZEdadmNtMXpJQ2dqTWpjd0tWeHVYRzVjYmlBZ2RISjVJSHRjYmlBZ0lDQm5aVzVsY21GMFpWVlZTVVF1Ym1GdFpTQTlJRzVoYldVN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTFsYlhCMGVWeHVJQ0I5SUdOaGRHTm9JQ2hsY25JcElIdDlJQzh2SUVadmNpQkRiMjF0YjI1S1V5QmtaV1poZFd4MElHVjRjRzl5ZENCemRYQndiM0owWEc1Y2JseHVJQ0JuWlc1bGNtRjBaVlZWU1VRdVJFNVRJRDBnUkU1VE8xeHVJQ0JuWlc1bGNtRjBaVlZWU1VRdVZWSk1JRDBnVlZKTU8xeHVJQ0J5WlhSMWNtNGdaMlZ1WlhKaGRHVlZWVWxFTzF4dWZTSXNJbWx0Y0c5eWRDQnlibWNnWm5KdmJTQW5MaTl5Ym1jdWFuTW5PMXh1YVcxd2IzSjBJSE4wY21sdVoybG1lU0JtY205dElDY3VMM04wY21sdVoybG1lUzVxY3ljN1hHNWNibVoxYm1OMGFXOXVJSFkwS0c5d2RHbHZibk1zSUdKMVppd2diMlptYzJWMEtTQjdYRzRnSUc5d2RHbHZibk1nUFNCdmNIUnBiMjV6SUh4OElIdDlPMXh1SUNCMllYSWdjbTVrY3lBOUlHOXdkR2x2Ym5NdWNtRnVaRzl0SUh4OElDaHZjSFJwYjI1ekxuSnVaeUI4ZkNCeWJtY3BLQ2s3SUM4dklGQmxjaUEwTGpRc0lITmxkQ0JpYVhSeklHWnZjaUIyWlhKemFXOXVJR0Z1WkNCZ1kyeHZZMnRmYzJWeFgyaHBYMkZ1WkY5eVpYTmxjblpsWkdCY2JseHVJQ0J5Ym1Seld6WmRJRDBnY201a2MxczJYU0FtSURCNE1HWWdmQ0F3ZURRd08xeHVJQ0J5Ym1Seld6aGRJRDBnY201a2MxczRYU0FtSURCNE0yWWdmQ0F3ZURnd095QXZMeUJEYjNCNUlHSjVkR1Z6SUhSdklHSjFabVpsY2l3Z2FXWWdjSEp2ZG1sa1pXUmNibHh1SUNCcFppQW9ZblZtS1NCN1hHNGdJQ0FnYjJabWMyVjBJRDBnYjJabWMyVjBJSHg4SURBN1hHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElERTJPeUFySzJrcElIdGNiaUFnSUNBZ0lHSjFabHR2Wm1aelpYUWdLeUJwWFNBOUlISnVaSE5iYVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR0oxWmp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRISnBibWRwWm5rb2NtNWtjeWs3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIWTBPeUlzSW1sdGNHOXlkQ0IyTXpVZ1puSnZiU0FuTGk5Mk16VXVhbk1uTzF4dWFXMXdiM0owSUhOb1lURWdabkp2YlNBbkxpOXphR0V4TG1wekp6dGNiblpoY2lCMk5TQTlJSFl6TlNnbmRqVW5MQ0F3ZURVd0xDQnphR0V4S1R0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhZMU95SXNJbWx0Y0c5eWRDQlNSVWRGV0NCbWNtOXRJQ2N1TDNKbFoyVjRMbXB6Snp0Y2JseHVablZ1WTNScGIyNGdkbUZzYVdSaGRHVW9kWFZwWkNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIVjFhV1FnUFQwOUlDZHpkSEpwYm1jbklDWW1JRkpGUjBWWUxuUmxjM1FvZFhWcFpDazdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhaaGJHbGtZWFJsT3lJc0ltbHRjRzl5ZENCMllXeHBaR0YwWlNCbWNtOXRJQ2N1TDNaaGJHbGtZWFJsTG1wekp6dGNibHh1Wm5WdVkzUnBiMjRnZG1WeWMybHZiaWgxZFdsa0tTQjdYRzRnSUdsbUlDZ2hkbUZzYVdSaGRHVW9kWFZwWkNrcElIdGNiaUFnSUNCMGFISnZkeUJVZVhCbFJYSnliM0lvSjBsdWRtRnNhV1FnVlZWSlJDY3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEJoY25ObFNXNTBLSFYxYVdRdWMzVmljM1J5S0RFMExDQXhLU3dnTVRZcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0IyWlhKemFXOXVPeUlzSW1sdGNHOXlkQ0JTWldGamRDd2dlM1Z6WlVWbVptVmpkQ3dnZFhObFVtVm1mU0JtY205dElDZHlaV0ZqZENjN1hISmNibWx0Y0c5eWRDQkRiMjF3YjI1bGJuUlhjbUZ3Y0dWeUlHWnliMjBnWENJdUwwTnZiWEJ2Ym1WdWRGZHlZWEJ3WlhKY0lqdGNjbHh1WEhKY2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1NVTnZiWEJ2Ym1WdWRGQnliM0J6SUh0Y2NseHVJQ0JqYjIxd2IyNWxiblE2SUVOdmJYQnZibVZ1ZEZkeVlYQndaWEk3WEhKY2JuMWNjbHh1WEhKY2JseHlYRzVtZFc1amRHbHZiaUJEYjIxd2IyNWxiblFvZTJOdmJYQnZibVZ1ZEgwNklFbERiMjF3YjI1bGJuUlFjbTl3Y3lrNklFcFRXQzVGYkdWdFpXNTBJSHRjY2x4dUlDQXZMeUJVVDBSUE9pQm1hWGdnZFhOcGJtY2dhRzl2YTNNZ0tIQnliMkpoWW14NUlESWdkbVZ5YzJsdmJuTWdiMllnY21WaFkzUXNJRzVsWldRZ2RHOGdZV3hwWVhNZ2FYUXBYSEpjYmlBZ1kyOXVjM1FnWld4bGJXVnVkRkpsWmlBOUlIVnpaVkpsWmp4SVZFMU1SR2wyUld4bGJXVnVkQ0I4SUc1MWJHdytLRzUxYkd3cE8xeHlYRzVjY2x4dVhISmNiaUFnTHk4Z2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2NseHVJQ0F2THlBZ0lHbG1JQ2hsYkdWdFpXNTBVbVZtTG1OMWNuSmxiblFwSUh0Y2NseHVJQ0F2THlBZ0lDQWdZMjl0Y0c5dVpXNTBMbTF2ZFc1MEtHVnNaVzFsYm5SU1pXWXVZM1Z5Y21WdWRDazdYSEpjYmlBZ0x5OGdJQ0I5WEhKY2JpQWdMeThnZlN3Z1cxMHBPMXh5WEc1Y2NseHVJQ0J5WlhSMWNtNGdQR1JwZGo1MFpYTjBQQzlrYVhZK08xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkRiMjF3YjI1bGJuUTdJaXdpYVcxd2IzSjBJRU52YlhCdmJtVnVkRmR5WVhCd1pYSWdabkp2YlNCY0lpNHZRMjl0Y0c5dVpXNTBWM0poY0hCbGNsd2lPMXh5WEc1Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUTI5dGNHOXVaVzUwVFdGdVlXZGxjaUI3WEhKY2JpQWdjSEpwZG1GMFpTQnpkR0YwYVdNZ2FXNXpkR0Z1WTJVNklFTnZiWEJ2Ym1WdWRFMWhibUZuWlhJN1hISmNiaUFnY0hKcGRtRjBaU0JqYjIxd2IyNWxiblJ6T2lCTllYQThjM1J5YVc1bkxDQkRiMjF3YjI1bGJuUlhjbUZ3Y0dWeVBpQTlJRzVsZHlCTllYQW9LVHRjY2x4dVhISmNiaUFnY0hKcGRtRjBaU0JqYjI1emRISjFZM1J2Y2lncElIdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lITjBZWFJwWXlCblpYUkpibk4wWVc1alpTZ3BJSHRjY2x4dUlDQWdJR2xtSUNnaGRHaHBjeTVwYm5OMFlXNWpaU2tnZTF4eVhHNGdJQ0FnSUNCMGFHbHpMbWx1YzNSaGJtTmxJRDBnYm1WM0lFTnZiWEJ2Ym1WdWRFMWhibUZuWlhJb0tUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx1YzNSaGJtTmxPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklISmxaMmx6ZEdWeVEyOXRjRzl1Wlc1MEtHTnZiWEJ2Ym1WdWREb2dRMjl0Y0c5dVpXNTBWM0poY0hCbGNpa2dlMXh5WEc0Z0lDQWdkR2hwY3k1amIyMXdiMjVsYm5SekxuTmxkQ2hqYjIxd2IyNWxiblF1ZFhWcFpDd2dZMjl0Y0c5dVpXNTBLVHRjY2x4dVhISmNiaUFnSUNCamIyNXpiMnhsTG14dlp5aDBhR2x6TG1OdmJYQnZibVZ1ZEhNcE8xeHlYRzRnSUgxY2NseHVmU0lzSW1sdGNHOXlkQ0I3ZGpRZ1lYTWdkWFZwWkgwZ1puSnZiU0FuZFhWcFpDYzdYSEpjYm1sdGNHOXlkQ0JEYjIxd2IyNWxiblJOWVc1aFoyVnlJR1p5YjIwZ1hDSXVMME52YlhCdmJtVnVkRTFoYm1GblpYSmNJanRjY2x4dVhISmNibVY0Y0c5eWRDQjBlWEJsSUVsTmIzVnVkRVZzWlcxbGJuUWdQU0FvY0dGeVpXNTBSV3hsYldWdWREb2dTRlJOVEVWc1pXMWxiblFwSUQwK0lIWnZhV1E3WEhKY2JtVjRjRzl5ZENCMGVYQmxJRWxWYm0xdmRXNTBSV3hsYldWdWRDQTlJQ2h3WVhKbGJuUkZiR1Z0Wlc1ME9pQklWRTFNUld4bGJXVnVkQ2tnUFQ0Z2RtOXBaRHRjY2x4dVhISmNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdTVU52Ym5OMGNuVmpkRzl5UVhKbmN5QjdYSEpjYmlBZ2JXOTFiblJGYkdWdFpXNTBPaUJKVFc5MWJuUkZiR1Z0Wlc1ME8xeHlYRzRnSUhWdWJXOTFiblJGYkdWdFpXNTBPaUJKVlc1dGIzVnVkRVZzWlcxbGJuUTdYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFTnZiWEJ2Ym1WdWRGZHlZWEJ3WlhJZ2UxeHlYRzRnSUhWMWFXUTZJSE4wY21sdVp6dGNjbHh1WEhKY2JpQWdjSEpwZG1GMFpTQmpiMjF3YjI1bGJuUk5ZVzVoWjJWeU9pQkRiMjF3YjI1bGJuUk5ZVzVoWjJWeUlEMGdRMjl0Y0c5dVpXNTBUV0Z1WVdkbGNpNW5aWFJKYm5OMFlXNWpaU2dwTzF4eVhHNWNjbHh1SUNCd2NtbDJZWFJsSUhKbFlXUnZibXg1SUcxdmRXNTBSV3hsYldWdWREb2dTVTF2ZFc1MFJXeGxiV1Z1ZER0Y2NseHVJQ0J3Y21sMllYUmxJSEpsWVdSdmJteDVJSFZ1Ylc5MWJuUkZiR1Z0Wlc1ME9pQkpWVzV0YjNWdWRFVnNaVzFsYm5RN1hISmNibHh5WEc0Z0lHTnZibk4wY25WamRHOXlLSHR0YjNWdWRFVnNaVzFsYm5Rc0lIVnViVzkxYm5SRmJHVnRaVzUwZlRvZ1NVTnZibk4wY25WamRHOXlRWEpuY3lrZ2UxeHlYRzRnSUNBZ2RHaHBjeTV0YjNWdWRFVnNaVzFsYm5RZ1BTQnRiM1Z1ZEVWc1pXMWxiblE3WEhKY2JpQWdJQ0IwYUdsekxuVnViVzkxYm5SRmJHVnRaVzUwSUQwZ2RXNXRiM1Z1ZEVWc1pXMWxiblE3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTUxZFdsa0lEMGdkWFZwWkNncE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2JXOTFiblFvWld4bGJXVnVkRG9nU0ZSTlRFVnNaVzFsYm5RcE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUdsbUlDZ2haV3hsYldWdWRDa2dlMXh5WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDZERiM1ZzWkNCdWIzUWdabWx1WkNCbGJHVnRaVzUwSUhkcGRHZ2dhV1FnY205dmRDNGdUVzkxYm5ScGJtY2dZV0p2Y25SbFpDNG5LVHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVZMjl0Y0c5dVpXNTBUV0Z1WVdkbGNpNXlaV2RwYzNSbGNrTnZiWEJ2Ym1WdWRDaDBhR2x6S1R0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG0xdmRXNTBSV3hsYldWdWRDaGxiR1Z0Wlc1MEtUdGNjbHh1SUNCOVhISmNibjFjY2x4dUlpd2laWGh3YjNKMElIdGtaV1poZFd4MElHRnpJRU52YlhCdmJtVnVkRTFoYm1GblpYSjlJR1p5YjIwZ0p5NHZRMjl0Y0c5dVpXNTBUV0Z1WVdkbGNpYzdYSEpjYm1WNGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCRGIyMXdiMjVsYm5SWGNtRndjR1Z5ZlNCbWNtOXRJQ2N1TDBOdmJYQnZibVZ1ZEZkeVlYQndaWEluTzF4eVhHNWxlSEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdRMjl0Y0c5dVpXNTBMQ0JKUTI5dGNHOXVaVzUwVUhKdmNITjlJR1p5YjIwZ1hDSXVMME52YlhCdmJtVnVkRndpTzF4eVhHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZjbVZoWTNSZlh6c2lYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVHlwZVNjcmlwdCBSZWFjdCB0ZW1wbGF0ZS5cIikpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFdyYXBwZXIgfSBmcm9tIFwiQGx1a2Fzei1zdGFyb3N0YS9taWNyby1jb25uZWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcbnZhciBTdHJpY3RNb2RlQXBwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3RyaWN0TW9kZSwgbnVsbCxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tcG9uZW50V3JhcHBlcih7XHJcbiAgICBtb3VudEVsZW1lbnQ6IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7IHJldHVybiBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChTdHJpY3RNb2RlQXBwLCBudWxsKSwgcGFyZW50RWxlbWVudCk7IH0sXHJcbiAgICB1bm1vdW50RWxlbWVudDogKGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7IGNvbnNvbGUuaW5mbyhcInVubW91bnQgZnJvbSBcIiArIHBhcmVudEVsZW1lbnQpOyB9KVxyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB1bmRlZmluZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSB1bmRlZmluZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==