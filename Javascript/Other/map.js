/*
 - map returns a new array and does not change the original array
 - Syntax:
 new Map([iterable])
*/

const numbers = [1,2,3,4];
let doubleNumbers = [];

const cars = [
  {model: 'Buick', price: 'Cheap'},
  {model: 'Camaro', price: 'Expensive'}
];

for (let index = 0; index < numbers.length; index++) {
  doubleNumbers.push(numbers[index] * 2);
}
console.log(doubleNumbers);

// Using ES6 and arrow function
doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// More exercises
const prices = cars.map(car => car.price);
console.log(prices);


// Exercises
// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

const valTimesIndex = function(numbers) {
  return numbers.map((number, index) => number * index);
} 

let result = valTimesIndex([1,2,3]) // [0,2,6]
console.log(result);

result = valTimesIndex([5,10,15]) // [0,10,30]
console.log(result);

// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
const extractKey = function(names, key) { names.map(name => name[`${key}`]) }; 
const arrKey = extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
console.log(arrKey); // ["Elie", "Tim", "Matt"]



