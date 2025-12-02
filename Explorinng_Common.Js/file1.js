const {a} = require('./file2');
const {a:x} = require('./file3');
// const {add} = require('./utils/add');
// const {sub} = require('./utils/subs');

// console.log(a, x);

const {add, sub} = require('../Exploring_ESM/utils/index.mjs');

console.log(add(2,3));
console.log(sub(x,a));