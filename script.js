let theme = document.getElementByID('About-Me-content');
let togButton = document.getElementById('toggleButton');


function changeColor() {
    togButton.style.color = 'white';
    togButton.style.backgroundColor = 'black';
}

togButton.addEventListener('mouseover', changeColor);