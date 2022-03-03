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


    //Recived data
    socket.on("beginPath", (data) => {
        // Transfer  data to all connected computers
        // data -> data from front end
        
        io.socket.emit("beginPath" ,  data);
    })
    socket.on("drawStroke",(data) => {
        io.socket.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        io.socket.emit("redoUndo", data);
    })
})