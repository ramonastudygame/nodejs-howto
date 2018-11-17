var fs = require("fs");
fs.renameSync("./sample.md", "./sample.html");
console.log("HTML file renamed");
fs.rename("./sample.md", "./sample.html", function(err){
	if (err){
		console.log(err);
	}else{
		console.log("Changes happened successfully");
	}
});

