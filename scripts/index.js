
// create the grid
const width = 20;
const height = 12;
const grid = document.querySelector('.grid');
const cells = [];
for (i = 0; i < 240; i++) {

  const cell = document.createElement('div', id = i);
  grid.appendChild(cell);
  // cell.innerText = id;
  cells.push(cell);

}

//create the snake

const addsnake = (index) => cells[index].classList.add('snake');

//addsnake(2);

headPosition = 220;
const x = headPosition % 10;
const y = Math.floor(headPosition / 10);

//movement

const handleKeyPress = (event) => {
  const { key } = event;

  const x = headPosition % 10;
  const y = Math.floor(headPosition / 10);

  // 3 - Mover a Pikachu de un cuadro al otro dependiendo la orientación y la dirección
  //  3.1  ¿Cómo puedo saber en que coordenas Pikachu se encuentra?

  //removePika(headPosition);

  switch (key) {
    case 'ArrowUp':
      if (y > 0) {
        moveUp();
      }
      break;
    case 'ArrowRight':
      if (x < width - 1) {
        moveRight();
      }
      break;
    case 'ArrowDown':
      if (y < width - 1) {
        moveDowun();
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        moveLeft();
      }

      break;
    default:

      break;
  }
  addsnake(headPosition);
};

function moveUp() {
  window.setInterval(function () {
    headPosition = headPosition - width;
    addsnake(headPosition);
  }, 1000);
}
function moveDown() {
  window.setInterval(function () {
    headPosition = headPosition + width;
    addsnake(headPosition);
  }, 1000);
}
function moveLeft() {
  window.setInterval(function () {
    headPosition--;
    addsnake(headPosition);
  }, 1000);
}
function moveRight() {
  window.setInterval(function () {
    headPosition++;
    addsnake(headPosition);
  }, 1000);
}
//addSnake(headPosition);

window.addEventListener('keydown', handleKeyPress);
