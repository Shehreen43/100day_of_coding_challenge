//                       QUESTION : 52
/*
Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
 Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
*/
interface Smartphone {
    make: string;
    model: string;
    specs: {
        storage: number;
        screenSize: number;
        batteryLife: number;
    };
}
// Sets up details about a smartphone
let smartphone = {
    make: "Apple",
    model: "iPhone 13",
    specs: {
        storage: 128 ,
        screenSize: 6.1 ,
        batteryLife: 20 
    }
};

function smartPhoneDetailed () {
    return `Smart Phone Details:
    Brand: ${smartphone.make}
    Model: ${smartphone.model}
    Storage: ${smartphone.specs.storage} GB
    Screen Size: ${smartphone.specs.screenSize} inches
    Battery Life: ${smartphone.specs.batteryLife} hours`
}
const my_phone = smartPhoneDetailed();

console.log(my_phone);

/*
outout will be :
Smart Phone Details:
    Brand: Apple
    Model: iPhone 13
    Storage: 128 GB
    Screen Size: 6.1 inches
    Battery Life: 20 hours
 */
