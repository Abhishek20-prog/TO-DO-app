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