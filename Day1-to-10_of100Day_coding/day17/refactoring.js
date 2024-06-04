//                  QUESTION : 51 
/*
Question 51: Refactoring to Arrow Functions: Take a simple function that calculates
 the area of a rectangle and refactor it into an arrow function.
*/
//function that calculates the area of a rectangle.
var calculateArea = function (length, width) {
    return length * width;
};
//refactor it into an arrow function.
var calculateAreaArrow = function (length, width) { return length * width; };
console.log(calculateAreaArrow(3, 7));
