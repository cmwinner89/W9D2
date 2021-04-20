const Util = require("./util");
const MovingObject = require("./moving_object");

function Asteroid(options) {
  this.color = "orange";
  this.radius = 20;
  this.vel = options.vel;
  this.pos = options.pos;
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;