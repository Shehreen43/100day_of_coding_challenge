//               QUESTION:30
/*
 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
//Make a array of five or more usernames and admin
let userNames = ['Admin', 'Sophia', 'John', 'Kinza', 'shaheer'];
// If the username is 'admin', print a special greeting
userNames.forEach((userName) => {
    if (userName.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?\n');
    }
    else {
        // print a generic greeting
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
    ;
});
export {};
