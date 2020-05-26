const rulesButton = document.getElementById('rules-btn');
const closeButton = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

// ! Create Ball Props :->

const ball =
{
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4
};

// ! Create Paddle Props :->

const paddle =
{
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0
};

// ! Create Brick Props :->

const brickInfo =
{
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true
};

// ! Create Bricks :->

const bricks = [];

for (let i = 0; i < brickRowCount; i++)
{
  bricks[i] = [];

  for (let j = 0; j < brickColumnCount; j++)
  {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// ! Draw Ball on Canvas :->

function drawBall()
{
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// ! Draw Paddle on Canvas :->

function drawPaddle()
{
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// ! Draw Score on Canvas :->

function drawScore()
{
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// ! Draw Bricks on Canvas :->

function drawBricks()
{
  bricks.forEach( column => 
  {
    column.forEach( brick =>
    {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}

// ! Move Paddle on Canvas :->

function movePaddle() {
  paddle.x += paddle.dx;

  // ! Wall Detection :

  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

// ! Move Ball on Canvas :->

function moveBall()
{
  ball.x += ball.dx;
  ball.y += ball.dy;

  // ! Wall Collision (Right/Left) :

  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1;                                                           // * NOTE -> ball.dx = ball.dx * -1
  }

  // ! Wall Collision (Top/Bottom) :

  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  // console.log(ball.x, ball.y);

  // ! Paddle collision :

  if ( ball.x - ball.size > paddle.x && ball.x + ball.size < paddle.x + paddle.w && ball.y + ball.size > paddle.y) {
    ball.dy = -ball.speed;
  }

  // ! Brick Collision :
  
  bricks.forEach( column =>
  {
    column.forEach( brick =>
    {
      if (brick.visible)
      {
        if (
          ball.x - ball.size > brick.x &&                         // * NOTE :- Left Brick Side Check
          ball.x + ball.size < brick.x + brick.w &&               // * NOTE :- Right Brick Side Check
          ball.y + ball.size > brick.y &&                         // * NOTE :- Top Brick Side Check
          ball.y - ball.size < brick.y + brick.h                  // * NOTE :- Bottom Brick Side Check
        )
        {
          ball.dy *= -1;
          brick.visible = false;

          increaseScore();
        }
      }
    });
  });

  // ! Hit Bottom Wall -> Lose :

  if (ball.y + ball.size > canvas.height)
  {
    showAllBricks();
    score = 0;
  }
}

// ! Increase score :->

function increaseScore()
{
  score++;

  if (score % (brickRowCount * brickRowCount) === 0) 
    showAllBricks();
}

// ! Make All Bricks Appear :->

function showAllBricks()
{
  bricks.forEach( column => {
    column.forEach(brick => (brick.visible = true));
  });
}

// ! Draw everything :->

function draw()
{
  // ! Clear Canvas :
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// ! Update Canvas Drawing & Animation :->

function update()
{
  movePaddle();
  moveBall();

  // ! Draw Everything :

  draw();

  requestAnimationFrame(update);
}

update();

// ! Keydown Event :->

function keyDown(event)
{
  if (event.key === 'Right' || event.key === 'ArrowRight') 
    paddle.dx = paddle.speed;
  
  else if (event.key === 'Left' || event.key === 'ArrowLeft') 
    paddle.dx = -paddle.speed;

}

// ! Keyup Event ;->

function keyUp(event)
{
  if ( event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'Left' || event.key === 'ArrowLeft') 
    paddle.dx = 0;
}

// ! Keyboard Event Handlers :->

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// ! Rules and Close Event Handlers :->

rulesButton.addEventListener('click', () => rules.classList.add('show'));
closeButton.addEventListener('click', () => rules.classList.remove('show'));
