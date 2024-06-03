//                  QUESTION :46

//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

interface Laptop {
    make: string;
    model: string;
    year: number;
    describe(): void;
  };

  let laptop: Laptop = {
    make: "Dell",
    model: "XPS",
    year: 2022,
    describe: function() {
     return console.log(`This is a ${this.make} ${this.model} from ${this.year}.`);
    }
  };
console.log(laptop.describe());

