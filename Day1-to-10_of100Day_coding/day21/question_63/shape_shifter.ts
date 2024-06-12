//                             QUESTION: 63
/*
Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
including properties unique to each shape.
*/

// Define the interface for a Circle
interface Circle {
    kind: "circle";  // Discriminant property
    radius: number;
}

// Define the interface for a Rectangle
interface Rectangle {
    kind: "rectangle";  // Discriminant property
    width: number;
    height: number;
}

// Create a type alias for Shape, which can be either a Circle or a Rectangle
type Shape = Circle | Rectangle;

// Type guard to check if a shape is a Circle
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

// Type guard to check if a shape is a Rectangle
function isRectangle(shape: Shape): shape is Rectangle {
    return shape.kind === "rectangle";
}

// Function to describe the shape
function describeShape(shape: Shape): string {
    if (isCircle(shape)) {
        return `Circle with radius ${shape.radius}`;
    } else if (isRectangle(shape)) {
        return `Rectangle with width ${shape.width} and height ${shape.height}`;
    } else {
        return "Unknown shape";
    }
}

// Example usage
const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };

console.log(describeShape(circle));     // Output: Circle with radius 5
console.log(describeShape(rectangle));  // Output: Rectangle with width 10 and height 20



