//                         QUESTION: 69
/*
Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
 Use an object to return both values.
*/
interface DividingResult {
  quotient: number;
  remainder: number;
}

function dividingAndRemainder(dividend : number, divisor: number): DividingResult {
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
let _result = dividingAndRemainder(10, 3);
console.log(_result);