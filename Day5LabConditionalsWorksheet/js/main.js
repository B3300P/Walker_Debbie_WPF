//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet

//Problem: How to enroll at Full Sail.
/*
var oldEnough = true;
//if the child is old nough, they can ride!!
if(oldEnough){
    //if oldEnough is true, then you can ride!
    //if oldEnough is false, then nothing happens
   console.log("You can ride the coaster!");
}




//Relational Expressions
//if the kid is tall enough, then they can ride
//must me 48 inches tall or over
var kidheight = 40;
// kid's height
var minheight = 48;
// min height to rid the coaster

if(kidheight >= minheight){
    //if the kid is taller than or equal to the min
    //height they can ride the coaster
    console.log("You can ride the coaster!!")
}

//test true and false to see if equation works





//Conditional with an expression (this will be a Mathematical equation example)
//set kids height
//set min height
//add shoe lift disclaimer

var kidheight = 47;
// kid's height
var minheight = 48;
// min height to rid the coaster
var shoeLift = 2;
// has on sneakers that are 2 inches tall

if(kidheight + shoeLift >= minheight){
    //if the kid is taller than or equal to the min
    //height they can ride the coaster
    //will shoe lift affect the outcome?
    console.log("You can ride the coaster!!")
}
//will the child be tall enough with 2 inch shoes on




//If Else Statement
//Choosing between two blocks of code
//If you are over the min you can ride, if you are not you cannot

var kidHeight = 48;
//kid height
var minHeight =48;

if(kidHeight >= minHeight) {
    //if true then they can ride!
    console.log("You can ride!");
}else{
    //if false (you are too short!, then you cannot ride
    console.log("You cannot ride! You are too short!");


}




//Else IF - choosing between 3 or More blocks used


var kidHeight = 40;
//kid height
var minHeight =48;
//kid min
var wParentHeight = 45;
//kid height with parent

//if tall er than the min height, you can ride
//if shorter than min height but with parent and meet that height requirement
// you can ride
//you are too short you can't ride

if(kidHeight >= minHeight){

    console.log.("You can ride!")
}else if(kidHeight <= wParentHeight) {

    //with parent and tall enough
    console.log("You can ride with your parent!");
}else{
    console.log("Go home!");
}

 */

// based on budget can you buy an ipad?

var budget = 300;
var iPadPrice = 499.99;
var payCheck = 500;

//if the price of the ipad is less than our budget

if(iPadPrice < budget){
    console.log("You cannot buy an ipad!");

}else{

}

//AND if our paycheck is over 600
if(payCheck > 600){
    console.log("You can buy an iPad!");

}else{
    console.log("You cannot buy an iPad!");

}

//&& AND operator - both must be true to be true

if(iPadPrice < budget && payCheck > 600){
    console.log("You can buy an iPad!");

}else{
    console.log("You cannot buy an iPad!");
}

// OR fi you won the lottery

