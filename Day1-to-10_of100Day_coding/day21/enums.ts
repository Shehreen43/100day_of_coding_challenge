//                  QUESTION: 61

/* 
Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
*/
export enum VehicleCategory {
    Car = "Car",
    Truck = "Truck",
    Motorcycle = "Motorcycle"
}

interface Vehicle {
    category: VehicleCategory;
    make: string;
    model: string;
    year: number;
}

const car: Vehicle = {
    category: VehicleCategory.Car,
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};


function getVehicleInfo(vehicle: Vehicle): string {
    return `This is a ${vehicle.year} ${vehicle.make} ${vehicle.model}, which is a ${vehicle.category}.`;
}

console.log(getVehicleInfo(car));
