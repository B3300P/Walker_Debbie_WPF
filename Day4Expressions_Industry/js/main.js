//Debbie Walker, September 10, 2014, Web Programming Fundamentals - Lecture 00, Day 4 Expressions_Industry-Specific

//Problem: Setting up a website.

//Choices:
// 1. Choose a font.
// 2. Pick a background color.
// 3. Choose where you would like your logo to be placed in the header.
//Answer:
// 1. Helvetica, Gills Sans, Times Roman, Avant Gard
// 2. White, Black, Grey, Beige
// 3. Top left, Center, Top right
//Comments:
// 1. ____________ is a great font for your website.
// 2. Your background color will be ____________.
// 3. Thank you, your logo will be placed in the _________ of the header.

// Equations needed:
var font = ["Helvetica", " Gills Sans", " Times Roman", " Avant Gard"];//This is an array, an array contains
// variables set off by brackets. // Each variable must be enclosed with quote marks and followed by a comma.
var fontChoice = prompt("Choose a font. " + font);//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
console.log(fontChoice + ", is a great choice for your website.");//This is a console.log which prints
//to the browser.