"use strict";
/**
 * 演習；クラスを作成する
 */
class Car2 {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) == 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car2.numberOfCars++;
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
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}.`;
    }
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return Car2.numberOfCars;
    }
}
// Properties
Car2.numberOfCars = 0;
class ElectricCar extends Car2 {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + "is charging");
    }
    brake() {
        return `${this.worker()} is braking with the regenerative braking system`;
    }
}
let myCar3 = new Car2('cool car', 'black', 6);
let myCar4 = new Car2('cool car', 'black', 4);
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());
// console.log(Car2.getNumberOfCars());
