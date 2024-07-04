//                        QUESTION: 97
/*
Write a function that returns the current date in the format `DD-MM-YYYY`.
*/
function pad_num(num) {
    return num < 10 ? '0' + num : num.toString();
}
function current_Daate() {
    var today = new Date();
    var day = pad_num(today.getDate());
    var month = pad_num(today.getMonth() + 1);
    var year = today.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
;
console.log(current_Daate());
