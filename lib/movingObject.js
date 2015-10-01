(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (hash) {
    this.img = hash["img"];
    this.pos = hash["pos"];
    this.game = hash["game"];
    this.vel = hash["vel"];
    this.radius = hash["radius"];
    this.color = hash["color"];
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.drawImage(
      this.img,
      this.pos[0],
      this.pos[1],
      this.radius,
      this.radius
    )

  }

  MovingObject.prototype.move = function() {
    this.pos = this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  MovingObject.prototype.isCollideWith = function (object) {
    var distance_squared = (Math.pow(Math.abs(this.pos[0]-object.pos[0]), 2) +
                       Math.pow(Math.abs(this.pos[1]-object.pos[1]), 2))
    var distance= Math.sqrt(distance_squared);

    if (distance < this.radius + object.radius) {
      return true;
    } else {
      return false;
    }
  }

  MovingObject.prototype.collideWith = function (object) {
    if (this.isCollideWith(object) && (object instanceof Asteroids.Ship)) {
      object.relocate();

    }
  }



})();
