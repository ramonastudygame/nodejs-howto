//STANDARD INPUT AND STANDARD OUTPUT
var questions = [
"What is your name?",
"What is your fav hobby?",
"What is your preferred programming language?"
];
var answers = [];
function ask(i){
	process.stdout.write(`\n\n\n\n  ${questions[i]}`);
	process.stdout.write(" > ")
}
//COMMENTED LINE... TO NOT STOP AND CONTINUE THE PROCESS ASYNCHRONOUSLY
//SOLUTION IS TO HAVE IT SAVE YOUR ANSWERS TO AN ARRAY

process.stdin.on('data', function(data){
	//process.stdout.write('\n'+ data.toString().trim() + '\n');
	answers.push(data.toString().trim());
	
	if (answers.length < questions.length){
		ask(answers.length);
	}else{
		process.exit();
	}
});
//BEFORE EXITING, I WANT IT TO DISPLAY ANSWERS BACK TO THE USER
process.on('exit', function(){
	process.stdout.write(`${answers[0]}, your fav hobby is ${answers[1]}, and your preferred programming language is ${answers[2]}`);
});
ask(0);