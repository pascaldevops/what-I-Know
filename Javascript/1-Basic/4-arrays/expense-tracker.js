const account = {
    name: 'Jude Pierre',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description, 
            amount: amount
        });
    },
    getAccountSummary: function() {
        let totalExpenses = 0.0;
        let totalIncome = 0.0;

        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });

        this.income.forEach(function(income) {
            totalIncome += income.amount; 
        });

        console.log(`${this.name} has $${totalIncome - totalExpenses} in expenses. ${totalIncome} in income. ${totalExpenses} in expenses.`);
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description, 
            amount: amount
        });
    }
};


account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());


