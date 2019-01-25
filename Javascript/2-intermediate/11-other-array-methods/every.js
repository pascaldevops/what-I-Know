/**
 * 
 * Test if all the values in the array are
 * integers
 */

var arr = [1, 2, 3, 4];

var values = arr.every(function(val) {
  return Number.isInteger(val);
});
console.log(values);

/**
 * 
 * Test if all the values in the array are
 * strings
 */

var arr = [1, 2, 3, 4];

var values = arr.every(function(val) {
  return typeof val === 'string';
});
console.log(values);