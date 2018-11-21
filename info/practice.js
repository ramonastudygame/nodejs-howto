/*var path = require("path");
console.log(`Hi world : ${path.basename(__filename)}`);
console.log(`Hi there from:${path.basename(__dirname)}`);
process.stdout.write("my pony lies over the ocean");
*/
//Notice ^ example process.stdout.write acts similar to console.log

/*
var util = require('util');//will also add a timestamp
var v8 = require('v8');//v8 will also give memory information
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);
util.log(dirUploads);
util.log(v8.getHeapStatistics());
*/

//Readline module allows us to ask questions of our Terminal User. Wraparound of Standard Input Output objects, prompt qns, save answers.
/*
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
*/

