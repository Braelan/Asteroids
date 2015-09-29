(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (xDim, yDim) {
    NUM_ASTEROIDS = 4;
    this.xDim = xDim;
    this.yDim = yDim;
    // var ship = new Asteroids.MovingObject({"pos": [50,50], "vel": [0, -1], "radius": 25, "color":"green"});
    this.asteroids = [];
    this.addAsteroids();
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
   };

  Game.prototype.moveObjects = function () {
    for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
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
    for (var i = 0; i < this.asteroids.length-1; i++) {
      for (var j = i+1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollideWith(this.asteroids[j])){
          alert("collision!!")
        }
      }
    }
  }

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }

})();
