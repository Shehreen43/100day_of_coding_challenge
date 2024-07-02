//                 QUESTION: 93
/*
Find the index of `Banana` in an array of fruits and replace it with `Mango`.
*/
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf('Banana');
    if (index !== -1) {
        fruits[index] = "Mango";
    }
    return fruits;
}
;
var fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: ".concat(fruits));
console.log("Index of Banana: ".concat(fruits.indexOf('Banana')));
console.log("Replace of Banana with Mango: ".concat(replaceBananaWithMango(fruits))); // Output: 
