// DOM Manipulation:
<<<<<<< HEAD
document.body.append("Appended String.");
=======
document.body.append("Appended string.");
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
<<<<<<< HEAD
// Vulnerability: XSS (Cross-site Scripting)
pagetitle.innerHTML = "<a href='https://www.google.com/ncr'>Document Object Model</a>";
=======

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
<<<<<<< HEAD
pagetitle.innerText = "Document Object Model";
=======

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
<<<<<<< HEAD
pagetitle.style.height = "2em";
pagetitle.style.color = "#ff0000";

// 4. getElementById
// refer to the example above (line 4)
const spans = document.getElementsByTagName("span");
=======


// 4. getElementById
// refer to the example above (line 4)

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here
<<<<<<< HEAD
/* 1st getElementsByTagName method
document.getElementsByTagName("span")[0].innerText = "Element Updated.";
document.getElementsByTagName("span")[1].innerText = "Another Element Updated."; */

// 2nd method
spans[0].innerText = "Element Updated.";
spans[1].innerText = "Another Element Updated.";

// Additional Example
for (let index = 0; index < spans.length; index++) {
    spans[index].innerText = "Yet another update.";
}
=======
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here


// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
<<<<<<< HEAD
const paragraph = document.createElement("p");
paragraph.innerText = "Appended paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText
// querySelector targets all forms including tag name, id and class name

// Implement Code here
const header = document.querySelector("h2");
header.innerText = "New Title";
=======


// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText

// Implement Code here
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
<<<<<<< HEAD
const updateListItems = document.querySelectorAll(".menuItem");
updateListItems[0].innerText = "Eg 1";
updateListItems[1].innerText = "Eg 2";
updateListItems[2].innerText = "Eg 3";

//Challenge:
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
for (let index = 0; index < updateListItems.length; index++) {
    updateListItems[index].innerText = "Example " + String(index + 1) + ": ";
}
=======

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement Code here
<<<<<<< HEAD
/* For Challenge Statement - Original code:
const anchor1 = document.createElement("a");
anchor1.href = "https://example.org";
anchor1.innerText = "Example.org";
updateListItems[0].append(anchor1);

const anchor2 = document.createElement("a");
anchor2.href = "https://example2.org";
anchor2.innerText = "Example2.org";
updateListItems[1].append(anchor2);

const anchor3 = document.createElement("a");
anchor3.href = "https://example.org";
anchor3.innerText = "Example3.org";
updateListItems[2].append(anchor3); */

// Challenge Statement
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
// With each menuItem added with a newly-created anchor element ("Example1.org", "Example2.org", "Example3.org")
for (let index = 0; index < updateListItems.length; index++) {
    updateListItems[index] = "Example " + String(index + 1) + ":";
    const anchor = document.createElement("a");
    anchor.href = "https://example" + String(index + 1) + ".org";
    anchor.innerText = "Example" + String(index +1) + ".org";
    updateListItems[index].append(anchor);
}
=======

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

<<<<<<< HEAD
const mode = document.createElement("p");
const Theme = document.getElementById("appendChildHere").appendChild(mode);
Theme.innerHTML = "Append Child in a div";

// Implement Code here
const h3Greeting= document.createElement("h3");
h3Greeting.setAttribute("id", "h3Greeting");
const greeting = document.body.appendChild(h3Greeting);

document.getElementById("h3Greeting").innerHTML = "<em>Hello!</em>"
document.getElementById("h3Greeting").style.color = "#0000ff"
greeting.innerHTML = "Good Bye!";
greeting.style.color = "#ff000";
=======
// Implement Code here

>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414

// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
<<<<<<< HEAD
// Adding an event listener to a button
=======
// Adding an event listener to a button
>>>>>>> 5968c26f2f0ea33c2e77aaacb318a1b489a22414
