const add = (a,b)=>{
return a+b;
};
const sub = (a,b)=>{
    return a-b;
};
const name= "Amar";
// //module.exports = name;
// module.exports.add = add;
// module.exports.sub = sub;

//or short form
module.exports={name, add, sub};
