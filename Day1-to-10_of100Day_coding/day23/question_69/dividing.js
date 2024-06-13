function dividingAndRemainder(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
var _result = dividingAndRemainder(10, 3);
console.log(_result);
