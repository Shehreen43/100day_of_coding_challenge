//                       QUESTION: 104
/*
Create a function that generates a random hexadecimal color code.
*/
function Generate_hexa_color() {
    var hexadecimalColor = Math.floor(Math.random() * 256);
    var randomHexaColor = hexadecimalColor.toString(16).padStart(6, '0');
    return "#".concat(randomHexaColor);
}
;
console.log(Generate_hexa_color());
