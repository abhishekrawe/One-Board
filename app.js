const express = require("require"); //Access //  express is a function 
const socket = require("socket.io");


const app = express(); // Initialization // sever ready // calling function 


let port = 5000; // listeinig at port 5000
let server = app.listen(port , () => {
    console.log ("listening to port " + port);
})