import { moveSnake, getSpeed, statusGameOver } from "./model";

const btn_up = document.querySelector(".btn-up");
const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");
const btn_down = document.querySelector(".btn-down");
let interval:NodeJS.Timer;

startGame();

function startGame() {
    const directions = ["NORTH", "SOUTH", "WEST", "EAST"];
    const startRetning = directions[Math.floor(Math.random() * 4)];
    interval = setInterval(() => moveSnake(startRetning), 500);
}

export function changeSpeed(direction:string) {
    if(!statusGameOver()) {
        clearInterval(interval);
        interval = setInterval(() => moveSnake(direction), getSpeed());
    }
}

function changeDir(direction:string) {
    if(!statusGameOver()) {
        clearInterval(interval);
        interval = setInterval(() => moveSnake(direction), getSpeed());
    }
}

export function stopTheSnake() {
    clearInterval(interval);
}


// Adding event listeners
btn_left!.addEventListener("click", () => changeDir("WEST"));
btn_up!.addEventListener("click", () => changeDir("NORTH"));
btn_right!.addEventListener("click", () => changeDir("EAST"));
btn_down!.addEventListener("click", () => changeDir("SOUTH"));

document.addEventListener("keydown", evt => {
    if(evt.code === "ArrowUp") changeDir("NORTH");
    else if(evt.code === "ArrowDown") changeDir("SOUTH")
    else if(evt.code === "ArrowLeft") changeDir("WEST")
    else if(evt.code === "ArrowRight") changeDir("EAST")
})
