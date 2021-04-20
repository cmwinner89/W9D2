const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("game-canvas");
  canvas.width = 1200;
  canvas.height = 900;
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

  // setInterval(function() {
  //   ctx.clearRect(0,0,canvas.width, canvas.height);
  //   mo.draw(ctx);
  //   mo.move();
  // }, 1000/60);
  

});