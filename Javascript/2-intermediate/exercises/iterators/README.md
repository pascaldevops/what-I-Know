Iterators are not created equal. That is, first understand the problem, then use the appropriate iterator for the job.

Use for loop if you have to break or continue when certain condition is met. It is a syntax error when using these keywords inside iterators.

map => map is used to manipulating values inside an array. Therefore use map if the problem involves keeping the same array length and manipulating the array values.

filter => use filter if you are creating a smaller array from the original array.

reduce => use reduce if you are taking the array to produce a single value. 

