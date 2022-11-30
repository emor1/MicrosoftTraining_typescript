function displayAlert(message:string) {
    alert('The message is ' + message);
}

function sum(input:number[]) :number{
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

type calculator = (x: number, y: number) => number;

let addNumbers4_1 : calculator=(x:number, y:number):number => x+y;
let substrractNumbers4_1 : calculator=(x:number, y:number):number => x-y;

console.log(addNumbers4_1(1,2));
console.log(substrractNumbers4_1(1,2));



function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;

    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }

    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

type compareFunctionType = (a:number, b:number)=>number;

let sortDescending : compareFunctionType = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
 }
 
let sortAscending : compareFunctionType = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8,'descending');

// console.log(myArray1);
// console.log(myArray2);


function loanCalculator (principle: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);