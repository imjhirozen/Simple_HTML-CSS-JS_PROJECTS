let display = document.getElementById("display");

function clickToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let result = getValue(display.value);
    display.value = result;
}

function getValue(value) {

    // Split the input string into numbers and operations
    let tokens = value.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g);
    let numbers = [];
    let operations = [];

    // Separate numbers and operations into different arrays
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            numbers.push(parseFloat(tokens[i]));
        } else {
            operations.push(tokens[i]);
        }
    }

    let result = numbers[0];

    // Perform calculations based on operations
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            result += numbers[i + 1];
        } else if (operations[i] === '-') {
            result -= numbers[i + 1];
        } else if (operations[i] === '*') {
            result *= numbers[i + 1];
        } else if (operations[i] === '/') {
            result /= numbers[i + 1];
        }
    }

    return result;
}