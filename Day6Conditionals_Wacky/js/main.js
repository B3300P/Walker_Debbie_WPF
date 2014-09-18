/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Industry */


//Building a cat house.

//Ask user what the size of their cat is?
// Cats need an extra square foot of space in their house
// to be cozy.

//Prompt user to input dimensions;

var catHeight = prompt("What is your cats height?");
    if (isNaN(catHeight)){
        catHeight = prompt("What is your cats height?");
    }
var catLength = prompt("What is your cat length?");
    if (isNaN(catLength)){
        catLength = prompt("What is your cat length?");
    }
var catStature = prompt("How broad is your cat?");
    if (isNaN(catStature)){
        catStature = prompt("How broad is your cat?");
    }
var boxArea = (catHeight * catLength * catStature)+12;

alert("Your Total = " + boxArea + ".");
alert("Thank you.");

