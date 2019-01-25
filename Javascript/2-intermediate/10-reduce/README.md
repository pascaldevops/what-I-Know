<strong>reduce</strong>

reduce is one of the most powerful iterators, but it has a bit of a steeper learning curve. The purpose of reduce is to take an array and reduce it to a single value. What makes reduce so powerful is that the value you reduce can be anything (a string, boolean, object, even a 2D array!).

The parameters to the callback of reduce (as well as the function itself) are a bit different than forEach, map and filter. Unlike the other iterators we've seen, the callback to reduce takes four arguments, not three. The second through fourth arguments are the same as the ones we've seen before (value, index, array). However, the first parameter is one we haven't seen before.

Depending on where you read documentation, you will see the first parameter of reduce being called start, previous, or accumulator. Here's how it works: at each step in the iteration, this value is whatever was returned by the callback in the previous iteration. For the first iteration (when there is no previous value), you can pass in an initial value as the second parameter to reduce. If you don't supply an argument, reduce will assume that the value of this parameter should be the first value in the array, and it will start the iteration from the second element.

<strong>reduceRight</strong>

provide the ability to reduce an array starting from the end and moving backwards, rather than starting from the front and moving forwards.
