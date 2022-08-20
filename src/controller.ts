import { moveSnake } from "./model";
import { returnRoutes } from "./view.js";

const directions = ["NORTH", "SOUTH", "WEST", "EAST"];

const startRetning = directions[Math.floor(Math.random() * 4)];
// let interval:NodeJS.Timer = setInterval(() => moveSnake(startRetning), 1000);

function changeDir(interval:NodeJS.Timer, direction:string) {
    clearInterval(interval);
    //interval = setInterval(() => moveSnake(direction), 1000);
}

document.addEventListener("keydown", evt => {
    if(evt.code === "ArrowUp") changeDir(interval, "NORTH");
    else if(evt.code === "ArrowDown") changeDir(interval, "SOUTH")
    else if(evt.code === "ArrowLeft") changeDir(interval, "WEST")
    else if(evt.code === "ArrowRight") changeDir(interval, "EAST")
})


