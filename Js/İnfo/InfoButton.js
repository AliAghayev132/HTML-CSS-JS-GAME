import Box from "../Library/box.js";

export default class InfoButton {
  #box;

  constructor(
    width,
    height,
    x,
    y,
    text,
    fontSize,
    fontFamily,
    color = "black",
  ) {
    this.#box = new Box(width, height, x, y);
    this.#box.setText(text);
    this.#box.setFontSize(fontSize);
    this.#box.setFontSize(fontFamily);
    this.#box.setColor(color);
    this.#box.setBackgroundColor("white");
  }
  //   update(par) {}
  render(par = false) {
    if (par) {
      this.#box.draw();
      return;
    }
    this.#box.clear();
  }
}
