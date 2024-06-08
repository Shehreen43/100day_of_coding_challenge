//                              QUESTION: 54
/*
Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on
 what you need at that moment, like adjusting labels based on user choices.
*/

// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value:) {
    interface DynamicObject  {
        [key: string]: any
    };
    let dynamicObject: DynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
userPreference = createObjectWithDynamicKey("name", "shehreen");
// Showing the user's choice
console.log(userPreference);
//
 ///////////////////////////////
  // Define a type for a flexible object with string keys and any values
interface FlexibleObject {
    [key: string]: any;
  }
  
  // Function to adjust labels of a flexible object based on user input
  function adjustLabels(obj: FlexibleObject, newLabels: { [key: string]: string }): FlexibleObject {
    const adjustedObject: FlexibleObject = {};
    
    for (const key in obj) {
      // Check if there is a new label for the current key
      const newKey = newLabels[key] || key;
      adjustedObject[newKey] = obj[key];
    }
    
    return adjustedObject;
  }
  
  // Example usage
  const originalObject: FlexibleObject = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
  };
  
  // User input for new labels
  const userLabels = {
    name: 'fullName',
    age: 'yearsOld'
  };
  
  const adjustedObject = adjustLabels(originalObject, userLabels);
  
  console.log('Original Object:', originalObject);
  console.log('Adjusted Object:', adjustedObject);
  