//                QUESTION: 14
/*
Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.

*/
// Define an arrary to invite gust to dinner  
let guestList = ["Noureen", "Areeba", "Ali"];
// inviting msg to each gust
let invitation = guestList.map(guest => `I am inviting you ${guest},"please come to my dinner party.`);
//print message
console.log(invitation);
export {};
