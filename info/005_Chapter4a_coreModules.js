var path = require('path');
var util = require('util');//will also add a timestamp
var v8 = require('v8');//v8 will also give memory information
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);
util.log(dirUploads);
util.log(v8.getHeapStatistics());