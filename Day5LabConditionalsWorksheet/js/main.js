//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet

//PROBLEM 1

//Fahrenheit to Celsius Converter

//Prompt user to input temperature...
var number = prompt("What is the temperature?");
//Give variable temperature an array for user to choose from...
var temperature = ["Celsius", " Fahrenheit"];
//Use math equations to convert Celsius into Fahrenheit...
// (referenced :http://albireo.ch/temperatureconverter/formula.htm for the equations)
var degreeC = (number-32) * 5/9;
//Declare what the formula is for Fahrenheit...
var degreeF = number * 9/5 +32;
//Prompt user to choose a temperature...
var temp = prompt("What temperature measurement would you prefer? " + temperature);