// Sets up details about a smartphone
var smartphone = {
    make: "Apple",
    model: "iPhone 13",
    specs: {
        storage: 128,
        screenSize: 6.1,
        batteryLife: 20
    }
};
function smartPhoneDetailed() {
    return "Smart Phone Details:\n    Brand: ".concat(smartphone.make, "\n    Model: ").concat(smartphone.model, "\n    Storage: ").concat(smartphone.specs.storage, " GB\n    Screen Size: ").concat(smartphone.specs.screenSize, " inches\n    Battery Life: ").concat(smartphone.specs.batteryLife, " hours");
}
var my_phone = smartPhoneDetailed();
console.log(my_phone);
