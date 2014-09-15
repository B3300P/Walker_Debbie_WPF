/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
- Lecture 00, Day 5 Lab Conditional Worksheet */


//Conditional Logic | Problem 1


//input: since there are two scales for temperature prompt user to choose c/Celsius or f/Fahrenheit
var scale = prompt("Choose your conversion; c for Celsius or f for Fahrenheit.");
//input: have user enter the temperature they want converted
var number = prompt("Enter the temperature you want to convert.");
//declare the math formula for Celsius and Fahrenheit (referenced http://albireo.ch/temperatureconverter/formula.htm)
var c = (number-32) * 5/9; //Celsius math equation
var f = number * 9/5 +32; //Fahrenheit math equation
//if c == f then f == c
if(c){
    console.log(f + " Fahrenheit.");
}
else if(f){
    console.log(c + " Celsius.");
}


