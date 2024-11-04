const fs= require("fs");
const a=100;

setImmediate(()=>{
    console.log("setImmediate");
})

Promise.resolve().then(() => console.log("promise"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading CB");
});

setTimeout(()=>{
    console.log("Time expired");
},0);

process.nextTick(()=>{
    console.log("process.nextTick");
})

function printA(){
    console.log("a=",a);
}

printA();
console.log("last line of the file.");

/*
console:
    a=100
    last line of the file
    process.nextTick
    promise
    Time expired
    setImmediate
    File Reading CB
*/