//                        QUESTION: 97
/*
Write a function that returns the current date in the format `DD-MM-YYYY`.
*/
function padnum(num: number) {
    return num < 10 ? '0' + num : num.toString();
}

function currentDaate(): string  {
    const today = new Date();
    const day = padnum(today.getDate());
    const month = padnum(today.getMonth() + 1);
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
};

console.log(currentDaate());
