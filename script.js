const GameWidth = 1440;
const GameHeight = 803;
function setup() {
	console.log("setup: ");

	cnv = new Canvas(GameWidth, GameHeight);

	world.gravity.y = 10;

	player = new Sprite(250, 750, 100, 100, 'd');
	player.color = 'YellowGreen';
	player.vel.x = 2;
	player.vel.y = 2;
	
	floor = new Sprite(720, GameHeight, GameWidth, 50, 'k');

	asteroidGroup = new Group();
	for (i = 0; i < 10; i++) {
		MakeAsteroid();
	  }
	 

}
function MakeAsteroid() {
	asteroid = new Sprite(random(0, 1440), 0);
	asteroid.vel.x = 0;
	asteroid.vel.y = 0;
	asteroid.bounciness = 0.5;
	asteroid.friction = 100;
	asteroidGroup.add(asteroid);
}
function draw() {
	function func2Call(asteroid, floor) {
		asteroid.remove();
		}
		
	background('black'); 

	asteroidGroup.collides(floor, func2Call);

if (kb.pressing('left')) {
   player.vel.x = -5;
}
if (kb.released('left')) {
   player.vel.x = 0;
}
if (kb.pressing('right')) {
   player.vel.x = 5;
}
if (kb.released('right')) {
   player.vel.x = 0;
}
if (kb.pressing('up')) {
   player.vel.y = -5;
}
if (kb.released('up')) {
   player.vel.y = 0;
}
if (kb.pressing('down')) {
   player.vel.y = 5;
}
if (kb.released('down')) {
   player.vel.y = 0;
}
}
