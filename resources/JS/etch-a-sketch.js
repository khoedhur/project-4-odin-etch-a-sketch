// div container where cells will be appended
const etchContainer = document.getElementById('etch-container');


/**
 * This function will ask for an input of rows and columns,
 * then generate the cells and append them to the parent container
 * @param {*} rows the amount of rows desired
 * @param {*} cols the amount of columns desired
 */
function makeRows(rows, cols) {
  etchContainer.style.setProperty('--grid-rows', rows);
  etchContainer.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    let etchCell = document.createElement('div');
    etchContainer.appendChild(etchCell).className = 'grid-item';
  }

// select all of the cells in the div container
  const gridItem = document.querySelectorAll('.grid-item');


  // add an event listener to each div that will
  // change the color of the div when the mouse cursor hovers over it
  for(let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
      const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      gridItem[i].style.backgroundColor = randomColor;
    });
  }


  // add an event listener to each div that will
  // change the color of the div when the mouse cursor leaves the div
  for(let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseout', () => {
      const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      gridItem[i].style.backgroundColor = randomColor;
    });
  }
}


// make 16 x 16 rows
makeRows(16, 16);



/**
 * Generate a random number given a max, used to generate a random color value in the below function
 * randomBackground()
 * @param {*} number The max random number that can be generated
 * @returns a number between 0 and 'number' parameter
 */
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


// button to generate new grid
const generateButton = document.getElementById('generate-grid');


/**
 * When the user clicks on the button, it will prompt them to type in a number up to 100
 * then it will make a new grid with the specified rows and columns
 */
function generateNewGrid() {
  let newRow = Number(prompt("How many rows would you like? (Up to 100)", "0"));
  let newColumn = Number(prompt("How many columns would you like? (Up to 100)", "0"));

  if (newRow != null && newColumn != null) {
    if (newRow >= 0 && newRow <= 100 && newColumn >= 0 && newColumn <= 100) {
      makeRows(newRow, newColumn);
    } else {
      alert("Invalid response");
    }
  } else {
    alert("Invalid response");
  }
}


generateButton.addEventListener("click", generateNewGrid);
