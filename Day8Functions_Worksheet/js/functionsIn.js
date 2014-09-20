/**
 * Created by debbiewalker on 9/19/14.
 */

//arguments & parameters
//arguments - goes into functions
//parameters - catches the argument in the function
/*

//Allows us to make our code more flexible!

var width = 10;
var height = 10;
//call the function and pass in arguments
calcArea(width,height);

//create function and pass arguments into parameters.

    function calcArea (w,h){
    var area = w*h;
    console.log(area);

    return area;
}
//make sure these are outside the function


var funcResult = calcArea(20,20);

//run the function again
/*calcArea(10,10);


//this adds returns
console.log (funcResult);

//__________________________

var yearsOld = 8;
var dogAge = 7;

calcAge(yearsOld * dogAge);

    function calcAge(y,d){
    var age = y*d;
    console.log(calcAge(15,));

}


//_______________________

//1. calculate the circumference of a circle

//2. variable for radius

//3. creating function

//FUNCTION CALCULATION

    //using the formula
//xxxxx

//returning value
        //return XXXX

//4. calling function
        //var result =

    //logging to console


*/





//when you call it can also be a variable like://to get user to input (prompt)
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
