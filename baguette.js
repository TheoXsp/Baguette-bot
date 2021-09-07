const prompt = require("prompt-sync")();
input = 0;

console.log("---Choose the unity u wanna convert---");
console.log("1. Height (in cm)");
console.log("2. Weight (in kg)");
console.log("3. Speed (in km/h)");

input = prompt("Choose your way: ");

if (input == 1) {
    input = prompt("Enter height: ");
    input /= 60;
    console.log("U mesure", input, "baguettes");
}
else if (input == 2) {
    input = prompt("Enter weight: ");
    input *= 4;
    console.log("U weight", input, "baguettes");
}
else if (input == 3) {
    input = prompt("Enter speed: ");
    input *= 16;
    console.log("U're going at", input, "baguettes/h");
}
else {
    console.log("bz ta mere toma");
};
