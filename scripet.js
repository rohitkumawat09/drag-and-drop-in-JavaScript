function counting(button){
const one=button.closest(".one")
one.querySelector(".count").innerHTML=Number(one.querySelector(".count").innerHTML)+1

}



document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.parentElement.previousElementSibling;
        const contentDiv = input.previousElementSibling;
        const taskText = input.value;
        if (taskText === "") {
            alert("Please add a task.");
            return;
        }
        
        const task = document.createElement("div");
        task.classList.add("task");
        task.draggable = true;
        task.id = `task-${Date.now()}`;

        const text = document.createElement("p");
        text.textContent = taskText;

        const date = document.createElement("span");
        date.textContent = new Date().toLocaleString();  

        task.appendChild(text);
        task.appendChild(date);

        task.addEventListener("dragstart", e => {
            e.dataTransfer.setData("html/text", task.id);
        });

        contentDiv.appendChild(task);

        input.value = "";
        
        counting(button)
        //  const count = container.querySelectorAll(".task").length;

    });
    
});

document.querySelectorAll(".content").forEach(contentDiv => {
    contentDiv.addEventListener("dragover", e => e.preventDefault());

    contentDiv.addEventListener("drop", e => {
        e.preventDefault();
        
        const taskId = e.dataTransfer.getData("html/text");
        const taskElement = document.getElementById(taskId);

        e.target.appendChild(taskElement,);
    });
   
    
});
 
   






