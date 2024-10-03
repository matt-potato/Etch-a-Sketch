'use strict';

const grid = document.querySelector('.etch-sketch__grid');
function createGrid(gridNum) {
    grid.replaceChildren();
    for(let i = 1; i <= gridNum * gridNum; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('etch-sketch__grid-item');
        gridItem.setAttribute('style', `flex: 0 0 calc(100% / ${gridNum})`);
        grid.append(gridItem);
    }
}

const button = document.querySelector('.etch-sketch__btn');
button.addEventListener('click', function() {
    const error = document.querySelector('.etch-sketch__error');
    let squares = Number(document.querySelector('.etch-sketch__grid-number').value);

    if(squares <= 100 && squares > 0) {
        error.textContent = '';
        createGrid(squares);
    }
    else {
        error.textContent = 'Enter less than 100';
    }

    const gridItem = document.querySelectorAll('.etch-sketch__grid-item');
    gridItem.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', function() {
            gridItem.classList.add('colored');
        });
    });
});