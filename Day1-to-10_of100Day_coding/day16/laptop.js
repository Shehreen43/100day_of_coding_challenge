//                  QUESTION :46
;
var laptop = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024,
    describe: function () {
        console.log("This is a ".concat(this.make, " ").concat(this.model, " laptop, released in ").concat(this.year, "."));
    }
};
console.log(laptop.describe());
