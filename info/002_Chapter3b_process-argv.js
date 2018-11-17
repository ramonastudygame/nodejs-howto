console.log("Gonna output", process.argv, "and that is end of this sentence");
//Note: This outputs as a javascript array 
function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting){
	console.log("No greeting for ya!");
}else{
	console.log(`Welcome ${user}, ${greeting}`);
}

//to run the test
//type node chapterName --user Ramona --greeting "Good Afternoon"