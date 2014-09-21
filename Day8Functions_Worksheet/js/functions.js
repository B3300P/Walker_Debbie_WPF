/*Debbie Walker, September 19, 2014, Web Programming Fundamentals
 - Lecture 00, Day 9 Functions */


//3 types of functions=["Basic functions", "Procedures", "Anonymous"]
//syntax for Basic
        // var function =functionName(){ //INVOKING is the input that calls the function//it can contains arguments, like what color
                //code the function runs; //it can contain parameters, like buckets for arguments
                //results
        // {
        //console.log(functions) //calls a return from the var functions


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
        // console.log(functionName) //prints return

//Problem 1. Circumference

//Basic function style:

//The circumference of a circle is...
function circumference(){  //invoke the function
    var radius = prompt("Enter the radius of the circle","");
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + circle + ".");
}
console.log(circumference);
