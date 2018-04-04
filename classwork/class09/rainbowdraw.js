var color = 0;
//needs to be defined outside of the function

document.onmousemove = function(event){
	//var x = event["x"];
	//var y = event["y"];

	var x = event.x;
	var y = event.y;

	var div = document.createElement("div");

	div.style.left = x + "px";
	div.style.top = y + "px";
	div.style.backgroundColor = " hsl(" + color + ", 100%, 50%) ";

	document.body.appendChild(div);

	color = color + 1;

}

