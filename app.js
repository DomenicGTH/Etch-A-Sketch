let container = document.querySelector('.container');
let small = document.querySelector('#small');
let large = document.querySelector('#large');
let remove = document.querySelector('#remove');
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
    userCustom();
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
// });



function SquaresSmall() {
    // let htmlToAdd = "";
    let numOfSquares = 32;
    container.innerHTML = ''
    for (let i = 0; i < numOfSquares; i++) {
        // htmlToAdd += `<div class="square"></div>`;
        let square = document.createElement('div')
        // <div></div>
        square.classList.add('square')
        // <div class='square'></div>
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            square.style.color = "black";
        } 
        // <div class='square black'></div>
        )
        container.appendChild(square)
        // <div class='container'></div>
            // <div class='square'></div>
        // <div class='container'></div>
        
    };


}

function SquaresLarge() {
    let numOfSquares = 64;
    container.innerHTML = ''
    for (let i = 0; i < numOfSquares; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            square.style.color = "black";
        });
        container.appendChild(square)
        
    };
};

function userCustom() {
    // let htmlToAdd = "";
    let input = prompt ('what size grid?');
    let numOfSquares = input
    for (let i = 0; i < numOfSquares; i++) {
        let square = document.createElement('div')
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
            square.style.color = 'black';
        });
    container.appendChild(square)
}};

function removeElements () {
    let remove = document.querySelectorAll('.square')
    remove.forEach(element => {
       element.remove();
    });
   };

// function colorIn () {
//     block.style.backgroundColor = 'black';
//     block.style.color = "black";
// }