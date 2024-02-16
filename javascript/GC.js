const prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Enter a number:"));
let n2 = parseInt(prompt("Enter a number:"));
let num1 = n1;
let num2 = n2;

while (num1 !== num2) {
    if (num1 > num2) {
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}

console.log("GCD is:", num1);