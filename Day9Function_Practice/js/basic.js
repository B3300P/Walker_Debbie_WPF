/**
 * Created by debbiewalker on 9/22/14.
 */


//1. Regular Function, calculate the area of a rectangle
//2. Anonymous Function, calculate the perimeter of the rectangle




//Normal function example A of triangle area: w*H

/*
var width = 90;
var height = 8;
var a = rectangleArea(width, height);

console.log(a);

function rectangleArea(w,h){
        var area = w*h;
        return area;
}
*/

//Anonymous function example P of perimeter of rectangle: 2w*2L


var width = 6;
var length = 2;



var rectangleP = function(w,l){
    var perimeter = (w*l)*2;
    return perimeter;

}

var p = rectangleP(width,length);
console.log(p);