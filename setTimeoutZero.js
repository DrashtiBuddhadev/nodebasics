console.log("Hello world!");

var a=1078698;
var b=20986;


//it is an ansync operation so 
//it won't be executed immediately it goes to the libuv 
//and libuv excutes callback only when callstack is empty i.e.e
//when entire code is first completely executed i.e. from line 1 till the code ends
//so first synchronous operation multiply gets executed
//basically it runs after 0 miliseconds ONLY AFTER callstack is empty
setTimeout(()=>{
    console.log("Call me right now");
},0);

setTimeout(()=>{
    console.log("Call me after 3 seconds");
},3000);

function multiplyFn(x, y){
    const result= a*b;
    return result;
}

var c=multiplyFn(a,b);

console.log("multiplication result is: ",c);