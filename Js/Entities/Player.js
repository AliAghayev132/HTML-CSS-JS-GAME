import Entity from "./Entity.js";
import AnimationComponent from "../Components/AnimationComponent.js";
export default class Player extends Entity{

	
	constructor(width,height,x,y){
		super(width,height,x,y);
		this.createAnimationComponent(120,80,0,0,3,0,25);
	}

}