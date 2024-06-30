//
/*
Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
*/
function iteratingObj_Prop(obj) {
    for (var property in obj) {
        console.log("".concat(property, " : ").concat(obj[property])); // show the property name and its value 
    }
}
;
iteratingObj_Prop(iteratingObj_Prop);
