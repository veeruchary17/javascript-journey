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
    span.style.fontSize="bold"

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
    
    span.textContent=inputvalue.value;
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

