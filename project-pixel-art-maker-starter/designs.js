// Select color input
// Select size input

// When size is submitted by the user, call makeGrid(

// Your code goes here!
// How to get the grid height and grid width values

// Get the elements with id 'inputHeight' and 'inputWidth'

// Get the form element
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');

form.addEventListener('submit', makeGrid);

function makeGrid(e) {
    const inputHeight = document.getElementById(`inputHeight`).value;
    const inputWidth = document.getElementById(`inputWidth`).value;
  
    e.preventDefault();

    table.innerHTML= "";


    for(let x = 0; x < inputHeight; x++) {
        const tr = document.createElement(`tr`);
        table.appendChild(tr);
        for(let y = 0; y < inputWidth; y++) {
            const td = document.createElement(`td`);
            tr.appendChild(td);
        }
    }

}

table.addEventListener('click', function(e) {
    if(e.target.nodeName === "TD") {
        e.target.style.backgroundColor = color.value;
    }
})
