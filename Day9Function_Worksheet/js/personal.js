/**
 * Created by debbiewalker on 9/22/14. Functions
 */
//cake calculator

    //1 serving size = x
/*
 Write down the width, length and height of your square or rectangular cake if you are unable to find the number easily on a serving chart or by using the serving calculator. Use a handheld or computer-based calculator and enter the width. Multiply the width by the length of your cake. Multiply that total by the height of your cake. The number you get will be the cubic inches of your cake. Divide that number by 8, since each serving will total 8 cubic inches, and the final number will reflect the number of servings your cake will yield.

 Read more : http://www.ehow.com/how_2268970_calculate-wedding-cake-servings.html






A ternary
An else if
    An anonymous function
    A normal "named" function
    An expression with two arithmetic operators
A function with three parameters.
    At least one logical operator
    */


//2. create variables for the function
var length = 9;
var width = 30;
var height = 20;

var cakeArea = (length * width * height);
console.log(cakeArea);
cakeArea = prompt("Enter your cake dimensions: (length, width, height).");


var small = cakeArea <12;
var medium = cakeArea >12 <=20;
var large = cakeArea > 20 <=30;

var specialOrder = cakeArea > 30;



/*

if(specialOrder = prompt("This is a special order; please call for details."));


    function inputValidation(){
    else(cakeDimensions==="") {
        alert("Please make sure to enter all three dimensions of the cake; length, width and height.");
        return false;
    }
    else{
        return true;
    }
}
console.log(cakeDimensions);
*/


/*
var area = prompt("Enter your cake dimensions: (length, width, height).");

//1.name the function
function cakeVol(l,w,h){   //4.parameters
    var volume = (l*w*h);  //5. add variable code

    return volume;         //6. call the function to do the action

}

var cake = cakeVol=(width, length, height);//3. add arguments
console.log("Based on the cake");



*/

/*




 function validate() {
 if(document.form1.textinput.value=='')
    {
    alert('Fill the Input box before submitting');
    return false;
    }
        else	{
        return true;
        }
    }

 if(cake <= 10 === "serving 6")

 //var serving=1;
 //var array();


 */




