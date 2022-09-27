function draw() {
  var canvas = document.getElementById("cartoonCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1000, 700);
  ctx.beginPath();

  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }
  //Moon
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Use a for loop to draw grass
  for (i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.fillStyle = "darkgreen";
    ctx.moveTo(i * 30, 400);
    ctx.lineTo(15 + i * 30, 300);
    ctx.lineTo(30 + i * 30, 400);
    ctx.fill();
  }
  // Use a for loop to draw start
  var canvasSize = canvas.width * canvas.height;
  var starsFraction = canvasSize / 1000;

  for (let i = 0; i < starsFraction; i++) {
    //Set up random elements
    let xPos = random(5, canvas.width - 2);
    let yPos = random(5, canvas.height - 2);
    let size = random(1, 2);

    //Add stars
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(xPos, yPos, size, size);
  }
  //Use to draw a tent 
  let height = 280 * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(400, 300);
  ctx.lineTo(200, 350 - height);
  ctx.closePath();
  ctx.fillStyle = "lightgray";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(500, 300);
  ctx.lineTo(300, 300);
  ctx.lineTo(200, 350 - height);
  ctx.closePath();
  ctx.fillStyle = "gray";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(400, 300);
  ctx.lineTo(200, 350 - height);
  ctx.closePath();
  ctx.stroke();
  // Use to draw a window 
  const window = new Path2D();
  window.rect(150, 185, 50, 50);
  ctx.stroke(window);
  ctx.fillStyle = "lightyellow";
  ctx.fill(window);

  //Some caption text (must be written on the canvas!)
  ctx.font = "50px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Night", canvas.width / 2, canvas.height / 2);

}

document.addEventListener('DOMContentLoaded', draw);
