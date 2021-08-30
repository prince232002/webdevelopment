// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking (eg fs.readline)
// - line by line execution not guaranteed
// - callbacks will fire
// trick to rem: like mummy say after little baby finishes his  food then only give  sweet to  otherwise he will not eat food if you give the sweet first 
const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
