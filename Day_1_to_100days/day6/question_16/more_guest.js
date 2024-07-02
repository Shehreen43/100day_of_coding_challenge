//                QUESTION: 16
/*
 More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

*/
// Q 16 (More Gusts: you found bigger dinner table, so invit more guest and add new guest to the beginnig, middle and
//end of your list. print a new set of invitation msg to all
let guests = ["Noureen", "Areeba", "Ali"];
guests.forEach((guest) => {
    console.log(`Hello ${guest},"please come to dinner.`);
});
console.log("\n" +
    "Greate news, I found a bigger dinner table and more people will be joining us this evening.");
//adding more guests
guests.unshift("Owais"); //at the begin
guests.splice(Math.floor(guests.length / 2), 0, "Muhammad"); // at the middle
guests.push("Qasim"); // at the end
guests.forEach((Guests) => {
    console.log(`Dear ${Guests}, would you like to join us for dinner ?`);
});
export {};
