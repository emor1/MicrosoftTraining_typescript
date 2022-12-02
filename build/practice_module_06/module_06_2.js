"use strict";
let returnNumber2 = {
    value: 25,
    message: 'hello'
};
let returnString2 = {
    value: 'Hello',
    message: 25
};
console.log(returnNumber2);
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
class processIdentity2 {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor2 = new processIdentity2(100, 'Hello');
processor2.process(); // Displays 'Hello'
// processor2.value = '100';       // Type check error
// インターフェースを使わずにジェネリッククラスを宣言することもできる
class processIdentity3 {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor3 = new processIdentity3(100, 'hello');
processor3.getIdentity();
