/**
 * An instructor object
 */

 // Array within an object
var instructorData = {
    name: "Tim",
    favoriteHobbies: ["Sailing", "Hiking", "Coding"]
};

// adding and accessing the object array element
console.log(instructorData.favoriteHobbies[0]); 
instructorData.favoriteHobbies.push('RC Airplane');
console.log(instructorData.favoriteHobbies[instructorData.favoriteHobbies.length - 1]); 
