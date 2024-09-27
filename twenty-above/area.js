"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Base class that contains methods for calculating the area of different objects
var Area = /** @class */ (function () {
    function Area() {
    }
    // Method to calculate the area of a circle
    Area.prototype.circle = function (radius) {
        return Math.PI * radius * radius;
    };
    // Method to calculate the area of a square
    Area.prototype.square = function (length) {
        return length * length;
    };
    // Method to calculate the area of a rectangle
    Area.prototype.rectangle = function (length, width) {
        return length * width;
    };
    // Method to calculate the area of a triangle
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
// Derived class which inherits the Area class and provides a menu-driven interface
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Main function to display menu and call appropriate methods
    MyClass.prototype.main = function () {
        console.log('Choose an option to calculate the area:');
        console.log('1. Circle');
        console.log('2. Square');
        console.log('3. Rectangle');
        console.log('4. Triangle');
        var choice = parseInt(readlineSync.question('Enter your choice (1-4): '));
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
    };
    // Method to get input and calculate the area of a circle
    MyClass.prototype.circleArea = function () {
        var radius = parseFloat(readlineSync.question('Enter the radius of the circle: '));
        var area = this.circle(radius);
        console.log("Area of the circle is: ".concat(area.toFixed(2)));
    };
    // Method to get input and calculate the area of a square
    MyClass.prototype.squareArea = function () {
        var length = parseFloat(readlineSync.question('Enter the length of the square: '));
        var area = this.square(length);
        console.log("Area of the square is: ".concat(area));
    };
    // Method to get input and calculate the area of a rectangle
    MyClass.prototype.rectangleArea = function () {
        var length = parseFloat(readlineSync.question('Enter the length of the rectangle: '));
        var width = parseFloat(readlineSync.question('Enter the width of the rectangle: '));
        var area = this.rectangle(length, width);
        console.log("Area of the rectangle is: ".concat(area));
    };
    // Method to get input and calculate the area of a triangle
    MyClass.prototype.triangleArea = function () {
        var base = parseFloat(readlineSync.question('Enter the base of the triangle: '));
        var height = parseFloat(readlineSync.question('Enter the height of the triangle: '));
        var area = this.triangle(base, height);
        console.log("Area of the triangle is: ".concat(area));
    };
    return MyClass;
}(Area));
// Run the program
var myApp = new MyClass();
myApp.main();
