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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linked_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked_lists */ \"./src/linked_lists.js\");\n\n\n// examples of each method shown in console\nconst listOne = new _linked_lists__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('List One');\nlistOne.find('New Node');\nlistOne.append('Node 1');\nlistOne.append('Node 2');\nlistOne.prepend('New Head');\nlistOne.toString();\nlistOne.size();\nlistOne.tail();\nlistOne.at(1);\nlistOne.pop();\nlistOne.toString();\nlistOne.pop();\nlistOne.toString();\nlistOne.contains('Node 2');\nlistOne.contains('New Head');\nlistOne.headFunc();\nlistOne.append('New Node');\nlistOne.find('New Node');\n\n//# sourceURL=webpack://linked_lists/./src/index.js?");

/***/ }),

/***/ "./src/linked_lists.js":
/*!*****************************!*\
  !*** ./src/linked_lists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ \"./src/nodes.js\");\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  append(value) {\n    if (this.head === null) {\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n      console.log(`${value} has been appended to empty linked list.`);\n      return;\n    }\n    let current = this.head;\n    while (current.next !== null) {\n      current = current.next;\n    }\n    current.next = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n    console.log(`${value} has been appended to linked list.`);\n  }\n  prepend(value) {\n    if (this.head === null) {\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value);\n      console.log(`${value} has been prepended to empty linked list.`);\n    } else {\n      const oldHead = this.head;\n      this.head = new _nodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"](value, oldHead);\n      console.log(`${value} has been prepended to linked list.`);\n    }\n  }\n  size() {\n    if (this.head === null) {\n      console.log('0');\n      return;\n    }\n    ;\n    let count = 1;\n    let current = this.head;\n    while (current.next !== null) {\n      count += 1;\n      current = current.next;\n    }\n    console.log(`List size: ${count}`);\n  }\n  headFunc() {\n    if (this.head === null) {\n      console.log('No Head in linked list');\n      return;\n    }\n    ;\n    console.log(`Head node: ${this.head.value}`);\n  }\n  tail() {\n    if (this.head === null) {\n      console.log('No Tail');\n      return;\n    }\n    ;\n    let tail = this.head;\n    while (tail.next !== null) {\n      tail = tail.next;\n    }\n    console.log(`Tail Node: ${tail.value}`);\n  }\n  at(index) {\n    if (this.head === null) {\n      console.log(null);\n      return;\n    }\n    ;\n    let currentNode = this.head;\n    let counter = 0;\n    while (counter < index) {\n      currentNode = currentNode.next;\n      if (currentNode === null) {\n        console.log(null);\n      }\n      ;\n      counter += 1;\n    }\n    console.log(`Node: ${currentNode.value} is at index: ${index}`);\n  }\n  pop() {\n    if (this.head === null) {\n      console.log('Cannot pop node. List is empty');\n    }\n    ;\n    if (this.head.next === null) {\n      const popHead = this.head;\n      this.head = null;\n      console.log(`Head node: ${popHead} has been popped`);\n    }\n    let current = this.head;\n    while (current.next.next !== null) {\n      current = current.next;\n    }\n    const popTail = current.next;\n    current.next = null;\n    console.log(`Node: ${popTail.value} has been popped`);\n  }\n  contains(value) {\n    if (this.head === null) {\n      console.log(`False: List does not contain ${value}`);\n      return false;\n    }\n    ;\n    let current = this.head;\n    while (current !== null) {\n      if (current.value === value) {\n        console.log(`True: List contains ${value}`);\n        return true;\n      }\n      ;\n      current = current.next;\n    }\n    console.log(`False: List does not contain ${value}`);\n    return false;\n  }\n  find(value) {\n    if (this.head === null) {\n      console.log('Cannot find node. The list is empty');\n      return null;\n    }\n    ;\n    let currentNode = this.head;\n    let index = 0;\n    while (currentNode !== null) {\n      if (currentNode.value === value) {\n        console.log(`Node: ${value} is at index: ${index}`);\n        return true;\n      }\n      ;\n      index += 1;\n      currentNode = currentNode.next;\n    }\n    console.log('Cannot find node.');\n    return null;\n  }\n  toString() {\n    if (this.head === null) {\n      console.log('List is empty');\n      return;\n    }\n    let currentNode = this.head;\n    let string = `( ${currentNode.value} )`;\n    while (currentNode.next !== null) {\n      string += ` -> ( ${currentNode.next.value} )`;\n      currentNode = currentNode.next;\n    }\n    string += ` -> null`;\n    console.log(string);\n  }\n}\n\n//# sourceURL=webpack://linked_lists/./src/linked_lists.js?");

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