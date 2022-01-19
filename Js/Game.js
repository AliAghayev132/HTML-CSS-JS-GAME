import Player from "./Entities/Player.js";
import House from "./Map/objects/house.js";
import Tile from "./Map/objects/tile.js";

export default class Game {
  #player;
  #house;
  #grass = [];
  initMap() {
    this.#grass.push(
      new Tile(258, 52, 0, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#grass.push(
      new Tile(258, 52, 253, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#grass.push(
      new Tile(258, 52, 503, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#house = new House(
      170,
      170,
      20,
      183,
      "/HTML-CSS-JS-GAME/Resources/house.png",
    );
    this.#house.createHitboxComponent(32, 40, 35, 241, 35, 70);
    this.#house.addInfoButton(
      16,
      16,
      80,
      290,
      "E",
      14,
      "Impact,Charcoal,sans-serif",
      "red",
    );
  }
  initPlayer() {
    this.#player = new Player(120, 80, 0, 276);
    this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
  }
  constructor() {
    this.initMap();
    this.initPlayer();
  }

  //Update Functions
  updatePlayerInput() {
    if (key == "d") this.#player.move(1, 0);
    if (key == "a") this.#player.move(-1, 0);
    if (key == "w") this.#player.move(0, -1);
    if (key == "s") this.#player.move(0, 1);
  }
  updateHitbox() {
    this.#house.updateButtons(this.#player.contains(this.#house.getHitbox()));
  }
  updatePlayer(key) {
    this.updatePlayerInput(key);
    this.updateHitbox();
  }
  update(dt, key) {
    this.updatePlayer(key);
    this.#player.update(dt);
  }

  //Render
  render() {
    for (let i in this.#grass) {
      this.#grass[i].render();
    }
    this.#house.render();
    this.#player.render();
  }

  //Run
  run(dt, key) {
    this.update(dt, key);
    this.render();
  }

}
