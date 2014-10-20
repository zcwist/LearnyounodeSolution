var http = require("http");
var bl = require('bl');


var url1 = false;
var url2 = false;
var url3 = false;

var data1;
var data2;
var data3;

function printData(){
	console.log(data1);
	console.log(data2);
	console.log(data3);
}

http.get(process.argv[2], function(res){
	res.pipe(bl(function(err,data){
		url1 = true;
		data1 = data.toString();
		if (url1 && url2 && url3){
			printData();
		}
	}))

});
http.get(process.argv[3], function(res){
	res.pipe(bl(function(err,data){
		url2 = true;
		data2 = data.toString();
		if (url1 && url2 && url3){
			printData();
		}
	}))

});
http.get(process.argv[4], function(res){
	res.pipe(bl(function(err,data){
		url3 = true;
		data3 = data.toString();
		if (url1 && url2 && url3){
			printData();
		}
	}))

});