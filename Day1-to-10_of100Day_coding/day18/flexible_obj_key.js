//                              QUESTION: 54
/*
Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on
 what you need at that moment, like adjusting labels based on user choices.
*/
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    ;
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "dark");
userPreference = createObjectWithDynamicKey("name", "shehreen");
// Showing the user's choice
console.log(userPreference);
// Function to adjust labels of a flexible object based on user input
function adjustLabels(obj, newLabels) {
    var adjustedObject = {};
    for (var key in obj) {
        // Check if there is a new label for the current key
        var newKey = newLabels[key] || key;
        adjustedObject[newKey] = obj[key];
    }
    return adjustedObject;
}
// Example usage
var originalObject = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};
// User input for new labels
var userLabels = {
    name: 'fullName',
    age: 'yearsOld'
};
var adjustedObject = adjustLabels(originalObject, userLabels);
console.log('Original Object:', originalObject);
console.log('Adjusted Object:', adjustedObject);
