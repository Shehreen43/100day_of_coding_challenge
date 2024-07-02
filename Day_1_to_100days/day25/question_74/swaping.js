//                 QUESTION:74
/*
Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables `a = 5` and `b = 10`, then swap their values so that `a` becomes `10` and `b` becomes `5`.
*/
function swapWithDestructuring() {
    var _a;
    var a = 5;
    var b = 10;
    console.log("Before swap:");
    console.log("a =", a);
    console.log("b =", b);
    _a = [b, a], a = _a[0], b = _a[1]; // Swapping values
    console.log("\nAfter swap:");
    console.log("a =", a);
    console.log("b =", b);
}
swapWithDestructuring();
