(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
var Bullet = Asteroids.Bullet = function(options) {
  COLOR= "black";
  RADIUS = 10;
  LEN = 3
  var BulletSketch = new Image;
  BulletSketch.src = "bullet.png";
  IMG = BulletSketch;
  VEL = [options["ship"].vel[0]+ Math.sin(options["ship"].dir)*2.5,
         options["ship"].vel[1]-Math.cos(options["ship"].dir)*2.5]
  Asteroids.MovingObject.bind(this).call(this,
  {"pos": [options["ship"].pos[0], options["ship"].pos[1]],
  "game": options["game"],
   "radius" : RADIUS,
   "color" : COLOR,
   "vel" : VEL,
   "img" : IMG
 });
}
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})();
