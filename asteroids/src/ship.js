const MovingObject = require("./moving_object");
const Util = require("./util");

const RADIUS = 5;
const COLOR = "purple";

function Ship (options) {
    this.radius = RADIUS;
    this.color = COLOR;
    this.vel = [0, 0];
    this.pos = options.pos;
}

Util.inherits(Ship, MovingObject);

module.exports = Ship;