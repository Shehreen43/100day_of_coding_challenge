"use strict";
//                  QUESTION: 61
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCategory = void 0;
/*
Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
*/
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Truck"] = "Truck";
    VehicleCategory["Motorcycle"] = "Motorcycle";
})(VehicleCategory || (exports.VehicleCategory = VehicleCategory = {}));
var car = {
    category: VehicleCategory.Car,
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};
function getVehicleInfo(vehicle) {
    return "This is a ".concat(vehicle.year, " ").concat(vehicle.make, " ").concat(vehicle.model, ", which is a ").concat(vehicle.category, ".");
}
console.log(getVehicleInfo(car));
