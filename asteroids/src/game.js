const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");


const DIM_X = 5;
const DIM_Y = 5;
const NUM_ASTEROIDS = 30;

function Game() {
  this.asteroids = [];
  this.addAsteroids();

}

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);
  return [x,y];
}

Game.prototype.addAsteroids = function() {
  let that = this;
  while (this.asteroids.length < NUM_ASTEROIDS) {
    let asteroid = new Asteroid({
      pos: that.randomPosition(),
      vel: Util.randomVec(2)
    });
    this.asteroids.push(asteroid);
  }
}

Game.prototype.draw = function(ctx) {
  for(let asteroid of this.asteroids) {
    asteroid.draw(ctx);
  }
}

Game.prototype.move = function() {
  for(let asteroid of this.asteroids) {
    asteroid.move();
  }
}

module.exports = Game;