const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate1");
});

setTimeout(() => {
  console.log("1st Timer");
}, 0);

Promise.resolve().then(() => console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => {
    console.log("2nd Timer");
  }, 0);

  process.nextTick(() => {
    console.log("2nd process.nextTick");
  });

  setImmediate(() => {
    console.log("2nd setImmediate");
  });

  console.log("File reading CB")

});

process.nextTick(() => {
  console.log("process.nextTick 1");
});

console.log("last line of the file.");

/*
console:
    last line of the file
    process.nextTick 1
    promise
    1st timer
    setImmediate 1
    //now note libuv is at pool phase
    File reading CB
    2nd process.nextTick
    //note after pool phase check phase is executed and not timer
    2nd setImmediate
    2nd Timer
*/
