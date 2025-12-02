// const {a} = require('./file2');
import {a} from './file_es2.mjs';

// const {a:x} = require('./file3');
import {a as x} from './file_es3.mjs';

// const {add} = require('./utils/add');
// const {sub} = require('./utils/subs');

// console.log(a, x);

// const {add, sub} = require('./utils/index');
import utils from './utils/index.mjs';

console.log(utils.add(2,3));
console.log(utils.biyog.sub(x, a));


// console.log(a, x);