import Box from "../Library/box";

export default class DialogBox {
	#box;
	constructor() {
		this.#box = document.createElement("pre");
		this.#box.style.display = "none";
		this.#box.style.position = "absolute";
		document.body.appendChild(this.#box);
	}
	updateText(pos_x,pos_y,text){

	}
	unrender(){
		this.#box.style.display = "none";
	}
	render() {	
		this.#box.style.display = "block";
	}
}
