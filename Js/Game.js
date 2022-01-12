import Player from "./Entities/Player.js";
export default class Game{
	#player;
	initPlayer(){
		this.#player = new Player(120,80);
		this.#player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
	}
	constructor() {
		this.initPlayer();
	}
	update(dt){
		this.#player.update(dt);
	}
	render(dt){
		this.#player.render();
	}
}

