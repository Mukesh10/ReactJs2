// function fun_one(param1){
//     console.log(param1());
// }


// fun_one( function fun_two(params) {
//    return "Hello My name is function two..."      
// })

// function fun_one(param1,param2,param3){
//     console.log(param1(),param2(),param3());
// };
// fun_one( function fun_two(params) {
//    return "Hello 1";      
// },
//  function fun_three(){
//      return "Hello 2";
//  }, 
//    function fun_four(){
//     return "Hello 3";
//  });

function fun_cb_One(param1, param2, param3) {
    param2("Welome to " + param1, param3());
}

fun_cb_One("ReactJs", function result(x) {
    console.log("X -> " + x);
}, function fun_cb_three() {
    console.log("fun_cb_three");
}

);

console.log("!!!!!!!!!!!!!!!Calculation Example !!!!!!!!!!!!");


function add(param1, callback) {
    callback(param1 + 5, false);
}

function sub(param1, substraction) {
    substraction(param1 - 5, false);
}

function multiplication(param1, callback) {
    callback(param1 * 5, false);
}

function division(param1, division) {
    division(param1 / 5, false);
}


add(5, function addd(addition, error) {
    if (!error) {
        console.log("Addition is  : " + addition);
    } sub(addition, function (subResult, error) {
        if (!error) {
            console.log("Substraction is " + subResult);
        }
        multiplication(subResult, function (multiResult, error) {
            if (!error) {
                console.log("Multiplication is  " + multiResult);
            }
            division(multiResult, function(divResult, error) {
                if (!error) {
                    console.log("Division is " + divResult);
                }
            }); //end of Divsion function

        }); // end of multiplication

    }); //end of substraction 

})//end Of addtion