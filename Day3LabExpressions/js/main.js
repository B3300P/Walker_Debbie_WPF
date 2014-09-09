//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 3 Lab Expressions

//SELF ASSIGNMENT: Javascript Vocabulary

//Expressions: "Building blocks for Java program...using values, variables, operators and method calls." Reference/source: http://java.about.com/od/e/g/expression.htm
//Expressions such as slicesOfPizza, or minutesInHour give evaluation (http://dictionary.reference.com/browse/evaluate?s=t) to a specific value
//
// Javascript: Frontend programming language (or set of instructions); it's primary function is to control elements in a browser.
        // Frontend software = client side which lives on a computer as opposed to a server (it is referred to as a loosely type language because its variables can contain abstract data).

// Declarations:
// Variables: Are a container of data containing a  - for example: var score=0

// Operators: Are symbols that assign values to variables.
     //Assigned operators: The most common is the = symbol "is used to assign values to JavaScript variables." Reverence/source: http://www.w3schools.com/js/js_operators.asp
        //(It is preceded by an operand/operation on its left and a value on its right for example: slices= 8)




//Value:
//Method:

    //An array of primary browsers is ["Google Chrome + Google Chrome Canary", "Firefox + Firebug", + "Safari + Safari Webkit"].
    //Examples of the 10 data types:
        //1. var score= 5 - this is an example of a number data type, which is a number shown by itself
        //2. var score= "Bob" - this is an example of a string, which is set off by quotation marks
        //3. var score= true or false - this is an example of of a boolean



//Part 1 | Collection of data:
// How many pizza slices will everyone at a pizza party get, if there are...
var slices=8;
var people=6;
var pizzas=4;

//The equation for the
var person=(slices * pizzas /people);

//Browser document post.
console.log("Each person will get " + person + " slices of pizza.");


//Part 2
//How much left over pizza will there be if all the pizza slice where whole?
//Equation: remainder of whole pizza = .333 * people (6) = x
var leftOver= (slices * pizzas %people);

console.log("Sparky received " + leftOver + " slice of pizza.");

//Part 3
//Budgeting groceries.

var total=550.00;
var average=[total / 5];

console.log("I have spent $" + total.toFixed(2) + " on groceries over 5 weeks. " + "That is an average of $" + average  + ".00 per week.");

//Part 4


//Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.

var price=10;
var discount=.05;
var description="pair of shoes";
var tax=.03;

var withTax=price + tax;
var withoutTax=price;

var discountWithoutTax=price * (1- discount);
var discountWithTax=discountWithoutTax * (1+ tax)

console.log("The " + description + " was originally $" + price + ".00, but after a " + discount + " discount was applied, it is now only" + " $" + discountWithoutTax + " without tax and $" + discountWithTax + " after tax.");
