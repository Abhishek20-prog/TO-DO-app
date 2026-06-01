<<<<<<< HEAD
const addBtn = document.querySelector("#addBtn");
const todoContainer = document.querySelector(".todo-container");
const inputBox = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
let tasks=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
function createTask(taskText) {

    // <li class="task">
    const li = document.createElement("li");
    li.classList.add("task");

    // <span>Task Name</span>
    const span = document.createElement("span");
    span.textContent = taskText;

    // <div class="actions">
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // <button class="complete-btn">✔</button>
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "✔";
    completeBtn.style.visibility = "visible";
    // <button class="delete-btn">✖</button>
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✖";
    deleteBtn.style.visibility = "visible";

    // Append buttons to actions div
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    // Append span and actions to li
    li.appendChild(span);
    li.appendChild(actions);

    // Append li to ul
    taskList.appendChild(li);
}
addBtn.addEventListener("click", () => {
    const task = inputBox.value.trim();

    if (!task) return;

    tasks.push(task);
    createTask(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputBox.value = "";
   
});
// localStorage.removeItem("tasks");
=======
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
>>>>>>> 91e0ae98fe234605e6d041562d1724dddceadc86
