/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Personal */


//Problem: Choose your ride.

//alert user: welcome...
alert("Welcome back to" +
    "                                                                   CHOOSE MY RIDE!");
//alert user: how to play
alert("Enter either car, scooter or bike for each question.");
//declare variables
var vehicle = ["bike", "scooter", "car"];//array of choices
var carSum = 1;//sum for each mode of transportation...
var scooterSum = 1;
var bikeSum = 1;
//if/then statements...
//prompt user to choose a mode of transportation after each question...
weather = prompt("The weather is clear in sunny Florida, you choose... " + vehicle);
if (weather === vehicle[0]){//if array: vehicle unit is [0] is true
        bikeSum++; //then add bike sum plus 1
} else if (weather === vehicle[1]){// else if vehicle unit is [1]
        scooterSum++; //then add scooter sum
}else if (weather === vehicle[2]){//else if...vehicle unit [2]
        carSum++; //then add car sum plus 1
}else{//then...re-prompt if no answer was given (this would have looped, if there was more time)
        weather = prompt("The weather is clear in sunny Florida, you choose... " + vehicle)
}

// /repeat comments for all questions...
weather = prompt("The weather just took a turn for the worse, you choose... " + vehicle);
if (weather === vehicle[0]){
    bikeSum++;
} else if (weather === vehicle[1]){
    scooterSum++;
}else if (weather === vehicle[2]){
    carSum++;
}else {
    weather = prompt("The weather just took a turn for the worse, you choose... " + vehicle)
}

weather = prompt("It's awfully windy out today, you choose... " + vehicle);
if (weather === vehicle[0]){
    bikeSum++;
} else if (weather === vehicle[1]){
    scooterSum++;
}else if (weather === vehicle[2]){
    carSum++;
}else{
    weather = prompt("It's awfully windy out today, you choose... " + vehicle)
}

weather = prompt("-40 degrees in miserable Minnesota, you choose... " + vehicle);
if (weather === vehicle[0]){
    bikeSum++;
} else if (weather === vehicle[1]){
    scooterSum++;
}else if (weather === vehicle[2]){
    carSum++;
}else{
    weather = prompt("-40 degrees in miserable Minnesota, you choose... " + vehicle)
}

//associate sums to arrays for total points earned (this is where Jeff helped!!!!!!!
// he really deserves extra credit!!!!)
if ((carSum >= scooterSum) && (carSum >= bikeSum)){
    var totalSum = vehicle[2];
} else if ((scooterSum >= carSum) && ( scooterSum >= bikeSum )) {
     totalSum = vehicle[1];
} else if ((bikeSum >= scooterSum) && (bikeSum >= scooterSum)){
    totalSum = vehicle[0];
}

console.log(carSum);
console.log(scooterSum);
console.log(bikeSum);

alert("CONGRATULATIONS, your ride for today is a " + totalSum + ".");

//CREDIT LINE: Vid helped me with the logic and Jeff helped me with the equation.