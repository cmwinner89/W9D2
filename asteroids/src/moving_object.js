
function MovingObject(options) {
  this.pos = options["pos"];
  this.radius = options["radius"];
  this.vel = options["vel"];
  this.color = options["color"];
  this.game = options["game"];
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
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let x, y, ox, oy, dx, dy, dist, colDist;
  [x, y] = this.pos; 
  [ox, oy] = otherObject.pos;

  dx = Math.abs(x - ox);
  dy = Math.abs(y - oy);
  colDist = this.radius + otherObject.radius;
  dist = Math.sqrt((dx **2) + (dy **2));

  
  return dist <= colDist;

}

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(this);
  this.game.remove(otherObject);
}

module.exports = MovingObject;