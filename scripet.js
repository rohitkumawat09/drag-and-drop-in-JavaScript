const modifyCountArr = [];

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
            modifyCountArr.length=0
            const one= e.target.closest(".one")
            modifyCountArr.push(one.querySelector(".count"))
        });

        contentDiv.appendChild(task);

        input.value = "";
        
        counting(button)
        modifyCounts(null, one.querySelector(".count"));

    });
    
});

document.querySelectorAll(".content").forEach(contentDiv => {
    contentDiv.addEventListener("dragover", e => e.preventDefault());

    contentDiv.addEventListener("drop", e => {
        e.preventDefault();
        
        const taskId = e.dataTransfer.getData("html/text");
        const taskElement = document.getElementById(taskId);
        e.target.appendChild(taskElement,);

        const one=taskElement.closest(".one")
        modifyCountArr.push(one.querySelector(".count"))
        modifyCounts(...modifyCountArr)
    });
   
    
});
 
   


function modifyCounts(countToDecrement = null, countToIncrement = null) {
  if (countToIncrement) {
    countToIncrement.innerText = Number(countToIncrement.innerText) + 1;
  }
  if (countToDecrement) {
    countToDecrement.innerText = Number(countToDecrement.innerText) - 1;
  }
  modifyCountArr.length = 0;
}



