
// create the grid

const width = 20;
const height = 12;
const grid = document.querySelector(".grid");
const cells = [];
for (i = 0; i < 240; i++) {
  const cell = document.createElement("div", (id = i));
  grid.appendChild(cell);
  cells.push(cell);
}

//create the snake and initializations

const snake = [];
const addsnake = (index) => cells[index].classList.add("snake");
const removesnake = (index) => cells[index].classList.remove("snake");
const addFood = (index) => cells[index].classList.add("food");
const removeFood = (index) => cells[index].classList.remove("food");
let foodposition = Math.floor(Math.random() * 240);
headPosition = 0;
snake.push(headPosition);
addsnake(headPosition);
let x = 0;
let y = 0;
let size = 4;
let timer = 1000;
let lastDirection = 0;
addFood(foodposition);

function gameOver() {
  document.body.innerHTML = "GAME OVER";
}

// Main

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
    function clearScreen() {
      for (i = 0; i < 240; i++) {
        removesnake(i);
      }
    }
    window.setInterval(function () {
      clearScreen();
      if (snake.length === size) {
        snake.splice(0, 1);
      }
      snake.forEach(element => {
        addsnake(element);
      });
      switch (key) {
        case "ArrowUp":
          if ((y >= 0) && repeatUp) {
            y = y - 1;
            if (y === -1) {
              gameOver();
            }
            headPosition = headPosition - width;
            if (snake.includes(headPosition)) {
              gameOver();
            }
            snake.push(headPosition);
            if (headPosition === foodposition) {
              removeFood(foodposition);
              foodposition = ((foodposition * 654654) % 240);
              addFood(foodposition);
              size++;
              timer = timer - 50;
            }
            removesnake(headPosition);
          }
          break;
        case "ArrowRight":
          if ((x < 20) && repeatRight) {
            x = x + 1;
            headPosition++;
            if (snake.includes(headPosition)) {
              gameOver();
            }
            snake.push(headPosition);
            if (headPosition === foodposition) {
              removeFood(foodposition);
              foodposition = ((foodposition * 843573567) % 240);
              addFood(foodposition);
              size++;
              timer = timer - 50;
            }
            if (x === 20) {
              gameOver();
            }
            removesnake(headPosition);
          }
          break;
        case "ArrowDown":
          if ((y <= 11) && repeatDown) {
            y = y + 1;
            if (y === 12) {
              gameOver();
            }
            headPosition = headPosition + width;
            if (snake.includes(headPosition)) {
              gameOver();
            }
            snake.push(headPosition);
            if (headPosition === foodposition) {
              removeFood(foodposition);
              foodposition = ((foodposition * 3567567) % 240);
              addFood(foodposition);
              size++;
              timer = timer - 50;
            }
            removesnake(headPosition);
          }
          break;
        case "ArrowLeft":
          if ((x >= 0) && repeatLeft) {
            x = x - 1;
            headPosition--;
            if (snake.includes(headPosition)) {
              gameOver();
            }
            snake.push(headPosition);
            if (headPosition === foodposition) {
              removeFood(foodposition);
              foodposition = ((foodposition * 89238923) % 240);
              addFood(foodposition);
              size++;
              timer = timer - 50;
            }
            if (x === -1) {
              gameOver();
            }
            removesnake(headPosition);
          }
          break;
        default:
          break;
      }
    }, timer);
    lastDirection = event;
  }
};
window.addEventListener("keydown", handleKeyPress);


