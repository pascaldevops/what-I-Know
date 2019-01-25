// sendMessage is a higher order function as it accepts a parameter called fn.
// How do we know fn is a function? We can see the fn parameter is being
// invoked with ()
function sendMessage(message, fn) {
	return fn(message);
}

sendMessage('Hello World', console.log);

// Using anonymous function
sendMessage('Bonjour Pascal', function(message) {
	console.log(message);
})
