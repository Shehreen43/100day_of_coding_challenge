//                   QUESTION: 78
/*
Function Expressions vs. Function Declarations: Compare function expressions and declarations by 
creating one of each that performs the same task, such as squaring a number.
*/
// Function Declaration
function squareDeclaration(x: number): number {
    return x * x;
    
}

// Function Expression
const squareExpression = function(x: number): number {
    return x * x;
};

// Arrow Function Expression
const squareArrow = (x: number): number => x * x;

// Example usage
console.log(squareDeclaration(5)); // Output: 25
console.log(squareExpression(5));  // Output: 25
console.log(squareArrow(5));       // Output: 25
