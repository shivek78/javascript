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
let arr1=[1,2,3,4,5,6,7];
let arr2=[2,30,40,50,70]
/*
arr.shift();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//unshift add the element in the fronts
/*
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

arr
arr1.unshift("sam");
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  console.log(arr1.length)
}
 

// find the  value

console.log(arr.find(el => el === "shivek"));
///or
let find = (el) => {
  return el === "shivek";
};

console.log(find("shivek")); // Output: true
console.log(find("raju")); // Output: false



let found = arr2.find(el => el % 2 === 0);

console.log(found); // Output: 4
let numbercheking
 */

function numberChecking(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);

    if (arr[i] % 2 === 0) {
      console.log("even number", arr[i]);
    } else {
      console.log("odd number", arr[i]);
    }
  }
}

// Example usage:
numberChecking([1, 2, 3, 4, 5]);

console.log(arr.includes(10.2))
//concat method for addtion of two method

let merged =arr.concat(arr1)
console.log(merged)
// jont it  joit array elements  into string  wit an optinal oprater
let arr8= [ "appple","banana","cherry","mango","orange"]
let joined= arr8.join(",")
console.log(joined)
// splice  adds amd remove elements from the array
// it take three para meter starinh indx , delet elemnt ind , replace iteam
arr.splice(2,1,10.2);
console.log(arr)
//slice  return samall part  of the  arry its take two value staring index and ending index
 let sliced=arr.slice=arr.slice(0,5);
 console.log(sliced)
  
