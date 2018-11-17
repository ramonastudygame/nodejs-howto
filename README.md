# nodejs-howto
NODE Notes:  NodeJs is free open source, can run on any platform, using JavaScript on the server.

1: The global object is always assumed : global.console.log
2: Backticks and templaty curly braces
3: __dirname, __filename
4: var path = require("path");
5: Output of ${path.basename(__filename)}
6: process.argv is a great tool, if we want to specify ports, file folders etc, for our app to use at the very beginning.



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