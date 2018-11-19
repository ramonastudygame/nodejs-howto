//CURRY VERSION
/*
Modern way to import lodash that is not supported yet.
import _ from 'lodash'
*/
var _ = require('lodash');  //The ES5 way to import lodash and it works!
let dragon = (name, size, element) =>
    name + " is a " +
    size + " dragon that breathes " + 
    element + "!"

    dragon = _.curry(dragon)

    console.log(dragon("fluffykins", "tiny", "lightning"))
