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
    etchCell.innerText = (i + 1);
    etchContainer.appendChild(etchCell).className = 'grid-item';
  }
}


// function call to make 16 x 16 rows
makeRows(16, 16);


// select all of the cells in the div container
const gridItem = document.querySelectorAll('.grid-item');


// add an event listener to each div that will
// change the color of the div when the mouse cursor hovers over it
for(let i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener('mouseover', () => {
    gridItem[i].style.color = 'red';
    gridItem[i].style.backgroundColor = 'green';
  });
}


// add an event listener to each div that will
// change the color of the div when the mouse cursor leaves the div
for(let i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener('mouseout', () => {
    gridItem[i].style.color = 'blue';
    gridItem[i].style.backgroundColor = 'orange';
  });
}
