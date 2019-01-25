/**
 * 
 * Write a function called filterLetters which accepts an array of letters 
 * and returns the number of occurrences of a specific letter. 
 * This function should be case insensitive
 * 
 */

function filterLetters(arr, letter) {
  var count = 0;
  var occurrences = arr.filter(function(val, index) {
    return val.toLowerCase() === letter.toLowerCase() ? count++ : count;
  });
  return count;
} 

console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B")); // 1