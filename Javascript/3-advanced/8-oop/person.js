// constructor function
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
};

// Adding prototype to the constructor.. a form of inheritance
Person.prototype.setName = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.setFirstname = function(firstName) {
    this.firstName = firstName;
};

Person.prototype.setLastname = function(lastName) {
    this.firstName = lastName;
};

Person.prototype.setAge = function(age) {
    this.age = age;
};

Person.prototype.fullName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
};

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}`;;

    this.likes.forEach((like) => {
        console.log(this);
        bio += ` ${this.firstName} likes ${like}.`
    });

    return bio;
};

// Create the first person
const person1 = new Person('Pascal', 'Juste', 23, ['programming', 'running']);
console.log(person1.getBio());

// Create the 2nd person
const person2 = new Person('Jude', 'Pierre', 22);
console.log(person2.getBio());

//