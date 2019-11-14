const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
}

function onMouseDown(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  console.log(x, y);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
}
