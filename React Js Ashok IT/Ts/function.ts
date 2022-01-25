function fun_one():void {
  console.log("Hello");
}
fun_one();

function fun_two(param1:string,param2 : string,param3 :string) : void {
  console.log(param1,param2,param3);
}
fun_two("Ram","Sham","20");

//default parameter in functions. introduced in ES6.
function fun_three(param1 : string = "Mukesh",param2 : string = "Durga") : void{
  console.log(param1 ,param2);
}
fun_three("Welcome__1");
fun_three(undefined,null);
//fun_three(NaN,NaN); //Not allowed 
console.log("------------ (... spread operator) -------------------------------------------------------------------------");

/*
    i)  called as spred operator ->
    ii) introduced in ES6 version. 
    iii) Because of spread operator parameter behave like array...
    iv)  We can have only one spred operator per function.
    v)   posintion of spred operator always last in parameters...
*/
function fun_four(...param1) : void{
      console.log(param1);
}

fun_four("Hello_1","Hello_2","Hello_3");
fun_four();
fun_four(undefined,undefined,undefined);
fun_four(null,null,null,null);
console.log("-------------------------------------------------------------------------------------");

// Getting error bz  seprated parameter at the last ...
//function fun_five(...param1 : any,param2 :any) : any {

// }

console.log("-------------------------------------------------------------------------------------");














