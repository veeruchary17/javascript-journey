const input=document.querySelector("#input");
const p=document.querySelector("#p");
const p1=document.querySelector("#p1");
const p2=document.querySelector("#p2");
let arr=new Array(input.value.trim().split(" "));
input.addEventListener("input", function(){
    
    let count=input.value.trim().length;
    let val=100;
    let ans=val-count;
    
        p1.textContent="Words:"+input.value.trim().split(" ").length;
        p.textContent="Characters:"+count;
        p2.textContent="Remaining:"+ans;
        console.log(input.value.length)
        if(count===0){
            p.style.color = "red";
        }else if(count<20){
            p.style.color = "green";
        }
        else{
            p.style.color = "orange";
        }
    
    
});