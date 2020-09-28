
// create the grid
const width = 20;
const height = 12;
const grid = document.querySelector(".grid");
const cells = [];
for (i = 0; i < 240; i++) {
  const cell = document.createElement("div", (id = i));
  grid.appendChild(cell);
  cell.innerText = id;
  cells.push(cell);
}

//create the snake

const addsnake = (index) => cells[index].classList.add("snake");
const removesnake = (index) => cells[index].classList.remove("snake");

const addFood = (index) => cells[index].classList.add("food");

const eat = (index) => snake[index].classlist.add("snake");

//const foodX = Math.floor(Math.random() * 20);
//const foodY = Math.floor(Math.random() * 12);
const foodposition = Math.floor(Math.random() * 240);
//foodposition = 20;
addFood(foodposition);
headPosition = 0;
let x = 0;
let y = 0;

//const snake = [];


function gameOver() {
  document.body.innerHTML = "GAME OVER";
}


//movement



const handleKeyPress = (event) => {
  const { key } = event;

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
  }


  // const x = headPosition % 10;
  // const y = Math.floor(headPosition / 10);
  window.setInterval(function () {
    switch (key) {
      case "ArrowUp":
        if ((y >= 0) && repeatUp) {

          y = y - 1;
          if (y === -1) {
            gameOver();
          }
          clearInterval(key);
          removesnake(headPosition);

          headPosition = headPosition - width;


          addsnake(headPosition);

        }
        break;
      case "ArrowRight":
        if ((x < 20) && repeatRight) {
          x = x + 1;
          clearInterval(key);
          removesnake(headPosition);
          headPosition++;
          addsnake(headPosition);
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
          clearInterval(key);
          removesnake(headPosition);
          headPosition = headPosition + width;
          addsnake(headPosition);

        }
        break;
      case "ArrowLeft":
        if ((x >= 0) && repeatLeft) {
          x = x - 1;
          clearInterval(key);
          removesnake(headPosition);
          headPosition--;
          addsnake(headPosition);
          if (x === -1) {
            gameOver();
          }
        }

        break;
      default:
        break;
    }

    /*if (headPosition === foodposition) {
      eat(foodposition);
      // snake.push(eat);
    }*/

    console.log(x, y);
    console.log(headPosition);
    addsnake(headPosition);
  }, 1000);
};

//let interval = setInterval(function () {

//}, 1000);

//addSnake(headPosition);

window.addEventListener("keydown", handleKeyPress);


