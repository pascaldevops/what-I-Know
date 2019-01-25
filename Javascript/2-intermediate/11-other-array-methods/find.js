/**
 * 
 * Find the first value in the array that is
 * equal to 4 and returns that value.
 */

var arr = [1, 2, 3, 4];

var values = arr.find(function(val) {
  return val === 4;
});
console.log(values);