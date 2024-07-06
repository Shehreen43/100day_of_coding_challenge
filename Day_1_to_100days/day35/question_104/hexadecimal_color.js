"use strict";
//                       QUESTION: 104
/*
Create a function that generates a random hexadecimal color code.
*/
function Generate_hexa_color() {
    const hexadecimalColor = Math.floor(Math.random() * 256);
    const randomHexaColor = hexadecimalColor.toString(16).padStart(6, '0');
    return `#${randomHexaColor}`;
}
;
console.log(Generate_hexa_color());
