//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet


//Problem 2

//Do you know your login information?

//prompt user to add username...
var username = prompt("What is your username?");
//code: username is...
var name = "Vid";
//prompt the user to add password...
var password = prompt("What is your password?");
//code: password is...
var pass = "Vid00";
//ask if/then statements.
//if username AND password are incorrect then alert user...
if((username != name) && (password != pass)){
    alert("Sorry, we don't support hackers.");
    console.log("Please go away.")
    //if username OR password are in incorrect alert user...
}else if((password != pass) || (username != name)){
    alert("Please retry, one of your entries are incorrect.");
//if username AND password are correct then alert user...
}else if ((username === name) && (password === pass)){
    alert("Welcome back " + name + ", it's good to work with you again.")
}
