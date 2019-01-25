/**
 * 
 * Write a function called filterKey which accepts two parameters, 
 * an array of objects, and the name of a key and returns an array 
 * with only those objects which have truthy values for that key:
 * 
 */
function filterKey(arr, key) {
  return arr.filter(function(val) {
    return val[key];
  });
}

var result = filterKey(
[
  {name: "Elie", isInstructor:true, isHilarious: false},
  {name: "Tim", isInstructor:true, isHilarious: true},
  {name: "Matt", isInstructor:true}
], "isHilarious"); // [{name: "Tim", isInstructor:true, isHilarious:true}]

console.log(result);