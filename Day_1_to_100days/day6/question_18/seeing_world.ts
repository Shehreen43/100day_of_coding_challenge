//                   QUESTION: 18
/*
Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

//places names
let places: string[] = ["Paris", "Iceland", "Tokyo", "Switzerland", "Norway"];

//print in original order;
console.log("original Order:", places);

//Print in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...places].sort());

console.log("\n" + "original Order:", places);
console.log("Reverse Alphabetical order:", [...places].sort().reverse());

console.log("\n" + "original Order:", places);
console.log("Reverse original order:", places.reverse());

console.log("\n" + "original Order:", places.reverse());
console.log("Alphabetical Order:", places.sort());

console.log("Reverse Alphabetical order:", places.reverse());

