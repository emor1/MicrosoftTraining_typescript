interface Identity<T, U>{
    value: T;
    message: U;
}

let returnNumber2: Identity<number, string> ={
    value: 25,
    message: 'hello'
}

let returnString2: Identity<string, number> ={
    value: 'Hello',
    message: 25
}
console.log(returnNumber2);


// ジェネリックインターフェースを関数型として宣言する

interface ProcessIdentity<T,U>{
    (value: T, message:U): T;
}

function processIdentity<T,U>(value:T, message:U):T{
    console.log(message);
    return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// ジェネリック インターフェイスをクラス型として宣言する
interface ProcessIdentity2<T, U>{
    value:T;
    message: U;
    process(): T;
}

class processIdentity2<X,Y> implements ProcessIdentity2<X, Y>{
    value: X;
    message: Y;
    constructor(val:X, msg:Y){
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value;
    }
}
let processor2 = new processIdentity2<number, string>(100, 'Hello');
processor2.process();           // Displays 'Hello'
// processor2.value = '100';       // Type check error

// インターフェースを使わずにジェネリッククラスを宣言することもできる
class processIdentity3<T,U>{
    private _value:T;
    private _message:U;
    constructor(value:T, message:U){
        this._value = value;
        this._message = message;
    }
    getIdentity():T{
        console.log(this._message);
        return this._value;
    }
}

let processor3 = new processIdentity3<number, string>(100,'hello');
processor3.getIdentity();