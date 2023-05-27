// Initialize important variables by referring to the elements
const clearBtn = document.querySelector('.clear');
const setGridBtn = document.querySelector('.set-grid');
const rainbowBtn = document.querySelector('.rainbow');
const container = document.querySelector('.container');
const shadeBtn = document.querySelector('.shade');
let rainbowColorIsOn = false;

// These are the 'helper' functions which can have to be included in other functions
// This function simply creates a grid by manipulating css
function makeGrid(num = 16){
    container.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
}

// This function will simply generate a random integer for the randomColor() function
// It takes in a minimum and maximum params which will not be changed in this example
function randomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// This function will generate a random color using the previous function
function randomColor() {
    return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}

// This function fills the the grid with color
function changePencilColor(color) {
    return function(e) {
        e.target.style.backgroundColor = color;
    }
}

// This function darkens the pencil color
// It will return a function for an event listener
function darkenPencilColor() {
    let dark = 255;
    return function(e) {
        dark -= 25;
        e.target.style.backgroundColor = `rgb(${dark}, ${dark}, ${dark})`;
    }
}

// This function will add an event listener to each grid
function addMouseoverToGrids() {
    const grids = document.querySelectorAll('.grid');
    if (rainbowColorIsOn == true) {
        grids.forEach(element=> element.addEventListener('mouseover', changePencilColor(randomColor())));
    } else {
        grids.forEach(element=> element.addEventListener('mouseover', changePencilColor('rgb(0, 0, 0)')));
    }
}

// This function is called when the button to change grid size is clicked
function changeGridSize() {
    const newGridSize = parseInt(prompt("Enter a number:", "between 2-100"));
    if (newGridSize < 2 || newGridSize > 100 || !newGridSize) {
        newGridSize = 16;
    }
    container.innerHTML = '';
    createDivs(newGridSize);
    addMouseoverToGrids();
    makeGrid(newGridSize);
}

// This function clears the grid or resets it
function resetGrid() {
    let newGridSize = parseInt(prompt("Enter a number:", "between 2-100"));
    if (newGridSize < 2 || newGridSize > 100 || !newGridSize) {
        newGridSize = 16;
    }
    container.innerHTML = '';
    createDivs(newGridSize);
    addMouseoverToGrids();
    makeGrid(newGridSize);
}

// These functions are the main functions in the program
// This will change the grid size and take a prompt value as the number
function createDivs(num=16) {
    for (let i = 1; i <= num * num; i++) {
        let div = document.createElement('div');
        div.style.border = "black solid 1px";
        div.classList.add('grid');
        container.appendChild(div);
    }
}

// This is the absolute main function, it compiles all functions into it
function init() {
    createDivs();
    addMouseoverToGrids();
    makeGrid();
}

// Below are some necesarry event listeners
// Otherwise there is no use of the functions that were made earlier!
rainbowBtn.addEventListener('click', function() {
    if (rainbowColorIsOn == false) {
        rainbowColorIsOn = true;
        createDivs();
        addMouseoverToGrids();
        makeGrid();
    } else {
        rainbowColorIsOn = false;
        addMouseoverToGrids();
    }
});

setGridBtn.addEventListener('click', function() {
    changeGridSize();
});

clearBtn.addEventListener('click', function() {
    resetGrid();
});

shadeBtn.addEventListener('click', function() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', darkenPencilColor()));
});

window.addEventListener('load', init());
