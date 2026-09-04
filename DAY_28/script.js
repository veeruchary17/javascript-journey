function getData(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Data Recived");
        },2000)
    })
}
async function Test() {
    const result=await getData();

    console.log(result);
    
}
Test();





async function test() {
    const result = await Promise.resolve("JavaScript");
    console.log(result);
}

test();



async function test() {
    const a = await Promise.resolve(10);
    const b = await Promise.resolve(20);

    console.log(a + b);
}

test();

async function test1() {
    try {
        const result = await Promise.reject("Something went wrong");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

test1();


console.log("A");

async function test2() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test2();

console.log("D");
