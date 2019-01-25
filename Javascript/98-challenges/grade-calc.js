// Create a grade calculator function
// The function takes two arguments:
// 	- student score
// 	- total possible score
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
// 15/20 -> You got a C (75%)!
// 

let gradeCalc = function(studentScore, possibleScore) {

	if (typeof studentScore !== 'number' || typeof possibleScore !== 'number') {
		throw Error('You have entered an invalid number for student or possible score');
	}

	let gradePercent  = studentScore / possibleScore * 100;
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

	return `You got a ${letterGrade} (${gradePercent}%)`;
}

try {
	let result = gradeCalc(15, 20);
	console.log(result);

	result = gradeCalc(15, 100);
	console.log(result);

	result = gradeCalc(80, 'Pascal');
	console.log(result);

	result = gradeCalc(90, 100);
	console.log(result);

	result = gradeCalc(63, 100);
	console.log(result);
} catch (e) {
	console.log(e.message);
}
