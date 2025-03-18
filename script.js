const GameWidth = 1440;
const GameHeight = 803;
let asteroidspawn
let triggered = false;
function setup() {
	console.log("setup: ");

	cnv = new Canvas(GameWidth, GameHeight);

	world.gravity.y = 10;

	asteroidspawn = millis();
    
	player = new Sprite(250, 750, 100, 100, 'd');
	player.color = 'YellowGreen';
	player.vel.x = 2;
	player.vel.y = 2;
	
	floor = new Sprite(720, GameHeight, 1600, 50, 'k');
    wall1 = new Sprite(1500, 401, 50, 1500, 'k');
	wall2 = new Sprite(-60, 401, 50, 1500, 'k');

	asteroidGroup = new Group();
     
}
function spawnasteroid() {
 MakeAsteroid();
}
function MakeAsteroid() {
	asteroid = new Sprite(random(0, 1440), 0);
	asteroid.vel.x = (random(-10, 10));
	asteroid.vel.y = (random(0, 10));
	asteroidGroup.add(asteroid);
}

function draw() {
	let elapsedTime = millis() - asteroidspawn;

	if (elapsedTime = 10000 && !triggered) {
		triggered = true;
		MakeAsteroid();
		elapsedTime = asteroidspawn
		triggered = false;
	  }
 
	
	function func2Call(asteroid, floor) {
		asteroid.remove();
		}

	
	background(220); 
//
	asteroidGroup.collides(floor, func2Call);
	asteroidGroup.collides(wall1, func2Call);
	asteroidGroup.collides(wall2, func2Call);

//Keyboard controls
if (kb.pressing('left')) {
   player.vel.x = -8;
}
if (kb.released('left')) {
   player.vel.x = 0;
}
if (kb.pressing('right')) {
   player.vel.x = 8;
}
if (kb.released('right')) {
   player.vel.x = 0;
}
if (kb.pressing('up')) {
   player.vel.y = -8;
}
if (kb.released('up')) {
   player.vel.y = 0;
}
if (kb.pressing('down')) {
   player.vel.y = 8;
}
if (kb.released('down')) {
   player.vel.y = 0;
}
}
