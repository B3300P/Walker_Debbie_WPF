/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
- Lecture 00, Day 6 Practice Math Class */

var min = (prompt("Please enter a min number."));
var max = (prompt("Please enter a min number."));

//test to see that a number was actually entered!

if(min===""){
    console.log("you did not enter number");
    min = Number(prompt("Please reenter number"));
}