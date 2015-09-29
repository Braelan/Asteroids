(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (hash) {
    this.pos = hash["pos"];
    this.game = hash["game"];
    this.vel = hash["vel"];
    this.radius = hash["radius"];
    this.color = hash["color"];
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
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



})();
