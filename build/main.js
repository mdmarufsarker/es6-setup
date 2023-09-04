"use strict";

var _calculator = require("./js/calculator.js");

var test = "Hello World";

var myFunc = function myFunc(name, age) {
	return "Hi " + name + ", Your age is " + age + " year old!";
};

// let name = prompt("What is your name?");
// console.log(myFunc('Maruf', 18))

// console.log(`Thanks ${name} for using me :D`)

console.log((0, _calculator.add)(2, 3));
console.log((0, _calculator.subtract)(2, 3));
console.log((0, _calculator.multiply)(2, 3));
console.log((0, _calculator.divide)(2, 3));
console.log((0, _calculator.square)(2));