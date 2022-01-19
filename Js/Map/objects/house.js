import HitboxComponent from "../../Components/HitboxComponent.js";
import GameObject from "../../Library/gameobject.js";

export default class House extends GameObject{
	
	#hitboxComponent  = null;
	createHitboxComponent(width,height,x,y,offsetX,offsetY,color = "blue"){
		this.#hitboxComponent = new HitboxComponent(width,height,x,y,offsetX,offsetY,color);
	}
	constructor(width,height,x,y,path){
		super(width,height,x,y,path);	
	}
	update(){
		if(this.#hitboxComponent){
			this.#hitboxComponent.update();
		}
	};
	getHitbox(){
		return this.#hitboxComponent.getHitbox();
	}
	render(){
		if(this.#hitboxComponent){
			this.#hitboxComponent.render();
		}
		super.render();
	};
}


