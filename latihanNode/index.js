const fs = require ("fs");

const conten = fs.readFileSync('node.txt', 'utf-8');
console.log(conten)