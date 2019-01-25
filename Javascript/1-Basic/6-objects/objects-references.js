let myAccount = {
	name: 'Pascal',
	expenses: 0,
	income: 0
};

let addExpense = function(account, amount) {
	account.expenses = account.expenses + amount;
	console.log(account);
}

// Challenge area

// addIncome
let addIncome = function(account, amount) {
	account.income = account.income + amount;
};

// resetAccount
let resetAccount = function(account) {
	account.expenses = 0;
	account.income = 0;
};

// getAccountSummary
let getAccountSummary = function(account) {
	let balance = account.income - account.expenses;
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// Testing area
addExpense(myAccount, 2.50);
console.log(myAccount);

addIncome(myAccount, 500);
console.log(myAccount);

let result = getAccountSummary(myAccount);
console.log(result);

resetAccount(myAccount);

result = getAccountSummary(myAccount);
console.log(result);

