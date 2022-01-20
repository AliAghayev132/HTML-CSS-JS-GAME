import Map from "../Map/map.js";
import Tile from "../Map/objects/tile.js";
import House from "../Map/objects/house.js";

export default class OutsideHouse {
  #map = null;
  initMap() {
    this.#map = new Map();
    this.#map.addItem(
      new Tile(258, 52, 0, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new Tile(258, 52, 253, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new Tile(258, 52, 503, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new House(170, 170, 20, 183, "/HTML-CSS-JS-GAME/Resources/house.png"),
    );
    this.#map.getItem().createHitboxComponent(32,37,70,313,0,0,"Brown");
    this.#map.getItem().createInteractionButton(15,15,79,293,"E",14,"Arial","Red");
  }
  constructor() {
    this.initMap();
  }
  update(player) {
    this.#map.update(player);
  }
  render() {
    this.#map.render();
  }
}
