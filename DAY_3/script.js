const title=document.querySelector("#title");
const btn=document.querySelector("#btn");
btn.addEventListener("click", function(){
    title.style.color = "red";
    title.style.fontSize = "60px";
    document.body.style.backgroundColor = "lightblue";

})