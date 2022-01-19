import InfoButton from "../İnfo/infoButton.js";
import Box from "./box.js";

export default class GameObject {
  _infoButton = null;
  _shape = null;
  _infoButtonBool = false;
  constructor(width, height, x, y, texturePath) {
    this._shape = new Box(width, height, x, y);
    this._shape.setBoxTexture(texturePath);
  }
  // update(dt){};
  addInfoButton(
    width,
    height,
    x,
    y,
    text,
    fontSize,
    fontFamily,
    color = "black",
  ) {
    this._infoButton = new InfoButton(
      width,
      height,
      x,
      y,
      text,
      fontSize,
      fontFamily,
      color,
    );
  }
  updateButtons(par) {
    this._infoButtonBool = par;
  }

  render() {
    if (this._infoButton) {
      this._infoButton.render(this._infoButtonBool);
    }
    this._shape.draw();
  }
}
