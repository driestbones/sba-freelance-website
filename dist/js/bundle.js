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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/320.jpeg":
/*!*************************!*\
  !*** ./images/320.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/320.jpeg\";\n\n//# sourceURL=webpack:///./images/320.jpeg?");

/***/ }),

/***/ "./images/96.jpg":
/*!***********************!*\
  !*** ./images/96.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/96.jpg\";\n\n//# sourceURL=webpack:///./images/96.jpg?");

/***/ }),

/***/ "./images/foods sync recursive ^\\.\\/img\\-.*\\.jpg$":
/*!**********************************************!*\
  !*** ./images/foods sync ^\.\/img\-.*\.jpg$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./img-1.jpg\": \"./images/foods/img-1.jpg\",\n\t\"./img-10.jpg\": \"./images/foods/img-10.jpg\",\n\t\"./img-11.jpg\": \"./images/foods/img-11.jpg\",\n\t\"./img-12.jpg\": \"./images/foods/img-12.jpg\",\n\t\"./img-13.jpg\": \"./images/foods/img-13.jpg\",\n\t\"./img-14.jpg\": \"./images/foods/img-14.jpg\",\n\t\"./img-15.jpg\": \"./images/foods/img-15.jpg\",\n\t\"./img-16.jpg\": \"./images/foods/img-16.jpg\",\n\t\"./img-17.jpg\": \"./images/foods/img-17.jpg\",\n\t\"./img-18.jpg\": \"./images/foods/img-18.jpg\",\n\t\"./img-19.jpg\": \"./images/foods/img-19.jpg\",\n\t\"./img-2.jpg\": \"./images/foods/img-2.jpg\",\n\t\"./img-20.jpg\": \"./images/foods/img-20.jpg\",\n\t\"./img-21.jpg\": \"./images/foods/img-21.jpg\",\n\t\"./img-22.jpg\": \"./images/foods/img-22.jpg\",\n\t\"./img-23.jpg\": \"./images/foods/img-23.jpg\",\n\t\"./img-24.jpg\": \"./images/foods/img-24.jpg\",\n\t\"./img-3.jpg\": \"./images/foods/img-3.jpg\",\n\t\"./img-4.jpg\": \"./images/foods/img-4.jpg\",\n\t\"./img-5.jpg\": \"./images/foods/img-5.jpg\",\n\t\"./img-6.jpg\": \"./images/foods/img-6.jpg\",\n\t\"./img-7.jpg\": \"./images/foods/img-7.jpg\",\n\t\"./img-8.jpg\": \"./images/foods/img-8.jpg\",\n\t\"./img-9.jpg\": \"./images/foods/img-9.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/foods sync recursive ^\\\\.\\\\/img\\\\-.*\\\\.jpg$\";\n\n//# sourceURL=webpack:///./images/foods_sync_^\\.\\/img\\-.*\\.jpg$?");

/***/ }),

/***/ "./images/foods/img-1.jpg":
/*!********************************!*\
  !*** ./images/foods/img-1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-1.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-1.jpg?");

/***/ }),

/***/ "./images/foods/img-10.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-10.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-10.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-10.jpg?");

/***/ }),

/***/ "./images/foods/img-11.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-11.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-11.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-11.jpg?");

/***/ }),

/***/ "./images/foods/img-12.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-12.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-12.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-12.jpg?");

/***/ }),

/***/ "./images/foods/img-13.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-13.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-13.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-13.jpg?");

/***/ }),

/***/ "./images/foods/img-14.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-14.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-14.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-14.jpg?");

/***/ }),

/***/ "./images/foods/img-15.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-15.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-15.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-15.jpg?");

/***/ }),

/***/ "./images/foods/img-16.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-16.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-16.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-16.jpg?");

/***/ }),

/***/ "./images/foods/img-17.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-17.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-17.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-17.jpg?");

/***/ }),

/***/ "./images/foods/img-18.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-18.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-18.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-18.jpg?");

/***/ }),

/***/ "./images/foods/img-19.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-19.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-19.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-19.jpg?");

/***/ }),

/***/ "./images/foods/img-2.jpg":
/*!********************************!*\
  !*** ./images/foods/img-2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-2.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-2.jpg?");

/***/ }),

/***/ "./images/foods/img-20.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-20.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-20.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-20.jpg?");

/***/ }),

/***/ "./images/foods/img-21.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-21.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-21.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-21.jpg?");

/***/ }),

/***/ "./images/foods/img-22.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-22.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-22.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-22.jpg?");

/***/ }),

/***/ "./images/foods/img-23.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-23.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-23.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-23.jpg?");

/***/ }),

/***/ "./images/foods/img-24.jpg":
/*!*********************************!*\
  !*** ./images/foods/img-24.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-24.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-24.jpg?");

/***/ }),

/***/ "./images/foods/img-3.jpg":
/*!********************************!*\
  !*** ./images/foods/img-3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-3.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-3.jpg?");

/***/ }),

/***/ "./images/foods/img-4.jpg":
/*!********************************!*\
  !*** ./images/foods/img-4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-4.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-4.jpg?");

/***/ }),

/***/ "./images/foods/img-5.jpg":
/*!********************************!*\
  !*** ./images/foods/img-5.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-5.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-5.jpg?");

/***/ }),

/***/ "./images/foods/img-6.jpg":
/*!********************************!*\
  !*** ./images/foods/img-6.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-6.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-6.jpg?");

/***/ }),

/***/ "./images/foods/img-7.jpg":
/*!********************************!*\
  !*** ./images/foods/img-7.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-7.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-7.jpg?");

/***/ }),

/***/ "./images/foods/img-8.jpg":
/*!********************************!*\
  !*** ./images/foods/img-8.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-8.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-8.jpg?");

/***/ }),

/***/ "./images/foods/img-9.jpg":
/*!********************************!*\
  !*** ./images/foods/img-9.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/foods/img-9.jpg\";\n\n//# sourceURL=webpack:///./images/foods/img-9.jpg?");

/***/ }),

/***/ "./images/shrimp-roll.jpg":
/*!********************************!*\
  !*** ./images/shrimp-roll.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/shrimp-roll.jpg\";\n\n//# sourceURL=webpack:///./images/shrimp-roll.jpg?");

/***/ }),

/***/ "./images/steak-and-carrots.jpg":
/*!**************************************!*\
  !*** ./images/steak-and-carrots.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/steak-and-carrots.jpg\";\n\n//# sourceURL=webpack:///./images/steak-and-carrots.jpg?");

/***/ }),

/***/ "./images/thumbs sync recursive ^\\.\\/img\\-.*_tn\\.jpg$":
/*!**************************************************!*\
  !*** ./images/thumbs sync ^\.\/img\-.*_tn\.jpg$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./img-10_tn.jpg\": \"./images/thumbs/img-10_tn.jpg\",\n\t\"./img-11_tn.jpg\": \"./images/thumbs/img-11_tn.jpg\",\n\t\"./img-12_tn.jpg\": \"./images/thumbs/img-12_tn.jpg\",\n\t\"./img-13_tn.jpg\": \"./images/thumbs/img-13_tn.jpg\",\n\t\"./img-14_tn.jpg\": \"./images/thumbs/img-14_tn.jpg\",\n\t\"./img-15_tn.jpg\": \"./images/thumbs/img-15_tn.jpg\",\n\t\"./img-16_tn.jpg\": \"./images/thumbs/img-16_tn.jpg\",\n\t\"./img-17_tn.jpg\": \"./images/thumbs/img-17_tn.jpg\",\n\t\"./img-18_tn.jpg\": \"./images/thumbs/img-18_tn.jpg\",\n\t\"./img-19_tn.jpg\": \"./images/thumbs/img-19_tn.jpg\",\n\t\"./img-1_tn.jpg\": \"./images/thumbs/img-1_tn.jpg\",\n\t\"./img-20_tn.jpg\": \"./images/thumbs/img-20_tn.jpg\",\n\t\"./img-21_tn.jpg\": \"./images/thumbs/img-21_tn.jpg\",\n\t\"./img-22_tn.jpg\": \"./images/thumbs/img-22_tn.jpg\",\n\t\"./img-23_tn.jpg\": \"./images/thumbs/img-23_tn.jpg\",\n\t\"./img-24_tn.jpg\": \"./images/thumbs/img-24_tn.jpg\",\n\t\"./img-2_tn.jpg\": \"./images/thumbs/img-2_tn.jpg\",\n\t\"./img-3_tn.jpg\": \"./images/thumbs/img-3_tn.jpg\",\n\t\"./img-4_tn.jpg\": \"./images/thumbs/img-4_tn.jpg\",\n\t\"./img-5_tn.jpg\": \"./images/thumbs/img-5_tn.jpg\",\n\t\"./img-6_tn.jpg\": \"./images/thumbs/img-6_tn.jpg\",\n\t\"./img-7_tn.jpg\": \"./images/thumbs/img-7_tn.jpg\",\n\t\"./img-8_tn.jpg\": \"./images/thumbs/img-8_tn.jpg\",\n\t\"./img-9_tn.jpg\": \"./images/thumbs/img-9_tn.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/thumbs sync recursive ^\\\\.\\\\/img\\\\-.*_tn\\\\.jpg$\";\n\n//# sourceURL=webpack:///./images/thumbs_sync_^\\.\\/img\\-.*_tn\\.jpg$?");

/***/ }),

/***/ "./images/thumbs/img-10_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-10_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-10_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-10_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-11_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-11_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-11_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-11_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-12_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-12_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-12_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-12_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-13_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-13_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-13_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-13_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-14_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-14_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-14_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-14_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-15_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-15_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-15_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-15_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-16_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-16_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-16_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-16_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-17_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-17_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-17_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-17_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-18_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-18_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-18_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-18_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-19_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-19_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-19_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-19_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-1_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-1_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-1_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-1_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-20_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-20_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-20_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-20_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-21_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-21_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-21_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-21_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-22_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-22_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-22_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-22_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-23_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-23_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-23_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-23_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-24_tn.jpg":
/*!*************************************!*\
  !*** ./images/thumbs/img-24_tn.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-24_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-24_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-2_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-2_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-2_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-2_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-3_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-3_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-3_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-3_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-4_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-4_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-4_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-4_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-5_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-5_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-5_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-5_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-6_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-6_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-6_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-6_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-7_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-7_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-7_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-7_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-8_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-8_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-8_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-8_tn.jpg?");

/***/ }),

/***/ "./images/thumbs/img-9_tn.jpg":
/*!************************************!*\
  !*** ./images/thumbs/img-9_tn.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/thumbs/img-9_tn.jpg\";\n\n//# sourceURL=webpack:///./images/thumbs/img-9_tn.jpg?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// necessary require for webpack to discover css and images referenced only in\n// the html\n__webpack_require__(/*! ./css/styles.scss */ \"./src/css/styles.scss\");\n__webpack_require__(/*! ../images/320.jpeg */ \"./images/320.jpeg\");\n__webpack_require__(/*! ../images/96.jpg */ \"./images/96.jpg\");\n__webpack_require__(/*! ../images/steak-and-carrots.jpg */ \"./images/steak-and-carrots.jpg\");\n__webpack_require__(/*! ../images/shrimp-roll.jpg */ \"./images/shrimp-roll.jpg\");\n\nfor (var i=1; i<=24; i++) {\n    __webpack_require__(\"./images/foods sync recursive ^\\\\.\\\\/img\\\\-.*\\\\.jpg$\")(\"./img-\" + i + \".jpg\");\n    __webpack_require__(\"./images/thumbs sync recursive ^\\\\.\\\\/img\\\\-.*_tn\\\\.jpg$\")(\"./img-\" + i + \"_tn.jpg\");\n}\n\nvar burgers  = document.querySelectorAll(\".burger\");\nfor (var i=0; i<burgers.length; i++) {\n    var b = burgers.item(i);\n    var dataTarget = b.dataset[\"target\"];\n    var target = document.getElementById(dataTarget)\n\n    b.addEventListener(\"click\", function() {\n        b.classList.toggle(\"is-active\");\n        target.classList.toggle(\"is-active\");\n    });\n}\n\nvar imageModalId = 'image-modal',\n    $imageModal = document.getElementById(imageModalId);\n\n// Clicking on a thumbnail will open a modal\nvar thumbnails = document.getElementsByClassName('thumbnail');\nfor (var i=0; i < thumbnails.length; i++) {\n    thumbnails.item(i).parentElement.addEventListener('click', function(event) {\n        event.preventDefault();\n        var $link = this.querySelector('a');\n        console.log($link);\n        $imageModal.querySelector('img').src = 'images/foods/' + $link.dataset['image-name'];\n        $imageModal.classList.toggle('is-active');\n    });\n}\n\n// Clicking on any modal-close will close the modal\nvar closeButtons = document.getElementsByClassName('modal-close');\nfor (var i=0; i < closeButtons.length; i++) {\n    closeButtons.item(i).addEventListener('click', function() {\n        this.parentElement.classList.toggle('is-active');\n    });\n}\n\n// Escape will always exit the modal\ndocument.addEventListener('keypress', function(evt) {\n    if (evt.key === 'Escape') {\n        var modals = document.getElementsByClassName('modal')\n        for (var i=0; i<modals.length; i++) {\n            modals.item(i).classList.remove('is-active');\n        }\n    }\n});\n\n// Clicking on a modal background will always close the modal\nvar modalBackgrounds = document.getElementsByClassName('modal-background');\nfor (var i=0; i<modalBackgrounds.length; i++) {\n    modalBackgrounds.item(i).addEventListener('click', function(ev) {\n        this.parentElement.classList.remove('is-active');\n    });\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });