function fun_one(param1,param2){
  param2("Welcome To "+param1);
}
fun_one("ReactJs",function printMessage(arg) {
  console.log(arg);
})