// Write a function called double which accepts an array. 
// The function should return a new array with all of the values doubled.

function double(arr) {
  return arr.map(val => {
    return val*2;
  });
}

console.log(double([1,2,3,4,5]));