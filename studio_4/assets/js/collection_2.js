
var url = "https://raw.githubusercontent.com/ewolf0/CoreInteraction/master/studio_project_4/collection_4.json";


// console.log(url);


$.getJSON(url, function(data){
	console.log(data.mycollection);
	//data.mycollection.sort();

// console.log(Object.keys(url));

	for (var i = 0; i < data.mycollection.length; i++) {

		// $("#info").append("<p>" + data.mycollection[i].imageurl + "</p>")
				//^^ gets the names of each imgurl to show up as <p> tags
		// $("#info").append("<div class='allitems'><div>new</div><img src='" + data.mycollection[i].imageurl + "'></div>")

		// where is says "body" --> you can attach it to anything like any div to have the info show up in a specific area

		// $("#info").append("<div id='item_" + i + "' class='allitems'><div>new</div><img src='" + data.mycollection[i].imageurl + "'></div>")
			// this allows me to target one specific item
	

		$("#info").append("<div id='item_" + i + "' class='allitems date-" + data.mycollection[i].date + "'></div>")
		// $("#item_" + i ).append("<div>new</div>")
		$("#item_" + i ).append("<img src='" + data.mycollection[i].imageurl + "'>")
		$("#item_" + i ).append("<p>" + data.mycollection[i].title + "</p>")
		$("#item_" + i ).append("<img class='ray' src='./assets/hover2.png'>")

	}
})


$.getJSON(url, function(data){
	console.log(data);

	// console.log(Object.keys(data));
	var keys = Object.keys(data);

	for(var i = 0; i < keys.length; i = i + 1){
		var o = document.createElement("option");
		o.textContent = keys[i];
		o.value = keys[i];
		document.getElementById("dropdown1").appendChild(o);
	}


	document.getElementById("dropdown1").onchange = function(){
		var key = document.getElementById("dropdown1").value;
		var newList = data[key];
		console.log("test:", newList);

var dates = [1930,1929] // you put the dates in a for loop to add them to the dropdown menu

// then, onchange, get value that the menu is changed to, and search your objects for that class (i.e. date-value)
// then: 

/*
	//pseudo code
	if( this element has this class: date-value){
		do nothing
	} else{
		display none (i.e. hide the element)
	}



*/


		for(var i = 0; i < newList.length; i = i + 1){

			console.log("testing")
			var o = document.createElement("option");
			o.textContent = newList[i].date;
			o.value = newList[i].date;
			console.log("o.value: ", o.value);
			var title = o.value;
			document.getElementById("dropdown2").appendChild(o);
		}


	}

});








