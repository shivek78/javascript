let arr = [
  "shivek",
  "raju",
  "aarif",
  "bablu",
  "vinodh",
  "ram",
  "sayam",
  "kalu",
  20,
  30,
  10.2,
];
arr.shift();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//unshift add the element in the fronts

let arr1 = [
  "shivek",
  "raju",
  "aarif",
  "bablu",
  "vinodh",
  "ram",
  "sayam",
  "kalu",
  20,
  30,
  10.2,
];
arr1.unshift("sam");
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  console.log(arr1.length)
}