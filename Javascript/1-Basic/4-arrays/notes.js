const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes);

// Note length
console.log(notes.length);

// Insert at the end of the array
notes.push('Note 4');
console.log(notes);

// Removing an item at the end of the array
notes.pop();
console.log(notes);

// Remove first item from the array
notes.shift();
console.log(notes);

// Adding an item in front of the array
notes.unshift('Note 5');
console.log(notes);

// Splice: remove the 2nd item in the array
notes.splice(1, 1); //=> [ 'Note 5', 'Note 3' ]
console.log(notes);

// Splice: At index one add Note 6 
notes.splice(1, 0, 'Note 6');
console.log(notes);

// Splice: At index 2 replace Note 3 with Note 7
notes.splice(2, 2, 'Note 7');
console.log(notes);

// Create a notes of objects
notes2 = [
	{
		title: 'My next trip',
		body: 'I am going to Kenya'
	},

	{
		title: 'Habits to work on.',
		body: 'Exercise Regularly'
	},
	{
		title: 'Office modification',
		body: 'Buy new furniture'
	}

];

// Look for title and returns the index where it is found
const findNote = function(notes, notesTitle) {
	return notes.findIndex(function(note, index) {
		return note.title.toLocaleLowerCase() === notesTitle.toLocaleLowerCase();
	});
};


const findNotes = function(notes, query) {
	// filter returns a new array with the filtered data
	return notes.filter(function(note) {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
		const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
		return isTitleMatch || isBodyMatch;
	});
};

// console.log(findNote(notes, 'Note 3'));
console.log(findNotes(notes2, 'My next trip'));

// Sorting in javascript
const sortNotes = function(notes) {
	notes.sort(function(a, b) {
		if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1; // a comes first
		} else if (b.title.toLowerCase() < a.title.toLowerCase()) {
			return 1; // b comes first
		} else {
			return 0; // a and b are equal
		}
	});
};
console.log('\n');
sortNotes(notes2);
console.log(notes2);