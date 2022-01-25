let array = [10,20,30,40,50,60];
console.log(array.length);
console.log(array[0],array[1],array[2],array[3],array[4],array[5]);
//  array = 3;

delete array[0];
console.log(array[0],array[1],array[2],array[3],array[4],array[5]);

let array2 = [1,2,3,4,5];

array2.map( (element,index,value) => {
//    console.log(element,index,value);
 });

 let array3 = [1,2,3,4,5];

 let rf = array3.filter((element,index) =>{
     return element > 3;
 });

 console.log("filter result "+rf);

//redcued used for only additoin of element.
let rr =  array3.reduce((fe,se) =>{
     return fe + se;
 });
console.log("rr "+rr);


let array4 = [10,20,30,40,50,60,70,80,90,100];
array4.splice(4,3);

console.log(array4);
array4.splice(4,1);
console.log(array4);
array4.splice(5,1);
console.log(array4);
array4.splice(0,1);
console.log(array4);

//Addition ..
array4.splice(3,0,50,60,70,80);
console.log(array4);
array4.splice(0,0,10)
console.log(array4);

array4.splice(0,0,10)
console.log(array4);


//indexOf()  :

let duplicateArray = [10,20,10,30,40,20,10];
duplicateArray.indexOf();
console.log("remove duplicate element "+duplicateArray);

duplicateArray.forEach((element,index)  =>{
//  console.log(duplicateArray.indexOf(element));

});

let rd = duplicateArray.filter( (element,index) =>{
      return duplicateArray.indexOf(element) == 
      index;
});

console.log(rd);
// sort : To sort element either ascending or descending order.

let sortArray = [10,20,10,30,40,20,10];

// let sa = sortArray.sort( (s1,s2) =>{
//     return s2 - s1;
// } );

// console.log(sa);

console.log(sortArray.slice(0,2));
console.log(sortArray.slice(4,7));


let arr5 = [20,30,40];
arr5.push(50);
console.log(arr5);
arr5.unshift(10);
console.log(arr5);

arr5.pop(); //remove last element
console.log(arr5);
arr5.shift(); // remove  first element
console.log(arr5);

let arr6 = [10,20,30,40,50];
console.log(arr6.includes(30));
console.log(arr6.includes(300));

let find = [10,20,30,40,50];
 let findR = find.find( (element,index) => {
      return element == 300;
 } );
console.log(findR);

let find1 = [10,20,30,40,50,60,70,80,90,100];

let ir = find1.findIndex( (element,index) => {
    return element == 100;
});
console.log(ir);

console.log(find1.splice(ir,1));
console.log(find1);










