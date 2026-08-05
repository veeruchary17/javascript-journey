const heading=document.querySelector("#heading");
const input=document.querySelector("#textinput");
const btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    console.log("Hello " + input.value + " whats your agenda today");
    heading.textContent="Hello go and check console for your output😂 "+input.value;
    input.value="";
});
