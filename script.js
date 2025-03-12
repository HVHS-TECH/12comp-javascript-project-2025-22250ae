const GameWidth = 1440;
const GameHeight = 803;


function setup() {
	console.log("setup: ");

	cnv = new Canvas(GameWidth, GameHeight);

	world.gravity.y = 10;

	player = new Sprite(250, 250, 100, 100, 'd');
	player.color = 'YellowGreen';
	player.vel.x = 2;
	player.vel.y = 2;

	asteroid = new Sprite(100, 100, 100, 'd');
	asteroid.color = 'black';
	
	floor = new Sprite(720, GameHeight, GameWidth, 50, 'k');

}
	

function draw() {

	background('SaddleBrown'); 

	
if (kb.pressing('left')) {
   player.vel.x = -2;
}

if (kb.released('left')) {
   player.vel.x = 0;
}

if (kb.pressing('right')) {
   player.vel.x = 2;
}
if (kb.released('right')) {
   player.vel.x = 0;
}

if (kb.pressing('up')) {
   player.vel.y = -2;
}
if (kb.released('up')) {
   player.vel.y = 0;
}

if (kb.pressing('down')) {
   player.vel.y = 2;
}
if (kb.released('down')) {
   player.vel.y = 0;
}
	

}
