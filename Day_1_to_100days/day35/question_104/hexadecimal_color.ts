//                       QUESTION: 104
/*
Create a function that generates a random hexadecimal color code.
*/
/*
function Generate_hexa_color() {
    const hexadecimalColor = Math.floor(Math.random() * 256);

    const randomHexaColor = hexadecimalColor.toString(16).padStart(6, '0')

    return `#${randomHexaColor}`;
};

console.log(Generate_hexa_color());
*/

function getRandomHexColor(): string {
    // Generate a random number between 0 and 255 for each color component
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert each component to a two-digit hexadecimal string
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // Combine the components into a full hex color code
    return `#${redHex}${greenHex}${blueHex}`;
}

// Example usage
console.log(getRandomHexColor()); // Output: #e3a1b2 (example output, will vary)


  