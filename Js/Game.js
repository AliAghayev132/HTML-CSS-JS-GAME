import Player from "./Entities/Player.js";
import OutsideHouse from "./Scenes/OutsideHouse.js";

export default class Game {
  //Variables
  #player;
  #gameScenes;
  
  //Initializer functions

  initVariables() {
    this.#player = null;
    this.#gameScenes = [];
  }
  initGameScene() {
    this.#gameScenes.push(new OutsideHouse());
  }
  initPlayer() {
    this.#player = new Player(120, 80, 0, 276);
    this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
  }

  //Constructor

  constructor() {
    this.initVariables();
    this.initGameScene();
    this.initPlayer();
  }
  
  //Update Functions

  updatePlayerInput() {
    const that = this;

    document.onkeydown = function (e) {
      let key = e.key.toLocaleLowerCase();
      if (key == "d") that.#player.move(1, 0);
      if (key == "a") that.#player.move(-1, 0);
    };
  }

  update(dt) {
    this.updatePlayerInput();
    this.#player.update(dt);
    this.#gameScenes[this.#gameScenes.length - 1].update(this.#player);
  }

  //Render

  render() {
    this.#gameScenes[this.#gameScenes.length - 1].render();
    this.#player.render();
  }

  //Run

  run(dt) {
    this.update(dt);
    this.render();
  }
}
