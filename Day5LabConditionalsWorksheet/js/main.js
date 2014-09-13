//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet



//Problem: Convert Celsius to Fahrenheit depending on what the user prefers.

//Are username and password correct?
//Question:
// Prompt, What is your username and password?
// If both correct prompt "Welcome user!
// If username is correct then go to password
// If password in incorrect, start over

/*
var username = "Vid";
var password = "TGIF";
var userInput = prompt("Please enter your password.");
var passwordInput = prompt ("Please enter your password.");

if (username = password) - (password)
    console.log("Sorry, either password or username is wrong.");

}else if(username + password){
    console.log("Welcome, " + username + "!");
}






//What is the temperature in Fahrenheit or Celsius?

var number = prompt("What is the temperature?");
var temperature = ["Celsius", " Fahrenheit"];
var degreeC = (number-32) * 5/9;
var degreeF = number * 9/5 +32;
var temp = prompt("What temperature measurement would you prefer? " + temperature);

if(temp === "Celsius" || temp === "c") {
    console.log("The temperature is " + degreeC + " Celsius" );
} else if(temp === temperature[1] || temp === "f"){
    console.log("The temperature is " + degreeF + " Fahrenheit");
}

*/


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
//if username AND password are incorrect alert user...
if(name != pass){
    alert("Sorry, we don't support hackers.");
    //
}else if(name - pass){
    alert("Please retry, one of your entries are incorrect.");
    //
}//if username AND password are correct alert user...
else (name === pass){
    alert("Welcome back " + name + ", it's good to work with you again.");


