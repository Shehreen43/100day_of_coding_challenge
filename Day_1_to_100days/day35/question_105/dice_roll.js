//              QUESTION: 105
/*
Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
*/
function diceRoll() {
    //A function return a random integer between 1 and 6.
    return Math.floor(Math.random() * 6) + 1;
}
;
console.log(diceRoll());
