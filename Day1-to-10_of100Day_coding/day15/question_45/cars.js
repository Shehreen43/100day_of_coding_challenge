function creat_car(manufacturer, model, ...options) {
    const car = {
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
const my_car = creat_car('Toyota', 'Carolla', ['color', 'red'], ['year', 2020]);
const myCar = creat_car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
const mycar = creat_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]);
console.log(my_car);
console.log(myCar);
console.log(mycar);
export {};
