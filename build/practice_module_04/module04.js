"use strict";
function addNumbers4(x, y) {
    return x + y;
}
console.log(addNumbers4(1, 2));
// 匿名関数
/**
 * コードに検出されたときのみ実行、事前に読み込まれないが、呼び出す前に宣言する必要がある
 */
let addNumbers5 = function (x, y) {
    return x + y;
};
// 
console.log(addNumbers5(1, 2));
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
// アロー関数
let addNumbers6 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
let addThreeNumbers = (x, y, z) => x + y + z;
