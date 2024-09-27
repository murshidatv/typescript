var Car = /** @class */ (function () {
    // Constructor to initialize the Car object
    function Car(name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    return Car;
}());
// Example usage:
var myCar = new Car('Toyota', 15000, 180);
console.log("Car Name: ".concat(myCar.name)); // Output: Car Name: Toyota
console.log("Mileage: ".concat(myCar.mileage)); // Output: Mileage: 15000
console.log("Max Speed: ".concat(myCar.max_speed)); // Output: Max Speed: 180
