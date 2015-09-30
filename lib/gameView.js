(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {}
  }

  var GameView = Asteroids.GameView = function(width, height) {
    this.game = new Asteroids.Game(width, height)
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.bindKeyHandlers();

    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20 /60);
  };

  GameView.prototype.bindKeyHandlers = function() {
     key('down', function() {
       this.game.ship.power([0,1]);
     }.bind(this));

     key('up', function() {
       this.game.ship.power([0,-1]);
     }.bind(this))

     key('left', function() {
       this.game.ship.power([-1,0]);
     }.bind(this))

     key('right', function() {
       this.game.ship.power([1,0]);
     }.bind(this))
  }

})();
