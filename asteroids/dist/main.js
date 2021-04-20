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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  let canvas = document.getElementById(\"game-canvas\");\n  canvas.width = 1200;\n  canvas.height = 900;\n  let ctx = canvas.getContext('2d');\n\n  let mo = new MovingObject({\n    pos: [30, 30],\n    vel: [1, 0],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n\n  let mo2 = new MovingObject({\n    pos: [80, 30],\n    vel: [1, 0],\n    radius: 20,\n    color: \"#FF0000\"\n  });\n\n  mo.draw(ctx);\n  mo2.draw(ctx);\n\n  // setInterval(function() {\n  //   ctx.clearRect(0,0,canvas.width, canvas.height);\n  //   mo.draw(ctx);\n  //   mo.move();\n  // }, 1000/60);\n  \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("// pos,radius, velocity, color\n\nfunction MovingObject(options) {\n  this.pos = options[\"pos\"];\n  this.radius = options[\"radius\"];\n  this.vel = options[\"vel\"];\n  this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 2*Math.PI, false);\n  ctx.fillStyle = this.color;\n  ctx.stroke();\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  // debugger\n  let [x,y] = [this.pos[0], this.pos[1]];\n  let [dx,dy] = [this.vel[0], this.vel[1]];\n  // debugger\n  this.pos = [x+dx, y+dy];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;