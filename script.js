let firstNumber = undefined;
let secondNumber = undefined;
let operator = undefined;


//define functions

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