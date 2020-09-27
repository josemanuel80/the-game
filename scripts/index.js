
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

//const foodX = Math.floor(Math.random() * 20);
//const foodY = Math.floor(Math.random() * 12);
const foodposition = Math.floor(Math.random() * 240);
//foodposition = 20;
addFood(foodposition);
headPosition = 0;
let x = 0;
let y = 0;

//movement

const handleKeyPress = (event) => {
  const { key } = event;

  // const x = headPosition % 10;
  // const y = Math.floor(headPosition / 10);
  //window.setInterval(function () {
  switch (key) {
    case "ArrowUp":
      if (y > 0) {
        y = y - 1;
        // clearInterval(interval);
        removesnake(headPosition);
        //interval = setInterval(function () {
        headPosition = headPosition - width;
        addsnake(headPosition);
        //}, 1000);
      }
      break;
    case "ArrowRight":
      if (x < 20) {
        x = x + 1;
        removesnake(headPosition);
        headPosition++;
        addsnake(headPosition);
      }
      break;
    case "ArrowDown":
      if (y < 12) {
        y = y + 1;
        removesnake(headPosition);
        headPosition = headPosition + width;
        addsnake(headPosition);
      }
      break;
    case "ArrowLeft":
      if (x > 0) {
        x = x - 1;
        removesnake(headPosition);
        headPosition--;
        addsnake(headPosition);
      }

      break;
    default:
      break;
  }
  console.log(x, y);
  console.log(headPosition);
  addsnake(headPosition);
  //}, 1000);
};

//let interval = setInterval(function () {

//}, 1000);

//addSnake(headPosition);

window.addEventListener("keydown", handleKeyPress);


