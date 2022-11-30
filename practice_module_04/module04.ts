function addNumbers4 (x:number, y:number):number{
    return x+y;
}

console.log(addNumbers4(1,2));

// 匿名関数
/**
 * コードに検出されたときのみ実行、事前に読み込まれないが、呼び出す前に宣言する必要がある
 */

let addNumbers5 = function(x:number, y:number):number{
    return x+y;
}
// 
console.log(addNumbers5(1,2));

let total = function(input: number[]):number{
    let total: number = 0;
    for(let i=0;i<input.length;i++){
        if(isNaN(input[i])){
            continue;
        }
        total+=Number(input[i]);
    }
    return total;
}

console.log(total([1,2,3]));

// アロー関数
let addNumbers6 = (x:number, y:number):number=>x+y;
let total2 = (input:number[]):number=>{
    let total:number=0;
    for(let i=0;i<input.length;i++){
        if(isNaN(input[i])){
            continue;
        }
        total+=Number(input[i]);
    }
    return total;
}


let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;