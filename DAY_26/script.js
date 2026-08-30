let numbers=[1,2,3,4,5,6];
const total=numbers.reduce(function(sum,num){
    return sum+num;

},0);
console.log(total);

const Totalproduct=numbers.reduce(function(product,num){
    return product*num;
},1);
console.log(Totalproduct);

const tasks = [
    { text: "DSA", completed: true },
    { text: "JavaScript", completed: false },
    { text: "Java", completed: true }
];

const countTasks=tasks.reduce(function(count,task){
    if(task.completed){
        return count+1;
    }
    return count;
},0);

console.log(countTasks);

const taskNames= tasks.map(task => task.text);
const countTask=tasks.reduce((count,task)=> task.completed ? count+1:count,0);

console.log(countTask);




const count =tasks.reduce((count,task)=> task.completed ? count+1:count,0);