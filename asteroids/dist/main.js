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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n  this.color = \"orange\";\n  this.radius = 20;\n  this.vel = options.vel;\n  this.pos = options.pos;\n  this.game = options.game;\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nconst DIM_X = 5;\nconst DIM_Y = 5;\nconst NUM_ASTEROIDS = 30;\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n\n}\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * canvas.width);\n  let y = Math.floor(Math.random() * canvas.height);\n  return [x,y];\n}\n\nGame.prototype.addAsteroids = function() {\n  let that = this;\n  while (this.asteroids.length < NUM_ASTEROIDS) {\n    let asteroid = new Asteroid({\n      pos: that.randomPosition(),\n      vel: Util.randomVec(2),\n      game: that\n    });\n    // debugger\n    this.asteroids.push(asteroid);\n\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  // debugger\n  ctx.clearRect(0,0,canvas.width, canvas.height);\n  //Draw player\n  for(let asteroid of this.asteroids) {\n    asteroid.draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  //movePlayer\n  let that = this;\n  for(let asteroid of this.asteroids) {\n    asteroid.move();\n  }\n}\n\nGame.prototype.wrap = function (pos) {\n  let wrappedPos;\n  // debugger\n  let [x, y] = pos;\n  let newX, newY;\n  newX = x;\n  newY = y;\n\n  if (x <= 0){\n    newX = canvas.width + x;\n  }\n  if (x >= canvas.width){\n    newX = x - canvas.width;\n  }\n  if (y <= 0) {\n    newY = canvas.height + y;\n  }\n  if (y >= canvas.height) {\n    newY = canvas.height - y;\n  }\n\n  wrappedPos = [newX, newY];\n  return wrappedPos;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\r\n\r\nfunction GameView (ctx) {\r\n    this.game = new Game();\r\n    // debugger\r\n    this.ctx = ctx;\r\n}\r\n\r\nGameView.prototype.start = function () {\r\n    let that = this;\r\n   setInterval( function () {\r\n    //    debugger\r\n       that.game.moveObjects();\r\n       that.game.draw(that.ctx);\r\n   }, 1000/60);\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  let canvas = document.getElementById(\"game-canvas\");\n  canvas.width = 1200;\n  canvas.height = 900;\n  window.canvas = canvas;\n  let ctx = canvas.getContext('2d');\n\n  // let mo = new MovingObject({\n  //   pos: [30, 30],\n  //   vel: [1, 0],\n  //   radius: 5,\n  //   color: \"#00FF00\"\n  // });\n\n  // let mo2 = new MovingObject({\n  //   pos: [80, 30],\n  //   vel: [1, 0],\n  //   radius: 20,\n  //   color: \"#FF0000\"\n  // });\n\n  // mo.draw(ctx);\n  // mo2.draw(ctx);\n\n  // a = new Asteroid({\n  //   pos: [100, 100]\n  // });\n\n  // a.draw(ctx);\n\n  // let g = new Game();\n  // window.g = g;\n  // g.draw(ctx);\n\n  // setInterval(function() {\n  //   ctx.clearRect(0,0,canvas.width, canvas.height);\n  //   g.draw(ctx);\n  //   g.move();\n  // }, 1000/60);\n  \n\n  let gv = new GameView(ctx);\n  window.gv = gv;\n  gv.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n  this.pos = options[\"pos\"];\n  this.radius = options[\"radius\"];\n  this.vel = options[\"vel\"];\n  this.color = options[\"color\"];\n  this.game = options[\"game\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 2*Math.PI, false);\n  ctx.fillStyle = this.color;\n  ctx.stroke();\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  let [x,y] = [this.pos[0], this.pos[1]];\n  let [dx,dy] = [this.vel[0], this.vel[1]];\n  this.pos = [x+dx, y+dy];\n  this.pos = this.game.wrap(this.pos);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function inherits(Child, Parent) {\n    function Surrogate(){};\n    Surrogate.prototype = Parent.prototype;\n    Child.prototype = new Surrogate();\n    Child.prototype.constructor = Child;\n  }, \n  randomVec: function randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale: function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });