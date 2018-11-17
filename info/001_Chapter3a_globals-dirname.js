global.console.log("Uses global object - but Global is always assumed without saying it");

var hello =("It is a beautiful day");
var helloSliced = hello.slice(8);
console.log(`Backticks allow for templaty curly braces 
             88888 ${helloSliced} 88888 text`);
//Output directory name with 2 underscores.
console.log(__dirname); 
console.log(`The directory name is ${__dirname}`)
console.log(`The full path to this file is ${__filename}`);

//Path Module
var path = require("path");
console.log(`Hello World from ${path.basename(__filename)}`);