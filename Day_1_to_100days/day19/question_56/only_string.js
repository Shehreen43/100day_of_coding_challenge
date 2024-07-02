//                           QUESTION: 56
/*
Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/
//Store a mix of different types of items.
var mixedArray = ["hello", 1, "world", 2, true, , { name: 'shehreen' }, "typescript", 3];
//Pick out only the words.
var onlyStrings = mixedArray.filter(function (item) { return typeof item === "string"; });
// Print the only the words.
console.log(onlyStrings);
