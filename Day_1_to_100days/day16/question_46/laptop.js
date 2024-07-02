//                  QUESTION :46
;
var laptop = {
    make: "Dell",
    model: "XPS",
    year: 2022,
    describe: function () {
        return console.log("This is a ".concat(this.make, " ").concat(this.model, " from ").concat(this.year, "."));
    }
};
console.log(laptop.describe());
