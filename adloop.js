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
Count Vowels:

Ask the user to enter a string. Use a for loop to count the number of vowels (a, e, i, o, u, case-insensitive) in the string and print the count.
Reverse a String:

Ask the user to enter a string. Use a for loop to reverse the string and print the reversed string. Do not use built-in string reversal functions.
Fibonacci Sequence (up to N terms):

Ask the user to enter a number N. Use a for loop to generate and print the first N terms of the Fibonacci sequence. (The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, ...).
Pattern Printing (Right-angled Triangle):

Ask the user to enter a number rows. Use nested for loops to print a right-angled triangle pattern of asterisks.
Example: If rows is 5:
*
**
***
****
*****
Slightly More Challenging:

Check for Palindrome:

Ask the user to enter a string. Use a for loop (or nested for loops if you prefer, but a single loop with two pointers is often more efficient) to check if the string is a palindrome (reads the same forwards and backward, ignoring case). Print "Palindrome" or "Not a Palindrome".
Prime Number Check:

Ask the user to enter a positive integer. Use a for loop to determine if the number is prime (only divisible by 1 and itself). Print "Prime" or "Not Prime".
Sum of Digits:

Ask the user to enter an integer. Use a for loop (or a while loop, but try to use for if possible by converting the number to a string first) to calculate the sum of its digits.
Find the Largest Number in a List/Array:

Given a predefined list/array of numbers (e.g., [3, 8, 1, 10, 5, 2]), use a for loop to find and print the largest number. Do not use built-in max() functions.
 */
/*console.log("Write a program that uses a for loop to print numbers from 1 to 10 ")
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

*/
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