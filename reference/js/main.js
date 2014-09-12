/*
var bowl = "shell";  //var is variable, bowl is the name of the variable, = assignment

// operator and shell is the value
var helloWord = "Hello World!"; // hellowWorld is a variable name, and "Hello World!"
// is a string
// Declaration bowl = x
var bowlArray = ["ball", "shell", helloWord]; // This is an example of an array
console.log(bowlArray); // This is how to print your information

//Problem: What is the average age of x people?

var Jeff= 28; // Jeff is a name of a variable holding an integer/number (which is a
// type of value) // There are three types of values; boolean, integer and string
var Jen=12; // SAME FOR ALL FOUR VARIABLES, they are INTEGERS/numbers so that I'm
// clear!!!!
var Mike=29;
var Debbie=100;
var groupArray = [Jeff, Jen, Mike, Debbie]; // This is an example of an array; must be in brackets;
// they are not strings, they are variables
var average = (Jeff + Jen + Mike + Debbie) / groupArray.length;// the mathematical
// equation for the problem which is the average age of 4 people is the addition of
// all four divided by the same number of people
// groupArray.length this code is used to dived a variable into itself - for example
// groupArray = 4 and .length divides groupArrays total by that number "4"
console.log("average: " + average);
/* Anything between the a forward slash and asterisks and the the asterisks and the
forward slash
*
*


//$3000,000.average (NEED TO LEARN THIS LATER - learned it accidently).

// Problem: After the move to Florida, I just found a lock-box from our last garage sale.
//I need to figure out what the total is.

//Given:
//There are 72 $1s.
//There are 12 $5s.
//There are 27 $10s.

// Declaration:
var oneDollars = 72;
var fiveDollars = 12;
var tenDollars = 27;
// Expression: x + y + z = w
var total = oneDollars + fiveDollars + tenDollars;
// Print expression to browser.
console.log ("The total in the lock box was $" + total + ".00.");


// Problem: The client wants a website built but only has a $3,000 budget.
//How many hours will the team be able to work on this site without going over budget?

//Given:
//A Designer is $75 an hour.
//A Developer is $100 an hour.
//A Project manager is $75 an hour.
//A Writer is $75 an hour.
//A budget = $3000


// Declaration
var designer = 75
var developer = 100
var projectManager = 75
var writer = 75
var budget = 3000
var day2 = 24
// Expression: average the total cost per hour for two-day website build.
// labor / budget
var labor = designer + developer + projectManager + writer;
var total = labor;
// Expression: labor / budget
var totalHours = Math.round(budget / total);

console.log("The total labor of the team will be $" + labor + ".00 an hour to develop" +
    " a website. With a budget of $" + budget + ".00 the team will be able to work " +
    totalHours + " hours.")

*/

//Problem: What color of bath would you like?

//Question:
// 1. What's your favorite color?,
// 2. Would you like to add bubbles?
// 3. What scent would you like?
//Answer: colors;
// 1. pink, yellow, blue, purple
// 2. yes or no
// 3. bubble gum, sunshine, ocean, grape soda
//Comments:
// 1. RANDOM Lovely color choice., That's my favorite color too., That fits your mood perfectly.
// 2. yes; Bubbles make an ordinary day extraordinary no; Simple is very zen.
// 3. Your fragrance will enhance any room you step into.

// Equations needed:
var colorChoices = ["pink", "yellow", "blue", "purple"];
var color = prompt("What's your favorite color?", colorChoices);

var bubbles = ("Would you like bubbles in your bath?");
if (bubbles == "yes" || bubbles == "y") {
    greeting = "Great choice, bubbles make an ordinary day extraordinary!";
} else {
    greeting = "Sometimes simple can be so very zen.";
}
var scentChoice = ["bubble gum", "sunshine", "ocean breeze", "lavender"];
var scent = prompt("What scent would you like?", scentChoice);


var scent = (Math.floor ["bubble gum", "sunshine", "ocean breeze", "lavender"]);
<%

Randomize
response.write(Rnd)

%>