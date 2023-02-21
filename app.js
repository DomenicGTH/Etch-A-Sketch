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


// test code, unused code, for reference

// function userCustom() {
//     container.innerHTML = '';
//     userInput = prompt ('what size');
//     let halved = userInput
//     for (let i = 0; i < halved; i++) {
//         let row = document.createElement('div')
//         row.classList.add('row');
//         row.addEventListener('mouseover', () => {
//             row.style.backgroundColor = 'black';
//             row.style.color = 'black';
//     // }
//     // for (let j = 0; j < halved; j++) {
//     //     let col = document.createElement('div')
//     //     col.classList.add('col');
//     })};
//     container.appendChild(row)
// }

// function colourIn() {
//     row.addEventListener('mouseover', () => {
//         row.style.backgroundColor = 'black';
//         row.style.color = 'black';
//     });
//     col.addEventListener('mouseover', () => {
//         col.style.backgroundColor = 'black';
//         col.style.color = 'black';
//     });
// } */

// function SquaresCustom() {
//     let numOfSquares = prompt ('how many squares?');
//     container.innerHTML = ''
//     for (let i = 0; i < numOfSquares*2; i++) {
//         let row = document.createElement('div')
//         row.classList.add('row')
//         row.addEventListener('mouseover', () => {
//             row.style.backgroundColor = 'black';
//             row.style.color = "black";
//         });
//         container.appendChild(row)
//     };
//     for (let i = 0; i < numOfSquares*2; i++) {
//         let col = document.createElement('div')
//         col.classList.add('col')
//         col.addEventListener('mouseover', () => {
//             col.style.backgroundColor = 'black';
//             col.style.color = "black";
//         });
//         container.appendChild(col)
//         container.style.cssText = 'grid-template-columns:repeat(' + numOfSquares + ', minmax(0,1fr));grid-template-rows:repeat(' + numOfSquares + ', minmax(0,1fr));'
//     }
// }; 