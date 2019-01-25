'use strict';

// first hangman
const player1 = new Hangman('New Jersey', 4);
const showRemainingGuesses = document.querySelector('#showRemainingGuesses');
const showPuzzle = document.querySelector('#showPuzzle');
const statusEl = document.querySelector('#status');

showPuzzle.textContent = player1.puzzle;
showRemainingGuesses.textContent = player1.remainingGuesses

window.addEventListener('keypress', (e) => {
    const guessChar = String.fromCharCode(e.charCode);

    player1.makeAGuess(guessChar);
    showPuzzle.textContent = player1.puzzle;
    showRemainingGuesses.textContent = player1.remainingGuesses
    player1.recalculate();
    if (player1.status === 'finished' || player1.status === 'failed') {
        statusEl.textContent   = player1.gameStatus
    } else {
        statusEl.textContent = player1.status;
    }
});

getPuzzle((error, puzzle) => {
    console.log(puzzle);
})

// player1.makeAGuess('c');
// player1.makeAGuess('t');
// player1.makeAGuess('z');
// console.log(player1.getPuzzle());
// console.log(`Remaining guesses: ${player1.remainingGuesses}`);

// const player2 = new Hangman('New Jersey', 4);
// player2.makeAGuess('p');

// console.log(player2.getPuzzle());
// console.log(`Remaining guesses: ${player2.remainingGuesses}`);

// const hangman2 = new Hangman('Javascript', 5);
// console.log(hangman2.getPuzzle());