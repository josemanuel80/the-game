
// create the grid
const width = 20;
const height = 12;
let size = 3;
const grid = document.querySelector(".grid");
const cells = [];
for (i = 0; i < 240; i++) {
  const cell = document.createElement("div", (id = i));
  grid.appendChild(cell);
  cell.innerText = id;
  cells.push(cell);
}

//create the snake
const snake = [];
const addsnake = (index) => cells[index].classList.add("snake");
const removesnake = (index) => cells[index].classList.remove("snake");
const addFood = (index) => cells[index].classList.add("food");
const foodposition = Math.floor(Math.random() * 240);
addFood(foodposition);
headPosition = 0;
let x = 0;
let y = 0;

function gameOver() {
  document.body.innerHTML = "GAME OVER";
}
/*
addsnake(headPosition);

snake.push(headPosition);
*/
let lastDirection = 0;
const handleKeyPress = (event) => {
  const { key } = event;
  if (key != lastDirection) {
    switch (key) {

      case "ArrowUp":
        repeatUp = true;
        repeatDown = false;
        repeatLeft = false;
        repeatRight = false;
        break;
      case "ArrowRight":

        repeatUp = false;
        repeatDown = false;
        repeatLeft = false;
        repeatRight = true;
        break;
      case "ArrowLeft":

        repeatUp = false;
        repeatDown = false;
        repeatLeft = true;
        repeatRight = false;
        break;
      case "ArrowDown":

        repeatUp = false;
        repeatDown = true;
        repeatLeft = false;
        repeatRight = false;
        break;
      default:
        break;
    }
    window.setInterval(function () {
      switch (key) {
        case "ArrowUp":
          if ((y >= 0) && repeatUp) {
            y = y - 1;
            if (y === -1) {
              gameOver();
            }
            headPosition = headPosition - width;
            if (headPosition === foodposition) {
              snake.push(headPosition);
            }
          }
          break;
        case "ArrowRight":
          if ((x < 20) && repeatRight) {
            x = x + 1;
            headPosition++;
            if (headPosition === foodposition) {
              snake.push(headPosition);
            }
            if (x === 20) {
              gameOver();
            }
          }
          break;
        case "ArrowDown":
          // repeatDown = true;
          if ((y <= 11) && repeatDown) {
            y = y + 1;
            if (y === 12) {
              gameOver();
            }
            headPosition = headPosition + width;
            if (headPosition === foodposition) {
              snake.push(headPosition);
            }
          }
          break;
        case "ArrowLeft":
          if ((x >= 0) && repeatLeft) {
            x = x - 1;
            headPosition--;
            if (headPosition === foodposition) {
              snake.push(headPosition);
            }
            if (x === -1) {
              gameOver();
            }
          }
          break;
        default:
          break;
      }
      addsnake(headPosition);

      console.log(x, y);
      console.log(snake);
      console.log(event);
    }, 1000);
    lastDirection = event;
  }
};
window.addEventListener("keydown", handleKeyPress);


