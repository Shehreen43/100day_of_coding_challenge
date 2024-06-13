//                              QUESTION: 64
/*
Combine Strings and Numbers: Write a function that merges a piece of text with a number.
 For example, if provided with Age: and 30, it should give back Age: 30.
*/
//Write a function that merges a piece of text with a number.
function combineStringAndNumber(text, numbers) {
    return text + numbers;
}
var result = combineStringAndNumber("Age:", 30);
console.log(result);
