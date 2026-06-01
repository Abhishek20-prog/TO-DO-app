let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const btn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const l = document.createElement("li");
        const div = document.createElement("div");
        const compl = document.createElement("button");
        const del = document.createElement("button");
        
        compl.classList.add("complete-btn");
        del.classList.add("delete-btn");
        compl.innerText = "✔";
        del.innerText = "✖";
        
        div.classList.add("actions");
        div.appendChild(compl);
        div.appendChild(del);
        
        l.textContent = task;
        l.appendChild(div);
        l.classList.add("task");
        
        compl.addEventListener("click", () => {
            l.classList.toggle("completed");
        });
        
        del.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });
        
        list.appendChild(l);
    });
    
    list.style.display = tasks.length > 0 ? "block" : "none";
}

btn.addEventListener("click", () => {
    const task = input.value.trim();
    if (!task) return;
    
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
});

renderTasks();
