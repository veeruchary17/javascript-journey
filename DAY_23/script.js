const obj={
    name:"veeru",
    age:19
}

const {name,age}=obj;
console.log(name);
console.log(age);

const student = {
    name: "Veeru",
    branch: "CSE"
};
function showStudent({name,branch}) {
    console.log(name);
    console.log(branch);
}


const numbers = [10];

const [a, b = 20] = numbers;

console.log(a); 
console.log(b); 

const task = {
    text: "DSA",
    completed: true
};

const {text,completed=false}=task;
console.log(completed);