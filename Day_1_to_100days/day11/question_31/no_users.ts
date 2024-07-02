//                    QUESTION: 31
/*
 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
//the list of users is not empty.
let user_names: string[] = ["Admin", "Sophia", "John", "Kinza", "shaheer"];

//If the list is empty
user_names = [];

if (user_names.length === 0) {
  console.log("We need to find some users!");
} else {
  user_names.forEach((userName) => {
    if (userName.toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else if (userName.toLowerCase().length > 0) {
      console.log(`Hello ${userName}, thank you for logging in again.`);
    }
  });
}
