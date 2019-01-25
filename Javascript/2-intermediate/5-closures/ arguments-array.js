function logAll(){
    console.log(arguments);
}

console.log(logAll(2,2)); // [2,2]
console.log(logAll(10,5,4)); // [10,5,4]
console.log(logAll(1)); // [1]

function displayFirstArgument(){
    return arguments[0];
}

console.log(displayFirstArgument(10,20)); // [10]
console.log(displayFirstArgument(true)); // [true]
console.log(displayFirstArgument()); // []

