// const add = require("./oper");
// console.log(add(5, 5));

// console.log(add);

const oper = require("./oper");
console.log(oper);
console.log(oper.add(5,10));
console.log(oper.sub(10,5));

//or sort form as object
const {name, add, sub} = require("./oper");
console.log(name);
console.log(add(5,10));
console.log(sub(10,5));