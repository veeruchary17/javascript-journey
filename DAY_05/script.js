const heading=document.querySelector("#heading");
const para=document.querySelector("#p");
const input=document.querySelector("#inputtext");
const btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    heading.textContent="Hello "+ input.value +"👋";
    para.textContent="welcome to javascript 🎉"
    input.value="";
    btn.textContent="welcome🚀";
    document.body.style.backgroundColor = "lightblue";
    heading.style.color = "darkblue";

})