const pswd=document.querySelector("#pswd");
const show=document.querySelector("#show");
const p=document.querySelector("#p");
const btn=document.querySelector("#btn");
show.addEventListener("change" , function(){
    if(show.checked){
        pswd.type="text";
    }else{
        pswd.type="password";
    }
})
btn.addEventListener("click" , function(){
    if(pswd.value.length<=8){
       p.textContent="weak password ❌"; 
        p.style.color="red";
    }else{
        
        p.textContent= "Strong Password ✅";
        p.style.color="green";
    }
})