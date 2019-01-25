let num = 103.941;
console.log(num.toFixed(2));

// Using Math
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Math.Random
let randomNum = Math.random();
console.log(randomNum);

let min = 0;
let max = 1;
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge
// 1 - 5 true if correct - false if not correct

let makeGuess = function(number) {
	
	nim = 0;	
	max = 10;
	randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

	return number === randomNum;
} 

console.log(makeGuess(1));
