/**
For Loop Coding Practice Problems
Beginner Level:

Print Numbers:

Write a program that uses a for loop to print numbers from 1 to 10 (inclusive).

Even Numbers:

Write a program that uses a for loop to print all even numbers from 2 to 20 (inclusive).
Sum of Numbers:

Write a program that uses a for loop to calculate and print the sum of numbers from 1 to 50 (inclusive)
.
Multiplication Table:

Ask the user to enter a number. Then, use a for loop to print its multiplication table from 1 to 10.
Example: If the user enters 5, output should be:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
Countdown:

Write a program that uses a for loop to print a countdown from 10 to 1, and then print "Blast Off!".

Intermediate Level:

Factorial:

Ask the user to enter a non-negative integer. Use a for loop to calculate and print its factorial. (The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5!=5×4×3×2×1=120. 0!=1).
*/

console.log("Write a program that uses a for loop to print numbers from 1 to 10 ")
let num = 1;
while (num <= 10) {
      console.log(num)
      num++
}

console.log("---------------------------------")
console.log("Even Numbers:=>")
console.log("Write a program that uses a for loop to print all even numbers from 2 to 20 (inclusive).Sum of Numbers")
console.log("------------------------------------------")
let even;
let sum=0;
for (even = 2; even <= 20; even++) {
      if (even % 2 == 0) {
            console.log(even)
 
          sum+=even;
      }
      

}
console.log("------------------------------------------")
console.log("Sum of Even Numbers from 2 to 20:", sum);

console.log("-------------*******************--------------------")
console.log("Sum of Numbers:")
console.log("Write a program that uses a for loop to calculate and print the sum of numbers from 1 to 50 (inclusive)")

let sum1=0;
for (i= 1; i <= 50; i++) {
          sum1+=i;
}
console.log("------------------------------------------")
console.log("Sum of  Numbers from 1to 50:", sum1);




console.log("-------------*******************--------------------")

console.log("Countdown::")
console.log("Write a program that uses a for loop to print a countdown from 10 to 1, and then print Blast Off")
for(let count=10;count>=1;count--){
      
      console.log(count)
}
console.log("Blast off")


// Factorial:

// Use the 'readline' module to get user input from the console
const readline = require('readline');

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
    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        console.log("Invalid input. Please enter a non-negative integer.");
        rl.close();
        return; // Exit the function
    }

    let factorial = 1;

    // Special case for 0!
    if (num === 0) {
        factorial = 1;
    } else {
        // Calculate factorial using a for loop
        for (let i = 1; i <= num; i++) {
            factorial *= i; // Equivalent to factorial = factorial * i;
        }
    }

    console.log(`The factorial of ${num} is: ${factorial}`);
    console.log("------------------------------------------");

    rl.close(); // Close the readline interface
});
