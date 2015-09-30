(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (xDim, yDim) {
    NUM_ASTEROIDS = 1;
    this.xDim = xDim;
    this.yDim = yDim;
    // var ship = new Asteroids.MovingObject({"pos": [50,50], "vel": [0, -1], "radius": 25, "color":"green"});
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({"game": this})
    this.bullets = [];
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      var pos = this.new_pos();
      var pluto = new Asteroids.Asteroid({"pos" : pos, "game" : this});
      this.asteroids.push(pluto);
    }

  }

  Game.prototype.new_pos = function () {
    return [Math.random() * this.xDim, Math.random() * this.yDim]
  }


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,this.xDim, this.yDim);
    this.asteroids.forEach(function (asteroid) {
     asteroid.draw(ctx);
   });
     this.ship.draw(ctx)
     this.bullets.forEach(function(bullet) {
       bullet.draw(ctx)
     })
   };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
    }
    this.ship.move();
    for (var i = 0; i < this.bullets.length; i++) {
    this.bullets[i].move();
    }
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] > this.xDim) {
      pos[0] = pos[0] - this.xDim;
    }
    if (pos[0] < 0) {
      pos[0] = this.xDim
    }
    if (pos[1] < 0) {
      pos[1] = this.yDim
    }

    if (pos[1] > this.yDim) {
      pos[1] = pos[1] -this.yDim;
    }
    return pos;
  }

  Game.prototype.checkCollisions = function (){
    for (var i = 0; i < this.asteroids.length; i++) {
         this.asteroids[i].collideWith(this.ship)


    }
  }

  Game.prototype.remove = function (asteroid) {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (asteroid.pos[0] === this.asteroids[i].pos[0]  &&
         asteroid.pos[1] === this.asteroids[i].pos[1]) {
           this.asteroids.splice(i,1);
         }

    }
  }

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }

})();
