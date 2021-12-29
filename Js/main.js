import Game from "./Game.js";

const game = new Game();

//Delta time
let lastUpdate = Date.now()
let myInterval = setInterval(
	function(){		
		let now = Date.now();
		let dt = now - this.lastUpdate;
		this.lastUpdate = now;
		game.update(dt);
		game.render(dt);
	},0) 
