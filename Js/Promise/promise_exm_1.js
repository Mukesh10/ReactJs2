// let promise1 = new Promise((resolve,reject) =>{
//    resolve("soon,I will start typescript !!");
// }) ;

// promise1.then( (promiseRes) =>{
//   console.log(promiseRes);
// },
//  (eror) => {
//      console.log(error);
//  })

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

promise1.then((prom1Res)=>{
    console.log("Fun 1 Success : "+prom1Res);

},
 (errorResult) =>{
    console.log("Fun 1 : "+errorResult);
 }
)


promise2.then( (prom2Res)=>{
    console.log("Fun 2 Success : "+prom2Res);
},
(errorResult) => {
    console.log("Fun 2 : "+errorResult);
});


promise3.then( (prom3Res)=>{
    console.log("Fun 3 Success : "+prom3Res);
},
(errorResult) => {
  console.log("Fun 3 : "+errorResult);
});

//To Over Come Repeted codee : Promise.All([]); 


