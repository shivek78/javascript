/* hi  now we are  learing the loacal and the  global varivale in javascripts*/
 const glovar='hi  i am the gloabl variable  '
  const display =()=>{
      console.log(glovar)
      console.log("here we printing the local variable ",locvar)

  }

   const locvar=()=>{
      let y=20;
      let x=30;
      console.log(y+x)
      console.log ("this sum is the local variable")
   }
    display();
    locvar();
    console.log("here we printing the global variable ",glovar)
    console.log("here we printing the local variable ",locvar)

