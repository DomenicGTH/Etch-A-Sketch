let container = document.querySelector('.container');
let small = document.querySelector('#small');
let large = document.querySelector('#large');
let remove = document.querySelector('#remove');
let block = document.querySelector('.container');
let deleter = document.querySelector('#remove')

small.addEventListener('click', () => {
    SquaresSmall();
});

large.addEventListener('click', () => {
    SquaresLarge();
});

deleter.addEventListener('click', () => {
    removeElements();
});


// this sucks really bad down below
// deleter.addEventListener('click', (e) => {
//     let test = document.getElementsByClassName('square')
//     test.forEach(e => {
//         e.remove()});
    
//     });
    // e.forEach(e => e.remove());




block.addEventListener('mouseover' , () => {
    colorIn();


});



function SquaresSmall() {
    let htmlToAdd = "";
    let numOfSquares = 32;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
    };

}

function SquaresLarge() {
    let htmlToAdd = "";
    let numOfSquares = 64;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
    };

}

function removeElements () {
    let remove = document.querySelectorAll('.square')
    remove.forEach(element => {
       element.remove();
    });
   }

function colorIn () {
    block.style.backgroundColor = 'black';
    block.style.color = "black";
}