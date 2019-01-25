-- DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.
 
 
-- In a nutshell, events are things we can trigger by interacting with the browser. Here are some potential events we can listen (and then execute some code) for:

	-- clicking on something
	-- hovering over something with the mouse
	-- pressing certain keys
	-- when the DOM has loaded
	-- when a form is submitted
	-- etc..

-- Adding an event listener
	-- There are three ways that we can add event listeners to our code: Given an element we want to listen to, and a function we want to execute, we can either attach the name of the function to the element in HTML, in JavaScript, or we can use the addEventListener method.

-- Data in the event object
	-- When an event is triggered, we have access to a special object called the event object. Inside of this object we can access quite a few useful values. The event object itself is quite large, but here are two of its most important parts:

		event.target - the target element of the event
		
		event.preventDefault() - a function that prevents the default action. This is used commonly to stop a form submission from refreshing the page (which is the default action of a submit event). You don't need to worry too much about this right now.

-- Accessing the value of whatever is clicked
	-- When we listen for events, we sometimes want to know exactly what element triggered the event. We can do this using the target property on the event object, which is given to us when we use addEventListener.