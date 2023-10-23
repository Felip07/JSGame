const player = document.getElementById("player");
const bg = document.getElementById("background");
let posX = 0;
let rotation = 0;
speed = 10;

document.addEventListener("keydown", movement);

function movement(event) {
  const playerWidth = player.clientWidth;
  const bgWidth = bg.clientWidth;

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
    rotation -= 180;
    console.log(rotation);
  } else if (event.key === "d") {
    player.style.transform;
    console.log(rotation);
  }

  player.style.left = posX + "px";
  player.style.top = posY + "px";
  rotation = 0;
}
