var fs = require("fs");
var output = fs.readFileSync("data.txt", 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity:line[3]
        })
        return customers
    }, {})
//In the computer, strings are just a bunch of bytes in memory, with a buffer.  So using UTF, you get it to read in a readable format.  On the next line we add a backslash n, which gives us a line break.
//JSON stringify is super cool, cause the data is presented so much better
//console.log("Gonna output some information", '\n\n', output);
console.log("output", JSON.stringify(output, null,2))