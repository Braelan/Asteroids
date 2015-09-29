(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    COLOR="red";
    RADIUS = 25;
    LEN = 3;
    Asteroids.MovingObject.bind(this).call(this,
    {"pos": options["pos"],
      "radius" : RADIUS,
      "color" :COLOR,
      "vel" : [0,0]
    });
  }
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

})();
