(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    COLOR="red";
    RADIUS = 40;
    LEN = 3;
    this.dir = 0;
    var shipSketch = new Image;
    shipSketch.src = "ship.png";
    IMG = shipSketch;
    Asteroids.MovingObject.bind(this).call(this,
    {"pos": options["game"].new_pos(),
     "game": options["game"],
      "radius" : RADIUS,
      "color" :COLOR,
      "vel" : [0,0],
      "img" : IMG,
    });
  }



  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.new_pos();
    this.vel = [0,0]
  }

 Ship.prototype.power = function() {
   var new_x
   this.vel[0] += Math.sin(this.dir);
   this.vel[1] -= Math.cos(this.dir);
 }

 Ship.prototype.fireBullet = function () {
   var bullet = new Asteroids.Bullet({"ship": this, "game": this.game})
   this.game.bullets.push(bullet);
 }

Ship.prototype.draw = function(ctx) {
  //saves the canvas, rotates it, draws the ship centered on its position
  ctx.save();
  ctx.translate(this.pos[0]-(this.radius/2), this.pos[1]-(this.radius/2))
  ctx.translate((this.radius/2), (this.radius/2))
  ctx.rotate(this.dir)
  ctx.drawImage(this.img, (-this.radius/2), (-this.radius/2), this.radius, this.radius)
  ctx.restore();

}

})();
