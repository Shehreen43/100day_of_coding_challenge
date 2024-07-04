//               QUETION: 98
/*
Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/
function daysUntil_NewYear() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var nextNewYear = new Date(currentYear + 1, 0, 1);
    // Convert Date objects to timestamps
    var timeDiff = nextNewYear.getTime() - today.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysDiff;
}
console.log("There are ".concat(daysUntil_NewYear(), " days left until New Year."));
