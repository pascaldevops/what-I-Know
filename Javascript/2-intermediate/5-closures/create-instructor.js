
function createInstructor() {
	var instructors = ['Pascal', 'Jude', 'Mamie'];
	return { // has closure on the createInstructor scope 
		showInstructors: function displayAllInstructor() {
			return instructors;
		},
		addInstructor: function addNewInstructor(instructor) {
			instructors.push(instructor);
			return instructors;
		}
	}
}

var firstClass = createInstructor();
console.log(firstClass.showInstructors());
firstClass.addInstructor('Baby');
console.log(firstClass.showInstructors());

var secondClass = createInstructor();
console.log(secondClass.addInstructor("Ashley"));

var instructors = createInstructor().showInstructors();
console.log(instructors);

