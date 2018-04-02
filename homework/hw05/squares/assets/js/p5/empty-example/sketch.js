	function drawRandomSquare(){
	var r = getRandomInt(158, 230);
	var g = getRandomInt(103, 199);
	var b = getRandomInt(199, 220);
	fill(r, g, b);

	var w = getRandomInt(24, 180);
	var x = getRandomInt(0, windowWidth - w);

	var h = getRandomInt(24, 180);
	var y = getRandomInt(0, windowWidth - h);

	rect( x, y, w, h );
	}
	
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function setup () {
	createCanvas( windowWidth, windowHeight );

	noStroke();

	background("#e6e6e6");

// called a FOR LOOP
// the for takes three things
// the initial state
// the check
// the iterative step
// made up the variable i, it can be anything u want
// telling it where to start -- at 0
// i++ MEANS: takes a variable and it increments it by 1 (so it would 
// be 0, 1, 2, 3, 4, 5, 6...)
// this loop will continue to add and go UNTIL i = 200 so it stops
	for( var i = 0; i < 200;i++ ){
		drawRandomSquare();


	}

}
	// rect( getRandomInt(0, windowWidth-20), getRandomInt(0, windowHeight-20), getRandomInt(24, 180), getRandomInt(24,180)      );

function draw () {

}



