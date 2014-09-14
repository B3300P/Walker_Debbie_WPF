/**
 * Created by debbiewalker on 9/13/14.
 */

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