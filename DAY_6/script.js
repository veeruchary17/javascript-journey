const heading=document.querySelector("#heading");
const para=document.querySelector("#p");
const input=document.querySelector("#inputtext");
const btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    if(input.value===""){
        console.log("Empty❌");
        document.body.style.backgroundColor="lightcoral";
    }else{
        heading.textContent="Hello " + input.value +" 🥳👋";
        document.body.style.backgroundColor="lightgreen";
    }
})