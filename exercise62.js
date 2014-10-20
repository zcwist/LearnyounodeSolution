var filter = require("./exercise61");

var filepath = process.argv[2];
var ext = process.argv[3];
var log = function(err, data){
	if (err){
		 console.log("A error occured");
	} else {
		data.forEach(function(item){
			console.log(item);
		})
	}
}
filter(filepath, ext, log);
