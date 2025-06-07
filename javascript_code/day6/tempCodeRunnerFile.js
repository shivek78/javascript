/*🚀 Problem: FizzBuzz with a Twist
Write a JavaScript program that prints numbers from 1 to 50.

If the number is divisible by 3, print "Fizz".

If the number is divisible by 5, print "Buzz".

If the number is divisible by both 3 and 5, print "FizzBuzz".

If the number is even but not divisible by 3 or 5, print "Even Number: X" (replace X with the number).

If the number is odd and not divisible by 3 or 5, print "Odd Number: X".
*/
let num;
console.log("program that prints numbers from 1 to 50.")
for (num = 1; num <= 50; num++) {
      if (num % 2 == 1)
            console.log(num + "  " + "Odd")
      else if (num % 2 == 0)
            console.log(num + "  " + "even")

      else if (num % 3 == 0) {
            console.log(num + "  " + "fizz")
      }
      else if (num % 5 == 0) {
            console.log(num + "" + "buzz")
      }

}

