(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {}
  }

  var GameView = Asteroids.GameView = function(width, height) {
    this.game = new Asteroids.Game(width, height)
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    ctx.font = "40px Serif";
    ctx.fillStyle = "#E6BF1A";
    this.bindKeyHandlers();
    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20 /60);
  };

  GameView.prototype.bindKeyHandlers = function() {

    key('down', function() {
      this.game.ship.vel = [0,0];
    }.bind(this))

     key('up', function(event, handler) {
       this.game.ship.power();
     }.bind(this))

     key('left', function(event, handler) {
       this.game.ship.dir -= (Math.PI/32);
     }.bind(this))


     key('right', function() {
       this.game.ship.dir += (Math.PI/32);
     }.bind(this))


     key('space', function() {
      this.game.ship.fireBullet()
     }.bind(this))



  }



})();
