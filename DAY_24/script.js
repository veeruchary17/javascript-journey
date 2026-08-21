const fruits=["apple", "banana"]
const newFruits=[...fruits, "mango", "orange"];
console.log(newFruits);


const task={
    text:"Dsa",
    completed:true

}
const newtasks=[...task ,{
    text:"java script",
    completed:false
}]

const newtask={
    ...task,
    priority:"high"
}
const tasks = {
    text: "DSA",
    completed: false,
    priority: "low"
};

const updatedTask = {
    ...tasks,
    completed: true
};

const newTask = {
    ...task,
    text: "java Script"
};


function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30, 40);


function sum(...numbers){
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    


    return sum;
}