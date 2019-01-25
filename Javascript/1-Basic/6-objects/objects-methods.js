let restaurant = {
	// properties
	name: 'ASB',
	guestCapacity: 75,
	guestCount: 0,

	// methods
	checkAvailability: function(partySize) {
		let seatLeft = this.guestCapacity - this.guestCount;
		return partySize <= seatLeft;
	},

	setParty: function(partySize) {
		this.guestCount += partySize;
	},

	removeParty: function(partySize) {
		this.guestCount -= partySize;
	}
};

// let status = restaurant.checkAvailability(4);
// console.log(status);

// Challenge area
restaurant.setParty(72);
console.log(restaurant.checkAvailability(4));

restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
