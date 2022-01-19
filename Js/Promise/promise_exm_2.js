let promise1 = new Promise( (resolve,reject) =>{
    setTimeout(() =>{
      resolve("Hello_1");
    },5000);
 
 });
 
 
 let promise2 = new Promise( (resolve,reject) => {
     setTimeout(() =>{
      resolve("Hello_2");
     },10000);
 })
 
 let promise3 = new Promise( (resolve,reject)=>{
    setTimeout(() =>{
       resolve("Hello_3");
    },15000);
 });
 


 Promise.all([promise1,promise2,promise3]).then(
    (proResult) =>{
       console.log("successResult "+proResult);
    },
    (errorResult) =>{
     console.log(errorResult);
    })// After 15 second we get the result : 
      // successResult Hello_1,Hello_2,Hello_3
   
      //Promise.race(); // (race ) => used to know which promse has less time.
   
   
      Promise.race([promise1,promise2,promise3]).then(
       (proResult) =>{
          console.log("successResult "+proResult);
       },
       (errorResult) =>{
        console.log(errorResult);
       })
   
   