// Adding an event listener (3ways)

// Option1: the event is inserted in the HTML page like so:
// <button class="first_button" onclick="firstClick()">Click me first!</button>
//  The preferred way is option 2 and 3. They are customizable.
//  
// function firstClick() {
// 	console.log('you click the first button');
// }

// // Option2: select an element and attach the function to it
// var secondButton = document.querySelector('.second_button');
// secondButton.onclick = function() {
// 	console.log('You click the second button');
// };

// Option3: use and event listener
var thirdButton = document.querySelector('.third_button');
thirdButton.addEventListener('click', function() {
	console.log('You click on the third button');
});

// Add an event listener - to all the buttons on the page

// 1. select the buttons
var buttons = document.getElementsByTagName('button'); //=> HTMLCollection

// 2. iterate over each button and add listener
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(e) {
		console.log(`You click on the ${e.target.className}`);

		e.preventDefault();
	});
} 

// Removing and event listener
// ---------------------------
//  In order to successfully remove an event listener, 
//  the callback that we pass in can't be an anonymous function. 
//  
function alertData() {
	console.log('Click Me has been clicked!!!');
}
var clickMe = document.querySelector('p');

clickMe.addEventListener('click', alertData);

clickMe.removeEventListener('click', alertData);

// Adding event listeners to parent elements
// In order to alert the text of whatever element we looked for, 
// we can either listen on the parent or listen on each child.

// Option 1: Listening on the parent
var ul = document.querySelector('ul');


ul.addEventListener('click', function(event) {
	console.log(`You just clicked on ${event.target.innerText}`);
});

// Option 2: Listening on the elements (the children of ul)
var listItems = document.querySelectorAll('li');

for (var i = 0; i <  listItems.length; i++) {
	listItems[i].addEventListener('click', function(event) {
		console.log(`You just clicked on ${event.target.innerText}`);
	});
}