import { returnRoutes } from "./view.js";
const snake: [number, number][] = [];
const fruits: string[][] = [];
const noRows = 12; const noCols = 12;

let snakeDir = ""; let prevSnakeDir = "";

// Filling the snake and fruits arrays with arrays to making a matrix
for(let i=0; i<noRows; i++) { fruits[i] = [] }


// Creates and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0]; const headCol = headPos[1];
snake.push([headRow, headCol]);
showSnakeHead(returnRoutes(), headRow, headCol);
console.log(snake)



// MODEL functions
function createSnakeHead(noRows:number, noCols:number) : [number, number] {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    return [row, col];
}

function showSnakeHead(routes:HTMLDivElement[][], row:number, col:number) {
    routes[row][col].innerHTML = "X";
    routes[row][col].style.background = "green";
}

function removeSnakeHead(routes:HTMLDivElement[][], row:number, col:number) {
    routes[row][col].innerHTML = "";
    routes[row][col].style.background = "white";
}

export function moveSnake(dir:string) {
    let headRow = snake[0][0]; let headCol = snake[0][1];
    removeSnakeHead(returnRoutes(), headRow, headCol);
    
    if(prevSnakeDir !== "SOUTH" && dir === "NORTH") {
        snakeDir = "NORTH"; headRow--;
    } else if(prevSnakeDir !== "NORTH" && dir === "SOUTH") {
        snakeDir = "SOUTH"; headRow++;
    } else if(prevSnakeDir !== "WEST" && dir === "EAST") {
        snakeDir = "EAST"; headCol++;
    } else if(prevSnakeDir !== "EAST" && dir === "WEST") {
        snakeDir = "WEST"; headCol--;
    }

    snake.shift(); snake.push([headRow, headCol]);
    showSnakeHead(returnRoutes(), headRow, headCol);
    prevSnakeDir = snakeDir; 
}
