/**
 * Created by debbiewalker on 9/22/14.
 */


/**
 * Created by debbiewalker on 9/22/14.
 */


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

