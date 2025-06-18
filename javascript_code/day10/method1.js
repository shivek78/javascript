const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(); 
console.log(numbers);


 // for complex 
 numbers.sort((a, b) => a - b);
console.log(numbers); 

// desanding
numbers.sort((a, b) => b - a);
console.log(numbers); 

let arr = [
  "shivek",
  "raju",
  "aarif",
  "bablu",
  "vinodh",
  "ram",
  "sayam",
  "kalu",
]; 

let sorted = arr.sort((a, b) => a.localeCompare(b)); 
console.log(sorted);