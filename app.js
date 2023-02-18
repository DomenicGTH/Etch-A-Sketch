let container = document.querySelector('.container');
let small = document.querySelector('#small');
let large = document.querySelector('#large');
let square = document.querySelectorAll('.square');


small.addEventListener('click', () => {

        SquaresSmall();
        
    });

Array.from(square).forEach(squares => {
    squares.addEventListener('mouseenter' , () => {

        squares.style.backgroundColor = 'black';
        squares.style.color = 'black';
        squares.style.borderColor = 'white';
});
    
});



function SquaresSmall() {
    let htmlToAdd = "";
    let numOfSquares = 32;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
        
    };

}