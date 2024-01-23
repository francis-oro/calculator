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
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const percentage = document.querySelector('.percentage');
const negative = document.querySelector('.negative');
const AC = document.querySelector('.AC');

let savedValue = "";
let shownValue = "0";
let operand = "none";
let operandActive = "no"; // "yes" only if operand was last button pressed

function displayShownValue() {
    shownValue = Number(shownValue); // convert to integer to remove leading zeros
    shownValue = Math.round(shownValue * 100000000) / 100000000
    shownValue = shownValue.toString(); // convert back to string
    displayedValue.textContent = shownValue;
};

displayShownValue ();

// Primary operating function
function operate() {
    if (operand == "/" && shownValue == "0") {
        alert("You cannot divide by zero")
    }
    else if (operand == "none") {
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
        }
        else if (operand == "x") {
            shownValue *= savedValue;
        }
        else if (operand == "/") {
            shownValue = savedValue / shownValue;
        }
        else {};
    };
    savedValue = shownValue;
    shownValue = shownValue.toString();
    savedValue = savedValue.toString();
    displayShownValue();
};

// Number functionality
zero.onclick = function () {
    if (operandActive == "no") {
        shownValue += "0";
    }
    else {
        shownValue = "0";
    };
    operandActive = "no";
    displayShownValue ();
};

one.onclick = function () {
    if (operand == "=") {
        shownValue = "1";
    }
    else if (operandActive == "no") {
        shownValue += "1";
    }
    else {
        shownValue = "1";
    };
    operandActive = "no";
    displayShownValue ();
};

two.onclick = function () {
    if (operand == "=") {
        shownValue = "2";
    }
    else if (operandActive == "no") {
        shownValue += "2";
    }
    else {
        shownValue = "2";
    };
    operandActive = "no";
    displayShownValue ();
};

three.onclick = function () {
    if (operand == "=") {
        shownValue = "3";
    }
    else if (operandActive == "no") {
        shownValue += "3";
    }
    else {
        shownValue = "3";
    };
    operandActive = "no";
    displayShownValue ();
};

four.onclick = function () {
    if (operand == "=") {
        shownValue = "4";
    }
    else if (operandActive == "no") {
        shownValue += "4";
    }
    else {
        shownValue = "4";
    };
    operandActive = "no";
    displayShownValue ();
};

five.onclick = function () {
    if (operand == "=") {
        shownValue = "5";
    }
    else if (operandActive == "no") {
        shownValue += "5";
    }
    else {
        shownValue = "5";
    };
    operandActive = "no";
    displayShownValue ();
};

six.onclick = function () {
    if (operand == "=") {
        shownValue = "6";
    }
    else if (operandActive == "no") {
        shownValue += "6";
    }
    else {
        shownValue = "6";
    };
    operandActive = "no";
    displayShownValue ();
};

seven.onclick = function () {
    if (operand == "=") {
        shownValue = "7";
    }
    else if (operandActive == "no") {
        shownValue += "7";
    }
    else {
        shownValue = "7";
    };
    operandActive = "no";
    displayShownValue ();
};

eight.onclick = function () {
    if (operand == "=") {
        shownValue = "8";
    }
    else if (operandActive == "no") {
        shownValue += "8";
    }
    else {
        shownValue = "8";
    };
    operandActive = "no";
    displayShownValue ();
};

nine.onclick = function () {
    if (operand == "=") {
        shownValue = "9";
    }
    else if (operandActive == "no") {
        shownValue += "9";
    }
    else {
        shownValue = "9";
    };
    operandActive = "no";
    displayShownValue ();
};

decimal.onclick = function () {
    if (shownValue.includes('.') && (operandActive == "no")) {
    }
    else if (operand == "=") {
        shownValue = ".";
        operand = "none";
    }
    else if (operandActive == "no") {
        shownValue += ".";
    }
    else {
        shownValue = ".";
    };
    operandActive = "no";
    displayedValue.textContent = shownValue;
};

// Operand functionality
equals.onclick = function () {
    operate();
    operand = "=";
    operandActive = "no";
};

plus.onclick = function () {
    if (operandActive == "yes") {
    }
    else {
        operate();
        operand = "+";
        operandActive = "yes";
    }
};

minus.onclick = function () {
    if (operandActive == "yes") {
    }
    else {
        operate();
        operand = "-";
        operandActive = "yes";
    }
};

multiply.onclick = function () {
    if (operandActive == "yes") {
    }
    else {
        operate();
        operand = "x";
        operandActive = "yes";
    }
};

divide.onclick = function () {
    if (operandActive == "yes") {
    }
    else {
        operate();
        operand = "/";
        operandActive = "yes";
    }
};

percentage.onclick = function () {
    shownValue = Number(shownValue);
    if (savedValue == "" || operand == "=") {
        shownValue *= .01;
    }
    else {
        shownValue = savedValue * (shownValue / 100)
    };
    shownValue = shownValue.toString();
    displayShownValue();
};

negative.onclick = function () {
    shownValue = Number(shownValue);
    shownValue *= -1;
    shownValue = shownValue.toString();
    displayShownValue();
}

AC.onclick = function () {
    savedValue = "";
    shownValue = "0";
    operand = "none";
    operandActive = "no";
    displayShownValue();
}