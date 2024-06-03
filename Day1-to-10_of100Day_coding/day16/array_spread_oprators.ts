//                     QUESTION : 48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


let priceSet1 = [20000, 30000,10000];
let priceSet2 = [15000, 5000, 25000];

let combinedPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);

console.log(combinedPrices); 

// output :[ 5000, 10000, 15000, 20000, 25000, 30000 ]
