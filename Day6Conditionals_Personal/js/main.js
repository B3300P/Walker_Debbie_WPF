/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Personal */


//Problem: Time Calculator

//prompt user to enter mode of transportation
// mph = r=d/t; referenced (http://www.math.com/school/subject1/lessons/S1U2L3DP.html)

//What is the best mode of travel?
//Car, scooter or bike?
//What's better for good weather?
//Bike (1pt), Scooter (1pt), Car (0)
//What's better for bad weather?
//Bike (0), Scooter (0), Car (1)
//What's better for cost?
//Bike (1), Scooter (1), Car (0)

//Every time a variable is entered ++1

//Total points for best mode of transportation

//Conclusion = _____ is the best choice for you.

var scooterTime = 10;
var scooterRate = distance/scooterTime;

var bikeTime = 10;
var bikeRate = distance/bikeTime;

var distance = 10



//prompt user: choose a mode of transportation
var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
//add if statement mode is nothing, re-prompt until a choice is made
if (mode === ""){
    // (loop syntax: for
    for (i=1; i<=5 ; i++){
        var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
        console.log("Please try again.");
    }
//else statement
}else{
    console.log("Great choice.");
}
var rateMph = prompt;

var play = prompt("Let's play! You'll receive a point for every choice you make.");





