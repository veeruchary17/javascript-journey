let tasks=[];

const inputvalue=document.querySelector("#input");
const addbtn=document.querySelector("#addbtn");
const delbtn=document.querySelector("#delbtn");
const task = document.querySelector("#tasks");

//adds tasks
addbtn.addEventListener("click",function(){
    if(inputvalue.value!=""){

        const obj = {
            text: inputvalue.value,
            completed: false
        };
        tasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(tasks));


        createTask(obj);
        inputvalue.value="";
        }   
        
})


//data is restored after refresh
const savedtasks=JSON.parse(localStorage.getItem("tasks"));
for (let savedtask of savedtasks) {
    createTask(savedtask);
}
delbtn.addEventListener("click",function(){
        tasks.pop(inputvalue.value);
        task.remove();
})



//function 
function createTask(obj) {
    const div=document.createElement("div");
    div.style.display='flex';
    div.style.gap="5px";
    div.style.marginTop="10px"


    const checkbox=document.createElement("input");
    checkbox.type="checkbox";


    const span=document.createElement("span");
    span.style.fontSize="16px";


    const btn=document.createElement("button");
    btn.textContent="remove";
    btn.style.backgroundColor = 'orange';
    btn.style.color = '#ffffff';
    btn.style.padding = '5px 10px';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.fontSize = '9px';
    btn.style.cursor = 'pointer';



    span.textContent=obj.text;
    checkbox.checked=obj.completed;
    if (obj.completed) {
            span.style.textDecoration = "line-through";
    }else{
        span.style.textDecoration ="none";
    }
    const store=span.textContent;
    checkbox.addEventListener("change" , function(){
        obj.completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        if (obj.completed) {
            span.style.textDecoration = "line-through";
        }else{
            span.style.textDecoration ="none";
        }
        

       
    })
    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(btn);
    

    btn.addEventListener("click", function() {
        div.remove();
    });
    task.appendChild(div);
}



