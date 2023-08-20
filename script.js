/*

ideas to tidy up the code: place buttons in arrays/objects and use a combination of functions and loops
to call each button when changing display and/or doing math

to be fixed: set maximum character limit (should be 13) so that calculator display does not expand


*/

//variables for operation functions
let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;
let result = 0;
let userNumberInputs = [];
let lastOperationPressed = undefined;

//declare number buttons
const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');

//declare operation buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

//declare clear and equals buttons
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

//calculator display
const display = document.querySelector('.display');
let displayText = display.textContent;


//define operation functions

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        add(firstNumber, secondNumber);
    }
    else if (operator === "-") {
        subtract(firstNumber, secondNumber);
    }
    else if (operator === "*") {
        multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
        divide(firstNumber, secondNumber);
    }
};

function add(userNumberInputs) {
    result = Number(userNumberInputs[0]);    
    for (i = 1; i < userNumberInputs.length; i++) {
        result += Number(userNumberInputs[i]);
    } console.log(result);
    return result;

};

function subtract(userNumberInputs) {
    result = userNumberInputs[0];
    console.log(result);
    for (i = 1; i < userNumberInputs.length; i++) {
        result -= Number(userNumberInputs[i]);
    } console.log(result);
    return result;

};

function multiply(userNumberInputs) {
    return result = firstNumber * secondNumber;

};

function divide(userNumberInputs) {
    return result = firstNumber / secondNumber;

};

//number button event listeners

zeroButton.addEventListener('click', () => {
    displayText = displayText + 0;
    display.textContent = displayText;
});

oneButton.addEventListener('click', () => {
    displayText = displayText + 1;
    display.textContent = displayText;
});

twoButton.addEventListener('click', () => {
    displayText = displayText + 2;
    display.textContent = displayText;
});

threeButton.addEventListener('click', () => {
    displayText = displayText + 3;
    display.textContent = displayText;
});

fourButton.addEventListener('click', () => {
    displayText = displayText + 4;
    display.textContent = displayText;
});

fiveButton.addEventListener('click', () => {
    displayText = displayText + 5;
    display.textContent = displayText;
});

sixButton.addEventListener('click', () => {
    displayText = displayText + 6;
    display.textContent = displayText;
});

sevenButton.addEventListener('click', () => {
    displayText = displayText + 7;
    display.textContent = displayText;
});

eightButton.addEventListener('click', () => {
    displayText = displayText + 8;
    display.textContent = displayText;
});

nineButton.addEventListener('click', () => {
    displayText = displayText + 9;
    display.textContent = displayText;
});

//operation button event listeners

clearButton.addEventListener('click', () => {
    userNumberInputs = [];
    displayText = '';
    display.textContent = displayText;
    lastOperationPressed = undefined;
});

addButton.addEventListener('click', () => {
    userNumberInputs.push(displayText);
    displayText = '';
    display.textContent = '';
    lastOperationPressed = addButton;
});

subtractButton.addEventListener('click', () => {
    userNumberInputs.push(displayText);
    displayText = '';
    display.textContent = '';
    lastOperationPressed = subtractButton;
    console.log(lastOperationPressed);
});

multiplyButton.addEventListener('click', () => {
    userNumberInputs.push(displayText);
    displayText = '';
    display.textContent = '';
    lastOperationPressed = multiplyButton;
});

divideButton.addEventListener('click', () => {
    userNumberInputs.push(displayText);
    displayText = '';
    display.textContent = '';
    lastOperationPressed = divideButton;
});

//other operation buttons here.........

//set up to only work for adding / test case
equalButton.addEventListener('click', () => {
    userNumberInputs.push(displayText);
    displayText = '';
    display.textContent = '';
    if (lastOperationPressed === addButton) {
        add(userNumberInputs);
    } else if (lastOperationPressed === subtractButton) {
        subtract(userNumberInputs);
    } else if (lastOperationPressed === multiplyButton) {
        multiply(userNumberInputs);
    } else if (lastOperationPressed === divideButton) {
        divide(userNumberInputs);
    };
    display.textContent = result;
    userNumberInputs = [result];

})