const isRaining = true;

const person = {
	age: 27
}

person.age = 78;
// person = {} // not valid
// 

// Challenge area

const gradeCalc = function(studentScore, possibleScore) {

	const gradePercent  = studentScore / possibleScore * 100;
	let letterGrade = ''

	if (gradePercent >= 90) {
		letterGrade = 'A';
	} else if (gradePercent >= 80) {
		letterGrade = 'B';
	} else if (gradePercent >= 70) {
		letterGrade = 'C';
	} else if (gradePercent >= 60) {
		letterGrade = 'D';
	} else {
		letterGrade = 'F';
	}

	return `You got a ${letterGrade} (${gradePercent}%)`
}

let result = gradeCalc(15, 20);
console.log(result);

result = gradeCalc(15, 100);
console.log(result);

result = gradeCalc(80, 100);
console.log(result);

result = gradeCalc(90, 100);
console.log(result);

result = gradeCalc(63, 100);
console.log(result);