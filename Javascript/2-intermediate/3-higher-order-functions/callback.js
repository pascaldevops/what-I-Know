// Callback: A function that is passed to a higher oreder function as argument

// function to add two numbers
function add(a, b) {
	return a + b;
}

// function to substract two numbers
function substract(a, b) {
	return a - b;
}

// You can use math to either add or substract two numbers
function math(a, b, callback) {
	return callback(a, b);
}

// Test it
console.log(math(1,2, add));
console.log(math(2,1, substract));

