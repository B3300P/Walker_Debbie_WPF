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




//__________________________


//Do While loops
//the do/while loop is a variant of the while loop
//this loop will execute the code block, once, before checking if
//the condition is true,
//then it will repeat the loop as long as the condition is true.

var i = 0;
//set a variable to hold our value

do{
    console.log("The number is  " + i);
    i++;
}
while(i<10);


//__________________________



// Basic For Loop
// for (intitiallization, condition, incremento f change)
//We use i freq b/c it stands for iteration

for(var i=0; i<20; i+=4){
    //for loop initializes the variable i, sets a conditions
    //i is less than 20, and adds increments of change + 4
    console.log("i = " + i);
    //show the value of i
    //runs as long as i is less than 20
}

//break

for(var j=0; j<5; j++){
    if(j==2){
        break; // stops the loop from cycling
    }
    console.log("j = " + j);
}

*/

//____________________________

//Bear Example

//Basic For Loop
//for (initialization, condition, increment of change)

//create loop that makes the song 99 bottles of beer on the wall.
//until there are no more.

//add a conditional that says when it's down to 1, it stops

for(var d=99; d>0; d--){

    console.log(d);

}