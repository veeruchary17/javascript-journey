const promise=new Promise(function(resolve,reject){
    resolve("successed");
});

promise.then(function(result){
    console.log(result);
});
promise.catch(function(error){
    console.log(error);
})




const prom=new Promise(function(resolve,reject){
    reject("Failed");
})
prom.catch(function(result){
    console.log(result);
});
console.log("A")
const promises=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("success");
    },2000);
})

promises.then(function(output){
    console.log(output);
});
console.log("C");
