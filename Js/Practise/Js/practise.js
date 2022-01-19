//Run Javascript file using :
//node js file name.js

let data = [10,20,30,50,10,0];
console.log("Before Data "+data);

let newData = data.map( (element,index,data) => {
    return element = element + 100;
} );
console.log("After Data "+newData);

let reduce = data.reduce((element,index,data) =>{
   return element + index;
});
console.log("Reduce Data "+reduce);

console.log("*********************************Remove Duplciate Values *********************************");
let duplicate = [10,20,30,30,30,30,20,10,50,,0,50,50,10,0];
console.log("Duplicate Values "+duplicate);
let removeDup = duplicate.filter((element,index,data) =>{
        return duplicate.indexOf(element) == index;
}).sort( (element,index,data) =>{
    return element - index;
} );



console.log("Remove Duplciate  Values "+removeDup);
