var fs = require('fs');
fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
	console.log(`File Read ${chatlog.length}`);
});
console.log("Reading File");

//there is more to this video, please rewatch
//plus one more video in this section, called writable file streams, watch that too.