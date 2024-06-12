//           QUESTION:45
/*
 Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.
*/
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other arbitrary properties
    }
    
    function creat_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
        const car: Car = {
            manufacturer,
            model
        };
    
        // Add additional properties
        options.forEach(([key, value]) => {
            car[key] = value;
        });
    
        return car;
    }
    
    // Call the function with required information and additional properties
    const my_car = creat_car('Toyota', 'Carolla',['color', 'red'],['year', 2020])
    const myCar = creat_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
    const mycar = creat_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true])
    
console.log(my_car);
console.log(myCar);
console.log(mycar);

    
    