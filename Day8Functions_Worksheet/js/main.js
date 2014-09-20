/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 9 Functions */


//Function Worksheet
/*

//1.calculate the are of a rectangle:
var width = 5;//variables given
var height = 6;
//call the function and pass in arguments
calcArea(width,height);

//create function and pass arguments into parameters.

function calcArea (w,h){
    var area = w*h;
    console.log(area);

    return area;
}
//make sure these are outside the function


var funcResult = calcArea(20,20);

//run the function again
calcArea(10,10);


*/


//Parameters for function: Calculate the circumference of a circle.
//naming/calling the function
var result = circumference();

//creating function
function circumference(r){
    var radius = prompt("Enter the radius of the circle","");
    var circle = 2 * Math.PI * radius;
    var math =("The circumference is " + circle + ".");
    return math
}

console.log(result);

//FUNCTION CALCULATION


//using the formula
//xxxxx

//returning value
//return XXXX

//4. calling function
//var result =

//logging to console