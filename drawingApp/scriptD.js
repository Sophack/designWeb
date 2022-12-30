const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//initial size: 
let size = 30; 

canvas.addEventListener('mousedown', () => {

});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2*Math.PI); //creates an arc (circle) 
    //stroke and fill methods to draw
    ctx.stroke();
    ctx.fill();
}

//need a function that keeps drawing 

drawCircle(75, 50);

//optional "counterclockwise" = False is default, and indicates clockwise, while true indicates counter-clockwise
