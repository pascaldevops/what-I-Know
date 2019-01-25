/**
 * 
 * 
 * 
 */

 var arr = [1,2,3,4,5]
 var oddNumber = arr.filter(function(val){
     return val % 2 !== 0; // only keep odd numbers
 });

console.log(oddNumber);
 
var doubleOddNumber = oddNumber.map(function(val){
  return val * 2; // double remaining values
});
console.log(doubleOddNumber);

var addAllNumber = doubleOddNumber.reduce(function(acc,next){
  return acc + next; // add everything up
},0) // 18
console.log(addAllNumber);

// Now look at this one
var arr2 = [1,2,3,4,5]
var result = arr2.filter(function(val){
  return val % 2 !== 0; // only keep odd numbers
})
.map(function(val){
  return val * 2; // double remaining values
})
.reduce(function(acc,next){
  return acc + next; // add everything up
},0); // 18

console.log(result);