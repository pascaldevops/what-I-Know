// Here you have you a variable, age, that is private
// 
function defineAge() {
	var age = 28;
	return function growUp() {
		return ++age;
	}
}


/** 
 * So who can access our age variable? 
 * ===================================
 * Only the defineAge function, 
 * which has returned, and the growUp function, which, through the use of closure, 
 * has access to the age variable. Amazingly, this is true even though the 
 * outer function defineAge has already returned. 
 * Our age variable is now protected and no one can gain access to it! 
 * In cases like this, we say that growUp (the inner function) 
 * has closure over the scope of defineAge.
 */
var ageOnce = defineAge();
ageOnce();	//=> 29
ageOnce();	//=> 30
ageOnce();	//=> 31

