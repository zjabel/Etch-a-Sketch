function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Limpiar la cuadrícula existente

    // Calcular el tamaño de cada celda, sin restar para compensar el borde
    const gridSize = 800; // Tamaño fijo del contenedor
    const cellSize = gridSize / size; // Tamaño de cada celda sin restar para el borde

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${cellSize}px`;
        gridItem.style.height = `${cellSize}px`;
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
        container.appendChild(gridItem);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(16); // Crear una cuadrícula inicial de 16x16
    const gridSizeButton = document.getElementById("button-grid-configurator");
    gridSizeButton.addEventListener("click", createNewGrid);
});

function createNewGrid() {
    let size = parseInt(prompt('Enter the number of squares per side for the new grid (maximum 100):'));
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }
    createGrid(size);
}
