/**
 * Created by debbiewalker on 9/22/14.
 */


/**
 * Created by debbiewalker on 9/22/14.
 */

/*
//random number function
//loop

var min = 10;//variable minimum number
var max = 100;//variable maximum number

var ranNum=randomizer(min,max);//variable random number
console.log(ranNum);//print

function randomizer(mn,mx){//function

    var randomNumber = Math.round(Math.random() * (mx-mn)+mn);//math to round up, math random parameters
    return randomNumber;


}

for(var i = 0; i<5; i++){
    console.log(randomizer(min,max));
}

//This is a Function!
function calcAreaF(width, height){

    var area = width * height;
    return area;
}



//This is a Procedure!
//Just a list of steps to do
function calcAreaP(widthdh, height){

    var area = width * height;
    console.log(area);
}


///This is an example of a normal function
function functionName(parameters){
    //code to execute;
    //return value;
}

//Anonymous function
var functionName = functions(parameters){ //in this instance the variable becomes the functionName
    //code to execute;
    //return value;
}

functionName(arguments);
    */

//___________________

/*
//Normal function example A of triangle area:

//2. create variables for the function
var base=10;
var height = 20;

triangleArea(base,height);//3. add arguments

//7. create a print by making the function a variable
var a = triangleArea(base, height);
//8. print
console.log(a)

//1.name the function
function triangleArea(b,h){//4.it does not matter what you call the argument here
    var area = .5*b*h; //5. add var
    return area;//6. call the function to do the action

}
*/


//Anonymous function example B of triangle area:

//2. create variables for the function
var base=10;
var height = 20;
//1. create a function and name it at the same time...
var triangleA = function(b,h){
    var area = .5*b*h;//3. add variable
    return area;//6. call the function to do the action
}

//4.you have to create a unique name when invoking because it can't use the function name
var anon = triangleA(base,height);
//5.print
console.log(anon);


//__________________

/*
//PUSH, POP and Link are methods of arrays

//1. create an array...
var testArray = ["banana", "apple", "peach", "pear"];

//2. how can you find out how many are in your array?
console.log(testArray.length);//array name

//3. how many are in it?
console.log(testArray);//number of items in array

//4. push (add) a new item to the end of the array
testArray.push("carrot", "toast");
console.log(testArray);

//6. change unit in array
testArray[4]="Pringle";

//5. pop (take away) removes last item from the array
testArray.pop();
console.log(testArray);

*/