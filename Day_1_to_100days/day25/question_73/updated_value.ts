//                     QUESTION: 73
/*
Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value.
 Then, update its value within the same function and log both the initial and updated values.
*/

function assignAndUpdate(): void {
    // Declare a variable using let and assign an initial value
    let message: string = "Initial value with let.";

    // Log the initial value
    console.log("Initial value:", message);

    // Update the value of the variable
    message = "Updated value with let.";

    // Log the updated value
    console.log("Updated value:", message);
}

// Call the function to see the results
assignAndUpdate();
