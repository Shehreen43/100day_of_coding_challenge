//                     QUESTION: 107
/*
Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
*/
// This function  that checks if a number is divisible by both 2 and 3.
function dividedWith2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
}
;
console.log(dividedWith2And3(12));
console.log(dividedWith2And3(14));
