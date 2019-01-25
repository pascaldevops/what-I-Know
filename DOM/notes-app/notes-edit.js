'use strict';

// The note the user is editing


const noteID = location.hash.substring(1);  // Get the note ID the user is trying to edit
let  notes = getSaveNotes();   // Get all the notes
const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const lastEdited = document.querySelector('#last-edited');

// Making sure the note exist
const note = notes.find((note) => note.id === noteID);

// Redirect the user to the home page if there is no match
if (!note) { location.assign('index.html'); }

noteTitle.value = note.task;
noteBody.value = note.body;
lastEdited.textContent = generateLastEdited(note.updatedAt);

// Save note changes as the user made them
noteTitle.addEventListener('input', (e) => {
    note.task = e.target.value; 
    note.updatedAt = moment().valueOf(); // what happen if the note title did not update
    lastEdited.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

// Enter the note and save it
noteBody.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf(); // what happen if the note body did not update
    lastEdited.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

// Enter the note text
document.querySelector('#done').addEventListener('click', (e) => location.assign('index.html'));

// Remove the note
document.querySelector('#remove-note').addEventListener('click', (e) => {
    const note = removeNote(location.hash.substring(1));
    saveNotes(note);
    location.assign('index.html');
});

// Update all other windows with the updated data
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        console.log(notes);
        // Making sure the note exist
        const note = notes.find(function(note) {
            return note.id === noteID;
        })

        // Redirect the user to the home page if there is no match
        if (!note) { location.assign('index.html'); }

        noteTitle.value = note.task;
        noteBody.value = note.body;
        lastEdited.textContent = generateLastEdited(note.updatedAt);
    }
});
