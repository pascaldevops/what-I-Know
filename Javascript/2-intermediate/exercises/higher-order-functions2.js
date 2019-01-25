// Write a function called countdown that accepts a number as a parameter 
// and every 1000 milliseconds decrements the value and console.logs it. 
// Once the value is 0 it should log "DONE!" and stop.
// 

function countDown(val) {
	var timeId = setInterval(function() {
		--val;
		if (val <= 0) {
			console.log('DONE!');
			clearTimeout(timeId);
		} else {
			console.log(val);
		}
	}, 1000);
}

// countDown(4);

// Write a function called isEven which takes in a number and returns 
// true if the number is even and returns false if it is not
function isEven(val) {
	return val % 2 === 0;
}

console.log(`is 4 an even number? ${isEven(4)}`);

// Write a function called isOdd which takes in a number and returns 
// true if the number is odd and returns false if it is not
function isOdd(val) {
	return val % 2 === 1;
}

console.log(`is 5 an odd number? ${isOdd(5)}`);

// Write a function called isPrime which takes in a number and returns true 
// if the number is a prime number (is greater than 1 and can only be divided 
// in whole by itself and 1), otherwise returns false
function isPrime(val) {
	return (val > 1 && isOdd(val)); 
}

console.log(`is 8 a prime? ${isPrime(8)}`);
console.log(`is 17 a prime? ${isPrime(17)}`);

// Write a function called numberFact which takes in a number and a callback 
// and returns the result of the callback with the number passed to it
function numberFact(val, callback) {
	return callback(val);
}

console.log();
console.log('callback function');
console.log(`is 59 an even number? ${numberFact(59,isEven)}`);
console.log(`is 59 an add number? ${numberFact(59,isOdd)}`);
console.log(`is 59 a prime number? ${numberFact(59,isPrime)}`);

// Write a function called find. It should take in an array and a callback 
// and return the first value found in the array that matches the condition.
function find(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			return arr[i];
		} 
	}
}

console.log(find([8,11,4,27], function(val){return val >= 11}));
console.log(find([8,11,4,27], function(val){return val === 5}));

// Write a function called findIndex. It should take in an array and a callback 
// and return the index of first value found in the array that matches the condition.
function findIndex(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			return i < 0 || i > arr.length ? undefined : i;
		} 
	}
}

console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
console.log(findIndex([8,11,4,27], function(val){return val === 8}));

// Write a function called specialMultiply which accepts two parameters. 
// If the function is passed both parameters, it should return the product of the two. 
// If the function is only passed one parameter - it should return a 
// function which can later be passed another parameter to return the product. 
// You will have to use closure and arguments to solve this.
function specialMultiply() {
	var val;
	if (arguments.length === 2) {
		val = arguments[0] * arguments[1]; 
		return val;
	} else {
		val = arguments[0];
		return function(v) {
			return v * val
		}
	}
}

console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function 