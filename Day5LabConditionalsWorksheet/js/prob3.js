//Debbie Walker, September 13, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet


//Problem 3

//How much will your ticket cost?

var number = prompt ("Please enter your age.");
var discountAge = (number <= 10 || number >= 55);
if(discountAge){
    console.log("You qualify for a discount; your reduced price is $7.00.");
}else{
    console.log("Your ticket price is $12.00.")
}
var time = prompt ("Please enter the showtime.");
var discountTime = (time > 2 && time < 5);
var matinee = (time < 2 || time > 5);
if(time != matinee){
    console.log  ("During weekly Matinees from 2pm - 5pm, tickets are discounted to $7.00.")
}