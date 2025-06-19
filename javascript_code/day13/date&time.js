console.log("we are lraring date right now")
console.log("    ")

let current_date=new Date();
console.log(current_date)
//method
console.log(current_date.getFullYear());
console.log(current_date.getMonth());
console.log(current_date.getDate());
console.log(current_date.getHours());
console.log(current_date.getMinutes());
console.log(current_date.getSeconds());

 // set interval and set time out
 //set Interval is used to execute a function repeatedly after a give intervalof time
  const sam = setInterval(() => {
    console.log('sam ');
    
}, 10);
setTimeout(() => {
   console.log("this run after 3 sec")  
}, 3000);
