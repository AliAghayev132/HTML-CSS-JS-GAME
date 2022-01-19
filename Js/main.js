import Game from "./Game.js";

let key = "";

const game = new Game();
document.onkeydown = function (e) {
  key = e.key.toLocaleLowerCase();
};


//Game core
let lastTime = 0;
(function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  game.run(deltaTime = 0, key);
  key = "";
  requestAnimationFrame(gameloop);
})();
