const heading=document.querySelector("#heading");
const p=document.querySelector("#p");
const input=document.querySelector("#inputname");
const btn=document.querySelector("#btn");
btn.addEventListener("click", function(){
    
    if(input.value==""){
        p.textContent="You have not enterd your username❌";
        document.body.style.backgroundColor="red";
    }
    else if (input.value.length>=3 && input.value.length<=12 ) {
        if(input.value== "veeru" ||input.value== "leo" ){
            p.textContent = "Special User 🌟";
        }
        else{p.textContent="Welcome🥳";
            document.body.style.backgroundColor="lightgreen";
        }
    } else {
       p.textContent="Enter vaild username❌";
       document.body.style.backgroundColor="lightyellow";
        
    }
});