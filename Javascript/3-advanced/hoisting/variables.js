// This demonstrates the variables declared with the var keyword can be hoisted
console.log('Hoisted before assignment: ', hoisted)
var hoisted = 'this got hoisted'
console.log('Hoisted after assignment', hoisted)

// let variables cannot be hoisted
try {
  console.log(notHoisted1)
} catch (err) {
  console.log('Not hoisted1 error: ', err.message)
}
let notHoisted1 = 5
console.log('notHoisted1 after assignment', notHoisted1)

// const variables cannot be hoisted
try {
  console.log(notHoisted2)
} catch (err) {
  console.log('Not notHoisted2 error: ', err.message)
}
const notHoisted2 = [1, 2, 3]
console.log('notHoisted2 after assignment', notHoisted2)

// Cannot change the value of a const
try {
  notHoisted2 = 3
} catch (err) {
  console.log("notHoisted2's vlue cannot be changed: ", err.message)
}

// can change the object content
notHoisted2.push(5)
console.log('notHoisted2 after assignment', notHoisted2)
