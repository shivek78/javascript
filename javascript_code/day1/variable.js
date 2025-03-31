/*
Variables in JavaScript:
- Variables are containers for storing data values
- Variables are the names of memory locations
- Variables allow us to store and manipulate data in our programs
*/

// Different ways to declare variables in JavaScript

// 1. Using 'let' - block-scoped variable that can be reassigned
let name = "shivek yadav";
name = "shivek"; // value can be changed
console.log("let variable:", name);

// 2. Using 'const' - block-scoped constant that cannot be reassigned
const age = 24;
// age = 25; // This will cause an error - cannot reassign a constant
console.log("const variable:", age);

// 3. Using 'var' - function-scoped variable (older way of declaring variables)
var job = "Developer";
job = "Engineer"; // value can be changed
console.log("var variable:", job);

/*
Variable Declaration vs Initialization:
- Declaration: Creating a variable without assigning a value
- Initialization: Assigning an initial value to a variable
*/

// Declaration only
let user;
console.log("Declared but not initialized:", user); // undefined

// Declaration with initialization
let count = 10;
console.log("Declared and initialized:", count);

/*
Variable Scope in JavaScript:
- Global scope: Variables declared outside any function
- Local/Function scope: Variables declared inside a function
- Block scope (let, const): Variables limited to the blockthey are declared in
*/

// Global scope variable
let globalVar = "I am global";

function scopeExample() {
    // Function scope variable
    let functionVar = "I am local to function";
    
    if (true) {
        // Block scope variable
        let blockVar = "I am block scoped";
        var varVariable = "I am function scoped even if declared in a block";
        console.log(blockVar);
    }
    
    // console.log(blockVar); // This would cause an error as blockVar is block-scoped
    console.log(functionVar);
    console.log(varVariable); // This works as var is function scoped
}

scopeExample();
console.log(globalVar);

/*
Variable Hoisting:
- JavaScript "hoists" variable declarations to the top of their scope
- 'var' declarations are hoisted and initialized with 'undefined'
- 'let' and 'const' declarations are hoisted but not initialized
*/

console.log("Hoisting with var:", hoistedVar); // undefined (not an error)
var hoistedVar = "I am hoisted";

// console.log("Hoisting with let:", hoistedLet); // This would cause an error
let hoistedLet = "I am not accessible before declaration";

/*
Variable Naming Conventions:
- JavaScript is case-sensitive
- Can contain letters, digits, underscore, and dollar sign
- Must begin with a letter, $ or _
- Cannot use reserved keywords
- Should use camelCase for variables and functions
- Should use PascalCase for classes
*/

// Good naming examples
let firstName = "John";
let user_age = 30;
let $price = 99.99;
let _private = "secret";
let camelCaseExample = "This is the recommended style";

console.log("Variable naming examples:", firstName, user_age, $price);

/*
Best Practices for Variables:
- Always declare variables before using them
- Use 'const' by default, and 'let' when you need to reassign
- Avoid using 'var' in modern JavaScript
- Use descriptive variable names
- Minimize the use of global variables
*/

// Example of descriptive variable names
const numberOfStudents = 25;
let isUserLoggedIn = true;
const MAX_ATTEMPTS = 3;

console.log("Descriptive variables:", numberOfStudents, isUserLoggedIn, MAX_ATTEMPTS);






