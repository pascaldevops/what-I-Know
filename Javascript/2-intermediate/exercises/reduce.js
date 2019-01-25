/**
 * 
 * Write a function called extractKey which accepts two parameters, 
 * an array of objects, and the name of a key and returns an array with 
 * just the values for that key
 * 
 */
function extractKey(arr, key) {
  return arr.reduce(function(acc, next, index) {
    acc[index] = next[key];
    return acc;
  }, [])
}

var result = extractKey(
  [ {name: "Elie", isInstructor:true},
    {name: "Tim", isInstructor:true},
    {name: "Matt", isInstructor:true}
  ], "name");
console.log(result); //=> ["Elie", "Tim", "Matt"]

/**
 * 
 * Write a function called filterLetters which accepts an array of 
 * letters and returns the number of occurrences of a specific letter. 
 * 
 */

 function filterLetters(arr, key) {
   var count = 0;
   arr.reduce(function(acc, next) {
    if(next.toLowerCase() === key.toLowerCase()) {
      count++;
    }
   }, 0);
   return count;
 }
 var result;
result = filterLetters(["a","a","b","c","A"], "a"); // 3
console.log(result);

result = filterLetters(["a","a","b","c","A"], "z"); // 0
console.log(result);

result = filterLetters(["a","a","b","c","A"], "B"); // 1
console.log(result);

/**
 * 
 * Write a function called addKeyAndValue which accepts three parameters, 
 * an array (of objects), a key and a value. This function should return 
 * the array of objects after each key and value has been added. You can do 
 * this a few ways, either by reducing starting with an empty array and 
 * making copies of the object or by starting with the actual array!
 * 
 */

 // version 1
 function addKeyAndValue(arr, key, value) {
  return arr.reduce(function(acc, next, index) {
    next[key] = value;
    acc[index] = next;
    return acc;  
  }, []);
 }

 // version 2
 function addKeyAndValue2(arr, key, value) {
  return arr.map(function(acc, index) {
   acc[key] = value;
   return acc; 
  });
 }

var result; 
result = addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);
console.log(result);

result = addKeyAndValue2([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);
console.log(result);