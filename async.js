
//fs and https are node js core modules.
//in path "node:fs" is equivalent to "fs".
const fs=require('fs');
const https=require("https");

console.log("hello world");

var a=10768698;
var b=20986;

//100-200 mseconds to fetch the data 
//asyncronous
//libuv does the job
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully.");
});

//takes longest time for execution i.e. 5 seconds
//asynchronous 
//done by libuv
setTimeout(()=>{
    console.log("setTimeout called after 5 seconds.");
}, 5000);

//fastest execution
//asynchronous
//done by libuv(v8 offloads it to libuv)
fs.readFile("./file.txt","utf8",(err, data)=>{
    console.log("File Data: ",data);
});

//v8 engine cannot offload this task to libuv 
//it will block the main thread to get executed 
//syncronous
//it is adviced not to use sync method because of its blocking state 
//but still the method is available if u wish to use.
//also remember the readFileSync function does not accept callback like readFile does, so we need to use try,catch.
try {
    const data = fs.readFileSync("./file1.txt", "utf8");
    console.log("File Data: ", data);
} catch (err) {
    console.error("Error reading file:", err);
}

//done by v8 itself
//synchronous
function multiplyFn(x, y){
    const result = x * y;
    return result;
}
var c= multiplyFn(a, b);
console.log("result of multiplication is:",c);

