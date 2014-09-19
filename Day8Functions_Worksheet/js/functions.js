//Debbie Walker, September 19, 2014, Web Programming Fundamentals
//- Lecture 00, Day 7 Functions

//Function Practice

var fruit = ["grape","pear", "apple", "bananas"];
//loop through to check for unit in array:

var totalFruit = 0;

if(fruit[0] === "grape"){
    totalFruit++;//++ makes te totalFruit variable add 1 unit so that it will loop through by checking
//to see if it equals anything in the array.
}
    console.log(totalFruit);


//Basic For Loop
//for syntax definition (initialization, condition, increment of change)

//INITIALIZATION
//i=0, this means that initialization equals index 0 in the array.
//CONDITION
//i<fruit.length, fruit.length is a method that gives the array fruit the container
//counts (which are variables and equations)
//INCREMENT OF CHANGE
//i++, is the increment that you want the loop to check. So i++ would be what ever i=#
//plus 1 each time

//this is the syntax for it
for(var i=0; i<fruit.length ; i++){
    //for loop initializes the variable i, sets a conditions
    //i is less than 20, and adds increments of change + 4
    console.log("i = " + fruit[i]);
    //show the value of i
    //runs as long as i is less than 20
}

//here is what councils:
//i = grape
//i = pear
//i = apple
//i = bananas

//methods and functions are essentially the same thing

//____________

//funcName(argument1, argument2);

//function funcName (parameter1, parameter2){
    //code the function runs;
//}

//arguments are the same as the parameters inside the function.

//ICE CREAM FACTORY
//(variable) var (variable nickname) boxes = (variable type) ie. 1. number#,
// 2. boolean{true/false}, 3. string"word" or "#", 4. array["word", or "#",]

//create first function
/*
function printHello(){

    console.log("Hello World!!!");
}
function printMore() {
    console.log("Prints Out More Text!");
}

printHello();
printMore();
    */

function calcArea(){

}

calcArea();
calcArea();
calcArea();
calcArea();
calcArea();
