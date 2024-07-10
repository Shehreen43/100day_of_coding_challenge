"use strict";
//               QUESTION: 117
/*
Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
*/
function result(grade) {
    switch (grade) {
        case 'A':
            console.log(`Your Grade A`);
            break;
        case 'B':
            console.log(`Your Grade B`);
            break;
        case 'C':
            console.log(`Your Grade C`);
            break;
        case 'D':
            console.log(`Your Grade D`);
            break;
        case 'F':
            console.log(`Your Grade F`);
            break;
        default:
            console.log(`Invalid Grade`);
            break;
    }
}
result('A');
result('a');
