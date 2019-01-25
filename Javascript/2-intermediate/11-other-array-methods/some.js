/**
 * 
 * Test if any value in the array is
 * an integer
 */

var arr = [1, 2, 3, 4];

var values = arr.some(function(val) {
  return Number.isInteger(val);
});
console.log(values);

/**
 * 
 * Test if any value in the array is
 * a string
 */

var arr = [1, 2, 3, 4];

var values = arr.some(function(val) {
  return typeof val === 'string';
});
console.log(values);