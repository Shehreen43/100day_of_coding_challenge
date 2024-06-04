//                  QUESTION : 51 
/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates
 the area of a rectangle and refactor it into an arrow function.
*/

//function that calculates the area of a rectangle.
const calculateArea = function (length: number, width: number): number{
    return length * width;
};

//refactor it into an arrow function.
let calculateAreaArrow = (length: number, width: number): number => length * width;

console.log(calculateAreaArrow(3, 7));


