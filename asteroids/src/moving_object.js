
function MovingObject(options) {
  this.pos = options["pos"];
  this.radius = options["radius"];
  this.vel = options["vel"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 2*Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.stroke();
  ctx.fill();
}

MovingObject.prototype.move = function() {
  let [x,y] = [this.pos[0], this.pos[1]];
  let [dx,dy] = [this.vel[0], this.vel[1]];
  this.pos = [x+dx, y+dy];
}

module.exports = MovingObject;