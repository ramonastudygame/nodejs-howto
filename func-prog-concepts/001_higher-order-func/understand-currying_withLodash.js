//CURRY VERSION
var lodash = require("lodash");
let dragon = (name, size, element) =>
    name + " is a " +
    size + " dragon that breathes " + 
    element + "!"
console.log(dragon("fluffykins", "tiny", "lightning"))

lodash_.curry(dragon);