const heading=document.querySelector("#heading");
const p=document.querySelector("#p");
const input=document.querySelector("#inputname");
const btn=document.querySelector("#btn");
btn.addEventListener("click", function(){
    if(input.value==""){
        p.textContent="You have not enterd your name❌";
        document.body.style.backgroundColor="red";
    }
    else if (input.value.length<3) {
        p.textContent="Enter vaild name❌";
       document.body.style.backgroundColor="lightyellow";
        
    } else {
        p.textContent="Welcome🥳";
        document.body.style.backgroundColor="lightgreen"
        
    }
})