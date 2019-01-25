What is the difference between setInterval and setTimeout?
==========================================================
-- setInterval executes the callback function at the time specified. It will continuously running. 

-- setTimeout will run the code in the callback function once the time value elapsed. 
the code only run once.

What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
=============================================================================================================
-- SetInterval generates an event that get added to the even-queue. The loop looks for event on the queue and takes appropriate actions to run messages that sit on the queue.

What is the first parameter that setInterval and setTimeout accept?
===================================================================
callback function

Why is it so important to store the result of setInterval and setTimeout in a variable?
=======================================================================================
you can use it to stop the timer

What does asynchronous mean in the context of setTimeout and setInterval?
=========================================================================
The rest of the program can continue running without waiting the setInterval and setTimeout to complete.