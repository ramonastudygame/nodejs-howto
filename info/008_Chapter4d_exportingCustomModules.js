var Person = require("./lib/Person");//referring to our newly created Person.js object inside the lib folder

var george = new Person("George Washington");
george.on('speak', function(said){
	console.log(`${this.name} ->{said}`);
});

var ben = new Person("Ben Franklin");
ben.on('speak', function(said){
	console.log(`${this.name}:${said}`);
});
ben.emit('speak',"You may delay but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company");

/*
- In Node.js, every Javascript file is a module. We've been loading external modules with the require function. The require function is part of the common JS module pattern, but it only represents half of the pattern, the half that loads the modules. The other half of the pattern is module.exports, or the mechanism that we can use to make our modules consumable. Let's go into our files. Under the Start folder, you'll notice BenFranklin.js. Let's go ahead and open that file up. This is the file that we built in the last lesson where we created a person object and then used that person object on line 10 to create an instance of Ben Franklin.

Let's take this person object and put it in it's own module. I'm going to grab everything from line eight all the way up to line one, and I will cut this code. We can save this file for now. Now I'm going to go ahead and create a new file. So I will go to File and select New File. Here we are at the Ben Franklin level. I'm going to go ahead and add a new folder called Lib from my library, and inside of my Lib folder I'm going to create Person.js. We'll go ahead and save that file.

If we take a look at the folder structure, we now have BenFranklin.js on the same level as the library folder, and in the library folder we have Person.js. This is our reusable module. I'm going to go ahead and paste the code for a person inside of our Person.js file. Now that we have this code here, these variables that we create in this file are local to this module. That means that everything in this file is private and cannot be consumable by another module. If we would like to make items consumable by other Javascript files, we can export them on module export.

Module.exports is a Javascript object. We can use it like any Javascript object. We can dot notate on it, bracket notate, set it to an object literal or any Javascript type. In this case, I'm setting module.exports to our person constructor function. Module.exports is the object that is returned by the require statement. When we require this module, we will return anything that is on module.exports. I will go ahead and save this file. Let's go ahead and load it inside of our BenFranklin.js file.

Here on line three, we are using a person constructor, but above line three we do not have the person constructor, we need to require it. I need to create a variable for person, and I am going to require our module. When we've been requiring core modules, we simply require them by name. When we require A custom module in our file system, we actually have to put the path to that module. This module is in the library folder, the Lib folder, and it's Person.js. When requiring modules, we do not include the .js extension, it just assumes that this file is Javascript, so we are looking for the person Javascript module.

Now we can also use this person object to create more people. I will create another instance of a person. We can also wire up listeners on these other instances. When George speaks, we will fire this callback function. We will just go ahead and also log what George says. We can just say this.name, and this time we'll do a little different character here just to show that this is different, well use a little arrow there.

We will also add said, which is what George Washington says, that is passed to this function. We have added our person object to a separate module, and we have used it to create two instances of people. I'm going to go ahead and save this. The last thing I'm going to do is also emit a George Washington quote. George will emit a speak event and George would say, "It is far better to be alone "than to be in bad company." All right, so now we have used our person object to create two instances of people, but we've required our person object from a separate file.

That means that we can use this person object over and over again in all of our files because of the common JS module pattern. Let's go ahead and save this and go out into our terminal and let's run our file. When we do so, we see that Ben Franklin says, "You may delay but time will not," but George Washington says, "It is far better "to be alone than to be in bad company." We have reused our person object and created two instances of people, but we also have separated our person object out into it's own file, which ultimately makes it easier to reuse.
*/