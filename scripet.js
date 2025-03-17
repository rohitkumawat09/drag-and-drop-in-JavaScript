// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => button.addEventListener("click", addTask));


// function addTask(e) {
//     const btn = e.target;
//     const input = btn.parentElement.previousElementSibling;

//     const taskText = input.value.trim();
//     const newTask = document.createElement("div");
//     const text = document.createElement("p");
//     const date = document.createElement("span");
//     text.textContent = taskText;
//     date.textContent = new Date().toLocaleString();
//     newTask.append(text, date);
//     btn.parentElement.previousElementSibling.previousElementSibling.append(newTask)
//     input.value = "";
// }

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.parentElement.previousElementSibling;
        const contentDiv = input.previousElementSibling;

        const taskText = input.value.trim();

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
            e.dataTransfer.setData("text/plain", task.id);
        });

        contentDiv.appendChild(task);

        input.value = "";
    });
});

document.querySelectorAll(".content").forEach(contentDiv => {
    contentDiv.addEventListener("dragover", e => e.preventDefault());

    contentDiv.addEventListener("drop", e => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        const taskElement = document.getElementById(taskId);

        e.target.appendChild(taskElement);
    });
});
