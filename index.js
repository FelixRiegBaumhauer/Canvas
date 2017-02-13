
//the setup
var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff00ff";


//fxn to find your location, and to place a rectangle
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    x=x-13;
    x-=50;
    y=y-87;
    y-=50;
    ctx.fillRect(x,y,100,100);
}


//the clear
document.getElementById("clear").addEventListener("click", function(){
    ctx.clearRect(0,0,500,500);
});
