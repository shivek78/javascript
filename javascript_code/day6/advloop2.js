/*unt Vowels:

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

 console.log("---------------------------------");
    console.log("Pattern Printing (Right-angled Triangle)");
    console.log("Ask the user to enter the number of rows.");
    console.log("------------------------------------------");

    let value = prompt("Enter number of rows:");
    let rows = parseInt(value);

    for (let i = 1; i <= rows; i++) {
      let rowPattern = '';
      for (let j = 1; j <= i; j++) {
        rowPattern += '*';
      }
      console.log(rowPattern);
    }