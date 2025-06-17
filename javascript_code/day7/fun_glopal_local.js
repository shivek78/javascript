/* hi  now we are  learing the loacal and the  global varivale in javascripts*/
 /* hi  now we are  learing the loacal and the  global varivale in javascripts*/
 const glovar='hi  i am the gloabl variable  '
  const display =()=>{
      console.log(glovar)
      

  }

   const locvar=()=>{
      let y=20;
      let x=30;
       let sum=x+y;
      console.log(sum)
      console.log ("this sum is the local variable")
   }
    locvar();
    display();
   
    console.log("here we printing the global variable ",glovar)
    console.log("here we printing the local variable ",sum)


