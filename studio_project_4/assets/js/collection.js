
var url = "https://raw.githubusercontent.com/ewolf0/CoreInteraction/master/studio_project_4/collection_4.json";


// console.log(url);


$.getJSON(url, function(data){
	console.log(data.mycollection);
	//data.mycollection.sort();

	for (var i = 0; i < data.mycollection.length; i++) {

		// $("#info").append("<p>" + data.mycollection[i].imageurl + "</p>")
				//^^ gets the names of each imgurl to show up as <p> tags
		// $("#info").append("<div class='allitems'><div>new</div><img src='" + data.mycollection[i].imageurl + "'></div>")

		// where is says "body" --> you can attach it to anything like any div to have the info show up in a specific area

		// $("#info").append("<div id='item_" + i + "' class='allitems'><div>new</div><img src='" + data.mycollection[i].imageurl + "'></div>")
			// this allows me to target one specific item
	

		$("#info").append("<div id='item_" + i + "' class='allitems'></div>")
		$("#item_" + i ).append("<p>" + data.mycollection[i].title + "</p>")
		$("#item_" + i ).append("<div>new</div>")
		$("#item_" + i ).append("<img src='" + data.mycollection[i].imageurl + "'>")

	}
})

