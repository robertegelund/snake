const score:HTMLElement = document.querySelector(".score")
const gameboard:HTMLElement = document.querySelector(".gameboard") as HTMLElement;
const routes:HTMLDivElement[][] = [];

const noRows = 12; const noCols = 12;

// Filling the routes array with arrays to making a matrix
for(let i=0; i<noRows; i++) { routes[i] = [] }

// Drawing routes
drawBoard(noRows, noCols, gameboard, routes);

// VIEW functions
function drawBoard(noRows:number, noCols:number, gameboard:HTMLElement, routes:HTMLDivElement[][]) {
    for(let row=0; row < noRows; row++) {
        for(let col=0; col < noCols; col++) {
            let route = document.createElement("div");
            route.className = "route";
            let snakePart = document.createElement("div");
            snakePart.className = "snake-part";
            route.appendChild(snakePart);
            gameboard.appendChild(route);
            routes[row][col] = route;
        }
    }   
}

export function showSnakePart(row:number, col:number, part:string) {
    let snakePart = routes[row][col].firstChild
    snakePart.innerHTML = part;
    snakePart.style.background = "#112233";
    snakePart.style.color = "white";
}

export function removeSnakePart(row:number, col:number) {
    let snakePart = routes[row][col].firstChild
    snakePart.innerHTML = "";
    snakePart.style.background  = "white";
}

export function showTreasure(row:number, col:number, color:string) {
    let treasureColor = color;
    let snakePart = routes[row][col].firstChild
    snakePart.innerHTML = "&#128176"
    snakePart.style.color = treasureColor;
    snakePart.style.fontSize = "25px"
}

export function showScore(newScore:number) {
    score.innerHTML = "Score: " + newScore.toString();
}

export function gameOver() {
    score.innerHTML = "GAME OVER"

}