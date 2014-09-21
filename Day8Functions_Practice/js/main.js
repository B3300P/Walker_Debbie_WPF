/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 9 Functions */

//

/**
 * Created by debbiewalker on 9/19/14.
 */

//arguments & parameters
//arguments - goes into functions
//parameters - catches the argument in the function


//Allows us to make our code more flexible!


var width = 10;
var height = 10;
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


//this adds returns
console.log (funcResult);

//__________________________

var yearsOld = 8;
var dogAge = 7;

calcAge(yearsOld * dogAge);

function calcAge(y,d){
    var age = y*d;
    console.log(calcAge(15,));

}




//_______________________

//1. calculate the circumference of a circle

//2. variable for radius

//3. creating function

//FUNCTION CALCULATION

//using the formula
//xxxxx

//returning value
//return XXXX

//4. calling function