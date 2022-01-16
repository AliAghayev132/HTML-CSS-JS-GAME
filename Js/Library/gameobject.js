import Box from "./box.js";

export default class GameObject {
	_shape = null;
	constructor(width,height,x,y,texturePath){
		this._shape = new Box(width,height,x,y);
		this._shape.setTexture(texturePath);
	};
	// update(dt){};
	render(){
		this._shape.draw();
	};
}