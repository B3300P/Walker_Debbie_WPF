/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 9 Functions */


//Parameters for function: Calculate the circumference of a circle.
//naming/calling the function
var result = circumference();

//creating function
function circumference(){
    var radius = prompt("Enter the radius of the circle","");
    var circle = 2 * Math.PI * radius;
    return ("The circumference is " + Math.ceil(circle) + ".");

}

console.log(result);


/*

//when you call it can also be a variable like://to get user to input (prompt), but make sure
//to validate the prompt when there is no answer
var results = learning();

//"leaning()" is what I would do to call the functions (kind of like a variable, it's an
//action MACHINE (container that can do stuff - functions).
learning();//calling function is getting stuff out of the function (this would be me calling
//the ice cream factory for products.


//create the name of the function: the function is the ice cream factory
//(t) = parameter for input (this is the argument; so for an area there would be two parameter
//whereas a dog's age would only be one parameter
function learning(t){
    //between curly brackets is the work being done
    //note from boss to workers to output this product
    var rules = ("Follow the instructions.");
    var practice = (" Or else you'll flunk.");
    var success = rules + practice;
    //tell the workers to return success
    return success;

}

//console results
console.log(results);

*/