// Multiple Arguments
let add = function(a, b, c) {
	return a + b + c;
}

let result = add(1, 2, 3);
console.log(result);

// Default arguments
let getNameAndScore = function(name = 'Anonymous', score = 0) {
	return 'Name: ' + name + ' - ' + 'Score: ' + score;
}

let score = getNameAndScore(undefined, 99);
console.log(score);

score = getNameAndScore('Jude', 78);
console.log(score);

// Challenge section
// function(toal, tipPercent=.15)
// total = total * tipPercent
// return total

let getTip = function(total, tipPercent = .15) {
	return total * tipPercent;
}

let amount = getTip(90);
console.log('Tip is: $' + amount);

amount = getTip(40, .25);
console.log('Tip is: $' + amount);