(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    COLOR="red";
    RADIUS = 25;
    LEN = 3;
    Asteroids.MovingObject.bind(this).call(this,
    {"pos": options["game"].new_pos(),
     "game": options["game"],
      "radius" : RADIUS,
      "color" :COLOR,
      "vel" : [0,0]
    });
  }
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.new_pos();
    this.vel = [0,0]
  }

})();
