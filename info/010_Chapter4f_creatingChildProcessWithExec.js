var exec = require("child_process").exec;
exec("ls", function(err,stdout){
    if(err){
        throw err;
    }
console.log("Listing Finished");
console.log(stdout);
});
/*The above is just like typing ls in the console to get a listing of our files, except we are using a child process to execute */