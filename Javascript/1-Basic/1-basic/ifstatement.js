let temp = 31;
let isFreezing = temp === 31;

if (isFreezing) {
	console.log('It is freezing outside');
} 

// *********************************************** //

let isAccountLocked = true;
let userRole = 'admin';

if (isAccountLocked) {
	console.log('Is account locked');
} else if (userRole === 'admin') {
	console.log('Welcome Admin!');
} else {
	console.log('Welcome!');
}

