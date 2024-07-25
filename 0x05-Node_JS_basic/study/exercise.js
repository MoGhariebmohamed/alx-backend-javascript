//to import the files use ./directory 
const math = require('./math')
//to import any module as const
const osc = require('os')
// to import path modul for file path
const path = require('path')
//to print out the global object of the server which running node
console.log(global);
// to print the os
console.log(osc.type());
// home directory for the server
console.log(osc.homedir());
// version for the server software
console.log(osc.version());
// to use the function in math file which imported befor
console.log(math.rest(8, 8));
// to get the all data for file (root, dir, base, extension, name)
console.log(path.parse(__filename));
// file name
console.log(__filename);
// firectory for file
console.log(__dirname);
// directory name 
console.log(path.dirname(__filename));
// extension
console.log(path.extname(__filename));
// basename for the file
console.log(path.basename(__filename));
const fs = require('fs');
// to read the file from knon extension but if not data.toString() or (dir, 'utf', (err, data) =>  it will be 
fs.readFile('./lorum.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
