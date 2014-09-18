/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Personal */


//Problem: Choose your ride.

//alert user: welcome...
alert("Welcome back to CHOOSE MY RIDE.");
//alert user: how to play
alert("Enter either car, scooter or bike for each question.");
//ask weather question...

var vehicle = ["bike", "scooter", "car"];
var carSum = 1;
var scooterSum = 1;
var bikeSum = 1;

var weather = prompt("The weather is clear in sunny Florida, you choose... " + vehicle);
    if (vehicle[1]){
        bikeSum++
    } else if (vehicle[2]){
        scooterSum++
    }else if (vehicle[3]){
        carSum++
    }else{
        weather = prompt("The weather is clear in sunny Florida, you choose... " + vehicle)
    }

var weather = prompt("The weather just took a turn for the worse, you choose... " + vehicle);
if (vehicle[1]){
    bikeSum++
} else if (vehicle[2]){
    scooterSum++
}else if (vehicle[3]){
    carSum++
}else{
    weather = prompt("The weather just took a turn for the worse, you choose... " + vehicle)
}

var weather = prompt("It's awfully windy out today, you choose... " + vehicle);
if (vehicle[1]){
    bikeSum++
} else if (vehicle[2]){
    scooterSum++
}else if (vehicle[3]){
    carSum++
}else{
    weather = prompt("It's awfully windy out today, you choose... " + vehicle)
}

var weather = prompt("-40 degrees in miserable Minnesota, you choose... " + vehicle);
if (vehicle[1]){
    bikeSum++
} else if (vehicle[2]){
    scooterSum++
}else if (vehicle[3]){
    carSum++
}else{
    weather = prompt("-40 degrees in miserable Minnesota, you choose... " + vehicle)
}
