const Util = {
  inherits: function inherits(Child, Parent) {
    function Surrogate(){};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  }, 
  randomVec: function randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;