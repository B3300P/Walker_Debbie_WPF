//Debbie Walker, September 8, 2014, Web Programming Fundamentals - Lecture 00, Day 5 Lab Conditional Worksheet

/*
//Fahrenheit to Celsius Converter

//prompt user to input temperature...
var number = prompt("What is the temperature?");
//give temperature an array for user to choose from...
var temperature = ["Celsius", " Fahrenheit"];
//declare what the formula is for Celsius...
var degreeC = (number-32) * 5/9;
//declare what the formula is for Celsius...

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



/*


//What will your movie ticket cost?

//Prompt "What is your age?"
var number = prompt("What is your age?");
console.log

//code: if you are older than 10 and younger than 54...
var discountAge = [x <= 10 === x >= 55]





//code: what age do you have to be to get a discount?


var discountAge = [10 === 55]
var regPriceAge = 11 - 54;
//code: discountAge AND regularAge




var discountAge = prompt("What is your age?");
    if (discountAge <= 10){
        //code if less than 10
    }else if (discountAge >= 55){
        //code if greater than 55
    }



var discountPrice = "$7.00";

//What age
//How much is a regular price ticket?
var regPrice = "$10.00";
//What age pays regular price?
var regPriceAge =
