// Declaring strings using double quotes
let greeting = "Hello, world!";

// Declaring strings using single quotes
let name = 'Shivek';

// Using template literals (backticks) to embed variables
let message = `Welcome, ${name}!`; // Output: "Welcome, Shivek!"

// Getting the length of a string
console.log(name.length); // Output: 6

// Accessing a character at a specific index
console.log(name.charAt(0)); // Output: "S"

// Converting to uppercase
console.log(name.toUpperCase()); // Output: "SHIVEK"

// Converting to lowercase
console.log(name.toLowerCase()); // Output: "shivek"

// Extracting part of a string using slice
console.log(name.slice(1, 4)); // Output: "hiv" (from index 1 to 3)

// Checking if a substring exists
console.log(message.includes("Welcome")); // Output: true

// Finding the index of a substring
console.log(message.indexOf("Shivek")); // Output: 8

// Replacing part of a string
let newMessage = message.replace("Shivek", "User");
console.log(newMessage); // Output: "Welcome, User!"

// Splitting a string into an array
let words = greeting.split(", ");
console.log(words); // Output: ["Hello", "world!"]

// Removing whitespace from both ends
let spaced = "   JavaScript   ";
console.log(spaced.trim()); // Output: "JavaScript"

let str = "JavaScript is awesome";

// === More String Methods ===

// 1. startsWith() - checks if the string starts with a given substring
console.log(str.startsWith("Java")); // true

// 2. endsWith() - checks if the string ends with a given substring
console.log(str.endsWith("awesome")); // true

// 3. repeat(n) - repeats the string n times
console.log("Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// 4. padStart(targetLength, padString) - pads the string at the start
console.log("7".padStart(3, "0")); // "007"

// 5. padEnd(targetLength, padString) - pads the string at the end
console.log("7".padEnd(3, "*")); // "7**"

// 6. match() - searches string using regex pattern
console.log(str.match(/is/)); // returns ["is"] (first match)

// 7. search() - returns index of regex match (or -1)
console.log(str.search(/awesome/)); // returns 15

// 8. replaceAll() - replaces all occurrences of a substring
let messy = "JS is fun. JS is powerful.";
console.log(messy.replaceAll("JS", "JavaScript")); 
// "JavaScript is fun. JavaScript is powerful."

// 9. localeCompare() - compares two strings based on locale
console.log("a".localeCompare("b")); // returns -1 (a comes before b)

// 10. normalize() - returns the Unicode Normalization Form
let weirdChar = '\u0041\u030A'; // A with a ring
console.log(weirdChar.normalize()); // "Å"

// 11. concat() - joins two or more strings (same as +)
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

// 12. codePointAt() - returns the Unicode code point at an index
console.log("ABC".codePointAt(1)); // 66 (Unicode of 'B')

// 13. fromCharCode() - creates string from Unicode values
console.log(String.fromCharCode(65, 66, 67)); // "ABC"

// 14. valueOf() - returns the primitive string value of a String object
let objStr = new String("example");
console.log(objStr.valueOf()); // "example"

// 15. toString() - converts value to string
let num = 123;
console.log(num.toString()); // "123"
 