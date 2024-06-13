//                  QUESTION: 71
/*
Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not.
 Try to reassign a `const`-declared variable and catch the error.
*/
// Example with `let`
function reassignLet() {
    var x = 10;
    console.log("Initial value of x:", x); // Output: Initial value of x: 10
    x = 20; // Allowed reassignment
    console.log("Reassigned value of x:", x); // Output: Reassigned value of x: 20
}
reassignLet();
// Example with `const`
function reassignConst() {
    var y = 30;
    console.log("Initial value of y:", y); // Output: Initial value of y: 30
    try {
        // Attempt to reassign
        y = 200;
    }
    catch (error) {
        console.error("Error when trying to reassign const:", error.message);
    }
}
reassignConst();
