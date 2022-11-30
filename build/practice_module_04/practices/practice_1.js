"use strict";
function displayAlert(message) {
    alert('The message is ' + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
let addNumbers4_1 = (x, y) => x + y;
let substrractNumbers4_1 = (x, y) => x - y;
console.log(addNumbers4_1(1, 2));
console.log(substrractNumbers4_1(1, 2));
function buildArray(items, sortOrder) {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
}
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
// console.log(myArray1);
// console.log(myArray2);
function loanCalculator(principle, interestRate, months = 12) {
    let interest = interestRate / 1200; // Calculates the monthly interest rate 
    let payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
}
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);
