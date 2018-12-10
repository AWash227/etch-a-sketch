
function makeGrid(rows, columns){
    const gridContainer = document.querySelector('#gridContainer')
    gridContainer.style.display = "grid";
    gridContainer.style.height = '700px';
    gridContainer.style.width = "700px";
    gridContainer.style.border = "1px solid black";
    gridContainer.style.gridGap = "1px";
    gridContainer.style.gridTemplateColumns =  `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 

    for(let i=1; i <= rows; i++){
        for(let j=1; j <= columns; j++){
            let tile = document.createElement('div');
            tile.classList.add(`Tile[${i}[${j}`, 'tiles');
            tile.style.gridRow = `${i} ${j}`;
            tile.style.gridColumn = `${i} ${j}`;
            tile.style.backgroundColor = "black";
            //tile.style.width = tileSize;
            //tile.style.height = tileSize;
            gridContainer.appendChild(tile);
            //console.log(i*j)
            //console.log(tile)
        }
    }
}

function getUserDimensions(){
    let userDimension = prompt("Type in a grid dimension. Typing '16' will create a grid that is 16x16.");
    makeGrid(userDimension, userDimension);
}



document.addEventListener("mouseover", function(e){
    if(e.target.matches(".tiles")){
        e.target.style.backgroundColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    }
})

let reloadBtn = document.querySelector('#reload');
reloadBtn.addEventListener("click", function(e){
   let tiles = document.querySelectorAll('.tiles');
   for (let i = 0; i < tiles.length; i++){
       gridContainer.removeChild(tiles[i]);
   } 
   getUserDimensions();
})

window.onload = function() {
    makeGrid(16,16)
}

