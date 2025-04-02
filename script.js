//setting games width and height
const GameWidth = 1440;
const GameHeight = 803;
//setting up all the variables for Score, Highscore, Time, and when the game stops
let time = 0
let Score = 0
let Highscore = 0
let stopgame = false
function setup() {
	mouse.visible = false;
	console.log("setup: ");

	cnv = new Canvas(GameWidth, GameHeight);

		world.gravity.y = 10;

	asteroidspawn = millis();
    
	player = new Sprite(250, 750, 100, 100, 'd');
	player.color = 'Black';

	floor = new Sprite(720, GameHeight, 1600, 50, 'k');
    wall1 = new Sprite(1500, 401, 50, 1500, 'k');
	wall2 = new Sprite(-60, 401, 50, 1500, 'k');
	//creates asteroid group.
	asteroidGroup = new Group();
}
//function to make asteroids
function MakeAsteroid() {
	//spawns sprites at a random spot above the visible area of the game
	asteroid = new Sprite(random(0, 1440), -50, random(30, 100), 'd');
	//makes asteroids have random velocity to increase the natural feeling of the game
	asteroid.vel.x = (random(-10, 10));
	asteroid.vel.y = (random(0, 10));
	//adds the new asteroid sprites to the asteroid group so that I can remove or modify all the asteroids at once.
	asteroidGroup.add(asteroid);
}
//function for when asteroids hit floor
function AsteroidHitFloor(asteroid, floor) {
	//removes asteroid
	asteroid.remove();
	//adds to the score
	Score++;
}
//function for when asteroid hits player
function AsteroidHitPlayer() {
	//stops the game
	stopgame = true;
	//makes mouse visible so you can press reset button
	mouse.visible = true;
	//sets the players velocity to 0 on both axis
	player.vel.x = (0);
	player.vel.y = (0);
	for (Highscore()) {
		balls = new Sprite (720, 100, 30)
	}
	//spawns in the reset button, resets the score and removes all asteroids
	reset = new Sprite (720, 401, 200, 200, 'k')
	Score = 0;
	
}

function draw() {
	//code for when the reset button is pressed, it starts the game again and deletes the reset button
	if (mouse.pressing() && reset.mouse.hovering()) {
		stopgame = false;
		reset.remove();
	}
	//sets background colour
	background(220);
	//adds to the time variable based off of how much time has passed 
	time++;
	//sets the textsize and makes text for the score and highscore
	textSize(32);
	text('Score: '+Score, 100, 100);
	text('Highscore: '+Highscore, 100, 200);
	//spawns asteroids and resets the time variable every time the time variable reaches 10
	if (time == 10 && stopgame == false) {
		MakeAsteroid();
		time = 0;			
	}

	//sets the score as the highscore if the score is higher than the highscore
	if (Score >= Highscore) {
		Highscore = Score;
	}
    //calls the collision functions when the correct sprites collide
	asteroidGroup.collides(floor, AsteroidHitFloor);
	asteroidGroup.collides(wall1, AsteroidHitFloor);
	asteroidGroup.collides(wall2, AsteroidHitFloor);
	asteroidGroup.collides(player, AsteroidHitPlayer)
	//makes the player move using left and right arrow keys, or a and d keys
	if (kb.pressing('left') && stopgame == false) {
    	player.vel.x = -8;
	}
	if (kb.released('left')) {
    	player.vel.x = 0;
	}
	if (kb.pressing('right') && stopgame == false) {
    	player.vel.x = 8;
	}
	if (kb.released('right')) {
    	player.vel.x = 0;
	}
}
