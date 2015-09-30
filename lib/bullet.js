(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
var Bullet = Asteroids.Bullet = function(options) {
  COLOR= "black";
  RADIUS = 4;
  LEN = 3
  Asteroids.MovingObject.bind(this).call(this,
  {"pos": [options["ship"].pos[0], options["ship"].pos[1]],
  "game": options["game"],
   "radius" : RADIUS,
   "color" : COLOR,
   "vel" : [options["ship"].vel[0], options["ship"].vel[1]]
 });
}
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})();
