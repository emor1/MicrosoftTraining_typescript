// let x: number;
// let y = 1;
// let z;

x = 1;
// x = "one";
// z = "one";


// ブール型
let flag: boolean;
let yes = true;
let no = false;

//Number, BigInteger型
let x_2: number;
let y_2 = 0;
let z_2: number = 123.456;
// let big: bigint = 100000;


// 列挙型
/*
    一連の関連する定数を操作
*/
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);


// Any型
let randomValue: any = 10;
randomValue = 'Neko';
randomValue = true;
// Unknown型：プロパティにアクセスしたりなどができない、安全
// let unkownTest:unknown = 10;
// console.log(unkownTest.name);
// unkownTest();
// unkownTest.toUpperCase;


// 配列
let list: number[] = [1, 2, 3];
let list_arry: Array<Number> = [1, 2, 3];


// タプル
let person1: [string, number] = ['Marcia', 35];