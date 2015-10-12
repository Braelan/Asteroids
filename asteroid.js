// (function() {
//   if (typeof Asteroid === "undefined") {
//     window.Asteroid = {};
//   }
//
//   // will hopefully toggle class
//   Asteroid.hide = function () {
//     $(.info).toggleClass("on")
//   }
//
// })();
$(document).ready(function(){

  $('button').click(function() {
    $(".info").toggleClass("off");
    $(".background").toggleClass("off")

    new Asteroids.GameView(
      canvasEl.width,
      canvasEl.height
    ).start(canvasEl);
  })
})
