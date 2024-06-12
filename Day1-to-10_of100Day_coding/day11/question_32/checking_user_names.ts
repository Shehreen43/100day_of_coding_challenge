//                   QUESTION:32
/*
 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// Q32 (Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username)
// list of five current_users
let current_users = ['john', 'alice', 'Harry', 'sophia', 'Abdullah'];

// list of new_users
let new_users: string[] = ['Ahemad', 'mike', 'JOHN', 'Sophia', 'sam'];
 
//work for case-insensitive comparison
let curr_users_lower = current_users.map(curr_user => curr_user.toLowerCase());

// loop through new_users:
for(let new_user of new_users ){

    //work for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();

    if (curr_users_lower.includes(new_user_lower)) {

        //check any username is already in use 
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }else {
        console.log(`The username '${new_user}' is available.`);
    };
};
