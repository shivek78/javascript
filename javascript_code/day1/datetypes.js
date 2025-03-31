// JavaScript Data Types

// 1. Primitive Data Types
// -----------------------

// String - textual data
const name = "John Doe";
console.log("String:", name, typeof name);

// Number - integers and floating point numbers
const age = 25;
const price = 19.99;
console.log("Number (integer):", age, typeof age);
console.log("Number (float):", price, typeof price);

// Boolean - true or false
const isLoggedIn = true;
console.log("Boolean:", isLoggedIn, typeof isLoggedIn);

// Undefined - a variable declared but not assigned a value
let variable;
console.log("Undefined:", variable, typeof variable);

// Null - intentional absence of any object value
const empty = null;
console.log("Null:", empty, typeof empty); // Note: typeof null returns "object" (this is a historical bug in JavaScript)

// BigInt - for representing large integers
const bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, typeof bigNumber);

// Symbol - unique and immutable primitive value
const uniqueId = Symbol("id");
console.log("Symbol:", uniqueId, typeof uniqueId);

// 2. Non-Primitive (Reference) Data Types
// --------------------------------------

// Object - collection of key-value pairs
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log("Object:", person, typeof person);

// Array - ordered collection of values (technically an object)
const fruits = ["apple", "banana", "orange"];
console.log("Array:", fruits, typeof fruits, Array.isArray(fruits));

// Function - block of code designed to perform a task
function greet() {
  return "Hello";
}
console.log("Function:", greet, typeof greet);

// Date object
const today = new Date();
console.log("Date:", today, typeof today);

// 3. Type Conversion Examples
// --------------------------
console.log("\nType Conversion Examples:");
console.log("String to Number:", Number("42"), typeof Number("42"));
console.log("Number to String:", String(42), typeof String(42));
console.log("Boolean to String:", String(true), typeof String(true));
console.log("String to Boolean:", Boolean("hello"), typeof Boolean("hello"));
