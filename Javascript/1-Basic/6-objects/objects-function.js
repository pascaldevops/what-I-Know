let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

let otherBook = {
	title: 'A Peoples History',
	author: 'Howard Zim',
	pageCount: 723
};

let getSummary = function(book) {
	return {
		summary: `${book.title} by ${book.author}`,
		pageCount: `${book.title} is ${book.pageCount} pages long`
	}
}

let bookSummary = getSummary(myBook);
console.log(bookSummary.summary);
console.log(bookSummary.pageCount);

bookSummary = getSummary(otherBook);
console.log(bookSummary.summary);
console.log(bookSummary.pageCount);

// Challenge area
let getFarenheit = function(fahrenheit) {
	return {
		fahrenheit: fahrenheit,
		celsius: (fahrenheit - 32) * 5/9,
		kelvin: (fahrenheit + 459.67) * (5/9)
	};
};

let fahrenheit = getFarenheit(74);
console.log(fahrenheit);

fahrenheit = getFarenheit(74);
console.log(fahrenheit.fahrenheit);
console.log(fahrenheit.celsius);
console.log(fahrenheit.kelvin);
