// async & await

function add(num){
    return new Promise((resolve,reject) =>{
        resolve(num + 5);
    }
 )
}

function sub(num) {
     return new Promise((resolve,reject) =>{
         resolve(num - 3);  
     });
}

function multiplication(num){
  return new Promise((resolve,reject) =>{
    resolve(num * 2);
  });
}
function division(num){
    return new Promise((resolve,reject) =>{
       resolve((num / 2)-2) ;
    });
}

async function consume(){
  let addRes = await add(5);
  let subRes = await sub(addRes);
  let multiRes = await multiplication(subRes);
  let divRes = await division(multiRes);

  console.log("Adition :"+addRes);
  console.log("substraction : "+subRes);
  console.log("Multi : "+multiRes);
  console.log("Divisoin  : "+divRes);

}

consume();