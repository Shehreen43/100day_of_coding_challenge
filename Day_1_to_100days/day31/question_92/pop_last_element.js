//                     QUESTION: 92
/*
Write a function to remove the last element from an array and return the removed element.
*/
var vegetables = ['Tomato', 'Potato', 'Onion', 'Carrot', 'Brinjal'];
console.log('Vegetables:', vegetables);
// Define a function that remove the last element from an array
function removeLastElement(arr) {
    return arr.pop();
}
;
console.log(removeLastElement(vegetables));
console.log('After Removed Last Element form the Vegetables List:', vegetables);
