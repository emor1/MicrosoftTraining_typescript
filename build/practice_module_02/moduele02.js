"use strict";
// let x: number;
// let y = 1;
// let z;
x = 1;
// x = "one";
// z = "one";
// ブール型
let flag;
let yes = true;
let no = false;
//Number, BigInteger型
let x_2;
let y_2 = 0;
let z_2 = 123.456;
// let big: bigint = 100000;
// 列挙型
/*
    一連の関連する定数を操作
*/
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
// Any型
let randomValue = 10;
randomValue = 'Neko';
randomValue = true;
// Unknown型：プロパティにアクセスしたりなどができない、安全
// let unkownTest:unknown = 10;
// console.log(unkownTest.name);
// unkownTest();
// unkownTest.toUpperCase;
// 配列
let list = [1, 2, 3];
let list_arry = [1, 2, 3];
// タプル
let person1 = ['Marcia', 35];
