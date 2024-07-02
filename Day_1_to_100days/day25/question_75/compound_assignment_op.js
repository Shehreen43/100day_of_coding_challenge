//              QUESTION: 75
/*
Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
Start with `x = 4` and perform a series of operations (addition, subtraction, multiplication, division) on `x` using compound operators.
*/
function compoundAssignment() {
    // Start with x = 4
    var x = 4;
    // Log initial value
    console.log("Initial x:", x);
    // Perform addition
    x += 6; // Equivalent to x = x + 6
    console.log("After addition (x += 6):", x); // x is now 10
    // Perform subtraction
    x -= 2; // Equivalent to x = x - 2
    console.log("After subtraction (x -= 2):", x); // x is now 8
    // Perform multiplication
    x *= 3; // Equivalent to x = x * 3
    console.log("After multiplication (x *= 3):", x); // x is now 24
    // Perform division
    x /= 4; // Equivalent to x = x / 4
    console.log("After division (x /= 4):", x); // x is now 6
    // Perform modulus (remainder) operation
    x %= 5; // Equivalent to x = x % 5
    console.log("After modulus (x %= 5):", x); // x is now 1
}
// Call the function to see the results
compoundAssignment();
