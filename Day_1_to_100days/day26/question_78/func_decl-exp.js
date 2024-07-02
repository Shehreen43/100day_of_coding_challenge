//                   QUESTION: 78
/*
Function Expressions vs. Function Declarations: Compare function expressions and declarations by
creating one of each that performs the same task, such as squaring a number.
*/
// Function Declaration
function squareDeclaration(x) {
    return x * x;
}
// Function Expression
var squareExpression = function (x) {
    return x * x;
};
// Arrow Function Expression
var squareArrow = function (x) { return x * x; };
// Example usage
console.log(squareDeclaration(5)); // Output: 25
console.log(squareExpression(5)); // Output: 25
console.log(squareArrow(5)); // Output: 25
