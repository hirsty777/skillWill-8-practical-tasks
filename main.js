//task 1  recursive func with callback =============================================
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


//task 2 fetch data ==============================================================
//get data and show it on DOM
async function getData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok)throw Error("Something went wrong");
        const data = await response.json();

        data.forEach(el=>{
            document.body.append(createCard(el.title, el.body, el.id))  
        })
    }catch (error) {
        console.log(error.message)
    }
};
getData();

//ceate div object for fetched data
function createCard(title, body, id){
    const divEl = document.createElement("div");
    const h1El = document.createElement("h1");
    const pEl1 = document.createElement("p");
    const pEl2 = document.createElement("p");

    h1El.textContent=title.charAt(0).toUpperCase()+title.slice(1);
    pEl1.textContent=`ID: ${id}`;
    pEl2.textContent=body;

    divEl.append(h1El, pEl1, pEl2);

    return divEl
};

//task 3 deep copy promise =======================================================
const somObj = {
    name:"ucha",
    age:45,
    hobis:[{collecting:"Postcards"},{making:"3D Printing"},[{test:"test"}]]
};

function deepCopy(object){
    return new Promise((resolve, reject)=>{
        // option 1 
        if(object===null || typeof object!=="object")reject("not valid object, cant copy")
        const copy = structuredClone(object);
        resolve(copy); 


        // //option 2 (option 1 is better, but this was good for practicing)
        // if(object===null || typeof object!=="object")reject("not valid object, cant copy")
        // const copy = Array.isArray(object)? [] : {};
        // for(let key in object){
        //     if(typeof object[key] === "object"){
        //         if(Array.isArray(object[key])){
        //             const copyed = Promise.all(object[key].map(el=>deepCopy(el).then(res=>res)))
        //             copyed.then(res=>{copy[key] = res})
        //         }else{
        //             deepCopy(object[key]).then(res=> copy[key] = res)
        //         }
        //     }else{
        //         copy[key] = object[key]
        //     }
        // }
        // resolve(copy)
    })
 
};   

deepCopy(somObj)
    .then(res=>{
        somObj.name="changed";
        somObj.hobis[2][0].test = "changed"
        console.log(somObj)
        console.log(res)
    })
    .catch(error=>console.log(error))



