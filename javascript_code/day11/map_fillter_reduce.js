//map() ist is the hight array method
//its return new array by appling a function to ecah array elements of the orginal arrays
let arr=[1,2,3,4,5,6,7,8,9]
let double =arr.map((el)=>el*3);
let add =arr.map((el)=>el+3);
console.log(double,add)












//filtter()


let result = arr.filter((sam) => sam % 2 === 0);
    console.log( result);












//reduced()