//                  QUESTION: 68
/*
Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
 Round the result to two decimal places.
*/
function MultiplyDecimals(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input(s) : Both inputs must be numbers.");
        return null;
    }
    var product = num1 * num2;
    return parseFloat(product.toFixed(2));
}
;
// example usage. 
console.log(MultiplyDecimals(2.5, 3.7));
console.log(MultiplyDecimals(3.456, "abc")); // Output: null and logs an error message.
