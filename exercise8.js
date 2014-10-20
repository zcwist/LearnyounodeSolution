var http = require("http");
var url = process.argv[2];
var bl = require('bl');
// console.log(url);

http.get(url, function(res){
	res.pipe(bl(function(err, data){
		console.log(data.toString().length);
		console.log(data.toString());
	}));


});

