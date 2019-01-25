/** 
 * Closure is when a function is able to access (local) variables from an outer function 
 * that has already returned.
 * 
 */

function outerfn() { // outer function
	var val = 2;
	return function innerfn() { // an inner function that return a local val variable
		return val;
	}
}


// Thanks to JavaScript's inner workings, a function is able to remember variables 
// defined in functions even if that function has returned.
//
function outer(a) {
	return function inner(b) {
		return a + b;
	}
}

outer(5);		// return the inner function
outer(5)(2);	// execute the inner function //=> 7

var laterAdd = outer(3);	// storing the inner function inside a variable
laterAdd(5);				// calling the inner function /==> 8

// Interesting:
// ===========
// How was the inner function able to remember the parameter "a" defined in the outer function which already returned? The answer is through closure.

/**
 *  Rememeber:
 *  ==========
 *  A closure only exist when an inner function makes use of variable define from an 
 *  outer function that had returned. If the inner function does not make use of any
 *  of the external variables all we have is a nexted function.
 */

// this is a nested function not a closure
function outerfn1() { // outer function
	var val = 2;
	return function innerfn() { // an inner function that return a local val variable
		return "name: pascal";
	}
}