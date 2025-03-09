const GameWidth = 1440;
const GameHeight = 803;


function setup() {
	console.log("setup: ");

	cnv = new Canvas(GameWidth, GameHeight);

	world.gravity.y = 10;

	player = new Sprite(250, 250, 315, 'd');
	player.color = 'YellowGreen';
	player.vel.x = 2;
	player.vel.y = 2;

	asteroid = new Sprite(500, 500, 100, 100, 'd');
	asteroid.color = 'black';
	asteroid.rotationSpeed = 4;
	asteroid.vel.x = 2;
	asteroid.vel.y = 2;

	floor = new Sprite(720, GameHeight, GameWidth, 50, 'k');

}
	

function draw() {

	background('SaddleBrown'); 
	
}

