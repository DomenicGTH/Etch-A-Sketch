let container = document.querySelector('.container');
let deleter = document.querySelector('#remove');
let custom = document.querySelector('#custom');


deleter.addEventListener('click', () => {
    removeElements();
});

custom.addEventListener('click', () => {
    SquaresCustom();
});


function SquaresCustom() {
    let numOfSquares = prompt ('how many squares?');
    container.innerHTML = ''
    for (let i = 0; i < numOfSquares*100; i++) {
        if (numOfSquares > 100) {
            alert ("Number must be 100 or lower");
            break;
        }
        let square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            square.style.color = "black";
        });
        container.appendChild(square)
        container.style.cssText = 'grid-template-columns:repeat(' + numOfSquares + ', minmax(0,1fr));grid-template-rows:repeat(' + numOfSquares + ', minmax(0,1fr));'
    }
};

function removeElements () {
    let remove = document.querySelectorAll('.square')
    remove.forEach(element => {
       element.remove();
    });
   };