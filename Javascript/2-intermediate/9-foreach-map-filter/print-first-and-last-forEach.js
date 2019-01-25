/**
 * 
 * Write a function called printFirstAndLast which accepts an array 
 * (of objects) and console.logs a new string with the first 
 * character and the last character of each value.
 * 
 */

 function printFirstAndLast(arr) {
   var tempStr = '';
   arr.forEach( (val, index, array) => {
     tempStr += val[0]+val[val.length-1] + ' ';
   });
   return tempStr;
 }

 console.log(printFirstAndLast(['awesome','example','of','forEach']));
  