// Using getters and setters
//
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  set firstname(value) {
    this.firstName = value;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName (value) {
    this.lastName = value;
  }

  get lastname() {
    return this.lastName
  }
  
 set age(vale) {
    this.age = value;
  }
  
  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
  
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;
  
    this.likes.forEach((like) => {
        console.log(this);
        bio += ` ${this.firstName} likes ${like}.`
    });
  
    return bio;
  }

}