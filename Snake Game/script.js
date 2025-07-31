const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;
let score = 0;

function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  ctx.fillStyle = 'lime';
  for (let part of snake) {
    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
  }

  // Draw food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

  moveSnake();

  if (checkCollision()) {
    alert("Game Over! Final Score: " + score);
    document.location.reload();
  }

  document.getElementById('score').innerText = 'Score: ' + score;
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    placeFood();
  } else {
    snake.pop();
  }
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
  };
}

function checkCollision() {
  const head = snake[0];

  if (head.x < 0 || head.y < 0 || head.x >= tileCount || head.y >= tileCount) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      return true;
    }
  }

  return false;
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (dy === 0) { dx = 0; dy = -1; }
      break;
    case 'ArrowDown':
      if (dy === 0) { dx = 0; dy = 1; }
      break;
    case 'ArrowLeft':
      if (dx === 0) { dx = -1; dy = 0; }
      break;
    case 'ArrowRight':
      if (dx === 0) { dx = 1; dy = 0; }
      break;
  }
});

setInterval(draw, 150);
