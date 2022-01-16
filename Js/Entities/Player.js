import Entity from "./Entity.js";
export default class Player extends Entity{

	
	constructor(width,height,x,y){
		super(width,height,x,y);
		this.createAnimationComponent(120,80,0,0,3,0,4)
		this.createMovementComponent(7.0,2.0,30.0);
	};
	updateAnimation(){

	}
	update(dt){
		super.update(dt);	
	};
	render(){
		super.render();
	};	

}