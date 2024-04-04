var topPosition = 50;
var leftPostiotion = 0;


var ball = document.getElementById('ball')
ball.style.position = "absolute"

setInterval("ballMove()", 100)
function ballMove(){

ball.style.left = leftPostiotion+"px"
ball.style.top = topPosition+"px"

topPosition +=35
leftPostiotion+=35

if(leftPostiotion>= window.innerWidth -70){
    topPosition = 50;
    leftPostiotion = 0;

}
}