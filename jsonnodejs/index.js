const fs=require("fs");
const bioData ={
    name : "Amar",
    age: 22,
    fullname: "AmarChauhan",
};
// console.log(bioData);

// //object to json convert
// const jsonData= JSON.stringify(bioData);
// console.log(jsonData);

// // json to object or string convert
// const objData = JSON.parse(jsonData);
// console.log(objData); 
 
//convert in json
const jsonData= JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err)=>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err, data)=>{
    console.log(data);
    const orgData=JSON.parse(data); 
    console.log(orgData);
});