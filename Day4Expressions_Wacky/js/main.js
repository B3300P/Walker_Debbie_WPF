//Debbie Walker, September 10, 2014, Web Programming Fundamentals - Lecture 00, Day 4 Expressions_Wacky


//Problem: What will you be for Halloween?

//Choices:
// 1. Pick your nose.
// 2. Choose a wig.
// 3. What do you smell like?
// 4. You will go as.
//Answer:
// 1. clown, snout, trunk, witch
// 2. punk, bald, short curly, long, bob
// 3. trash, skunk, perfume, chocolate
// 4. RANDOM Porky The Pig, Oscar the Grouch, Flying Purple Eater, Wicked Witch of the West
//Comments:
// 1. Picking your nose is disgusting, but choosing a _________ nose is awesome.
// 2. It's getting hairy up here, looks like your __________ wig suites your nose.
// 3. Wow! That _______ smell really completes your costume!
// 4. I'll bet you'll steal the show as a Freakazoid Zombie this Halloween.


// Equations needed:
var noseChoices = ["clown", " snout", " trunk", " witch"];//This is an array, an array contains
// variables set off by brackets. // Each variable must be enclosed with quote marks and followed by a comma.
var nose = prompt("Pick your nose: " + noseChoices);//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
console.log("Picking your nose is disgusting, but choosing a " + nose + " nose is awesome.");//This is a console.log
// which prints to the browser.

var wigChoices = ["punk", " bald", " short curly", " long straight"];//This is an array, an array contains
// variables set off by brackets. // Each variable must be enclosed with quote marks and followed by a comma.
var wig = prompt("Choose a wig: " + wigChoices);//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
console.log("It's getting hairy up in here, looks like your " + wig + " hair choice goes well with your nose choice.");
//This is a console.log which prints
//to the browser.

var scentChoices = ["trash", " skunk", " perfume", " chocolate"];//This is an array, an array contains
// variables set off by brackets. // Each variable must be enclosed with quote marks and followed by a comma.
var scent = prompt("What will you smell like? " + scentChoices);//This is an example of prompt.
// A prompt includes "prompt()" Inside the prompt is a concatenation that includes a string that tells
// something plus a variable.
console.log("Wow! That " + scent + " smell really completes your costume!");
//This is a console.log which prints to the browser.

console.log("I'll bet you'll steal the show as a Freakazoid Zombie this Halloween.")
