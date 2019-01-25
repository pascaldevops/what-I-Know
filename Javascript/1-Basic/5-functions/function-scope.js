// Function creates scope too
// Global scope includes:
// 	- convertFarenheitToCelsius
// 	- celsius
// 	
// 	Local Scope include
// 		- cesius that is locl to the function
// 		
let convertFarenheitToCelsius = function(fahrenheit) {
	let celsius = (fahrenheit - 32) * 5/9; // celsius has local scope

	if (celsius <= 0) {
		let isFreezing = true; // local to the if block
	}

	return celsius;
}

let celsius = convertFarenheitToCelsius(68);
console.log(celsius + 'C');

celsius = convertFarenheitToCelsius(32);
console.log(celsius + 'C');