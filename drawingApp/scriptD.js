const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase"); 
const decreaseBtn = document.getElementById("decrease"); 
const sizeEl = document.getElementById("size");

//initial size:
let size = 10;
let isPressed = false;

canvas.addEventListener('mousedown', () => {
  isPressed = true;
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    //the offset method works with MouseEvent (above) on coordinates before and after mouseclick
    const x = e.offsetX;
    const y = e.offsetY;

    drawCircle(x, y);
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

increaseBtn.addEventListener('click', () => {
        //when we increase we want: 
        size += 5; 
        //reset if its too big
        if(size > 50) {
            size=50;
        }
        updateSize();
});

decreaseBtn.addEventListener('click', () => {
        //when size decreases we want 
        size -+ 5; 
        if(size < 5) {
            size=5;
        }
        updateSize();
});

function updateSize() {
    sizeEl.innerText = size;
}

//below commented is no longer needed because x & y default values have been assigned
// drawCircle(50, 50);

//optional "counterclockwise" = False is default, and indicates clockwise, while true indicates counter-clockwise
//need a function that keeps drawing
//below function is called every frame (draw circle always)

// function draw () {
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     //changed below to x & y values with ++ to increase by 1
//     //moves the circle from left to right
//     drawCircle(x,y);

//     requestAnimationFrame(draw);
// }

// draw();

//also need the rectangle to cling to the box
//sources https://github.com/bradtraversy/vanillawebprojects/tree/master/breakout-game
//initially the variables had number values assigned and then the default values were added after let size
