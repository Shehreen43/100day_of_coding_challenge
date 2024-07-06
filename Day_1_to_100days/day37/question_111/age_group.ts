//                    QUESTION: 111
/*
Use an if-else-if chain to categorize a persons age group (child, teenager, adult).
*/
function categorizeAge(personsage: number): string {
    if (personsage < 13) {
        return "The person is a child.";
    } else if (personsage < 20) {
        return "The person is a teenager.";
    } else {
        return "The person is an adult.";
    }
}

console.log(categorizeAge(7));
console.log(categorizeAge(18));
console.log(categorizeAge(24));

