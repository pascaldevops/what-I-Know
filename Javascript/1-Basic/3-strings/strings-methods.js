let name = ' Pascal Laurent ';

// Length Property
console.log(name.length);

// Convert to upper case
let newName = name.toUpperCase();
console.log(newName);

// Convert to lower case
newName = name.toLowerCase();
console.log(newName);

// Include method
let password = '122fghgpassword000ff';
isThere = password.includes('password');
console.log(isThere);

// Trim method
console.log(newName.trim());

// Challenge area
// length is more than 8 - and it does not contain the word password
// 
let isValidPassword = function(password) {
	return ((password.length > 8) && (!password.includes('password')));
}

console.log(isValidPassword('asdft'));
console.log(isValidPassword('asdft12390867rfd#$'));
console.log(isValidPassword('asdft12390password867rfd#$'));