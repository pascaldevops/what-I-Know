/**
 * 
 * Write a function called extractKey which accepts two parameters, 
 * an array of objects, and the name of a key and returns an array 
 * with just the values for that key:
 * 
 */

 function extractKey(arr, name) {
   return arr.map(function(val) {
     return val[name];
   })
 }
 console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));
