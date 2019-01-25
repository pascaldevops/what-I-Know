/**
	Remember, when adding keys to an object, 
	if you do NOT know exactly what the name of the key will be 
	(meaning the key will be dynamically created), you have to use the bracket notation. 
*/

var programmingLanguages = {
	java: {
		yearCreated: 1995,
		creator: 'James Gosling'
	},

	javascript: {
		yearCreated: 1995,
		creator: 'Brendan Eich'
	},

	pascal: {
		yearCreated: 1970,
		creator: 'Niklaus Wirth'
	}
};

// Function to insert new object into the programmingLanguages
function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage) {
	programmingLanguages[nameOfLanguage] = {
		yearCreated: yearLanguageCreated,
		creator: creatorOfLanguage
	};
}

// Adding language
addProgrammingLanguage('ruby', 1995, 'Yukihiro Matsumoto');
console.log(programmingLanguages);