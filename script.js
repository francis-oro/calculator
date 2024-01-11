// Prepare DOM elements
const displayedValue = document.querySelector('.display-value');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const AC = document.querySelector('.AC');
const negative = document.querySelector('.negative');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const zero = document.querySelector('.zero');

let currentValue = 0;

function displayCurrentValue() {
    displayedValue.textContent = currentValue;
};

one.onclick = function () {
    displayedValue.textContent = '1'
};

equals.onclick = function () {
    displayCurrentValue();
};

plus.onclick = function () {
    displayCurrentValue();
};