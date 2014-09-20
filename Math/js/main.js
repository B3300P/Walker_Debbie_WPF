/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 9 Functions */


//Calculate the circumference of a circle.

//parameters for function...
var result = circumference();

//declaring function...
function circumference(){
    var radius = prompt("Enter the radius of the circle","");
        if(radius===""){
             console.log("You did not enter a number.");
            radius = Number(prompt("Please re-enter the number."));
    }
    var circle = 2 * Math.PI * radius;
    return ("The circumference is " + Math.round(circle) + ".");
    }
console.log(result);


//Stung!

//given: parameters for function = user input
var beeStings = 8.666666667;
var weight = 0;
var stings = killed();

//declaring function...
function killed(){
    var weight = prompt("Enter your weight here","");
    if(weight===""){
        console.log("Sorry I didn't catch your weight.");
        weight = Number(prompt("Please re-enter the number."));
    }
    var math = beeStings * weight;
    return ("It would take " + Math.round(math) + " bee stings per pound to kill an animal based on that weight.");
}
console.log(stings);



