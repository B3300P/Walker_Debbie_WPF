//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 3 Lab Expressions

//Part 1
//Collection of data:
// Figure out what the following variables will be for a pizza party.
var slices=8;
var people=6;
var pizzas=4;

//How many slices will each person get?
var person=(slices * pizzas /people)

//Browser document post.
console.log("Each person will get " + person + "slices of pizza.")


//Part 2
//How much left over pizza will there be if all the pizza slice where whole?
//Equation: remainder of whole pizza = .333 * people (6) = x
var leftOver= (.333 * people)

console.log("Sparky got " + leftOver + " pieces of pizza.")

//Part 3
//Budgeting groceries.

var total=750.00;
var average=[total / 5];

console.log("I have spent " + total + " on groceries over 5 weeks. " + " That is an average of " + average + " per week.")