// A nested data structure is one data structure inside of another
var schools = {
	georgiaInstitudeOfTechnology: {
		address: 'North Ave NW, Atalanta, GA 30332',
		phoneNumber: '(404) 894-2000',
		dateEstablished: 'October 13, 1885'
	}
};

// This statement assigns the object that is nested inside
// of the larger schools object to the gtObject variable.
var getObject = schools.georgiaInstitudeOfTechnology;
console.log(getObject.address);
console.log(getObject.phoneNumber);
console.log(getObject.dateEstablished);