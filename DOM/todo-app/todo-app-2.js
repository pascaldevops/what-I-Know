'use strict';

const todos = [
  {
    task: 'Do the Laundry',
    completed: true
  },

  {
    task: 'Walk the dog',
    completed: false
  },

  {
    task: 'Buy food',
    completed: false
  },

  {
    task: 'Do the lawn',
    completed: false
  }
];

// The Challenge
// 1. Setup a div contain todos
// 2. Setup filter (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and re-render the latest filtered data
const searchText = document.querySelector('#search-text');

// My filter todos
const filters = {
  searchText: ''
};

// Get of all the todos not yet completed
const incompleteTodos = (todos) => todos.filter((todo) => !todo.completed);

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => 
    todo.task.toLowerCase().includes(filters.searchText.toLowerCase()));

  document.querySelector('#todos').innerHTML = '';

  filteredTodos.forEach((todo) => {
    const newElement = document.createElement('p');
    newElement.textContent = todo.task;
    document.querySelector('#todos').appendChild(newElement);
  });
};

// We want the new element to be inserted after h1
const newElement = document.createElement('h2');
newElement.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('#search-text').insertAdjacentElement('beforebegin', newElement);

// We want the new element to be inserted before the button
todos.forEach((todo) => {
  const newElement = document.createElement('p');
  newElement.textContent = todo.task;
  document.querySelector('#todos').appendChild(newElement);
});

// Text users enter in the search todo input filed
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
});


searchText.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters)
});
