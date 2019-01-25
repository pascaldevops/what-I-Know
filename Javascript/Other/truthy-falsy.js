const products = [];
const product = products[0];

// Accessing an array with nothing on it returns undefined
console.log(product);

// truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in a boolean context
// Falsy - values: false, 0, emty string, null, undefined, NaN

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
}