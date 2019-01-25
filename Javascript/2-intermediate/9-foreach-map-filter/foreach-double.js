// Write a function called double which accepts an array. 
// The function should return a new array with all of the values doubled.

function double(arr) {
  var doubleArr = [];
  arr.forEach(val => {
    doubleArr.push(val*2);
  });

  return doubleArr;
}

console.log(double([1,2,3,4,5]));
