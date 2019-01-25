
/**
 * When no argument is supplied to reduce: acc uses the value of arr[0];
 * 
 *  the reduce method iterates through the array one at a time:
 *  iteration 1 acc=arr[0]=2 and next -> arr[1] so acc = 2 + 4 = 6
 *  iterarion 2 acc=6        and next -> arr[2] so acc = 6 + 6 = 12 
 *  iterarion 3 acc=12       and next -> arr[3] so acc = 12 + 8 = 20
 *  iteration 4 acc=20       and next -> arr[4] so acc = 20 + ???? <- loop exshausted
 * 
 *  original: [2, 4, 6, 8]
 *  acc = 2 and next = 4 acc + next = 6
    acc = 6 and next = 6 acc + next = 12
    acc = 12 and next = 8 acc + next = 20
    final result: 20
 * 
 */
var arr = [2, 4, 6, 8];
console.log(`original: ${arr}`);
var result = arr.reduce(function(acc, next) {
  console.log(`acc = ${acc} and next = ${next} acc + next = ${acc + next}`);
  return acc + next;
});
console.log(`final result: ${result}`);

/**
 * When an argument is supplied to reduce: acc = 2
 * 
 *  the reduce method iterates through the array one at a time:
 *  iteration 1 acc=2        and next -> arr[0] so acc = 2 + 2 = 4
 *  iterarion 2 acc=4        and next -> arr[1] so acc = 4 + 4 = 8 
 *  iterarion 3 acc=8        and next -> arr[2] so acc = 8 + 6 = 14
 *  iteration 4 acc=14       and next -> arr[3] so acc = 14 + 8 = 22 
 *  iteration 4 acc=22       and next -> arr[3] so acc = 14 + ??? <- loop exshausted 
 * 
 *  original: [2, 4, 6, 8]
 *  acc = 2 and next = 2 acc + next = 4
    acc = 4 and next = 4 acc + next = 8
    acc = 8 and next = 6 acc + next = 14
    acc = 14 and next = 8 acc + next = 22
    final result: 22
 * 
 */

var arr = [2, 4, 6, 8];
console.log(`original: ${arr}`);
var result = arr.reduce(function(acc, next) {
  console.log(`acc = ${acc} and next = ${next} acc + next = ${acc + next}`);
  return acc + next;
}, 2);
console.log(`final result: ${result}`);

/**
 * When an argument is supplied to reduce of a diffrent type: acc = {}
 * Basically the original data type was an array. Now we expect an object as the result
 *   
 *  original: 2,4,6,1
 * 
 *  {key2: 2}
 *  {key4: 4}
 *  {key6: 6}
 * 
 */
console.log();
console.log();

var arr = [2, 4, 6, 1];
console.log(`original: ${arr}`);
var result = arr.reduce(function(acc, next, index) {
  if (next >= 2) {
    acc['key' + next] = next;
  }
  return acc;
}, {});

for (var prop in result) {
  console.log(`{${[prop]}: ${result[prop]}}`);
}

/**
 * 
 * using reduceRight
 * 
 */
console.log();
var arr = [2, 4, 6, 8];
console.log(`original: ${arr}`);
var result = arr.reduceRight(function(acc, next) {
  console.log(`acc = ${acc} and next = ${next} acc + next = ${acc + next}`);
  return acc + next;
});
console.log(`final result reduceRight: ${result}`);