const colors = ['red', 'blue', 'green'];
const numbers = [1,2,3,4,5,6];
let sum = 0;

/*
  colors.forEach(function(color) {
    console.log(color);
  });
*/

const adder = function(number) {
  sum += number;
} 

// iterate over the array and print the colors
colors.forEach(color => console.log(color));

// ieterate over the array and add the sum 
numbers.forEach(number => sum += number);
console.log(`Sum is ${sum}`);

// Another version
