/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
- Lecture 00, Day 6 Practice Math Class */

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

//WE WANT THIS TO KEEP ASKING IN A LOOP (ADDED ON SEPT 17)

//while loop runs as long as condition is true
while(isNan(min)) || min===""){
    //while loop runs as long as condition is true
    min = prompt("Please enter a number and do not leae blank.")
}




//syntax for Math.round and Math.random: Math.random()*(max-min)+min
//
var randomNumber = Math.round(Math.random()*(Number(max)-Number(min))+(min));
console.log(randomNumber);


var num1 = 9.555;
console.log(num1);
console.log(Math.round(num1));
//round numb1

console.log(Math.ceil(num1));
//rounds up
console.log(Math.floor(num1));
//rounds down


var num2 = Math.random();
console.log(num2);

var num3 = Math.random()*10;
//this will find a random number between 1 and 10
console.log(num3);

var num3 = Math.round(Math.random()*10);
console.log (num3);

//results variable into the council log
//"Hello Jessica"

///________________________________________________


//Added Loops: Sept 17th

//syntax: for (i= 0); i < cars.length; i++) {
        //text











