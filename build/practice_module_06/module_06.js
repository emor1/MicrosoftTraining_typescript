"use strict";
/*
// このままだと、配列の中身が統一されない
function getArray(items: any[]): any[]{
    return new Array().concat(items);
}
*/
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cat', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Rabbit');
// numberArray.push('This is not a number')
// エラーが発生する
// stringArray.push(30);
console.log(numberArray);
console.log(stringArray);
let numberArray2 = getArray([5, 10, 15, 20]);
numberArray2.push(25);
numberArray2.push('This is not a number');
