// Using getters and setters
//
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
  
  get yourName() {
    return this.lastName;
  }

  set yourName(value) {
    this.lastName = value;
  }

  getlastname() {
    return this.lastName
  }

  setlastName (value) {
    this.lastName = value;
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
    let bio = `${this.firstName} is ${this.age}`;
  
    this.likes.forEach((like) => {
        console.log(this);
        bio += ` ${this.firstName} likes ${like}.`
    });
  
    return bio;
  }

}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {  
    return `${this.firstName} is a ${this.position}`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {

  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }

  trackGrade() {

    let letterGrade = '';
  
    if (this.grade >= 90) {
      letterGrade = 'A';
    } else if (this.grade >= 80) {
      letterGrade = 'B';
    } else if (this.grade >= 70) {
      letterGrade = 'C';
    } else if (this.grade >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }
  
    return letterGrade;
  }
  
  getBio() { 
    return (
      this.grade >= 70 ? `${this.firstName} is passing the class` :  
      `${this.firstName} is failing the class`
    );
  }

  updateGrade(grade) {
    this.grade += grade;
  }
}

const student1 = new Student('Pascal', 'Juste', 22, 70);
student1.yourName = 'Laurent';
console.log(student1.yourName);
console.log(student1.getBio());
student1.updateGrade(-9);
console.log(student1.getGrade());
console.log(student1.trackGrade());