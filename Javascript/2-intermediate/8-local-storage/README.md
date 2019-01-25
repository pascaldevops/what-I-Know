-- localStorage is a mechanism for storing information in the browser for a specific domain.

--localStorage vs sessionStorage
	-- Data stored in local storage has no expiration time.

	-- Data stored in session storage no longuer available when the browser closes

-- Adding, retrieving and removing from localStorage
	-- The most important thing to remember is that all of your keys in localStorage or sessionStorage must be STRINGS. localStorage stores everything as strings, so it's just good to get in the habit of setting your keys as strings to avoid confusion.

-- Remember, when dealing with localStorage, everything gets converted into a string.

-- In order to get back our original data type, we need to use JSON