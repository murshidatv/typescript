class Car {
    name: string;
    mileage: number;
    max_speed: number;

    // Constructor to initialize the Car object
    constructor(name: string, mileage: number, max_speed: number) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
}

// Example usage:
const myCar = new Car('Toyota', 15000, 180);
console.log(`Car Name: ${myCar.name}`);         // Output: Car Name: Toyota
console.log(`Mileage: ${myCar.mileage}`);       // Output: Mileage: 15000
console.log(`Max Speed: ${myCar.max_speed}`);   // Output: Max Speed: 180
