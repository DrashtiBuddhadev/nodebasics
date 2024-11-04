const fs= require("fs");
const a=100;

//this will go inside callback queue and wait for its turn
//let this function be called as callback function A 
//v8 engine is busy so function A will go to callback queue
// callback queue: A | 
setImmediate(()=>{
    console.log("setImmediate");
})

//libuv will start reading this file after connecting to operating system
fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");
});

//This will also be added to callback queue because v8 engine still has further code to process.
//let this function be called as: B
//callback queue now: A | B | 
setTimeout(()=>{
    console.log("Time expired");
},0);

//synchronous operation
//will be executed immediately and output will be produced as a=100 when 
//printA() is called
function printA(){
    console.log("a=",a);
}

printA();
//after a=100
//the below line will be printed because no offload required
console.log("last line of the file.");

//once the above 2 lines are printed v8 is ideal
//so event loop will now retun the callback outputs
/*phase1: timers are taken care off : 
    so will print: time expired
    it will be poped out from callback queue

    then A function is still in callback queue
    so it will poped and printed
    as: setImmediate(in console)

    then the file that was reading will be executed 
    console: File reading CB
*/