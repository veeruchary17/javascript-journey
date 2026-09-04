let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
const input=document.querySelector("#input");
const addBtn=document.querySelector("#btn");

const container=document.querySelector("#container");
const statistics=document.querySelector("#statistics")

const allbtn=document.querySelector("#btn1");
const activebtn=document.querySelector("#btn2");
const completedbtn=document.querySelector("#btn3");

addBtn.addEventListener("click",function(){
    if(input.value!=""){
        const obj={
            text:input.value,
            completed:false
        }
        tasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        createTask(obj);
        updateStatistics();
        input.value="";
    }
    
        
    
})

renderTasks(tasks);

function createTask(obj){
    
    const div=document.createElement("div");
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    const span=document.createElement("span");
    span.textContent=obj.text;

    checkbox.checked = obj.completed;
    if(obj.completed){
        span.style.textDecoration="line-through";
    }else{
        span.style.textDecoration="none";
    }
    
    const removeBtn=document.createElement("button");
    removeBtn.textContent="Remove";

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(removeBtn);
    container.appendChild(div);


    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            obj.completed=true;
            span.style.textDecoration="line-through";
        }else{
            obj.completed=false;
            span.style.textDecoration="none";
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateStatistics();
    })
    
    removeBtn.addEventListener("click",function(){
        tasks=tasks.filter(function(task){
            return task!==obj;
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));

        div.remove();
        updateStatistics();
    })
    
    
    
}

function renderTasks(taskList){
    container.textContent = "";
    for(let task of taskList){
        createTask(task);
    }
}
allbtn.addEventListener("click",function(){
    renderTasks(tasks);
});



activebtn.addEventListener("click",function(){
    const activeTasks = tasks.filter(function(task) {
        return !task.completed;
    });
    renderTasks(activeTasks);
})

completedbtn.addEventListener("click", function() {
    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    });
    renderTasks(completedTasks);
});

  

function updateStatistics() {
    const total=tasks.length;

    const completedCount = tasks.reduce(function(count, task) {
        return task.completed? count+1:count;
    }, 0);

    const activeCount = tasks.reduce(function(count, task) {
        return !task.completed? count+1:count;
    },0);

    statistics.textContent="All :"+ total+" |  "+"Completed :"+ completedCount+" |  "+"Active :"+ activeCount;

        
}updateStatistics();