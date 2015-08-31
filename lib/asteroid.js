(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    COLOR = "green";
    RADIUS = 25;
    LEN = 3;
    Asteroids.MovingObject.bind(this).call(this,
      {"pos": options["pos"],
      "vel" :Asteroids.Util.randomVec(LEN),
      "radius" : RADIUS,
      "color" : COLOR});
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  var pluto = new Asteroid({"pos": [50,50]});



})();
