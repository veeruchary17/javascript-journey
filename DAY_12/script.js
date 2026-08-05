let students=[];
const input=document.querySelector("#input");
const btn=document.querySelector("#btn")
const list=document.querySelector("#p");

btn.addEventListener("click" , function(){
   let count=1; 
    let output="";
    students.push(input.value);
    console.log(students);
    if(input.value!=""){
        input.value="";
    }for(let student of students){
        
        output+=+count+"."+student+"\n";
       count++;

    }list.textContent="List:\n "+output; 
    
});