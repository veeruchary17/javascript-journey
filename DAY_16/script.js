let tasks=[];
const inputvalue=document.querySelector("#input");
const addbtn=document.querySelector("#addbtn");
const delbtn=document.querySelector("#delbtn");
const task = document.querySelector("#tasks");


addbtn.addEventListener("click",function(){
if(inputvalue.value!=""){
    const div = document.createElement("div");
    div.style.display='flex';
    div.style.gap="5px";
    div.style.marginTop="10px"
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

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


    tasks.push(inputvalue.value);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    span.textContent=inputvalue.value;
    const store=span.textContent;
    checkbox.addEventListener("change" , function(){
        if(checkbox.checked){
            span.textContent=store;
            span.style.textDecoration = "line-through";
        }else{
            span.textContent=store;
            span.style.textDecoration = "none";

        }
    })
    div.appendChild(checkbox);
    div.appendChild(span);


    


    div.appendChild(btn);
    btn.addEventListener("click", function(){
        div.remove();
    })
    task.appendChild(div);
    inputvalue.value="";
    }   
    
    
    delbtn.addEventListener("click",function(){
        tasks.pop(inputvalue.value);
        task.remove();
    })
})

const savedtasks=JSON.parse(localStorage.getItem("tasks"));
for (let savedtask of savedtasks) {
    const div1=document.createElement("div");
    div1.style.display='flex';
    div1.style.gap="5px";
    div1.style.marginTop="10px";
    const checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    const span1=document.createElement("span");
    const btn1=document.createElement("button");
    btn1.textContent="remove";
    btn1.style.backgroundColor = 'orange';
    btn1.style.color = '#ffffff';
    btn1.style.padding = '5px 10px';
    btn1.style.border = 'none';
    btn1.style.borderRadius = '4px';
    btn1.style.fontSize = '9px';
    btn1.style.cursor = 'pointer';


    span1.textContent=savedtask;
    const store1=span1.textContent;
    checkbox1.addEventListener("change" , function(){
        if(checkbox1.checked){
            span1.textContent=store1;
            span1.style.textDecoration = "line-through";
        }else{
            span1.textContent=store1;
            span1.style.textDecoration = "none";

        }
    })
    div1.appendChild(checkbox1);
    div1.appendChild(span1);
    div1.appendChild(btn1);
    btn1.addEventListener("click", function(){
        div1.remove();
    })
    task.appendChild(div1);
}

delbtn.addEventListener("click",function(){
        tasks.pop(inputvalue.value);
        task.remove();
    })