/*Debbie Walker, September 13, 2014, Web Programming Fundamentals
 - Lecture 00, Day 6 Conditionals, Industry */


//Manual clock in.

//You need to manually clock yourself in between 08:00 and 17:00 in order to get paid for the day.

//input action: do something...
//alert user of tool...
alert("eCLOCK");
//alert user of time constraints...
alert("If time is clocked after 17:00, it will be applied to the next business day.");
//prompt user id...
var userId = prompt("Enter your user ID.");
var id = "123";
//declare userName
var userName = "SuperStar";
if(userId = id) {
    console.log("Welcome back" + userName + " .");
}else if(userId != id){
            console.log("Please re-enter your user ID.");
}


//declare...
//id number

//declare time
    var time = 0;
//declare unscheduled time
    var closed = (time <7 || time >18);
//declare scheduled time
    var scheduleTime = (time >=8 || time <=17);

//input time...
scheduleTime = prompt("Please schedule in military" + time + " for instance; 1 pm = 13.");
//ask if/then statements...
//console.log("Thank you, we are calculating your schedule now.")
if(scheduleTime) {
    console.log("Thank, we are calculating your schedule now.");
}else if (scheduleTime != scheduleTime){
       console.log("Sorry, that is not a scheduled time, please re-enter.");
       // }
      //     else if (scheduleTime === "") {
       //  for (i = 0; i <= 5; i++);
        //    console.log("Please try again.");
}





