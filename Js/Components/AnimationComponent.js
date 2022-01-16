export default class AnimationComponent{

	#timer = 0.0;
	#animationTimer;
	#width;
	#height;
	#startX;
	#startY;
	#currentX;
	#currentY;
	#endX;
	#endY;
	constructor(width,height,startX,startY,endX,endY,animationTimer){
		this.#animationTimer = animationTimer;;
		this.#width = width;
		this.#height = height;
		this.#startX = startX;
		this.#startY = startY;
		this.#endX = endX;
		this.#endY = endY;
		this.#currentX = this.#startX;
		this.#currentY = this.#startY;
	}

	updateAnimation(dt,rect){
		if(this.#timer >= this.#animationTimer){

			this.#timer = 0.0;
			if(this.#currentX < this.#endX){
				this.#currentX++;
			}else{
				this.#currentX = this.#startX;
			}
			if(this.#currentY < this.#endY){
				this.#currentY++;
			}else{
				this.#currentY = this.#startY;
			}
		}
		this.#timer = this.#timer + 10/dt;
		rect.left = this.#width*this.#currentX;
		rect.top = this.#height*this.#currentY;
	}
}