'use strict';

// const notes = [];
let  notes = getSaveNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

// save the notes to local storage
document.querySelector('#create-note').addEventListener('click', (e) => {
  const noteID = uuidv4();
  const timestamp = moment().valueOf();

  notes.push(
    {
      id: noteID,
      task: '',
      body: '',
      createAt: timestamp,
      updatedAt: timestamp
    },
    
  );

  saveNotes(notes);
  // renderNotes(notes, filters);
  
  // redirect the user to the note
  location.assign(`edit.html#${noteID}`);

});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
});

// Sort the notes 
document.querySelector('#filter-by').addEventListener('input', (e) => {
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
});

// Update all other windows with the updated data
window.addEventListener('storage', (e) => {
  if (e.key == 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});


// // moment.js (manipulate date)
// const now = moment();
// now.add(1, 'year').subtract(20, 'days')
// now.format("MMMM Do YYYY");
// console.log(now.format("MMMM Do YYYY"));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).toString());

// const bday = moment();
// console.log(bday.get('month').('day').year().toString());
// bday.set({'month': 10, 'day': 18, 'year': 2013});
// console.log(bday.format('MMM D, YYYY'));

