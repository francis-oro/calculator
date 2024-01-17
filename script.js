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

/*

let currentValue = 0;
let firstValue = 0;
let secondValue = 0;
let operator = "none";

function displayCurrentValue() {
    displayedValue.textContent = currentValue;
};

function operate () {
    if (operator == "=") {
    }
    else if (operator == "+") {
        currentValue = firstValue + secondValue;
    }
    else if (operator == "-") {
        currentValue = firstValue - secondValue;
    }
    else if (operator == "x") {
        currentValue = firstValue * secondValue;
    }
    else if (operator == "/") {
        currentValue = firstValue / secondValue;
    }
    displayCurrentValue();
    firstValue = currentValue;
}

// Number functions

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

// Operator functions

equals.onclick = function () {
    if (operator == "=") {
        displayCurrentValue;
    }
    else {
        operate();
    }
    operator = "=";
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

*/

// Testing
let savedValue = "";
let shownValue = "";
let operand = "none";
let operandActive = "no"; // "yes" only if operand was last button pressed

function displayShownValue() {
    shownValue = parseInt(shownValue); // convert to integer to remove leading zeros
    shownValue = shownValue.toString(); // convert back to string
    displayedValue.textContent = shownValue;
};

// Primary operating function
function operate() {
    if (operand == "none") {
        savedValue = shownValue;
    }
    else {
        shownValue = Number(shownValue);
        savedValue = Number(savedValue);
        if (operand == "+") {
            shownValue += savedValue;
        }
        else if (operand == "-") {
            shownValue = savedValue - shownValue;
        };
        shownValue = shownValue.toString();
        savedValue = savedValue.toString();
    displayShownValue();
    };
};

// Number functionality
one.onclick = function () {
    if (operandActive == "no") {
        shownValue += "1";
    }
    else {
        shownValue = "1";
    };
    operandActive = "no";
    displayShownValue ();
};

// Operand functionality
plus.onclick = function () {
    operate();
    operand = "+";
    operandActive = "yes";
};

equals.onclick = function () {
    operate();
    operand = "none";
    operandActive = "no";
};
