/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
- Lecture 00, Day 6 Practice Math Class */

var min = (prompt("Please enter a min number."));
//you can add multiple brackets...
var max = prompt("Please enter a min number.");

//test to see that a number was actually entered!

if(min===""){
    console.log("you did not enter number");
    min = Number(prompt("Please re-enter number"));
}

//isNaN
if(isNaN(min) || min === ""){
    min = prompt("Re prompt, do not leave blank");
    console.log ("Please re-enter number.");
}