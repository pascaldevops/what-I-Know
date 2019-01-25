// Usinf template string ${varName or a javascript expression}
// 
let getNameAndScore = function(name = 'Anonymous', score = 0) {
	return `Name: ${name} - Score: ${score}`;
}

let score = getNameAndScore(undefined, 99);
console.log(score);

score = getNameAndScore('Jude', 78);
console.log(score);

// Challenge Area
//
let getTip = function(total, tipPercent = .15) {
	
	let tipAmount = total * tipPercent;
	let percentConvert = tipPercent * 100;
	
	return `A ${percentConvert}% tip on $${total} would be $${tipAmount} `;
}

let amount = getTip(90);
console.log(amount);

amount = getTip(40, .25);
console.log(amount);