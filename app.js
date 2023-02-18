let container = document.querySelector('.container');
let small = document.querySelector('#small');
let large = document.querySelector('#large');

small.addEventListener('click', () => {

        SquaresSmall();
    }
    
    )
;



function SquaresSmall() {
    let htmlToAdd = "";
    let numOfSquares = 32;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
    }
  

}