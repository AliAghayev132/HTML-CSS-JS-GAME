export default class Box {
	
	#width;
	#height;
	#x;
	#y;

	constructor(width,height,x,y){
		this.#width = width;
		this.#height = height;
		this.#x = x;
		this.#y = y;

		let box = document.createElement("div");
		box.style.position = "absoulate";
		box.style.left = x  + "px";
		box.style.top = y + "px";	
		box.style.width = width + "px";
		box.style.height = height + "px";
		box.style.backgroundColor = "black";
		document.body.appendChild(box);
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

}