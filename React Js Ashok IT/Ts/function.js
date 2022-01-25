function fun_one() {
    console.log("Hello");
}
fun_one();
function fun_two(param1, param2, param3) {
    console.log(param1, param2, param3);
}
fun_two("Ram", "Sham", "20");
//default parameter in functions. introduced in ES6.
function fun_three(param1, param2) {
    if (param1 === void 0) { param1 = "Mukesh"; }
    if (param2 === void 0) { param2 = "Durga"; }
    console.log(param1, param2);
}
fun_three("Welcome__1");
fun_three(undefined, null);
//fun_three(NaN,NaN); //Not allowed 
console.log("------------ (... spread operator) -------------------------------------------------------------------------");
/*
    i)  called as spred operator ->
    ii) introduced in ES6 version.
    iii) Because of spread operator parameter behave like array...
    iv)  We can have only one spred operator per function.
    v)   posintion of spred operator always last in parameters...
*/
function fun_four() {
    var param1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param1[_i] = arguments[_i];
    }
    console.log(param1);
}
fun_four("Hello_1", "Hello_2", "Hello_3");
fun_four();
fun_four(undefined, undefined, undefined);
fun_four(null, null, null, null);
console.log("-------------------------------------------------------------------------------------");
