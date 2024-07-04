//               QUETION: 98
/*
Create a JavaScript snippet that calculates and logs how many days are left until New Year.
*/

function daysUntilNewYear(): number {
    const today: Date = new Date();
    const currentYear: number = today.getFullYear();
    const nextNewYear: Date = new Date(currentYear + 1, 0, 1);

    // Convert Date objects to timestamps
    const timeDiff: number = nextNewYear.getTime() - today.getTime();
    const daysDiff: number = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

    return daysDiff;
}

console.log(`There are ${daysUntilNewYear()} days left until New Year.`);
