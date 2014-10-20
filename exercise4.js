var fs = require("fs");
var buffer = fs.readFile(process.argv[2], "utf-8", function(err,data){
	var str = data.toString();
	console.log(str.split('\n').length-1);
});

