//              QUESTION: 38
/*
Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
//define a function 
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}.`);
}
;
// Calling the function for different cities
describe_city('karachi');
describe_city('Lahore');
describe_city('Istanbul', 'Turkey');
export {};
