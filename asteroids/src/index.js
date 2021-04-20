const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");
const Game = require("./game")

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;

document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("game-canvas");
  canvas.width = 1200;
  canvas.height = 900;
  window.canvas = canvas;
  let ctx = canvas.getContext('2d');

  let mo = new MovingObject({
    pos: [30, 30],
    vel: [1, 0],
    radius: 5,
    color: "#00FF00"
  });

  let mo2 = new MovingObject({
    pos: [80, 30],
    vel: [1, 0],
    radius: 20,
    color: "#FF0000"
  });

  mo.draw(ctx);
  mo2.draw(ctx);

  a = new Asteroid({
    pos: [100, 100]
  });

  a.draw(ctx);

  let g = new Game();
  window.g = g;
  g.draw(ctx);

  // setInterval(function() {
  //   ctx.clearRect(0,0,canvas.width, canvas.height);
  //   g.draw(ctx);
  //   g.move();
  // }, 1000/60);
  

});