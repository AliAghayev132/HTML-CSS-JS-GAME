import bs from "../Library/basic.js";
export default class MovementComponent {

	#acceleration;
	#deceleration;
	#maxVelociy = new bs.Vector2i();
	#velocity = new bs.Vector2i();

	constructor(acceleration,decelartion,maxVelocity){
		this.#acceleration = acceleration;
		this.#decelartion = decelartion;
		this.#maxVelocity = maxVelocity;
	}

	move(dir_x,dir_y){
		this.#velocity.x += this.#acceleration * dir_x;
		this.#velocity.y += this.#acceleration * dir_y;
	}
	update(dt){
		if(this.#velocity.x > 0){

			if(this.#velociy.x >= this.#maxVelociy.x)
				this.#velociy.x = this.#maxVelociy.x;
		}
		else if(this.#velocity<0){

		}



		
		// if(this.#velociy.y >= this.#maxVelociy.y){
		// 	this.#velociy.y = this.#maxVelociy.y
		// }
	}
}