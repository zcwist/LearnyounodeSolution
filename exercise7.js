var http = require("http");
var url = process.argv[2];

// console.log(url);
http.get(url, function(res){
	res.on("data", function(data){
		console.log(data.toString());
	})	
});