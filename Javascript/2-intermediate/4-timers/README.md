setTimeout + setInterval
========================
-- It's quite common to write code that we want to be executed after a specific amount of time. Maybe you want to put a timer in a game, or perform some animation on the page after a fixed amount of time has elapsed. To do this, we use the setTimeout and setInterval functions. Both functions accept a callback function and a time in milliseconds as parameters. The main difference is that the setTimeout function will only run the callback function to be executed once, whereas setInterval will run it an infinite amount of times.

-- What happens if we want to stop the timer? Well, setTimeout and setInterval return a special value called a timer id. If we pass this value in to the clearTimeout or clearInterval method, we can stop our timer.

-- JavaScript is single threaded. What this means is that only one process will happen at a time. Writing asynchronous code gives the impression that multiple things are happenning at once, even thpugh this is not the case.

-- call stack - where function calls are put (each one is called a "stack frame"). The call stack (sometimes simply referred to as the stack) is a LIFO (last-in-first-out) data structure. You can think of the stack like a stack of cups (last one you put on the stack is the first one that comes off). What that means is that if there is a function on the stack and it is under another function, it can never execute until the function on top has come off the stack (either by returning some value or by executing all the code in the function).

-- event queue - When an asynchronous event occurs, the event gets put into what is called the "event queue" (also known as the queue). The event then moved to the stack when the stack is clear (i.e. when there are no functions on the stack). MDN defines the queue as "a list of messages to be processed. A function is associated with each message. When the stack is empty, a message is taken out of the queue and processed. The processing consists of calling the associated function (and thus creating an initial stack frame). The message processing ends when the stack becomes empty again." The queue is a FIFO data structure (first-in-first-out).

-- heap - where objects are stored. The heap is an unstructured/unorganized region of memory.

-- Event Loop - JavaScript internally has something called the "Event Loop", which checks the queue and sees if there are any processes to execute.

