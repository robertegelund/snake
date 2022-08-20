import { returnRoutes } from "./view.js";
const snake: string[][] = [];
const fruits: string[][] = [];

const noRows = 12; const noCols = 12;

// Filling the snake and fruits arrays with arrays to making a matrix
for(let i=0; i<noRows; i++) { snake[i] = []; fruits[i] = [] }


// Creates and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0]; const headCol = headPos[1];
snake[headRow][headCol] = "X";
showSnakeHead(returnRoutes(), headRow, headCol);


// Model functions
function createSnakeHead(noRows:number, noCols:number) : [number, number] {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    return [row, col];
}

function showSnakeHead(routes:HTMLDivElement[][], row:number, col:number) {
    routes[row][col].innerHTML = snake[row][col];
    routes[row][col].style.background = "green";
}