// Function has three parts:
// - input
// - code
// - output

let greetUser = function() {
	console.log('Welcome user');
};

greetUser();

let square = function(num) {
	let result = num * num;
	return result;
}

let value = square(3);
console.log(value);

value = square(10);
console.log(value);

// Challenge 
// 
// Create a function call convertFarenheitToCelsius
// Call the function a couple times (32 -> 0) (68 -> 20)
// Print the converted value
// 

// let fahrenheit = 32;
// let celsius = (fahrenheit - 32) * 1.8; // calculate celsius
// let kelvin = (fahrenheit + 459.67) * (5/9); // calculate kelvin

let convertFarenheitToCelsius = function(fahrenheit) {
	let celsius = (fahrenheit - 32) * 5/9; // calculate celsius
	return celsius;
}

let celsius = convertFarenheitToCelsius(68);
console.log(celsius + 'C');

celsius = convertFarenheitToCelsius(32);
console.log(celsius + 'C');

//console.log(kelvin + 'K');
