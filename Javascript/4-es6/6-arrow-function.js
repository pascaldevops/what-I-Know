const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
}
console.log(square(2));


const person = [
    {
        name: 'Pascal',
        age: 23    
    },
    {
        name: 'Jude',
        age: 45
    },
    {
        name: 'Paul',
        age: 22
    }
];

// 1. find the person witgh age 22 and print the person name
const getPerson = person.find((person) =>  person.age === 22);
console.log(getPerson.name);