let promise = new Promise((resolve, reject)=>{
    console.log("your order ");
    // resolve("promise is resolved");
    reject("promise is rejected");
});
console.log(promise);