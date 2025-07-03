// Video 26


let factorial = num => {
    let fact = 1;
    for(let i = num ; i >= 1 ; i --){
        fact *= i;
    }
    return fact;
}

let sum = (num1 , num2)=>{
    return num1 + num2;
}

exports.multiply = (num1,num2)=>{
    return num1 * num2;
}
exports.factorial = factorial;
module.exports.sum = sum;

// console.log(arguments);