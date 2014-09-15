/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
- Lecture 00, Day 5 Lab Conditional Worksheet */


//Conditional Logic | Problem 1

//Prompt user to input temperature...
var number = prompt("What is the temperature?");
//Give variable temperature an array for user to choose from...
var temperature = ["Celsius", " Fahrenheit"];
//Use math equations to convert Celsius into Fahrenheit...
// (referenced :http://albireo.ch/temperatureconverter/formula.htm for the equations)
var degreeC = (number-32) * 5/9; //if number was 32: (32-32) = 0 * 5/9 = 0
//Declare what the formula is for Fahrenheit...
var degreeF = number * 9/5 +32; //if number was 32: 32 *
//Prompt user to choose a temperature...
var temp = prompt("What temperature measurement would you prefer? " + temperature);
//compare using logical operators; either (if) or (else if)...
//if user chooses Celsius or c it will only choose Celsius from the temp prompt
//which gives the user chooses Celsius from the array variable temperature
if(temp == "Celsius" || temp == "c") {
    //then print to the console what the degree (using math formula) is in Celsius
    console.log ("The temperature is " + number + degreeC + " Celsius" )}
//OR else if the user chooses Fahrenheit from the array variable temperature
else if(temp == "Fahrenheit" || temp == "f"){
    console.log("The temperature is " + number + degreeF + " Fahrenheit")
}

