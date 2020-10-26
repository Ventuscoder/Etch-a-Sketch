// Initialize important variables by referring to the elements
const clearBtn = document.querySelector('.clear');
const setGridBtn = document.querySelector('.set-grid');
const rainbowBtn = document.querySelector('.rainbow');
const container = document.querySelector('.container');
const rainbowColorIsOn = false;

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

// This function uses the randomColor to create a function to randomly color the grid
function randomFill(grids) {
    if (rainbowColorIsOn == true) {
        grids.forEach(grid => {
            grid.style.backgroundColor = `${randomColor}`;
        });
    } else {
        grids.forEach(grid => {
            grid.style.backgroundColor = 'black';
        });
    }
}