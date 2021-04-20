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
      vel: Util.randomVec(2),
      game: that
    });
    // debugger
    this.asteroids.push(asteroid);

  }
}

Game.prototype.draw = function(ctx) {
  // debugger
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //Draw player
  for(let asteroid of this.asteroids) {
    asteroid.draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  //movePlayer
  let that = this;
  for(let asteroid of this.asteroids) {
    asteroid.move();
  }
}

Game.prototype.wrap = function (pos) {
  let wrappedPos;
  // debugger
  let [x, y] = pos;
  let newX, newY;
  newX = x;
  newY = y;

  if (x <= 0){
    newX = canvas.width + x;
  }
  if (x >= canvas.width){
    newX = x - canvas.width;
  }
  if (y <= 0) {
    newY = canvas.height + y;
  }
  if (y >= canvas.height) {
    newY = canvas.height - y;
  }

  wrappedPos = [newX, newY];
  return wrappedPos;
}

module.exports = Game;