
}
console.log("Blast off")

*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("---------------------------------");
console.log("Factorial:=>");
console.log("Ask the user to enter a non-negative integer. Use a for loop to calculate and print its factorial. (The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less or equal to n. For example, 5!=5×4×3×2×1=120. 0!=1).");
console.log("------------------------------------------");

rl.question("Please enter a non-negative integer: ", (input) => {
    const num = parseInt(input);

    // Validate if the input is a non-negative integer
    if (num < 0) {