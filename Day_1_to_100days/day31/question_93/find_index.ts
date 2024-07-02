//                 QUESTION: 93
/*
Find the index of `Banana` in an array of fruits and replace it with `Mango`.
*/

function replaceBananaWithMango(fruits: string[]): string[] {
  const index = fruits.indexOf('Banana');
 
  if (index !== -1) {
    fruits[index] = "Mango";
 }

return fruits;
};

let fruits: string[] = [ "Apple", "Banana", "Cherry"];
console.log(`Fruits: ${fruits}`);

console.log(`Index of Banana: ${fruits.indexOf('Banana')}`);
console.log(`Replace of Banana with Mango: ${replaceBananaWithMango(fruits)}`); // Output: 
