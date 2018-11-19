//Part 1 was an example of renaming, in this file, Part 2, we will use the following code to remove a file.


var fs = require("fs");
try {
    fs.unlinkSync("removeMe.0.js");
} catch(err) {
    console.log("The error in this case is ", err);
}

fs.unlink("removeMe_1.js", function(err){
    if(err){console.log(err);}
    else{console.log("The file formerly known as removeMe_1 was removed");}
});

/* The above code contains errors, its mostly due to incorrect syntax, please revisit */