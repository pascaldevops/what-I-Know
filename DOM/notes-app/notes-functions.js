'use strict';

// Read existing notes from local storage
const getSaveNotes = () => {
  const noteJSON = localStorage.getItem('notes');

  try {
    return noteJSON ? JSON.parse(noteJSON) : [];
  } catch (error) {
    return [];
  }
}

// Save the notes to local storage
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes));

// Remove a note from the list
const removeNote = function(id) {
  notes.forEach((note, index) => {
    if (note.id === id) {
      notes.splice(index, 1);
    } 
  });
  return notes;
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  const textEL = document.createElement('span');
  const button = document.createElement('button');
  const noteLK = document.createElement('a'); 

  // Add remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);

  button.addEventListener('click', () => {
    saveNotes(removeNote(note.id));
    renderNotes(notes, filters);
  });

  // Setup the note title
  if (note.task.length > 0) {
    textEL.textContent = note.task;
  } else {
    textEL.textContent = "Unamed note";
  }

  // Seting the note link to the editing page
  noteLK.setAttribute('href', `edit.html#${note.id}`);
  noteLK.appendChild(textEL);
  noteEl.appendChild(noteLK);

  return noteEl;
};

// sort your note by one of three type
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => a.updatedAt < b.updatedAt);
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => a.createAt > b.createAt);
  } else if (sortBy === 'alphabetically') {
    return notes.sort((a, b) => a.task.toLowerCase() > b.task.toLowerCase());
  }
}

// Render Application notes
const renderNotes = (notes, filters)  => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) => 
    note.task.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
}

// Generate last time the note was edited 
const generateLastEdited = (timestamp) => `Last edited: ${moment(timestamp).fromNow()}`;
