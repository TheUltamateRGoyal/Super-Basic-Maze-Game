const width = 6;
const height = 8;

const layout = [
  'W','W','W','W','W','W',
  'W',' ',' ',' ',' ','W',
  'W',' ','W','W',' ','W',
  'W',' ','W',' ',' ','W',
  'W',' ','W',' ','W','W',
  'W','P','W',' ','W','W',
  'W','W','G',' ','W','W',
  'W','W','W','W','W','W',
];

let playerIndex = layout.indexOf('P');
const maze = document.getElementById("maze");

function renderMaze() {
  maze.innerHTML = '';
  layout.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');

    if (cell === 'W') {
      div.classList.add('wall');
    } else if (cell === 'P') {
      div.classList.add('player');
      div.textContent = '😀';
    } else if (cell === 'G') {
      div.classList.add('goal');
      div.textContent = '🏁';
    }

    maze.appendChild(div);
  });
}

function movePlayer(direction) {
  let targetIndex = playerIndex;

  if (direction === 'ArrowUp') targetIndex -= width;
  else if (direction === 'ArrowDown') targetIndex += width;
  else if (direction === 'ArrowLeft') targetIndex -= 1;
  else if (direction === 'ArrowRight') targetIndex += 1;

  if (layout[targetIndex] !== 'W' && targetIndex >= 0 && targetIndex < layout.length) {
    if (layout[targetIndex] === 'G') {
      document.getElementById("message").textContent = "🎉 You won!";
    }

    layout[playerIndex] = ' ';
    layout[targetIndex] = 'P';
    playerIndex = targetIndex;
    renderMaze();
  }
}

document.addEventListener("keydown", (e) => {
  movePlayer(e.key);
});

renderMaze();
