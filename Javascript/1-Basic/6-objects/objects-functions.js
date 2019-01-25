let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

let getSummary = function(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		paCountSummary: `${book.title} is ${book.pageCount} pages long.`
	}
}

let summary = getSummary(myBook);
console.log(summary);

// Challenge

let getFahrenheit = function(fahren) {
	
	return {
		fahrenheit: fahren,
		celsius: (fahren - 32) * 5/9,
			kelvin: (fahren + 459.67) * (5/9)
	};
};

console.log(getFahrenheit(74));