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
let smartPhone = {
    make: "Apple",
    model: "iPhone 13",
    specs: {
        storage: 128 ,
        screenSize: 6.1 ,
        batteryLife: 20 
    }
};

function smart_phoneDetailed () {
    return `Smart Phone Details:
    Brand: ${smartPhone.make}
    Model: ${smartPhone.model}
    Storage: ${smartPhone.specs.storage} GB
    Screen Size: ${smartPhone.specs.screenSize} inches
    Battery Life: ${smartPhone.specs.batteryLife} hours`
}
const myPhone = smart_phoneDetailed();

console.log(myPhone);

/*
outout will be :
Smart Phone Details:
    Brand: Apple
    Model: iPhone 13
    Storage: 128 GB
    Screen Size: 6.1 inches
    Battery Life: 20 hours
 */
