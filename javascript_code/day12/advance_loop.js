//for..in// it help to pront the kay or key value both
const person={
      name:"shiek",
      department:"technical",
      workprofile: "tester",
      desk_no:20,
      compurter_no:120,
      id :1575,
}
for(let key in person){
      console.log(
            key,person[key]
      )
}

 /*for...of Loop — Definition
The for...of loop is used to iterate over iterable objects — that includes arrays, strings, maps, sets, etc. It gives you the values directly, unlike for...in, which gives you keys or indices.*/
let arr=[1,0,20,30,50,8,60,
]

for(let value of arr){
      console.log(value)

}
// for each() execute a funtion one for each elements in an array
let arr1=[1,0,20,60
]
arr1.forEach( (value, index, arr1)=>console.log(value,index,arr1))
