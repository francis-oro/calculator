// Prepare DOM elements
const displayedValue = document.querySelector('.display-value');
const zero = document.querySelector('.zero');
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

let currentValue = 0;
let firstValue;
let secondValue;
let operator = "none";

function displayCurrentValue() {
    displayedValue.textContent = currentValue;
};

function operate () {
    if (operator == "=") {
        displayCurrentValue;
    }
    else if (operator == "+") {
        currentValue = firstValue + secondValue;
        displayCurrentValue();
        firstValue = currentValue;
    }
    else if (operator == "-") {
        currentValue = firstValue - secondValue;
        displayCurrentValue();
        firstValue = currentValue;
    }
    else if (operator == "x") {
        currentValue = firstValue * secondValue;
        displayCurrentValue();
        firstValue = currentValue;
    }
    else if (operator == "/") {
        currentValue = firstValue / secondValue;
        displayCurrentValue();
        firstValue = currentValue;
    }
}

zero.onclick = function () {
    displayedValue.textContent = '0';
    if (operator == "none") {
        firstValue = 0;
        currentValue = 0;
    }
    else {
        secondValue = 0;
    }
};

one.onclick = function () {
    displayedValue.textContent = '1';
    if (operator == "none") {
        firstValue = 1;
        currentValue = 1;
    }
    else {
        secondValue = 1;
    }
};

two.onclick = function () {
    displayedValue.textContent = '2';
    if (operator == "none") {
        firstValue = 2;
        currentValue = 2;
    }
    else {
        secondValue = 2;
    }
};

three.onclick = function () {
    displayedValue.textContent = '3';
    if (operator == "none") {
        firstValue = 3;
        currentValue = 3;
    }
    else {
        secondValue = 3;
    }
};

four.onclick = function () {
    displayedValue.textContent = '4';
    if (operator == "none") {
        firstValue = 4;
        currentValue = 4;
    }
    else {
        secondValue = 2;
    }
};

five.onclick = function () {
    displayedValue.textContent = '5';
    if (operator == "none") {
        firstValue = 5;
        currentValue = 5;
    }
    else {
        secondValue = 5;
    }
};

six.onclick = function () {
    displayedValue.textContent = '6';
    if (operator == "none") {
        firstValue = 6;
        currentValue = 6;
    }
    else {
        secondValue = 6;
    }
};

seven.onclick = function () {
    displayedValue.textContent = '7';
    if (operator == "none") {
        firstValue = 7;
        currentValue = 7;
    }
    else {
        secondValue = 7;
    }
};

eight.onclick = function () {
    displayedValue.textContent = '8';
    if (operator == "none") {
        firstValue = 8;
        currentValue = 8;
    }
    else {
        secondValue = 8;
    }
};

nine.onclick = function () {
    displayedValue.textContent = '9';
    if (operator == "none") {
        firstValue = 9;
        currentValue = 9;
    }
    else {
        secondValue = 9;
    }
};


equals.onclick = function () {
    if (operator == "=") {
        displayCurrentValue;
        operator = "=";
    }
    else {
        operate();
        operator = "=";
    }
};

plus.onclick = function () {
    operate();
    displayCurrentValue();
    operator = "+";
};

minus.onclick = function () {
    operate();
    displayCurrentValue();
    operator = "-";
};

multiply.onclick = function () {
    operate();
    displayCurrentValue();
    operator = "x";
};

divide.onclick = function () {
    operate();
    displayCurrentValue();
    operator = "/";
};