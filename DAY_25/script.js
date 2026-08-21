let x = 10;       // OUTER x

if (true) {
    let x = 20;   // INNER x
    x = 30;       // changes INNER x
}
console.log(x);   // OUTER x → 10



if (true) {
    let age = 20;
    console.log(age);
}
if (true) {
    let age = 20;
}




if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);




if (true) {
    let x = 20;
    x = 30;
}
console.log(x);




function test() {
    let x = 20;
    console.log(x);
}
test();
console.log(x);



function test() {
    x = 20;
}

test();
console.log(x);



//const y=10;
if (true) {
    y= 20;
}
console.log(y);



function outer() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());



function createCounter() {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());