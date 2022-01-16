export default class Map {
  #objects = [];
  constructor() {}
  addItem(item) {
    this.#objects.push(item);
  }
  render() {
    for (let i in this.#objects) {
      this.#objects[i].render();
    }
  }
}
