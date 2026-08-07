let tasks=[];
const inputvalue=document.querySelector("#input");
const addbtn=document.querySelector("#addbtn");
const delbtn=document.querySelector("#delbtn");
const task = document.querySelector("#tasks");


addbtn.addEventListener("click",function(){
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span=document.createElement("span");
    
    tasks.push(inputvalue.value);
    
    span.textContent=inputvalue.value;
    
    if(inputvalue.value!=""){
        inputvalue.value="";
    }
    div.appendChild(checkbox);
    div.appendChild(span)
    task.appendChild(div);
    delbtn.addEventListener("click",function(){
    tasks.pop(inputvalue.value);
    div.remove();
})
})

