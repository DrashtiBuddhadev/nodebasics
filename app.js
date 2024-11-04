const { calculateSum, calculateSub, enter, calculateMultiply } = require('./calculate');

var name = "Drashti";
var a = 10;
var b = 20;

console.log(name);
console.log(a + b);

// Imported from single function export
calculateSum(a, b);

// Multiple function/method/var exported
calculateSub(a, b);
console.log(enter);

calculateMultiply(a, b);

// On browser we have a global object called : window
// In Node we have a global object called: global
console.log(global);
console.log(globalThis);
console.log(global === globalThis);
