/**
 * 
 * Write a function called addKeyAndValue which accepts three parameters, 
 * an array (of objects), a key and a value. This function should return 
 * the array of objects after each key and value have been added 
 * to each object in the array.
 * 
 */

 function addKeyAndValue(arr, key, value) {
   arr.forEach(val => {
     val[key] = value;
   });
   return arr;
 }
 console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true) );