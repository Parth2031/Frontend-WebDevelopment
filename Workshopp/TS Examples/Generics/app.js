// TODO:: Working of Typescript Generics :-
// ! Simple Generics -->
function echo(data) {
    return data;
}
console.log(echo("Parth"));
console.log(echo(20));
console.log(echo({ name: "Parth", age: 20 }));
// ! Better Generic -->
function betterGeneric(data) {
    return data;
}
console.log(betterGeneric("Parth"));
console.log(betterGeneric(20));
console.log(betterGeneric({ name: "Parth", age: 20 }));
// ! Generic Types -->
var generic = betterGeneric;
console.log(generic("Generic Types"));
// ! Built-In Generics -->
var testResults = [1, 2, 3, 4];
testResults.push(5);
// testResults.push("6");
console.log(testResults);
// ! Array Generics -->
function printAll(print) {
    print.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// ! Generic Classes -->
var SimpleMaths = /** @class */ (function () {
    function SimpleMaths() {
    }
    SimpleMaths.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMaths;
}());
var simpleMaths = new SimpleMaths();
simpleMaths.baseValue = 10;
simpleMaths.multiplyValue = "20";
console.log(simpleMaths.calculate());
