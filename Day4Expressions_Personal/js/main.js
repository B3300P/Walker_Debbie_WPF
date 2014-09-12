//Debbie Walker, September 10, 2014, Web Programming Fundamentals - Lecture 00, Day 4 Expressions_Personal

//Problem: How would you like your bath?

//Question:
// 1. What's your favorite color?,
// 2. Would you like to add bubbles?
// 3. What scent would you like?
//Answer: colors;
// 1. pink, yellow, blue, purple
// 2. yes or no
// 3. bubble gum, sunshine, ocean, grape soda
//Comments:
// 1. RANDOM Lovely color choice., That's my favorite color too., That fits your mood perfectly.
// 2. yes; Bubbles make an ordinary day extraordinary no; Simple is very zen.
// 3. Your fragrance will enhance any room you step into.

// Equations needed:
var colorChoices = ["pink", " yellow", " blue", " purple"];//This is an array, an array contains
// variables set off by brackets. // Each variable must be enclosed with quote marks and followed by a comma.
var color = prompt("Choose your color. " + colorChoices);//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
console.log("You chose " + color + ", what a great color choice.");//This is a console.log which prints
//to the browser.

var bubbles = prompt("Would you like bubbles in your bath?");//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
if (bubbles == "yes" || bubbles == "y") {//This is an example of a condition. It starts out with "if"
    //(the condition) {
    //block of code to be executed if the condition is true
    //} else {
    //block of code to be executed if the condition is false
    //}
    greeting = ", bubbles make an ordinary day extraordinary!";
} else {
    greeting = ", sometimes simple can be so very zen.";
}
console.log("Great choice" + greeting);//This is a console.log which prints the
//to the browser.