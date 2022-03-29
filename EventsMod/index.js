const EventEmitter= require("events");  //class
const event = new EventEmitter();  //object

// event.on("sayMyName", ()=>{          //event define
//     console.log("Your name is Amar");
// });
// event.on("sayMyName", ()=>{          //event define
//     console.log("Your name is Chauhan");
// });
// event.on("sayMyName", ()=>{          //event define
//     console.log("You are from Gorakhpur");
// });

// event.emit("sayMyName"); //event fire

event.on('checkPage',(sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "ok");



