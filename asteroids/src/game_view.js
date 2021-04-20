const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");
const Game = require("./game")

function GameView (ctx) {
    this.game = new Game();
    // debugger
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let that = this;
   setInterval( function () {
    //    debugger
       that.game.moveObjects();
       that.game.draw(that.ctx);
   }, 1000/60);
}

module.exports = GameView;