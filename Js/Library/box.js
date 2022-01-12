import bs from "./basic.js";
export default class Box {

	#box = document.createElement("div");
	#width;
	#height;
	#x;
	#y;
	#color;

	constructor(width,height,x=0,y=0,color = "none"){
		
		this.#width = width;
		this.#height = height;
		this.#x = x;
		this.#y = y;
		this.#color = color;

		this.#box.style.position = "absoulate";
		this.#box.style.left = x  + "px";
		this.#box.style.top = y + "px";	
		this.#box.style.width = width + "px";
		this.#box.style.height = height + "px";
		this.#box.style.backgroundColor = this.#color;
		this.#box.style.display = "none";
		this.#box.style.overflow= "hidden";
		document.body.appendChild(this.#box);

	}


	setPositions(x,y){
		this.#x=x;
		this.#y=y;
	}
	getPositions(){
		return {x:this.#x,y:this.#y}
	}
	getSize(){
		return{width:this.#width,height:this.#height}
	}
	setSize(width,height){
		this.#width=width;
		this.#height=height;
	}
	setColor(par){
		this.#color = par;
	}
	setTexture(path){
		this.#box.style.backgroundImage = "url("+path+")";
	}
	setBorder(color,thickness){
		this.#box.style.borderColor = color;
		this.#box.style.borderWidth = thickness + "px";
		this.#box.style.borderStyle = "solid";
	}
	setRect(obj){
		this.#box.style.backgroundPosition = `${obj.left}px ${obj.top}px`;
	} 
	draw(){
		this.#box.style.display ="block";
	}

}