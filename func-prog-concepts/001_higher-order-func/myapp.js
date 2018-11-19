animals = [
    {name: "Allison", species:"dog"},
    {name: "Joey", species:"dog"},
    {name: "Derick", species:"cat"},
    {name: "Mica", species:"whale"},
    {name: "Sharon", species:"cat"},
    {name: "Truben", species:"dog"},
    {name: "Wyley", species:"dog"},
];

var orders = [
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
];


//Using Reduce with ES6
var totalAmount = orders.reduce((sum,order) => sum+order.amount,0)
console.log("The value of totalAmount here is", totalAmount);

/*Using Reduce with ES5
var totalAmount = orders.reduce(function(sum,order){
    return sum + order.amount;
},0)
*/


/*Using a For Loop
var totalAmount = 0;
for (var i =0; i< orders.length; i++){
    totalAmount += orders[i].amount
}
 console.log(totalAmount)
*/



//BELOW WE USE THE MAP FUNCTION, which is a higher order function
//Using ES6
var names = animals.map((animal) => animal.name + " is a " + animal.species)
console.log(names);


/* Using ES5

var names = animals.map(function(animal){
    return animal.name + " is a " + animal.species;
});
console.log(names);
*/


//BELOW WE USE THE FILTER FUNCTION, which is a higher order function
/*
var dogs = animals.filter(function(animal){
    return animal.species === "dog";
});
console.log(dogs);
*/



/* WITHOUT THE FILTER, MAP FUNCTION
var dogs = [];
for (var i = 0; i < animals.length; i++){
    if (animals[i].species === "dog"){
        dogs.push(animals[i])
    }
}
console.log(dogs);

*/