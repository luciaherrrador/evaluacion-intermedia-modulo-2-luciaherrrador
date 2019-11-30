'use strict';

const input = document.querySelector('.main__input');
const btn = document.querySelector('.btn');
const pageText = document.querySelector('.page__text');
const counter = document.querySelector('.footer__counter');

let attemps = 0;
counter.innerHTML = `Número de intentos:${attemps}`;
let myRandomNumber = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

console.log(myRandomNumber);


function guessNumber() {

    const inputNumber = input.value;
    console.log(inputNumber);

    /*if (inputNumber > myRandomNumber) {
        pageText.innerHTML = 'Demasiado alto';
    }
    else if (inputNumber < myRandomNumber) {
        pageText.innerHTML = 'Demasiado bajo';
    }
    else if (inputNumber === myRandomNumber) {
        pageText.innerHTML = 'Has ganado campeona!!';
    }
    else {
        pageText.innerHTML = 'El número debe estar entre 1 y 100';
    }*/

    if (inputNumber > 100 || inputNumber === '' || inputNumber <= 0) {
        pageText.innerHTML = 'El número debe estar entre 1 y 100';
    }
    else if (inputNumber > myRandomNumber) {
        pageText.innerHTML = 'Demasiado alto';
    }
    else if (inputNumber < myRandomNumber) {
        pageText.innerHTML = 'Demasiado bajo';
    }
    else {
        pageText.innerHTML = 'Has ganado campeona!!';
    }
    attemps = attemps + 1;
    counter.innerHTML = `Número de intentos:${attemps}`;
}

btn.addEventListener('click', guessNumber);
