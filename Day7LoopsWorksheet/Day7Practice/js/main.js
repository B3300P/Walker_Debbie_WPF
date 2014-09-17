/*Debbie Walker, September 17, 2014, Web Programming Fundamentals
 - Lecture 00, Day 7 Conditionals, Loops


//Loop Practice

 //WE WANT THIS TO KEEP ASKING IN A LOOP (ADDED ON SEPT 17)while loop runs as long as condition is true

//       NEED HELP TROUBLE SHOOTING!!!!!


var min = (prompt("Please enter a min number."));
//you can add multiple brackets...
var max = (prompt("Please enter a min number."));

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

 while(isNaN(min) || min==="")
{
    //while loop runs as long as condition is true
min = prompt("Please enter a number and do not leave blank.");
}

*/

//__________________________

//Basic While Loops

//initializing he counter variable
var counter = 0;

while(counter<200){
    //starting the while loop with condition
    //while condition is true, loop will run
    //when condition is false, loop stops
    console.log("counter is counting!");
    counter++;
}



