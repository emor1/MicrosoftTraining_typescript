"use strict";
class Car3 {
    constructor() {
        this.make = "Generic Car";
        this.doors = 4;
    }
}
class ElectricCar2 extends Car3 {
    constructor() {
        super(...arguments);
        this.make = 'Electric car';
        this.doors = 4;
    }
}
class Truck extends Car3 {
    constructor() {
        super(...arguments);
        this.make = 'truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating`);
    return car;
}
let myElectircCar = new ElectricCar2;
accelerate(myElectircCar);
let myTruck = new Truck;
accelerate(myTruck);
