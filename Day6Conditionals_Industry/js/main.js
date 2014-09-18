/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Industry */


//Clock in.

//You need to electronically clock yourself in
//between 08:00 and 17:00 in order to get paid for the day.
//Assume you can only clock in on the hour.

//alert user to input action: do something...
alert("eCLOCK-In");
//prompt user id...
var userId = prompt("Enter your user ID.");
var id = "123";
//declare userName
var userName = "SuperStar";
//if condition 1
if(userId === id){
    console.log("Welcome back " + userName + ".");
    //if condition 2
}else if(isNaN(userId) != true){
    console.log("Not a valid userId.");
    //else if nothing is entered...
}

var scheduleTime = prompt("Please schedule in military time for instance; 1 pm = 13.");
//input time...
//alert user of time constraints...
alert("If time is clocked after 17:00, it will be applied to the next business day.");

if((time >=8 || time <=17)) {
    console.log("Thank, we received your time.");

}else if (scheduleTime != scheduleTime){
       console.log("Sorry, that is not a scheduled time, please re-enter.");
       // }
      //     else if (scheduleTime === "") {
       //  for (i = 0; i <= 5; i++);
        //    console.log("Please try again.");
}



*/

