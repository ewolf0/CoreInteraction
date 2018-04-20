
var url = "https://raw.githubusercontent.com/ewolf0/CoreInteraction/master/studio_project_4/collection_4.json";



// console.log(url);


$.getJSON(url, function(data){
	console.log(data.mycollection);
	//data.mycollection.sort();

	for (var i = 0; i < data.mycollection.length; i++) {

		$("#info").append("<p>" + data.mycollection[i].imageurl + "</p>")
		$("#info").append("<div class='aclass'><div>new class</div><img src='" + data.mycollection[i].imageurl + "'></div>")

		// where is says "body" --> you can attach it to anything like any div to have the info show up in a specific area

	}
})

