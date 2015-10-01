(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    COLOR = "green";
    RADIUS = 60;
    LEN = 3;
    var AsteroidSketch = new Image;
    AsteroidSketch.src = "asteroid.png";
    IMG = AsteroidSketch;
    Asteroids.MovingObject.bind(this).call(this,
      {"pos": options["pos"],
      "game": options["game"],
      "vel" :Asteroids.Util.randomVec(LEN),
      "radius" : RADIUS,
      "color" : COLOR,
       "img" : IMG });
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  var pluto = new Asteroid({"pos": [50,50]});



})();
