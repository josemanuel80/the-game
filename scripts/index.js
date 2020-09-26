
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
let headPosition = 220;
//create the snake

const addsnake = (index) => cells[index].classList.add('snake');

//addsnake(2);
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
        headPosition = headPosition - width;
      }
      break;
    case 'ArrowRight':
      if (x < width - 1) {
        headPosition++;
      }
      break;
    case 'ArrowDown':
      if (y < width - 1) {
        headPosition = headPosition + width;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        headPosition--;
      }

      break;
    default:
      console.log('Eso no es una flecha flaco');
      break;
  }
  addsnake(headPosition);
};

//addSnake(headPosition);

window.addEventListener('keyup', handleKeyPress);
