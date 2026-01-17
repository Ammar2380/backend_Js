// // promise - pending - resolved - reject


// let promise = new Promise((resolve,reject)=>{ 
//     console.log("iam promise")
//     resolve('success') 
//     reject('some error') // shows as error
// })

function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    })
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success")
        }, 4000);
    })
}

console.log("fetching data1........")
let p1 = asyncFunc1(); // this function returns promise
p1.then((res)=>{            // promised is unfilled 
    console.log(res);
    console.log("fetching data2........") 
    let p2 = asyncFunc2 ();   // it will wait till p1 is resolved
    p2.then((res)=>{
    console.log(res);
});
});
 
// many .then is called promise


