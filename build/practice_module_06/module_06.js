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
// こんな感じで型を指定することもできる
numberArray2.push(25);
// numberArray2.push('This is not a number');
// エラー
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100;
// returnString = returnString * 100;
// returnBoolean = returnBoolean * 100;
// 上二つはエラー
