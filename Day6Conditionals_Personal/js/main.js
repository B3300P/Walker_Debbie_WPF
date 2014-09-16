/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Personal */


//Problem: Time Calculator

//prompt user to enter mode of transportation
// mph = r=d/t; referenced (http://www.math.com/school/subject1/lessons/S1U2L3DP.html)

var carRate = 10;
var carDistance = 10;
var carTime = 10;
var carMph = carRate == carDistance/carTime;

var scooterMiles = 10;
var scooterDistance = 10;
var scooterTime = 10;
var carMph = carRate == carDistance/carTime;

var bikeMiles = 10;
var bikeDistance = 10;
var bikeTime = 10;
var carMph = carRate == carDistance/carTime;

//prompt user: choose a mode of transportation
var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
//add if statement mode is nothing, re-prompt until a choice is made
// (loop syntax: for

if (mode === ""){
    for (i=1; i<=5 ; i++){
        var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
        console.log("Please try again.");
    }
}else{
    console.log("Great choice.");
}




