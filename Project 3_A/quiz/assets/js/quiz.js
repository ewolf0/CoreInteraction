

var sound1a = [2,2,2,2]
var sound1b = [2,2,1,2]
var sound1c = [2,2,1,3]
var sound1d = [2,2,1,1]


var sound2a = [4,1,4,1]
var sound2b = [4,1,3,2]
var sound2c = [4,1,3,1]
var sound2d = [3,1,4,1]

var sound3a = [1,2,1,3]
var sound3b = [1,3,2,2]
var sound3c = [1,4,2,2]
var sound3d = [1,4,1,2]


var sound4a = [4,2,2,2]
var sound4b = [3,2,3,1]
var sound4c = [3,2,3,2]
var sound4d = [2,1,3,2]


// -------------------------
var testSound = [1,0,0,0]
// ------------------------



document.getElementById("button").onclick = function(){
	var currentcombo = [0,0,0,0];


	if (document.getElementById("q1answer1").checked) {

		currentcombo[0] = 1;

	}


	if (document.getElementById("q1answer2").checked) {

		currentcombo[0] = 2;

	}

		if (document.getElementById("q1answer3").checked) {

		currentcombo[0] = 3;

	}

	if (document.getElementById("q1answer4").checked) {

		currentcombo[0] = 4;

	}

	if (document.getElementById("q2answer1").checked) {

		currentcombo[1] = 1;

	}

	if (document.getElementById("q2answer2").checked) {

		currentcombo[1] = 2;

	}

	if (document.getElementById("q2answer3").checked) {

		currentcombo[1] = 3;

	}

	if (document.getElementById("q2answer4").checked) {

		currentcombo[1] = 4;

	}

	if (document.getElementById("q3answer1").checked) {

		currentcombo[2] = 1;

	}

	if (document.getElementById("q3answer2").checked) {

		currentcombo[2] = 2;

	}

	if (document.getElementById("q3answer3").checked) {

		currentcombo[2] = 3;

	}

	if (document.getElementById("q3answer4").checked) {

		currentcombo[2] = 4;

	}

	if (document.getElementById("q4answer1").checked) {

		currentcombo[3] = 1;

	}

	if (document.getElementById("q4answer2").checked) {

		currentcombo[3] = 2;

	}

	if (document.getElementById("q4answer3").checked) {

		currentcombo[3] = 3;

	}

	if (document.getElementById("q4answer4").checked) {

		currentcombo[3] = 4;

	}

	console.log(currentcombo)

	/*if (#q1answer1 = true)
		currentcombo[0] = 1
		
	if #q1answer2 = true
		currentcombo[0] = 2

	if #q1answer3 = true
		currentcombo[0] = 3

	if #q1answer4 = true
		then ______*/
	// should I be saying true or on? -- if I don't give each
	// question a value, when clicked its value will automatically be "on"
	// as opposed to some other assigned value


	if (testSound[0] == currentcombo[0] && 
		testSound[1] == currentcombo[1] &&
		testSound[2] == currentcombo[2] &&
		testSound[3] == currentcombo[3]) {

		location.href="../sound_page_1/sound1.html"

		// location.href = "https://www.google.com/"

		//if correct, navigate to page

	}

	if (sound1a[0] == currentcombo[0] && 
		sound1a[1] == currentcombo[1] &&
		sound1a[2] == currentcombo[2] &&
		sound1a[3] == currentcombo[3]) {

			location.href="../sound_page_1/sound1.html"
	}

	if (sound1b[0] == currentcombo[0] && 
		sound1b[1] == currentcombo[1] &&
		sound1b[2] == currentcombo[2] &&
		sound1b[3] == currentcombo[3]) {

			location.href="../sound_page_1/sound1.html"
	}

	if (sound1c[0] == currentcombo[0] && 
		sound1c[1] == currentcombo[1] &&
		sound1c[2] == currentcombo[2] &&
		sound1c[3] == currentcombo[3]) {

			location.href="../sound_page_1/sound1.html"
	}

	if (sound1d[0] == currentcombo[0] && 
		sound1d[1] == currentcombo[1] &&
		sound1d[2] == currentcombo[2] &&
		sound1d[3] == currentcombo[3]) {

			location.href="../sound_page_1/sound1.html"
	}

// -------------------------sound 2

	if (sound2a[0] == currentcombo[0] && 
		sound2a[1] == currentcombo[1] &&
		sound2a[2] == currentcombo[2] &&
		sound2a[3] == currentcombo[3]) {

			location.href="../sound_page_2/sound2.html"
	}

	if (sound2b[0] == currentcombo[0] && 
		sound2b[1] == currentcombo[1] &&
		sound2b[2] == currentcombo[2] &&
		sound2b[3] == currentcombo[3]) {

			location.href="../sound_page_2/sound2.html"
	}

	if (sound2c[0] == currentcombo[0] && 
		sound2c[1] == currentcombo[1] &&
		sound2c[2] == currentcombo[2] &&
		sound2c[3] == currentcombo[3]) {

			location.href="../sound_page_2/sound2.html"
	}

	if (sound2d[0] == currentcombo[0] && 
		sound2d[1] == currentcombo[1] &&
		sound2d[2] == currentcombo[2] &&
		sound2d[3] == currentcombo[3]) {

			location.href="../sound_page_2/sound2.html"
	}

// -------------------------sound 3

	if (sound3a[0] == currentcombo[0] && 
		sound3a[1] == currentcombo[1] &&
		sound3a[2] == currentcombo[2] &&
		sound3a[3] == currentcombo[3]) {

			location.href="../sound_page_3/sound3.html"
	}

	if (sound3b[0] == currentcombo[0] && 
		sound3b[1] == currentcombo[1] &&
		sound3b[2] == currentcombo[2] &&
		sound3b[3] == currentcombo[3]) {

			location.href="../sound_page_3/sound3.html"
	}

	if (sound3c[0] == currentcombo[0] && 
		sound3c[1] == currentcombo[1] &&
		sound3c[2] == currentcombo[2] &&
		sound3c[3] == currentcombo[3]) {

			location.href="../sound_page_3/sound3.html"
	}

	if (sound3d[0] == currentcombo[0] && 
		sound3d[1] == currentcombo[1] &&
		sound3d[2] == currentcombo[2] &&
		sound3d[3] == currentcombo[3]) {

			location.href="../sound_page_3/sound3.html"
	}

// --------------sound 4

	if (sound4a[0] == currentcombo[0] && 
		sound4a[1] == currentcombo[1] &&
		sound4a[2] == currentcombo[2] &&
		sound4a[3] == currentcombo[3]) {

			location.href="../sound_page_4/sound4.html"
	}

	if (sound4b[0] == currentcombo[0] && 
		sound4b[1] == currentcombo[1] &&
		sound4b[2] == currentcombo[2] &&
		sound4b[3] == currentcombo[3]) {

			location.href="../sound_page_4/sound4.html"
	}

	if (sound4c[0] == currentcombo[0] && 
		sound4c[1] == currentcombo[1] &&
		sound4c[2] == currentcombo[2] &&
		sound4c[3] == currentcombo[3]) {

			location.href="../sound_page_4/sound4.html"
	}

	if (sound4d[0] == currentcombo[0] && 
		sound4d[1] == currentcombo[1] &&
		sound4d[2] == currentcombo[2] &&
		sound4d[3] == currentcombo[3]) {

			location.href="../sound_page_4/sound4.html"
	}




}



	// if (currentcombo === sound1){
	// 	// navigate to sound_page_1.html
	// }















