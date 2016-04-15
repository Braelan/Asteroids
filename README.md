# Asteroids  
##[live](https://braelan.github.io/resume)

![alt text](https://i.gyazo.com/c4399d43884415bc83a20252ab9d6ec7.gif)

### Places to read code
* ship.js contains the logic for ship movement and firing a bullet
* game.js contains the features that are updated in the game loop
* movingObject.js contains the collision logic

### sample code
This code splits a large asteroid and generates two new asteroid objects that
are then returned to game.js

```javascript

Asteroid.prototype.changedirection = function(direction) {
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
  return [first_split, second_split]
}

```
