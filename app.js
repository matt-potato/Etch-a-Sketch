'use strict';

const grid = document.querySelector('.grid');
function createGrid(gridNum) {
    grid.replaceChildren();
    for(let i = 1; i <= gridNum * gridNum; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('style', `flex: 0 0 calc(100% / ${gridNum})`);
        grid.append(gridItem);
    }
}

const button = document.querySelector('.btn_grid');
button.addEventListener('click', function() {
    let squares = prompt('Number of Squares Per Side');

    squares <= 100 ? createGrid(squares) : alert('Number of Squares Per Side (Less than 100)');

    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', function() {
            gridItem.classList.add('colored');
        });
    });
});