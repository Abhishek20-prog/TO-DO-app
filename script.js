const addBtn = document.querySelector("#addBtn");
const inputBox = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Create task element
function createTask(taskObj) {
    const li = document.createElement("li");
    li.classList.add("task");

    if (taskObj.completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = taskObj.text;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "✔";
    completeBtn.style.visibility="visible";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "✖";
    deleteBtn.style.visibility="visible";
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    // Complete task
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");

        taskObj.completed = li.classList.contains("completed");

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // Delete task
    deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter(task => task !== taskObj);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();
    });
}

// Show saved tasks on page load
tasks.forEach(task => {
    createTask(task);
});

// Add task
addBtn.addEventListener("click", () => {
    const taskText = inputBox.value.trim();

    if (!taskText) return;

    const taskObj = {
        text: taskText,
        completed: false
    };

    tasks.push(taskObj);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(taskObj);

    inputBox.value = "";
});

// Add task on Enter key
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});