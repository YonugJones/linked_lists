/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ \"./src/nodes.js\");\n/* harmony import */ var _linked_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked_lists */ \"./src/linked_lists.js\");\n\n\nconsole.log(_nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst listOne = new _linked_lists__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('List One');\nconsole.log(listOne);\nlistOne.append('Node 1');\nconsole.log(listOne);\nlistOne.append('Node 2');\nconsole.log(listOne);\n\n//# sourceURL=webpack://linked_lists/./src/index.js?");

/***/ }),

/***/ "./src/linked_lists.js":
/*!*****************************!*\
  !*** ./src/linked_lists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ \"./src/nodes.js\");\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  append(value) {\n    if (this.head === null) {\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n      return;\n    }\n    let current = this.head;\n    while (current.next !== null) {\n      current = current.next;\n    }\n    current.next = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n  }\n  prepend(value) {\n    if (this.head === null) {\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    } else {\n      const oldHead = this.head;\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value, oldHead);\n    }\n  }\n  size() {\n    if (this.head === null) return 0;\n    let count = 1;\n    let current = this.head;\n    while (current.next !== null) {\n      count += 1;\n      current = current.next;\n    }\n    return count;\n  }\n  head() {\n    if (this.head === null) return 'No Head';\n    return this.head;\n  }\n  tail() {\n    if (this.head === null) return 'No Tail';\n    let tail = this.head;\n    while (tail.next !== null) {\n      tail = tail.next;\n    }\n    return tail;\n  }\n  at(index) {\n    if (this.head === null) return null;\n    let currentNode = this.head;\n    let counter = 0;\n    while (counter < index) {\n      currentNode = currentNode.next;\n      if (currentNode === null) return null;\n      counter += 1;\n    }\n    return currentNode;\n  }\n  pop() {\n    if (this.head === null) return null;\n    if (this.head.next === null) {\n      const popHead = this.head;\n      this.head = null;\n      return popHead;\n    }\n    let current = this.head;\n    while (current.next.next !== null) {\n      current = current.next;\n    }\n    const popTail = current.next;\n    current.next = null;\n    return popTail;\n  }\n}\n\n//# sourceURL=webpack://linked_lists/./src/linked_lists.js?");

/***/ }),

/***/ "./src/nodes.js":
/*!**********************!*\
  !*** ./src/nodes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n  constructor() {\n    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    let next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    this.value = value;\n    this.next = next;\n  }\n}\n\n//# sourceURL=webpack://linked_lists/./src/nodes.js?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;