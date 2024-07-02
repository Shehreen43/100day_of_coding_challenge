//                  QUESTION:15
/*
 Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.

*/
//original guest list
let guests:string[] = ["Noureen","Areeba","Ali"];

// Print the name of the guest who can't make it
let unableToAttend = guests[1];
console.log(`sorrry, ${unableToAttend} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
guests[1] = "Amna";
console.log(`Dear ${guests[1]} would you like to join us for dinner ?`);

guests.forEach(guests => {
    
    //printing invitations to guests
    console.log(`\nDear ${guests},\nYou are cordially invited to my dinner party. It would be an honor to have you join us.\nSincerely,shehreen `);
});

