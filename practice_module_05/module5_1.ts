/**
 * 演習；クラスを作成する
 */

class Car {
    // Properties
    _make: string;
    _color: string;
    _doors: number;

    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) == 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    // getとsetを使って、データを検証したり、制約をつけるなどの操作をしてからプログラムに戻せる
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }
    // ドアのセッターに制約を付けた例
    set doors(doors) {
        if ((doors % 2) == 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}.`
    }

    worker(): string {
        return this._make;
    }
}

// インスタンスの生成
let myCar = new Car('Cool car company', 'blue', 2);

console.log(myCar.color);
console.log(myCar._color);

let myCar2 = new Car('Galaxy Motors', 'red');

console.log(myCar.accelerate(35));
console.log(myCar.brake());
console.log(myCar.turn('right'))