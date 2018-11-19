# nodejs-howto
NODE Notes:  NodeJs is free open source, can run on any platform. Node.js is actually not a framework, but a runtime environment that allows to execute JavaScript on the server side. In Node.js, every JavaScript file is a module, the "require" function is part of the common JS module pattern, but it only represents half the pattern, the half that loads the modules.  The other half, of the pattern, is module.exports, a mechanism used to make our module consumable.  

**Note: After studying this course, do check out CAcademy, if they offer a course there too!

1: The global object is always assumed : global.console.log
2: Backticks and templaty curly braces
3: __dirname, __filename
4: var path = require("path");
5: 001, Output of ${path.basename(__filename)}
6: 002, process.argv is a great tool, if we want to specify ports, file folders etc, for our app to use at the very beginning.
7: 003, process.stdout.write, process.stdin.on
8: 004, setTimeout
9:  005, Core Modules: Understanding path, util, v8 modules.
10: 006, Readline module allows us to ask questions of our Terminal User. Wraparound of Standard Input Output objects, prompt qns, save answers.
Readline can be used to prompt the user, without having to use standard input and standard output directly.
11: 007,008,Node.js implementation of the pub/sub design pattern is Event Emitter, which is a constructor that allows us to create listeners, for emit Custom Events.  (happens every time we listen for a new Event)
12: 009, Node.js comes with Child process module, to execute external processes, i.e. you can run, communicate with other applications the computer is hosting.  2 functions used to create Child processes, spawn & execute!  
In the command prompt type,   open .    to get the current folder inside of finder.
In the command prompt type,   open -a terminal to open an instance of terminal.
In the command prompt type,   git version
13: File 010, The FILE SYSTEM:  is a great way to see how a child process works using the .exec and ls to have us list out directory contents
14: File 011, the fs module used to list, create, stream, write, read, modify permissions etc of files and directories. **Note the differences between how we list the files synchronously and asynchronously! We can do that simply by dropping the Sync. When we drop the Sync from any of these fs commands, also readdir is not going to return our files any longer, but this is an asynchronous command, so what it's going to do is put in a request to read the files from the library folder and when the file system is finished reading those files this call back will be invoked.

File 012, is about using readdir to read files.

NOTE:  SEE BELOW, NOTE BEGIN AND ALL UP TO NODE END... 
At this confusing point, realized I am missing core concepts of funcional programming.  Created, new folder, called func-prog-concepts
The first chapter - Higher Order Functions.  Example used is Filter Function.  

15: File 013, is about Writing and Appending files.
and if you revisit this chapter, you can see an example of running this command in a way where you can get a new file for each person, that contains quotes by them.  

16: File 014, is about making directories
note fs.mkdir enables us to make a directory and in our case if the lib directory already exists, it will say "Directory already there"

17: File 015, is about renaming and removing files.  
we are using the fs.renameSync method to rename a file synchronously.
We have a part1, and part2 

18: Removing directories 
fs.rmdir is the command for this

19: We learn about Readable File Streams next!







NOTE BEGIN:  Understand the difference between forEach, filter and map; Then learn about Reduce, Advanced Reduce!; Then understand closures.  
Then understand Currying.  Then, study about Recursion.  Then understanding Promises, Functors.
These are functional programing concepts.
: NOTE END

Foreach like its name "for each", executes a callback function and run that callback function on each element of array one by one.  The callback is invoked with 3 arguments:  the element value, the element index, the array being traversed.

Filter let you provide a callback for every element and returns a filtered array.  The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. 

Map: just like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.  **As a ReactJS developer, map is used a lot in application UI.

Reduce, takes a call back, like every function we just talked about, and reduces the array to one single value.  

Currying:Currying is when a function doesn't take all of its arguments up front. Instead it wants you to give it the first argument.   And then the function returns another function, which YOU are supposed to call with the second argument. Which in turn will return a new function.   Which you are supposed to call with the third argument.  And so on... until all the arguments have been provided.  
And then... the function at the end of the chain will be the one that returns the value that you actually want.  
The idea behind currying is that your function can pass through the application and gradually receive the arguments that it needs.  At some point we install lodash. 

Recursion:Recursion is when a function calls itself until it doesn't.  Simply that is all it is!  Don't make it too darn complicated... people on the internet try to explain it with fibonacci numbers lol.  What a waste of time.  Just keep things simple.  See our example.  Recursive functions can do something that loops cannot.

Functors:  A functor is simply something that can be mapped over.  In OOP speak, we call it a mappable.  In the example below, the array is a functor!
console.log([2, 4, 6].map(x => x+3))
will result in// => [5, 7, 9]

Modads: A type of functor that also implements Flatmap!   

Streams: Think of a stream as the result of promise and array having a baby that's a series of multiple objects that are already there while a promise is a notion of a single object that might be there eventually... a Stream is a throw of values that will arrive whenever they feel like it.  




_________________PROMISES__________________________________________
Look up Evernotes with images and further descriptive understanding, and this is a chapter you can dive deep into later.  



==================   Old vs. Modern Way to import a library in Node ==================
var fs = require("fs");
                     or ... in modern JavaScript we would say
import fs from "fs"
                     the modern way did not work for me but good to know about it.






==================   LIVE Server ==================

To run a live server:python -m SimpleHTTPServer 8000

==================   NPM Notes ==================
Global package install:  sudo npm install packageName
To Remove a package: npm uninstall

Interpreting version releases: Example 1.8.2 [1 represents a Major Release, 8 represents a minor release, 2 in this case represents a patch release]

To see if Node is installed, type node -v in Terminal
To see if NPM [^ Node's Package Manager ^]is installed, type npm -v in Terminal
You can also open a Terminal from VSCode and, 
     npm init 
The above command walks through your first packageJSON creation.  

To check for outdated packages: npm outdated, or npm outdated -g