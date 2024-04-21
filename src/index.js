const inputarea = document.getElementById("inputArea");
const container = document.getElementById("Container");
function addTask(){
    if (inputarea.value === "") {
        alert("Shkruaj DIcka");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputarea.value;
        container.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputarea.value = "";

}
container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

