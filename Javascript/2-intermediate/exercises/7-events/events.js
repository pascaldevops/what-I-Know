/** 
 * Part 1
 * 
	Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

	Replace the text "Change me" with "Hello World!".

	When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

	Create a new div element.

	Give your new div a class of purple and style it so that it has a background color of purple.

	Append your new div to the page to the section tag.
 */

// Create a new div element
var div = document.createElement('div');

// Give your new div a class of purple 
div.classList.add('purple');

// style the div so that it has a background color of purple.
div.style.backgroundColor = 'purple';

// Append your new div to the page to the section tag
var section = document.querySelector('section');
section.appendChild(div);


// When a user hovers over one of the colored boxes change 
// the text to display the color that is being hovered over.
var coloredBox = document.getElementsByTagName('div');
var selectedColorText = document.querySelector('.selected');

for (var i = 0; i < coloredBox.length; i++) {
	coloredBox[i].addEventListener('mouseover', function(e) {
		console.log(e);
		if(e.target.className === 'green') {
			selectedColorText.innerText = 'Green';
		} else if (e.target.className === 'blue') {
			selectedColorText.innerText = 'Blue';
		} else if(e.target.className === 'yellow') {
			selectedColorText.innerText = 'Yellow';
		} else if (e.target.className === 'brown') {
			selectedColorText.innerText = 'Brown';
		} if (e.target.className === 'purple') {
			selectedColorText.innerText = 'Purple';
		}
	});
}

/**
 * Part 2
 * 
	Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"
 * 
 */

function placeDiv(x_pos, y_pos) {
  var d = document.querySelector('.car1');
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}

var button = document.querySelector('button');
button.addEventListener('click', function(e) {
	placeDiv(34, 45);
});

/** 
 * Part 3
 * 
	For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

	As a user, you should be able to:

	Add a new todo (by submitting a form)
	Mark a todo as completed (cross out the text of the todo)
	Remove a todo
 */


/**
 * Part 4:
 * 
	Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete!
 */