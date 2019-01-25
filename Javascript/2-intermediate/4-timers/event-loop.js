console.log('first');
setTimeout(function() {
	console.log('second');
},0);
console.log('third');

// result ==> first third second
// 
// why?
// Here is what happen:
// 1. console.log('first') function goes unto the stack
// 2. console.log('first') print
// 3. console.log('first') goes off the stack
// 4. a message is sent to the stack to log console.log('second') in 0 millisecod
// 3.9. console.log('third') function goes unto the stack
// 5. console.log('third') print
// 6. console.log('third') goes off the stack
// 7. now the stack is cleared
// 8. the setTimeout goes on the stack
// 9. console.log('second') print
