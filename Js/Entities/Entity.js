import Box from "../Library/box.js";
import AnimationComponent from "../Components/AnimationComponent.js";
import bs from "../Library/basic.js";
export default class Entity{

	//Variables
	#shape;
	#x;
	#y
	#animationRect = new bs.Rect(0,0,0,0);
	#animationComponent = null;
	#movementComponent = null;


	initShape(width,height,x,y){
		this.#shape = new Box(width,height,x,y);
	}
	createAnimationComponent(width,height,startX,startY,endX,endY,animationTimer){
		this.#animationComponent = new AnimationComponent(width,height,startX,startY,endX,endY,animationTimer);
	}


	constructor(width,height,x=0,y=0){
		this.initShape(width,height,x,y);

	}


	setTexture(path){
		this.#shape.setTexture(path);
	}
	update(dt){
		if(this.#animationComponent){
			this.#animationComponent.updateAnimation(dt,this.#animationRect)
			this.#shape.setRect(this.#animationRect)
		}		
		if(this.#movementComponent){
			
		}
	};
	render(){
		this.#shape.draw();
	};
}