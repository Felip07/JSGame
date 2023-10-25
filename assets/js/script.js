const player = document.getElementById("player");
const bg = document.getElementById("container");
let posX = 0;
let posY = 0;
let side = 0;
let moveLeft = false;
let moveRight = false;
let speed = 10;

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "ArrowLeft") {
    moveLeft = true;
  } else if (event.key === "d" || event.key === "ArrowRight") {
    moveRight = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "ArrowLeft") {
    moveLeft = false;
  } else if (event.key === "d" || event.key === "ArrowRight") {
    moveRight = false;
  }
});

function movement() {
  const playerWidth = player.clientWidth;
  const bgWidth = bg.clientWidth;

  if (moveLeft) {
    posX += speed;
  }
  if (moveRight) {
    posX -= speed;
  }

  switch (event.key) {
    case "w":
      console.log("cima");
      posY -= speed;
      break;
    case "s":
      console.log("baixo");
      posY += speed;
      break;
    case "a":
      console.log("esquerda");
      posX -= speed;
      break;
    case "d":
      console.log("direita");
      posX += speed;
      break;
  }

  if (event.key === "a") {
    side -= 180;
    console.log(side);
  } else if (event.key === "d") {
    player.style.transform;
    console.log(side);
  }

  player.style.left = posX + "px";
  player.style.bottom = posY + "px";
  side = 0;
}
