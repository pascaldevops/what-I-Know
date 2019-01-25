//
// write a function called each which accepts two parameters: an array and a 
// callback function. The each function should loop over the array passed to it and 
// run the callback function on each element in it.
//
function each(arr, callback) {
	for(var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

each([1,2,3,4], function(val) {
	console.log(val);
})

each([1,2,3,4], function(val){
    console.log(val*2);
});

// 
// Write a function called map which accepts two parameters: 
// an array and a callback. The map function should return a new array 
// with the result of each value being passed to the callback function. 
//
function map(arr, callback) {
	var temp = [];
	for (var i = 0; i < arr.length; i++) {
		temp.push(callback(arr[i]));
	}
	return temp;
}

var results = map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

console.log(results);

// 
// Write a function called reject which accepts two parameters 
// an array and a callback. The function should return a new array 
// with all of the values that do not return true to the callback
//
function reject(arr, callback) {
	var temp = [];
	for (var i = 0; i < arr.length; i++) {
		if (!callback(arr[i])) {
			temp.push(arr[i]);
		}
	}
	return temp;
}

var results2 = reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

var results3 = reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]

console.log(results2);
console.log(results3);

