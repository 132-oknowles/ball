var topPosition = 50;
var leftPosition = 0;


var ball = document.getElementById('ball')
ball.style.position = "absolute"




var intervalID = setInterval("ballMove()", 100)

document.getElementById('ball').addEventListener('click', function(){
    document.getElementById('ball').src = "explostion.webp"
    clearInterval(intervalID)
})

document.getElementById('slider').addEventListener("input", function(){

    speed = document.getElementById('slider').value;

    clearInterval(intervalID)
    intervalID = setInterval("ballMove()", speed);


})
function ballMove(){

ball.style.left = leftPosition+"px";
ball.style.top = topPosition+"px";

topPosition = Math.random() * (window.innerHeight - 200)


leftPosition = Math.random() * (window.innerWidth - 200)
}