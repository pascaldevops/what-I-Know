-- A node is the generic name for any type of object in the DOM hierarchy. A node could be one of the built-in DOM elements such as document or document.body, it could be an HTML tag specified in the HTML such as <input> or <p> or it could be a text node that is created by the system to hold a block of text inside another element. So, in a nutshell, a node is any DOM object.

-- An element is one specific type of node as there are many other types of nodes (text nodes, comment nodes, document nodes, etc...).

-- The DOM consists of a hierarchy of nodes where each node can have a parent, a list of child nodes and a nextSibling and previousSibling. That structure forms a tree-like hierarchy. The document node would have its list of child nodes (the head node and the body node). The body node would have its list of child nodes (the top level elements in your HTML page) and so on.

-- A nodeList is simply an array-like list of nodes.

-- An element is a specific type of node, one that can be directly specified in the HTML with an HTML tag and can have properties like an id or a class. can have children, etc... There are other types of nodes such as comment nodes, text nodes, etc... with different characteristics. Each node has a property .nodeType which reports what type of node it is. You can see the various types of nodes:


Node.ELEMENT_NODE						1	An Element node such as <p> or <div>.
Node.TEXT_NODE							3	The actual Text of Element or Attr.
Node.PROCESSING_INSTRUCTION_NODE		7	A ProcessingInstruction of an XML document such as <?xml-stylesheet ... ?> declaration.
Node.COMMENT_NODE						8	A Comment node.
Node.DOCUMENT_NODE						9	A Document node.
Node.DOCUMENT_TYPE_NODE					10	A DocumentType node e.g. <!DOCTYPE html> for HTML5 documents.
Node.DOCUMENT_FRAGMENT_NODE				11	A DocumentFragment node

In short, there are many different types of nodes, but the ones we will most often be working with are ELEMENT_NODE and TEXT_NODE. Element nodes are HTML elements (div, span etc.). Text nodes are the actual text of an element node.

