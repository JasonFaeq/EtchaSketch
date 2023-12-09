let gridSizeInput = document.querySelector('.js-creategrid-input');
let createGridButton = document.querySelector('.js-creategrid-button');
let theGrid = document.querySelector('.thegrid');

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

createGridButton.addEventListener('click', function() {
  let gridSizeValue = gridSizeInput.value * 2;
  console.log(gridSizeValue);

  theGrid.innerHTML = '';

  let gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  theGrid.appendChild(gridContainer);

  for (let i = 0; i < gridSizeValue; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = 'gridsquare';

    gridSquare.addEventListener('mouseover', function() {
      gridSquare.style.backgroundColor = getRandomColor();
    });


    gridContainer.appendChild(gridSquare);
  }
});
