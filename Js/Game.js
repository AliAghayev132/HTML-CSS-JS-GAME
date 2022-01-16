import Player from "./Entities/Player.js";
export default class Game {
  #player;
  initPlayer() {
    this.#player = new Player(120, 80);
    this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
  }
  constructor() {
    this.initPlayer();
  }
  updatePlayer(key) {
    if (key != "") {
      if (key == "d") this.#player.move(1, 0);
      if (key == "a") this.#player.move(-1, 0);
      if (key == "w") this.#player.move(0, -1);
      if (key == "s") this.#player.move(0, 1);
    }
  }
  run(dt, key) {
    this.update(dt, key);
    this.render();
  }
  update(dt, key) {
    this.updatePlayer(key);
    this.#player.update(dt);
  }
  render() {
    this.#player.render();
  }
}
