// Define an object 

let myBook = {
	title: '1984',
	author: 'George Orwell',
	pageCount: 326
};

// Read object properties
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge

let myPerson = {
	name: 'Pascal',
	age: 27,
	location: 'Brooklyn'
};

console.log(`${myPerson.name} is ${myPerson.age} and live in ${myPerson.location}`);