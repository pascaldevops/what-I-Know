/**
 * 
 * Write a function called valTimesIndex which accepts an array of 
 * numbers and returns a new array with each 
 * value multiplied by the index it is at in the array:
 * 
 */

 function valTimesIndex(arr) {
   return arr.map(function(val, index) {
     return val * index;
   })
 }
 console.log(valTimesIndex([1,2,3])); // [0,2,6]
 console.log(valTimesIndex([5,10,15])); // [0,10,30]);