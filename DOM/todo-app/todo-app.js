'use strict';
 
 const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: ''
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// Process new todos
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();

  if (e.target.elements.todoText.value) {
    // Save todos to array
    todos.push({
      id: uuidv4(),
      task: e.target.elements.todoText.value,
      completed: false
    });
    // save todos to local storage
    savedTodos(todos);
    // renders todos to the page
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';
  }
  
})

document.querySelector('#hideCompletedTodo').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});