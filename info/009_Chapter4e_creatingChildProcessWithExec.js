var exec = require("child_process").exec;
exec("open http://www.ramonadsouza.com");


/* THE ABOVE CODE IS NOT THE LATEST, PLEASE REVIEW CHAPTER AGAIN
- Node.js comes with a Child Process module which allows you to execute external processes in your environment. In other words, your Node.js app can run and communicate with other applications on the computer that it is hosting. In the next two lessons we're going to take a look at the two main functions used to create Child Processes: spawn and execute. So far we've been working with the terminal or the command prompt. We can actually type other terminal commands into this prompt. For instance open . will open my current folder inside of the finder.

These commands are going to be different based on the system. In order to do this in Windows you would explorer . Some commands are the same for both systems. Opening a URL for instance will work the same in both systems; open http:// your URL will open that URL in your default browser. But most commands are unique per system. To list files on the Mac I would us the ls command where as I would use the dir command to list files on a PC.

If I wanted to open an instance of the terminal I would open -a Terminal . and that would open a new instance of the terminal on my current folder. In Windows that is cmd . it will open a new instance of the command prompt in that folder. When can also use externally installed apps that we can communicate with through the command line. For instance, if I wanted to find out the version of git that I had installed I could type git version and that would tell me that I have git version 2.3.8 installed.

With the Node.js execute function we can actually execute these external commands from our Node.js modules. Let's go ahead and go to our file system and you will notice that under the start folder there is an exec.js file. This is an empty JavaScript file. Let's just go ahead and open it up. With the Child Process module we have an execute function. I'm going to go ahead and extract that from this module by creating a new variable and calling it exec, and then I'm going to require the "child_process" module.

The Child Process module contains the execute function, so I'm just going to chain this on the end so I can pluck it out into my execute variable. Now with the exec function I can execute commands. I can exec, for instance, an open, and now when I actually save and run this node module we will go ahead and open LinkedIn in our default browser. Let's go ahead and go to the terminal and I will clear this out and we will go ahead and node our file.

So we will node our new file and we can see that when our file starts LinkedIn is also opened in our default browser window. Let's no back to our file in sublime and let's try and execute a different command. Let me try and open a terminal. This command is different in the dos environment. For me it's "open -a Terminal ." in the dos environment it's just cmd. to open a new instance of the command prompt. So I will go ahead and save this, go out to our files and run my file again.

You can see that running that file opens another terminal instance. Let's go back into our file, and this time let's execute a process which would display some output to the terminal. We can actually collect that output as well. What I'm going to do is execute a ls or a directory listing. You can execute a dir if you are in a Windows environment. Now every time we've been executing any of these processes any data that gets returned by the process would be returned to the second argument in the execute function, a call back function.

So in this call back function after we execute ls and we receive information back from ls it will be injected into this function via argument. So first, if there are any errors when executing a directory listing we pass those as the first argument. The next argument is the stdout, or standard output, that we've received from executing the ls. So I will add that there. What I'm going to do is in this function if there was an error executing a directory listing I'm just going to throw it.

If there is an error we can throw that error and that will cause our application to crash and our process to exit. But, this should execute fine, so we can just list the console output. So I'll just go ahead and log a ls finished, or a "Listing Finsihed", and then I will go ahead and log that output which would be found on our stdout object. There we go. So let's go ahead and save this and now let's go back into our terminal and let's run this file again.

Now we are executing a directory listing and we can see it says Listing Finished and the only thing it found was exec.js in this file. Let's see what happens if we go in here, back to our code, and we try to execute that git command. I'm going to go ahead and type "git version". Down here instead of adding a "Listing Finished" we will just install "Git Version Executed". I will go ahead and save this and let's go back to our terminal and we can actually run our file again and we can see that we have executed the Git version in out stdout from executing that Git Version command.

Displays git version 2.3.8. So the execute command is a nice tool that allows us to execute external processes found in our environment.

 Resume Transcript Auto-Scroll
*/