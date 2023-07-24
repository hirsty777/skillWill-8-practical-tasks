//task 1  recursive function
//option 1 
// let base = null;
// function expo(num, power, callback){
//     if(base===null)base=num
//     if(power===1){
//         base = null
//         return num
//     }
//     return expo(callback(num, base), power-1, callback)
// }

// console.log(expo(5, 3, (num, base) => num*base ));
// console.log(expo(3, 5, (num, base) => num*base ));


// option 2 
function callBack(num, pow){
    return pow===0? 1 : num * callBack(num, pow - 1 )
}

function expo(num, pow, cb){
    return cb(num, pow)
}

const a = expo(5, 3, callBack);
const b = expo(2, 5, callBack);

console.log(a);
console.log(b);