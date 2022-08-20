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
            gameboard.appendChild(route);
            routes[row][col] = route;
        }
    }   
}

export function returnRoutes() : HTMLDivElement[][] {
    return routes;
}
