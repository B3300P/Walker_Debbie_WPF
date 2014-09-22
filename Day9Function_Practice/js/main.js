/**
 * Created by debbiewalker on 9/22/14.
 */


/**
 * Created by debbiewalker on 9/22/14.
 */


//random number function
//loop

var min = 10;
var max = 100;

var ranNum=randomizer(min,max);
console.log(ranNum);

function randomizer(mn,mx){

    var randomNumber = Math.round(Math.random() * (mx-mn)+mn);//math to round up, math random parameters
    return randomNumber;


}

for(var i = 0; i<5; i++){
    console.log(randomizer(min,max));


}