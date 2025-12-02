// const {add} = require('./add');
import {add} from './add.mjs';
// when it is named export we have to destructure the module



// const {sub} = require('./subs');
import biyog from './subs.mjs';
// when it is export default we have to receive it as a variable

export default {
    add,
    biyog,
};




// module.exports = {add, sub};
// export {add, sub};