const express = require("express"); //Access //  express is a function 
const socket = require("socket.io");


const app = express(); // Initialization // sever ready // calling function 

app.use(express.static("public"));

let port = 5000; // listeinig at port 5000
let server = app.listen(port , () => {
    console.log ("listening to port " + port);
})

let io = socket(server);
io.on("connection", (socket)=> {
    console.log("Made socket connection");
})