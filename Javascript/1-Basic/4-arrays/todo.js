// const todos = [
// 	'Do the Laundry',
// 	'Do the grocery',
// 	'Walk the dog',
// 	'Sturdy JavaScript',
// 	'Prepare the AWS Architect exam'
// ];

// // Manipulate the array
// todos.splice(2, 1);
// todos.push('buy food');
// todos.shift();

// console.log(`You have ${todos.length} todos!`);

// todos.forEach(function(todo, index) {
// 	const num = index + 1;
// 	console.log(`${num}. ${todo}`);
// })

// for (let i =  0, length = todos.length - 1; i <= length; i++) {
// 	console.log(`${i + 1}. ${todos[i]}`);
// }

// Challenge area
// 1. convert the todo array to an array of objects -> text, completed
// 2. Create a function to remove a todo by text value

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
		completed: true
	},

	{
		task: 'Do the lawn',
		completed: false
	}
];

let deleteTodo = function(todos, task) {
	// get the index of the task on the array
	const index = todos.findIndex(function(todo) {
		return todo.task.toLowerCase() === task.toLowerCase();
	});

	// remove the task if it is there
	if (index > -1) todos.splice(index, 1);
}

deleteTodo(todos, 'buy foods');
console.log(todos);

// Challenge area
// write a function that shows the todos not yet completed

const getThingsTodo = function(todos) {
	return todos.filter(function(todo) {
		return !todo.completed;
	});
};

console.log(getThingsTodo(todos, false))

// Challenge 2
// Sort todos 
const sortTodos = function(todos) {
	todos.sort(function(a, b) {
		return a.completed > b.completed;
	});
}
console.log('\n\n')
sortTodos(todos);
console.log(todos);