var fs = require('fs');
//var contents = fs.readFileSync('./lib/Person.js');
//console.log(contents);//you must give UTF-8 encoding for it to read properly

//var contents = fs.readFileSync('./lib/Person.js', "UTF-8");//using UTF-8 encoding so you can actually see the contents
//console.log(contents);


// fs.readFile('./lib/Person.js', "UTF-8", function(err, contents){
// 	if(err){
// 		console.log(err);
// 	}
// 	console.log("My contents:::",contents);
// });

//var fs = require('fs');
var path = require('path');
fs.readdir("/.lib", function(err,files){
	
	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		
		if (stats.isFile() && fileName !== ".DS_Store"){
			
			fs.readFile(file,"UTF-8", function(err,contents){
				console.log(contents);
			});

		};
	});

});

//THE ABOVE CODE CONTAINS ERRORS, its mostly correct, but forEach undefined error, 
//please fix and REVISIT