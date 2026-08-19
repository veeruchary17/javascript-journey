const square=(num)=>{
    return num*num;
}

const greet=(name) =>  "Hello " + name; 

const taskNames = tasks.map(function(task) {
    return task.text;
});

const taskNames= tasks.map(task => task.text);



const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

const evenNumbers=numbers.filter(num => num % 2 === 0)