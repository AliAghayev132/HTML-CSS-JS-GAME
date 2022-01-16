import Player from "./Entities/Player.js";
import House from "./Map/objects/house.js";
export default class Game {
  #player;
  #house;
  initMap(){
    this.#house = new House(170,170,40,40,"/HTML-CSS-JS-GAME/Resources/house.png");
  }
  initPlayer() {
    this.#player = new Player(120, 80);
    this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
  }
  constructor() {
    this.initMap();
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
    if(isNaN(dt))
      dt = 0.0;
    this.updatePlayer(key);
    this.#player.update(dt);
  }
  render() {
    this.#house.render();
    this.#player.render();
  }
}
