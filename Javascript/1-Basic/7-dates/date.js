// Unix Epoch - January 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();
console.log(timestamp);

// Challenge Area

// 1. Create two dates in the past (using string for data)
const date1 = new Date('December 1 1990 9:40:20');
const date2 = new Date('March 2 1968 00:00:00');

// 2. Get timestamp for both
const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();
let firstDate = new Date();

// 3. Figure out which is first and print its time
const firstDate1 = (timestamp1 > timestamp2) ? date1.toString() : date2.toString();
console.log(firstDate1);  