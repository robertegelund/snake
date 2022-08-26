import { moveSnake } from "./model";

const btn = document.querySelector(".btn");

const directions = ["NORTH", "SOUTH", "WEST", "EAST"];

const startRetning = directions[Math.floor(Math.random() * 4)];
let interval:NodeJS.Timer = setInterval(() => moveSnake(startRetning), 500);

function changeDir(direction:string) {
    clearInterval(interval);
    interval = setInterval(() => moveSnake(direction), 500);
}

export function stopTheSnake() {
    clearInterval(interval);
}


btn?.addEventListener("click", () => changeDir("WEST"));

document.addEventListener("keydown", evt => {
    if(evt.code === "ArrowUp") changeDir("NORTH");
    else if(evt.code === "ArrowDown") changeDir("SOUTH")
    else if(evt.code === "ArrowLeft") changeDir("WEST")
    else if(evt.code === "ArrowRight") changeDir("EAST")
})


