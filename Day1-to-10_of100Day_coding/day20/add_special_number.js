//                        QUESTION: 59
/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
*/
//Making a program that creates custom adders.
function createAdder(specificeNumber) {
    return function (numberToAdd) {
        return specificeNumber + numberToAdd;
    };
}
//create adders
var addFive = createAdder(5);
var addTen = createAdder(10);
var addMinusFive = createAdder(-5);
//using the created adders
console.log("Add 3 to 5 : ".concat(addFive(3)));
console.log("Add 10 to 10 : ".concat(addTen(10)));
console.log("Add 22 to -5 : ".concat(addMinusFive(22)));
