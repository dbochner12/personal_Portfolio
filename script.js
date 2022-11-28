let itemOne = document.getElementById('toggle-button');
let itemTwo = document.getElementById('dateString');

function modifyContent() {
    itemOne.innerHTML = 'I should be hidden';
    itemOne.style.color = 'white';
    itemOne.style.backgroundColor = 'black';
    itemOne.style.display = 'none';
    itemTwo.style.display = 'block';
    itemTwo.style.margin = '0.5rem auto'; 
};

itemOne.addEventListener('mousedown', modifyContent);

function changeText() {
    itemOne.innerHTML = 'Click Me!!!';
}

itemOne.addEventListener('mouseover', changeText);

function revertText() {
    itemOne.innerHTML = 'Hover over me for a surprise';
}

itemOne.addEventListener('mouseout', revertText);


const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("dateString").innerHTML = `Today's Date is ${text}`;