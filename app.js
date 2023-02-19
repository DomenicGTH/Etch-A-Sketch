let container = document.querySelector('.container');
let small = document.querySelector('#small');
let large = document.querySelector('#large');
let remove = document.querySelector('#remove');
let block = document.querySelector('.square');
let deleter = document.querySelector('#remove');
let custom = document.querySelector('#custom');

small.addEventListener('click', () => {
    SquaresSmall();
});

large.addEventListener('click', () => {
    SquaresLarge();
});

deleter.addEventListener('click', () => {
    removeElements();
});

custom.addEventListener('click', () => {
    console.log(userCustom());
});
// this sucks really bad down below
// deleter.addEventListener('click', (e) => {
//     let test = document.getElementsByClassName('square')
//     test.forEach(e => {
//         e.remove()});
    
//     });
    // e.forEach(e => e.remove());




// block.addEventListener('mouseover' , () => {
//     colorIn();


// });



function SquaresSmall() {
    let htmlToAdd = "";
    let numOfSquares = 32;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;

        block.addEventListener('mouseover' , () => {
            colorIn();
        });
    };

}

function SquaresLarge() {
    let htmlToAdd = "";
    let numOfSquares = 64;
  
    for (let i = 0; i < numOfSquares; i++) {
        
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
}};

function userCustom() {
    let htmlToAdd = "";
    let input = prompt ('what size grid?');
    for (let i = 0; i < input; i++) {
        htmlToAdd += `<div class="square"></div>`;
        container.innerHTML = htmlToAdd;
}};

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