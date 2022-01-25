
function *fun_gen_one(){
    yield "Hello_1";
    yield *fun_gen_two();
    yield *fun_gen_three();
}
function *fun_gen_two(){
    yield "Hello_2";
}

function *fun_gen_three(){
    yield "Hello_three";
}

let curson = fun_gen_one();

console.log(curson.next());

