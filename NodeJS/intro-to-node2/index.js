//jshint esversion: 6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

const mySuperheroName = superheroes.random();
const mySupervillainName = supervillains.random();

console.log(`Superhero Name: ${mySuperheroName} \nSupervillain Name: ${mySupervillainName}`);
