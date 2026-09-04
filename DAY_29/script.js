
const container=document.querySelector("#users");
async function getusers(){
    const loading = document.createElement("p");
    loading.className="loading";
    loading.textContent = "Loading users...";
    container.appendChild(loading);

    try{
        const responce=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!responce.ok){
            throw new Error("Something went wrong");
        }
        const users=await responce.json();
        loading.remove();

        for(let user of users){
            const div=document.createElement("div");
            const name=document.createElement("p");
            name.className = "name";

            const username=document.createElement("p");
            username.className="username";

            const email=document.createElement("p");
            email.className="email";

            name.textContent=user.name;
            username.textContent="username:"+user.username;
            email.textContent="email:"+user.email;


            div.appendChild(name);
            div.appendChild(username);
            div.appendChild(email);
            container.appendChild(div);
        }
    }catch(error){
        const p1=document.createElement("p");
        p1.textContent="Something went wrong. Please wait for a moment and try again."
        container.appendChild(p1);
        
    }    

}
getusers();




