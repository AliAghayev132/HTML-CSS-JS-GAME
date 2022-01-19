export default class Map {
  #objects = [];
  constructor() {}
  addItem(item) {
    this.#objects.push(item);
  }
  loadFromSave(path){

  }
  update(dt){
    for (let i in this.#objects) {
      this.#objects[i].update(dt);
    }
  }
  render() {
    for (let i in this.#objects) {
      this.#objects[i].render();
    }
  }
}
