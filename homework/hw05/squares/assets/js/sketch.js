function drawRandomSquare() {
		var r = getRandomInt( 158, 230 );	
		var g = getRandomInt( 103, 199 );
		var b = getRandomInt( 199, 220 );
		fill( r, g, b );
		// function is called rect to draw a rectangle
		// x, y, w, hx

		var w = getRandomInt(24, 180);
		var x = getRandomInt(0, windowWidth - w);

		var h = getRandomInt(24, 180);
		var y = getRandomInt(0, windowWidth - h);

		rect( x, y, w, h );
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function setup() {
	createCanvas( windowWidth, windowHeight );

	noStroke();

	background( "#e6e6e6" );

	// the for takes three things
	// initial state
	// the check
	// the iterative step
	for( var i = 0; i < 200; i++ ) {
		drawRandomSquare();
	}
}

// i only want 200 squares on the page
function draw() {
}