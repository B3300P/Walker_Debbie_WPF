/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Personal */


//Problem: What mode of transportation should you choose for today?

//consider a mileage calculator into questions??
// mph = r=d/t; referenced (http://www.math.com/school/subject1/lessons/S1U2L3DP.html)
//var scooterTime = 10;
//var scooterRate = distance/scooterTime;
//var bikeTime = 10;
//var bikeRate = distance/bikeTime;
//var distance = 10
//_________________________

//Car, scooter or bike?
//Choose the best mode of transportation based on today's weather forecast? (enter weather link here)
//Bike (1pt), Scooter (1pt), Car (0pt)
//etc., Every time a variable is entered ++1 is added to that variable
//Total points for best mode of transportation = the perfect vehicle for user
//Conclusion = _____ is the best choice for you.

var points = 1;
var car = points++;
var scooter = points++;
var bike = points++;

var mode = [car, scooter, bike]

alert("Welcome back to Choose My Ride!");

var start = prompt("You will receive a point for every choice you make.                   " +
    "Are you ready to get started?");

    if ("yes") {
        console.log("Great,let's get started!");
    }
        else if ("no") {
            console.log("Take your time, and come back when you're ready.");
        }/*
        else (start === "");
{               start += i + "";
              for (var i = 1; i <= 5; i++);

                }
                mode = prompt("Choose a mode of transportation: car, scooter, bike.");
                console.log("Please try again.");
                }




//prompt user: choose a mode of transportation
    var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
//add if statement mode is nothing, re-prompt until a choice is made
    if (mode !== "") {
    }
    else {
        // (loop syntax: for
        for (i = 1; i <= 5; i++);
        var mode = prompt("Choose a mode of transportation: car, scooter, bike.");
        console.log("Please try again.");
    }
else
    {

    }
    console.log("Great choice.");
}


//__________________

*/






