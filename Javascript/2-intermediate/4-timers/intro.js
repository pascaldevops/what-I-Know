// print hello after one second
setTimeout(function() {
	console.log('Hello');
}, 1000);

// timerid is a special that setTimer returned
var timerId = setTimeout(function() {
	console.dir('Hello');
}, 1000);

// use the timerId to clear the timer before it execute
clearTimeout(timerId);

/** --------------------------------------------------- */

// execute the code every 5 seconds
timerId = setInterval(function() {
	console.dir('Hi!');
}, 5000);

setTimeout(function() {
	console.log(timerId);
}, 3000);