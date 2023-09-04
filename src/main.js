let test = "Hello World"

const myFunc = (name, age) => {
	return `Hi ${name}, Your age is ${age} year old!`;
}

// let name = prompt("What is your name?");
// console.log(myFunc('Maruf', 18))

// console.log(`Thanks ${name} for using me :D`)

import { add, subtract, multiply, divide, square } from './js/calculator.js';

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(square(2));