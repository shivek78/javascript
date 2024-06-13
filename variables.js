// here we lrarn about variables in javascript

// in this file we describe how to declare variables in javascript
// we can declare variables using var, let, const keywords
const account_name = "John Doe";
let account_balance = 1000;
var account_type = "Savings";
account_city="New York";
console.log(account_name);  
console.log(account_balance);
console.log(account_type);
console.log(account_city);
// in these we change all the values but we can't change the value of const variable

// updating the value of  all variable
//please notye note that   in these program we used let and var keywords to declare variables but we always perfer to use let keyword to declare variables because var keyword is not block scoped
 
account_balance = 2000;

account_type = "Current";
  account_city="New Delhi";
console.tablem([account_name, account_balance, account_type, account_city])
