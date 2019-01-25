/**
 * This is the hangman game using object oriented programming (oop)
 */

'use strict';

// constructor
const Hangman = function(word, remainingGuesses) {
    this.word = word;
    this.guesses = remainingGuesses;
};

// first hangman
const hangman1 = new Hangman('love', 3);
console.log(hangman1);

const hangman2 = new Hangman('javascript', 5);
console.log(hangman2);