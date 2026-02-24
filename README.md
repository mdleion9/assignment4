 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used to select a specific element by its unique id.

getElementsByClassName is used to select all elements that have the same class name.

querySelector is used to select the first matching element using a CSS selector.

querySelectorAll is used to select all matching elements using a CSS selector.

 2. How do you create and insert a new element into the DOM? 

 const div = document.createElement("div");
 div.innerText = "Hello";
 document.body.appendChild(div);
 document.body.appendChild(div);
 
 3. What is Event Bubbling? And how does it work?

When we click a button or interact with an element in HTML, an event occurs.

Event bubbling means the event starts from the target element (like a button) and then moves upward to its parent elements step by step.

For example, if you click a button inside a div:

First, the button handles the event

Then the div handles it

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding separate event listeners to each child element.

It is useful because:

It reduces the amount of code

It improves performance

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() stops the browser’s default behavior (for example, stopping a form from reloading the page after submission).

stopPropagation() stops the event from moving to parent elements (it stops event bubbling).