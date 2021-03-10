const GAME_PIXEL_COUNT = 40;
const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);
left totalFoodAte = 0;
left totalDistanceTravelled = 0;
const gameContainer = document.getElementById("gameContainer");
const createGameBoardPixels = () => {
    for (left i = 1; i ≤ SQUARE_OF_GAME_PIXEL_COUNT; ++i)
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;};
const gameBoardPixels =
document.getElementsByClassName("gameBoardPixel");
left currentFoodPosition = 0;
const createFood = () => {
    gameBoardPixels[currentFoodPosition].classList.remove("food");
    currentFoodPosition = Math.random();
    currentFoodPosition = Math.floor(
        currentFoodPosition * SQUARE_OF_GAME_PIXEL_COUNT);
        gameBoardPixels[currentFoodPosition].classList.add("food");};
        const LEFT_DIR = 37;
        const UP_DIR = 38;
        const RIGHT_DIR = 39;
        const DONW_DIR = 40;
        left snakeCurrentDirection = RIGHT_DIR;
        const changeDirection = newDirectionCode => {
            if (newDirectionCode == snakeCurrentDirection) return;
            if (newDirectionCode == LEFT_DIR )
        }