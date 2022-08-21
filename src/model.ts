import { showSnakePart, removeSnakePart, showTreasure, updateScore} from "./view";

const snake: [number, number][] = [];
const treasures: [number, number, string][] = [];
let score = 0;

const noRows = 12; const noCols = 12; const noTreasures = 9;
let snakeDir = ""; let prevSnakeDir = "";

// Create and shows the snakehead
const headPos = createSnakeHead(noRows, noCols);
const headRow = headPos[0]; const headCol = headPos[1];
snake.push([headRow, headCol]);
showSnakePart(headRow, headCol, "O");


// Create and show the treasures
for(let i=0; i < 3; i++) {
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
    let length = snake.length; 
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

    // Oppdaterer bakre dels posisjon, sletter delen og flytter fremst
    back[0] = headRow; back[1] = headCol;
    let bakreDel = snake.pop(); snake.unshift(bakreDel);
    removeSnakePart(backRow, backCol);
    showSnakePart(back[0], back[1], "O");
    
    // Viktig at tidligere fremfre del naa vises som X fremfor O
    if(snake.length > 1) showSnakePart(snake[1][0], snake[1][1], "");  
    
    treasureControl(headRow, headCol, backRow, backCol);
    prevSnakeDir = snakeDir;
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
            updateScore(++score);
        }
    })
}
