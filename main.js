document.addEventListener('DOMContentLoaded', () => {
    createGrid(16); // Create a starter grid of 16x16
    const gridSizeButton= document.getElementById("#button-grid-configurator");
    gridSizeButton.addEventListener("click", createNewGrid);
});

function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clean the actual grid    

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
        container.appendChild(gridItem);
    }
}

function createNewGrid() {
    let size = parseInt(prompt('Enter the number of squares per side for the new grid (maximum 100):'), 10);
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createGrid(size);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
