// div container where cells will be appended
const etchContainer = document.getElementById('etch-container');


// select all of the cells in the div container
const gridItem = document.querySelectorAll('.grid-item');
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
    etchCell.innerText = (i + 1);
    etchContainer.appendChild(etchCell).className = 'grid-item';
  }
}


/**
 * Generate a random number given a max, used to generate a random color value in the below function
 * randomBackground()
 * @param {*} number The max random number that can be generated
 * @returns a number between 0 and 'number' parameter
 */
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


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


// make 16 x 16 rows
makeRows(16, 16);



