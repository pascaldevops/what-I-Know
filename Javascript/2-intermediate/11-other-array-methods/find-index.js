/**
 * 
 * Find the index of an item that satisfy certain conditions
 */

var arr = [1, 2, 3, 4];

var values = arr.findIndex(function(val) {
  return val === 4;
});
console.log(values);