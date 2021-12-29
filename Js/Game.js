import  Box from './Library/box.js'
export default class Game{

	player = new Box(100,100,100,100);
	
	move(){

	}
	update(dt){
		this.player.setTexture('/HTML-CSS-JS-GAME/Resources/test.png')
	}
	render(dt){

		this.player.render();
	}
}