document.addEventListener('DOMContentLoaded', function() {
    //Grid creation
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        //Color assigment when mouse is over an element
        gridItem.addEventListener('mouseover', function() {
            gridItem.style.backgroundColor = getRandomColor();
        });        
        gridContainer.appendChild(gridItem);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
