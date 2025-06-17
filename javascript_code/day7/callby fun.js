console.log("call by function");

const sum = (a, b) => {
    let sum1 = a + b;
    console.log("This is from sum function. Arguments passed:", sum1);
};

const sub = (a, b, callback) => {
    console.log("This from callback function:", a - b);
    callback(a, b); // Pass the values correctly
};


sub(30, 20, sum); // Now it correctly calls `sum(30, 20)`
/*----------------------------------------------------------*/
//without parameter 
const printing = () => {
    console.log("News has printed.");
};

const test = (name, callback) => {
    console.log("This is test function:", name);
    callback(); // Correctly calls the provided function
};

test("Shivek", printing);

/*----------------------------------------------------------*/
//problem for the call by fuction 
const lockphone=()=>{
      console.log("you enter lock is right",)
}

const password=(lock,callback)=>{
      console.log("yor password is ",lock)
callback()

}
password(20,lockphone)

/*----------------------------------------------------------*/
//1 without parameter
//with parameter 
//change the  name of  callback variable
/*----------------------------------------------------------*/
