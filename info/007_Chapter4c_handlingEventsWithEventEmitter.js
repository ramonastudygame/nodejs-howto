//part 1 of this exercise
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('customEvent', function(message, status){
	console.log(`${status}:${message}`);
});
emitter.emit('customEvent', "Hello World", 200);

//part 2 of this exercise
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function (name){
	this.name = name;
};
util.inherits(Person, EventEmitter);
var ben = new Person("Ben Franklin");
ben.on('speak', function(said){
	console.log(`${this.name}:${said}`);
});
ben.emit('speak',"You may delay but time will not.");


/*
- Another powerful feature that ships with Node.js is the Event Emitter. The Event Emitter is Node.js's implementation of the pub/sub design pattern, and it allows us to create listeners for an emit custom Events. In fact, every time we've used that on function to listen for a new Event, we've already been using an implementation of the EventEmitter. Let's go to our files. You will find an empty JavaScript file titled BenFranklin.js. Go ahead and open up that file in Sublime. The EventEmitter is a part of the Events module.

So, I'm going to go ahead and create a variable for events, and I will require the events module. Now, the EventEmitter itself is a constructor. So, I'm going to create a new instance of a variable called emitter. So, we'll create a new instance of the emitter by using the new keyword with the event module, .Event Emitter. There is the function that we want to use. So, the EventEmitter is constructor, and we're going to create a new instance of the EventEmitter. Now, this object that we created here on line 3 has on an emit.

So, every time we use on, we can wire up a custom event. You can name an event whatever you like. In this case, I've just called this customEvent. The second argument that the on function takes is a callback function that will be invoked when the custom event is raised. In this case, our custom event is going to pass a message and a status to this function as arguments. So, when our custom event occurs, this callback function will be invoked asynchronously. Let's just go ahead and log the status in the message using template string.

So, I'm going to use those ` characters. And we'll go ahead and grab the status. And now, I'm going to go ahead and add the value of the message to this template string. There we go. So, when a custom event is raised, we'll pass a message and a status to this callback function asynchronously, and we're just going to log that message in status. The next part of the EventEmitter is the ability to trigger or emit custom events. We can trigger or emit a custom event with the emit function. So, emitter.emit will fire our custom event.

The first argument is the event name that we want to fire. And then, the next arguments are going to be the arguments that will passed to the callback function. So, the first argument in the callback function, the message, is actually the second argument of this emit function. So, for the message, I will send Hello World. And the third argument is going to be the second argument in the callback. So, I will send a status of 200. In this code, we've created a new instance of the EventEmitter object, and we wired up a listener to listen for custom events.

Now, we are going to emit a custom event. Let's go ahead and save this and go over to the Terminal, and let's run our file, node BenFranklin. We can see here that this worked successfully, giving us a status of 200 and a message of Hello World returned in the Terminal. The EventEmitter is rarely used as a standalone object. We can really get mileage out of it by allowing our objects to inherit the EventEmitter. Let's change our code so that we have a person object that inherits the EventEmitter. Let's go back to our code in Sublime.

The first thing that I want to do is instead of including just the events up here on line one, we can actually pull the EventEmitter out of events directly in this require statement here. So, I will use EventEmitter as a variable. And then, I can just chain on to the end of this require statement EventEmitter. And that will pull that constructor function out of the events module and set this variable to our new constructor function. The next thing that we're going to do is we're not going to just create an instance of the emitter. So, I'm actually going to delete all of this code.

What I would like to do is create an object, and that object is going to be a Person. Now, in JavaScript, objects are functions. So, we will create a constructor function here for this object. In this constructor function, we're going to take in the Person's name. In this object, this Person's name will be set to the name value that is passed to this constructor function. So, we're going to create an instance of a Person. This instance of a Person is going to be an object that has a name property. Alright, so, what we want is our Person object to inherit the EventEmitter.

We can actually use the utilities module to help us do this. Up here, on line two, I'm going to create a var called util, and I'm going to require our utilities module. The utilities module has an inherits function, and it's a way that we can add a object to the prototype of an existing object. That's how JavaScript handles inheritance. So, what I'm going to do is add util.inherit here on line eight. We want our Person object to inherit our EventEmitter.

So, this one line here has just added the EventEmiiter to the Person's prototype, which means that the Person object inherits all of the functionality from the EventEmitter. If I create a new instance of a Person, it will have an on and emit function. So, let's create an instance of BenFranklin or ben with this new Person object. So, here on line 10, I'm going to add a variable for ben. That will be the new Person that we're going to create an instance of. I'm going to invoke my Person function with a new keyword because it is a constructor.

When we invoke this new Person function, we're going to send it a name. So, there we have created a new instance of a Person. And the name of this new instance is Ben Franklin. So, because this Person inherits the EventEmitter, ben can listen for custom events. We could listen for, let's say, when ben speaks. If a speak event is raised, this callback function will be used to handle it. And whatever ben just said will be passed to this function. I'll go ahead and add that there.

So, this callback function will take in said as the argument when the speak event raises. We'll go ahead and just log what ben is saying. I'm going to use a template string to do that. Let's use those ` characters. What we're going to do is use a $ and a couple of {s to display this or this current Person, ben's name. So, we can use the this keyword because this callback function knows that this is the current instance of your object.

This is equal to ben. And then, we'll go ahead and also log what they said. Alright, so, ben also has an emit function, which means that this instance of ben can emit a speak event. You may delay, but time will not. There we go. So, whenever ben emits a speak event, any listeners that listen for the speak event, like the one we've wired up on line 12, will fire their custom callbacks.

In this case, we are passing You may delay, but time will not to that callback function as the said variable. When this happens, we're going to log the name of the person, and we're also going to log what they just said with the recent speak event. So, let's go ahead and save this. Let's go back to our Terminal, and let's run our application again. We will node BenFranklin. We can see that Ben says You may delay, but time will not. The EventEmitter provides us a way to create custom objects that raise custom events that can be handled asynchronously.

And because the events are handled asynchronously, it is a very important tool in node.js.
*/