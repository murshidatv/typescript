import * as readlineSync from 'readline-sync';

// Base class that contains methods for calculating the area of different objects
class Area {
    // Method to calculate the area of a circle
    public circle(radius: number): number {
        return Math.PI * radius * radius;
    }

    // Method to calculate the area of a square
    public square(length: number): number {
        return length * length;
    }

    // Method to calculate the area of a rectangle
    public rectangle(length: number, width: number): number {
        return length * width;
    }

    // Method to calculate the area of a triangle
    public triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

// Derived class which inherits the Area class and provides a menu-driven interface
class MyClass extends Area {

    // Main function to display menu and call appropriate methods
    public main(): void {
        console.log('Choose an option to calculate the area:');
        console.log('1. Circle');
        console.log('2. Square');
        console.log('3. Rectangle');
        console.log('4. Triangle');

        let choice: number = parseInt(readlineSync.question('Enter your choice (1-4): '));

        switch (choice) {
            case 1:
                this.circleArea();
                break;
            case 2:
                this.squareArea();
                break;
            case 3:
                this.rectangleArea();
                break;
            case 4:
                this.triangleArea();
                break;
            default:
                console.log('Invalid choice!');
        }
    }

    // Method to get input and calculate the area of a circle
    private circleArea(): void {
        let radius = parseFloat(readlineSync.question('Enter the radius of the circle: '));
        let area = this.circle(radius);
        console.log(`Area of the circle is: ${area.toFixed(2)}`);
    }

    // Method to get input and calculate the area of a square
    private squareArea(): void {
        let length = parseFloat(readlineSync.question('Enter the length of the square: '));
        let area = this.square(length);
        console.log(`Area of the square is: ${area}`);
    }

    // Method to get input and calculate the area of a rectangle
    private rectangleArea(): void {
        let length = parseFloat(readlineSync.question('Enter the length of the rectangle: '));
        let width = parseFloat(readlineSync.question('Enter the width of the rectangle: '));
        let area = this.rectangle(length, width);
        console.log(`Area of the rectangle is: ${area}`);
    }

    // Method to get input and calculate the area of a triangle
    private triangleArea(): void {
        let base = parseFloat(readlineSync.question('Enter the base of the triangle: '));
        let height = parseFloat(readlineSync.question('Enter the height of the triangle: '));
        let area = this.triangle(base, height);
        console.log(`Area of the triangle is: ${area}`);
    }
}

// Run the program
let myApp = new MyClass();
myApp.main();
