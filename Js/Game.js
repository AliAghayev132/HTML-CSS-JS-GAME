import Player from "./Entities/Player.js";
import OutsideHouse from "./Scenes/OutsideHouse.js";

export default class Game {
  #player;
  #gameScenes = [];
  initGameScene(){
    this.#gameScenes.push(new OutsideHouse());
    // this.#gameScenes.push(new InsideHouse());
  }
  initPlayer() {
    this.#player = new Player(120, 80, 0, 276);
    this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
  }
  constructor() {
    this.initGameScene();
    this.initPlayer();
  }
  //Update Functions
  updatePlayerInput(key) {
    if (key == "d") this.#player.move(1, 0);
    if (key == "a") this.#player.move(-1, 0);
    if (key == "w") this.#player.move(0, -1);
    if (key == "s") this.#player.move(0, 1);
  }
  updatePlayer(key) {
    this.updatePlayerInput(key);
  }
  update(dt,key) {
    this.#gameScenes[this.#gameScenes.length-1].update(this.#player);
    this.updatePlayer(key);
    this.#player.update(dt);
  }

  //Render
  render() {
    this.#gameScenes[this.#gameScenes.length-1].render();
    this.#player.render();
  }

  //Run
  run(dt, key) {
    if(isNaN(dt)){
      dt = 0.0;
    }
    this.update(dt, key);
    this.render();
  }

}
