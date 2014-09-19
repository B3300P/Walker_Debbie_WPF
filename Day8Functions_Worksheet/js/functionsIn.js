/**
 * Created by debbiewalker on 9/19/14.
 */

//arguments & parameters
//arguments - goes into functions
//parameters - catches the argument in the function


//Allows us to make our code more flexible!

var width = 10;
var height = 10;
//call the function and pass in arguments
calcArea(width,height);

//create function and pass arguments into parameters.

    function calcArea (w,h){
    var area = w*h;
    console.log(area);
}
//run the function again
calcArea(10,10);