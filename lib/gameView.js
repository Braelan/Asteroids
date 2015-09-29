(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {}
  }

  var GameView = Asteroids.GameView = function(width, height) {
    this.game = new Asteroids.Game(width, height)
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");

    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20 /60);
  };

})();
