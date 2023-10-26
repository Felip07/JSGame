const player = document.getElementById("player"); // Seleciociona player como elemento
const bg = document.getElementById("container"); // Seleciona fundo como elemento
let posX = 0; // Posiçao X incial
let posY = 0;
let moveLeft = false;
let moveRight = false;
let direction = 1;
let speed = 0;
let running = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "ArrowLeft") {
    moveLeft = true;
  } else if (event.key === "d" || event.key === "ArrowRight") {
    moveRight = true;
  }
  speed = running ? 1 : 10;
  movement();
});

document.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "ArrowLeft") {
    moveLeft = false;
  } else if (event.key === "d" || event.key === "ArrowRight") {
    moveRight = false;
  }
  speed = running ? 1 : 10;

  if (!running) {
    speed = 0;
  }
});

// Movimentação e Colisão
function movement() {
  const playerWidth = player.clientWidth;
  const bgWidth = bg.clientWidth;

  if (moveLeft) {
    console.log("left");
    direction = -1;
    posX -= speed;
  } else if (moveRight) {
    console.log("right");
    direction = 1;
    posX += speed;
  }

  if (posX < 0) {
    posX = 0;
    console.log("colidiu!");
  } else if (posX + playerWidth > bgWidth) {
    posX = bgWidth - playerWidth;
    console.log("colidiu!");
  }

  player.style.left = posX + "px";
  player.style.transform = `scaleX(${direction})`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    running = true;
    console.log("running!");
    speed = 10;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    running = false;
    console.log("not running!");
    speed = 1;
  }
});

function updateXPosition() {
  movement();
  requestAnimationFrame(updateXPosition);
}

updateXPosition();
