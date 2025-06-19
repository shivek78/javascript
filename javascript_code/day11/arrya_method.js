// method of find index
let arr1=[1,2,3,4,5,6,7,8,9]
let s_no=arr1.findIndex((el)=>el===6)
console.log(s_no)
//2. from () methode  covert the string in the array
let str="shivekyadav"
let arr=Array.from(str);
console.log(arr)
//3. is Array() check the give value is arry or not

console.log(Array.isArray(arr))
console.log(Array.isArray("shivek"))

