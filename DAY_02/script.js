const heading=document.querySelector("#heading");
const button=document.querySelector("#btn");
let count = 0;

button.addEventListener("click", function () {
    count++;
    console.log(count + " time clicked");
    button.textContent="clicked " +count+ " time";
});

