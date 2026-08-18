let numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(num) {
    return num * 2;
});


let tasks = [
    {text: "DSA", completed: true},
    {text: "JavaScript", completed: false},
    {text: "React", completed: true}
];
const taskNames = tasks.map(function(task) {
    return task.text;
});
const updatedTasks = tasks.map(function(task) {
    return {
        text: task.text,
        completed: task.completed,
        priority: "high"
    };
});

const updatedTasks = tasks.map(function(task) {
    return {
        text: task.text,
        completed: task.completed,
        priority: task.completed ? "high" : "low"
    };
});

const remainingTasks = tasks.filter(function(task) {
    return !task.completed;
});