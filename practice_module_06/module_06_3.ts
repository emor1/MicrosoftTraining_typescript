class Car3{
    make:string = "Generic Car";
    doors: number = 4;
}

class ElectricCar2 extends Car3{
    make = 'Electric car';
    doors = 4;
}

class Truck extends Car3{
    make = 'truck';
    doors = 2;
}

function accelerate<T extends Car3>(car:T){
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating`);
    return car;
}

let myElectircCar = new ElectricCar2;
accelerate<ElectricCar2>(myElectircCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);