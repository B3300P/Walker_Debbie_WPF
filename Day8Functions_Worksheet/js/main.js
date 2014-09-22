/*
 Debbie Walker, September 19, 2014, Web Programming Fundamentals - Lecture 00, Day 8 Functions
 */

//3 types of functions=["Basic functions", "Procedures", "Anonymous"]
//syntax for Basic
// var function =functionName(){ //INVOKING is the input that calls the function//it can contains arguments, like what color
//code the function runs; //it can contain parameters, like buckets for arguments
//results
// {
//functionName; //calls a return from the var functions


//syntax for Procedure
// function functionName(){ INVOKING is the input that calls the function//it can contains arguments, like what color
//code the function;
//return
// {
// console.log(functionName) //Procedures do not return a value!!!


//syntax for Anonymous
// function functionName(){ INVOKING is the input that calls the function//it can contains arguments, like what color
//code the function runs;
//return
// {
//var functionName(); INVOKING (input data)
// functionName; //prints return


//Problem 1. Circumference

//Basic function style:

//The circumference of a circle is 2 x PI x radius...
//invoke(call) the function
function circumference(){
    //code the function...
    var radius = prompt("Enter the radius of the circle:","");
    var circle = 2 * Math.PI * radius;


    alert("The circumference is " + circle + ".");

    }
console.log("text");
circumference();
 /*
  var radius = prompt("Enter the radius of the circle:", "");
  var circumference = 2 * Math.PI * radius;
  /*var radius = prompt("Enter the radius of the circle:", "");
  } if(radius()===""){
  console.log("Please enter the radius.");
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + circle + ".");
  circumference();
  console.log(circumference);
  if (isNaN(radius)){
  radius = prompt("Please enter a number for your radius.");

}
console.log(circumference);

function circum() {
    var radius = prompt("Enter the radius of the circle","");
    var circle = 2 * Math.PI * radius;
    alert("The circumference is "+circle+".")
}
  */
