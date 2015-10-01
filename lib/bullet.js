(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
var Bullet = Asteroids.Bullet = function(options) {
  COLOR= "black";
  RADIUS = 60;
  LEN = 3
  var BulletSketch = new Image;
  BulletSketch.src = "bullet.png";
  IMG = BulletSketch;
  Asteroids.MovingObject.bind(this).call(this,
  {"pos": [options["ship"].pos[0], options["ship"].pos[1]],
  "game": options["game"],
   "radius" : RADIUS,
   "color" : COLOR,
   "vel" : [options["ship"].vel[0], options["ship"].vel[1]],
   "img" : IMG
 });
}
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})();
