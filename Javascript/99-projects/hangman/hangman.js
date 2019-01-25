/**
 * This is the hangman game using object oriented programming (oop)
 */

'use strict';

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessLetters = [];
        this.status = 'playing';
    }

    get puzzle() {
        let wordPuzzle = '';
    
        this.word.forEach(letter => {
            wordPuzzle = this.guessLetters.includes(letter) || letter === ' ' ? wordPuzzle += letter : wordPuzzle += '*'
        });
    
        return wordPuzzle;
    }

    makeAGuess(guessChar) {
        guessChar = guessChar.toLowerCase();
        const isUnique = !this.guessLetters.includes(guessChar);
        const isNotThere = !this.word.includes(guessChar);
    
        // guess must be unique
        if (isUnique) { // make sure guess is unique
            this.guessLetters.push(guessChar);
        } 
    
        if ( isUnique && isNotThere) { // is guess letter not in word
            this.remainingGuesses--;
        } else {
            this.guessLetters.push(guessChar);
        }
    }

    recalculate() {
        console.log(`recalculate: ${this.guessLetters.length} and ${this.word.length}`);
        console.log(this.guessLetters);
        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } if (this.guessLetters.length === this.word.length) {
            this.status = 'finished';
        }
    }

    get gameStatus()  {
        if (this.status === 'failed') {
            return `Failed  -> Nice Try! the word was "${this.word.join('').toString()}".`;
        } else if (this.status === 'finished') {
            return `Finished -> Great work! you guessed the work.`
        }
    }

}