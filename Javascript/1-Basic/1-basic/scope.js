// Javascript uses lexical scope
// Global Scope - Defines outside all code blocks
// Local Scaope - defined inside a code block

let varOne = 'varOne'; // global scope

if(true) {
	console.log(varOne);
	let varTwo = 'varTwo'; // local scope
	console.log(varTwo);

	if (true) {
		let varFour = 'varFour'; // new local scope
	}
}

// console.log(varTwo); // can't do that

if (true) {
	let varThree = 'varThree'; // local scope
}


// ************************************************ //