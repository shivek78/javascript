/*🚀 Problem: Number Analyzer
Write a JavaScript program that asks the user to input 10 numbers (you can simulate them in an array for now). For each number, your program should:

Check if the number is positive, negative, or zero.

Check if the number is even or odd.

Display a message for each number like this:

Example: Number: -3 => Negative and Odd
Example: Number: 0 => Zero
Example: Number: 6 => Positive and Even

🔢 Input Example:
let numbers = [4, -3, 0, 11, -8, 7, 2, -1, 0, 10];
💡 Hint:
Use a for loop to iterate through the array.
Use nested if statements or combined logic with &&.

✅ Expected Output:

Number: 4 => Positive and Even
Number: -3 => Negative and Odd
Number: 0 => Zero
Number: 11 => Positive and Odd
Number: -8 => Negative and Even
*/
/*🚀 Problem: Number Analyzer*/

let numbers = [4, -3, 0, 11, -8, 7, 2, -1, 0, 10];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let message = `Number: ${number} => `;

    // Check if the number is positive, negative, or zero.
    if (number > 0) {
        message += "Positive";
    } else if (number < 0) {
        message += "Negative";
    } else {
        message += "Zero";
    }

    // Check if the number is even or odd (only if not zero, or if we want to explicitly state "Zero and Even" or "Zero and Odd" which is technically true for even).
    // The problem output for 0 is just "Zero", so we'll handle that case.
    if (number !== 0) {
        if (number % 2 === 0) {
            message += " and Even";
        } else {
            message += " and Odd";
        }
    }

    console.log(message);
}