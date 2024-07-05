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
function getRandomHexColor() {
    // Generate a random number between 0 and 255 for each color component
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // Convert each component to a two-digit hexadecimal string
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');
    // Combine the components into a full hex color code
    return "#".concat(redHex).concat(greenHex).concat(blueHex);
}
// Example usage
console.log(getRandomHexColor()); // Output: #e3a1b2 (example output, will vary)
