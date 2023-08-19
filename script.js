//variables for operation functions
let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;

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

function add(firstNumber, secondNumber) {
    return result = firstNumber + secondNumber;

};

function subtract(firstNumber, secondNumber) {
    return result = firstNumber - secondNumber;

};

function multiply(firstNumber, secondNumber) {
    return result = firstNumber * secondNumber;

};

function divide(firstNumber, secondNumber) {
    return result = firstNumber / secondNumber;

};

//define button-to-display functions

