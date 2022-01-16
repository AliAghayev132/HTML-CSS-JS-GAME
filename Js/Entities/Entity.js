import Box from "../Library/box.js";
import AnimationComponent from "../Components/AnimationComponent.js";
import bs from "../Library/basic.js";
import MovementComponent from "../Components/MovementComponent.js";
export default class Entity {
  //Variables
  #shape;
  #animationRect = new bs.Rect(0, 0, 0, 0);
  #animationComponent = null;
  #movementComponent = null;

  initShape(width, height, x, y) {
    this.#shape = new Box(width, height, x, y);
  }
  createAnimationComponent(
    width,
    height,
    startX,
    startY,
    endX,
    endY,
    animationTimer,
  ) {
    this.#animationComponent = new AnimationComponent(
      width,
      height,
      startX,
      startY,
      endX,
      endY,
      animationTimer,
    );
  }
  createMovementComponent(acceleration, deceleration, max_velocity) {
    this.#movementComponent = new MovementComponent(
      acceleration,
      deceleration,
      max_velocity,
	  this.#shape
    );
  }
  constructor(width, height, x = 0, y = 0) {
    this.initShape(width, height, x, y);
  }
  move(dir_x, dir_y) {
    this.#movementComponent.move(dir_x, dir_y);
  }
  setTexture(path) {
    this.#shape.setTexture(path);
  }
  update(dt) {
    if (this.#animationComponent) {
      this.#animationComponent.updateAnimation(dt, this.#animationRect);
      this.#shape.setRect(this.#animationRect);
    }
    if (this.#movementComponent) {
		this.#movementComponent.update(dt);
    }
  }
  render() {
    this.#shape.draw();
  }
}
