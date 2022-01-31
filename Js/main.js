import Game from "./Game.js";

const game = new Game();
//Game core

let lastTime = 0;
(function gameloop(timestamp = 0) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  game.run(deltaTime);
  requestAnimationFrame(gameloop);
})();
