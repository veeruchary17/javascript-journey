let numbers = [5, 10, 15, 20, 25];
const result = numbers.find(function(num) {
    return num>12;
});
console.log(result);


const tasks = [
    {text: "DSA", completed: true},
    {text: "JavaScript", completed: false},
    {text: "React", completed: true}
];
const completedTask=tasks.find(function(task){
    return task.completed;
})

const task = tasks.find(function(task) {
    return task.text=="JavaScript";
});

const result = tasks.find(function(task) {
    return task.text==="python";
});


const task = tasks.find(function(task) {
    return task.text==="javascript";
});

console.log(task.completed);
