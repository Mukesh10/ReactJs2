/********* 1/Jan/2022 ************/

//variables

//variabls are used to used the data.
//ex : string number ,boolean, array, objects,
//We weill declare teh variables by using var ,elet const
//let and const keword introduced in ES6 .
//variables declaration should contains a-z

var sub_one = "React Js";
var sub_two = "Node Js";
var var_three = "Mongo DB";

var mern_stick = `${sub_one} <==> ${sub_two} <==> ${var_three}`;
console.log(mern_stick);

var decimal_num = 100;
var double_nu = 100.12345;

var hexadecimal_num = 0x12345ABC;

var octal_num = 0o123;

var flag = true;
var flag1 = false;

console.log(flag, flag1);

var arr = [100, 200, 300, 400, 500];
//three arg element,index,array
arr.forEach((element, index, array) => {
    console.log(element, index, array);
});

//JSON : Javascript object notation.

let obj = {
    "sub_one": `${sub_one}`,
    "sub_two": `${sub_two}`,
    "sub_three": `${var_three}`
}

console.log(obj.sub_one,obj.sub_two,obj.sub_three);
/*
for(let i = 0; i < 5; i++){
    // console.log(i);
}
console.log(i);
*/

let data = 100;  // global variable
console.log(data);
{
     // local variable
    let data = 200;
    console.log(data);

}

console.log(data);

/********* 1/Jan/2022 ************/





