let boardSize = 17;
let timeCounter = 0;
let board = document.getElementById("board");
let score = document.getElementById("score");
let keyboardInput = document.getElementById("keyboardInput");
let direction = 0;
let foodIsEaten = true;
let snakePosition = { x: Math.floor(boardSize / 2), y: Math.floor(boardSize / 2) };
let foodPosition = { x: 0, y: 0 };
let snakePositions = [];
snakePositions.push(`x${snakePosition.x}y${snakePosition.y}`);

// DrawBoard Function
function drawBoard() {
    for (var x = 0; x < boardSize; x++) {
        for (var y = 0; y < boardSize; y++) {
            board.innerHTML += `<div class="cell" id="x${x}y${y}"></div>`;
        }
        board.innerHTML += "<br>";
    }
}

// ClearBoard Function
function clearBoard() {
    document.querySelectorAll('.cell').forEach(function(cell) {
        cell.className = "cell";
    });
}

// UpdateSnakePosition Function
function updatesnakePosition() {
    switch (direction) {
        case 1:
            snakePosition.y = snakePosition.y - 1;
            break;
        case 2:
            snakePosition.y = snakePosition.y + 1;
            break;
        case 3:
            snakePosition.x = snakePosition.x + 1;
            break;
        case 4:
            snakePosition.x = snakePosition.x - 1;
            break;
        default:
            break;
    }

    snakePositions.shift();
    snakePositions.push(`x${snakePosition.x}y${snakePosition.y}`);
}

// GameLoop Function
function gameLoop() {

    updatesnakePosition();
    collisionCheck();
    clearBoard();
    drawFood();
    drawSnake();
    snakeEatsFood();

    timeCounter++;
    var timeoutTime = 550 - snakePositions.length * 30 - timeCounter / 2;
    if (timeoutTime < 100) {
        timeoutTime = 100;
    }
    setTimeout(gameLoop, timeoutTime);
}

function gameOver(dieReason) {
    document.getElementById("gameover").style.display = "block";
    document.getElementById("score").value = snakePositions.length;
    document.getElementById("gameSummary").innerHTML = `Oh no! You <b>${dieReason}</b>! <br>Your score was: <b>${snakePositions.length}</b>.`;
}

// ResetGame Function
function resetGame() {
    direction = [0, 0];
    snakePosition = { x: Math.floor((boardSize - 1) / 2), y: Math.floor((boardSize - 1) / 2) };
    snakePositions = [];
    snakePositions.push(`x${snakePosition.x}y${snakePosition.y}`);
}

// CollisionCheck Function
function collisionCheck() {
    if (snakePosition.x < 0 || snakePosition.y < 0 || snakePosition.x > boardSize - 1 || snakePosition.y > boardSize - 1) {
        gameOver("bumped into a wall")
    }
    let snakePositionControle = `x${snakePosition.x}y${snakePosition.y}`;
    for (let i = 0; i < snakePositions.length - 1; i++) {
        if (snakePositionControle == snakePositions[i]) {
            gameOver("bumped into yourself");
        }
    }
}

// DrawSnake Function
function drawSnake() {
    for (let i = 0; i < snakePositions.length; i++) {
        if (i == 0) document.getElementById(snakePositions[i]).className += " bodyEnds";
        if (i == snakePositions.length - 1) document.getElementById(snakePositions[i]).className += " bodyEnds";
        document.getElementById(snakePositions[i]).className += " bodySnake";
    }
    document.getElementById("keyboardInput").innerHTML = snakePositions.length;
}

// DrawFood Function
function drawFood() {
    if (foodIsEaten) {
        let xRandom = Math.floor(Math.random() * (boardSize - 1));
        let yRandom = Math.floor(Math.random() * (boardSize - 1));
        foodPosition.x = xRandom;
        if (foodPosition.x = snakePositions) {
            foodPosition.x = xRandom;
        }
        foodPosition.y = yRandom;
        if (foodPosition.y = snakePositions) {
            foodPosition.y = yRandom;
        }
        foodIsEaten = false;
    }
    let foodPositionID = `x${foodPosition.x}y${foodPosition.y}`;
    document.getElementById(foodPositionID).className += " food";
}

// SnakeEatsFood Function
function snakeEatsFood() {
    if (snakePosition.x == foodPosition.x && snakePosition.y == foodPosition.y) {
        foodIsEaten = true;
        snakePositions.push("x" + snakePosition.x + "y" + snakePosition.y);
    }
}

drawBoard();

// RequestAnimationFrame
window.requestAnimationFrame(gameLoop, 0);

// Keyboard controls
window.addEventListener("keydown", function(event) {
    switch (event.key) {
        // Arrow controls
        case "ArrowUp":
            if (direction != 3) {
                direction = 4;
            }
            break;
        case "ArrowDown":
            if (direction != 4) {
                direction = 3;
            }
            break;
        case "ArrowRight":
            if (direction != 1) {
                direction = 2;
            }
            break;
        case "ArrowLeft":
            if (direction != 2) {
                direction = 1;
            }
            break;
            // WASD controls
        case "w":
            if (direction != 3) {
                direction = 4;
            }
            break;
        case "s":
            if (direction != 4) {
                direction = 3;
            }
            break;
        case "d":
            if (direction != 1) {
                direction = 2;
            }
            break;
        case "a":
            if (direction != 2) {
                direction = 1;
            }
            break;
        default:
            break;
    }
}, true);