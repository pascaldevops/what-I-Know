'use strict';

// Fetch existing code from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (error) {
    return [];
  }
  
};

// Save todos to local storage
const savedTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// To toggle todo between completed and not completed
const toggleToto = function(id, checkedStatus) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos[todoIndex].completed = checkedStatus;
  }
};

// Render the todos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  document.querySelector('#todos').innerHTML = ''

  generateSummaryDOM(incompleteTodos(filteredTodos));

  filteredTodos.forEach((todo) => 
    document.querySelector('#todos').appendChild(generateTodoDOM(todo)));

}

// Hide the completed task
const hideCompleted = function (todos) {

  document.querySelector('#todos').innerHTML = '';

  incompleteTodos(todos).forEach((todo) => 
    document.querySelector('#todos').appendChild(generateTodoDOM(todo)));
}

// Get the imcomplete todos
const incompleteTodos = function (filteredTodos) {
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
  return incompleteTodos;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const taskEL = document.createElement('span');
  const button = document.createElement('button');
  const checkbox = document.createElement('input');

  // Setup the todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);

  checkbox.addEventListener('change', (e) => {
    toggleToto(todo.id, e.target.checked);
    savedTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup todo text
  taskEL.textContent = todo.task
  todoEl.appendChild(taskEL);

  // setup the remove task button
  button.textContent = 'x';
  todoEl.appendChild(button);

  // Click event to remove todo
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    savedTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
}


