//                     QUESTION : 48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


let pricesSet1 = [20000, 30000,10000];
let pricesSet2 = [15000, 5000, 25000];

let combinePrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);

console.log(combinePrices); 

// output :[ 5000, 10000, 15000, 20000, 25000, 30000 ]
