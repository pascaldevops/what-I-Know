class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setFirstname(firstName) {
    this.firstName = firstName;
  }
  
  setLastname(lastName) {
    this.firstName = lastName;
  }
  
 setAge(age) {
    this.age = age;
  }
  
  fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
  
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;;
  
    this.likes.forEach((like) => {
        console.log(this);
        bio += ` ${this.firstName} likes ${like}.`
    });
  
    return bio;
  }

}

// Create the first person
const person1 = new Person('Pascal', 'Juste', 23, ['programming', 'running']);
console.log(person1.getBio());

// Create the 2nd person
const person2 = new Person('Jude', 'Pierre', 22);
console.log(person2.getBio());
