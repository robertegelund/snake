import { showSnakePart, removeSnakePart, showTreasure, showScore, gameOver } from "./view";
import { stopTheSnake, changeSpeed } from "./controller";

const snake: ([number, number][]) = [];
const treasures: [number, number, string][] = [];
let score = 0;
let speed = 500;
let isGameOver = false;

const noRows = 12; const noCols = 12; const noTreasures = 9;
let snakeDir = ""; let prevSnakeDir = "";

// Create and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0]; const headCol = headPos[1];
snake.push([headRow, headCol]);
showSnakePart(headRow, headCol, "O");


// Create and show the treasures
for(let i=0; i < 2; i++) {
    createAndShowTreasure("red");
    createAndShowTreasure("blue");
    createAndShowTreasure("green");
}

// MODEL functions
function createSnakeHead(noRows:number, noCols:number) : [number, number] {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    return [row, col];
}

function createAndShowTreasure(color:string) {
    let row = Math.floor(Math.random() * noRows);
    let col = Math.floor(Math.random() * noCols);
    treasures.push([row, col, color]);
    showTreasure(row, col, color);
}

export function moveSnake(dir:string) {
    let length = snake!.length; 
    let head = snake[0]; let back = snake[length-1]

    let headRow = head[0]; let headCol = head[1];
    let backRow = back[0]; let backCol = back[1];

    if(prevSnakeDir !== "SOUTH" && dir === "NORTH") {
        snakeDir = "NORTH"; headRow--;
    } else if(prevSnakeDir !== "NORTH" && dir === "SOUTH") {
        snakeDir = "SOUTH"; headRow++;
    } else if(prevSnakeDir !== "WEST" && dir === "EAST") {
        snakeDir = "EAST"; headCol++;
    } else if(prevSnakeDir !== "EAST" && dir === "WEST") {
        snakeDir = "WEST"; headCol--;
    }

    // Update the snake's back position, deletes it and moves it in front
    back[0] = headRow; back[1] = headCol;
    let bakreDel = snake.pop(); snake.unshift(bakreDel!);

    if(back[0] === noRows || back[1] === noCols || back[0] === -1 || back[1] === -1) {
        stopTheSnake(); gameOver(); return;
    }

    removeSnakePart(backRow, backCol);
    showSnakePart(back[0], back[1], "O");
    
    // Important that the former front part is drawn as X instead of O
    if(snake.length > 1) showSnakePart(snake[1][0], snake[1][1], "");
   
    headCrashControl();
    treasureControl(headRow, headCol, backRow, backCol);
    prevSnakeDir = snakeDir;
}


function headCrashControl() {
    snake.forEach(part => {
        if(part[0] === snake[0][0] && part[1] === snake[0][1] && snake.indexOf(part) != 0) {
            stopTheSnake(); gameOver(); isGameOver = true;
        }
    })
}


function treasureControl(headRow:number, headCol:number, 
                         backRow:number, backCol:number) {
    treasures.forEach(treasure => {
        if(treasure[0] === headRow && treasure[1] === headCol) {
            snake.push([backRow, backCol]);
            showSnakePart(backRow, backCol, "");
            if(treasure[2] === "blue") createAndShowTreasure("blue");
            else if(treasure[2] === "red") createAndShowTreasure("red");
            else if(treasure[2] === "green") createAndShowTreasure("green");
            speed-=20;
            updateScore();
            changeSpeed(snakeDir);
        }
    })
}

export function updateScore() {
    showScore(++score);
}

export function getSpeed() {
    return speed;
}

export function statusGameOver() {
    return isGameOver;
}