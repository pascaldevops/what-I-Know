// undefined for variables
// 
let name = 'Pascal';
console.log(name); //=> Pascal

let name1;
console.log(name1); //=> undefined

let name2 = 'Jude';

if (name2 === undefined) {
	console.log('Please provide a name');
} else {
	console.log(name2);
}

// undefined for function
// 
let square = function(num) {
	console.log(num); //=> undefined
}

let result = square();
console.log(result);	//=> undefined

// Null as assigned value
let age = 27;

age = null;

console.log(age);