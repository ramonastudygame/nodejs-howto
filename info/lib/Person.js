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


module.exports = Person;