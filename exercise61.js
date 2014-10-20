var fs = require("fs");
var path   = require("path");

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, files){
		var list = [];
		if (err){
			return callback(err);
		}
		ext = "." + ext;
		files.forEach(function(item){
			fileName = item.toString();
			if (path.extname(fileName) == ext){
				list.push(fileName);

			};

		});
		return callback(null, list);

	});

}