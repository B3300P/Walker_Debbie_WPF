/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Industry */


//What size truck would you need to move two dressers?

var 

//Prompt user to input dimensions;
var height = prompt("Enter your height.");
    if(height === ""){
    console.log("Please re-enter.");
    }
    else if (isNaN(height)){
        console.log("Please re-enter.");
    }
var width = prompt("Enter your width.");
    if(width === ""){
    console.log("Please re-enter.");
}
var depth = prompt("Enter your depth.");
    if(depth === ""){
    console.log("Please re-enter.");
}
var area = (height * width * depth);
    console.log("This is the volume of your box. " + area);

