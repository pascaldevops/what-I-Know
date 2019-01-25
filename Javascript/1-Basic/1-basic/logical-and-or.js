// Logical and operator
// Logical or operator

let temp = 65;

if  (temp >= 60 && temp <= 90) {
	console.log('It is pretty nice outside');
} else if (temp <= 0 || temp >= 120) {
	console.log('Do not go outside');
} else {
	console.log('Eh. Do what you want');
}

// Challenge area

let isGuessOneVegan = false;
let isGuestTwoVegan = false;

// Are both vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan dishes
// Else, offer up anything on the menu

if (isGuessOneVegan && isGuestTwoVegan) {
	console.log('Only offer vegan dishes');
} else if (isGuessOneVegan || isGuestTwoVegan) {
	console.log('Offer some vegan options');
} else {
	console.log('Offer anything on the menu');
}

