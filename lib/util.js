(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate;
  }

  Util.randomVec = function (length) {
    vx = (Math.random() * 2 - 1) * length;
    vy = (Math.random() * 2 - 1) * length;
    return [vx, vy]
  }

})();
