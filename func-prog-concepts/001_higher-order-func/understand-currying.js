//CURRY VERSION
let dragon = 
    name =>
        size =>
            element =>
                name + " is a " +
                size + " dragon that breathes " +
                element + "!"
console.log(dragon("fluffykins")("tiny")("lightning"));
/* UNCURRIED VERSION
let dragon = (name, size, element) =>
    name + " is a " +
    size + " dragon that breathes " + 
    element + "!"
console.log(dragon("fluffykins", "tiny", "lightning"))
*/