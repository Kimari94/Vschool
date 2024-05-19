const readlineSync = require('readline-sync');

const add  = (num1, num2) => {
   return num1 + num2
}

const sub = (num1, num2) => {
   return num1 - num2
}

const div = (num1, num2) => {
   return num1 / num2
}

const mul = (num1, num2) => {
   return num1 * num2
}

const firstNumber = parseFloat(readlineSync.question('Please enter your first number.'));

const secondNumber = parseFloat(readlineSync.question('Please enter your second number.'));

const operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div:');

let result;
if (operation === 'add') {
    result = add(firstNumber, secondNumber);
} else if (operation === 'sub') {
    result = sub(firstNumber, secondNumber);
} else if (operation === 'mul') {
    result = mul(firstNumber, secondNumber);
} else if (operation === 'div') {
    result = div(firstNumber, secondNumber);
} else {
    console.log('Invalid operation');
    return;
}

console.log(`The result is: ${result}`)