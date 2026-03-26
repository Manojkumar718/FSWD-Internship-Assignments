// Variables
let a = 10;
let b = 5;

// Functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
}

// Console Output
console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", multiply(a, b));
console.log("Division:", divide(a, b));