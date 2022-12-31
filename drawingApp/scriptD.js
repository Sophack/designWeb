const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//initial size: 
let size = 30; 
let x = 50;
let y = 50;

canvas.addEventListener('mousedown', () => {

});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2*Math.PI); //creates an arc (circle) 
    //stroke and fill methods to draw
    ctx.stroke();
    ctx.fill();
}


//below commented is no longer needed because x & y default values have been assigned
// drawCircle(50, 50);

//optional "counterclockwise" = False is default, and indicates clockwise, while true indicates counter-clockwise
//need a function that keeps drawing 
//below function is called every frame (draw circle always)


function draw () {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //changed below to x & y values with ++ to increase by 1
    //moves the circle from left to right 
    drawCircle(x++,y);
    
    requestAnimationFrame(draw);
}

draw();

//also need the rectangle to cling to the box
//sources https://github.com/bradtraversy/vanillawebprojects/tree/master/breakout-game
//initially the variables had number values assigned and then the default values were added after let size 