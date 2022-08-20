import { showSnakePart, removeSnakePart } from "./view";

const snake: [number, number][] = [];
const fruits: string[][] = [];
const noRows = 12; const noCols = 12;

let snakeDir = ""; let prevSnakeDir = "";

// Filling the fruits array with arrays to making a matrix
for(let i=0; i<noRows; i++) { fruits[i] = [] }


// Creates and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0]; const headCol = headPos[1];
snake.push([headRow, headCol]);
showSnakePart(headRow, headCol, "X");
console.log(snake)


// MODEL functions
function createSnakeHead(noRows:number, noCols:number) : [number, number] {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    return [row, col];
}



export function moveSnake(dir:string) {
    let headRow = snake[0][0]; let headCol = snake[0][1];
    removeSnakePart(headRow, headCol);
    
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
    showSnakePart(headRow, headCol, "X");
    prevSnakeDir = snakeDir; 
}
