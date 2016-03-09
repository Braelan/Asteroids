(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    COLOR = "green";
    RADIUS = 60;
    SPLINTER_RADIUS = 20;
    LEN = 3;
    SPLIT_RADIANS = (Math.PI/16);
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

  //changes an asteriods direction positively or negatively
  Asteroid.prototype.changedirection = function(direction) {
    debugger
    this.vel[0] = (Math.cos(direction*SPLIT_RADIANS)*this.vel[0] - Math.sin(direction*SPLIT_RADIANS)*this.vel[1]);
    this.vel[1] = (Math.sin(direction*SPLIT_RADIANS)*this.vel[0] + Math.cos(direction*SPLIT_RADIANS)*this.vel[1]);
  }

  //splits an asteroid into two pieces
  //its not making a deep copy, so it changes the direction of this as well
  Asteroid.prototype.split = function() {
    var first_split = jQuery.extend(true, {}, this);
    var second_split = jQuery.extend(true, {}, this);
    first_split.changedirection(1)
    first_split.radius = SPLINTER_RADIUS
    second_split.changedirection(-1)
    second_split.radius = SPLINTER_RADIUS
    debugger
    return [first_split, second_split]
  }


  var pluto = new Asteroid({"pos": [50,50]});



})();
