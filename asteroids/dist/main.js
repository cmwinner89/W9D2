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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n  this.color = \"orange\";\n  this.radius = 20;\n  this.vel = options.vel;\n  this.pos = options.pos;\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nconst DIM_X = 5;\nconst DIM_Y = 5;\nconst NUM_ASTEROIDS = 30;\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n\n}\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * canvas.width);\n  let y = Math.floor(Math.random() * canvas.height);\n  return [x,y];\n}\n\nGame.prototype.addAsteroids = function() {\n  let that = this;\n  while (this.asteroids.length < NUM_ASTEROIDS) {\n    let asteroid = new Asteroid({\n      pos: that.randomPosition(),\n      vel: Util.randomVec(2)\n    });\n    this.asteroids.push(asteroid);\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  for(let asteroid of this.asteroids) {\n    asteroid.draw(ctx);\n  }\n}\n\nGame.prototype.move = function() {\n  for(let asteroid of this.asteroids) {\n    asteroid.move();\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  let canvas = document.getElementById(\"game-canvas\");\n  canvas.width = 1200;\n  canvas.height = 900;\n  window.canvas = canvas;\n  let ctx = canvas.getContext('2d');\n\n  let mo = new MovingObject({\n    pos: [30, 30],\n    vel: [1, 0],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n\n  let mo2 = new MovingObject({\n    pos: [80, 30],\n    vel: [1, 0],\n    radius: 20,\n    color: \"#FF0000\"\n  });\n\n  mo.draw(ctx);\n  mo2.draw(ctx);\n\n  a = new Asteroid({\n    pos: [100, 100]\n  });\n\n  a.draw(ctx);\n\n  let g = new Game();\n  window.g = g;\n  g.draw(ctx);\n\n  // setInterval(function() {\n  //   ctx.clearRect(0,0,canvas.width, canvas.height);\n  //   g.draw(ctx);\n  //   g.move();\n  // }, 1000/60);\n  \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject(options) {\n  this.pos = options[\"pos\"];\n  this.radius = options[\"radius\"];\n  this.vel = options[\"vel\"];\n  this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 2*Math.PI, false);\n  ctx.fillStyle = this.color;\n  ctx.stroke();\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  let [x,y] = [this.pos[0], this.pos[1]];\n  let [dx,dy] = [this.vel[0], this.vel[1]];\n  this.pos = [x+dx, y+dy];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits: function inherits(Child, Parent) {\n    function Surrogate(){};\n    Surrogate.prototype = Parent.prototype;\n    Child.prototype = new Surrogate();\n    Child.prototype.constructor = Child;\n  }, \n  randomVec: function randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale: function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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