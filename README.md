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

**Continue with chapter on ... Writing & Appending Files.**


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