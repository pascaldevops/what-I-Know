/* 
  An array is declared as const s = [5, 7, 2]. 
  Change the array to [2, 5, 7] using various element assignment.
*/

const s = [5, 7, 2];

function editInPlace() {
  "use strict";
  // change code below this line
  // 0, s.length => remove these elements
  // then add 2, 5, 7 in its place
  s.splice(0, s.length, 2, 5, 7);
  console.log(s);
  // change code above this line
}
editInPlace();