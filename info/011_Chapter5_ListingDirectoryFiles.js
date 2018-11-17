var fs = require("fs");//through this module we can list file system
var files = fs.readdirSync('./lib');//readdirSync is a method used to read directory synchronously with a blocking request
console.log(files);
/*
 When we use any methods of the fs module we are given the option to use them synchronously or asynchronously. Be careful because reading files synchronously will block the single Node.js thread so all other connections will wait for this synchronous recall.
  When we use any methods of the fs module we are given the option to use them synchronously or asynchronously. Be careful because reading files synchronously will block the single Node.js thread so all other connections will wait for this synchronous recall.
*/


/*In the example below we will do the same as above but do so ASYNCHRONOUSLY*/
fs.readdir('./lib', function(err,files){
	if (err){
		throw err;
	}
	console.log(files);
});
console.log("Reading Files...");
/*If you check the documentation, notice that there is a synchronous and asynchronous way to do fs
We like to use the synchronous command when we start our applications. So if we're reading configuration details, so on and so forth, but when we are actually running our applications, we want to stay away from those synchronous commands and make sure we are putting in asynchronous commands.
*/