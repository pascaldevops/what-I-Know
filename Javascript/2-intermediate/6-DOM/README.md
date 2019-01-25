-- The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents.  provides a structured representation of the document as a tree. The DOM defines methods that allow access to the tree, so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects, possessing various properties and methods. Nodes can also have event handlers attached to them, and once an event is triggered, the event handlers get executed. 

-- Essentially, the DOM connects web pages to scripts or programming languages.

-- To access the DOM, we make use of the document object. This object has properties and functions that we use to access our HTML elements which we can manipulate with JavaScript.


-- The easiest way to select elements is by their id using the getElementById function on the document object (document.getElementById). This returns a SINGLE element 

	var container = document.getElementById("container");

-- We can also use a function called querySelector, which selects a SINGLE element using CSS selectors. If multiple elements match the query you pass in to querySelector, the function will simply return the first matching element that it finds.
	
	var container = document.querySelector("#container");

-- To select multiple elements, we can use getElementsByTagName or getElementsByClassName, or we can use querySelectorAll and pass in a CSS selector. These will return what appear to be arrays (they are not exactly arrays).

	var divs = document.getElementsByTagName("div"); //=> returns HTMLCollection
	var divs = document.querySelectorAll("div"); 	 //=> returns a NodeList
	var divsWithClassOfHello = document.getElementsByClassName("hello"); //=> returns HTMLCollection
	var divsWithClassOfHello = document.querySelectorAll(".hello"); //=> return a NodeList

-- Modifying properties and attributes on elements in the DOM

	You can use the innerHTML, innerText property to change the text of an element
	-- innerText retrieves and sets the content of the tag as plain text
	-- innerHTML retrieves and sets the content in HTML format. 

	var firstDiv = document.getElementsByTagName('div')[0];
	firstDiv.innerHTML = '<strong>Just changed!</strong>';

	var secondDiv = document.getElementsByTagName('div')[1];
    secondDiv.innerText = 'Just changed Again!';

	
	We can also directly manipulate the CSS properties for elements (through inline styling) with the style property.

	firstDiv.style.color = 'red';
	secondDiv.style.backgroundColor = 'teal';
	secondDiv.style['background-color'] = 'teal';

	To access/modify attributes on elements, we can do that with getAttribute and setAttribute
	
	var body = document.getElementById('container');
    body.getAttribute('id'); //=> container
    body.setAttribute('id', 'new_container');
    body.getAttribute('id'); //=> new_container

    Add and remove classes to elements using classList
    --classList returns a list of class attributes the element has
	
	var secondDiv = document.getElementsByTagName('div')[1];
	secondDiv.classList;	//=> DOMTokenList
	secondDiv.classList.add('another_class');

	
-- Traversing the DOM
	Another very common operation when working with the DOM is trying to find elements inside of other elements. When we travel through the DOM in search of something, we are doing what is called DOM traversal

	var container = document.getElementById('container');
    
    console.log(container.childNodes); // NodeList of all the nodes of container that are its children. It also include the element text
    
    console.log(container.children); // HTMLCollection => contains all of the elements that are children of the element we have selected
    
    console.log(container.children.length); // 5

    var link = document.querySelector('a');
    console.log(link.parentElement); // <body id= "container">
    console.log(link.previousElementSibling); // <div class="hello">Hello Everyone</div>
    console.log(link.previousSibling); // text node
    console.log(link.nextSibling);
    console.log(link.nextElementSibling); // <button>Click me!</button>

Creating and Appending Elements
    --  To create elements we use the .createElement function on the document object and pass in a string with the name of the element that we would like to create. This will just return a new HTML element without any text/attributes or placement on the page!

    var button = document.createElement('button'); // Create the element
    button.innerText = "I am a a button created with JavaScript";

    var container = document.getElementById('container'); // slect where to place the element
    container.appendChild(button); // place the element on the DOM
	
Removing an element from the DOM
	
	var linkToBeRemoved = document.querySelector('a'); // select the element to be removed
    var container = document.getElementById('container'); // select where to remove the element
    container.removeChild(linkToBeRemoved);
    console.log(container);

Changing multiple elements at once
	
	
